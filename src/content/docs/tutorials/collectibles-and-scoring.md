---
title: "Tutorial: Add collectibles and scoring"
description: Video tutorial on adding a collectible mechanic with Bali in Jabali Studio, including art, a pickup sound, scoring and debugging.
sidebar:
  label: Add collectibles and scoring
---

Add coins and diamonds that players collect for points. Bali generates the art and sound, writes the logic, and helps you debug it.

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/ZphMe5ubZ1s" title="Video: Add collectibles and scoring" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Steps

1. [00:00](https://youtu.be/ZphMe5ubZ1s?t=0) Describe the new mechanic in detail: what the player collects and what it's worth. The more specific the prompt, the better Bali's first attempt.
2. [00:35](https://youtu.be/ZphMe5ubZ1s?t=35) The asset generator opens with Bali's suggested prompt. Generate the collectible images.
3. [01:08](https://youtu.be/ZphMe5ubZ1s?t=68) Bali then asks for a sound effect to play on pickup. Pick one or generate a new one.
4. [01:53](https://youtu.be/ZphMe5ubZ1s?t=113) Preview the sound, or change its prompt and try again.
5. [02:11](https://youtu.be/ZphMe5ubZ1s?t=131) Bali writes the logic for collisions, points and the score display.
6. [03:19](https://youtu.be/ZphMe5ubZ1s?t=199) Choose how the items spawn: fixed positions, rows, or moving.
7. [03:50](https://youtu.be/ZphMe5ubZ1s?t=230) Start simple with one item in a fixed position.
8. [05:47](https://youtu.be/ZphMe5ubZ1s?t=347) Playtest. Only one coin appears, so something in the spawn logic is off.
9. [06:38](https://youtu.be/ZphMe5ubZ1s?t=398) Ask Bali to add logs and number the coins on screen, then fix the spawning.
10. [08:10](https://youtu.be/ZphMe5ubZ1s?t=490) Nudge the coins so they sit in the middle of the row.
11. [09:57](https://youtu.be/ZphMe5ubZ1s?t=597) Add a second item with a different rule: diamonds that stay on the platform they spawn on.
12. [13:00](https://youtu.be/ZphMe5ubZ1s?t=780) A second mechanic on top of the first takes more back and forth. Keep refining the prompt.
13. [14:25](https://youtu.be/ZphMe5ubZ1s?t=865) Playtest again, then publish.

## Related pages

- [Bali best practices](/docs/studio/bali-best-practices/)
- [Generate music, sound effects and speech](/docs/studio/assets/audio/)
