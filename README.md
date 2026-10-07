# Jabali Docs

Source for the Jabali documentation site: **https://jaabaali.github.io/docs/**

The site is built with [Astro Starlight](https://starlight.astro.build) and published to GitHub Pages. Anyone can propose changes; maintainers review and approve them before they go live. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Quick start

```sh
npm install
npm run dev     # http://localhost:4321/docs/
npm run build   # production build into dist/ (also validates links)
```

## How publishing works

| Step | What happens |
| --- | --- |
| Pull request opened | `.github/workflows/check.yml` builds the site and validates every internal link |
| Review | A code owner from `.github/CODEOWNERS` must approve |
| Merge to `main` | `.github/workflows/deploy.yml` builds and deploys to GitHub Pages |

### Repository settings this relies on

- **Settings → Pages → Build and deployment → Source:** GitHub Actions
- **Settings → Rules → Rulesets** (or Branches → branch protection) for `main`:
  - Require a pull request before merging, with 1 approval
  - Require review from Code Owners
  - Require the **Build and validate links** status check to pass

## SEO and AI search (AEO)

Built in, no action needed per page:

- Unique `<title>`, meta description, canonical URL, Open Graph and Twitter cards on every page (descriptions are required by the content schema)
- `sitemap-index.xml` and `robots.txt`
- JSON-LD structured data: Organization, WebSite, TechArticle with last-modified date, BreadcrumbList, and FAQPage on pages with `faq: true` (`src/routeData.ts`)
- `llms.txt`, `llms-full.txt` and `llms-small.txt` for AI assistants ([llmstxt.org](https://llmstxt.org))
- Redirects from the old Jekyll URLs (`src/legacy-redirects.mjs`)
- Optimized, lazy-loaded images and a fast static site

After launch, add the site to [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters) and submit `sitemap-index.xml`. A slot for the Google verification tag is in `astro.config.mjs`.

## Moving to docs.jabali.ai

A custom domain gives jabali.ai the search ranking credit and makes `robots.txt` take effect.

1. **DNS:** add a `CNAME` record `docs` → `jaabaali.github.io`.
2. **GitHub:** Settings → Pages → Custom domain → `docs.jabali.ai`, then tick **Enforce HTTPS** once the certificate is issued.
3. **Code** (one PR):
   - In `src/site.config.mjs`, set `SITE = 'https://docs.jabali.ai'` and `BASE = '/'`.
   - Replace `/docs/` link prefixes in content: `grep -rl '](/docs/' src/content | xargs sed -i 's#](/docs/#](/#g'` and the same for `href="/docs/` and `link: /docs/`.
   - Run `npm run build` to confirm every link is still valid.
4. GitHub automatically redirects old `jaabaali.github.io/docs/…` URLs to the new domain.

## Keeping docs current with product updates

Product changes reach the docs through pull requests, so a maintainer still approves everything:

- **Anyone** can open a "Product update needs docs" issue or a PR.
- **Automated drafts:** every Monday a scheduled Claude task checks for new **stable** Jabali Studio releases (alpha/prerelease builds are ignored), updates the affected pages, and opens a PR titled `Docs: Jabali Studio <version> updates` with the `product-update` label. A maintainer reviews and merges it like any other PR. Internal details, private links and unreleased features are left out.
- **Release notes page:** each update PR also adds a section for its release to "What's new in Jabali Studio" (`src/content/docs/studio/whats-new.md`, newest first). That page doesn't exist until the first update PR: that PR creates it and adds `'studio/whats-new'` to the Jabali Studio sidebar in `astro.config.mjs`, right after `'studio'`.

Only document features that are released and publicly announced.
