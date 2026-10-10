---
title: Generate and edit images with Bali
description: Create game images with Bali in Jabali Studio. Choose an image model and size, use reference images, remove backgrounds, segment objects and make depth maps.
sidebar:
  label: Images
---

Bali can generate characters, sprites, backgrounds, items, UI elements and concept art for your game, then help you turn them into game-ready pieces.

## Generate an image

1. Ask Bali for the image, for example: *"Create a cozy cottage interior background in a hand-painted style."*
2. Review the **Generate Images** card. Edit the prompt in **Describe the image you want to generate** if needed.
3. Open **Advanced Options** to change any of these:

   | Option                         | What it does                                                                   |
   | ------------------------------ | ------------------------------------------------------------------------------ |
   | **Input Images (Optional)**    | Images to edit or use as references. Click **Upload** to add one.              |
   | **Model**                      | The image model. See [Image models](#image-models).                            |
   | **Size (width x height)**      | The image dimensions. The default is 1024 × 1024. For FLUX.2 Pro, set **Width** and **Height** separately. |
   | **Seed (Optional)**            | A number that makes results repeatable. Only some models support it, and only without input images. |
   | **Remove Background**          | Gives the result a transparent background, ideal for sprites and items.        |
   | **Destination Path**           | Where the image is saved in your project.                                      |

4. Click **Generate**, review the result, then click **Done**.

**Watch:** [Generate a new character, then make it the player](https://youtu.be/3XUVb_-TxdY?t=116) (4:44, from the tutorial *Generate New Characters & Art with AI in Jabali Studio*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/3XUVb_-TxdY?start=116&amp;end=400" title="Video: Generate a new character, then make it the player" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Image models

GPT Image 2.5 Sunburst is the default. Pick a different model in **Advanced Options** when another fits the job better.

| Model                     | Good for                                                                 |
| ------------------------- | ------------------------------------------------------------------------ |
| **GPT Image 2.5 Sunburst**| Precise edits and careful refinement. The default.                       |
| **GPT Image 2.5 Flare**   | Faster, everyday image creation and trying out ideas                     |
| **MAI Image 2.6**         | Images with text, portraits and photorealistic looks                     |
| **MAI Image 2.6 Flash**   | A faster alternative to MAI Image 2.6 for iterating                      |
| **FLUX.2 Pro**            | Custom sizes and repeatable results with a seed                          |
| **Nano Banana 2 Lite**    | Fast 1024 × 1024 concepts when you want lots of variations              |
| **Nano Banana 2** and **Nano Banana Pro** | Square 1024 × 1024 images                                |

Older image models are under **Legacy Models**. You can still regenerate images you made with older models, and your original settings are kept.

### Sizes and options by model

| Model family           | Sizes                                                      | Input images | Seed |
| ---------------------- | ---------------------------------------------------------- | ------------ | ---- |
| GPT Image and MAI Image| 1024 × 1024, 1536 × 1024 (landscape), 1024 × 1536 (portrait) | Yes        | No   |
| FLUX.2 Pro             | Any size from 32 to 2048 pixels, in steps of 16            | Yes          | Yes  |
| Nano Banana            | 1024 × 1024                                                | No           | No   |

Input images can be PNG, JPG, GIF, BMP or TIFF, up to 10 MB each.

## Edit an existing image

Open the image in the **Assets** tab and click **Edit with Bali**, or ask in the chat: *"Make the knight's armor gold in assets/knight.png."* Bali uses the original as an input image.

For simple changes, Bali can also **flip**, **crop**, **trim empty space**, **resize** and **rotate** images directly, without generating a new one.

**Watch:** [Regenerate an asset with a sharper prompt](https://youtu.be/N_1w9K-XIMU?t=3483) (1:29, from the masterclass *Mastering Prompt Engineering for Game Creation*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/N_1w9K-XIMU?start=3483&amp;end=3572" title="Video: Regenerate an asset with a sharper prompt" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

### Remove a background

Turn on **Remove Background** when generating, or ask Bali to remove the background from an existing image. The result has a transparent background. Unless you choose a different destination path, the cleaned-up image replaces the original.

## Segment an image

Image segmentation isolates one element from an image, such as a character, a mountain, a building or water, so you can use or animate it on its own.

1. Ask Bali, for example: *"Segment the mountains from assets/background.png."*
2. In the **Segment Images** card, check the object in **Object to segment** (for example *person*, *red car* or *mango*). Each request isolates one object. Click **Add Request** to segment more.
3. Click **Generate**. The result is saved next to the original with `_segmented` added to the file name.

**Ideas:** isolate the mountains in a background and animate cloud shadows across them, separate a forest to add drifting leaves, or pull water out of a scene to animate it independently.

## Create a depth map

A depth map is a grayscale image where lighter areas are closer and darker areas are farther away. Use it for parallax backgrounds, fake-3D layering, lighting effects and displacement.

1. Ask Bali, for example: *"Create a depth map for assets/city.png."*
2. Check the **Source Image Path** in the **Generate Depth Maps** card. There's no prompt to write.
3. Click **Generate**. Your original image stays visible while the depth map is created, then switches to the result. It's saved with `_depth_map` added to the file name.

:::tip[Depth maps and segmentation work well together]
Depth maps give an image volume, and segmentation gives you separate pieces. Generate a background, create its depth map, segment the key elements, and you have the layers for an animated scene.
:::

## Tips for better images

- **Describe style, subject and use.** *"A pixel-art health potion icon with a red liquid and a cork, on a transparent background"* beats *"a potion"*.
- **Keep a consistent look.** Add an existing asset as an input image and ask for a matching style.
- **Pick the size for the job.** Use landscape for backgrounds, portrait for character art and square for icons.
- **Read PNG generation info.** If you bring in PNG images made with popular image tools, Studio can read the generation details embedded in the file, such as the prompt, so Bali knows how it was made.
