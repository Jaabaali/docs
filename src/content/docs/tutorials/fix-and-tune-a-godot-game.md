---
title: "Tutorial: Fix and tune a Godot game"
description: Two-part video tutorial on fixing and rebalancing a Godot tower defense game in Jabali Studio with the Assets, Layouts and Scripts tabs.
sidebar:
  label: Fix and tune a Godot game
---

Fix a bug, regenerate a sprite and rebalance a tower defense game, working alongside Bali and editing by hand where it's quicker.

## Part 1: Fix dragging and regenerate an asset

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/MJI6NWLSwf4" title="Video: Fix and tune a Godot game, part 1" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

1. [00:08](https://youtu.be/MJI6NWLSwf4?t=8) Playtest and spot a bug: towers can only be dragged by their label.
2. [00:55](https://youtu.be/MJI6NWLSwf4?t=55) In the **Assets** tab, note a sprite that's too small to see.
3. [01:13](https://youtu.be/MJI6NWLSwf4?t=73) In the **Layouts** tab, look at the scenes to see what they contain. Ask Bali to summarize a scene if you need to.
4. [02:01](https://youtu.be/MJI6NWLSwf4?t=121) In the **Scripts** tab, search for the script that handles dragging.
5. [02:44](https://youtu.be/MJI6NWLSwf4?t=164) Fix it: set the panel's child nodes to ignore the mouse.
6. [03:44](https://youtu.be/MJI6NWLSwf4?t=224) Go back to **Preview** and click **Rebuild** to test.
7. [04:14](https://youtu.be/MJI6NWLSwf4?t=254) Regenerate the small sprite, adding its size to the prompt.
8. [07:03](https://youtu.be/MJI6NWLSwf4?t=423) Check the result in **Preview**.
9. [07:13](https://youtu.be/MJI6NWLSwf4?t=433) Only edit scene files directly for something simple, like label text. Otherwise, ask Bali.

## Part 2: Rebalance a tower

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/VUhvTpTSTcc" title="Video: Fix and tune a Godot game, part 2" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

1. [00:00](https://youtu.be/VUhvTpTSTcc?t=0) Check that a hidden mechanic works: ask Bali to make towers flash red on a critical hit.
2. [02:41](https://youtu.be/VUhvTpTSTcc?t=161) Playtest to see the flash.
3. [03:02](https://youtu.be/VUhvTpTSTcc?t=182) Rebalance by editing the value in the **Scripts** tab: a 15% critical chance becomes every third hit.
4. [03:43](https://youtu.be/VUhvTpTSTcc?t=223) Save, click **Rebuild** and test.

## Related pages

- [Studio interface](/docs/studio/interface/)
- [Bali best practices](/docs/studio/bali-best-practices/)
