import * as THREE from 'three';

// Controles en primera persona para el modo "Dentro": arrastrar para mirar, joystick/teclas para caminar,
// pellizco o rueda para avanzar. Se mueve hacia donde miras (modo vuelo).
export class FlyControls {
  constructor(camera, dom, joyEl) {
    this.camera = camera;
    this.dom = dom;
    this.joyEl = joyEl;
    this.enabled = false;
    this.yaw = 0;
    this.pitch = 0;
    this.speed = 1;
    this.keys = Object.create(null);
    this.vel = new THREE.Vector3();
    this.joy = { x: 0, y: 0, id: null };
    this.pointers = new Map();
    this.pinch = 0;
    this.lastPinch = 0;
    this.wheel = 0;
    this.onInteract = null;
    this.limits = null; // { yaw:[a,b], pitch:[a,b], min:Vector3, max:Vector3 }
    this._euler = new THREE.Euler(0, 0, 0, 'YXZ');
    this._f = new THREE.Vector3();
    this._r = new THREE.Vector3();
    this._t = new THREE.Vector3();

    this._down = this._down.bind(this);
    this._move = this._move.bind(this);
    this._up = this._up.bind(this);
    dom.addEventListener('pointerdown', this._down);
    dom.addEventListener('pointermove', this._move);
    dom.addEventListener('pointerup', this._up);
    dom.addEventListener('pointercancel', this._up);
    dom.addEventListener('wheel', (e) => {
      if (!this.enabled) return;
      e.preventDefault();
      this.wheel += -Math.sign(e.deltaY) * Math.min(3, Math.abs(e.deltaY) / 60);
      this._ping();
    }, { passive: false });
    window.addEventListener('keydown', (e) => {
      if (!this.enabled || e.target.tagName === 'INPUT') return;
      this.keys[e.code] = true;
      if (e.code.startsWith('Arrow') || e.code === 'Space') e.preventDefault();
      this._ping();
    });
    window.addEventListener('keyup', (e) => { this.keys[e.code] = false; });
    window.addEventListener('blur', () => { this.keys = Object.create(null); });

    if (joyEl) {
      const knob = joyEl.querySelector('.knob');
      const set = (e) => {
        const r = joyEl.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2, R = r.width / 2;
        let dx = (e.clientX - cx) / R, dy = (e.clientY - cy) / R;
        const l = Math.hypot(dx, dy);
        if (l > 1) { dx /= l; dy /= l; }
        this.joy.x = dx; this.joy.y = dy;
        knob.style.transform = `translate(${dx * R * 0.55}px, ${dy * R * 0.55}px)`;
      };
      joyEl.addEventListener('pointerdown', (e) => {
        e.preventDefault(); e.stopPropagation();
        this.joy.id = e.pointerId;
        joyEl.setPointerCapture(e.pointerId);
        joyEl.classList.add('active');
        set(e); this._ping();
      });
      joyEl.addEventListener('pointermove', (e) => { if (e.pointerId === this.joy.id) { set(e); this._ping(); } });
      const end = (e) => {
        if (e.pointerId !== this.joy.id) return;
        this.joy.id = null; this.joy.x = 0; this.joy.y = 0;
        knob.style.transform = '';
        joyEl.classList.remove('active');
      };
      joyEl.addEventListener('pointerup', end);
      joyEl.addEventListener('pointercancel', end);
    }
  }

  _ping() { this.onInteract && this.onInteract(); }

  syncFromCamera() {
    this._euler.setFromQuaternion(this.camera.quaternion, 'YXZ');
    this.yaw = this._euler.y;
    this.pitch = this._euler.x;
    this.vel.set(0, 0, 0);
  }

  _down(e) {
    if (!this.enabled) return;
    this.dom.setPointerCapture && this.dom.setPointerCapture(e.pointerId);
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.pointers.size === 2) this.lastPinch = this._pinchDist();
    this._ping();
  }
  _pinchDist() {
    const p = [...this.pointers.values()];
    return Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
  }
  _move(e) {
    if (!this.enabled || !this.pointers.has(e.pointerId)) return;
    const prev = this.pointers.get(e.pointerId);
    const dx = e.clientX - prev.x, dy = e.clientY - prev.y;
    prev.x = e.clientX; prev.y = e.clientY;
    if (this.pointers.size === 1) {
      const k = 0.003 * (60 / Math.max(30, this.camera.fov));
      this.yaw += dx * k;
      this.pitch += dy * k;
      this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch));
    } else if (this.pointers.size === 2) {
      const d = this._pinchDist();
      this.pinch += (d - this.lastPinch) * 0.012;
      this.lastPinch = d;
    }
    this._ping();
  }
  _up(e) {
    this.pointers.delete(e.pointerId);
    if (this.pointers.size === 2) this.lastPinch = this._pinchDist();
  }

  update(dt) {
    if (!this.enabled) return;
    const k = this.keys;
    let f = 0, s = 0, u = 0;
    if (k.KeyW || k.ArrowUp) f += 1;
    if (k.KeyS || k.ArrowDown) f -= 1;
    if (k.KeyA || k.ArrowLeft) s -= 1;
    if (k.KeyD || k.ArrowRight) s += 1;
    if (k.KeyE || k.Space || k.PageUp) u += 1;
    if (k.KeyQ || k.KeyC || k.PageDown) u -= 1;
    f += -this.joy.y;
    s += this.joy.x;
    const boost = k.ShiftLeft || k.ShiftRight ? 2.6 : 1;
    const cp = Math.cos(this.pitch);
    this._f.set(-Math.sin(this.yaw) * cp, Math.sin(this.pitch), -Math.cos(this.yaw) * cp);
    this._r.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    this._t.set(0, 0, 0)
      .addScaledVector(this._f, f)
      .addScaledVector(this._r, s);
    this._t.y += u;
    this._t.multiplyScalar(this.speed * boost);
    // impulsos de pellizco y rueda
    const impulse = (this.pinch + this.wheel * 0.35) * this.speed;
    this.pinch = 0; this.wheel = 0;
    this.vel.lerp(this._t, 1 - Math.exp(-dt * 8));
    this.camera.position.addScaledVector(this.vel, dt);
    if (impulse) this.camera.position.addScaledVector(this._f, impulse * 0.5);
    const L = this.limits;
    if (L) {
      // límites suaves: siempre queda algo del cuadro a la vista
      this.yaw = Math.max(L.yaw[0], Math.min(L.yaw[1], this.yaw));
      this.pitch = Math.max(L.pitch[0], Math.min(L.pitch[1], this.pitch));
      this.camera.position.clamp(L.min, L.max);
    }
    this._euler.set(this.pitch, this.yaw, 0, 'YXZ');
    this.camera.quaternion.setFromEuler(this._euler);
  }
}
