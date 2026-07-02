# Arkabrata Chakraborty

Personal academic-style website for Arkabrata Chakraborty, built with Astro and deployed as a static GitHub Pages site.

## Stack

- Astro static export
- Markdown content collections for projects and blog posts
- GitHub Actions deployment to GitHub Pages
- Sitemap and robots.txt support

## Local Development

```bash
npm install
npm run dev
```

The local site will run at the URL printed by Astro, usually `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

The static output is generated in `dist/`.

## Content

- Project pages live in `src/content/projects/`
- Blog posts live in `src/content/blog/`
- Main pages live in `src/pages/`
- Shared constants live in `src/consts.ts`
- Global styles live in `public/styles/global.css`

## Deployment

This repository includes `.github/workflows/deploy.yml`.

To deploy:

1. Push changes to the `main` branch.
2. In GitHub, open repository settings.
3. Go to Pages.
4. Set the source to GitHub Actions.
5. The workflow will build Astro and publish `dist/` to GitHub Pages.

The site URL is configured as `https://arkabrata.github.io` in `astro.config.mjs`.

## Updating Placeholders

Replace placeholder LinkedIn and email values in `src/consts.ts`.

Repository links for project pages are currently placeholders and can be updated in each Markdown file under `src/content/projects/`.
