---
title: Game engines and web projects in Jabali Studio
description: Choose between Godot and web projects (Phaser, Three.js, React Three Fiber, Babylon.js, PlayCanvas) in Jabali Studio, and learn what each one is best for.
sidebar:
  label: Choose an engine
---

Every Jabali Studio project is built on a game engine. You can pick one when you [create a game](/docs/studio/create-a-game/), or leave the choice to Bali.

## Choose an engine

On the home screen, open the **Engine** menu under the prompt box:

| Option                  | What it's for                                                                   |
| ----------------------- | ------------------------------------------------------------------------------- |
| **Let Bali Decide**     | The default. Bali picks the engine that best fits your prompt.                  |
| **Godot**               | Advanced 2D and 3D games, with scenes you can edit in the **Layouts** tab.      |
| **Web**                 | Games built with native web technologies that run in any browser.               |

If you choose **Web**, you can also pick a starter:

| Starter                 | Best for                                                    |
| ----------------------- | ----------------------------------------------------------- |
| **Phaser**              | 2D games for the browser                                    |
| **Three.js**            | 3D experiences rendered with WebGL or WebGPU                |
| **React Three Fiber**   | 3D games written as React components on top of Three.js     |
| **Babylon.js**          | Full-featured 3D games for the web                          |
| **PlayCanvas**          | 3D games built on the PlayCanvas engine                     |

Choose **Web** without a starter to begin with a plain web project and bring your own libraries.

Next to **Engine**, the **Camera** menu sets the perspective: **2D** for arcade games, platformers and top-down RPGs, or **3D** for action, first-person and open-world games. **Let Bali Decide** works here too.

**Watch:** [Bali recommends a starter for your game](https://youtu.be/0MhxWFtoAxw?t=1904) (2:12, from the masterclass *How to Build a Game on the Jabali Studio*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/0MhxWFtoAxw?start=1904&amp;end=2036" title="Video: Bali recommends a starter for your game" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Godot projects

Godot projects give you the most built-in tooling in Studio:

- The **Layouts** tab for editing Godot scenes (`.tscn` files)
- [Godot plugins](/docs/studio/plugins/) you can install from a curated catalog
- [Templates](/docs/studio/create-a-game/#start-from-a-template) for popular genres

Scripts in Godot projects are written in GDScript. Bali understands Godot scenes and resources, so you can ask about nodes, signals and scene structure as well as code.

## Web projects

Web projects use the JavaScript and TypeScript ecosystem, so Bali can bring in libraries from the npm registry when your game needs them. They come set up with:

- TypeScript support and type checking
- Fast development builds and optimized production builds, so published games download and load quickly
- Linting and code formatting
- Unit tests

Bali understands JavaScript, TypeScript, JSX and TSX code, including how components and modules connect. To run project commands like installing a package or running tests, Bali uses the [Shell tool](/docs/studio/shell/), which asks for your approval before running most commands.

:::note
Some features are only available for Godot projects, such as the **Layouts** tab and [Godot plugins](/docs/studio/plugins/). Everything else, including Bali, asset generation, preview and publishing, works with both.
:::

## First-time downloads

The first time you open a project, Studio may need to download the tools that build and preview it, such as the Godot engine for Godot projects or a Node.js runtime for web projects. A banner above the preview shows the progress. This only happens once per tool.

## Can I change the engine later?

The engine is set when a project is created. To try the same idea on a different engine, start a new project with the same prompt and pick another engine.

## Related pages

- [Create your first game](/docs/studio/create-a-game/)
- [Studio interface](/docs/studio/interface/)
