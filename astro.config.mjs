// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages address. Name the GitHub repo "Melvin0501.github.io" and the site
// lives at the root (https://melvin0501.github.io/), so `base` stays '/'.
// If the repo has another name (e.g. "melvin-site"), set base: '/melvin-site/'.
// All links in the site go through href() / asset() in src/i18n.ts, so they follow `base`.
export default defineConfig({
  site: 'https://melvin0501.github.io',
  base: '/',
  trailingSlash: 'always',
});
