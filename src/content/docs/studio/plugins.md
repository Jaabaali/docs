---
title: Install plugins in Jabali Studio
description: Add plugins to Godot and web games in Jabali Studio from a curated catalog, with setup guidance Bali can follow. Covers Godot, GDExtension and npm plugins.
sidebar:
  label: Plugins
---

Plugins add new features to your game, such as better dialogue systems, camera tools, effects or physics helpers. Jabali Studio has a curated plugin catalog with setup guidance, so you and Bali can add plugins safely.

Plugins are available for [Godot projects](/docs/studio/engines/#godot-projects) and [web projects](/docs/studio/engines/#web-projects). For web projects, see [Plugins in web projects](#plugins-in-web-projects).

## Install a plugin

1. Open your project and click the gear icon (**Open Project Settings**).
2. Under **Game Settings**, scroll to **Plugins**.
3. Browse the catalog and open a plugin to read about it.
4. Click **Install**.

Or just ask Bali: *"Install a plugin that adds a dialogue system"* or *"Is there a plugin for camera shake?"* Bali can list, check, explain, install and reinstall plugins for you.

## What each plugin page tells you

Every catalog plugin comes with guidance written for both you and Bali:

| Section                    | What's in it                                                           |
| -------------------------- | ---------------------------------------------------------------------- |
| **Overview**               | What the plugin is for                                                 |
| **Enables**                | The features it adds to your game                                      |
| **Requirements**           | Anything it needs to work                                              |
| **Configuration**          | How to set it up after installing                                      |
| **Verification**           | How to check it's working                                              |
| **Examples**               | Ways to use it                                                         |
| **Troubleshooting**        | Fixes for common problems                                              |
| **AI Guidance**            | Instructions Bali follows when using the plugin                        |
| **Dependency Warnings**    | Conflicts or other plugins it relies on                                |
| **Relevant Release Notes** | Recent changes worth knowing about                                     |

Each plugin also links to its **Homepage**, **Docs** and **Repo**.

## Update or reinstall

When a newer version of an installed plugin is available, its card shows **Update**. If a plugin stops working, try **Reinstall**.

## Plugins in web projects

In web projects, catalog plugins are npm packages. When you install one, Studio adds the package to your project together with a skill that tells Bali how to set the plugin up in your game. Studio checks every package against the catalog before installing it.

Each plugin card in a web project also shows:

- **Declared** and **Installed**: the version your project asks for and the version that's installed.
- The status of the plugin's skill: **Skill enabled**, **Skill disabled** or **Skill missing**. If the package is installed but its skill isn't turned on, click **Enable skill**.

If the package installs but its skill doesn't, click **Install** again. The package stays installed.

<!-- TODO screenshot: a plugin card in a web project showing the Declared and Installed versions and the skill status -->

## Plugins that aren't in the catalog

If your project contains plugins that aren't in the catalog, such as ones you added yourself, they appear in the list as read-only. In Godot projects, they're labeled **Godot Editor Plugin** or **GDExtension**. Studio shows them so you know what's in your project, but can't install or update them from the catalog.

:::tip
After installing a plugin, ask Bali to use it: *"Use the dialogue plugin for the conversation with the shopkeeper."* Bali follows the plugin's guidance to set it up correctly.
:::
