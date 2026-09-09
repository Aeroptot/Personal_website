# Mathematical Research and Modeling Portfolio

A personal portfolio site for **Max Xuming Zhang**, built as a lightweight,
dependency-free static website ready to publish on GitHub Pages.

The page is assembled from the guidelines in `Max_additional_information.pdf`:
research paper spotlight, models and simulations, selected AMC/AIME problems, a
short mathematical self-position, and links to supplementary GitHub projects.
Content that was not provided in the guidelines is intentionally marked as a
placeholder so it can be filled in later.

## What is included

- `index.html` - the complete single-page portfolio.
- `assets/css/styles.css` - all styling (responsive, no frameworks).
- `assets/js/main.js` - small enhancements only (word counts, details
  accessibility). The page works without it.
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

Unfinished content is shown with a light yellow, dashed-outlined style, e.g.
`Paper title - to be provided`. Replace the text directly in `index.html`.
For the most reliable handoff, first send the missing material and this
repository can be updated centrally instead of editing each label by hand.

Two details are worth changing while adding real content:

1. The header and footer currently link to `https://github.com/aeroptot`,
   inferred from the other project URLs in the brief. Confirm or replace with
   the intended GitHub account or repository link.
2. The two disabled **View Full Paper** / **View Code** buttons need to be
   replaced with real `<a>` links once the paper PDF and code repository
   locations exist.

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
│   └── js/main.js
├── .github/workflows/pages.yml
├── README.md
└── PLACEHOLDERS.md
```
