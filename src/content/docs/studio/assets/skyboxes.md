---
title: Add skyboxes to 3D games with Bali
description: Find a skybox that matches your 3D world in Jabali Studio. Bali searches a library of ready-made skyboxes and picks the closest match to your description.
sidebar:
  label: Skyboxes
---

A skybox is the sky and distant scenery that surrounds a 3D world. Instead of generating one from scratch, Bali searches a library of ready-made skyboxes and picks the closest match for your game. You get a game-ready result faster and spend fewer [Sparks](/docs/studio/sparks/).

## Find a skybox

1. Ask Bali, for example: *"Find a stormy sunset skybox for the desert level."*
2. In the **Generate Skyboxes** card, adjust the description if needed. You can also set:

   | Option                       | What it does                                                         |
   | ---------------------------- | -------------------------------------------------------------------- |
   | **Negative Prompt (Optional)** | Things you don't want, such as *city lights* or *clouds*.          |
   | **Style Name (Optional)**    | A visual style to match.                                             |
   | **Destination Path**         | Where the skybox is saved. It must end in `.png` or `.jpg`.          |

3. Click **Generate** to preview the best match.
4. Click **Done** to save it to your project. By default it's saved as `assets/skyboxes/skybox.png`.

Not quite right? Change the description and try again. Describing the time of day, weather, colors and mood gives the best matches.

## Use the skybox in your game

Ask Bali to apply it: *"Use assets/skyboxes/skybox.png as the sky for the main scene."* Bali sets it up for your engine.

:::note
Skyboxes come from a curated library, so the result is the closest available match rather than a new image. To create something completely custom, ask Bali to [generate an image](/docs/studio/assets/images/) instead.
:::

**Watch:** [Swap in a more seamless skybox](https://youtu.be/BMA3t_YWwik?t=1006) (2:03, from the tutorial *Finishing Our 3D 'Floor Is Lava' Game in Jabali Studio*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/BMA3t_YWwik?start=1006&amp;end=1129" title="Video: Swap in a more seamless skybox" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
