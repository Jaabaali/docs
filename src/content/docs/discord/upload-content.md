---
title: Upload custom content in Discord
description: Use the /upload command in the Jabali Discord to add knowledge files or branded images and audio to your game, with supported file types and limits.
sidebar:
  label: Upload content
---

You can upload your own content to improve game generation, whether it's a **knowledge file** that enriches the AI's storytelling or **branded assets** like your own images and sounds. All uploads in Discord use the `/upload` command.

## Supported upload types

| Type               | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| **Knowledge file** | Text documents used as a knowledge base for AI generation    |
| **Branded asset**  | Custom images or sound files tied to specific in-game assets |

## Upload a knowledge file

Upload background lore, dialogue scripts, worldbuilding documents or any other reference material that should influence how Jabali generates your game.

### Supported file types

`.pdf`, `.txt`, `.doc`, `.docx`

### Limits

- Maximum file size: **5 MB**
- Maximum content length: **1,000 lines**

:::caution
Larger files are rejected.
:::

### How to upload

Use the `/upload` command in **#builder-playground** with the category set to **knowledge**, then attach your file.

![The /upload command in Discord with category "knowledge" and a PDF attached](../../../assets/discord/upload-knowledge-file.png)

## Upload branded assets (images or audio)

Upload custom visuals and sounds to override or enrich asset generation. This is ideal for brand-specific art, character portraits, soundtracks and more.

### Supported file types

- **Images:** `.png`, `.jpg`, `.jpeg`, `.gif`
- **Audio:** `.mp3`, `.wav`

### How to upload

Use `/upload`, choose the asset category (for an image, **image**), attach the file and enter the **asset-id** of the in-game asset it should replace (for example `characters-0`).

![The /upload command in Discord with category "image", an attached character image and asset-id characters-0](../../../assets/discord/upload-branded-asset.png)

## Tips

- **Keep knowledge files tightly scoped.** Focus on content relevant to your current game (don't upload a 100-page novel).
- **Use consistent asset IDs** so your branded assets are easy to reference.
- **Re-upload to the same asset ID** to update its content.

## Next step

[Build and publish your game](/docs/discord/build-and-publish/).
