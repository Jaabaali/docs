---
title: Extend Bali with Agent Skills
description: Teach Bali reusable workflows in Jabali Studio with Agent Skills. Install, create and import skills, turn them on per project, and write your own SKILL.md.
sidebar:
  label: Agent Skills
---

**Agent Skills** are reusable packages of instructions and know-how that Bali can use while it works. A skill might teach Bali your studio's coding conventions, a step-by-step workflow for building levels, or how to use a particular library. Bali loads a skill only when it's relevant to the task, so you can install many without crowding the conversation.

Jabali Studio uses the open Agent Skills format: a folder with a `SKILL.md` file, plus any supporting files.

## Skills that come with Studio

Studio installs a set of default skills automatically, chosen for your project type, so Bali is ready with the right workflows for your engine without any setup. Skills from the Jabali library are kept up to date automatically.

:::caution[Don't edit library skills]
Library skills update automatically, and an update can replace changes you've made to them. To customize one, create your own skill instead. You can copy the parts you need into it.
:::

## Manage your skills

Open **Settings → Skills** to see every skill. Each card shows whether the skill is **Installed** or **Available**, where it came from, its version, and whether it's **Valid**. Skills you've changed are marked **Modified**.

From a skill's card you can:

- **Install** an available skill
- **Edit** its instructions
- **Revert Changes** or **Reinstall** to go back to the original
- **Uninstall** or **Delete** it
- Switch **Enabled by default** on or off, to choose whether new projects use it

Skills are installed once for your account and shared across all your projects.

## Turn skills on or off for a project

1. Open the project and click the gear icon (**Open Project Settings**).
2. Open **AI Settings → Skills**.
3. Switch **Enabled for this project** on or off for each skill.

A chip shows whether a skill is **Using user default** or has a **Project override**.

## Add a skill

### Import a skill

- In **Settings → Skills**, click **Import Skill**, or drag a ZIP or Markdown file onto the page.
- In the chat, click **+** and choose **Add agent skill**, or drop a skill's ZIP or `SKILL.md` file into the chat. Skills added from the chat are turned on for the current project.

A skill ZIP must contain exactly one `SKILL.md` inside a single top-level folder. A Markdown file needs the frontmatter shown [below](#write-your-own-skill). If you import plain Markdown without it, Studio opens the skill editor so you can fill in the details.

### Create a skill in Studio

1. In **Settings → Skills**, click **Create Skill**.
2. Fill in:
   - **Display name**
   - **Description**: when Bali should use the skill. This is what Bali reads to decide whether the skill is relevant, so be specific.
   - **Version**
   - **Skill Instructions**: the instructions themselves, in Markdown
3. Turn on **Enable by default for projects** if every new project should use it.
4. Save the skill.

## Write your own skill

A `SKILL.md` file starts with YAML frontmatter, followed by the instructions in Markdown:

```markdown
---
name: dialogue-style
description: House style for writing NPC dialogue. Use when writing or editing any character dialogue, barks or narration.
---

# Dialogue style

- Keep lines under 20 words. Players skim.
- Each NPC has one verbal habit. Look it up in design/characters.md.
- Never break the fourth wall unless the scene is marked as comedic.
- After writing dialogue, list any new characters you introduced.
```

| Field           | Rules                                                                  |
| --------------- | ---------------------------------------------------------------------- |
| `name`          | 1 to 64 characters: lowercase letters, numbers and hyphens             |
| `description`   | Keep it under 1,024 characters. Say what the skill does and when to use it. |

To share a skill with others, put the `SKILL.md` and any supporting files in a folder and zip it.

### Tips for good skills

- **Write the description for Bali.** Include the situations and keywords that should trigger the skill.
- **Keep each skill focused** on one workflow or topic. Several small skills work better than one huge one.
- **Be concrete.** File paths, examples and checklists help more than general advice.
- **Test it.** Turn the skill on in a project, ask Bali for something that should use it, and refine the instructions based on what happens.
