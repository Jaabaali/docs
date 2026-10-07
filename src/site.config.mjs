// Central place for where the docs are published.
//
// Today the site lives at https://jaabaali.github.io/docs/.
// To move it to https://docs.jabali.ai later, follow README.md → "Moving to docs.jabali.ai".
// In short: set SITE to 'https://docs.jabali.ai', BASE to '/', and update internal links.

/** Origin the site is served from (no trailing slash). */
export const SITE = 'https://jaabaali.github.io';

/** Path prefix the site is served under. Use '/' for a custom domain. */
export const BASE = '/docs';

/** GitHub repository that holds the docs source. */
export const REPO = 'Jaabaali/docs';

/** Branch that is published. */
export const BRANCH = 'main';

/** Absolute URL of the site root, always ending in '/'. */
export const SITE_ROOT = `${SITE}${BASE === '/' ? '' : BASE}/`;
