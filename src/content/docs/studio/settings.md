---
title: Jabali Studio settings reference
description: Where to find every Jabali Studio setting, from appearance, profile, billing, MCP, shell and skills to per-project game and AI settings for Bali.
sidebar:
  label: Settings
---

Jabali Studio has two kinds of settings:

- **App settings** apply everywhere: your profile, plan, appearance and the tools Bali can use.
- **Project settings** apply to one game: its name and poster, plugins, and how Bali works on it.

## App settings

Click your avatar and choose **Settings**. On Mac, you can also choose **Jabali Studio → Settings** from the menu bar.

| Tab            | What you can do                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| **Appearance** | Turn **Seasonal decorations** on or off, like the spider webs that appear in October.                     |
| **Profile**    | Edit your **Full Name**, **Username** and **Creator Tag**, add social links, and copy your **User ID**.   |
| **Billing**    | See your plan, your Sparks usage and when it refreshes, and upgrade. See [Sparks and usage](/docs/studio/sparks/). |
| **MCP**        | Add and manage MCP servers that give Bali extra tools. See [MCP servers](/docs/studio/mcp-servers/).      |
| **Shell**      | Choose which shell Bali uses to run commands and manage saved approvals. See [Shell tool](/docs/studio/shell/). |
| **Skills**     | Install, create and manage Agent Skills. See [Agent Skills](/docs/studio/skills/).                        |
| **Logout**     | Sign out of Jabali Studio.                                                                                |

## Project settings

Open a project and click the gear icon (**Open Project Settings**) in the top-right toolbar. Project settings have two sections.

### Game settings

| Setting              | What it does                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------ |
| **Active / Archived**| Archive the game to make it read-only, or switch it back to active. See [Archive a project](/docs/studio/open-a-project/#archive-a-project). |
| **View Page**        | Open the game's page on Jabali.                                                                        |
| **Game Poster**      | The cover image players see.                                                                           |
| **Game Name**        | The game's title.                                                                                      |
| **Game ID**          | The game's unique ID. Useful when you contact support.                                                 |
| **Game Description** | The short pitch players read.                                                                          |
| **Plugins**          | Godot projects only. Install curated plugins. See [Godot plugins](/docs/studio/plugins/).              |

Click **Save Changes** after editing the poster, name or description.

### AI settings

These settings control how Bali works on this project. You can change the most common ones from the chat too. See [Models and behavior](/docs/studio/models-and-behavior/).

| Setting              | What it does                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------ |
| **AI Model**         | The model Bali uses for this project's conversations.                                                  |
| **Reasoning Effort** | How much thinking to request from models that support reasoning. **Default** uses Medium.              |
| **Behavior**         | How independently Bali works: **Autonomous**, **Collaborative**, **Cautious** or **Creative**.         |
| **Instructions**     | Anything Bali should always know about your game. Click **Save Instructions** when you're done.        |
| **MCP Servers**      | Choose which MCP servers are active for this project.                                                  |
| **Project Shell**    | Use the global shell settings or override them, and review approvals saved for this project.          |
| **Skills**           | Turn individual skills on or off for this project.                                                     |

:::tip[What to put in Instructions]
Use **Instructions** for things you'd otherwise repeat in every chat: the art style, the target audience, naming conventions, a reading level for dialogue, or "always keep the UI in the bottom-left corner". Keep them short and specific.
:::
