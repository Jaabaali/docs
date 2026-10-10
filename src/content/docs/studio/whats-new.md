---
title: What's new in Jabali Studio
description: Release notes for Jabali Studio. New Bali features, AI models, asset tools and fixes in each release, newest first, with links to the docs.
sidebar:
  label: What's new
---

New features and improvements in each Jabali Studio release, newest first. Studio tells you when a new version is available; see [Update Jabali Studio](/docs/studio/install/#update-jabali-studio). For announcements as they happen, see [Product updates](https://www.jabali.ai/product-updates/) on jabali.ai.

## v0.27.4-beta (October 2, 2026)

- **GPT 6.1 Sol** joins the model list. It performs close to GPT 6 Astra on coding and complex work and uses around 80% fewer Sparks than GPT 6 Astra for comparable token usage. Savings vary by task and reasoning setting. See [Models and behavior](/docs/studio/models-and-behavior/).
- **Five new image models**: GPT Image 2.5 Sunburst (the new default), GPT Image 2.5 Flare, Nano Banana 2 Lite, MAI Image 2.6 and MAI Image 2.6 Flash. Older image models are under **Legacy Models**, and you can still regenerate images from saved requests with your settings preserved. See [Images](/docs/studio/assets/images/).
- **Seasonal decorations** for October. Turn them off in **Settings → Appearance → Seasonal decorations**.

## v0.27.2-beta (September 18, 2026)

- New models: **GPT 6 Astra** and **GLM 5.3**. **Grok 4.6** now supports reasoning.
- Model capabilities are shown more accurately in the model menu.
- Bali keeps the working files it creates while running shell commands better organized.
- Stability fixes, including for macOS builds.

## v0.27.1-beta (September 1, 2026)

- Fixed Studio slowing down or freezing in very long Bali conversations.
- Fixed game previews getting stuck on mute.
- Drag and drop works again for [attachments](/docs/studio/attachments/), even while the game preview is open.
- New model: **Gemini 3.7 Flash**.
- Studio now warns you when the selected model can't see images, before you send them.
- Shell commands always run in the correct project, even when you switch projects.

## v0.27.0-beta (August 31, 2026)

- **[Video generation](/docs/studio/assets/video/)**: create cutscenes, intros and other video from a prompt, with optional first and last frames, style references, reference images and continuation of an existing video.
- **[Rig and animate 3D characters](/docs/studio/assets/3d-models/#create-an-animated-character)**: generate characters in an A-pose or T-pose, rig them, then pick from suggested animations.
- **Build games from your own material**: upload images, design documents, Markdown, JSON and other files, and Bali uses them as source material. See [Attachments](/docs/studio/attachments/).
- New models with reasoning: **GLM 5.2** and **Kimi K3**.
- Bali can inspect 3D models in more detail, and Studio displays them better.
- Studio can read the generation information embedded in PNG images from popular image tools.

## v0.26.6-beta (August 13, 2026)

- **[Image segmentation](/docs/studio/assets/images/#segment-an-image)**: isolate a character, prop, building or other element from an image.
- **[Depth maps](/docs/studio/assets/images/#create-a-depth-map)**: create a grayscale depth pass from an image for parallax, fake-3D layering and lighting effects.
- **[Skyboxes](/docs/studio/assets/skyboxes/)**: Bali finds the closest match for your world in a library of ready-made skyboxes instead of generating one from scratch.

## Sparks efficiency update (August 4, 2026)

An efficiency upgrade across all Jabali products means many AI workflows use significantly fewer [Sparks](/docs/studio/sparks/), with some workloads using up to 75% fewer. It applies automatically.

## v0.26.5-beta (August 3, 2026)

- New models: **GPT-5.6 Sol**, **GPT-5.6 Terra** and **GPT-5.6 Luna**.
- New image model: **GPT Image 2**.
- **Project archiving**: inactive projects can be archived automatically to keep your list focused, and you can archive and unarchive projects yourself. Archived projects are read-only, not deleted. See [Open and manage projects](/docs/studio/open-a-project/#archive-a-project).
- Faster project browsing for large libraries.
- Fixed audio not playing in some game previews.

## v0.26.4-beta (July 2, 2026)

- **Open FriendJam games in Jabali Studio** and keep building with Bali. Includes a FriendJam mobile device preview. See [Open and manage projects](/docs/studio/open-a-project/#open-a-friendjam-game).
- Default [Agent Skills](/docs/studio/skills/) are installed automatically for your project type, and library skills stay up to date.
- A new indicator shows which projects are downloaded to your computer.
- The home screen only lists projects you can open and edit in Studio.
- New default sound effects model.

## v0.26.3-beta (June 22, 2026)

- More reliable [skill](/docs/studio/skills/) installation and updates, and better sharing of skills across projects.
- Clearer messages when you reach a [usage limit](/docs/studio/sparks/).

## v0.26.2-beta (June 14, 2026)

- Bali understands TypeScript, TSX and JSX code structure, and TypeScript editing in Studio is smoother.
- Newer music and sound effect models and better background removal. See [Audio and speech](/docs/studio/assets/audio/).
- New model: **Gemini 3.5 Flash**.
- Fixed Bali actions getting stuck on **Queued...**.

## v0.26.1-beta (June 10, 2026)

- Better setup and project detection for web game projects.
- More reliable runtime logs in the game preview.

## v0.26.0-beta (June 2, 2026)

- **Web game projects**: build with Phaser, Three.js, React Three Fiber, Babylon.js, PlayCanvas or your own JavaScript or TypeScript stack, with fast builds, type checking, linting, formatting and unit tests set up for you. See [Engines and web projects](/docs/studio/engines/).

## v0.25.0-beta (May 22, 2026)

- **[Shell tool](/docs/studio/shell/)** (experimental): Bali can run commands in your project folder using bash, zsh or PowerShell, with your approval.
- Godot downloads now show progress.
- Fixes for game titles and posters when publishing.

## v0.24.2-beta (May 19, 2026)

- More reliable [skill](/docs/studio/skills/) loading and validation.
- Better performance when using [MCP](/docs/studio/mcp-servers/) tools.
- Fixes for new and untitled games.

## v0.24.1-beta (May 12, 2026)

- Fixed external libraries and assets not loading in some web game previews.

## v0.24.0-beta (May 11, 2026)

- **[Agent Skills](/docs/studio/skills/)**: install reusable skills by dragging in Markdown or ZIP files.
- Most people on the Jabali Studio waitlist now have access. If you still can't get in, [contact support](/docs/support/).

## v0.23.3-beta (May 6, 2026)

- More ways to add and set up [MCP servers](/docs/studio/mcp-servers/).
- Bali understands the structure of Markdown files, such as design docs.

## v0.23.2-beta (May 5, 2026)

- **[MCP servers](/docs/studio/mcp-servers/)**: connect Bali to external tools over STDIO, HTTP or SSE, with per-tool access control and approvals.
- Bali uses less context while staying accurate in long conversations and large projects.
- Bali navigates code by symbols (functions, classes and so on) and understands Godot `.tscn` and `.tres` files.
- Drag and drop files into the Scripts, Assets and Layouts tabs and into Bali's chat.

## v0.23.1-beta (April 27, 2026)

- **[Speech](/docs/studio/assets/audio/#generate-speech)**: generate voice lines and narration with text-to-speech.
- Send images and [screenshots](/docs/studio/attachments/#take-a-screenshot-of-your-game) to Bali in chat.
- Support for Godot plugins that aren't in the catalog, including GDExtension plugins. See [Godot plugins](/docs/studio/plugins/).
- New models: **Gemini 3** and newer, plus the **Nano Banana 2** and **Nano Banana Pro** image models.

## v0.23.0-beta (April 16, 2026)

- **[Sparks](/docs/studio/sparks/)** replace fixed message limits, so simple tasks cost less and bigger tasks can use more when needed. The billing panel is refreshed to match.
- Bali can inspect 3D models, and Studio supports OBJ, FBX and STL files.
- Repeated log lines collapse automatically.
