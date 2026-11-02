#!/bin/sh
# Copy the built paper site (../website) into ./paper/ so it is served as a tab
# of the personal site. Run ../website/build.py first when the LaTeX changed.
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="$HERE/../website"
DST="$HERE/paper"
mkdir -p "$DST/assets"
cp "$SRC/index.html" "$SRC/style.css" "$SRC/script.js" "$DST/"
rsync -a --delete "$SRC/assets/figures/" "$DST/assets/figures/"
cp "$SRC/assets/paper.pdf" "$DST/assets/paper.pdf"
echo "synced paper -> $DST"
