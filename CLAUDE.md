# Melvin Huang — personal website

Astro static site, published to GitHub Pages. Trilingual: English (default, at `/`), Traditional Chinese (`/zh/`), French (`/fr/`).

## Where things live

- `src/data/profile.ts` — the left sidebar (photo, legal name + Chinese name, CV / Email / LinkedIn / Substack icon links, location;  `substack: ''` hides that button), About text, "Currently" line, interests, education rows. Every text field has `en`, `zh`, `fr`.
- `src/data/items.ts` — every case competition (`category: 'case'`), organization project (`'org'`, listed under its organization via `org` — the organizations themselves are in `orgs` at the bottom), research (`'research'`) and interest (`'interest'`). Order in the file = order on the site. Each item gets its own page at `/work/<slug>/`.
- `src/i18n.ts` — language list and interface labels (section titles, "Back to home", etc.).
- `src/styles/global.css` — all styling. Colours and fonts are CSS variables at the top; the dark theme is `:root[data-theme='dark']`.
- Light/dark switch: button in the header (`src/layouts/Base.astro`). The choice is saved in the browser; first visit follows the system setting.
- `src/pages/[...lang]/index.astro` — homepage. `src/pages/[...lang]/work/[slug].astro` — detail pages.
- `public/` — files served as-is: `Melvin Huang CV.pdf` (the CV; its source is `cv/cv.html`, exported to PDF with Chrome), `favicon.svg`, and later `photo.jpg` and slide images.

## Rules when editing

- Always update all three languages together. If you are not sure about the French, say so.
- Chinese text is Traditional Chinese (Taiwan). Write it the way a normal Taiwanese university student would: longer, flowing sentences, no parallel/symmetrical phrasing, nothing that sounds polished or AI-written.
- Never invent facts about Melvin (results, roles, numbers, dates). If something is unknown, leave a `todo` box and ask.
- Sections can have `text`, `bullets` and/or `todo`. Remove `todo` once real content is in.
- `todo` boxes only show in `npm run dev`. On the published site they are hidden, and a section with nothing but a `todo` is left out.
- Links inside the site go through `href()` (pages) and `asset()` (files in `public/`) in `src/i18n.ts`, so they keep working if `base` in `astro.config.mjs` changes. Don't hard-code paths starting with `/`.
- Design is deliberately quiet: thin rules instead of cards, no shadows or animations, serif headings, monospace for dates and labels. Only case competitions show a thumbnail (the item's first image).
- Items can have `images` (shown as pictures) and `files` (listed as links to browse, e.g. full decks as PDF).
- Keep the site static (no backend). No phone number anywhere on the site.

## Commands

- `npm install` once, then `npm run dev` → http://localhost:4321
- `npm run build` must pass before pushing.
- Pushing to `main` deploys via `.github/workflows/deploy.yml` (set Settings → Pages → Source to "GitHub Actions"). The repo should be named `Melvin0501.github.io` so the site is at https://melvin0501.github.io/; with any other repo name, set `base` in `astro.config.mjs` to `'/<repo-name>/'`.
