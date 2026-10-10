---
title: Key concepts in Jabali Studio
description: The terms you'll meet across the Jabali Studio docs, from Bali, projects and templates to engines, assets, Sparks, versions and publishing.
sidebar:
  label: Key concepts
---

These are the terms the rest of the docs use. Each one has a short explanation here and a link to its full page.

## Bali

Bali is the AI Producer built into Jabali Studio. You chat with Bali to build your game, change it, ask how it works, fix bugs and generate assets. Bali reads your whole project, so you can refer to scenes, scripts and characters by name. See [Using Bali](/docs/studio/bali/).

## Projects

Each game is a project. Your library lists every game in your account that you can open in Studio, including games you started on Jabali Web or FriendJam. Studio keeps a local copy of each game you open on your computer. See [Open and manage projects](/docs/studio/open-a-project/).

## Templates

Templates are ready-made games for popular genres, such as Interactive Story, Character Simulation, 3D Racer and Match 3. Start from one and change it with Bali, or start from a prompt and let Bali build the first version. See [Create your first game](/docs/studio/create-a-game/).

## Engine and camera

Every project is built on an engine, chosen when you create it:

- **Godot** for 2D and 3D games, with scenes you can edit in the **Layouts** tab.
- **Web** for games that run in any browser, with starters such as Phaser and Three.js.

The **Camera** setting picks **2D** or **3D**. Leave both on **Let Bali Decide** if you're not sure. You can't change the engine after a project is created. See [Choose an engine](/docs/studio/engines/).

## Assets

Assets are everything your game uses besides code: sprites, backgrounds, music, sound effects, speech, video, fonts and 3D models. Bali can generate them, or you can upload your own in the **Assets** tab. See [Create assets with Bali](/docs/studio/assets/).

## Attachments and uploads

Both add files, for different reasons:

- **Attach** a file in Bali's chat to give Bali context, such as a design document, a reference image or a screenshot of a bug. See [Attachments](/docs/studio/attachments/).
- **Upload** a file in the **Assets** tab to put it in your game. See [Upload your own assets](/docs/studio/assets/#upload-your-own-assets).

## Model, reasoning and behavior

Three settings shape how Bali works on each project:

- **Model**: the AI model behind Bali.
- **Reasoning**: how much thinking to ask for, on models that support it.
- **Behavior**: how independently Bali works. Choose **Autonomous**, **Collaborative**, **Cautious** or **Creative**.

See [Models and behavior](/docs/studio/models-and-behavior/).

## Sparks

Sparks measure how much work Bali does. Each request uses Sparks based on the work involved, so a quick question costs less than a new level or a batch of assets. Your model and reasoning setting affect it too. Check your usage in **Settings → Billing**. See [Sparks and usage](/docs/studio/sparks/).

## Preview and rebuild

The **Preview** tab runs your game inside Studio, so you can playtest as you go. In Godot projects, a **Build is out of date** banner appears after changes. Click **Rebuild** to see them. See [Studio interface](/docs/studio/interface/#preview).

## Versions and publishing

Studio records your changes as you and Bali work, so you can restore an earlier state from the **Version History** panel. Publishing puts your game online on Jabali with a link anyone can play. Each publish also turns your latest changes into a numbered version, such as 1.0.1. See [Version history](/docs/studio/version-history/) and [Publish your game](/docs/studio/publish/).

## Archived projects

An archived project is read-only. Nothing is deleted, and you can unarchive it at any time. See [Archive a project](/docs/studio/open-a-project/#archive-a-project).

## Extending Bali

You can give Bali more abilities:

- [Agent Skills](/docs/studio/skills/): reusable instructions for workflows and conventions.
- [MCP servers](/docs/studio/mcp-servers/): connections to outside tools and data.
- [Shell tool](/docs/studio/shell/): running commands in your project folder.

## Godot plugins

In Godot projects, plugins add ready-made features to the game itself, such as dialogue systems, camera tools or effects. Install them from Project Settings, or ask Bali to find and install one. See [Godot plugins](/docs/studio/plugins/).
