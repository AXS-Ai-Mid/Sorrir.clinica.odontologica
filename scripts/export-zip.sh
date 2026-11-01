#!/usr/bin/env bash
# Gera o ZIP do projeto para download e envio ao GitHub.
# Uso: bash scripts/export-zip.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/download"
NAME="sorrir-clinica-odontologica.zip"

mkdir -p "$OUT"
rm -f "$OUT/$NAME"

cd "$ROOT"
zip -r -q "$OUT/$NAME" . \
  -x "node_modules/*" \
  -x ".next/*" \
  -x ".git/*" \
  -x "public/download/*" \
  -x ".env" \
  -x ".env.local" \
  -x ".env.production" \
  -x "*.log" \
  -x ".turbo/*" \
  -x "*.tsbuildinfo" \
  -x ".DS_Store" \
  -x "*/.DS_Store" \
  -x ".vercel/*"

echo "ZIP gerado em: $OUT/$NAME"
echo "Tamanho: $(du -h "$OUT/$NAME" | cut -f1)"
echo "Arquivos: $(unzip -l "$OUT/$NAME" | tail -1 | awk '{print $2}')"
