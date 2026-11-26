import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { FlyControls } from './controls.js';
import { sample } from './imageproc.js';

const FOV_REF = 40; // perspectiva "virtual" con la que se reconstruye el cuadro
const IS_MOBILE = matchMedia('(pointer: coarse)').matches || /Android|iPhone|iPad/i.test(navigator.userAgent);

const ease = {
  inOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  out: (t) => 1 - Math.pow(1 - t, 3),
  sine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
};

// ───────────────────────── Shaders ─────────────────────────
const COMMON = /* glsl */`
uniform sampler2D uDepth0; uniform sampler2D uDepth1; uniform float uDepthMix;
uniform sampler2D uBgDepth0; uniform sampler2D uBgDepth1;
uniform float uAmount; uniform float uNearF; uniform float uFarF; uniform float uZc; uniform vec2 uSize;
float nearFG(vec2 uv){ return mix(texture2D(uDepth0, uv).r, texture2D(uDepth1, uv).r, uDepthMix); }
float nearBG(vec2 uv){ return mix(texture2D(uBgDepth0, uv).r, texture2D(uBgDepth1, uv).r, uDepthMix); }
float zNearV(){ return uZc * (1.0 - uNearF * uAmount); }
float zFarV(){ return uZc * (1.0 + uFarF * uAmount); }
float invZ(float n){ return mix(1.0 / zFarV(), 1.0 / zNearV(), clamp(n, 0.0, 1.0)); }
vec3 unproject(vec2 uv, float n, float push){
  float z = push / invZ(n);
  float t = z / uZc;
  return vec3((uv - 0.5) * uSize * t, uZc - z);
}
`;

const FRAG_COMMON = /* glsl */`
uniform vec3 uFogColor; uniform float uFogNear; uniform float uFogFar; uniform float uFog;
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
vec3 applyFog(vec3 c, float d){ return mix(c, uFogColor, uFog * smoothstep(uFogNear, uFogFar, d)); }
`;

const SURF_VERT = /* glsl */`
${COMMON}
uniform vec2 uTexel; uniform float uIsBg;
varying vec2 vUv; varying float vEdge; varying float vDist; varying vec3 vPos;
void main(){
  vUv = uv;
  float n; float e = 0.0;
  if (uIsBg > 0.5) {
    n = nearBG(uv);
  } else {
    n = nearFG(uv);
    e = max(e, abs(n - nearFG(uv + vec2(uTexel.x, 0.0))));
    e = max(e, abs(n - nearFG(uv - vec2(uTexel.x, 0.0))));
    e = max(e, abs(n - nearFG(uv + vec2(0.0, uTexel.y))));
    e = max(e, abs(n - nearFG(uv - vec2(0.0, uTexel.y))));
  }
  vEdge = (1.0 / zNearV() - 1.0 / zFarV()) * e / invZ(n);
  vec3 p = unproject(uv, n, uIsBg > 0.5 ? 1.0 + 0.012 * uAmount : 1.0);
  vPos = p;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vDist = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`;

const SURF_FRAG = /* glsl */`
${FRAG_COMMON}
uniform sampler2D uMap; uniform sampler2D uBgMap; uniform vec2 uMapTexel;
uniform float uEdge; uniform float uImpasto; uniform vec3 uLightPos; uniform vec3 uCamLocal; uniform float uLightAmt;
uniform float uSpot; uniform float uReveal; uniform float uIsBg; uniform float uOpacity; uniform vec2 uSize;
varying vec2 vUv; varying float vEdge; varying float vDist; varying vec3 vPos;
float lum(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
void main(){
  if (uIsBg < 0.5 && vEdge > uEdge) discard;
  if (uReveal > 0.001 && hash(floor(vUv * 700.0)) < uReveal) discard;
  vec3 col = uIsBg > 0.5 ? texture2D(uBgMap, vUv).rgb : texture2D(uMap, vUv).rgb;
  if (uLightAmt > 0.001) {
    vec3 L = normalize(uLightPos - vPos);
    vec3 V = normalize(uCamLocal - vPos);
    vec3 nrm = vec3(0.0, 0.0, 1.0);
    if (uImpasto > 0.001 && uIsBg < 0.5) {
      float lx = lum(texture2D(uMap, vUv + vec2(uMapTexel.x, 0.0)).rgb) - lum(texture2D(uMap, vUv - vec2(uMapTexel.x, 0.0)).rgb);
      float ly = lum(texture2D(uMap, vUv + vec2(0.0, uMapTexel.y)).rgb) - lum(texture2D(uMap, vUv - vec2(0.0, uMapTexel.y)).rgb);
      nrm = normalize(vec3(-lx * uImpasto * 5.0, -ly * uImpasto * 5.0, 1.0));
    }
    float d = max(dot(nrm, L), 0.0);
    float spec = pow(max(dot(reflect(-L, nrm), V), 0.0), 28.0) * 0.16 * uImpasto;
    vec2 q = (vUv - 0.5) * 2.0;
    float spot = mix(1.0, 0.86 + 0.2 * exp(-dot(q, q) * 1.4), uSpot);
    col = col * mix(1.0, (0.7 + 0.42 * d) * spot, uLightAmt) + spec * uLightAmt;
  }
  col = applyFog(col, vDist);
  gl_FragColor = vec4(col, uOpacity);
}
`;

const POINT_VERT = /* glsl */`
${COMMON}
attribute vec2 aDir;
uniform float uTime; uniform float uAnim; uniform float uPointScale; uniform float uMaxPoint; uniform float uCellWorld;
uniform float uFlowAmp; uniform float uIsBg; uniform float uReveal; uniform sampler2D uBgMap;
varying vec2 vUv; varying float vDist; varying float vShow; varying float vGlow; varying float vOv;
void main(){
  vec2 uv0 = position.xy; float rnd = position.z;
  vUv = uv0;
  float show = step(rnd, uReveal);
  float n;
  if (uIsBg > 0.5) { show *= step(0.35, texture2D(uBgMap, uv0).a); n = nearBG(uv0); }
  else { n = nearFG(uv0); }
  vec3 p = unproject(uv0, n, uIsBg > 0.5 ? 1.0 + 0.01 * uAmount : 1.0);
  float t = (uZc - p.z) / uZc;
  float dl = length(aDir);
  vec2 dn = dl > 0.001 ? aDir / dl : vec2(1.0, 0.0);
  float along = dot((uv0 - 0.5) * uSize / uSize.y, dn);
  float ph = along * 46.0 - uTime * 2.2 + rnd * 0.9;
  float amp = uFlowAmp * uAnim;
  p.xy += aDir * sin(ph) * amp * uCellWorld * t;
  p.z += sin(uTime * 0.7 + rnd * 40.0) * 0.002 * uZc * uAnim;
  vOv = 1.5 + 2.0 * amp * dl;
  vGlow = uAnim * max(0.0, sin(uTime * (1.2 + rnd * 2.0) + rnd * 60.0)) * step(0.93, fract(rnd * 17.0));
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vDist = -mv.z;
  gl_Position = projectionMatrix * mv;
  float size = uCellWorld * vOv * t * uPointScale / max(0.0005, -mv.z);
  // al acercarte, las partículas se encogen y desaparecen (se atraviesan sin taparte la vista)
  float nearFade = smoothstep(uZc * 0.035, uZc * 0.16, -mv.z);
  size *= nearFade;
  if (nearFade < 0.02) show = 0.0;
  gl_PointSize = show > 0.5 ? clamp(size, 1.0, min(uMaxPoint, 160.0)) : 0.0;
  vShow = show;
}
`;

const POINT_FRAG = /* glsl */`
${FRAG_COMMON}
uniform sampler2D uMap; uniform sampler2D uBgMap; uniform vec2 uCell; uniform float uIsBg;
varying vec2 vUv; varying float vDist; varying float vShow; varying float vGlow; varying float vOv;
void main(){
  if (vShow < 0.5) discard;
  vec2 pc = gl_PointCoord - 0.5;
  if (dot(pc, pc) > 0.25) discard;
  vec2 uv = vUv + vec2(pc.x, -pc.y) * uCell * vOv;
  vec3 col = uIsBg > 0.5 ? texture2D(uBgMap, uv).rgb : texture2D(uMap, uv).rgb;
  col += col * vGlow * 0.6;
  col = applyFog(col, vDist);
  gl_FragColor = vec4(col, 1.0);
}
`;

const SPARK_VERT = /* glsl */`
attribute vec3 color; attribute float aAlpha; attribute float aSize;
uniform float uPointScale; uniform float uMaxPoint; uniform float uSparkSize;
varying vec3 vColor; varying float vAlpha;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(aSize * uSparkSize * uPointScale / max(0.0005, -mv.z), 1.0, uMaxPoint);
  vColor = color; vAlpha = aAlpha;
}
`;
const SPARK_FRAG = /* glsl */`
uniform float uSparkAlpha;
varying vec3 vColor; varying float vAlpha;
void main(){
  vec2 pc = gl_PointCoord - 0.5;
  float d = length(pc) * 2.0;
  if (d > 1.0) discard;
  float a = pow(1.0 - d, 1.8) * vAlpha * uSparkAlpha;
  gl_FragColor = vec4(vColor * a, 1.0);
}
`;

const CONE_VERT = /* glsl */`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;
const CONE_FRAG = /* glsl */`
uniform float uAlpha; varying vec2 vUv;
void main(){
  float a = uAlpha * (0.3 + 0.7 * vUv.y);
  gl_FragColor = vec4(vec3(1.0, 0.93, 0.8) * a, 1.0);
}
`;

// ───────────────────────── Texturas procedurales ─────────────────────────
function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
function rand(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

function parquetTex() {
  return canvasTex(1024, 1024, (g, w, h) => {
    const r = rand(7);
    g.fillStyle = '#3a2817'; g.fillRect(0, 0, w, h);
    const pw = 64, pl = 384;
    for (let x = 0; x < w; x += pw) {
      let y = -Math.floor(r() * pl);
      while (y < h) {
        const len = pl * (0.7 + r() * 0.6);
        const base = 38 + r() * 26;
        g.fillStyle = `hsl(${26 + r() * 8}, ${38 + r() * 14}%, ${base * 0.42}%)`;
        g.fillRect(x + 1, y + 1, pw - 2, len - 2);
        for (let k = 0; k < 7; k++) {
          g.strokeStyle = `rgba(0,0,0,${0.05 + r() * 0.08})`;
          g.lineWidth = 1 + r() * 2;
          const gx = x + 4 + r() * (pw - 8);
          g.beginPath(); g.moveTo(gx, y); g.bezierCurveTo(gx + r() * 6 - 3, y + len * 0.3, gx + r() * 6 - 3, y + len * 0.7, gx, y + len); g.stroke();
        }
        g.fillStyle = 'rgba(0,0,0,0.5)'; g.fillRect(x, y + len - 1, pw, 2);
        y += len;
      }
      g.fillStyle = 'rgba(0,0,0,0.55)'; g.fillRect(x, 0, 1.5, h);
    }
  });
}
function linenTex() {
  return canvasTex(512, 512, (g, w, h) => {
    const r = rand(11);
    g.fillStyle = '#cbbd9f'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < w; i += 2) {
      g.fillStyle = `rgba(90,70,40,${0.05 + r() * 0.08})`; g.fillRect(i, 0, 1, h);
      g.fillStyle = `rgba(255,250,230,${0.03 + r() * 0.06})`; g.fillRect(0, i, w, 1);
    }
    for (let i = 0; i < 2400; i++) { g.fillStyle = `rgba(70,50,25,${r() * 0.12})`; g.fillRect(r() * w, r() * h, 1 + r() * 3, 1); }
  });
}
function woodTex(dark) {
  return canvasTex(512, 512, (g, w, h) => {
    const r = rand(dark ? 3 : 5);
    g.fillStyle = dark ? '#4a3322' : '#8a6a46'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 90; i++) {
      g.strokeStyle = `rgba(${dark ? '20,10,4' : '60,38,18'},${0.06 + r() * 0.12})`;
      g.lineWidth = 1 + r() * 3;
      const y = r() * h;
      g.beginPath(); g.moveTo(0, y);
      for (let x = 0; x <= w; x += 32) g.lineTo(x, y + Math.sin(x * 0.01 + i) * 6 + (r() - 0.5) * 3);
      g.stroke();
    }
  });
}
function wallTex() {
  return canvasTex(64, 512, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, '#120f0d'); gr.addColorStop(0.55, '#2b2420'); gr.addColorStop(0.86, '#231d19'); gr.addColorStop(0.87, '#15110e'); gr.addColorStop(1, '#1b1612');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  });
}
function plaqueTex(p, artistName) {
  return canvasTex(1024, 512, (g, w, h) => {
    g.fillStyle = '#f2ece0'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#1d1a16';
    g.font = '600 64px "Cormorant Garamond", Georgia, serif';
    wrap(g, p.title, 60, 120, w - 120, 70);
    g.font = '500 40px Inter, system-ui, sans-serif';
    g.fillStyle = '#4a4238';
    g.fillText(`${artistName} · ${p.year}`, 60, 300);
    g.font = '400 34px Inter, system-ui, sans-serif';
    g.fillText(`${p.tech} · ${fmtCm(p.sizeCm)}`, 60, 360);
    g.fillText(p.museum, 60, 412);
  });
}
function backLabelTex(p, artistName) {
  return canvasTex(512, 320, (g, w, h) => {
    g.fillStyle = '#efe6cf'; g.fillRect(0, 0, w, h);
    g.strokeStyle = '#8f7f60'; g.lineWidth = 6; g.strokeRect(14, 14, w - 28, h - 28);
    g.fillStyle = '#3b3326';
    g.font = 'italic 600 40px "Cormorant Garamond", Georgia, serif';
    wrap(g, p.title, 40, 84, w - 80, 44);
    g.font = '500 26px Inter, system-ui, sans-serif';
    g.fillText(artistName, 40, 214);
    g.fillText(p.museum, 40, 252);
  });
}
function wrap(g, text, x, y, maxW, lh) {
  const words = text.split(' ');
  let line = '';
  for (const wd of words) {
    const t = line ? line + ' ' + wd : wd;
    if (g.measureText(t).width > maxW && line) { g.fillText(line, x, y); line = wd; y += lh; } else line = t;
  }
  if (line) g.fillText(line, x, y);
}
export const fmtCm = (s) => `${String(s[0]).replace('.', ',')} × ${String(s[1]).replace('.', ',')} cm`;

function halfTex(N, w, h) {
  const d = new Uint16Array(w * h);
  for (let y = 0; y < h; y++) {
    const src = (h - 1 - y) * w, dst = y * w;
    for (let x = 0; x < w; x++) d[dst + x] = THREE.DataUtils.toHalfFloat(N[src + x]);
  }
  const t = new THREE.DataTexture(d, w, h, THREE.RedFormat, THREE.HalfFloatType);
  t.minFilter = THREE.LinearFilter; t.magFilter = THREE.LinearFilter;
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  t.generateMipmaps = false; t.unpackAlignment = 1;
  t.needsUpdate = true;
  return t;
}
function rgbaTex(rgba, w, h) {
  const d = new Uint8Array(w * h * 4);
  for (let y = 0; y < h; y++) d.set(rgba.subarray((h - 1 - y) * w * 4, (h - y) * w * 4), y * w * 4);
  const t = new THREE.DataTexture(d, w, h, THREE.RGBAFormat, THREE.UnsignedByteType);
  t.minFilter = THREE.LinearFilter; t.magFilter = THREE.LinearFilter;
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  t.generateMipmaps = false;
  t.needsUpdate = true;
  return t;
}

// ───────────────────────── Visor ─────────────────────────
export class Viewer {
  constructor(canvas, joyEl) {
    this.canvas = canvas;
    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    r.setPixelRatio(Math.min(devicePixelRatio || 1, IS_MOBILE ? 1.75 : 2));
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.05;
    const gl = r.getContext();
    this.maxPoint = Math.min(256, gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[1] || 64);
    this.maxAniso = r.capabilities.getMaxAnisotropy();

    this.scene = new THREE.Scene();
    this.bgMuseum = new THREE.Color(0x0e0b09);
    this.bgDark = new THREE.Color(0x07070a);
    this.scene.background = this.bgMuseum.clone();
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.01, 500);

    const pmrem = new THREE.PMREMGenerator(r);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environmentIntensity = 0.42;
    pmrem.dispose();

    this.hemi = new THREE.HemisphereLight(0xfff1dc, 0x2a2018, 0.7);
    this.scene.add(this.hemi);
    this.spot = new THREE.SpotLight(0xfff0d8, 60, 0, Math.PI / 7, 0.55, 1.6);
    this.scene.add(this.spot, this.spot.target);

    const dummy = halfTex(new Float32Array([0.5, 0.5, 0.5, 0.5]), 2, 2);
    const dummyRGBA = rgbaTex(new Uint8Array(16).fill(128), 2, 2);
    this.U = {
      uMap: { value: dummyRGBA }, uBgMap: { value: dummyRGBA },
      uDepth0: { value: dummy }, uDepth1: { value: dummy }, uDepthMix: { value: 0 },
      uBgDepth0: { value: dummy }, uBgDepth1: { value: dummy },
      uAmount: { value: 0 }, uNearF: { value: 0.38 }, uFarF: { value: 0.9 },
      uZc: { value: 1 }, uSize: { value: new THREE.Vector2(1, 1) },
      uTexel: { value: new THREE.Vector2(1 / 256, 1 / 256) },
      uMapTexel: { value: new THREE.Vector2(1 / 1280, 1 / 1280) },
      uEdge: { value: 0.06 },
      uImpasto: { value: 0 }, uLightPos: { value: new THREE.Vector3(0, 1, 2) }, uCamLocal: { value: new THREE.Vector3(0, 0, 2) },
      uLightAmt: { value: 1 }, uSpot: { value: 1 },
      uFogColor: { value: new THREE.Color(0, 0, 0) }, uFogNear: { value: 100 }, uFogFar: { value: 200 }, uFog: { value: 0 },
      uTime: { value: 0 }, uAnim: { value: 0 }, uReveal: { value: 0 }, uOpacity: { value: 1 },
      uPointScale: { value: 600 }, uMaxPoint: { value: this.maxPoint },
      uCellWorld: { value: 0.003 }, uCell: { value: new THREE.Vector2(1 / 300, 1 / 300) }, uOverlap: { value: 1.6 },
      uFlowAmp: { value: 1 }, uSparkSize: { value: 0.01 }, uSparkAlpha: { value: 0 },
    };
    this.pointReveal = { value: 0 };

    this.pg = new THREE.Group();
    this.scene.add(this.pg);
    this.museum = new THREE.Group();
    this.scene.add(this.museum);
    this.props = new THREE.Group(); // marco, trasera, caballete (pegados al cuadro)
    this.pg.add(this.props);
    this.museumMats = [];
    this.museumFade = 1;
    this._buildRoomStatic();

    this.orbit = new OrbitControls(this.camera, canvas);
    this.orbit.enableDamping = true;
    this.orbit.dampingFactor = 0.08;
    this.orbit.rotateSpeed = 0.8;
    this.orbit.zoomSpeed = 0.9;
    this.orbit.screenSpacePanning = true;
    this.orbit.addEventListener('start', () => this._interact());

    this.fly = new FlyControls(this.camera, canvas, joyEl);
    this.fly.onInteract = () => this._interact();

    this.tweens = [];
    this.mode = 'museo';
    this.relief = 0.75;
    this.anim = true;
    this.idle = 0;
    this.sway = 0;
    this.listeners = {};
    this.tourToken = 0;
    this.points = null;
    this.spark = null;
    this.paint = null;
    this.running = false;
    this._v = new THREE.Vector3();
    this._lastTap = 0;

    canvas.addEventListener('pointerdown', () => this._interact());
    canvas.addEventListener('wheel', () => this._interact(), { passive: true });
    window.addEventListener('keydown', () => { if (this.tourToken) this._interact(); });
    canvas.addEventListener('dblclick', (e) => this._zoomAt(e.clientX, e.clientY));
    canvas.addEventListener('pointerup', (e) => {
      if (e.pointerType !== 'touch') return;
      const now = performance.now();
      if (now - this._lastTap < 280 && Math.hypot(e.clientX - this._tapX, e.clientY - this._tapY) < 30) { this._zoomAt(e.clientX, e.clientY); this._lastTap = 0; }
      else { this._lastTap = now; this._tapX = e.clientX; this._tapY = e.clientY; }
    });
    canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); this.emit('contextlost'); });

    this._resize = this._resize.bind(this);
    new ResizeObserver(this._resize).observe(canvas.parentElement);
    this._loop = this._loop.bind(this);
  }

  on(ev, fn) { (this.listeners[ev] ||= []).push(fn); }
  emit(ev, ...a) { (this.listeners[ev] || []).forEach((f) => f(...a)); }

  start() { if (!this.running) { this.running = true; this._last = performance.now(); this._time = this._time || 0; requestAnimationFrame(this._loop); } }
  stop() { this.running = false; }

  _resize() {
    const el = this.canvas.parentElement;
    const w = el.clientWidth, h = el.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this._updatePointScale();
  }
  _updatePointScale() {
    const h = this.renderer.getDrawingBufferSize(this._v2 || (this._v2 = new THREE.Vector2())).y;
    this.U.uPointScale.value = h / (2 * Math.tan(THREE.MathUtils.degToRad(this.camera.fov) / 2));
  }

  _interact() {
    this.idle = 0;
    if (this.tourToken) this.cancelTour();
  }
  cancelTour() {
    if (!this.tourToken) return;
    this.tourToken = 0;
    this.tweens = this.tweens.filter((t) => t.id !== 'cam');
    if (this.mode === 'dentro') { this.fly.syncFromCamera(); this.fly.enabled = true; }
    else { this.orbit.enabled = true; }
    this.emit('tour', false);
  }
  get camBusy() { return this.tweens.some((t) => t.id === 'cam'); }

  // ─── Sala (fija) ───
  _buildRoomStatic() {
    const floorTex = parquetTex();
    floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping;
    floorTex.repeat.set(10, 10);
    this.floorMat = new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.42, metalness: 0.0, transparent: true });
    this.floor = new THREE.Mesh(new THREE.CircleGeometry(1, 64), this.floorMat);
    this.floor.rotation.x = -Math.PI / 2;
    this.museum.add(this.floor);
    this.wallMat = new THREE.MeshStandardMaterial({ map: wallTex(), roughness: 0.95, side: THREE.BackSide, transparent: true });
    this.wall = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 64, 1, true), this.wallMat);
    this.museum.add(this.wall);
    // pool de luz en el suelo
    const poolTex = canvasTex(256, 256, (g, w, h) => {
      const gr = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
      gr.addColorStop(0, 'rgba(255,236,200,0.55)'); gr.addColorStop(0.5, 'rgba(255,220,170,0.18)'); gr.addColorStop(1, 'rgba(255,220,170,0)');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
    });
    this.poolMat = new THREE.MeshBasicMaterial({ map: poolTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
    this.pool = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.poolMat);
    this.pool.rotation.x = -Math.PI / 2;
    this.pool.position.y = 0.003;
    this.museum.add(this.pool);
    // banco
    const benchWood = new THREE.MeshStandardMaterial({ map: woodTex(true), roughness: 0.5, transparent: true });
    const benchTop = new THREE.MeshStandardMaterial({ color: 0x1b1714, roughness: 0.65, transparent: true });
    this.bench = new THREE.Group();
    const top = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.09, 0.46), benchTop);
    top.position.y = 0.45;
    this.bench.add(top);
    for (const sx of [-0.78, 0.78]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.41, 0.4), benchWood);
      leg.position.set(sx, 0.205, 0);
      this.bench.add(leg);
    }
    const rail = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.05, 0.05), benchWood);
    rail.position.set(0, 0.12, 0);
    this.bench.add(rail);
    this.museum.add(this.bench);
    // cono de luz
    this.coneMat = new THREE.ShaderMaterial({ vertexShader: CONE_VERT, fragmentShader: CONE_FRAG, uniforms: { uAlpha: { value: 0.05 } }, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
    this.cone = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 1, 1, 48, 1, true), this.coneMat);
    this.museum.add(this.cone);
    this.museumMats.push(this.floorMat, this.wallMat, benchWood, benchTop);
  }

  _clearProps() {
    for (const o of [...this.props.children]) {
      this.props.remove(o);
      o.traverse((c) => {
        if (c.geometry) c.geometry.dispose();
        if (c.material) {
          const ms = Array.isArray(c.material) ? c.material : [c.material];
          ms.forEach((m) => { if (m.map && m.userData.ownMap) m.map.dispose(); m.dispose(); const k = this.museumMats.indexOf(m); if (k >= 0) this.museumMats.splice(k, 1); });
        }
      });
    }
    if (this.plaque) {
      this.museum.remove(this.plaque);
      this.plaque.traverse((c) => { if (c.geometry) c.geometry.dispose(); if (c.material) { if (c.material.map) c.material.map.dispose(); const k = this.museumMats.indexOf(c.material); if (k >= 0) this.museumMats.splice(k, 1); c.material.dispose(); } });
      this.plaque = null;
    }
  }

  _mat(params, ownMap) {
    const m = new THREE.MeshStandardMaterial({ ...params, transparent: true });
    if (ownMap) m.userData.ownMap = true;
    this.museumMats.push(m);
    return m;
  }

  _buildProps(p, artist, W, H) {
    this._clearProps();
    const gold = artist.style.frame === 'gold';
    const fw = gold ? THREE.MathUtils.clamp(0.06 * Math.min(W, H) + 0.035, 0.05, 0.32) : THREE.MathUtils.clamp(0.04 * Math.min(W, H) + 0.03, 0.045, 0.2);
    const fd = fw * 0.55;
    this.frameW = fw;
    const isWall = p.support === 'muro';
    if (!isWall) {
      // Marco
      const sh = new THREE.Shape();
      const ow = W / 2 + fw, oh = H / 2 + fw, iw = W / 2 - 0.004, ih = H / 2 - 0.004;
      sh.moveTo(-ow, -oh); sh.lineTo(ow, -oh); sh.lineTo(ow, oh); sh.lineTo(-ow, oh); sh.lineTo(-ow, -oh);
      const hole = new THREE.Path();
      hole.moveTo(-iw, -ih); hole.lineTo(-iw, ih); hole.lineTo(iw, ih); hole.lineTo(iw, -ih); hole.lineTo(-iw, -ih);
      sh.holes.push(hole);
      const geo = new THREE.ExtrudeGeometry(sh, { depth: fd, bevelEnabled: true, bevelThickness: fd * 0.35, bevelSize: fw * 0.22, bevelSegments: 3, curveSegments: 1 });
      geo.translate(0, 0, -fd * 0.75);
      const frameMat = gold
        ? this._mat({ color: 0xb08a48, metalness: 1, roughness: 0.36 })
        : this._mat({ color: 0xc9a77c, metalness: 0.05, roughness: 0.5, map: woodTex(false) }, true);
      const frame = new THREE.Mesh(geo, frameMat);
      this.props.add(frame);
      // filete interior
      const lipW = fw * 0.22;
      const sh2 = new THREE.Shape();
      const o2w = W / 2 + lipW, o2h = H / 2 + lipW;
      sh2.moveTo(-o2w, -o2h); sh2.lineTo(o2w, -o2h); sh2.lineTo(o2w, o2h); sh2.lineTo(-o2w, o2h); sh2.lineTo(-o2w, -o2h);
      const hole2 = new THREE.Path();
      hole2.moveTo(-iw, -ih); hole2.lineTo(-iw, ih); hole2.lineTo(iw, ih); hole2.lineTo(iw, -ih); hole2.lineTo(-iw, -ih);
      sh2.holes.push(hole2);
      const lip = new THREE.Mesh(new THREE.ExtrudeGeometry(sh2, { depth: 0.01, bevelEnabled: false }), this._mat({ color: gold ? 0x8f6f30 : 0xb89552, metalness: 1, roughness: 0.38 }));
      lip.position.z = 0.002;
      this.props.add(lip);
      // Trasera
      const back = p.support === 'tabla'
        ? this._mat({ map: woodTex(false), roughness: 0.8 }, true)
        : this._mat({ map: linenTex(), roughness: 0.95 }, true);
      const thick = p.support === 'tabla' ? 0.03 : 0.022;
      const panel = new THREE.Mesh(new THREE.BoxGeometry(W, H, thick), back);
      panel.position.z = -thick / 2 - 0.004;
      this.props.add(panel);
      const barMat = this._mat({ map: woodTex(false), roughness: 0.75 }, true);
      const bw = Math.min(0.07, 0.06 * Math.min(W, H) + 0.025), bd = 0.025;
      const z = -thick - 0.004 - bd / 2;
      const bars = [
        [W, bw, 0, H / 2 - bw / 2], [W, bw, 0, -H / 2 + bw / 2],
        [bw, H - 2 * bw, -W / 2 + bw / 2, 0], [bw, H - 2 * bw, W / 2 - bw / 2, 0],
      ];
      if (p.support === 'tabla') bars.splice(0, 4, [W * 0.96, bw, 0, H * 0.28], [W * 0.96, bw, 0, -H * 0.28]);
      else if (W > 0.8 || H > 0.8) bars.push([W - 2 * bw, bw * 0.8, 0, 0]);
      for (const [bwid, bh, x, y] of bars) {
        const b = new THREE.Mesh(new THREE.BoxGeometry(bwid, bh, bd), barMat);
        b.position.set(x, y, z);
        this.props.add(b);
      }
      const lab = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(0.22, W * 0.32), Math.min(0.22, W * 0.32) * 0.625), new THREE.MeshBasicMaterial({ map: backLabelTex(p, artist.name), transparent: true, side: THREE.FrontSide }));
      lab.material.userData.ownMap = true;
      this.museumMats.push(lab.material);
      lab.rotation.y = Math.PI;
      lab.position.set(-W * 0.18, -H * 0.12, z - bd / 2 - 0.002);
      this.props.add(lab);
      // Caballete
      const easel = this._mat({ map: woodTex(true), roughness: 0.55 }, true);
      const cy = this.cy;
      const legH = cy + H / 2 + fw + 0.28;
      const legX = Math.max(0.12, W * 0.32);
      const zb = -thick - 0.06;
      for (const sx of [-1, 1]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.045, legH, 0.045), easel);
        leg.position.set(sx * legX, legH / 2 - cy, zb);
        this.props.add(leg);
      }
      const ledgeY = -H / 2 - fw - 0.03;
      const ledge = new THREE.Mesh(new THREE.BoxGeometry(legX * 2 + 0.16, 0.05, 0.16), easel);
      ledge.position.set(0, ledgeY, zb + 0.06);
      this.props.add(ledge);
      const topBar = new THREE.Mesh(new THREE.BoxGeometry(legX * 2 + 0.1, 0.045, 0.045), easel);
      topBar.position.set(0, H / 2 + fw + 0.12, zb);
      this.props.add(topBar);
      const backLegLen = Math.hypot(legH, legH * 0.38);
      const backLeg = new THREE.Mesh(new THREE.BoxGeometry(0.045, backLegLen, 0.045), easel);
      backLeg.position.set(0, legH / 2 - cy, zb - legH * 0.19);
      backLeg.rotation.x = Math.atan2(legH * 0.38, legH);
      this.props.add(backLeg);
    } else {
      // Muro (La Última Cena)
      const wallW = W + 3, wallH = this.cy + H / 2 + 1.4, wallD = 0.7;
      const plaster = this._mat({ color: 0xb9ad98, roughness: 0.95 });
      const slab = new THREE.Mesh(new THREE.BoxGeometry(wallW, wallH, wallD), plaster);
      slab.position.set(0, wallH / 2 - this.cy, -wallD / 2 - 0.01);
      this.props.add(slab);
      this.frameW = 0.05;
    }
    // Placa informativa
    const pl = new THREE.Group();
    const stand = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.95, 0.06), this._mat({ color: 0x1a1613, roughness: 0.6 }));
    stand.position.y = 0.475;
    pl.add(stand);
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.21, 0.02), this._mat({ color: 0x1a1613, roughness: 0.6 }));
    plate.position.set(0, 0.98, 0);
    plate.rotation.x = -0.5;
    pl.add(plate);
    const labMat = new THREE.MeshBasicMaterial({ map: plaqueTex(p, artist.name), transparent: true });
    this.museumMats.push(labMat);
    const label = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.2), labMat);
    label.position.set(0, 0.98 + 0.012 * Math.cos(0.5), 0.012 * Math.cos(0.5) + 0.002);
    label.rotation.x = -0.5;
    pl.add(label);
    const sideX = W / 2 + this.frameW + 0.55;
    pl.position.set(sideX, 0, 0.9 + Math.min(1.2, W * 0.1));
    pl.rotation.y = -0.35;
    this.museum.add(pl);
    this.plaque = pl;
  }

  // ─── Cargar un cuadro ───
  setPainting(p, artist, img, D) {
    this._disposePainting();
    this._resize();
    const U = this.U;
    const H = p.sizeCm[0] / 100;
    const aspect = img.naturalWidth / img.naturalHeight;
    const W = H * aspect;
    const Zc = (H / 2) / Math.tan(THREE.MathUtils.degToRad(FOV_REF) / 2);
    this.paint = { p, artist, W, H, Zc, aspect };
    this.cy = p.support === 'muro' ? 2.1 + H / 2 : Math.max(1.42, H / 2 + 0.55);
    this.pg.position.set(0, this.cy, 0);
    U.uZc.value = Zc;
    U.uSize.value.set(W, H);

    const tex = new THREE.Texture(img);
    tex.colorSpace = THREE.NoColorSpace;
    tex.anisotropy = this.maxAniso;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = true;
    tex.needsUpdate = true;
    this.mapTex = tex;
    U.uMap.value = tex;
    U.uMapTexel.value.set(1.4 / img.naturalWidth, 1.4 / img.naturalHeight);
    U.uImpasto.value = artist.style.impasto;
    U.uFlowAmp.value = artist.style.flow * 1.3;

    this._setDepthTextures(D, true);
    U.uEdge.value = D.source === 'ai' ? 0.06 : 10;

    // Malla de relieve (frente) y capa de fondo
    const seg = IS_MOBILE ? 220 : 300;
    const sx = aspect >= 1 ? seg : Math.max(32, Math.round(seg * aspect));
    const sy = aspect >= 1 ? Math.max(32, Math.round(seg / aspect)) : seg;
    U.uTexel.value.set(1 / sx, 1 / sy);
    this.surfGeo = new THREE.PlaneGeometry(1, 1, sx, sy);
    const mk = (isBg) => new THREE.ShaderMaterial({
      vertexShader: SURF_VERT, fragmentShader: SURF_FRAG,
      uniforms: { ...U, uIsBg: { value: isBg ? 1 : 0 } },
      transparent: false,
    });
    this.fg = new THREE.Mesh(this.surfGeo, mk(false));
    this.bg = new THREE.Mesh(this.surfGeo, mk(true));
    this.fg.frustumCulled = this.bg.frustumCulled = false;
    this.bg.renderOrder = -1;
    this.pg.add(this.fg, this.bg);

    // Sala a escala
    this._buildProps(p, artist, W, H);
    const R = Math.max(9, W * 1.4 + 6, H * 1.6 + 5);
    this.roomR = R;
    this.floor.scale.set(R, R, 1);
    this.wall.scale.set(R, Math.max(7, this.cy + H / 2 + 3), R);
    this.wall.position.y = this.wall.scale.y / 2;
    const fit = this._fitDistance(1.22, FOV_REF + 5);
    this.bench.position.set(0, 0, Math.min(R - 1.5, Math.max(2.4, fit * 0.95)));
    this.pool.scale.set(Math.max(3, W * 1.6), Math.max(3, W * 1.6) * 0.8, 1);
    this.pool.position.set(0, 0.003, Math.max(0.6, W * 0.25));
    const topY = this.wall.scale.y;
    this.spot.position.set(0, topY - 0.2, Math.max(2.5, fit * 0.7));
    this.spot.target.position.set(0, this.cy, 0);
    this.spot.distance = 0;
    this.spot.angle = Math.min(1.1, Math.atan2(Math.max(W, H) * 0.9, this.spot.position.distanceTo(this.spot.target.position)));
    const coneLen = this.spot.position.distanceTo(new THREE.Vector3(0, this.cy, 0));
    this.cone.scale.set(Math.max(W, H) * 0.75, coneLen, Math.max(W, H) * 0.75);
    this.cone.position.copy(this.spot.position).lerp(new THREE.Vector3(0, this.cy, 0), 0.5);
    this.cone.lookAt(0, this.cy, 0);
    this.cone.rotateX(-Math.PI / 2);
    // luz para el impasto en coordenadas del cuadro
    U.uLightPos.value.copy(this.spot.position).sub(this.pg.position);

    this.points = null; // se crean al entrar
    this._initSparks(D);
    this.D = D;
    this.applyMode(this.mode, true);
  }

  _setDepthTextures(D, initial) {
    const U = this.U;
    const dt = halfTex(D.N, D.w, D.h);
    const bdt = halfTex(D.bgN, D.w, D.h);
    const bgt = rgbaTex(D.bgRGBA, D.cw, D.ch);
    if (initial) {
      U.uDepth0.value = dt; U.uDepth1.value = dt; U.uBgDepth0.value = bdt; U.uBgDepth1.value = bdt; U.uDepthMix.value = 0;
      this.depthTex = [dt]; this.bgDepthTex = [bdt];
    } else {
      U.uDepth1.value = dt; U.uBgDepth1.value = bdt; U.uDepthMix.value = 0;
      this.depthTex.push(dt); this.bgDepthTex.push(bdt);
    }
    if (this.bgTex) this.bgTex.dispose();
    this.bgTex = bgt;
    U.uBgMap.value = bgt;
    // color de la zona lejana (sRGB tal cual, para los shaders "crudos")
    const k = 0.5;
    this.fogRaw = [D.farColor[0] * k, D.farColor[1] * k, D.farColor[2] * k];
  }

  // Nueva profundidad (IA): transición suave
  updateDepth(D) {
    if (!this.paint) return;
    this._setDepthTextures(D, false);
    this.U.uEdge.value = D.source === 'ai' ? 0.06 : 10;
    this.D = D;
    this._resetSparkData(D);
    this.tween(this.U.uDepthMix, 'value', 1, 1800, ease.inOut, 'depthmix', () => {
      const U = this.U;
      const old = this.depthTex.shift(), oldB = this.bgDepthTex.shift();
      U.uDepth0.value = U.uDepth1.value; U.uBgDepth0.value = U.uBgDepth1.value; U.uDepthMix.value = 0;
      old && old.dispose(); oldB && oldB.dispose();
    });
    if (this.mode === 'dentro') this.applyMode('dentro', false, true);
  }

  _disposePainting() {
    this.tweens = [];
    if (this.fg) { this.pg.remove(this.fg, this.bg); this.fg.material.dispose(); this.bg.material.dispose(); this.surfGeo.dispose(); this.fg = this.bg = null; }
    if (this.points) { this.pg.remove(this.points.fg, this.points.bg); this.points.fg.geometry.dispose(); this.points.bg.geometry.dispose(); this.points.fg.material.dispose(); this.points.bg.material.dispose(); this.points = null; }
    if (this.spark) { this.pg.remove(this.spark.obj); this.spark.obj.geometry.dispose(); this.spark.obj.material.dispose(); this.spark = null; }
    if (this.mapTex) { this.mapTex.dispose(); this.mapTex = null; }
    (this.depthTex || []).forEach((t) => t.dispose());
    (this.bgDepthTex || []).forEach((t) => t.dispose());
    this.depthTex = []; this.bgDepthTex = [];
    if (this.bgTex) { this.bgTex.dispose(); this.bgTex = null; }
    this.paint = null;
  }

  // ─── Nube de puntos (modo Dentro) ───
  _buildPoints() {
    const { aspect } = this.paint;
    const target = IS_MOBILE ? 130000 : 230000;
    const cols = Math.round(Math.sqrt(target * aspect));
    const rows = Math.round(target / cols);
    const mk = (c, r, dens) => {
      const n = c * r;
      const pos = new Float32Array(n * 3), dir = new Float32Array(n * 2);
      const F = this.D.flow;
      let k = 0;
      const rnd = rand(c * 31 + r);
      for (let y = 0; y < r; y++) for (let x = 0; x < c; x++) {
        const u = (x + 0.5) / c, v = (y + 0.5) / r; // v desde abajo
        pos[k * 3] = u; pos[k * 3 + 1] = v; pos[k * 3 + 2] = rnd() * dens;
        const vi = 1 - v;
        const c2 = sample(F.c2, F.w, F.h, u, vi), s2 = sample(F.s2, F.w, F.h, u, vi), co = sample(F.coh, F.w, F.h, u, vi);
        const th = 0.5 * Math.atan2(s2, c2);
        dir[k * 2] = Math.cos(th) * co; dir[k * 2 + 1] = -Math.sin(th) * co;
        k++;
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      g.setAttribute('aDir', new THREE.BufferAttribute(dir, 2));
      return g;
    };
    const U = this.U;
    const cellW = this.paint.W / cols;
    const mat = (isBg, c, r) => new THREE.ShaderMaterial({
      vertexShader: POINT_VERT, fragmentShader: POINT_FRAG,
      uniforms: { ...U, uIsBg: { value: isBg ? 1 : 0 }, uReveal: this.pointReveal, uCell: { value: new THREE.Vector2(1 / c, 1 / r) }, uCellWorld: { value: this.paint.W / c } },
    });
    const fg = new THREE.Points(mk(cols, rows, 1), mat(false, cols, rows));
    const bc = Math.round(cols / 2), br = Math.round(rows / 2);
    const bg = new THREE.Points(mk(bc, br, 1), mat(true, bc, br));
    fg.frustumCulled = bg.frustumCulled = false;
    this.pg.add(fg, bg);
    this.points = { fg, bg, cellW };
  }

  // ─── Chispas: flujo de pinceladas (Van Gogh) o motas de polvo en la luz (Da Vinci) ───
  _initSparks(D) {
    const n = IS_MOBILE ? 2200 : 5000;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(new Float32Array(n), 1));
    g.setAttribute('aSize', new THREE.BufferAttribute(new Float32Array(n), 1));
    const m = new THREE.ShaderMaterial({
      vertexShader: SPARK_VERT, fragmentShader: SPARK_FRAG,
      uniforms: { uPointScale: this.U.uPointScale, uMaxPoint: this.U.uMaxPoint, uSparkSize: this.U.uSparkSize, uSparkAlpha: this.U.uSparkAlpha },
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const obj = new THREE.Points(g, m);
    obj.frustumCulled = false;
    obj.renderOrder = 5;
    this.pg.add(obj);
    const st = { obj, n, u: new Float32Array(n), v: new Float32Array(n), vx: new Float32Array(n), vy: new Float32Array(n), life: new Float32Array(n), max: new Float32Array(n), z: new Float32Array(n), mode: this.paint.artist.style.mood, rnd: rand(99) };
    this.spark = st;
    this.U.uSparkSize.value = this.paint.H * (st.mode === 'flow' ? 0.006 : 0.004);
    this._resetSparkData(D);
  }
  _resetSparkData(D) {
    const st = this.spark;
    if (!st) return;
    st.D = D;
    for (let i = 0; i < st.n; i++) this._spawn(i, true);
  }
  _spawn(i, initial) {
    const st = this.spark, D = st.D, F = D.flow, r = st.rnd;
    if (st.mode === 'flow') {
      let u = r(), v = r();
      for (let k = 0; k < 14; k++) {
        u = r(); v = r();
        const c = sample(F.coh, F.w, F.h, u, v);
        if (r() < c * c * 1.2 + 0.03) break;
      }
      st.u[i] = u; st.v[i] = v;
      st.vx[i] = 0; st.vy[i] = 0;
      st.max[i] = 2.5 + r() * 4;
    } else {
      st.u[i] = r() * 1.3 - 0.15; st.v[i] = r() * 1.2 - 0.1;
      st.z[i] = r();
      st.vx[i] = (r() - 0.5) * 0.01; st.vy[i] = -0.004 - r() * 0.01;
      st.max[i] = 6 + r() * 8;
    }
    st.life[i] = initial ? r() * st.max[i] : 0;
    const px = D.px, w = px.w, h = px.h;
    const xi = Math.min(w - 1, Math.max(0, Math.floor(Math.min(0.999, Math.max(0, st.u[i])) * w)));
    const yi = Math.min(h - 1, Math.max(0, Math.floor(Math.min(0.999, Math.max(0, st.v[i])) * h)));
    const k = (yi * w + xi) * 4;
    const col = st.obj.geometry.attributes.color.array;
    const sz = st.obj.geometry.attributes.aSize.array;
    if (st.mode === 'flow') {
      const cr = px.data[k] / 255, cg = px.data[k + 1] / 255, cb = px.data[k + 2] / 255;
      col[i * 3] = Math.min(1.4, cr * 0.75 + 0.35); col[i * 3 + 1] = Math.min(1.4, cg * 0.75 + 0.33); col[i * 3 + 2] = Math.min(1.4, cb * 0.75 + 0.3);
      sz[i] = 0.6 + r() * 1.1;
    } else {
      const t = 0.75 + r() * 0.25;
      col[i * 3] = 1.0 * t; col[i * 3 + 1] = 0.9 * t; col[i * 3 + 2] = 0.72 * t;
      sz[i] = 0.4 + r() * 0.9;
    }
  }
  _updateSparks(dt, time) {
    const st = this.spark;
    if (!st) return;
    const vis = this.U.uSparkAlpha.value > 0.002;
    st.obj.visible = vis;
    if (!vis) return;
    const D = st.D, F = D.flow, N = D.N, U = this.U;
    const { W, H, Zc } = this.paint;
    const amt = U.uAmount.value, nf = U.uNearF.value, ff = U.uFarF.value;
    const zN = Zc * (1 - nf * amt), zF = Zc * (1 + ff * amt);
    const iN = 1 / zN, iF = 1 / zF;
    const pos = st.obj.geometry.attributes.position.array;
    const al = st.obj.geometry.attributes.aAlpha.array;
    const speedW = H * 0.05 * (this.anim ? 1 : 0.15);
    for (let i = 0; i < st.n; i++) {
      st.life[i] += dt;
      if (st.life[i] > st.max[i]) this._spawn(i, false);
      let u = st.u[i], v = st.v[i];
      const lf = st.life[i] / st.max[i];
      let a = Math.sin(Math.PI * Math.min(1, lf));
      if (st.mode === 'flow') {
        const c2 = sample(F.c2, F.w, F.h, u, v), s2 = sample(F.s2, F.w, F.h, u, v), co = sample(F.coh, F.w, F.h, u, v);
        const th = 0.5 * Math.atan2(s2, c2);
        let dx = Math.cos(th), dy = Math.sin(th);
        if (dx * st.vx[i] + dy * st.vy[i] < 0) { dx = -dx; dy = -dy; }
        st.vx[i] = dx; st.vy[i] = dy;
        const sp = speedW * (0.35 + co) * dt;
        u += dx * sp / W; v += dy * sp / H;
        if (u < 0 || u > 1 || v < 0 || v > 1) { this._spawn(i, false); continue; }
        st.u[i] = u; st.v[i] = v;
        a *= 0.35 + 0.65 * co;
        const n = sample(N, D.w, D.h, u, v);
        const z = 1 / (iF + (iN - iF) * n) * 0.985;
        const t = z / Zc;
        pos[i * 3] = (u - 0.5) * W * t; pos[i * 3 + 1] = (0.5 - v) * H * t; pos[i * 3 + 2] = Zc - z;
      } else {
        st.u[i] += st.vx[i] * dt * (this.anim ? 1 : 0.2) + Math.sin(time * 0.3 + i) * 0.0004;
        st.v[i] += st.vy[i] * dt * (this.anim ? 1 : 0.2);
        if (st.v[i] < -0.15) st.v[i] += 1.3;
        const z = zN + (zF - zN) * Math.pow(st.z[i], 1.6);
        const t = z / Zc;
        pos[i * 3] = (st.u[i] - 0.5) * W * t; pos[i * 3 + 1] = (0.5 - st.v[i]) * H * t; pos[i * 3 + 2] = Zc - z;
        a *= 0.55 + 0.45 * Math.sin(time * (1 + (i % 7) * 0.3) + i);
      }
      al[i] = Math.max(0, a);
    }
    st.obj.geometry.attributes.position.needsUpdate = true;
    st.obj.geometry.attributes.aAlpha.needsUpdate = true;
    st.obj.geometry.attributes.color.needsUpdate = true;
    st.obj.geometry.attributes.aSize.needsUpdate = true;
  }

  // ─── Cámara y modos ───
  _fitDistance(extra = 1.22, fovDeg = this.camera.fov) {
    const { W, H } = this.paint;
    const fw = this.frameW || 0;
    const vf = THREE.MathUtils.degToRad(fovDeg) / 2;
    const dH = ((H + 2 * fw) * extra) / (2 * Math.tan(vf));
    const dW = ((W + 2 * fw) * extra) / (2 * Math.tan(vf) * this.camera.aspect);
    return Math.max(dH, dW);
  }
  _center() { return new THREE.Vector3(0, this.cy, 0); }
  _spherical(dist, az, el, target = this._center()) {
    return new THREE.Vector3(target.x + dist * Math.sin(az) * Math.cos(el), target.y + dist * Math.sin(el), target.z + dist * Math.cos(az) * Math.cos(el));
  }

  setRelief(v) {
    this.relief = v;
    if (this.mode === '3d') this.tween(this.U.uAmount, 'value', v, 350, ease.out, 'amount');
  }
  setAnim(on) {
    this.anim = on;
    this.tween(this.U.uAnim, 'value', on && this.mode === 'dentro' ? 1 : 0, 600, ease.out, 'anim');
  }

  applyMode(mode, instant = false, keepCamera = false) {
    const prev = this.mode;
    this.mode = mode;
    if (!this.paint) return;
    this.idle = 0;
    const fromFly = prev === 'dentro' && !instant;
    const U = this.U;
    const dur = instant ? 0 : 1500;
    const { H, Zc } = this.paint;
    const c = this._center();
    const style = this.paint.artist.style;

    if (mode === 'dentro' && !this.points) this._buildPoints();

    let amt, nf, ff, reveal, fade, fog, light, impasto, spark, anim, bg;
    if (mode === 'museo') {
      amt = 0; nf = 0.38; ff = 0.9; reveal = 0; fade = 1; fog = 0; light = 1; impasto = style.impasto; spark = 0; anim = 0; bg = this.bgMuseum;
    } else if (mode === '3d') {
      amt = this.relief; nf = 0.4; ff = 0.75; reveal = 0; fade = 0; fog = 0.85; light = 0.55; impasto = style.impasto * 0.7; spark = style.mood === 'flow' ? 0.5 : 0.35; anim = 0; bg = this.bgDark;
    } else {
      amt = 1; nf = 0.74; ff = 3.6; reveal = 1; fade = 0; fog = 1; light = 0; impasto = 0; spark = 1; anim = this.anim ? 1 : 0;
      bg = new THREE.Color().setRGB(this.fogRaw[0], this.fogRaw[1], this.fogRaw[2], THREE.SRGBColorSpace);
    }
    // niebla según modo
    if (mode === 'dentro') {
      U.uFogColor.value.setRGB(this.fogRaw[0], this.fogRaw[1], this.fogRaw[2]);
      U.uFogNear.value = Zc * 2.2; U.uFogFar.value = Zc * (1 + ff) * 2.2;
    } else if (mode === '3d') {
      U.uFogColor.value.setRGB(7 / 255, 7 / 255, 10 / 255);
      U.uFogNear.value = Zc * 2.2; U.uFogFar.value = Zc * 6;
    }
    // orden: al volver al museo, primero se aplana el relieve y luego aparece la sala; al salir, al revés
    const toMuseum = mode === 'museo', fromMuseum = prev === 'museo' && mode !== 'museo';
    this.tween(U.uAmount, 'value', amt, dur, ease.inOut, 'amount', null, undefined, null, fromMuseum && !instant ? 350 : 0);
    this.tween(U.uNearF, 'value', nf, dur, ease.inOut, 'nearf');
    this.tween(U.uFarF, 'value', ff, dur, ease.inOut, 'farf');
    this.tween(U.uFog, 'value', fog, dur, ease.inOut, 'fog');
    this.tween(U.uLightAmt, 'value', light, dur, ease.inOut, 'light');
    this.tween(U.uSpot, 'value', mode === 'museo' ? 1 : 0, dur, ease.inOut, 'spot');
    this.tween(U.uImpasto, 'value', impasto, dur, ease.inOut, 'impasto');
    this.tween(U.uSparkAlpha, 'value', spark, dur, ease.inOut, 'spark');
    this.tween(U.uAnim, 'value', anim, dur, ease.inOut, 'anim');
    if (toMuseum && !instant) this.tween(this, 'museumFade', fade, dur * 0.55, ease.inOut, 'fade', null, undefined, null, dur * 0.6);
    else this.tween(this, 'museumFade', fade, instant ? 0 : 650, ease.inOut, 'fade');
    this.tween(U.uReveal, 'value', reveal, instant ? 0 : 1300, ease.inOut, 'reveal');
    this.tween(this.pointReveal, 'value', reveal, instant ? 0 : 1300, ease.inOut, 'preveal');
    this._bgFrom = this.scene.background.clone();
    this._bgTo = bg.clone();
    this.tween(this, '_bgT', 1, dur, ease.inOut, 'bg', null, 0);

    // Controles y cámara
    if (keepCamera) return;
    const fit = this._fitDistance(1.34, FOV_REF + 5);
    if (mode === 'museo') {
      this.fly.enabled = false;
      this.orbit.enabled = true;
      this.orbit.minDistance = Math.max(0.06, H * 0.1);
      this.orbit.maxDistance = this.roomR - 1.2;
      this.orbit.minPolarAngle = 0.12 * Math.PI;
      this.orbit.maxPolarAngle = 0.56 * Math.PI;
      this.orbit.minAzimuthAngle = -Infinity;
      this.orbit.maxAzimuthAngle = Infinity;
      const from = instant ? this._spherical(fit * 1.05, 0.62, 0.1) : null;
      const to = this._spherical(fit, 0.0, 0.03);
      this._camTo(to, c, instant ? 2600 : dur, FOV_REF + 5, from, null, fromFly);
    } else if (mode === '3d') {
      this.fly.enabled = false;
      this.orbit.enabled = true;
      this.orbit.minDistance = Math.max(0.06, H * 0.12);
      this.orbit.maxDistance = Math.max(H * 8, 8);
      this.orbit.minPolarAngle = 0.2 * Math.PI;
      this.orbit.maxPolarAngle = 0.8 * Math.PI;
      this.orbit.minAzimuthAngle = -1.22;
      this.orbit.maxAzimuthAngle = 1.22;
      const d3 = Math.max(Zc * 1.08, fit * 0.92);
      this._camTo(this._spherical(d3, prev === 'dentro' ? 0.08 : 0.2, 0.05), c, dur, FOV_REF + 5, null, null, fromFly);
    } else {
      this.orbit.enabled = false;
      const ref = this.pg.localToWorld(new THREE.Vector3(0, 0, Zc));
      const look = this.pg.localToWorld(new THREE.Vector3(0, 0, 0));
      // FOV que encaja el cuadro desde el punto de vista original
      const needH = FOV_REF;
      const needW = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(FOV_REF) / 2) * this.paint.aspect / this.camera.aspect));
      const fov = Math.min(95, Math.max(needH, needW) * 1.06);
      this.fly.speed = Zc * 0.2;
      this.fly.enabled = false;
      const { W } = this.paint;
      const zF = Zc * (1 + 3.6);
      this.fly.limits = {
        yaw: [-1.2, 1.2], pitch: [-0.95, 0.95],
        min: this.pg.localToWorld(new THREE.Vector3(-W * 1.1, -H * 1.1, Zc - zF * 0.8)),
        max: this.pg.localToWorld(new THREE.Vector3(W * 1.1, H * 1.1, Zc * 1.9)),
      };
      this._camTo(ref, look, dur, fov, null, () => { this.fly.syncFromCamera(); if (this.mode === 'dentro' && !this.tourToken) this.fly.enabled = true; });
    }
  }

  _camTo(pos, target, dur, fov, from, done, fromFly) {
    const cam = this.camera;
    if (from) cam.position.copy(from);
    const p0 = cam.position.clone();
    const t0 = this.orbit.target.clone();
    if (from) t0.copy(target);
    else if (fromFly || this.mode === 'dentro') {
      // venimos del modo vuelo (o vamos a él): partimos de hacia donde miramos
      const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion);
      t0.copy(cam.position).addScaledVector(dir, Math.max(0.05, cam.position.distanceTo(target)));
    }
    const f0 = cam.fov;
    const st = { k: 0 };
    this.tween(st, 'k', 1, dur, ease.inOut, 'cam', () => {
      this.orbit.target.copy(target);
      if (this.orbit.enabled) this.orbit.update();
      done && done();
    }, 0, () => {
      const k = st.k;
      cam.position.lerpVectors(p0, pos, k);
      const tg = this._v.lerpVectors(t0, target, k);
      cam.fov = f0 + (fov - f0) * k;
      cam.updateProjectionMatrix();
      cam.lookAt(tg);
      this.orbit.target.copy(tg);
      this._updatePointScale();
    });
  }

  resetView() {
    this.cancelTour();
    if (this.mode === 'dentro' && this.paint) {
      const { Zc } = this.paint;
      this.fly.enabled = false;
      this._camTo(this.pg.localToWorld(new THREE.Vector3(0, 0, Zc)), this.pg.localToWorld(new THREE.Vector3(0, 0, 0)), 900, this.camera.fov, null, () => { this.fly.syncFromCamera(); this.fly.enabled = true; }, true);
    } else this.applyMode(this.mode);
  }

  _zoomAt(cx, cy) {
    if (!this.paint || this.mode === 'dentro') return;
    const rect = this.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(((cx - rect.left) / rect.width) * 2 - 1, -((cy - rect.top) / rect.height) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.camera);
    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 0, 1), this.pg.position);
    const hit = new THREE.Vector3();
    if (!ray.ray.intersectPlane(plane, hit)) return;
    const { W, H } = this.paint;
    hit.x = THREE.MathUtils.clamp(hit.x, -W / 2, W / 2);
    hit.y = THREE.MathUtils.clamp(hit.y, this.cy - H / 2, this.cy + H / 2);
    const dist = this.camera.position.distanceTo(this.orbit.target);
    const close = dist < Math.max(this.orbit.minDistance * 3, H * 0.45);
    if (close) { this.applyMode(this.mode); return; }
    const nd = Math.max(this.orbit.minDistance * 1.4, dist * 0.38);
    const dir = this.camera.position.clone().sub(this.orbit.target).normalize();
    this._camTo(hit.clone().addScaledVector(dir, nd), hit, 900, this.camera.fov);
  }

  // ─── Viaje automático ───
  async tour() {
    if (!this.paint) return;
    const token = ++this.tourToken;
    this.emit('tour', true);
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const alive = () => this.tourToken === token;
    if (this.mode !== '3d') { this.emit('mode', '3d'); this.applyMode('3d'); await wait(1700); }
    if (!alive()) return;
    const c = this._center();
    const { Zc } = this.paint;
    const d = Math.max(Zc * 1.1, this._fitDistance() * 0.95);
    const st = { a: 0 };
    const from = this.camera.position.clone();
    this.tween(st, 'a', 1, 7000, ease.sine, 'cam', null, 0, () => {
      const az = -0.55 + 1.1 * st.a;
      const p = this._spherical(d, az, 0.08 + 0.06 * Math.sin(st.a * Math.PI));
      this.camera.position.lerpVectors(from, p, Math.min(1, st.a * 6));
      this.camera.lookAt(c); this.orbit.target.copy(c);
    });
    await wait(7100);
    if (!alive()) return;
    this.emit('mode', 'dentro'); this.applyMode('dentro');
    await wait(1700);
    if (!alive()) return;
    this.fly.enabled = false;
    const p0 = this.camera.position.clone();
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
    const q0 = this.camera.quaternion.clone();
    const s2 = { a: 0 };
    this.tween(s2, 'a', 1, 7500, ease.inOut, 'cam', null, 0, () => {
      this.camera.position.copy(p0).addScaledVector(fwd, Zc * 0.62 * s2.a);
      this.camera.quaternion.copy(q0);
      this.camera.rotateY(Math.sin(s2.a * Math.PI * 2) * 0.22);
      this.camera.rotateX(Math.sin(s2.a * Math.PI) * 0.05);
    });
    await wait(7600);
    if (!alive()) return;
    this.tourToken = 0;
    this.emit('mode', '3d'); this.applyMode('3d');
    this.emit('tour', false);
  }

  // ─── Animaciones (tweens) ───
  tween(obj, key, to, dur, fn = ease.inOut, id, done, fromOverride, onUpdate, delay = 0) {
    if (id) this.tweens = this.tweens.filter((t) => t.id !== id);
    const from = fromOverride !== undefined ? fromOverride : obj[key];
    if (fromOverride !== undefined) obj[key] = fromOverride;
    if (!dur) { obj[key] = to; onUpdate && onUpdate(); done && done(); return; }
    this.tweens.push({ obj, key, from, to, dur, fn, id, done, onUpdate, t: -delay });
  }
  _stepTweens(dtMs) {
    const list = this.tweens;
    for (let i = 0; i < list.length; i++) {
      const tw = list[i];
      tw.t += dtMs;
      if (tw.t < 0) continue;
      const k = Math.min(1, tw.t / tw.dur);
      tw.obj[tw.key] = tw.from + (tw.to - tw.from) * tw.fn(k);
      tw.onUpdate && tw.onUpdate();
      if (k >= 1) { list.splice(i--, 1); tw.done && tw.done(); }
    }
  }

  _applyFade() {
    const f = this.museumFade;
    this.museum.visible = f > 0.002;
    this.props.visible = f > 0.002;
    for (const m of this.museumMats) { m.opacity = f; m.depthWrite = f > 0.5; }
    this.poolMat.opacity = f;
    this.coneMat.uniforms.uAlpha.value = 0.05 * f;
    this.spot.intensity = 60 * f;
    if (this._bgFrom && this._bgTo) this.scene.background.copy(this._bgFrom).lerp(this._bgTo, this._bgT ?? 1);
  }

  _loop() {
    if (!this.running) return;
    requestAnimationFrame(this._loop);
    const now = performance.now();
    const dt = Math.min(0.05, Math.max(0, (now - this._last) / 1000));
    this._last = now;
    const time = (this._time += dt);
    this._stepTweens(dt * 1000);
    this.U.uTime.value = time;
    this.idle += dt;
    if (this.paint) {
      const U = this.U;
      // visibilidad según transición
      const rev = U.uReveal.value;
      this.fg.visible = rev < 0.999;
      this.bg.visible = rev < 0.999 && U.uAmount.value > 0.01;
      if (this.points) { this.points.fg.visible = this.points.bg.visible = this.pointReveal.value > 0.001; }
      this._applyFade();
      // vaivén suave en 3D cuando no se toca
      if (this.mode === '3d' && this.idle > 2.5 && !this.camBusy && !this.tourToken) {
        this.sway += dt;
        const off = this.camera.position.clone().sub(this.orbit.target);
        const k = Math.sin(this.sway * 0.55) * 0.0012;
        off.applyAxisAngle(new THREE.Vector3(0, 1, 0), k);
        this.camera.position.copy(this.orbit.target).add(off);
      } else if (this.mode !== '3d') this.sway = 0;
      if (this.orbit.enabled && !this.camBusy) {
        this.orbit.update();
        if (this.mode === 'museo') {
          // no atravesar el suelo ni salir de la sala
          if (this.camera.position.y < 0.25) this.camera.position.y = 0.25;
          const r = Math.hypot(this.camera.position.x, this.camera.position.z);
          if (r > this.roomR - 0.6) { const s = (this.roomR - 0.6) / r; this.camera.position.x *= s; this.camera.position.z *= s; }
          const t = this.orbit.target, { W, H } = this.paint;
          t.x = THREE.MathUtils.clamp(t.x, -W, W); t.y = THREE.MathUtils.clamp(t.y, 0.3, this.cy + H); t.z = THREE.MathUtils.clamp(t.z, -1.5, 3);
        }
      }
      this.fly.update(dt);
      U.uCamLocal.value.copy(this.camera.position);
      this.pg.worldToLocal(U.uCamLocal.value);
      this._updateSparks(dt, time);
      if (this.mode === 'dentro' && !this.camBusy) this._updatePointScale();
    }
    this.renderer.render(this.scene, this.camera);
  }
}

export { IS_MOBILE };
