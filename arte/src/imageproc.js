// Procesado de imagen en el navegador: profundidad instantánea, capas de fondo y campo de pinceladas.

export function getPixels(img, maxSide) {
  const iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
  const s = Math.min(1, maxSide / Math.max(iw, ih));
  const w = Math.max(8, Math.round(iw * s)), h = Math.max(8, Math.round(ih * s));
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  // reducción en dos pasos para evitar aliasing
  if (iw > w * 2.5) {
    const m = document.createElement('canvas');
    m.width = w * 2; m.height = h * 2;
    const mc = m.getContext('2d');
    mc.imageSmoothingQuality = 'high';
    mc.drawImage(img, 0, 0, m.width, m.height);
    ctx.drawImage(m, 0, 0, w, h);
  } else {
    ctx.drawImage(img, 0, 0, w, h);
  }
  return { w, h, data: ctx.getImageData(0, 0, w, h).data, canvas: c };
}

const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
export const smoothstep = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };

function boxH(src, dst, w, h, r) {
  const inv = 1 / (2 * r + 1);
  for (let y = 0; y < h; y++) {
    const o = y * w;
    let acc = 0;
    for (let k = -r; k <= r; k++) acc += src[o + Math.min(w - 1, Math.max(0, k))];
    for (let x = 0; x < w; x++) {
      dst[o + x] = acc * inv;
      acc += src[o + Math.min(w - 1, x + r + 1)] - src[o + Math.max(0, x - r)];
    }
  }
}
function boxV(src, dst, w, h, r) {
  const inv = 1 / (2 * r + 1);
  for (let x = 0; x < w; x++) {
    let acc = 0;
    for (let k = -r; k <= r; k++) acc += src[Math.min(h - 1, Math.max(0, k)) * w + x];
    for (let y = 0; y < h; y++) {
      dst[y * w + x] = acc * inv;
      acc += src[Math.min(h - 1, y + r + 1) * w + x] - src[Math.max(0, y - r) * w + x];
    }
  }
}
export function boxBlur(src, w, h, r) {
  r = Math.round(r);
  if (r < 1) return Float32Array.from(src);
  const t = new Float32Array(w * h), o = new Float32Array(w * h);
  boxH(src, t, w, h, r); boxV(t, o, w, h, r);
  return o;
}
export function blur(src, w, h, sigma) {
  const r = Math.max(1, Math.round(sigma));
  return boxBlur(boxBlur(boxBlur(src, w, h, r), w, h, r), w, h, r);
}

function minFilter(src, w, h, r) {
  const t = new Float32Array(w * h), o = new Float32Array(w * h);
  for (let y = 0; y < h; y++) {
    const row = y * w;
    for (let x = 0; x < w; x++) {
      let m = 1e9;
      const a = Math.max(0, x - r), b = Math.min(w - 1, x + r);
      for (let k = a; k <= b; k++) { const v = src[row + k]; if (v < m) m = v; }
      t[row + x] = m;
    }
  }
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      let m = 1e9;
      const a = Math.max(0, y - r), b = Math.min(h - 1, y + r);
      for (let k = a; k <= b; k++) { const v = t[k * w + x]; if (v < m) m = v; }
      o[y * w + x] = m;
    }
  }
  return o;
}

function maxFilter(src, w, h, r) {
  const neg = new Float32Array(src.length);
  for (let i = 0; i < src.length; i++) neg[i] = -src[i];
  const m = minFilter(neg, w, h, r);
  for (let i = 0; i < m.length; i++) m[i] = -m[i];
  return m;
}

export function guidedFilter(I, p, w, h, r, eps) {
  const n = w * h;
  const Ip = new Float32Array(n), II = new Float32Array(n);
  for (let i = 0; i < n; i++) { Ip[i] = I[i] * p[i]; II[i] = I[i] * I[i]; }
  const mI = boxBlur(I, w, h, r), mp = boxBlur(p, w, h, r), mIp = boxBlur(Ip, w, h, r), mII = boxBlur(II, w, h, r);
  const a = new Float32Array(n), b = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const varI = mII[i] - mI[i] * mI[i];
    const cov = mIp[i] - mI[i] * mp[i];
    a[i] = cov / (varI + eps);
    b[i] = mp[i] - a[i] * mI[i];
  }
  const ma = boxBlur(a, w, h, r), mb = boxBlur(b, w, h, r);
  const q = new Float32Array(n);
  for (let i = 0; i < n; i++) q[i] = ma[i] * I[i] + mb[i];
  return q;
}

function distanceInside(mask, w, h) {
  const INF = 1e9, d = new Float32Array(w * h);
  for (let i = 0; i < d.length; i++) d[i] = mask[i] ? INF : 0;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x;
    if (!d[i]) continue;
    let m = d[i];
    if (x > 0) m = Math.min(m, d[i - 1] + 3);
    if (y > 0) {
      m = Math.min(m, d[i - w] + 3);
      if (x > 0) m = Math.min(m, d[i - w - 1] + 4);
      if (x < w - 1) m = Math.min(m, d[i - w + 1] + 4);
    }
    d[i] = m;
  }
  for (let y = h - 1; y >= 0; y--) for (let x = w - 1; x >= 0; x--) {
    const i = y * w + x;
    if (!d[i]) continue;
    let m = d[i];
    if (x < w - 1) m = Math.min(m, d[i + 1] + 3);
    if (y < h - 1) {
      m = Math.min(m, d[i + w] + 3);
      if (x < w - 1) m = Math.min(m, d[i + w + 1] + 4);
      if (x > 0) m = Math.min(m, d[i + w - 1] + 4);
    }
    d[i] = m;
  }
  let mx = 0;
  for (let i = 0; i < d.length; i++) { if (d[i] >= INF) d[i] = 0; d[i] /= 3; if (d[i] > mx) mx = d[i]; }
  return { d, max: mx };
}

function kmeans(s, k, iters) {
  const n = s.length / 3;
  if (n < k) return [[0.5, 0.5, 0.5]];
  const idx = [...Array(n).keys()].sort((a, b) => (s[a * 3] + s[a * 3 + 1] + s[a * 3 + 2]) - (s[b * 3] + s[b * 3 + 1] + s[b * 3 + 2]));
  const c = [];
  for (let j = 0; j < k; j++) { const t = idx[Math.floor((j + 0.5) / k * n)]; c.push([s[t * 3], s[t * 3 + 1], s[t * 3 + 2]]); }
  const asg = new Int32Array(n);
  for (let it = 0; it < iters; it++) {
    for (let i = 0; i < n; i++) {
      let best = 0, bd = 1e9;
      for (let j = 0; j < k; j++) {
        const dr = s[i * 3] - c[j][0], dg = s[i * 3 + 1] - c[j][1], db = s[i * 3 + 2] - c[j][2];
        const dd = dr * dr + dg * dg + db * db;
        if (dd < bd) { bd = dd; best = j; }
      }
      asg[i] = best;
    }
    const acc = c.map(() => [0, 0, 0, 0]);
    for (let i = 0; i < n; i++) { const a = acc[asg[i]]; a[0] += s[i * 3]; a[1] += s[i * 3 + 1]; a[2] += s[i * 3 + 2]; a[3]++; }
    for (let j = 0; j < k; j++) if (acc[j][3]) c[j] = [acc[j][0] / acc[j][3], acc[j][1] / acc[j][3], acc[j][2] / acc[j][3]];
  }
  return c;
}

function percentile(arr, p) {
  const step = Math.max(1, Math.floor(arr.length / 20000));
  const a = [];
  for (let i = 0; i < arr.length; i += step) a.push(arr[i]);
  a.sort((x, y) => x - y);
  return a[Math.min(a.length - 1, Math.max(0, Math.floor(p * (a.length - 1))))];
}

export function normalizeRobust(arr, lo = 0.02, hi = 0.98) {
  const a = percentile(arr, lo), b = percentile(arr, hi);
  const out = new Float32Array(arr.length);
  const s = b - a > 1e-6 ? 1 / (b - a) : 1;
  for (let i = 0; i < arr.length; i++) out[i] = clamp01((arr[i] - a) * s);
  return out;
}

export function luminance(px) {
  const { w, h, data } = px, n = w * h, L = new Float32Array(n);
  for (let i = 0; i < n; i++) L[i] = (0.299 * data[i * 4] + 0.587 * data[i * 4 + 1] + 0.114 * data[i * 4 + 2]) / 255;
  return L;
}

// Profundidad instantánea (cercanía 0 = lejos, 1 = cerca) a partir de pistas de composición y del color.
export function heuristicDepth(px, hint = {}) {
  const { w, h, data } = px, n = w * h;
  const kind = hint.kind || 'portrait';
  const L = luminance(px);
  const P = new Float32Array(n);
  const hz = hint.horizon ?? 0.5;
  const vp = hint.vp || [0.5, 0.45];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const u = (x + 0.5) / w, v = (y + 0.5) / h, i = y * w + x;
    if (kind === 'landscape') {
      P[i] = v < hz ? 0.02 + 0.06 * (v / hz) : 0.08 + 0.92 * ((v - hz) / (1 - hz));
    } else if (kind === 'interior') {
      const dx = (u - vp[0]) / (u < vp[0] ? vp[0] : 1 - vp[0]);
      const dy = (v - vp[1]) / (v < vp[1] ? vp[1] : 1 - vp[1]);
      P[i] = 0.06 + 0.94 * Math.pow(Math.min(1, Math.max(Math.abs(dx), Math.abs(dy))), 0.95);
    } else {
      P[i] = hint.floor && v > hint.floor ? 0.25 + 0.6 * (v - hint.floor) / (1 - hint.floor) : 0.18 * v;
    }
  }
  // Volúmenes aproximados (elipses en forma de cúpula)
  const Bf = new Float32Array(n);
  for (const b of hint.blobs || []) {
    const [bx, by, rx, ry, st] = b;
    const x0 = Math.max(0, Math.floor((bx - rx * 1.3) * w)), x1 = Math.min(w - 1, Math.ceil((bx + rx * 1.3) * w));
    const y0 = Math.max(0, Math.floor((by - ry * 1.3) * h)), y1 = Math.min(h - 1, Math.ceil((by + ry * 1.3) * h));
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      const dx = ((x + 0.5) / w - bx) / rx, dy = ((y + 0.5) / h - by) / ry;
      const r = Math.sqrt(dx * dx + dy * dy);
      let val = 0;
      if (r < 1) val = 0.25 + 0.75 * Math.sqrt(1 - r * r);
      else if (r < 1.3) val = 0.25 * (1 - (r - 1) / 0.3);
      val *= st;
      const i = y * w + x;
      if (val > Bf[i]) Bf[i] = val;
    }
  }
  // Figura frente al fondo: distancia de color respecto a los bordes
  let F = null;
  if (hint.border) {
    const samples = [];
    const bt = Math.max(2, Math.round(h * 0.035)), bl = Math.max(2, Math.round(w * 0.035));
    const sideMax = kind === 'portrait' ? Math.round(h * 0.7) : h;
    const push = (x, y) => { const i = (y * w + x) * 4; samples.push(data[i] / 255, data[i + 1] / 255, data[i + 2] / 255); };
    const stepX = Math.max(1, Math.floor(w / 160)), stepY = Math.max(1, Math.floor(h / 160));
    if (hint.border.includes('t')) for (let y = 0; y < bt; y++) for (let x = 0; x < w; x += stepX) push(x, y);
    if (hint.border.includes('b')) for (let y = h - bt; y < h; y++) for (let x = 0; x < w; x += stepX) push(x, y);
    if (hint.border.includes('l')) for (let y = 0; y < sideMax; y += stepY) for (let x = 0; x < bl; x++) push(x, y);
    if (hint.border.includes('r')) for (let y = 0; y < sideMax; y += stepY) for (let x = w - bl; x < w; x++) push(x, y);
    const s = new Float32Array(samples);
    const C = kmeans(s, 3, 8);
    const distTo = (r, g, b) => {
      let m = 1e9;
      for (const c of C) { const dr = r - c[0], dg = g - c[1], db = b - c[2]; const d = dr * dr * 0.8 + dg * dg + db * db * 0.7; if (d < m) m = d; }
      return Math.sqrt(m);
    };
    const sd = [];
    for (let i = 0; i < s.length; i += 3) sd.push(distTo(s[i], s[i + 1], s[i + 2]));
    const noise = percentile(Float32Array.from(sd), 0.6);
    const t0 = noise * 1.5 + 0.03, t1 = t0 + 0.14;
    let F0 = new Float32Array(n);
    for (let i = 0; i < n; i++) F0[i] = smoothstep(t0, t1, distTo(data[i * 4] / 255, data[i * 4 + 1] / 255, data[i * 4 + 2] / 255));
    F0 = blur(F0, w, h, Math.max(1, w / 160));
    if (hint.blobs && hint.blobs.length) for (let i = 0; i < n; i++) F0[i] *= clamp01(0.45 + 1.1 * Bf[i]);
    // limpieza morfológica: cerrar huecos y quitar motas
    const rr = Math.max(2, Math.round(Math.max(w, h) / 90));
    F0 = minFilter(maxFilter(F0, w, h, rr), w, h, rr);
    F0 = maxFilter(minFilter(F0, w, h, rr), w, h, rr);
    F0 = blur(F0, w, h, 1);
    const mask = new Uint8Array(n);
    for (let i = 0; i < n; i++) mask[i] = F0[i] > 0.5 ? 1 : 0;
    const { d, max } = distanceInside(mask, w, h);
    F = new Float32Array(n);
    const dm = Math.max(1, max * 0.65);
    for (let i = 0; i < n; i++) F[i] = F0[i] * (0.45 + 0.55 * Math.sqrt(Math.min(1, d[i] / dm)));
  }
  // Detalle local (lo cercano suele tener más contraste)
  const G = new Float32Array(n);
  for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
    const i = y * w + x;
    const gx = L[i + 1] - L[i - 1], gy = L[i + w] - L[i - w];
    G[i] = Math.sqrt(gx * gx + gy * gy);
  }
  const Dt = normalizeRobust(blur(G, w, h, Math.max(2, w / 80)), 0.05, 0.95);

  const N = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const f = F ? F[i] : 0;
    switch (kind) {
      case 'landscape': N[i] = 0.74 * P[i] + 0.42 * Bf[i] + 0.04 * Dt[i]; break;
      case 'interior': N[i] = 0.64 * P[i] + 0.46 * Bf[i] + 0.03 * Dt[i]; break;
      case 'still': N[i] = 0.2 + 0.14 * P[i] + 0.5 * f + 0.22 * Bf[i]; break;
      default: N[i] = 0.2 + 0.1 * P[i] + 0.5 * f + 0.24 * Bf[i];
    }
  }
  // suavizado: el interior de las figuras queda liso; la silueta conserva su borde
  return normalizeRobust(blur(N, w, h, Math.max(1, Math.round(Math.max(w, h) / 200))), 0.01, 0.99);
}

// Reescalado bilineal de un mapa de un canal
export function resample(src, sw, sh, dw, dh) {
  const out = new Float32Array(dw * dh);
  for (let y = 0; y < dh; y++) {
    const fy = Math.min(sh - 1, Math.max(0, (y + 0.5) * sh / dh - 0.5));
    const y0 = Math.floor(fy), y1 = Math.min(sh - 1, y0 + 1), ty = fy - y0;
    for (let x = 0; x < dw; x++) {
      const fx = Math.min(sw - 1, Math.max(0, (x + 0.5) * sw / dw - 0.5));
      const x0 = Math.floor(fx), x1 = Math.min(sw - 1, x0 + 1), tx = fx - x0;
      const a = src[y0 * sw + x0] * (1 - tx) + src[y0 * sw + x1] * tx;
      const b = src[y1 * sw + x0] * (1 - tx) + src[y1 * sw + x1] * tx;
      out[y * dw + x] = a * (1 - ty) + b * ty;
    }
  }
  return out;
}

// Relleno suave (push-pull) de las zonas tapadas por la figura
function pushPull(rgba, w, h, wgt) {
  const levels = [];
  let cw = w, ch = h;
  let R = new Float32Array(w * h), G = new Float32Array(w * h), B = new Float32Array(w * h), A = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) {
    const a = wgt[i];
    R[i] = rgba[i * 4] * a; G[i] = rgba[i * 4 + 1] * a; B[i] = rgba[i * 4 + 2] * a; A[i] = a;
  }
  levels.push({ w: cw, h: ch, R, G, B, A });
  while (cw > 1 || ch > 1) {
    const nw = Math.max(1, Math.ceil(cw / 2)), nh = Math.max(1, Math.ceil(ch / 2));
    const p = levels[levels.length - 1];
    const nR = new Float32Array(nw * nh), nG = new Float32Array(nw * nh), nB = new Float32Array(nw * nh), nA = new Float32Array(nw * nh);
    for (let y = 0; y < nh; y++) for (let x = 0; x < nw; x++) {
      let sr = 0, sg = 0, sb = 0, sa = 0;
      for (let dy = 0; dy < 2; dy++) for (let dx = 0; dx < 2; dx++) {
        const xx = x * 2 + dx, yy = y * 2 + dy;
        if (xx >= cw || yy >= ch) continue;
        const j = yy * cw + xx;
        sr += p.R[j]; sg += p.G[j]; sb += p.B[j]; sa += p.A[j];
      }
      const i = y * nw + x;
      if (sa > 1e-6) {
        const a2 = Math.min(1, sa);
        nR[i] = sr / sa * a2; nG[i] = sg / sa * a2; nB[i] = sb / sa * a2; nA[i] = a2;
      }
    }
    levels.push({ w: nw, h: nh, R: nR, G: nG, B: nB, A: nA });
    cw = nw; ch = nh;
  }
  const top = levels[levels.length - 1];
  for (let i = 0; i < top.A.length; i++) if (top.A[i] < 1e-6) { top.R[i] = top.G[i] = top.B[i] = 90; top.A[i] = 1; }
  else { top.R[i] /= top.A[i]; top.G[i] /= top.A[i]; top.B[i] /= top.A[i]; top.A[i] = 1; }
  for (let l = levels.length - 2; l >= 0; l--) {
    const L = levels[l], U = levels[l + 1];
    for (let y = 0; y < L.h; y++) {
      const fy = Math.min(U.h - 1, Math.max(0, (y + 0.5) / 2 - 0.5));
      const y0 = Math.floor(fy), y1 = Math.min(U.h - 1, y0 + 1), ty = fy - y0;
      for (let x = 0; x < L.w; x++) {
        const i = y * L.w + x;
        const a = L.A[i];
        if (a >= 0.999) { L.R[i] /= a; L.G[i] /= a; L.B[i] /= a; L.A[i] = 1; continue; }
        const fx = Math.min(U.w - 1, Math.max(0, (x + 0.5) / 2 - 0.5));
        const x0 = Math.floor(fx), x1 = Math.min(U.w - 1, x0 + 1), tx = fx - x0;
        const k00 = y0 * U.w + x0, k01 = y0 * U.w + x1, k10 = y1 * U.w + x0, k11 = y1 * U.w + x1;
        const bl = (arr) => (arr[k00] * (1 - tx) + arr[k01] * tx) * (1 - ty) + (arr[k10] * (1 - tx) + arr[k11] * tx) * ty;
        L.R[i] = L.R[i] + (1 - a) * bl(U.R);
        L.G[i] = L.G[i] + (1 - a) * bl(U.G);
        L.B[i] = L.B[i] + (1 - a) * bl(U.B);
        L.A[i] = 1;
      }
    }
  }
  return levels[0];
}

// Relleno suave de un mapa escalar (p. ej. la profundidad del fondo detrás de las figuras)
function pushPullScalar(V, w, h, wgt) {
  const levels = [];
  let cw = w, ch = h;
  let A = new Float32Array(w * h), S = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) { A[i] = wgt[i]; S[i] = V[i] * wgt[i]; }
  levels.push({ w, h, S, A });
  while (cw > 1 || ch > 1) {
    const nw = Math.max(1, Math.ceil(cw / 2)), nh = Math.max(1, Math.ceil(ch / 2));
    const p = levels[levels.length - 1];
    const nS = new Float32Array(nw * nh), nA = new Float32Array(nw * nh);
    for (let y = 0; y < nh; y++) for (let x = 0; x < nw; x++) {
      let ss = 0, sa = 0;
      for (let dy = 0; dy < 2; dy++) for (let dx = 0; dx < 2; dx++) {
        const xx = x * 2 + dx, yy = y * 2 + dy;
        if (xx >= cw || yy >= ch) continue;
        const j = yy * cw + xx; ss += p.S[j]; sa += p.A[j];
      }
      const i = y * nw + x;
      if (sa > 1e-6) { const a2 = Math.min(1, sa); nS[i] = ss / sa * a2; nA[i] = a2; }
    }
    levels.push({ w: nw, h: nh, S: nS, A: nA });
    cw = nw; ch = nh;
  }
  const top = levels[levels.length - 1];
  for (let i = 0; i < top.A.length; i++) { top.S[i] = top.A[i] > 1e-6 ? top.S[i] / top.A[i] : 0; top.A[i] = 1; }
  for (let l = levels.length - 2; l >= 0; l--) {
    const L = levels[l], U = levels[l + 1];
    for (let y = 0; y < L.h; y++) {
      const fy = Math.min(U.h - 1, Math.max(0, (y + 0.5) / 2 - 0.5));
      const y0 = Math.floor(fy), y1 = Math.min(U.h - 1, y0 + 1), ty = fy - y0;
      for (let x = 0; x < L.w; x++) {
        const i = y * L.w + x, a = L.A[i];
        if (a >= 0.999) { L.S[i] /= a; L.A[i] = 1; continue; }
        const fx = Math.min(U.w - 1, Math.max(0, (x + 0.5) / 2 - 0.5));
        const x0 = Math.floor(fx), x1 = Math.min(U.w - 1, x0 + 1), tx = fx - x0;
        const up = (U.S[y0 * U.w + x0] * (1 - tx) + U.S[y0 * U.w + x1] * tx) * (1 - ty) + (U.S[y1 * U.w + x0] * (1 - tx) + U.S[y1 * U.w + x1] * tx) * ty;
        L.S[i] = L.S[i] + (1 - a) * up; L.A[i] = 1;
      }
    }
  }
  return levels[0].S;
}

// Capa de fondo: profundidad "detrás" de las figuras y color rellenado
export function deriveLayers(N, w, h, colorPx) {
  const n = w * h;
  const scale = Math.max(w, h) / 256;
  // bordes de profundidad (saltos bruscos), no pendientes suaves
  const E = new Float32Array(n);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x, v = N[i];
    let m = 0;
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      const xx = x + dx, yy = y + dy;
      if ((dx || dy) && xx >= 0 && yy >= 0 && xx < w && yy < h) { const d = Math.abs(v - N[yy * w + xx]); if (d > m) m = d; }
    }
    E[i] = smoothstep(0.022, 0.055, m * scale);
  }
  const R = Math.max(3, Math.round(Math.max(w, h) * 0.05));
  const ED = maxFilter(E, w, h, R);
  let Dmin = minFilter(N, w, h, R);
  Dmin = boxBlur(Dmin, w, h, Math.round(R * 0.5));
  let M = new Float32Array(n);
  for (let i = 0; i < n; i++) { if (Dmin[i] > N[i]) Dmin[i] = N[i]; M[i] = ED[i] * smoothstep(0.02, 0.08, N[i] - Dmin[i]); }
  M = boxBlur(M, w, h, 2);
  // Lámina de fondo: la escena sin las figuras (profundidad rellenada desde lo que las rodea)
  const R3 = Math.max(8, Math.round(Math.max(w, h) * 0.22));
  const B0 = boxBlur(minFilter(N, w, h, R3), w, h, Math.round(R3 * 0.4));
  const wB = new Float32Array(n);
  for (let i = 0; i < n; i++) wB[i] = 1 - smoothstep(0.05, 0.15, N[i] - Math.min(B0[i], N[i]));
  let plate = pushPullScalar(N, w, h, wB);
  plate = boxBlur(boxBlur(plate, w, h, 2), w, h, 2);
  const Db = new Float32Array(n);
  for (let i = 0; i < n; i++) Db[i] = Math.min(N[i], plate[i], N[i] + (Dmin[i] - N[i]) * Math.min(1, M[i] * 1.6));
  // qué es "fondo" a gran escala: solo de ahí se toman colores para rellenar detrás de las figuras
  const R2 = Math.max(6, Math.round(Math.max(w, h) * 0.12));
  const Dbig = boxBlur(minFilter(N, w, h, R2), w, h, Math.round(R2 * 0.3));
  const known = new Float32Array(n);
  for (let i = 0; i < n; i++) known[i] = Math.min(wB[i], 1 - smoothstep(0.03, 0.1, N[i] - Math.min(Dbig[i], N[i])));
  const { w: cw, h: ch, data } = colorPx;
  const Mc = resample(M, w, h, cw, ch);
  const Kc = resample(known, w, h, cw, ch);
  const wgt = new Float32Array(cw * ch);
  for (let i = 0; i < wgt.length; i++) wgt[i] = smoothstep(0.55, 0.9, Kc[i]) * (1 - smoothstep(0.15, 0.45, Mc[i]));
  const pp = pushPull(data, cw, ch, wgt);
  // relleno en espejo por filas: continúa la textura del fondo a ambos lados de la figura
  const nC = cw * ch;
  let mR = new Float32Array(nC), mG = new Float32Array(nC), mB = new Float32Array(nC), mW = new Float32Array(nC);
  const isK = (i) => wgt[i] > 0.6;
  for (let y = 0; y < ch; y++) {
    const row = y * cw;
    let x = 0;
    while (x < cw) {
      if (isK(row + x)) { x++; continue; }
      const a = x;
      while (x < cw && !isK(row + x)) x++;
      const b = x - 1;
      for (let xx = a; xx <= b; xx++) {
        const dl = xx - a + 1, dr = b - xx + 1;
        const xl = a - dl, xr = b + dr;
        let r = 0, g = 0, bb = 0, ws = 0;
        if (xl >= 0 && isK(row + xl)) { const k = (row + xl) * 4; r += data[k] * dr; g += data[k + 1] * dr; bb += data[k + 2] * dr; ws += dr; }
        if (xr < cw && isK(row + xr)) { const k = (row + xr) * 4; r += data[k] * dl; g += data[k + 1] * dl; bb += data[k + 2] * dl; ws += dl; }
        const i = row + xx;
        if (ws > 0) { mR[i] = r / ws; mG[i] = g / ws; mB[i] = bb / ws; mW[i] = 1; }
      }
    }
  }
  mR = boxBlur(mR, cw, ch, 1); mG = boxBlur(mG, cw, ch, 1); mB = boxBlur(mB, cw, ch, 1); mW = boxBlur(mW, cw, ch, 1);
  const rgba = new Uint8Array(nC * 4);
  for (let i = 0; i < nC; i++) {
    const t = Math.max(1 - smoothstep(0.5, 0.9, Kc[i]), smoothstep(0.05, 0.4, Mc[i]));
    let fr = pp.R[i], fg = pp.G[i], fb = pp.B[i];
    if (mW[i] > 0.05) {
      const k = 0.7 * Math.min(1, mW[i]);
      fr = fr * (1 - k) + (mR[i] / mW[i]) * k; fg = fg * (1 - k) + (mG[i] / mW[i]) * k; fb = fb * (1 - k) + (mB[i] / mW[i]) * k;
    }
    const shade = 1 - 0.2 * t; // ligera sombra detrás de la figura
    rgba[i * 4] = Math.round((data[i * 4] * (1 - t) + fr * t) * shade);
    rgba[i * 4 + 1] = Math.round((data[i * 4 + 1] * (1 - t) + fg * t) * shade);
    rgba[i * 4 + 2] = Math.round((data[i * 4 + 2] * (1 - t) + fb * t) * shade);
    rgba[i * 4 + 3] = Math.round(clamp01(Mc[i]) * 255);
  }
  return { bgN: Db, mask: M, bgRGBA: rgba, cw, ch };
}

// Orientación de las pinceladas (tensor de estructura)
export function flowField(L, w, h) {
  const n = w * h;
  const Lb = blur(L, w, h, 1);
  const gx = new Float32Array(n), gy = new Float32Array(n);
  for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
    const i = y * w + x;
    gx[i] = (Lb[i - w + 1] + 2 * Lb[i + 1] + Lb[i + w + 1]) - (Lb[i - w - 1] + 2 * Lb[i - 1] + Lb[i + w - 1]);
    gy[i] = (Lb[i + w - 1] + 2 * Lb[i + w] + Lb[i + w + 1]) - (Lb[i - w - 1] + 2 * Lb[i - w] + Lb[i - w + 1]);
  }
  const xx = new Float32Array(n), xy = new Float32Array(n), yy = new Float32Array(n);
  for (let i = 0; i < n; i++) { xx[i] = gx[i] * gx[i]; xy[i] = gx[i] * gy[i]; yy[i] = gy[i] * gy[i]; }
  const s = Math.max(2, w / 90);
  const Jxx = blur(xx, w, h, s), Jxy = blur(xy, w, h, s), Jyy = blur(yy, w, h, s);
  const c2 = new Float32Array(n), s2 = new Float32Array(n), coh = new Float32Array(n);
  let cmax = 1e-9;
  for (let i = 0; i < n; i++) {
    const a = Jxx[i] - Jyy[i], b = 2 * Jxy[i];
    const nn = Math.sqrt(a * a + b * b);
    const tr = Jxx[i] + Jyy[i];
    if (nn > 1e-9) { c2[i] = -a / nn; s2[i] = -b / nn; } else { c2[i] = 1; s2[i] = 0; }
    coh[i] = nn / (tr + 1e-6) * Math.min(1, tr * 40);
    if (coh[i] > cmax) cmax = coh[i];
  }
  for (let i = 0; i < n; i++) coh[i] = Math.min(1, coh[i] / (cmax * 0.7));
  return { w, h, c2, s2, coh };
}

export function sample(arr, w, h, u, v) {
  const fx = Math.min(w - 1, Math.max(0, u * w - 0.5)), fy = Math.min(h - 1, Math.max(0, v * h - 0.5));
  const x0 = Math.floor(fx), y0 = Math.floor(fy), x1 = Math.min(w - 1, x0 + 1), y1 = Math.min(h - 1, y0 + 1);
  const tx = fx - x0, ty = fy - y0;
  return (arr[y0 * w + x0] * (1 - tx) + arr[y0 * w + x1] * tx) * (1 - ty) + (arr[y1 * w + x0] * (1 - tx) + arr[y1 * w + x1] * tx) * ty;
}

export function averageColor(px, N, below = 1.1) {
  const { w, h, data } = px;
  let r = 0, g = 0, b = 0, c = 0;
  for (let y = 0; y < h; y += 2) for (let x = 0; x < w; x += 2) {
    const i = y * w + x;
    if (N && N[i] > below) continue;
    r += data[i * 4]; g += data[i * 4 + 1]; b += data[i * 4 + 2]; c++;
  }
  if (!c) return averageColor(px, null);
  return [r / c / 255, g / c / 255, b / c / 255];
}

// Textura de flujo para la animación 4D: dirección de la pincelada con signo coherente
// (el tensor de estructura da orientaciones con 180° de ambigüedad; se propaga el signo de vecino a vecino).
export function flowTexture(F, outW, outH) {
  const L = Math.max(F.w, F.h);
  const gw = Math.max(12, Math.round(72 * F.w / L)), gh = Math.max(12, Math.round(72 * F.h / L));
  const n = gw * gh;
  const vx = new Float32Array(n), vy = new Float32Array(n), co = new Float32Array(n);
  for (let gy = 0; gy < gh; gy++) for (let gx = 0; gx < gw; gx++) {
    const x0 = Math.floor(gx * F.w / gw), x1 = Math.max(x0 + 1, Math.floor((gx + 1) * F.w / gw));
    const y0 = Math.floor(gy * F.h / gh), y1 = Math.max(y0 + 1, Math.floor((gy + 1) * F.h / gh));
    let C = 0, S = 0, ws = 0;
    for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) {
      const i = y * F.w + x, w = F.coh[i] + 1e-3;
      C += F.c2[i] * w; S += F.s2[i] * w; ws += w;
    }
    const k = gy * gw + gx;
    const th = 0.5 * Math.atan2(S, C);
    vx[k] = Math.cos(th); vy[k] = Math.sin(th);
    co[k] = Math.hypot(C, S) / ws;
  }
  // propagación voraz por orden de coherencia (montículo binario)
  const heap = [], pr = [];
  const push = (i, p) => {
    heap.push(i); pr.push(p);
    let c = heap.length - 1;
    while (c > 0) { const q = (c - 1) >> 1; if (pr[q] >= pr[c]) break; [heap[q], heap[c]] = [heap[c], heap[q]]; [pr[q], pr[c]] = [pr[c], pr[q]]; c = q; }
  };
  const pop = () => {
    const top = heap[0];
    const li = heap.pop(), lp = pr.pop();
    if (heap.length) {
      heap[0] = li; pr[0] = lp;
      let c = 0;
      for (;;) {
        const l = 2 * c + 1, r = l + 1;
        let m = c;
        if (l < heap.length && pr[l] > pr[m]) m = l;
        if (r < heap.length && pr[r] > pr[m]) m = r;
        if (m === c) break;
        [heap[m], heap[c]] = [heap[c], heap[m]]; [pr[m], pr[c]] = [pr[c], pr[m]]; c = m;
      }
    }
    return top;
  };
  const done = new Uint8Array(n);
  let start = 0;
  for (let i = 1; i < n; i++) if (co[i] > co[start]) start = i;
  push(start, 1e9);
  while (heap.length) {
    const i = pop();
    if (done[i]) continue;
    const x = i % gw, y = (i / gw) | 0;
    let sx = 0, sy = 0;
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      if (!dx && !dy) continue;
      const xx = x + dx, yy = y + dy;
      if (xx < 0 || yy < 0 || xx >= gw || yy >= gh) continue;
      const j = yy * gw + xx;
      if (done[j]) { sx += vx[j] * (co[j] + 0.05); sy += vy[j] * (co[j] + 0.05); }
    }
    if (vx[i] * sx + vy[i] * sy < 0) { vx[i] = -vx[i]; vy[i] = -vy[i]; }
    done[i] = 1;
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      const xx = x + dx, yy = y + dy;
      if ((dx || dy) && xx >= 0 && yy >= 0 && xx < gw && yy < gh) { const j = yy * gw + xx; if (!done[j]) push(j, co[j]); }
    }
  }
  const out = new Uint8Array(outW * outH * 4);
  for (let y = 0; y < outH; y++) for (let x = 0; x < outW; x++) {
    const u = (x + 0.5) / outW, v = (y + 0.5) / outH;
    let dx = sample(vx, gw, gh, u, v), dy = sample(vy, gw, gh, u, v);
    const l = Math.hypot(dx, dy) || 1;
    const c = Math.min(1, sample(F.coh, F.w, F.h, u, v) * 1.15);
    dx = dx / l * c; dy = -dy / l * c; // a coordenadas de textura (v hacia arriba)
    const k = (y * outW + x) * 4;
    out[k] = Math.round((dx * 0.5 + 0.5) * 255);
    out[k + 1] = Math.round((dy * 0.5 + 0.5) * 255);
    out[k + 2] = Math.round(c * 255);
    out[k + 3] = 255;
  }
  return { data: out, w: outW, h: outH };
}
