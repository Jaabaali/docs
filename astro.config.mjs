// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import starlightLinksValidator from 'starlight-links-validator';
import starlightLlmsTxt from 'starlight-llms-txt';

import seoExtras from './src/integrations/seo-extras.mjs';
import { legacyRedirects } from './src/legacy-redirects.mjs';
import { SITE, BASE, SITE_ROOT, REPO, BRANCH } from './src/site.config.mjs';

// Placeholder pages marked `noindex` in their frontmatter. Keep them out of the sitemap too.
const NOINDEX_PATHS = ['/web/'];

const DESCRIPTION =
	'Official Jabali documentation. Learn to create, playtest and publish AI-generated games with Jabali Studio, the desktop app for Windows and Mac.';

// https://astro.build/config
export default defineConfig({
	site: SITE,
	base: BASE,
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'Jabali Docs',
			description: DESCRIPTION,
			logo: {
				light: './src/assets/brand/logo-light.png',
				dark: './src/assets/brand/logo-dark.png',
				alt: 'Jabali Docs',
				replacesTitle: true,
			},
			favicon: '/favicon.png',
			social: [
				{ icon: 'discord', label: 'Jabali Discord', href: 'https://discord.gg/jabali' },
				{ icon: 'github', label: 'Edit these docs on GitHub', href: `https://github.com/${REPO}` },
			],
			// "Edit page" link on every page: the entry point for community contributions.
			editLink: { baseUrl: `https://github.com/${REPO}/edit/${BRANCH}/` },
			lastUpdated: true,
			customCss: ['./src/styles/custom.css'],
			// Adds structured data (JSON-LD) to every page for search engines and AI answer engines.
			routeMiddleware: './src/routeData.ts',
			head: [
				{ tag: 'meta', attrs: { property: 'og:image', content: `${SITE_ROOT}og-image.png` } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { property: 'og:image:alt', content: 'Jabali Docs' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: `${SITE_ROOT}og-image.png` } },
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#eb4347' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: `${SITE_ROOT}apple-touch-icon.png` } },
				// Machine-readable copy of the docs for AI assistants (https://llmstxt.org).
				{
					tag: 'link',
					attrs: { rel: 'alternate', type: 'text/plain', title: 'llms.txt', href: `${SITE_ROOT}llms.txt` },
				},
				// To verify the site in Google Search Console, uncomment and paste your token:
				// { tag: 'meta', attrs: { name: 'google-site-verification', content: 'TOKEN' } },
			],
			sidebar: [
				{ label: 'Home', link: '/' },
				{
					label: 'Get started',
					items: [
						'start/beginner',
						'start/advanced',
						'studio',
						'studio/install',
						'studio/sign-in',
						'studio/concepts',
						'studio/create-a-game',
					],
				},
				{
					label: 'Learn by building',
					items: [
						'tutorials',
						{
							label: 'Cave arcade game',
							items: [
								'tutorials/first-game',
								'tutorials/customize-a-game',
								'tutorials/publish-a-game',
								'tutorials/collectibles-and-scoring',
								'tutorials/characters-and-art',
								'tutorials/upload-your-own-art',
							],
						},
						{
							label: 'Projects',
							items: [
								'tutorials/web-game-from-scratch',
								'tutorials/fix-and-tune-a-godot-game',
								'tutorials/3d-game-from-scratch',
							],
						},
					],
				},
				{
					label: 'Build your game',
					items: [
						'studio/engines',
						'studio/open-a-project',
						'studio/playtest',
						{
							label: 'Create assets',
							items: [
								'studio/assets',
								'studio/assets/images',
								'studio/assets/skyboxes',
								'studio/assets/video',
								'studio/assets/audio',
								'studio/assets/3d-models',
							],
						},
						'studio/design-and-polish',
						'studio/version-history',
						'studio/publish',
					],
				},
				{
					label: 'Work with Bali',
					items: [
						'studio/bali',
						'studio/prompting',
						'studio/debugging',
						'studio/bali-best-practices',
						'studio/models-and-behavior',
						'studio/attachments',
						'studio/sparks',
						{
							label: 'Extend Bali',
							items: ['studio/skills', 'studio/mcp-servers', 'studio/shell', 'studio/plugins'],
						},
					],
				},
				{
					label: 'Reference and help',
					items: [
						'studio/interface',
						'studio/settings',
						'studio/whats-new',
						'studio/faq',
						'studio/troubleshooting',
						'support',
						'contributing',
					],
				},
				// Placeholder page with a "Coming soon" badge until the Web docs are rewritten.
				// When they return, Jabali Web becomes its own sidebar topic beside Jabali Studio.
				'web',
			],
			plugins: [
				// Fails the build on broken internal links, so bad links never reach the live site.
				starlightLinksValidator({
					components: [['LinkCard', 'href']],
				}),
				// Generates /llms.txt, /llms-full.txt and /llms-small.txt for AI assistants.
				starlightLlmsTxt({
					projectName: 'Jabali',
					description:
						'Jabali is an AI game creation platform. Creators describe a game in natural language and Jabali’s AI agents (led by Bali, the AI Producer) generate a playable game that can be edited and published. These docs cover Jabali Studio, the desktop app for Windows and macOS.',
					details: [
						'- Jabali Studio supports Godot (2D/3D) projects and web projects (Phaser, Three.js, React Three Fiber, Babylon.js, PlayCanvas), templates, vibe-coding with Bali, asset/layout/script editing, version history and publishing.',
						'- Bali is the AI Producer agent built into Jabali Studio. It can generate images, video, music, sound effects, speech and rigged, animated 3D characters, and can be extended with Agent Skills, MCP servers and a shell tool.',
						'- Bali usage is measured in Sparks. Users choose the AI model, reasoning effort and behavior (Autonomous, Collaborative, Cautious, Creative) per project.',
						'- Games made on Jabali Web (jabali.ai) and FriendJam can be opened in Jabali Studio after sign-in.',
						'- For support, the Jabali team is on Discord: https://discord.gg/jabali',
					].join('\n'),
					promote: ['index*', 'start/**', 'studio/**', 'tutorials/**'],
					// The Jabali Web page is a "coming soon" placeholder, so keep it out of the AI copies.
					exclude: ['web'],
					// Drop the "Section titled …" heading-anchor links from the AI-readable copies.
					customSelectors: { all: ['.sl-anchor-link'] },
					optionalLinks: [
						{ label: 'Jabali website', url: 'https://jabali.ai', description: 'Play and create games' },
						{ label: 'Download Jabali Studio', url: 'https://jabali.ai/jabalistudio' },
						{ label: 'Jabali Discord', url: 'https://discord.gg/jabali', description: 'Community and support' },
					],
				}),
			],
		}),
		// Starlight adds a sitemap automatically; this explicit one lets us leave out noindex pages.
		sitemap({ filter: (page) => !NOINDEX_PATHS.some((path) => page.endsWith(path)) }),
		seoExtras({ redirects: legacyRedirects }),
	],
});
