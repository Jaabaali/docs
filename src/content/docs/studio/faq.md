---
title: Jabali Studio FAQ
description: Answers to common Jabali Studio questions about signing in, your games, Bali, Sparks, uploads, playtesting, publishing, updates and requirements.
faq: true
sidebar:
  label: FAQ
---

Answers to the most common Jabali Studio questions. If something isn't working, see [Troubleshooting](/docs/studio/troubleshooting/).

## Sign-in and account

### How do I sign in to Jabali Studio?

Launch the app and click **Continue with Google** or **Continue with Discord**. A browser window opens. Approve the sign-in there and return to Studio. See [Sign in to Jabali Studio](/docs/studio/sign-in/).

## Game access and sync

### Where are my games from Jabali Web?

After you sign in, click **Your Projects**. Your games from Jabali Web that can be edited in Studio are listed there. See [Open and manage projects](/docs/studio/open-a-project/).

### Can I open my FriendJam games in Jabali Studio?

Yes. Click the game in your library and choose **Proceed with Jabali Studio**. Once imported, you can't edit the game in FriendJam anymore. See [Open a FriendJam game](/docs/studio/open-a-project/#open-a-friendjam-game).

### What does it mean when a project is archived?

An archived project is read-only. Nothing is deleted. Open it and choose **Unarchive and edit**, or use **Unarchive project** in the project card's **⋮** menu. See [Archive a project](/docs/studio/open-a-project/#archive-a-project).

## Bali

### What is Bali?

Bali is the AI Producer agent inside Jabali Studio. You can ask it questions, edit content or generate new assets in natural language. See [Using Bali](/docs/studio/bali/).

### Can I use Bali to edit my game?

Yes. You can say things like:

- "Rewrite this dialogue to be more sarcastic."
- "Show me the background image for Scene 2."
- "Generate a new name for my space knight character."

### Which AI model does Bali use, and can I change it?

You can choose. Click the model chip next to **+** under the chat box, or open **Project Settings → AI Settings**. The choice is saved per project. See [Models and behavior](/docs/studio/models-and-behavior/).

### Why is Bali asking me to approve something?

Bali asks before running shell commands and before using tools from MCP servers. Review what it wants to do, then click **Approve** or **Deny**. See [Shell tool](/docs/studio/shell/) and [MCP servers](/docs/studio/mcp-servers/).

## Sparks and billing

### What are Sparks?

Sparks measure how much work Bali does. Simple requests use fewer Sparks than big tasks or asset generation. See [Sparks and usage](/docs/studio/sparks/).

## Uploading files

### What files can I upload to Jabali Studio?

In the **Assets** tab, you can upload images (such as PNG, JPG, WebP and SVG), audio (WAV, MP3 and OGG), video (MP4), 3D models (GLB, glTF, OBJ, FBX), fonts, and text or data files. Each file can be up to 10 MB, and archives up to 100 MB. See [Upload your own assets](/docs/studio/assets/#upload-your-own-assets).

### How do I upload custom artwork or sounds?

Open the **Assets** tab and click the **Upload Asset** button, or drag files onto the tab. See [Upload your own assets](/docs/studio/assets/#upload-your-own-assets).

### How do I give Bali a design document or reference image?

Click **+** under the chat box and choose **Attach files**, or drag the file onto Bali's panel. See [Attachments](/docs/studio/attachments/).

## Playtesting

### How do I test my game in Jabali Studio?

Use the **Preview** tab to play inside Studio, or click **Run in new window** in the toolbar to playtest in a separate window. You can preview from the start or jump to a specific scene. See [Playtest your game](/docs/studio/playtest/).

### How do I see what my game looks like on a phone?

Open the **Dimensions** menu above the preview and pick a phone or tablet, such as iPhone 14 Pro or iPad Air. Use **Rotate** to switch between portrait and landscape. See [Check other screen sizes](/docs/studio/playtest/#check-other-screen-sizes).

## Editing and layout

### Where do I change scene structure or layout?

In Godot projects, use the **Layouts** tab to edit `.tscn` scene files. For game logic, use the **Scripts** tab. In web projects, ask Bali to change the layout in code.

### How do I change a character's look or name?

Use the **Assets** tab, or ask Bali in the chat. For example:

- "Change the character Nova's outfit to a space uniform."
- "Rename this character to Commander Ray."

## Publishing and exporting

### How do I publish my game?

Click **Publish** in the top-right corner of Studio. Your game is updated on Jabali and playable through a shareable link. See [Publish your game](/docs/studio/publish/).

### Can I export my game as a standalone file?

Not yet, but we're working on it.

## Performance and compatibility

### What are the system requirements for Jabali Studio?

Windows 10 or later, or macOS 12 or later, with at least 4 GB of RAM (8 GB recommended) and 500 MB of free disk space. See [Install Jabali Studio](/docs/studio/install/#system-requirements).

### How do I update Jabali Studio?

Studio checks for updates while it's running. When a notification says a new version is available, click **Update**, then **Quit and Install**. See [Update Jabali Studio](/docs/studio/install/#update-jabali-studio).

### How do I free up disk space?

Remove the local copy of games you aren't working on: click **⋮** on the project card and choose **Delete local content**. Upload any unsaved changes first. See [Free up disk space](/docs/studio/open-a-project/#free-up-disk-space).

## Still need help?

- Something not working? See [Troubleshooting](/docs/studio/troubleshooting/).
- Re-check the [installation guide](/docs/studio/install/).
- Explore the [Studio interface overview](/docs/studio/interface/).
- Ask the team and community on the [Jabali Discord](https://discord.gg/jabali).
