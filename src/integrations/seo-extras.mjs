// Build-time SEO helpers that Starlight does not cover on its own:
//  - robots.txt that points crawlers (including AI crawlers) at the sitemap
//  - redirect pages for old URLs so existing links keep their ranking
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
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
					const file = `${outDir}/${from}`;
					await mkdir(dirname(file), { recursive: true });
					await writeFile(file, redirectPage(target));
					count++;
				}
				logger.info(`Wrote robots.txt and ${count} legacy redirect pages.`);
			},
		},
	};
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
