# StackLaunch Website

The StackLaunch marketing site, built with [Astro](https://astro.build) as a
static site, with [Sveltia CMS](https://github.com/sveltia/sveltia-cms) at
`/admin` for editing content.

## Structure

- `src/pages/`: routes: `/`, `/services`, `/about`, `/why-stacklaunch`,
  `/contact`, `/articles` (blog/case-study listing), `/articles/[slug]`
- `src/components/`: shared `SiteNav`, `SiteFooter`
- `src/layouts/`: `BaseLayout` (head, meta, fonts)
- `src/content/`: editable content: `pages/*.yaml` (one file per page),
  `testimonials/*.yaml`, `posts/*.mdx`
- `src/content.config.ts`: the schema every content file is validated
  against
- `src/styles/`: self-hosted fonts and global CSS (keyframes, responsive
  rules)
- `public/admin/`: the Sveltia CMS editor (`config.yml`, `index.html`)
- `worker/`: a Cloudflare Worker (`sveltia-cms-auth`) that handles GitHub
  sign-in for the CMS; deployed separately from the site, see
  `worker/README.md`

## Editing content

Non-developers should use the CMS at `/admin` rather than editing files
directly. See `CLIENT-EDITING-GUIDE.md`.

## Local development

```
npm install
npm run dev
```

## Build

```
npm run build
```

Outputs static files to `dist/`.

## Deployment

Cloudflare Pages, connected to this GitHub repo. Build command
`npm run build`, output directory `dist`. Deploys automatically on every
push to `main`.
