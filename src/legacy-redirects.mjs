// Old Jekyll URLs (before the move to Starlight) → new pages.
// Keys and values are relative to the site base (e.g. '/docs/').
// Each key becomes a tiny HTML page that forwards visitors and search engines
// to the new URL, so existing links and search results keep working.
// An empty string value means "the docs home page".

export const legacyRedirects = {
	'web.html': 'web/',
	'support.html': 'support/',
	'studio.html': 'studio/',

	'core/prompting.html': 'guides/prompting/',
	'core/how-it-works.html': '',
	'core/generation-and-management.html': '',
	'core/story-characters-assets.html': '',

	'discord-docs/discord.html': 'discord/',
	'discord-docs/create-discord.html': 'discord/create-a-game/',
	'discord-docs/create-discord-genres.html': 'discord/genres/',
	'discord-docs/game-seed.html': 'discord/game-seed/',
	'discord-docs/edit-upload.html': 'discord/edit-content/',
	'discord-docs/prompt-editing.html': 'discord/asset-prompts/',
	'discord-docs/upload-content.html': 'discord/upload-content/',
	'discord-docs/build-publish.html': 'discord/build-and-publish/',

	'tutorials/interactive-story.html': 'tutorials/interactive-story/',
	'tutorials/character-sim.html': '',
};
