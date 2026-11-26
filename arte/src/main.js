import { ARTISTS, PAINTINGS } from './data.js';
import { resolveImages, loadImage } from './resolve.js';
import { getPixels, heuristicDepth, deriveLayers, flowField, luminance, normalizeRobust, resample, sample } from './imageproc.js';
import { aiSupported, aiEnabled, setAiEnabled, crashSuspected, estimateDepth, cacheGet, cachePut, MODEL_TAG } from './ai.js';
import { Viewer, fmtCm, IS_MOBILE } from './viewer.js';

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const artistById = Object.fromEntries(ARTISTS.map((a) => [a.id, a]));
const byId = Object.fromEntries(PAINTINGS.map((p) => [p.id, p]));
const nextFrame = () => new Promise((r) => setTimeout(r, 20));

const state = {
  artist: 'vangogh',
  current: null,
  mode: 'museo',
  viewer: null,
  token: 0,
  anim: true,
  aiOn: aiSupported() && aiEnabled(),
  aiPaused: false,
  flowCache: new Map(),
  hintsShown: new Set(),
};
if (state.aiOn && crashSuspected()) { state.aiPaused = true; }

const resolving = resolveImages(PAINTINGS).then((r) => { renderGrid(); return r; }).catch(() => renderGrid());

// ───────────────────────── Galería ─────────────────────────
function renderTabs() {
  const tabs = $('#tabs');
  tabs.innerHTML = ARTISTS.map((a) => `<button role="tab" data-artist="${a.id}" aria-selected="${a.id === state.artist}">${a.name}</button>`).join('');
  tabs.onclick = (e) => {
    const b = e.target.closest('button[data-artist]');
    if (!b || b.dataset.artist === state.artist) return;
    state.artist = b.dataset.artist;
    try { localStorage.setItem('dda-artist', state.artist); } catch (err) { /* nada */ }
    renderTabs(); renderIntro(); renderGrid();
  };
}
function renderIntro() {
  const a = artistById[state.artist];
  $('#artistIntro').innerHTML = `<h2>${a.name}</h2><p class="dates">${a.dates}</p><p class="blurb">${a.blurb}</p>`;
}
function renderGrid() {
  const list = PAINTINGS.filter((p) => p.artist === state.artist);
  $('#grid').innerHTML = list.map((p, i) => `
    <button class="card" data-id="${p.id}" style="--d:${i * 40}ms" aria-label="${p.title}, ${p.year}">
      <span class="ph${p.img ? '' : ' sk'}">${p.img ? `<img src="${p.img.thumb}" alt="" loading="lazy" decoding="async" onload="this.classList.add('in')" onerror="this.parentNode.classList.add('err')">` : ''}</span>
      <span class="cap"><span class="num">${String(i + 1).padStart(2, '0')}</span><span class="t">${p.title}</span><span class="y">${p.year}</span></span>
    </button>`).join('');
}
$('#grid').addEventListener('click', (e) => {
  const c = e.target.closest('.card');
  if (c) openPainting(byId[c.dataset.id]);
});

// ───────────────────────── Visor ─────────────────────────
function ensureViewer() {
  if (state.viewer) return state.viewer;
  let v;
  try {
    v = new Viewer($('#gl'), $('#joy'));
  } catch (e) {
    showError('Tu navegador no puede mostrar gráficos 3D (WebGL 2). Prueba con Chrome o Safari actualizados.');
    throw e;
  }
  v.on('mode', (m) => { state.mode = m; syncModeUI(); });
  v.on('tour', (on) => { $('#btnTour').classList.toggle('on', on); $('#btnTour').setAttribute('aria-pressed', on); $('#btnTour .lbl').textContent = on ? 'Parar' : 'Viaje'; });
  v.on('contextlost', () => showError('El navegador ha reiniciado los gráficos. Recarga la página para continuar.'));
  state.viewer = v;
  return v;
}

function setLoader(text, progress, show = true) {
  const L = $('#loader');
  L.hidden = !show;
  if (!show) return;
  $('#loaderText').textContent = text;
  const bar = $('#loaderBar');
  if (progress == null) { bar.classList.add('ind'); bar.style.setProperty('--p', '0'); }
  else { bar.classList.remove('ind'); bar.style.setProperty('--p', String(progress)); }
}
function showError(msg) {
  setLoader('', null, false);
  const e = $('#vError');
  e.hidden = false;
  e.querySelector('p').textContent = msg;
}

async function openPainting(p, { push = true } = {}) {
  if (!p) return;
  const token = ++state.token;
  state.current = p;
  const a = artistById[p.artist];
  document.body.classList.add('viewing');
  $('#viewer').hidden = false;
  $('#vError').hidden = true;
  $('#vTitle').textContent = p.title;
  $('#vMeta').textContent = `${a.name} · ${p.year}`;
  document.title = `${p.title} · Dentro del Arte`;
  fillSheet(p);
  if (push) history.pushState({ obra: p.id }, '', '#/' + p.id);
  setLoader('Abriendo la obra…', 0);
  setChip(null);
  let v;
  try { v = ensureViewer(); } catch (e) { return; }
  v.start();
  await resolving;
  if (token !== state.token) return;
  let img;
  try {
    img = await loadImage([p.img.main, p.img.alt, p.img.thumb], (f) => { if (token === state.token) setLoader('Abriendo la obra…', f); });
  } catch (e) {
    if (token === state.token) showError('No se ha podido descargar el cuadro. Comprueba tu conexión e inténtalo de nuevo.');
    return;
  }
  if (token !== state.token) return;
  setLoader('Calculando la profundidad…', null);
  await nextFrame();
  const depthPx = getPixels(img, 256);
  const colorPx = getPixels(img, 512);
  let flow = state.flowCache.get(p.id);
  if (!flow) { flow = flowField(luminance(depthPx), depthPx.w, depthPx.h); state.flowCache.set(p.id, flow); }
  const cached = state.aiOn ? await cacheGet(p.id + '@' + MODEL_TAG) : null;
  let N, w, h;
  if (cached) {
    w = cached.w; h = cached.h;
    N = new Float32Array(w * h);
    for (let i = 0; i < N.length; i++) N[i] = cached.data[i] / 65535;
  } else {
    N = heuristicDepth(depthPx, p.depth);
    w = depthPx.w; h = depthPx.h;
    // la estimación rápida se comprime: bajorrelieve suave hasta que llegue la IA
    const kind = (p.depth && p.depth.kind) || 'portrait';
    const [lo, hi] = kind === 'landscape' || kind === 'interior' ? [0.14, 0.86] : [0.34, 0.72];
    for (let i = 0; i < N.length; i++) N[i] = lo + (hi - lo) * N[i];
  }
  await nextFrame();
  if (token !== state.token) return;
  const D = buildDepth(N, w, h, depthPx, colorPx, flow);
  D.source = cached ? 'ai' : 'basic';
  v.setPainting(p, a, img, D);
  v.setAnim(state.anim);
  setLoader('', null, false);
  syncModeUI();
  showHint(state.mode, true);
  state.img = img; state.depthPx = depthPx; state.colorPx = colorPx;
  if (cached) setChip('cached');
  else if (state.aiOn && !state.aiPaused) queueAI(p, img, token);
  else if (state.aiPaused) setChip('paused');
}

function buildDepth(N, w, h, depthPx, colorPx, flow) {
  const L = deriveLayers(N, w, h, colorPx);
  // color de lo más lejano (para la niebla del modo Dentro)
  let r = 0, g = 0, b = 0, c = 0;
  const { w: pw, h: ph, data } = depthPx;
  for (let y = 0; y < ph; y += 2) for (let x = 0; x < pw; x += 2) {
    const n = sample(N, w, h, (x + 0.5) / pw, (y + 0.5) / ph);
    if (n > 0.3) continue;
    const i = (y * pw + x) * 4;
    r += data[i]; g += data[i + 1]; b += data[i + 2]; c++;
  }
  const far = c ? [r / c / 255, g / c / 255, b / c / 255] : [0.1, 0.1, 0.12];
  return { N, w, h, bgN: L.bgN, bgRGBA: L.bgRGBA, cw: L.cw, ch: L.ch, flow, px: depthPx, farColor: far };
}

// ───────────────────────── IA ─────────────────────────
let aiChain = Promise.resolve();
function queueAI(p, img, token) {
  setChip('wait');
  aiChain = aiChain.then(async () => {
    if (state.current !== p) return; // ya no se está viendo
    try {
      const canvas = getPixels(img, IS_MOBILE ? 448 : 518).canvas;
      const res = await estimateDepth(canvas, (status, val) => {
        if (state.current !== p) return;
        if (status === 'download') setChip('download', val);
        else if (status === 'infer') setChip('infer');
      });
      let N = normalizeRobust(res.data, 0.01, 0.995);
      let w = res.width, h = res.height;
      const s = Math.min(1, 384 / Math.max(w, h));
      if (s < 1) { const nw = Math.round(w * s), nh = Math.round(h * s); N = resample(N, w, h, nw, nh); w = nw; h = nh; }
      const q = new Uint16Array(w * h);
      for (let i = 0; i < q.length; i++) q[i] = Math.round(N[i] * 65535);
      cachePut(p.id + '@' + MODEL_TAG, { w, h, data: q });
      if (state.current !== p || token !== state.token) return;
      const D = buildDepth(N, w, h, state.depthPx, state.colorPx, state.flowCache.get(p.id));
      D.source = 'ai';
      state.viewer.updateDepth(D);
      setChip('done');
    } catch (e) {
      console.warn('[IA profundidad]', e);
      if (state.current === p) setChip('error');
    }
  });
}

let chipTimer = 0;
function setChip(kind, val) {
  const c = $('#aiChip');
  clearTimeout(chipTimer);
  if (!kind) { c.hidden = true; return; }
  const txt = {
    wait: '✦ Preparando la IA…',
    download: (val || 0) >= 0.995 ? '✦ Iniciando la IA…' : `✦ Descargando la IA ${Math.round((val || 0) * 100)} %`,
    infer: '✦ La IA está calculando la profundidad…',
    done: '✦ Profundidad mejorada con IA',
    cached: '✦ Profundidad IA',
    error: 'Profundidad básica (la IA no está disponible)',
    paused: 'IA en pausa · actívala en ⓘ',
  }[kind];
  c.textContent = txt;
  c.dataset.kind = kind;
  c.hidden = false;
  if (kind === 'done' || kind === 'cached' || kind === 'error' || kind === 'paused') chipTimer = setTimeout(() => { c.hidden = true; }, kind === 'error' ? 5000 : 3200);
}

// ───────────────────────── Modos y controles ─────────────────────────
function setMode(m) {
  const v = state.viewer;
  if (!v || !v.paint) return;
  v.cancelTour();
  state.mode = m;
  v.applyMode(m);
  syncModeUI();
  showHint(m);
}
function syncModeUI() {
  $$('#modes button').forEach((b) => b.setAttribute('aria-selected', b.dataset.mode === state.mode));
  $('#viewer').dataset.mode = state.mode;
}
$('#modes').addEventListener('click', (e) => { const b = e.target.closest('button[data-mode]'); if (b) setMode(b.dataset.mode); });
$('#depthRange').addEventListener('input', (e) => state.viewer && state.viewer.setRelief(e.target.value / 100));
$('#btnAnim').addEventListener('click', () => {
  state.anim = !state.anim;
  $('#btnAnim').setAttribute('aria-pressed', state.anim);
  state.viewer && state.viewer.setAnim(state.anim);
});
$('#btnTour').addEventListener('click', () => {
  const v = state.viewer;
  if (!v || !v.paint) return;
  if (v.tourToken) v.cancelTour(); else v.tour();
});
$('#btnReset').addEventListener('click', () => state.viewer && state.viewer.resetView());
$('#btnCenter').addEventListener('click', () => state.viewer && state.viewer.resetView());
$('#btnBack').addEventListener('click', () => closeViewer());
$('#btnInfo').addEventListener('click', () => toggleSheet());
$('#sheetClose').addEventListener('click', () => toggleSheet(false));
$('#btnFull').addEventListener('click', () => {
  const el = document.documentElement;
  if (document.fullscreenElement || document.webkitFullscreenElement) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
  else if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
  else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
});
$('#btnPrev').addEventListener('click', () => step(-1));
$('#btnNext').addEventListener('click', () => step(1));
$('#vRetry').addEventListener('click', () => openPainting(state.current, { push: false }));

function step(d) {
  const p = state.current;
  if (!p) return;
  const list = PAINTINGS.filter((x) => x.artist === p.artist);
  const i = (list.indexOf(p) + d + list.length) % list.length;
  openPainting(list[i], { push: false });
  history.replaceState({ obra: list[i].id }, '', '#/' + list[i].id);
}

function closeViewer(fromPop) {
  if ($('#viewer').hidden) return;
  state.token++;
  toggleSheet(false);
  state.viewer && (state.viewer.cancelTour(), state.viewer.stop());
  $('#viewer').hidden = true;
  document.body.classList.remove('viewing');
  document.title = 'Dentro del Arte · Van Gogh y Da Vinci en 3D';
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  if (!fromPop && location.hash.startsWith('#/')) history.back();
}
window.addEventListener('popstate', () => {
  const id = location.hash.replace(/^#\//, '');
  if (byId[id]) openPainting(byId[id], { push: false });
  else closeViewer(true);
});

window.addEventListener('keydown', (e) => {
  if ($('#viewer').hidden || e.target.tagName === 'INPUT') return;
  if (e.key === 'Escape') { if (!$('#sheet').hidden) toggleSheet(false); else closeViewer(); }
  else if (e.key === '1') setMode('museo');
  else if (e.key === '2') setMode('3d');
  else if (e.key === '3') setMode('dentro');
  else if (e.key === 'f' || e.key === 'F') $('#btnFull').click();
  else if (e.key === 'i' || e.key === 'I') toggleSheet();
  else if (state.mode !== 'dentro' && e.key === 'ArrowRight') step(1);
  else if (state.mode !== 'dentro' && e.key === 'ArrowLeft') step(-1);
});

const HINTS = {
  museo: IS_MOBILE ? 'Arrastra para dar la vuelta al cuadro · Pellizca para acercarte · Doble toque para ampliar' : 'Arrastra para dar la vuelta al cuadro · Rueda para acercarte · Doble clic para ampliar',
  '3d': 'El cuadro en relieve: gíralo para verlo de lado · «Viaje» hace un recorrido automático',
  dentro: IS_MOBILE ? 'Estás dentro · Arrastra para mirar · Joystick para caminar · Pellizca para avanzar' : 'Estás dentro · Arrastra para mirar · WASD o flechas para caminar · Q/E bajar y subir',
};
let hintTimer = 0;
function showHint(mode, force) {
  if (!force && state.hintsShown.has(mode)) return;
  state.hintsShown.add(mode);
  const h = $('#hint');
  h.textContent = HINTS[mode];
  h.classList.add('show');
  clearTimeout(hintTimer);
  hintTimer = setTimeout(() => h.classList.remove('show'), 5200);
}

// ───────────────────────── Ficha ─────────────────────────
function fillSheet(p) {
  const a = artistById[p.artist];
  const file = p.file || p.files[0];
  $('#sheetBody').innerHTML = `
    <p class="kicker">${a.name}</p>
    <h2>${p.title}</h2>
    <dl>
      <div><dt>Año</dt><dd>${p.year}</dd></div>
      <div><dt>Museo</dt><dd>${p.museum}</dd></div>
      <div><dt>Técnica</dt><dd>${p.tech}</dd></div>
      <div><dt>Tamaño real</dt><dd>${fmtCm(p.sizeCm)}</dd></div>
    </dl>
    <p class="desc">${p.desc}</p>
    <p class="fact"><strong>¿Sabías que…?</strong> ${p.fact}</p>
    <div class="setting">
      <label class="switch"><input type="checkbox" id="aiToggle" ${state.aiOn && !state.aiPaused ? 'checked' : ''} ${aiSupported() ? '' : 'disabled'}><span></span></label>
      <div><strong>Profundidad con IA</strong><small>Un modelo de IA calcula en tu propio dispositivo la profundidad real del cuadro. La primera vez descarga unos 40 MB; después va mucho más rápido.</small></div>
    </div>
    <p class="credit">Imagen: <a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, '_'))}" target="_blank" rel="noopener">Wikimedia Commons</a> · obra en dominio público.</p>`;
  $('#aiToggle').addEventListener('change', (e) => {
    const on = e.target.checked;
    setAiEnabled(on);
    state.aiOn = on; state.aiPaused = false;
    if (on && state.current && state.img) queueAI(state.current, state.img, state.token);
  });
}
function toggleSheet(force) {
  const s = $('#sheet');
  const show = force ?? s.hidden;
  s.hidden = !show;
  $('#btnInfo').setAttribute('aria-expanded', show);
}

// ───────────────────────── Inicio ─────────────────────────
try { const a = localStorage.getItem('dda-artist'); if (artistById[a]) state.artist = a; } catch (e) { /* nada */ }
renderTabs();
renderIntro();
renderGrid();
const initial = location.hash.replace(/^#\//, '');
if (byId[initial]) {
  state.artist = byId[initial].artist;
  renderTabs(); renderIntro(); renderGrid();
  history.replaceState(null, '', location.pathname + location.search);
  openPainting(byId[initial]);
}
