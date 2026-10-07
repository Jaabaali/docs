---
title: Jabali Studio FAQ and troubleshooting
description: Answers to common Jabali Studio questions about sign-in, syncing games, Bali, uploads, playtesting, layouts, publishing, system requirements and crashes.
faq: true
sidebar:
  label: FAQ & troubleshooting
---

Answers to the most common Jabali Studio questions, plus a troubleshooting checklist.

## Sign-in and account

### How do I sign in to Jabali Studio?

Launch the app and click **Continue with Google** or **Continue with Discord**. A browser window opens. Approve the sign-in there and return to Studio. See [Sign in to Jabali Studio](/docs/studio/sign-in/).

### Why is sign-in failing or freezing?

- If you sign in with Discord, make sure you're logged in to Discord in your default browser.
- If the authentication page doesn't load, restart the app or your browser.
- Some VPNs and browser privacy settings block the login window. Try disabling them temporarily.

## Game access and sync

### Where are my games from Jabali Web?

After you sign in, click **Your Projects**. Every game you've generated on Jabali Web is listed there. See [Open an existing project](/docs/studio/open-a-project/).

### Why don't I see my latest game?

Click **Refresh** in the top-right corner to reload your library.

## Bali

### What is Bali?

Bali is the AI Producer agent inside Jabali Studio. You can ask it questions, edit content or generate new assets in natural language. See [Using Bali](/docs/studio/bali/).

### Can I use Bali to edit my game?

Yes. You can say things like:

- "Rewrite this dialogue to be more sarcastic."
- "Show me the background image for Scene 2."
- "Generate a new name for my space knight character."

## Uploading files

### What files can I upload to Jabali Studio?

You can upload image and audio assets in `.png`, `.jpg`, `.mp3` and `.wav` formats.

### How do I upload custom artwork or sounds?

Open the **Assets** tab and use the **Upload Asset** button. See [Assets](/docs/studio/interface/#assets).

## Playtesting

### How do I test my game in Jabali Studio?

Use the **Preview** tab to play inside Studio, or click **Run** in the toolbar to playtest in a separate window. You can preview from the start or jump to a specific scene.

### Why is my playtest stuck or not loading?

Click **Refresh**, and make sure your scripts and scenes don't have errors. You can also debug with Bali or use the terminal log view in the **Scripts** tab.

## Editing and layout

### Where do I change scene structure or layout?

Use the **Layouts** tab to edit Godot `.tscn` scene files. For game logic, use the **Scripts** tab.

### How do I change a character's look or name?

Use the **Assets** tab, or ask Bali in the chat. For example:

- "Change the character Nova's outfit to a space uniform."
- "Rename this character to Commander Ray."

## Publishing and exporting

### How do I publish my game?

Click **Publish** in the top-right corner of Studio. Your game is updated on Jabali and playable through a shareable link. See [Publishing your game](/docs/studio/interface/#publishing-your-game).

### Can I export my game as a standalone file?

Not yet, but we're working on it.

## Performance and compatibility

### What are the system requirements for Jabali Studio?

Windows 10 or later, or macOS 12 or later, with at least 4 GB of RAM (8 GB recommended) and 500 MB of free disk space. See [Install Jabali Studio](/docs/studio/install/#system-requirements).

### What should I do if Jabali Studio crashes or lags?

- Close unused tabs or scenes.
- Restart the app.
- Make sure your computer meets the minimum requirements.
- If you use many large assets, try reducing their file sizes.

## Troubleshooting checklist

- Restart Studio if anything seems stuck.
- Publish frequently, and [save versions](/docs/studio/version-history/) before big changes.
- Check your internet connection if syncing fails.
- Use the **Report** button to submit a bug.

## Still need help?

- Re-check the [installation guide](/docs/studio/install/).
- Explore the [Studio interface overview](/docs/studio/interface/).
- Ask the team and community on the [Jabali Discord](https://discord.gg/jabali).
