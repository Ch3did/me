#!/bin/bash

set -e

echo "🛠️  Limpando build antigo..."
rm -rf dist

echo "📦 Construindo projeto..."
npm run build

echo "🚀 Publicando no GitHub Pages..."
npx gh-pages -d dist
npm run deploy


echo "✅ Deploy finalizado com sucesso!"