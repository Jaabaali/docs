// Build-time SEO helpers that Starlight does not cover on its own:
//  - robots.txt that points crawlers (including AI crawlers) at the sitemap
//  - redirect pages for old URLs so existing links keep their ranking
import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * @param {{ redirects?: Record<string, string> }} options
 * @returns {import('astro').AstroIntegration}
 */
export default function seoExtras({ redirects = {} } = {}) {
	/** @type {string} */
	let siteRoot = '/';

	return {
		name: 'jabali-seo-extras',
		hooks: {
			'astro:config:done': ({ config }) => {
				const site = (config.site ?? '').replace(/\/$/, '');
				const base = config.base === '/' ? '' : config.base.replace(/\/$/, '');
				siteRoot = `${site}${base}/`;
			},
			'astro:build:done': async ({ dir, logger }) => {
				const outDir = fileURLToPath(dir);

				// robots.txt only takes effect at the root of a domain. It is harmless under /docs
				// today and starts working as soon as the site moves to docs.jabali.ai.
				const robots = [
					'# Search engines and AI assistants are welcome to read these docs.',
					'User-agent: *',
					'Allow: /',
					'',
					`Sitemap: ${siteRoot}sitemap-index.xml`,
					'',
				].join('\n');
				await writeFile(`${outDir}/robots.txt`, robots);

				let count = 0;
				for (const [from, to] of Object.entries(redirects)) {
					const target = new URL(to, siteRoot).href;
					for (const path of legacyPaths(from)) {
						const file = join(outDir, path);
						// Never overwrite a real page with a redirect.
						if (existsSync(file)) {
							logger.warn(`Skipped redirect for ${path}: a page already exists there.`);
							continue;
						}
						await mkdir(dirname(file), { recursive: true });
						await writeFile(file, redirectPage(target));
						count++;
					}
				}
				logger.info(`Wrote robots.txt and ${count} legacy redirect pages.`);
			},
		},
	};
}

/**
 * Every address an old Jekyll page could be reached at, as files to write.
 *
 * `page.html` covers the published URL, and GitHub Pages also serves it for the
 * extensionless `page`. The old Markdown sources linked to each other as `page.md`,
 * so links copied from the repo (or from GitHub's file view) use that form. GitHub Pages
 * serves a `.md` file as plain text, so that redirect goes in `page.md/index.html`:
 * GitHub Pages sends `/page.md` to `/page.md/`, which serves that HTML page.
 *
 * @param {string} from Key from the redirect table, e.g. `core/prompting.html`.
 * @returns {string[]}
 */
function legacyPaths(from) {
	if (!from.endsWith('.html')) return [from];
	const stem = from.slice(0, -'.html'.length);
	return [from, `${stem}.md/index.html`];
}

/** @param {string} target */
function redirectPage(target) {
	const safe = target.replace(/"/g, '&quot;');
	return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>This page has moved</title>
<link rel="canonical" href="${safe}">
<meta http-equiv="refresh" content="0; url=${safe}">
<script>location.replace(${JSON.stringify(target)} + location.hash);</script>
</head>
<body>
<p>This page has moved to <a href="${safe}">${safe}</a>.</p>
</body>
</html>
`;
}
