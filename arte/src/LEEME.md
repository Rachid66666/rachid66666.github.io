# Dentro del Arte — código fuente

`app.js` se genera a partir de estos archivos con esbuild:

    npx esbuild arte/src/main.js --bundle --format=esm --minify --target=es2020 --outfile=arte/app.js

Dependencia: three@0.187.0 (npm). La profundidad con IA (`depth-worker.js`) carga
Transformers.js 4.3.2 y el modelo onnx-community/depth-anything-v2-small en el navegador.
