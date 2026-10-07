---
title: Jabali Studio interface overview
description: A tour of the Jabali Studio interface, covering Bali's panel, the Preview, Assets, Layouts and Scripts tabs, publishing, and the toolbar controls.
sidebar:
  label: Studio interface
---

Jabali Studio uses a split-pane interface built for powerful game creation with minimal complexity. Whether you're refining assets, editing gameplay logic or collaborating with Bali, the layout keeps your creative flow uninterrupted.

![The Jabali Studio interface with Bali's chat on the left and a 3D game preview on the right](../../../assets/studio/studio-interface-overview.webp)

## Interface structure

The Studio interface has two main panes:

| Pane                               | What it's for                                                          |
| ---------------------------------- | ---------------------------------------------------------------------- |
| **Left pane: Bali (AI Producer)**  | Your AI agent for prompts, questions, edits and creative suggestions   |
| **Right pane: Game Studio**        | The main editing area where you view, modify and manage your project   |

## Bali's panel (left pane)

Bali lets you work on your game in natural language. In this panel you can:

- Ask questions about assets, levels or logic
- Preview and edit artwork, scenes and scripts
- Generate or regenerate characters, dialogue or layouts
- Make direct edits using suggestions or follow-up commands

Bali also offers quick actions, such as:

- Edit background image
- Generate new character artwork
- Review game configuration

Learn more in [Using Bali](/docs/studio/bali/).

## Game editing view (right pane)

This is your central workspace. Four tabs run across the top: **Preview**, **Assets**, **Layouts** and **Scripts**.

### Preview

See a live preview of your game as it currently exists, including updated visuals, scripts and interactions. Use it to review layout and flow. Click **Run** to playtest on your desktop in a separate window, or **Refresh** after making changes.

### Assets

Browse and manage all game assets, including character sprites, backgrounds, sound files and UI elements.

![The Assets tab showing a searchable grid of textures and images](../../../assets/studio/assets-tab.webp)

From this tab you can:

- Upload new assets
- Regenerate visuals with AI
- Replace or rename files
- Review asset metadata and linked scenes

### Layouts

View and edit all of the game's layout files, structured as Godot `.tscn` scenes. Each layout corresponds to a scene in the game's story or level structure.

![The Layouts tab listing Godot scene files](../../../assets/studio/layouts-tab.webp)

Use this tab for:

- Arranging level geometry
- Positioning characters and objects
- Editing node trees and interaction zones

### Scripts

Explore and modify the game's logic in GDScript. Scripts are organized by scene or asset type.

![The Scripts tab with project files grouped into Other and Resources](../../../assets/studio/scripts-tab.webp)

You can:

- Edit game logic for interactions, NPC behavior, scoring, triggers and more
- Debug issues with Bali or in the terminal log view
- Save and test changes in real time

## Publishing your game

When you're ready, click **Publish** in the top-right corner. Review the name, version number, description, poster and release notes, then confirm.

![The Publish Game dialog with name, version, description, poster and release notes](../../../assets/studio/publish-dialog-version-release-notes.webp)

Publishing:

- Syncs your edits to Jabali's cloud
- Updates the hosted version of your game
- Generates a new playable link (or replaces the existing one)

## Toolbar controls

| Control      | What it does                                                   |
| ------------ | -------------------------------------------------------------- |
| **Run**      | Playtest your current scene or game                            |
| **Settings** | Change project preferences, resolution or export settings      |
| **Refresh**  | Reload the preview with your latest changes                    |
| **Report**   | Flag issues or give feedback on Bali's suggestions             |

## Next step

Learn how to get the most out of [Bali](/docs/studio/bali/).
