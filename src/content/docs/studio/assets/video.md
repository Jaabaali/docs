---
title: Generate video for your game with Bali
description: Create cutscenes, intros and cinematic moments with Bali in Jabali Studio. Set duration, resolution and aspect ratio, and guide video with reference images.
sidebar:
  label: Video
---

Bali can generate video for your game: story cutscenes, animated intros, character moments, environment flyovers, transitions and narrative reveals. Video generation starts with Google's Veo models, with more to come.

## Generate a video

1. Ask Bali, for example: *"Create an 8-second intro of the hero walking into the misty forest at dawn."*
2. Review the prompt in the **Generate Video** card.
3. Open **Advanced Options** to adjust the settings below.
4. Click **Generate**. Video takes longer to generate than images.
5. Review the result and click **Done**. Videos are saved as MP4 files.

## Settings

| Setting            | Options                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------- |
| **Model**          | A fast model (the default) or the standard model.                                       |
| **Duration**       | 4, 6 or 8 seconds. The default is 8.                                                    |
| **Resolution**     | 720p, 1080p or 4K.                                                                      |
| **Aspect Ratio**   | 16:9 (landscape) or 9:16 (portrait, for mobile games).                                  |
| **Width / Height** | Optional exact dimensions from 256 to 4096 pixels. Set both or neither.                 |

## Guide the video with images

You can steer the result with images that are already in your project. Enter their paths in **Advanced Options**, or just mention them to Bali: *"Use assets/hero.png as the first frame."*

| Field                                   | Use it to                                                              |
| --------------------------------------- | ---------------------------------------------------------------------- |
| **Image Path (optional)**               | Set the first frame, so the video starts exactly where you want.       |
| **Last Frame Path (optional)**          | Set the last frame. Needs a first frame too.                           |
| **Asset Reference Images (optional)**   | Show characters, objects or places that should appear in the video.    |
| **Style Reference Images (optional)**   | Match your game's art style.                                           |
| **Video Extension Input Path (optional)** | Continue an existing video to make a longer sequence.                |

To use an image that isn't in your project yet, [upload it to the Assets tab](/docs/studio/assets/#upload-your-own-assets) or [generate it](/docs/studio/assets/images/) first.

### Rules to know

- You can use up to **3 reference images** in total, across asset and style references.
- Videos that use reference images, extend another video, or render at 1080p or 4K are always **8 seconds** long.
- **Extending a video** can't be combined with other images or references, and the extension is rendered at 720p.

## Ideas

- **Cutscenes between levels.** Set the last frame of level 1 as the first frame of the cutscene for a seamless transition.
- **Animated title screens.** Use your key art as the first frame and describe subtle motion, like drifting fog or flickering torches.
- **Story reveals.** Add your main character as an asset reference so they look the same in every clip.
- **Longer sequences.** Generate an 8-second clip, then extend it to continue the action.

:::tip
Video uses more [Sparks](/docs/studio/sparks/) than other assets. Get the look right with a still image first, then use it as the first frame.
:::
