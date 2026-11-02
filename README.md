# ruihanzhang2015.github.io

Personal site of Ruihan Zhang. Static HTML, no build step, served by GitHub Pages
from the `master` branch root (`.nojekyll` disables Jekyll).

```
index.html      home
cv.html         curriculum vitae
film.html       films, MIT Film Makers Association, MIT AI Film Hack
paper/          the Neuro-Inspired Robotics paper, generated (do not hand-edit)
style.css       shared stylesheet (same look as the paper page) + personal additions
script.js       mobile menu toggle + sidebar scroll-spy
assets/         photo
sync_paper.sh   copies ../website (the paper build) into paper/
```

## Updating the paper tab

```bash
cd ../website && python3 build.py     # LaTeX -> HTML, figures, compressed PDF
cd ../personal_website && ./sync_paper.sh
git add -A && git commit -m "Update paper" && git push
```

## Preview

```bash
python3 -m http.server 8000           # http://localhost:8000
```
