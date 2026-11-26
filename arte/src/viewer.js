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
uniform sampler2D uMap; uniform sampler2D uBgMap; uniform sampler2D uFlowTex;
uniform vec2 uMapTexel; uniform vec2 uTexSize;
uniform float uEdge; uniform float uImpasto; uniform vec3 uLightPos; uniform vec3 uCamLocal; uniform float uLightAmt;
uniform float uSpot; uniform float uIsBg; uniform float uOpacity;
uniform float uTime; uniform float uFlowAnim; uniform float uFlowAmpUV; uniform float uDetail; uniform float uWeaveFreq; uniform float uWeave;
varying vec2 vUv; varying float vEdge; varying float vDist; varying vec3 vPos;
vec2 gDx; vec2 gDy;
float lum(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
// Catmull-Rom (9 lecturas): al acercarse, la pintura se ve nítida y no en cuadraditos
vec3 cubic(sampler2D tex, vec2 uv){
  vec2 sp = uv * uTexSize;
  vec2 t1 = floor(sp - 0.5) + 0.5;
  vec2 f = sp - t1;
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);
  vec2 w12 = w1 + w2;
  vec2 t12 = (t1 + w2 / w12) / uTexSize;
  vec2 t0 = (t1 - 1.0) / uTexSize, t3 = (t1 + 2.0) / uTexSize;
  vec3 r = vec3(0.0);
  r += textureLod(tex, vec2(t0.x, t0.y), 0.0).rgb * w0.x * w0.y;
  r += textureLod(tex, vec2(t12.x, t0.y), 0.0).rgb * w12.x * w0.y;
  r += textureLod(tex, vec2(t3.x, t0.y), 0.0).rgb * w3.x * w0.y;
  r += textureLod(tex, vec2(t0.x, t12.y), 0.0).rgb * w0.x * w12.y;
  r += textureLod(tex, vec2(t12.x, t12.y), 0.0).rgb * w12.x * w12.y;
  r += textureLod(tex, vec2(t3.x, t12.y), 0.0).rgb * w3.x * w12.y;
  r += textureLod(tex, vec2(t0.x, t3.y), 0.0).rgb * w0.x * w3.y;
  r += textureLod(tex, vec2(t12.x, t3.y), 0.0).rgb * w12.x * w3.y;
  r += textureLod(tex, vec2(t3.x, t3.y), 0.0).rgb * w3.x * w3.y;
  return max(r, vec3(0.0));
}
vec3 samp(vec2 uv, float mag){
  if (mag > 1.1) return cubic(uMap, uv);
  return textureGrad(uMap, uv, gDx, gDy).rgb;
}
void main(){
  gDx = dFdx(vUv); gDy = dFdy(vUv);
  float texPerPix = max(length(gDx * uTexSize), length(gDy * uTexSize));
  float mag = 1.0 / max(texPerPix, 1e-4);
  if (uIsBg < 0.5 && vEdge > uEdge) discard;
  vec3 col;
  if (uIsBg > 0.5) {
    col = textureGrad(uBgMap, vUv, gDx, gDy).rgb;
  } else if (uFlowAnim > 0.001) {
    // 4D: la pintura fluye a lo largo de sus pinceladas (dos capas que se relevan para un bucle sin saltos)
    vec2 fl = texture(uFlowTex, vUv).rg * 2.0 - 1.0;
    // desplazamiento máximo ~5 píxeles en pantalla: de cerca la pintura fluye sin verse doble
    float amp = min(uFlowAmpUV, 5.0 / (0.5 * uTexSize.x * max(mag, 0.35))) * uFlowAnim;
    float ph = uTime * 0.14;
    float p0 = fract(ph);
#if MOBILE
    if (mag > 1.1) {
      col = samp(vUv + fl * sin(uTime * 0.9 + dot(vUv, vec2(37.0, 23.0))) * amp * 0.35, mag);
    } else
#endif
    {
      float p1 = fract(ph + 0.5);
      float w0 = 1.0 - abs(2.0 * p0 - 1.0);
      vec3 c0 = samp(vUv + fl * (p0 - 0.5) * amp, mag);
      vec3 c1 = samp(vUv + fl * (p1 - 0.5) * amp, mag);
      col = mix(c1, c0, w0);
    }
    // brillos que titilan (estrellas, luces, reflejos)
    float L = lum(col);
    float tw = vnoise(vUv * 150.0 + vec2(uTime * 0.7, -uTime * 0.45));
    col *= 1.0 + uFlowAnim * 0.26 * smoothstep(0.66, 0.95, L) * (tw - 0.35);
  } else {
    col = samp(vUv, mag);
  }
  // de muy cerca: textura de la tela o de la tabla en lugar de píxeles
  float det = uDetail * smoothstep(1.3, 4.5, mag) * (1.0 - uIsBg);
  if (det > 0.001) {
    vec2 tp = vUv * uTexSize * uWeaveFreq;
    float g = uWeave > 0.5
      ? (sin(tp.x) * 0.5 + 0.5) * (sin(tp.y) * 0.5 + 0.5) - 0.25 + (vnoise(tp * 0.6) - 0.5) * 0.35
      : (vnoise(tp * 0.8) - 0.5) * 0.8 + (vnoise(tp * 3.1) - 0.5) * 0.3;
    col *= 1.0 + det * 0.09 * g;
  }
  if (uLightAmt > 0.001) {
    vec3 Lp = normalize(uLightPos - vPos);
    vec3 V = normalize(uCamLocal - vPos);
    vec3 nrm = vec3(0.0, 0.0, 1.0);
    if (uImpasto > 0.001 && uIsBg < 0.5) {
      vec2 st = uMapTexel * max(1.0, 1.0 / max(mag, 0.25));
      float lx = lum(textureGrad(uMap, vUv + vec2(st.x, 0.0), gDx, gDy).rgb) - lum(textureGrad(uMap, vUv - vec2(st.x, 0.0), gDx, gDy).rgb);
      float ly = lum(textureGrad(uMap, vUv + vec2(0.0, st.y), gDx, gDy).rgb) - lum(textureGrad(uMap, vUv - vec2(0.0, st.y), gDx, gDy).rgb);
      nrm = normalize(vec3(-lx * uImpasto * 5.0, -ly * uImpasto * 5.0, 1.0));
    }
    float d = max(dot(nrm, Lp), 0.0);
    float spec = pow(max(dot(reflect(-Lp, nrm), V), 0.0), 28.0) * 0.16 * uImpasto;
    vec2 q = (vUv - 0.5) * 2.0;
    float spot = mix(1.0, 0.86 + 0.2 * exp(-dot(q, q) * 1.4), uSpot);
    col = col * mix(1.0, (0.7 + 0.42 * d) * spot, uLightAmt) + spec * uLightAmt;
  }
  if (!gl_FrontFacing) col *= 0.55; // por detrás de los personajes
  col = applyFog(col, vDist);
  gl_FragColor = vec4(col, uOpacity);
}
`;

const SPARK_VERT = /* glsl */`
attribute vec3 color; attribute float aAlpha; attribute float aSize;
uniform float uPointScale; uniform float uMaxPoint; uniform float uSparkSize; uniform float uZc;
varying vec3 vColor; varying float vAlpha;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float nf = smoothstep(uZc * 0.03, uZc * 0.14, -mv.z);
  gl_PointSize = clamp(aSize * uSparkSize * uPointScale / max(0.0005, -mv.z), 1.0, min(uMaxPoint, 48.0)) * nf;
  vColor = color; vAlpha = aAlpha * nf;
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
      uTime: { value: 0 }, uOpacity: { value: 1 },
      uPointScale: { value: 600 }, uMaxPoint: { value: this.maxPoint },
      uCellWorld: { value: 0.003 }, uCell: { value: new THREE.Vector2(1 / 300, 1 / 300) }, uOverlap: { value: 1.6 },
      uFlowAmp: { value: 1 }, uSparkSize: { value: 0.01 }, uSparkAlpha: { value: 0 },
      uTexSize: { value: new THREE.Vector2(1280, 1280) }, uFlowTex: { value: dummyRGBA },
      uFlowAnim: { value: 0 }, uFlowAmpUV: { value: 0.004 }, uDetail: { value: 1 }, uWeaveFreq: { value: 2 }, uWeave: { value: 1 },
    };
    this.maxTex = r.capabilities.maxTextureSize || 4096;

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
    U.uImpasto.value = artist.style.impasto;
    U.uFlowAmp.value = artist.style.flow * 1.3;
    U.uFlowAmpUV.value = artist.style.mood === 'flow' ? 0.0048 : 0.0014;
    U.uWeave.value = p.support === 'lienzo' ? 1 : 0;
    this._setTexParams(img);

    this._setDepthTextures(D, true);
    U.uEdge.value = D.source === 'ai' ? 0.05 : 10;

    // Malla de relieve (frente) y capa de fondo
    const seg = IS_MOBILE ? 256 : 400;
    const sx = aspect >= 1 ? seg : Math.max(32, Math.round(seg * aspect));
    const sy = aspect >= 1 ? Math.max(32, Math.round(seg / aspect)) : seg;
    U.uTexel.value.set(1 / sx, 1 / sy);
    this.surfGeo = new THREE.PlaneGeometry(1, 1, sx, sy);
    const mk = (isBg) => new THREE.ShaderMaterial({
      vertexShader: SURF_VERT, fragmentShader: SURF_FRAG,
      uniforms: { ...U, uIsBg: { value: isBg ? 1 : 0 } },
      defines: { MOBILE: IS_MOBILE ? 1 : 0 },
      side: isBg ? THREE.FrontSide : THREE.DoubleSide,
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
    if (D.flowTex && this.flowTexSrc !== D.flowTex) {
      if (this.flowTex) this.flowTex.dispose();
      this.flowTex = rgbaTex(D.flowTex.data, D.flowTex.w, D.flowTex.h);
      this.flowTexSrc = D.flowTex;
      U.uFlowTex.value = this.flowTex;
    }
    // color de la zona lejana (sRGB tal cual, para los shaders "crudos")
    const k = 0.5;
    this.fogRaw = [D.farColor[0] * k, D.farColor[1] * k, D.farColor[2] * k];
  }

  // Nueva profundidad (IA): transición suave
  updateDepth(D) {
    if (!this.paint) return;
    this._setDepthTextures(D, false);
    this.U.uEdge.value = D.source === 'ai' ? 0.05 : 10;
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
    if (this.spark) { this.pg.remove(this.spark.obj); this.spark.obj.geometry.dispose(); this.spark.obj.material.dispose(); this.spark = null; }
    if (this.mapTex) { this.mapTex.dispose(); this.mapTex = null; }
    (this.depthTex || []).forEach((t) => t.dispose());
    (this.bgDepthTex || []).forEach((t) => t.dispose());
    this.depthTex = []; this.bgDepthTex = [];
    if (this.bgTex) { this.bgTex.dispose(); this.bgTex = null; }
    if (this.flowTex) { this.flowTex.dispose(); this.flowTex = null; this.flowTexSrc = null; }
    this.paint = null;
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
      uniforms: { uPointScale: this.U.uPointScale, uMaxPoint: this.U.uMaxPoint, uSparkSize: this.U.uSparkSize, uSparkAlpha: this.U.uSparkAlpha, uZc: this.U.uZc },
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const obj = new THREE.Points(g, m);
    obj.frustumCulled = false;
    obj.renderOrder = 5;
    this.pg.add(obj);
    const st = { obj, n, u: new Float32Array(n), v: new Float32Array(n), vx: new Float32Array(n), vy: new Float32Array(n), life: new Float32Array(n), max: new Float32Array(n), z: new Float32Array(n), mode: this.paint.artist.style.mood, rnd: rand(99) };
    this.spark = st;
    this.U.uSparkSize.value = this.paint.H * (st.mode === 'flow' ? 0.0045 : 0.0032);
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

  // ─── Textura: parámetros y alta definición ───
  _setTexParams(img) {
    const U = this.U;
    const w = img.naturalWidth, h = img.naturalHeight;
    U.uTexSize.value.set(w, h);
    U.uMapTexel.value.set(1.4 / w, 1.4 / h);
    const p = this.paint && this.paint.p;
    const wCm = p ? p.sizeCm[1] : 80;
    const threads = p && p.support === 'lienzo' ? 13 : 7;
    U.uWeaveFreq.value = 2 * Math.PI * threads * (wCm / w);
    U.uDetail.value = p && p.support === 'muro' ? 0.6 : 1;
  }
  setHDTexture(img) {
    if (!this.paint || !img) return false;
    const w = img.naturalWidth, h = img.naturalHeight;
    if (Math.max(w, h) > this.maxTex) return false;
    if (w <= this.U.uTexSize.value.x) return false;
    const tex = new THREE.Texture(img);
    tex.colorSpace = THREE.NoColorSpace;
    tex.anisotropy = this.maxAniso;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.generateMipmaps = true;
    tex.needsUpdate = true;
    const old = this.mapTex;
    this.mapTex = tex;
    this.U.uMap.value = tex;
    this._setTexParams(img);
    if (old) setTimeout(() => old.dispose(), 500);
    return true;
  }

  // Zona de paseo: dentro del volumen que "vio" el pintor (ahí la reconstrucción se ve bien)
  _roam(pw) {
    const { W, H, Zc } = this.paint;
    const zF = Zc * (1 + 3.6);
    const p = pw.sub(this.pg.position);
    p.z = THREE.MathUtils.clamp(p.z, Zc - zF * 0.85, Zc * 1.25);
    const k = Math.max(0.3, (Zc - p.z) / Zc);
    const mx = 0.5 * W * 0.85 * k, my = 0.5 * H * 0.85 * k;
    p.x = THREE.MathUtils.clamp(p.x, -mx, mx);
    p.y = THREE.MathUtils.clamp(p.y, -my, my);
    return p.add(this.pg.position);
  }

  // ─── Rayo contra la superficie del cuadro (coordenadas del cuadro) ───
  _raycast(o, d) {
    if (!this.paint || !this.D) return null;
    const { W, H, Zc } = this.paint;
    const D = this.D, U = this.U;
    const amt = U.uAmount.value, nf = U.uNearF.value, ff = U.uFarF.value;
    const zN = Zc * (1 - nf * amt), zF = Zc * (1 + ff * amt);
    const iN = 1 / zN, iF = 1 / zF;
    const state = (t) => {
      const px = o.x + d.x * t, py = o.y + d.y * t, pz = o.z + d.z * t;
      const z = Zc - pz;
      if (z < 0.02 * Zc) return 0;
      const k = z / Zc;
      const u = px / (W * k) + 0.5, v = 0.5 - py / (H * k);
      if (u < 0 || u > 1 || v < 0 || v > 1) return 0;
      const n = sample(D.N, D.w, D.h, u, v);
      return z >= 1 / (iF + (iN - iF) * n) ? 2 : 1; // 2 = detrás de la superficie
    };
    let t = 0.004 * Zc, prev = t, seenFront = false;
    for (let i = 0; i < 320 && t < 14 * Zc; i++) {
      const s = state(t);
      if (s === 1) seenFront = true;
      else if (s === 2 && seenFront) {
        let a = prev, b = t;
        for (let k = 0; k < 10; k++) { const m = (a + b) / 2; if (state(m) === 2) b = m; else a = m; }
        return { t: b, p: new THREE.Vector3(o.x + d.x * b, o.y + d.y * b, o.z + d.z * b) };
      }
      prev = t;
      t += Math.max(0.0025 * Zc, t * 0.025);
    }
    return null;
  }

  // Doble toque dentro: volar hasta el personaje o lugar tocado
  _flyToAt(cx, cy) {
    if (!this.paint) return;
    this.cancelTour();
    const rect = this.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(((cx - rect.left) / rect.width) * 2 - 1, -((cy - rect.top) / rect.height) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.camera);
    const o = ray.ray.origin.clone().sub(this.pg.position);
    const d = ray.ray.direction.clone().normalize();
    const hit = this._raycast(o, d);
    if (!hit) return;
    const { Zc } = this.paint;
    // acercarse de frente, en la dirección desde la que lo pintó el artista (así se ve nítido, sin estirarse)
    const ref = new THREE.Vector3(0, 0, Zc);
    const toRef = ref.clone().sub(hit.p);
    const far = toRef.length();
    toRef.normalize();
    const stop = THREE.MathUtils.clamp(far * 0.32, Zc * 0.08, Zc * 0.9);
    const posL = hit.p.clone().addScaledVector(toRef, stop);
    const posW = posL.add(this.pg.position);
    const tgtW = hit.p.clone().add(this.pg.position);
    this.fly.enabled = false;
    this._camTo(posW, tgtW, 1400, this.camera.fov, null, () => { this.fly.syncFromCamera(); if (this.mode === 'dentro') this.fly.enabled = true; }, true);
  }

  // Puntos de interés a partir de la profundidad: lo más cercano (personaje), algo intermedio con detalle y el fondo
  _pois() {
    const D = this.D, { W, H, Zc } = this.paint, U = this.U;
    const G = 14, gw = G, gh = Math.max(6, Math.round(G * D.h / D.w));
    const cells = [];
    const px = D.px;
    for (let gy = 1; gy < gh - 1; gy++) for (let gx = 1; gx < gw - 1; gx++) {
      let sn = 0, c = 0, sl = 0, sl2 = 0;
      for (let k = 0; k < 9; k++) {
        const u = (gx + (k % 3 + 0.5) / 3) / gw, v = (gy + (((k / 3) | 0) + 0.5) / 3) / gh;
        sn += sample(D.N, D.w, D.h, u, v);
        const xi = Math.min(px.w - 1, Math.floor(u * px.w)), yi = Math.min(px.h - 1, Math.floor(v * px.h));
        const q = (yi * px.w + xi) * 4;
        const l = (px.data[q] * 0.3 + px.data[q + 1] * 0.59 + px.data[q + 2] * 0.11) / 255;
        sl += l; sl2 += l * l; c++;
      }
      const mean = sl / c;
      cells.push({ u: (gx + 0.5) / gw, v: (gy + 0.5) / gh, n: sn / c, var: Math.max(0, sl2 / c - mean * mean) });
    }
    if (!cells.length) return [];
    // protagonista: cerca, con detalle y mejor en la parte alta (caras antes que manos)
    const score = (c) => c.n + c.var * 2.5 + (c.v < 0.48 ? 0.45 : 0) - Math.abs(c.u - 0.5) * 0.2;
    const near = cells.reduce((a, b) => (score(b) > score(a) ? b : a));
    const mids = cells.filter((c) => c.n > 0.3 && c.n < 0.7 && Math.hypot(c.u - near.u, c.v - near.v) > 0.28);
    const mid = mids.length ? mids.reduce((a, b) => (b.var > a.var ? b : a)) : null;
    const fars = cells.filter((c) => Math.hypot(c.u - near.u, c.v - near.v) > 0.25);
    const far = (fars.length ? fars : cells).reduce((a, b) => (b.n + (b.v > 0.6 ? 0.15 : 0) < a.n + (a.v > 0.6 ? 0.15 : 0) ? b : a));
    const zN = Zc * (1 - 0.74), zF = Zc * (1 + 3.6), iN = 1 / zN, iF = 1 / zF;
    const pos = (c) => {
      const z = 1 / (iF + (iN - iF) * c.n), t = z / Zc;
      return new THREE.Vector3((c.u - 0.5) * W * t, (0.5 - c.v) * H * t, Zc - z);
    };
    const out = [{ p: pos(near), kind: 'near' }];
    if (mid) out.push({ p: pos(mid), kind: 'mid' });
    out.push({ p: pos(far), kind: 'far' });
    return out;
  }

  // Viaje automático por dentro del cuadro
  async tourInside() {
    if (!this.paint) return;
    const token = ++this.tourToken;
    this.emit('tour', true);
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const alive = () => this.tourToken === token;
    const waitCam = async () => { await wait(60); while (this.camBusy && alive()) await wait(80); };
    if (this.mode !== 'dentro') { this.emit('mode', 'dentro'); this.applyMode('dentro'); await waitCam(); if (!alive()) return; }
    else await waitCam();
    this.fly.enabled = false;
    const { Zc } = this.paint;
    const L = (v) => v.clone().add(this.pg.position);
    const ref = new THREE.Vector3(0, 0, Zc);
    const pois = this._pois();
    const camL = this.camera.position.clone().sub(this.pg.position);
    const look0 = camL.clone().add(new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion).multiplyScalar(Zc));
    const pts = [camL], looks = [look0];
    const yAxis = new THREE.Vector3(0, 1, 0);
    const subj = pois.find((p) => p.kind === 'near');
    const far = pois.find((p) => p.kind === 'far');
    if (subj) {
      // 1) acercarse de frente al protagonista  2) rodearlo suavemente para ver su volumen
      const toRef = ref.clone().sub(subj.p);
      const dist = toRef.length();
      toRef.normalize();
      pts.push(subj.p.clone().addScaledVector(toRef, dist * 0.5)); looks.push(subj.p.clone());
      pts.push(subj.p.clone().addScaledVector(toRef.clone().applyAxisAngle(yAxis, 0.3), dist * 0.4)); looks.push(subj.p.clone());
      pts.push(subj.p.clone().addScaledVector(toRef.clone().applyAxisAngle(yAxis, -0.3), dist * 0.36)); looks.push(subj.p.clone());
      if (far) {
        // 3) pasar por el lado del protagonista hacia el fondo
        const side = Math.sign(far.p.x - subj.p.x) || 1;
        const pass = subj.p.clone().lerp(far.p, 0.18);
        pass.x += side * dist * 0.35;
        pass.y += dist * 0.05;
        pts.push(pass); looks.push(far.p.clone());
      }
    }
    if (far) {
      const toRef = ref.clone().sub(far.p);
      const dist = toRef.length();
      toRef.normalize();
      pts.push(far.p.clone().addScaledVector(toRef, dist * 0.45)); looks.push(far.p.clone());
    }
    pts.push(ref.clone().lerp(new THREE.Vector3(0, 0, 0), 0.1)); looks.push(new THREE.Vector3(0, 0, 0));
    const W3 = pts.map((v, i) => (i === 0 ? L(v) : this._roam(L(v))));
    const pc = new THREE.CatmullRomCurve3(W3, false, 'centripetal');
    const lc = new THREE.CatmullRomCurve3(looks.map(L), false, 'centripetal');
    // duración por tramo según la distancia, con pausa suave en cada punto
    const segs = W3.length - 1;
    const durs = [];
    for (let i = 0; i < segs; i++) durs.push(THREE.MathUtils.clamp(2600 + 5200 * W3[i].distanceTo(W3[i + 1]) / Zc, 2600, 6500));
    const total = durs.reduce((a, b) => a + b, 0);
    const st = { a: 0 };
    const tmp = new THREE.Vector3();
    this.tween(st, 'a', 1, total, (x) => x, 'cam', null, 0, () => {
      let T = st.a * total, i = 0;
      while (i < segs - 1 && T > durs[i]) { T -= durs[i]; i++; }
      let f = Math.min(1, T / durs[i]);
      f = f * f * (3 - 2 * f);
      const u = (i + f) / segs;
      this.camera.position.copy(pc.getPoint(u));
      this.camera.lookAt(lc.getPoint(u, tmp));
    });
    await waitCam();
    if (!alive()) return;
    this.tourToken = 0;
    this.fly.syncFromCamera();
    this.fly.enabled = this.mode === 'dentro';
    this.emit('tour', false);
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
    this.tween(this.U.uFlowAnim, 'value', on && this.mode === 'dentro' ? 1 : 0, 700, ease.out, 'flowanim');
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

    let amt, nf, ff, fade, fog, light, impasto, spark, anim, bg;
    if (mode === 'museo') {
      amt = 0; nf = 0.38; ff = 0.9; fade = 1; fog = 0; light = 1; impasto = style.impasto; spark = 0; anim = 0; bg = this.bgMuseum;
    } else if (mode === '3d') {
      amt = this.relief; nf = 0.4; ff = 0.75; fade = 0; fog = 0.85; light = 0.55; impasto = style.impasto * 0.7; spark = style.mood === 'flow' ? 0.45 : 0.3; anim = 0; bg = this.bgDark;
    } else {
      amt = 1; nf = 0.74; ff = 3.6; fade = 0; fog = 1; light = style.mood === 'flow' ? 0.32 : 0.16; impasto = style.impasto * 0.8; spark = 0.75; anim = this.anim ? 1 : 0;
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
    this.tween(U.uFlowAnim, 'value', anim, dur, ease.inOut, 'flowanim');
    if (toMuseum && !instant) this.tween(this, 'museumFade', fade, dur * 0.55, ease.inOut, 'fade', null, undefined, null, dur * 0.6);
    else this.tween(this, 'museumFade', fade, instant ? 0 : 650, ease.inOut, 'fade');
    this._bgFrom = this.scene.background.clone();
    this._bgTo = bg.clone();
    this.tween(this, '_bgT', 1, dur, ease.inOut, 'bg', null, 0);

    if (mode !== 'dentro' && this.spot) U.uLightPos.value.copy(this.spot.position).sub(this.pg.position);
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
      this.fly.limits = { pitch: [-1.05, 1.05], fn: (pw) => this._roam(pw) };
      const inside = ref.clone().lerp(look, 0.1);
      this._camTo(inside, look, dur, fov, null, () => { this.fly.syncFromCamera(); if (this.mode === 'dentro' && !this.tourToken) this.fly.enabled = true; });
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
    if (!this.paint) return;
    if (this.mode === 'dentro') { this._flyToAt(cx, cy); return; }
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
    const waitCam = async () => { await wait(60); while (this.camBusy && alive()) await wait(80); };
    if (this.mode !== '3d') { this.emit('mode', '3d'); this.applyMode('3d'); await waitCam(); }
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
    await waitCam();
    if (!alive()) return;
    this.emit('mode', 'dentro'); this.applyMode('dentro');
    await waitCam();
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
    await waitCam();
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
      this.bg.visible = U.uAmount.value > 0.01;
      this._applyFade();
      if (this.mode === 'dentro') {
        const { W, H, Zc } = this.paint;
        // luz que recorre la escena despacio (las pinceladas brillan al pasar)
        U.uLightPos.value.set(Math.sin(time * 0.17) * W * 0.7, H * (0.55 + 0.2 * Math.sin(time * 0.11)), Zc * 0.55);
        // al acercarte a algo, frenas solo (para llegar despacio a un personaje)
        if ((this._frame = (this._frame || 0) + 1) % 4 === 0 && this.fly.enabled) {
          const o = this.camera.position.clone().sub(this.pg.position);
          const d = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
          const hit = this._raycast(o, d);
          const dist = hit ? hit.t : Zc * 2;
          this.fly.speed = THREE.MathUtils.clamp(dist * 0.55, Zc * 0.025, Zc * 0.42);
        }
      }
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
      if (this.mode === 'dentro' && this.camBusy) this._updatePointScale();
    }
    this.renderer.render(this.scene, this.camera);
  }
}

export { IS_MOBILE };
