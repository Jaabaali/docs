---
title: Building Games with Jabali Studio
description: "Learn a practical Jabali Studio workflow: start with a playable idea, configure Bali, build incrementally, playtest, and protect working versions."
sidebar:
  label: Creator onboarding
---

Build a playable game quickly, then improve it one system at a time. This onboarding tutorial covers the settings, prompts, playtesting habits, and checkpoints that help you work with Bali.

## 1. Start With the Main Mechanic/Idea

You can be as broad or specific as you want with your initial idea. If you have a detailed game design, give the agent that context upfront. Otherwise, start with the core idea and work out the details as you build.

Either way, get to a simple playable version quickly.

> Build a simple playable version with player movement, shooting, one enemy type, and a basic arena. Keep it focused on these mechanics for now.

Once the core mechanic feels good, build around it.

## 2. Don’t Forget the AI Settings

Before getting deep into development, open **AI Settings** and set up how you want your agent to work.

### Project Instructions

Project Instructions are rules the agent should follow throughout the project, especially preferences you don't want to repeat in every prompt.

> Always build modularly and keep files manageable.

> Do not create UI elements unless I specifically ask for them.

If you keep correcting the same behavior, consider turning it into a Project Instruction.

### Choose the Right Agent Behavior

Studio lets you change how the agent works with you:

- **Autonomous** for clear instructions you want executed directly.

- **Collaborative** when you want to discuss the implementation or work through a system.

- **Creative** when you want the agent to explore ideas and make creative decisions.

- **Cautious** when modifying sensitive parts of an existing game.

You can switch behaviors throughout development. The same applies to model and reasoning settings. A small edit doesn't always need your most powerful model and highest reasoning setting.

## 3. Build Incrementally

Once you have your first playable version, build one system at a time.

Build → Playtest → Fix → Validate → Next Feature

Smaller, focused changes are easier to test and debug. A huge prompt can modify several systems and files at once, making it much harder to understand what went wrong.

Make sure each important mechanic works before stacking more features on top of it.

Prompts don't always need to be extremely detailed either. If the agent already has the right context, clearly describe what you want and iterate from what it builds.

## 4. Show the Agent What You Mean

You don't have to communicate everything through text. Studio can use screenshots, wireframes, reference art, assets, and other files as context.

If something doesn't look right, take a screenshot from the preview and send it to the agent with your instructions.

> The inventory is taking too much space on the screen. Make it closer to the layout in this reference while keeping our existing visual style.

This is especially useful for UI, visual bugs, level layouts, art direction, positioning, and visual references.

You can also drag your own assets and files into Studio and ask the agent to work with them.

## 5. Protect Good Builds

When your game reaches a state you're happy with, publish it.

Publishing regularly gives you clear working versions you can return to. A good habit is to create checkpoints after important systems are working. Happy with the way your level looks? Publish it, reset the thread, and move on to something else.

This gives you room to experiment without being afraid of breaking something that already works.

If an edit goes badly, sometimes the fastest solution is:

Restore the working version → Adjust your prompt → Try again.

## 6. Keep the Agent on Track

Pay attention to how the agent interprets your requests. If it misunderstood something, correct it before building on top of the mistake.

For example, while building an arena shooter we asked the agent for an "RPG." It interpreted RPG as a role-playing game instead of a rocket-propelled grenade. A quick clarification got it back on track.

This is especially important in Autonomous mode, where the agent has more freedom to execute without checking every decision with you.

### Reset Threads Regularly

Long conversations can slow the agent down and decrease the quality of its outputs.

Studio maintains project documentation such as the GDD and README alongside your project files, which the agent can use to recover context. Don't be afraid to reset the conversation and start fresh.

We usually do this after publishing a new version, a natural checkpoint where the next set of changes is often different enough to benefit from a fresh conversation.

## 7. Use Studio as Part of Your Development Workflow

The agent can also build tools that make development faster.

For one of our projects, we wanted precise control over a 3D level. Instead of repeatedly prompting the agent to move objects, we had it build a simple runtime level editor. We positioned everything ourselves, exported the layout, and gave it back to the agent to implement permanently.

The same approach works for level editors, debug panels, spawn controls, tuning menus, asset viewers, or procedural generation controls.

If something is easier to adjust visually or manually than through repeated prompts, have the agent build you the right tool for the job.

## 8. Bring in the Tools You Already Use

Studio doesn't have to be your only tool. You can bring in assets created elsewhere, edit project files manually, and use external tools as part of your workflow.

Studio also supports Skills and MCP servers, which can give your agent additional instructions, workflows, and tools.

If you already use other tools for images, models, audio, shaders, design documents, or other assets, keep using them and bring the results into Studio.

## A Simple Workflow to Follow

Idea → First Playable → Playtest → Iterate → Checkpoint → Expand → Playtest → Iterate → Checkpoint → Expand…

Get something playable quickly. Test as you build, give the agent the context it needs, keep changes focused, and save good versions as you go.

## Onboarding video

Watch [Jabali AI - Creator Onboarding](https://www.youtube.com/watch?v=PH19CWsff04).

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/PH19CWsff04" title="Video: Jabali AI - Creator Onboarding" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Related guides

- [Create your first game](/docs/studio/create-a-game/)
- [AI settings and project instructions](/docs/studio/settings/#ai-settings)
- [Choose models, reasoning, and behavior](/docs/studio/models-and-behavior/)
- [Attach files and references](/docs/studio/attachments/)
- [Version history and rollbacks](/docs/studio/version-history/)
- [Reset the chat](/docs/studio/debugging/#how-to-reset-your-approach)
- [Agent Skills](/docs/studio/skills/) and [MCP servers](/docs/studio/mcp-servers/)
