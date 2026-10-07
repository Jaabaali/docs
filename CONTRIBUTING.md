# Contributing to the Jabali docs

Thanks for helping improve the Jabali docs! Anyone in the community can propose changes. A maintainer reviews every pull request before it's published.

- **Quick fixes** (typos, wrong steps, outdated screenshots): click **Edit page** at the bottom of any page on the site and follow GitHub's prompts. No setup needed.
- **Bigger changes** (new pages, reorganizing): read on.
- **Not sure how to fix it?** [Open an issue](https://github.com/Jaabaali/docs/issues/new/choose).

## How changes get published

1. You open a pull request (PR).
2. The **Check docs** workflow builds the site. It fails if a page is missing a description or has a broken internal link.
3. A code owner (see [`.github/CODEOWNERS`](.github/CODEOWNERS)) reviews and approves the PR.
4. The PR is merged into `main`, and the **Deploy docs** workflow publishes the site within a few minutes.

## Where things live

```
src/
  content/docs/        ← every page, as Markdown (.md) or MDX (.mdx)
    index.mdx          ← home page
    studio/            ← Jabali Studio
    web.md             ← Jabali Web (placeholder: docs coming soon)
    support.md  contributing.md
  assets/              ← screenshots and images, one folder per section
public/                ← files served as-is (favicon, social image)
astro.config.mjs       ← site settings and the sidebar
```

A file at `src/content/docs/studio/install.md` is published at `/docs/studio/install/`.

## Writing a page

Every page starts with frontmatter:

```md
---
title: Install Jabali Studio on Windows and Mac
description: Download and install the Jabali Studio desktop app on Windows 10+ or macOS 12+, including system requirements.
sidebar:
  label: Install
---

Start with one or two sentences that answer the reader's question directly.
```

- **`title`** is the page heading and the browser/search title. Make it specific ("Install Jabali Studio on Windows and Mac", not "Installation").
- **`description`** is required and must be 50–160 characters. It's the snippet shown in Google, link previews and AI answers, so summarize what the page helps you do.
- **`sidebar.label`** is an optional short name for the sidebar.
- Don't add a `# Heading 1` in the body. The title is the H1. Start sections at `##`.

### Style

- **Lead with the answer.** The first paragraph of each page and section should stand on its own.
- **Use descriptive headings** that match how people search. On FAQ pages, write every `###` heading as a full question ending in `?`. Those become FAQ structured data automatically (`faq: true` in frontmatter).
- **Steps go in numbered lists**, one action per step. Put UI labels in **bold**: click **Publish**.
- **Product names:** Jabali, Jabali Studio, Jabali Web, Bali (the AI Producer). Don't use emoji in headings.
- **Only document released features.** This repository is public, so don't describe unreleased or internal features.
- Use [asides](https://starlight.astro.build/guides/authoring-content/#asides) for notes and warnings:

  ```md
  :::tip
  Save a version before big changes.
  :::
  ```

### Links

- Link to other docs pages with the full path, starting with `/docs/` and ending with `/`:
  `[Install Jabali Studio](/docs/studio/install/)`
- Link to a section with `#`: `/docs/studio/faq/#sign-in-and-account`
- The build checks every internal link and fails on broken ones.

### Images

1. Save screenshots as `.png` or `.webp` in `src/assets/<section>/`, with a descriptive file name (`publish-game-dialog.webp`, not `image3.png`).
2. Reference them with a relative path and **always** write alt text that describes what the image shows:

   ```md
   ![The Publish Game dialog with name, description and poster fields](../../../assets/studio/publish-game-dialog.webp)
   ```

Images are automatically resized and converted to WebP at build time, so upload them at full resolution (up to about 2000 px wide).

### Adding a new page

1. Create the file in the right folder under `src/content/docs/`.
2. Add its slug to the `sidebar` in `astro.config.mjs` (for example `'studio/new-page'`) where it belongs.
3. Link to it from at least one related page.

If you rename or move a page, add the old path to `src/legacy-redirects.mjs` so existing links keep working.

## Previewing locally (optional)

You need [Node.js](https://nodejs.org/) 22.12 or later.

```sh
npm install
npm run dev      # live preview at http://localhost:4321/docs/
npm run build    # the same check that runs on pull requests
```

## Reviewing pull requests (maintainers)

- Check accuracy against the current product, not just wording.
- Make sure nothing unreleased is being documented.
- The **Check docs** build must be green.
- Prefer **Squash and merge** so `main` keeps one commit per change.

To add reviewers, edit [`.github/CODEOWNERS`](.github/CODEOWNERS).
