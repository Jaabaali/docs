// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import starlightLlmsTxt from 'starlight-llms-txt';

import seoExtras from './src/integrations/seo-extras.mjs';
import { legacyRedirects } from './src/legacy-redirects.mjs';
import { SITE, BASE, SITE_ROOT, REPO, BRANCH } from './src/site.config.mjs';

const DESCRIPTION =
	'Official Jabali documentation. Learn to create, playtest and publish AI-generated games with Jabali Studio, Jabali Web and the Jabali Discord bot.';

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
					label: 'Jabali Studio',
					items: [
						'studio',
						'studio/install',
						'studio/sign-in',
						'studio/create-a-game',
						'studio/open-a-project',
						'studio/interface',
						'studio/bali',
						'studio/bali-best-practices',
						'studio/version-history',
						'studio/faq',
					],
				},
				{
					label: 'Jabali Web',
					items: ['web'],
				},
				{
					label: 'Jabali on Discord',
					items: [
						'discord',
						'discord/create-a-game',
						'discord/genres',
						'discord/game-seed',
						'discord/edit-content',
						'discord/asset-prompts',
						'discord/upload-content',
						'discord/build-and-publish',
					],
				},
				{
					label: 'Guides & tutorials',
					items: ['guides/prompting', 'tutorials/interactive-story'],
				},
				{
					label: 'Help',
					items: ['support', 'contributing'],
				},
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
						'Jabali is an AI game creation platform. Players and creators describe a game in natural language and Jabali’s AI agents (led by Bali, the AI Producer) generate a playable game that can be edited and published. Jabali is available as a desktop app (Jabali Studio, Windows and macOS), a web app (Jabali Web at jabali.ai) and a Discord bot.',
					details: [
						'- Jabali Studio is the most capable surface: it supports Phaser (2D) and Godot (2D/3D) projects, templates, vibe-coding with Bali, asset/layout/script editing, version history and publishing.',
						'- Bali is the built-in AI Producer agent in every Jabali surface.',
						'- Games made on Discord or the web sync to Jabali Studio after sign-in.',
						'- For support, the Jabali team is on Discord: https://discord.gg/jabali',
					].join('\n'),
					customSets: [
						{
							label: 'Jabali Studio',
							description: 'the Jabali Studio desktop app and the Bali AI Producer',
							paths: ['studio/**'],
						},
						{
							label: 'Jabali on Discord',
							description: 'creating and editing games with the Jabali Discord bot',
							paths: ['discord/**'],
						},
					],
					promote: ['index*', 'studio/**'],
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
		seoExtras({ redirects: legacyRedirects }),
	],
});
