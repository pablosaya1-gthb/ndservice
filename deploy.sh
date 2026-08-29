#!/usr/bin/env bash
# ============================================================
# Deploy a GitHub Pages (rama actual, sirviendo desde la raíz "/")
# Usage: ./deploy.sh "mensaje de commit (opcional)"
# ============================================================
set -euo pipefail
cd "$(dirname "$0")"

echo "▸ Build de producción…"
npm run build

echo "▸ Sincronizando build a la raíz de la rama…"
rm -rf _astro index.html
cp -r dist/. .

git add -A
MSG="${1:-deploy: build actualizado}"
if ! git diff --cached --quiet; then
  git -c user.name="${GIT_AUTHOR_NAME:-Arena Agent}" -c user.email="${GIT_AUTHOR_EMAIL:-agent@arena.ai}" commit -m "$MSG"
  git push origin HEAD
  echo "✓ Publicado. GitHub Pages va a reconstruir en ~1-2 min."
else
  echo "· Sin cambios que publicar."
fi
