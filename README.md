# Mathematical Research and Modeling Portfolio

A personal portfolio site for **Max Xuming Zhang**, built as a lightweight,
dependency-free static website ready to publish on GitHub Pages.

The page is assembled from the guidelines in `Max_additional_information.pdf`
and expanded with the supplied NCMC paper, HiMCM 2024 solution, Ross
application problems, and Minecraft systems archive.

## Current content

- **Research Papers:** full research summaries for the NCMC 2026 paper,
  "Memory, Repulsion, and Attraction," and the HiMCM 2024 high-powered
  computing model. Each paper also includes a six-part model summary
  (Question, Assumptions, Model, Test, Result, Limitation), two figures, and a
  link to the complete PDF.
- **Models and Simulations:** two Minecraft machine write-ups drawn from the
  public archive: the 432k/h sand duper and the automated Trial Chamber system.
  Each has its own Question → Assumptions → Model → Test → Result → Limitation
  breakdown and a link to its flowchart.
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
- `assets/figures/` - figures extracted from the NCMC and HiMCM papers.
- `SITE_TEXT.md` - every visible website string, organized for direct editing.
- `PLACEHOLDERS.md` - content-status checklist and optional future refinements.
- `.github/workflows/pages.yml` - automatic deployment to GitHub Pages.

## Preview locally

Because the site is plain HTML/CSS/JS, open `index.html` directly in a browser
or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Content status

All requested research, modeling, problem-solving, and Minecraft content is now
populated; no text or image placeholders remain. The header and footer link to
`https://github.com/aeroptot`, inferred from the project URLs in the brief.
Confirm or replace this with the intended GitHub account or repository link if
needed.

To revise the site copy, edit [SITE_TEXT.md](SITE_TEXT.md) and then ask Codex to
sync the edited text back into the website.

See [PLACEHOLDERS.md](PLACEHOLDERS.md) for the full content-status checklist.

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
