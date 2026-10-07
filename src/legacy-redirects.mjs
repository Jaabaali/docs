// Old Jekyll URLs (before the move to Starlight) → new pages.
// Keys and values are relative to the site base (e.g. '/docs/').
// Each key becomes a tiny HTML page that forwards visitors and search engines
// to the new URL, so existing links and search results keep working.
// An empty string value means "the docs home page" (used for pages that were removed,
// such as the retired Jabali on Discord guides).

export const legacyRedirects = {
	'web.html': 'web/',
	'support.html': 'support/',
	'studio.html': 'studio/',

	'core/prompting.html': '',
	'core/how-it-works.html': '',
	'core/generation-and-management.html': '',
	'core/story-characters-assets.html': '',

	'discord-docs/discord.html': '',
	'discord-docs/create-discord.html': '',
	'discord-docs/create-discord-genres.html': '',
	'discord-docs/game-seed.html': '',
	'discord-docs/edit-upload.html': '',
	'discord-docs/prompt-editing.html': '',
	'discord-docs/upload-content.html': '',
	'discord-docs/build-publish.html': '',

	'tutorials/interactive-story.html': '',
	'tutorials/character-sim.html': '',
};
