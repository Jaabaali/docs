// Adds schema.org structured data (JSON-LD) to every docs page.
// Search engines use it for rich results; AI answer engines use it to understand
// what a page is, who publishes it, when it changed and which questions it answers.
import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import type { StarlightRouteData } from '@astrojs/starlight/route-data';

const ORG = {
	'@type': 'Organization',
	'@id': 'https://jabali.ai/#organization',
	name: 'Jabali',
	url: 'https://jabali.ai',
	sameAs: ['https://discord.gg/jabali', 'https://github.com/Jaabaali'],
};

export const onRequest = defineRouteMiddleware((context) => {
	const route = context.locals.starlightRoute;
	const { entry } = route;
	const site = context.site?.href ?? context.url.origin + '/';
	const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
	const home = new URL(base, site).href;
	const url = new URL(context.url.pathname, site).href;
	const isHome = url === home;
	const description = entry.data.description;

	const org = { ...ORG, logo: new URL('apple-touch-icon.png', home).href };
	const website = {
		'@type': 'WebSite',
		'@id': `${home}#website`,
		name: 'Jabali Docs',
		url: home,
		inLanguage: 'en',
		publisher: { '@id': ORG['@id'] },
	};

	const graph: Record<string, unknown>[] = [org, website];

	if (!isHome) {
		graph.push({
			'@type': 'TechArticle',
			'@id': `${url}#article`,
			headline: entry.data.title,
			description,
			url,
			mainEntityOfPage: url,
			inLanguage: 'en',
			image: new URL('og-image.png', home).href,
			isPartOf: { '@id': website['@id'] },
			publisher: { '@id': ORG['@id'] },
			author: { '@id': ORG['@id'] },
			...(route.lastUpdated ? { dateModified: route.lastUpdated.toISOString() } : {}),
		});

		const crumbs = breadcrumbs(route, home, url, entry.data.title);
		if (crumbs.length > 1) {
			graph.push({
				'@type': 'BreadcrumbList',
				itemListElement: crumbs.map((c, i) => ({
					'@type': 'ListItem',
					position: i + 1,
					name: c.name,
					item: c.url,
				})),
			});
		}
	}

	if (entry.data.faq && entry.body) {
		const questions = extractFaq(entry.body);
		if (questions.length) {
			graph.push({
				'@type': 'FAQPage',
				'@id': `${url}#faq`,
				url,
				mainEntity: questions.map((q) => ({
					'@type': 'Question',
					name: q.question,
					acceptedAnswer: { '@type': 'Answer', text: q.answer },
				})),
			});
		}
	}

	route.head.push({
		tag: 'script',
		attrs: { type: 'application/ld+json' },
		// Escape "<" so content can never close the script tag early.
		content: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c'),
	});
});

type SidebarEntry = StarlightRouteData['sidebar'][number];

/** Home → sidebar group → current page. */
function breadcrumbs(route: StarlightRouteData, home: string, url: string, title: string) {
	const crumbs = [{ name: 'Jabali Docs', url: home }];
	const path = findPath(route.sidebar, []);
	if (path) {
		for (const group of path) {
			const first = firstLink(group);
			if (first) crumbs.push({ name: group.label, url: new URL(first, home).href });
		}
	}
	if (crumbs[crumbs.length - 1]?.url === url) crumbs.pop();
	crumbs.push({ name: title, url });
	return crumbs;
}

function findPath(entries: SidebarEntry[], trail: SidebarEntry[]): SidebarEntry[] | undefined {
	for (const e of entries) {
		if (e.type === 'link' && e.isCurrent) return trail;
		if (e.type === 'group') {
			const found = findPath(e.entries, [...trail, e]);
			if (found) return found;
		}
	}
	return undefined;
}

function firstLink(e: SidebarEntry): string | undefined {
	if (e.type === 'link') return e.href;
	for (const child of e.entries) {
		const href = firstLink(child);
		if (href) return href;
	}
	return undefined;
}

/** Pulls `### Question?` headings and the text below them out of a Markdown page. */
function extractFaq(markdown: string) {
	const out: { question: string; answer: string }[] = [];
	let current: { question: string; lines: string[] } | undefined;
	const flush = () => {
		if (!current) return;
		const answer = plain(current.lines.join('\n'));
		if (answer) out.push({ question: current.question, answer });
		current = undefined;
	};
	for (const line of markdown.split('\n')) {
		const h = /^(#{1,6})\s+(.*?)\s*$/.exec(line);
		if (h) {
			flush();
			const text = plain(h[2]);
			if (h[1].length === 3 && text.endsWith('?')) current = { question: text, lines: [] };
			continue;
		}
		if (/^\s*(---|:::)/.test(line)) continue;
		current?.lines.push(line);
	}
	flush();
	return out;
}

/** Very small Markdown → plain text conversion for structured data. */
function plain(md: string) {
	return md
		.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
		.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
		.replace(/[*_`]{1,3}([^*_`]+)[*_`]{1,3}/g, '$1')
		.replace(/^\s*[-*+]\s+/gm, '• ')
		.replace(/^\s*\d+\.\s+/gm, '')
		.replace(/<[^>]+>/g, '')
		.replace(/\n{2,}/g, '\n')
		.trim();
}
