// Resuelve las URLs de las imágenes en Wikimedia (solo tamaños estándar de miniatura).
const COMMONS = 'https://commons.wikimedia.org/w/api.php';
const WIKI = 'https://en.wikipedia.org/w/api.php';
const UP = 'https://upload.wikimedia.org/wikipedia/commons/';
const STEPS = [3840, 1920, 1280, 960, 500, 330, 250, 120];
const CACHE_KEY = 'dda-img-v3';
const THUMB_RE = /\/((?:lossy-|lossless-)?(?:page\d+-)?)(\d+)px-([^/]+)$/;

const norm = (f) => {
  const s = f.replace(/_/g, ' ').trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
};
const enc = (f) => encodeURIComponent(f.replace(/ /g, '_')).replace(/%2C/g, ',').replace(/%28/g, '(').replace(/%29/g, ')');

async function getJSON(url, ms = 9000) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), ms);
  try {
    const r = await fetch(url, { signal: ctl.signal });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return await r.json();
  } finally { clearTimeout(t); }
}

async function commonsInfo(files) {
  const out = new Map();
  const titles = [...new Set(files.map((f) => 'File:' + norm(f)))];
  for (let i = 0; i < titles.length; i += 40) {
    const chunk = titles.slice(i, i + 40);
    const url = `${COMMONS}?action=query&format=json&formatversion=2&origin=*&redirects=1&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=1280&titles=${encodeURIComponent(chunk.join('|'))}`;
    const j = await getJSON(url);
    const q = j.query || {};
    const map = new Map();
    (q.normalized || []).forEach((n) => map.set(n.from, n.to));
    (q.redirects || []).forEach((n) => map.set(n.from, n.to));
    const pages = new Map((q.pages || []).map((p) => [p.title, p]));
    for (const t of chunk) {
      let fin = t, g = 0;
      while (map.has(fin) && g++ < 4) fin = map.get(fin);
      const p = pages.get(fin);
      if (p && !p.missing && p.imageinfo && p.imageinfo[0] && p.imageinfo[0].width) out.set(t, p.imageinfo[0]);
    }
  }
  return out;
}

// Construye las URLs a partir de la respuesta de la API
function fromInfo(info) {
  const m = info.thumburl && info.thumburl.match(THUMB_RE);
  const at = (w) => (m && w < info.width ? info.thumburl.replace(THUMB_RE, `/$1${w}px-$3`) : null);
  const raster = /jpeg|png|webp|gif/.test(info.mime || 'image/jpeg');
  const best = (target) => {
    for (const s of STEPS) if (s <= target && s < info.width) { const u = at(s); if (u) return u; }
    return raster ? info.url : (at(250) || info.url);
  };
  return { w: info.width, h: info.height, best };
}

// Respaldo: URL directa calculada con el hash md5 del nombre del archivo
function fromHash(p) {
  const f = p.files[0].replace(/ /g, '_');
  const base = `${UP}thumb/${p.md5}/${enc(f)}/`;
  const w = p.w || 4000, h = p.h || Math.round(4000 * p.sizeCm[0] / p.sizeCm[1]);
  const best = (target) => {
    for (const s of STEPS) if (s <= target && s < w) return `${base}${s}px-${enc(f)}`;
    return `${UP}${p.md5}/${enc(f)}`;
  };
  return { w, h, best, fallback: true };
}

function finalize(p, r) {
  const portrait = r.h > r.w;
  p.img = {
    w: r.w, h: r.h,
    thumb: r.best(500),
    main: r.best(portrait ? 1280 : 1920),
    alt: r.best(portrait ? 960 : 1280),
    fallback: !!r.fallback,
  };
}

export async function resolveImages(paintings) {
  // Caché local (7 días)
  try {
    const c = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
    if (c && Date.now() - c.t < 7 * 864e5) {
      let ok = true;
      for (const p of paintings) { if (c.d[p.id]) p.img = c.d[p.id]; else ok = false; }
      if (ok) return { source: 'cache' };
    }
  } catch (e) { /* sin caché */ }

  let info = new Map();
  let apiOk = true;
  try { info = await commonsInfo(paintings.flatMap((p) => p.files)); } catch (e) { apiOk = false; }

  const missing = [];
  for (const p of paintings) {
    const f = p.files.find((f) => info.has('File:' + norm(f)));
    if (f) { p.file = f; finalize(p, fromInfo(info.get('File:' + norm(f)))); } else missing.push(p);
  }

  // Respaldo: imagen principal del artículo de Wikipedia
  if (missing.length && apiOk) {
    try {
      const url = `${WIKI}?action=query&format=json&formatversion=2&origin=*&redirects=1&prop=pageimages&piprop=name&titles=${encodeURIComponent(missing.map((p) => p.wiki.replace(/_/g, ' ')).join('|'))}`;
      const j = await getJSON(url);
      const q = j.query || {};
      const map = new Map();
      (q.normalized || []).forEach((n) => map.set(n.from, n.to));
      (q.redirects || []).forEach((n) => map.set(n.from, n.to));
      const pages = new Map((q.pages || []).map((pg) => [pg.title, pg]));
      const names = new Map();
      for (const p of missing) {
        let t = p.wiki.replace(/_/g, ' '), g = 0;
        while (map.has(t) && g++ < 4) t = map.get(t);
        const pg = pages.get(t);
        if (pg && pg.pageimage) names.set(p.id, pg.pageimage);
      }
      if (names.size) {
        const info2 = await commonsInfo([...names.values()]);
        for (const p of missing) {
          const n = names.get(p.id);
          const inf = n && info2.get('File:' + norm(n));
          if (inf) { p.file = n; finalize(p, fromInfo(inf)); }
        }
      }
    } catch (e) { /* seguimos con el respaldo */ }
  }

  for (const p of paintings) if (!p.img) { p.file = p.files[0]; finalize(p, fromHash(p)); }

  if (apiOk) {
    try {
      const d = {};
      for (const p of paintings) if (!p.img.fallback) d[p.id] = p.img;
      localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), d }));
    } catch (e) { /* almacenamiento lleno o bloqueado */ }
  }
  return { source: apiOk ? 'api' : 'hash', missing: missing.map((p) => p.id) };
}

// Descarga una imagen con CORS (necesario para WebGL) mostrando el progreso.
export async function loadImage(urls, onProgress) {
  let lastErr;
  const list = [];
  for (const u of urls) if (u && !list.includes(u)) list.push(u);
  // último recurso: proxy de imágenes con CORS
  if (urls[0]) list.push('https://wsrv.nl/?url=' + encodeURIComponent(urls[0].replace(/^https?:\/\//, '')) + '&w=1920&we');
  for (const url of list) {
    try {
      const r = await fetch(url, { mode: 'cors', credentials: 'omit' });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const total = +r.headers.get('content-length') || 0;
      let blob;
      if (r.body && r.body.getReader && total) {
        const reader = r.body.getReader();
        const chunks = [];
        let got = 0;
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value); got += value.length;
          onProgress && onProgress(Math.min(1, got / total));
        }
        blob = new Blob(chunks, { type: r.headers.get('content-type') || 'image/jpeg' });
      } else {
        blob = await r.blob();
      }
      const objUrl = URL.createObjectURL(blob);
      const img = new Image();
      img.decoding = 'async';
      await new Promise((res, rej) => { img.onload = res; img.onerror = () => rej(new Error('decode')); img.src = objUrl; });
      onProgress && onProgress(1);
      return img;
    } catch (e) { lastErr = e; }
  }
  throw lastErr || new Error('No se pudo cargar la imagen');
}
