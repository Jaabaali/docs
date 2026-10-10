---
title: Using Bali, the AI Producer in Jabali Studio
description: How to use Bali, the AI assistant in Jabali Studio, to ask about your game, edit content, regenerate assets, explain code and debug, with example prompts.
sidebar:
  label: Using Bali
---

Bali is the AI assistant built into Jabali Studio. It helps you understand, edit and expand your game using natural language. Whether you're tweaking gameplay, fixing logic, editing character bios or exploring what's in your game, you do it all by chatting with Bali.

## What can Bali do?

You can use Bali to:

- **Answer questions** about your game's characters, levels, logic or assets
- **Edit content** such as scene descriptions, story flow, dialogue and character traits
- **Regenerate assets** from updated prompts
- **Debug** scenes or test branching logic
- **Explain code** that controls game behavior, such as roguelike modifiers
- **Suggest improvements** to writing, pacing or structure
- **Create assets**: images, video, music, sound effects, speech, skyboxes and 3D characters. See [Create assets](/docs/studio/assets/).
- **Use your references**: design documents, images, screenshots and data files you attach. See [Attachments](/docs/studio/attachments/).
- **Run project commands** such as installing packages or running tests, with your approval. See [Shell tool](/docs/studio/shell/).
- **Use extra tools and know-how** from [MCP servers](/docs/studio/mcp-servers/) and [Agent Skills](/docs/studio/skills/)

**Watch:** [Bali traces a bug through the logs and fixes it](https://youtu.be/Er8g4jMJa9Q?t=3343) (1:05, from the masterclass *AI Game Jam Masterclass*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/Er8g4jMJa9Q?start=3343&amp;end=3408" title="Video: Bali traces a bug through the logs and fixes it" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## How to use Bali

1. Launch Jabali Studio.
2. [Open a project](/docs/studio/open-a-project/).
3. Find Bali's chat panel on the left side of the Studio.
4. Type your prompts and questions in the chat box.

![Bali's chat panel introducing what it can help with, next to a game preview](../../../assets/studio/bali-chat-panel.webp)

**Watch:** [How Studio plans a task and hands it to Bali's agents](https://youtu.be/QUF5JYjUqy4?t=190) (0:32, from the tutorial *Build a Custom Phaser Game from Scratch with AI*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/QUF5JYjUqy4?start=190&amp;end=222" title="Video: How Studio plans a task and hands it to Bali's agents" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## The chat box

- Click **+** to **Attach files**, **Add MCP server**, **Add agent skill** or **Take screenshot** of the game preview. You can also drag files straight onto the panel.
- Click the model chip next to **+** to change the **Model**, **Behavior** and **Reasoning** Bali uses for this project. See [Models and behavior](/docs/studio/models-and-behavior/).
- After each reply, Bali suggests next steps as buttons under the chat. Click one to send it.
- At the top of the panel, **Reset Thread** clears the conversation and starts fresh, and **Report** sends a bug report to the Jabali team.

## Approving Bali's actions

For actions that reach outside your project files, Bali asks first. An approval card appears in the chat:

- **Shell Approval Required** when Bali wants to run a command. See [Shell tool](/docs/studio/shell/#approve-commands).
- **MCP Tool Approval Required** when Bali wants to use a tool from an MCP server. See [MCP servers](/docs/studio/mcp-servers/#approve-tool-calls).

Asset generation works the same way: Bali prepares a request card, and nothing is generated until you click **Generate**.

**Watch:** [Review and accept code changes](https://youtu.be/QUF5JYjUqy4?t=588) (0:21, from the tutorial *Build a Custom Phaser Game from Scratch with AI*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/QUF5JYjUqy4?start=588&amp;end=609" title="Video: Review and accept code changes" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Example prompts

| Goal                  | What to ask                                                          |
| --------------------- | -------------------------------------------------------------------- |
| Understand game state | "What are the main story branches in this game?"                     |
| Modify content        | "Change the scene where the player meets the ghost to make it funnier." |
| Improve dialogue      | "Rewrite this dialogue to sound more sarcastic."                     |
| Describe assets       | "What visual assets are used in Level 3?"                            |
| Regenerate a scene    | "Regenerate the dream sequence scene in a noir style."               |
| Debug                 | "Why does Scene 2 not link to the ending?"                           |
| Code help             | "What does this modifier script do in the combat scene?"             |

**Watch:** [A vague request next to a design-based prompt](https://youtu.be/AbQ3S1MjLQU?t=2180) (2:14, from the masterclass *Designing Game Systems That Feel Good*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/AbQ3S1MjLQU?start=2180&amp;end=2314" title="Video: A vague request next to a design-based prompt" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Advanced tips

- Bali has full access to the project you have open. It understands your code's structure, including functions, classes and Godot scenes, so you can refer to them by name.
- Use specific scene or character names to target your edits.
- Ask Bali to compare or summarize content, for example *"Summarize all endings."*
- You can preview Bali's changes before committing them.

**Watch:** [Give Bali acceptance criteria so it can check its own work](https://youtu.be/AbQ3S1MjLQU?t=3014) (1:29, from the masterclass *Designing Game Systems That Feel Good*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/AbQ3S1MjLQU?start=3014&amp;end=3103" title="Video: Give Bali acceptance criteria so it can check its own work" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Limitations

- Bali works best on one project at a time.
- Bali can't access unpublished Jabali Web-only drafts. Load them in Studio first.
- Regenerating assets can take longer than text edits.
- Some AI models can't see images. Studio warns you if the selected model can't read an image you've attached.
- In very long conversations, Bali may run out of room for context. If that happens, click **Reset thread** and summarize where you are.

## Use cases

- Polish your narrative with fewer clicks
- Rapidly iterate on character backstories
- Use AI as your writing collaborator, code reviewer or test assistant
- Make bulk edits to scenes and branches in plain language

Let Bali handle the heavy lifting while you focus on creativity. Fire it up, ask away and watch your game evolve in real time.

## Related pages

- [Bali best practices](/docs/studio/bali-best-practices/)
- [Models and behavior](/docs/studio/models-and-behavior/)
- [Sparks and usage](/docs/studio/sparks/)
- [Jabali Studio FAQ](/docs/studio/faq/)
