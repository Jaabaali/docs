---
title: "Tutorial: Build a web game from scratch"
description: Two-part video tutorial on building a custom Phaser web game in Jabali Studio without a template, from first prototype to fifty elements.
sidebar:
  label: Build a web game from scratch
---

Build an alchemy game, where players combine elements to discover new ones, starting from an idea instead of a template. Part 1 builds the prototype. Part 2 scales up the content and adds polish.

## Part 1: From idea to prototype

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/QUF5JYjUqy4" title="Video: Build a web game from scratch, part 1" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

1. [00:00](https://youtu.be/QUF5JYjUqy4?t=0) Start from an idea, not a template.
2. [00:55](https://youtu.be/QUF5JYjUqy4?t=55) Ask Bali to suggest titles, then pick one.
3. [01:57](https://youtu.be/QUF5JYjUqy4?t=117) Choose the Phaser 2D project option.
4. [02:17](https://youtu.be/QUF5JYjUqy4?t=137) Studio writes starter code and a basic UI made of simple shapes, just enough to be playable.
5. [03:10](https://youtu.be/QUF5JYjUqy4?t=190) How it works: you describe a task, Studio turns it into a plan, and hands each part to the Bali agent best suited to it.
6. [03:42](https://youtu.be/QUF5JYjUqy4?t=222) Ask for a minimal playable prototype UI.
7. [04:50](https://youtu.be/QUF5JYjUqy4?t=290) If the result isn't what you pictured, redirect it. Here it becomes three vertical panels.
8. [09:48](https://youtu.be/QUF5JYjUqy4?t=588) Review and accept Bali's code changes when asked. You can inspect and edit them in the **Scripts** tab.
9. [10:09](https://youtu.be/QUF5JYjUqy4?t=609) Keep iterating on spacing, labels and interactions.
10. [12:48](https://youtu.be/QUF5JYjUqy4?t=768) Playtest, then change what doesn't feel right: drag becomes tap, and the left panel gets a scrolling list.
11. [22:41](https://youtu.be/QUF5JYjUqy4?t=1361) Ask Bali to move the game data (elements, recipes and scores) into a JSON file the game loads at start, so content can grow without touching game logic.
12. [27:53](https://youtu.be/QUF5JYjUqy4?t=1673) Check the new `elements.json` in the **Scripts** tab.

## Part 2: Balance, lore and progression

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/h3zrciNlF-Y" title="Video: Build a web game from scratch, part 2" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

1. [00:00](https://youtu.be/h3zrciNlF-Y?t=0) Review the element list and scores.
2. [01:09](https://youtu.be/h3zrciNlF-Y?t=69) Fix readability: low-contrast text and misaligned icons.
3. [06:03](https://youtu.be/h3zrciNlF-Y?t=363) Grow the content from 15 elements to more than 50 by asking Bali to extend the JSON file.
4. [07:44](https://youtu.be/h3zrciNlF-Y?t=464) Review the expanded `elements.json`.
5. [08:38](https://youtu.be/h3zrciNlF-Y?t=518) Add flavor: a narrator line of lore for every new discovery.
6. [11:49](https://youtu.be/h3zrciNlF-Y?t=709) Make scoring fair for elements that have more than one recipe.
7. [14:16](https://youtu.be/h3zrciNlF-Y?t=856) Test, then publish.

:::note[Current app]
Under the prompt box, choose **Engine** → **Web** with the Phaser starter. See [Game engines and web projects](/docs/studio/engines/).
:::
