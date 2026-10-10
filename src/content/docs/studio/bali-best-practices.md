---
title: Bali best practices for building games
description: Get better results from Bali in Jabali Studio. Size tasks well, write useful bug reports, pick the right behavior mode, and reset when stuck.
sidebar:
  label: Bali best practices
---

Bali can help you build, edit, debug and improve your game in natural language. To get the best results, treat Bali like a game development teammate: give clear goals, describe problems carefully and work in focused steps.

## Aim for medium-sized tasks

When you ask Bali for changes, aim for **medium-sized tasks**: big enough to make a meaningful improvement, small enough that you can review, test and debug the result.

Bali may tell you the expected size of a task in its response. Use that to decide whether to continue, break the task down or make the request more specific.

**Watch:** [Start with a small version of the core loop](https://youtu.be/tvKLPOiFMBM?t=208) (0:42, from the live session *Build Your Own Voxel Game Using AI*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/tvKLPOiFMBM?start=208&amp;end=250" title="Video: Start with a small version of the core loop" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

### Why medium tasks work best

Small tasks can be too narrow:

```text
Change this button color.
```

Large tasks can be too broad:

```text
Make the whole game better and add five new systems.
```

Medium tasks are usually more effective:

```text
Improve the first level by adding two new obstacles, one collectible, and a clearer goal for the player.
```

This gives Bali room to make an impactful edit without changing so much that the result is hard to review.

### Examples of good medium-sized tasks

```text
Update the enemy behavior so enemies patrol the room, chase the player when nearby, and return to patrol when the player escapes.
```

```text
Improve the opening scene by adding stronger atmosphere, clearer player motivation, and one meaningful choice.
```

```text
Generate a first-pass visual kit for the cyberpunk city level, including background textures, signs, props, and UI icons.
```

## Be descriptive when reporting bugs

When something breaks, give Bali as much useful information as you can:

- What you expected to happen
- What actually happened
- Where and when it happened
- How to reproduce it
- Any logs or error messages
- What changed before the bug appeared

The more specific you are, the easier it is for Bali to find and fix the problem.

**Watch:** [Use logs, the browser console and precise symptoms](https://youtu.be/e8WYEWMBMKo?t=2330) (1:32, from the workshop *AI Workshop: Polishing Shortlisted Games*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/e8WYEWMBMKo?start=2330&amp;end=2422" title="Video: Use logs, the browser console and precise symptoms" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

### A good bug report

```text
Our game drops frames significantly after the player walks for about 10 seconds. It happens right when procedural terrain generation starts. The frame rate is stable before that point, then drops sharply when new terrain chunks appear.

Steps to reproduce:
1. Start the game.
2. Walk forward for about 10 seconds.
3. Wait for procedural terrain generation to trigger.
4. Watch the frame rate drop when new terrain chunks appear.

Expected result:
The game continues running smoothly.

Actual result:
The frame rate drops heavily when procedural terrain generation starts.

Logs:
[paste logs here]
```

This works because it explains the symptom, when it happens, which system may be involved, how to reproduce it, and whether logs are available.

### A weak bug report

```text
The game is very laggy sometimes.
```

This is hard to fix because Bali doesn't know when the lag happens, what the player was doing, which system may be involved, or whether the issue is visual, code-related, asset-related or performance-related.

## Choose the right agent behavior

Bali has four working behaviors: **Autonomous**, **Collaborative**, **Cautious** and **Creative**. Pick the one that matches how clear your goal is. Change it from the model chip next to **+** in the chat, or in **Project Settings → AI Settings → Behavior**. See [Models and behavior](/docs/studio/models-and-behavior/#behavior).

**Watch:** [Pick a behavior for each phase of your project](https://youtu.be/AbQ3S1MjLQU?t=1293) (1:10, from the masterclass *Designing Game Systems That Feel Good*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/AbQ3S1MjLQU?start=1293&amp;end=1363" title="Video: Pick a behavior for each phase of your project" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

### Autonomous mode

Use Autonomous mode when you already know what you want and can describe it clearly. It's useful when:

- You have a specific goal
- You can describe the expected result
- You want Bali to make progress without many follow-up questions
- You're comfortable reviewing and debugging the result

Autonomous mode works best for advanced or highly descriptive users.

### Collaborative mode

Use Collaborative mode when you're still exploring ideas or want Bali to confirm the direction before making major changes. It's useful when:

- You're unsure what direction to take
- You want options before committing
- You want to reduce debugging prompts
- You want Bali to ask clarifying questions
- You're designing a system for the first time

Collaborative mode is great when you want Bali to help shape the idea with you.

### Cautious mode

Use Cautious mode when you want to approve each step. Bali explains what it plans to do and asks for confirmation before making changes. It's useful when:

- You're working on a fragile or complex part of the game
- You want to learn how the game works as Bali changes it
- You're close to publishing and want to avoid surprises

### Creative mode

Use Creative mode when you want ideas, not just execution. On bigger tasks, Bali proactively suggests new ideas and experimental changes beyond what you asked for. It's useful when:

- You're brainstorming mechanics, story beats or visual directions
- You want variations to choose from
- The game feels flat and you want fresh angles

## Start with the most complex part first

If you're building a more complex game, start with the hardest or most important system. Generating the whole game at once can work for simpler games, but complex games are easier to build when the core mechanic feels good early.

For example, in a driving game, start with car movement, steering, acceleration, braking, drift, camera feel, and particles or tire effects. Once the car feels good, it's much easier to expand into tracks, opponents, upgrades, menus and game modes.

**Watch:** [Build the hardest mechanic first, with placeholder shapes](https://youtu.be/e8WYEWMBMKo?t=1778) (0:48, from the workshop *AI Workshop: Polishing Shortlisted Games*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/e8WYEWMBMKo?start=1778&amp;end=1826" title="Video: Build the hardest mechanic first, with placeholder shapes" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

### Core systems to build first

| Game type         | Start with                                  |
| ----------------- | ------------------------------------------- |
| Driving game      | Car movement, drift, camera, handling       |
| Platformer        | Jumping, movement, collision, camera        |
| Shooter           | Player aiming, shooting, enemy reactions    |
| Stealth game      | Detection, hiding, enemy patrols            |
| RPG               | Combat loop, inventory, character stats     |
| Interactive story | Branching structure, key choices, endings   |
| Puzzle game       | The main puzzle mechanic                    |

Build the system that defines the game first, then expand around it.

## Test before you build too much

Test the game after each major change. A good loop is:

1. Ask Bali for a focused change.
2. Preview or run the game.
3. Check that the change works.
4. Report bugs with clear reproduction steps.
5. [Save a new version](/docs/studio/version-history/) when the result is stable.
6. Continue building.

This keeps your project easier to debug and improves the quality of each step.

**Watch:** [Get a prototype working, then polish](https://youtu.be/e8WYEWMBMKo?t=2986) (0:33, from the workshop *AI Workshop: Polishing Shortlisted Games*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/e8WYEWMBMKo?start=2986&amp;end=3019" title="Video: Get a prototype working, then polish" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Reset the chat when Bali gets stuck

Sometimes Bali may get stuck in a context loop, trying to fix the same thing the same way even when the approach isn't working. Signs Bali may be stuck:

- It repeatedly changes the same file without solving the issue
- It keeps suggesting the same fix
- It misunderstands the problem after several attempts
- It creates new bugs while trying to fix the original one
- The conversation circles around the same idea

When this happens, it's fine to reset the chat and explain the problem from a new angle.

**Watch:** [When to reset the chat, and what Bali keeps](https://youtu.be/0MhxWFtoAxw?t=1199) (0:33, from the masterclass *How to Build a Game on the Jabali Studio*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/0MhxWFtoAxw?start=1199&amp;end=1232" title="Video: When to reset the chat, and what Bali keeps" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

### How to reset your approach

1. Reset the chat: click **Reset Thread** at the top of Bali's panel. This clears the conversation but doesn't change your project.
2. Summarize the current issue.
3. Include what you've already tried.
4. Explain the desired outcome.
5. Provide logs or reproduction steps.

For example:

```text
We tried fixing the enemy patrol bug by editing the enemy movement script, but the enemy still gets stuck near walls.

Current issue:
The enemy stops moving when it reaches the corner of the room.

What we already tried:
Bali updated the enemy movement script twice, but the enemy still stops at the wall.

Steps to reproduce:
1. Start Level 2.
2. Wait for the enemy to patrol left.
3. Watch it reach the lower-left wall.
4. The enemy stops and does not resume patrol.

Desired behavior:
The enemy should turn around or choose a new patrol point when it reaches a wall.
```

A fresh prompt with better context can help Bali choose a better solution.

## Ask Bali to explain before changing

If you're unsure why something is happening, ask Bali to explain the current state before you request a fix. For example:

- *"Explain how enemy movement currently works before making any changes."*
- *"What files control the player jump behavior?"*
- *"Why does the game generate terrain after the player starts walking?"*
- *"What could be causing this frame rate drop?"*

Understanding the system first can make your next prompt much more effective.

## Save after major changes

After Bali completes an important change and the game works, [save a new version](/docs/studio/version-history/). Save after:

- A first playable version
- A major system starts working
- A bug is fixed
- A new asset pass is completed
- A level layout is updated
- A script change works correctly
- A publish-ready version is ready

This gives you a safe checkpoint if future edits break something.

## Quick checklist

Before you ask Bali for a change, check:

- Is the task focused and medium-sized?
- Did I describe the goal clearly?
- Did I mention the scene, asset, script or system involved?
- If I'm reporting a bug, did I include reproduction steps?
- If there are errors, did I include logs?
- Which behavior do I need: Autonomous, Collaborative, Cautious or Creative?
- Should I save a version before making this change?

## Final tip

Bali works best when you give it clear creative direction and treat each change as a testable step. Build the hardest part first, keep tasks focused, test often, and don't be afraid to reset the chat when the current approach isn't working.
