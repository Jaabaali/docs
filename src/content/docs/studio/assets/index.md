---
title: Create game assets with Bali in Jabali Studio
description: Generate images, video, music, sound effects, speech, skyboxes and 3D characters with Bali in Jabali Studio, or upload your own assets.
sidebar:
  label: Overview
---

Bali can create almost every kind of asset a game needs, right inside Jabali Studio. Describe what you want in the chat, review the request, and the result lands in your project ready to use.

| Asset type                        | What you can create                                                        |
| --------------------------------- | -------------------------------------------------------------------------- |
| [Images](/docs/studio/assets/images/) | Characters, sprites, backgrounds, UI, posters. Plus background removal, segmentation and depth maps. |
| [Skyboxes](/docs/studio/assets/skyboxes/) | Sky and environment backdrops for 3D worlds, picked from a ready-made library. |
| [Video](/docs/studio/assets/video/) | Cutscenes, intros, cinematic transitions and animated moments.          |
| [Audio and speech](/docs/studio/assets/audio/) | Music, sound effects, voice lines and narration.               |
| [3D models](/docs/studio/assets/3d-models/) | Props, environments and characters, plus rigging and animation.  |

## How asset generation works

1. **Ask Bali.** For example: *"Create a pixel-art knight sprite facing right"* or *"Make 30 seconds of calm music for the main menu."*
2. **Review the request card.** Bali fills in a card in the chat with a **Prompt** and settings. Edit the prompt if you like, and open **Advanced Options** to change the model, size, destination path and other settings. Nothing is generated until you're ready.
3. **Generate.** Click **Generate**. To create several variations or related assets in one go, click **Add Request** first.
4. **Keep the result.** Review what was generated, regenerate if needed, then click **Done**. Click **Cancel** to discard the request.

Generated files are saved at the **Destination Path** shown in the card and recorded in [version history](/docs/studio/version-history/). Studio also saves the settings you used alongside each file, so you or Bali can regenerate it later with the same settings.

:::tip
Generating assets uses [Sparks](/docs/studio/sparks/). Review the prompt and settings in the card before you click **Generate**, especially for video and 3D models, which take longer and use more.
:::

## Work with existing assets

Open the **Assets** tab and click any asset to view it. From the asset viewer you can:

- **Ask Bali** about the asset or how it's used in your game
- **Regenerate** it with the same or updated settings
- **Edit with Bali**, for example *"make the background darker"* or *"remove the background"*
- Open **Details** to see where it came from and the prompt used, **Replace Asset** with another file, or **Delete asset**

Bali can also make quick image edits without generating a new image: flip, crop, trim empty space, resize and rotate.

## Upload your own assets

Already have artwork, music or models? Add them to your project from the **Assets** tab:

1. Click the upload button (**Upload Asset**) at the top right of the tab, or drag files onto the tab.
2. Choose where to put each file. By default, uploads go into the `assets` folder.
3. Optionally convert file names to the style your engine expects: `snake_case` for Godot projects or `kebab-case` for web projects.

You can upload whole folders, and archives such as ZIP are extracted for you.

| Type       | Formats                                                                 |
| ---------- | ----------------------------------------------------------------------- |
| Images     | PNG, JPG, WebP, GIF, SVG, BMP, TGA, HDR, DDS, KTX                       |
| Audio      | WAV, MP3, OGG                                                           |
| Video      | MP4, OGV                                                                |
| 3D models  | GLB, glTF, OBJ, FBX, DAE                                                |
| Fonts      | TTF, OTF, WOFF, WOFF2, TTC, FNT                                         |
| Other      | Text, data and code files such as JSON, CSV, YAML and Markdown          |

Each file can be up to 10 MB, and archives up to 100 MB. Uploaded files are saved to version history automatically.

To give Bali a reference without adding it to your game, [attach it in the chat](/docs/studio/attachments/) instead.
