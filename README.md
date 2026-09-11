# Mathematical Research and Modeling Portfolio

A personal portfolio site for **Max Xuming Zhang**, built as a lightweight,
dependency-free static website ready to publish on GitHub Pages.

The page is assembled from the guidelines in `Max_additional_information.pdf`
and expanded with the supplied NCMC paper, HiMCM 2024 solution, and Ross
application problems. Content that has not been supplied is intentionally
marked as a placeholder.

## Current content

- **Research Paper:** the full NCMC 2026 paper, "Memory, Repulsion, and
  Attraction: Phase Transitions in Non-Markovian Random Walks on a
  Two-Dimensional Lattice," with a summary, key findings, and two extracted
  figures.
- **Models and Simulations:** populated model cards for the non-Markovian
  random walk and the HiMCM 2024 high-powered computing carbon-footprint model.
  The Minecraft resource-system card remains the only model placeholder.
- **Selected Problems:** all four multi-part Ross application problems:
  Number Wheels, Fibonacci Fill-ins, Antiletters, and Hilbert Numbers.
- **Supplementary materials:** linked project pages for the Thought
  Constellation, Club Matching, and Minecraft archive.

## What is included

- `index.html` - the complete single-page portfolio.
- `assets/css/styles.css` - all styling (responsive, no frameworks).
- `assets/js/main.js` - small enhancements only (word counts, details
  accessibility). The page works without it.
- `assets/papers/` - the complete NCMC paper and HiMCM 2024 solution PDFs.
- `assets/figures/` - figures extracted from the NCMC paper.
- `PLACEHOLDERS.md` - checklist of every text, image, and link waiting for
  real content.
- `.github/workflows/pages.yml` - automatic deployment to GitHub Pages.

## Preview locally

Because the site is plain HTML/CSS/JS, open `index.html` directly in a browser
or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Filling in placeholders

Unfinished content is shown with a light yellow, dashed-outlined style. At this
point the remaining text placeholders are all in the Minecraft resource-system
model card.

The header and footer currently link to `https://github.com/aeroptot`, inferred
from the project URLs in the brief. Confirm or replace this with the intended
GitHub account or repository link.

See [PLACEHOLDERS.md](PLACEHOLDERS.md) for the full checklist.

## Publish on GitHub

The repository already contains a GitHub Actions workflow for GitHub Pages.

1. Create a new repository on GitHub, for example `Personal-page`.
2. Push this folder to the repository's `main` branch:

   ```bash
   git init
   git add -A
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/aeroptot/Personal-page.git
   git push -u origin main
   ```

   Replace the remote URL with your actual repository.
3. In the repository, open **Settings → Pages** and set **Source** to
   **GitHub Actions**. The included workflow publishes the site on every push.

The site will be available at:

```text
https://aeroptot.github.io/Personal-page/
```

The same push steps work for a `username.github.io` repository; the site is
fully relative-path friendly, so it also works at the repository root.

## Project structure

```text
.
├── index.html
├── 404.html
├── assets/
│   ├── css/styles.css
│   ├── figures/
│   ├── js/main.js
│   └── papers/
├── .github/workflows/pages.yml
├── README.md
└── PLACEHOLDERS.md
```
