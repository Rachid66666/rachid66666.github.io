// Worker de profundidad: Depth Anything V2 (small, cuantizado) con Transformers.js, todo en el dispositivo.
import { pipeline, env, RawImage } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@4.3.2/dist/transformers.min.js';

env.allowLocalModels = false;
env.useBrowserCache = true;

const MODEL = 'onnx-community/depth-anything-v2-small';
let pipe = null;
let loading = null;

function getPipe() {
  if (pipe) return Promise.resolve(pipe);
  if (!loading) {
    loading = pipeline('depth-estimation', MODEL, {
      device: 'wasm',
      dtype: 'q8',
      progress_callback: (p) => {
        if (p && p.status === 'progress_total') self.postMessage({ type: 'progress', value: Math.max(0, Math.min(1, p.progress / 100)) });
      },
    }).then((p) => { pipe = p; return p; }).catch((e) => { loading = null; throw e; });
  }
  return loading;
}

self.onmessage = async (e) => {
  const m = e.data;
  if (!m || m.type !== 'run') return;
  try {
    const p = await getPipe();
    self.postMessage({ type: 'status', status: 'infer', id: m.id });
    const img = new RawImage(m.rgb, m.width, m.height, 3);
    const out = await p(img);
    const t = out.predicted_depth;
    const dims = t.dims;
    const H = dims[dims.length - 2], W = dims[dims.length - 1];
    const data = new Float32Array(t.data);
    self.postMessage({ type: 'result', id: m.id, width: W, height: H, data }, [data.buffer]);
  } catch (err) {
    self.postMessage({ type: 'error', id: m.id, message: String((err && err.message) || err) });
  }
};
