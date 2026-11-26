// Profundidad con IA (Depth Anything V2) ejecutada en un Web Worker, con caché en IndexedDB.
export const MODEL_TAG = 'da2s-q8-v1';
const GUARD = 'dda-ai-guard';
const PREF = 'dda-ai';

let worker = null;
let seq = 0;
const pending = new Map();

export function aiSupported() {
  return typeof Worker !== 'undefined' && typeof WebAssembly === 'object' && typeof indexedDB !== 'undefined';
}

export function aiEnabled() {
  try { return localStorage.getItem(PREF) !== 'off'; } catch (e) { return true; }
}
export function setAiEnabled(on) {
  try { localStorage.setItem(PREF, on ? 'on' : 'off'); } catch (e) { /* nada */ }
}
// Si la página se cerró de golpe mientras la IA calculaba (posible falta de memoria), no la relanzamos sola.
export function crashSuspected() {
  try {
    const g = +localStorage.getItem(GUARD);
    localStorage.removeItem(GUARD);
    return g && Date.now() - g < 3 * 60 * 1000;
  } catch (e) { return false; }
}

function ensureWorker() {
  if (worker) return worker;
  worker = new Worker(new URL('depth-worker.js?v=2', location.href), { type: 'module' });
  worker.onmessage = (e) => {
    const m = e.data;
    if (m.type === 'progress') { for (const p of pending.values()) p.onStatus && p.onStatus('download', m.value); return; }
    const p = pending.get(m.id);
    if (!p) return;
    if (m.type === 'status') { p.onStatus && p.onStatus(m.status); return; }
    pending.delete(m.id);
    clearTimeout(p.timer);
    try { localStorage.removeItem(GUARD); } catch (err) { /* nada */ }
    if (m.type === 'result') p.resolve(m); else p.reject(new Error(m.message || 'error IA'));
  };
  worker.onerror = (e) => {
    e.preventDefault && e.preventDefault();
    for (const p of pending.values()) { clearTimeout(p.timer); p.reject(new Error('No se pudo iniciar la IA')); }
    pending.clear();
    try { localStorage.removeItem(GUARD); } catch (err) { /* nada */ }
    worker && worker.terminate();
    worker = null;
  };
  return worker;
}

export function estimateDepth(canvas, onStatus) {
  const W = canvas.width, H = canvas.height;
  const rgba = canvas.getContext('2d').getImageData(0, 0, W, H).data;
  const rgb = new Uint8ClampedArray(W * H * 3);
  for (let i = 0, j = 0; i < rgba.length; i += 4, j += 3) { rgb[j] = rgba[i]; rgb[j + 1] = rgba[i + 1]; rgb[j + 2] = rgba[i + 2]; }
  const id = ++seq;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      if (pending.has(id)) { pending.delete(id); reject(new Error('La IA tardó demasiado')); }
    }, 6 * 60 * 1000);
    pending.set(id, { resolve, reject, onStatus, timer });
    try { localStorage.setItem(GUARD, String(Date.now())); } catch (e) { /* nada */ }
    try {
      ensureWorker().postMessage({ type: 'run', id, width: W, height: H, rgb }, [rgb.buffer]);
    } catch (e) {
      pending.delete(id); clearTimeout(timer);
      reject(e);
    }
  });
}

// ─── Caché IndexedDB ───
let dbp = null;
function db() {
  if (!dbp) dbp = new Promise((res, rej) => {
    const r = indexedDB.open('dentro-del-arte', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('depth');
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
  return dbp;
}
export async function cacheGet(key) {
  try {
    const d = await db();
    return await new Promise((res) => {
      const q = d.transaction('depth', 'readonly').objectStore('depth').get(key);
      q.onsuccess = () => res(q.result || null);
      q.onerror = () => res(null);
    });
  } catch (e) { return null; }
}
export async function cachePut(key, val) {
  try {
    const d = await db();
    await new Promise((res) => {
      const tx = d.transaction('depth', 'readwrite');
      tx.objectStore('depth').put(val, key);
      tx.oncomplete = res; tx.onerror = res; tx.onabort = res;
    });
  } catch (e) { /* sin caché */ }
}
