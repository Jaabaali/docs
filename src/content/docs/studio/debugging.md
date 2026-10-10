---
title: Debug your game with Bali
description: How to report bugs Bali can fix in Jabali Studio, give it the logs and context it needs, and reset the chat when Bali gets stuck on a problem.
sidebar:
  label: Debug with Bali
---

Bali can usually find and fix a bug, as long as it can see the problem the way you do. Describe the bug precisely, give Bali the logs it can't reach on its own, and start fresh when a conversation goes in circles.

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

### Help Bali see what you see

Bali can't play your game, but it can read the build and preview logs. Make the most of that:

- **Ask Bali to add logging or on-screen debug info**, such as numbering spawned items or showing coordinates, then describe what you see. [Watch at 47:36](https://youtu.be/0MhxWFtoAxw?t=2856)
- **Paste logs Bali can't reach.** For a published game, open the browser's developer console and send Bali any errors you find there. [Watch at 38:54](https://youtu.be/e8WYEWMBMKo?t=2334)
- **Play after every chunk of work.** Short feedback is enough to start, such as *"I'm not sure how this works"*. Bali can work out whether a hint is missing or something is broken. [Watch at 1:11:00](https://youtu.be/Er8g4jMJa9Q?t=4260)

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

You don't have to wait until Bali is stuck. Starting a fresh thread after you finish and publish a feature also keeps Bali focused on the next one. [Watch at 15:05](https://youtu.be/tvKLPOiFMBM?t=905)

## Roll back instead of debugging

If a change broke something and you saved a version before it, restoring that version is often faster, and uses fewer Sparks, than debugging. See [Version history](/docs/studio/version-history/#restoring-an-earlier-version).

## Related pages

- [Write prompts Bali can act on](/docs/studio/prompting/)
- [Bali best practices](/docs/studio/bali-best-practices/)
- [Jabali Studio FAQ](/docs/studio/faq/)
