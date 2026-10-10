---
title: Write prompts Bali can act on
description: How to plan, size and word requests to Bali in Jabali Studio, from agreeing the design first to medium-sized tasks and rules Bali always follows.
sidebar:
  label: Write prompts
---

Bali can build almost anything you describe, so most of the skill is in the describing. Agree on the design before Bali builds, make each request specific and testable, and size tasks so you can review the result.

## Plan the design with Bali before it builds

The more of your design Bali knows up front, the less it has to guess. Before any code is written:

- **Ask Bali to talk it through first.** End your first prompt by asking Bali to discuss the design with you before it builds anything. It will ask about the core loop, rules, progression and how the game should feel. Watch at [03:44](https://youtu.be/AbQ3S1MjLQU?t=224) or [09:22](https://youtu.be/aZgecdsUDMY?t=562)
- **Write the design for someone who has never played.** For rules-heavy or niche games, spell out scoring, turns and special cases in your design document. Bali can't rely on knowing a game it hasn't seen. [Watch at 12:00](https://youtu.be/N_1w9K-XIMU?t=720)
- **Mention where the game is going.** If you plan to add more levels, modes or games later, say so at the start so Bali structures the project to grow. [Watch at 12:20](https://youtu.be/N_1w9K-XIMU?t=740)
- **Taking over an existing project?** Ask Bali to write a design document from the current code first, so you both start from the same picture. [Watch at 27:43](https://youtu.be/0MhxWFtoAxw?t=1663)

[Design and polish your game](/docs/studio/design-and-polish/) covers what to settle in that design, such as the core loop and rewards.

## Make every prompt specific

- **Give acceptance criteria.** Say what "done" looks like, for example *"WASD moves the player, walls block movement, and the player flashes when hit"*, so Bali can check its own work. [Watch at 50:15](https://youtu.be/AbQ3S1MjLQU?t=3015)
- **Use game-design terms.** Words like *progression*, *feedback*, *parallax* or *tile map* carry a lot of meaning, and Bali knows them. If you don't know the term, describe the effect and compare it to a game you know. Watch at [40:31](https://youtu.be/AbQ3S1MjLQU?t=2431) or [1:09:13](https://youtu.be/0MhxWFtoAxw?t=4153)
- **Watch for words with two meanings.** In one session, *RPG* meant a rocket launcher but was read as *role-playing game*. Read Bali's plan and correct misunderstandings early. [Watch at 05:40](https://youtu.be/tvKLPOiFMBM?t=340)
- **Set your style once.** Describe the art and audio style early. After that, asset requests can be as short as *"add a background for level 2"*. Watch at [58:14](https://youtu.be/Er8g4jMJa9Q?t=3494) or [24:45](https://youtu.be/0MhxWFtoAxw?t=1485)
- **Ask for modular, reusable pieces.** For example: *"Move the top panel into its own scene and script so I can reuse it, and show whatever values I pass it."* Then one change doesn't ripple through the whole game. [Watch at 40:00](https://youtu.be/N_1w9K-XIMU?t=2400)

**Watch:** [Give Bali acceptance criteria so it can check its own work](https://youtu.be/AbQ3S1MjLQU?t=3014) (1:29, from the masterclass *Designing Game Systems That Feel Good*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/AbQ3S1MjLQU?start=3014&amp;end=3103" title="Video: Give Bali acceptance criteria so it can check its own work" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Point Bali at the right thing

- Bali has full access to the project you have open. It understands your code's structure, including functions, classes and Godot scenes, so you can refer to them by name.
- Use specific scene or character names to target your edits.
- Ask Bali to compare or summarize content, for example *"Summarize all endings."*
- You can preview Bali's changes before committing them.

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

## Ask Bali to explain before changing

If you're unsure why something is happening, ask Bali to explain the current state before you request a fix. For example:

- *"Explain how enemy movement currently works before making any changes."*
- *"What files control the player jump behavior?"*
- *"Why does the game generate terrain after the player starts walking?"*
- *"What could be causing this frame rate drop?"*

Understanding the system first can make your next prompt much more effective.

## Put lasting rules in Instructions

If you find yourself repeating a preference, add it to **Instructions** in **Project Settings → AI Settings** (see [Settings](/docs/studio/settings/#ai-settings)). Instructions apply to every request in the project. For example:

```text
Keep scripts modular and under about 500 lines each.
Make a short plan before large changes.
Ask before generating new assets.
```

Shorter files are quicker for Bali to read and change. Watch at [01:52](https://youtu.be/tvKLPOiFMBM?t=112) or [05:34](https://youtu.be/aZgecdsUDMY?t=334)

## Related pages

- [Debug with Bali](/docs/studio/debugging/)
- [Bali best practices](/docs/studio/bali-best-practices/)
- [Design and polish your game](/docs/studio/design-and-polish/)
