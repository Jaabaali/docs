---
title: Attach files, images and screenshots for Bali
description: Give Bali design documents, reference images, screenshots and data files in Jabali Studio. Supported formats, size limits and how attachments are stored.
sidebar:
  label: Attachments
---

Bali does its best work when it can see what you mean. Attach a design document, a reference image, a screenshot of a bug or a spreadsheet of items, and Bali uses it as context for your game.

## Ways to attach files

| Where                       | How                                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| **Chat**                    | Click **+** under Bali's chat box and choose **Attach files**.                              |
| **Drag and drop**           | Drag files anywhere onto Bali's panel. You'll see **Drop files to attach**.                 |
| **New project**             | On the home screen, click **Add design files** next to your prompt. See [Create your first game](/docs/studio/create-a-game/#add-design-files). |

### Take a screenshot of your game

To show Bali exactly what you're seeing, click **+** and choose **Take screenshot**. Studio captures the game preview and attaches it to your message. It's available while the **Preview** tab is open.

Screenshots are the fastest way to report visual bugs: *"The health bar overlaps the score in this screenshot. Move it below the score."*

## Supported files

You can attach Markdown, text, JSON, YAML, CSV, XML, PDF, images, audio, video and 3D models, plus archives: ZIP, TAR, 7Z, RAR, GZ, BZ2 and XZ.

| Limit                     | Size                         |
| ------------------------- | ---------------------------- |
| Each file                 | 10 MB                        |
| Each archive              | 100 MB                       |

When you attach an ordinary ZIP file, Studio asks whether to **Extract files** or **Keep ZIP**. Other archives are extracted automatically when Studio can open them.

:::note[Some files do more than attach]
- A ZIP file containing an Agent Skill, or a `SKILL.md` file, is installed as a skill and turned on for the project. See [Agent Skills](/docs/studio/skills/).
- An `.mcpb` file is installed as an MCP server and turned on for the project. See [MCP servers](/docs/studio/mcp-servers/).
:::

## Images and models that can't see them

Some AI models can't read images. If the [model you've selected](/docs/studio/models-and-behavior/) doesn't support images, Studio marks the image with a warning that it won't be included. Switch to a model that supports images if Bali needs to see it.

## Where attachments are stored

Files you attach in the chat are saved with your project on your computer, so Bali can keep referring to them as you build. They aren't part of your game and aren't included in [version history](/docs/studio/version-history/), so they may not be available if you open the project on another computer.

Design files you add when creating a project are saved in a `design` folder inside the project.

To make a file part of your game, such as a sprite or a music track, upload it in the **Assets** tab instead. See [Upload your own assets](/docs/studio/assets/#upload-your-own-assets).

## Tips

- **One clear reference beats many vague ones.** A single screenshot of the style you want works better than ten loosely related images.
- **Say what the file is for.** *"Use the item list in items.csv for the shop"* is clearer than attaching the file on its own.
- **Use structured data for content-heavy games.** JSON or CSV files work well for dialogue, items, levels and quiz questions.
- **Keep a design document up to date.** If you plan your game in Markdown, attach the latest version when you make big changes.
