---
title: Generate music, sound effects and speech with Bali
description: Create music, sound effects and voice lines for your game with Bali in Jabali Studio. Set duration, make loop-friendly effects and direct voice performances.
sidebar:
  label: Audio and speech
---

Bali can create the sound of your game: background music, sound effects and spoken dialogue.

## Generate music or sound effects

1. Ask Bali, for example: *"Create upbeat chiptune music for the first level"* or *"Make a short coin pickup sound."*
2. Bali works out whether you need music or a sound effect and prepares a **Generate Audio** card.
3. Adjust the prompt and the options below, then click **Generate**.
4. Listen to the result and click **Done**. Audio is saved as a WAV file.

**Watch:** [Generate a pickup sound effect](https://youtu.be/ZphMe5ubZ1s?t=68) (1:03, from the tutorial *Building Collectibles & Scoring with Bali*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/ZphMe5ubZ1s?start=68&amp;end=131" title="Video: Generate a pickup sound effect" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

### Music options

| Option           | What it does                                                                        |
| ---------------- | ----------------------------------------------------------------------------------- |
| **Model**        | Choose from the available music models. The default is marked.                      |
| **Duration (seconds)** | 1 to 60 seconds. The default is 15.                                           |
| **Instrumental** | Music without vocals. Shown for models that support it.                             |
| **Seed (Optional)** | A number that makes results repeatable. Shown for models that support it.        |

### Sound effect options

| Option            | What it does                                                                       |
| ----------------- | ---------------------------------------------------------------------------------- |
| **Duration (seconds)** | 0.5 to 22 seconds. The default is 5.                                          |
| **Loop-friendly** | Makes an effect that repeats seamlessly, for things like engines, rain or ambience.|

### Tips for music and sound effects

- **Describe the mood, genre and instruments.** *"Tense orchestral strings with a slow drumbeat for a boss fight"* is better than *"boss music"*.
- **Describe the action and material for effects.** *"Heavy wooden door creaking open slowly"* or *"Short magical chime, bright and sparkly."*
- **Keep effects short.** Most game sound effects work best under 2 seconds. Use **Loop-friendly** for anything that plays continuously.

## Generate speech

Bali can voice your characters with text-to-speech, for dialogue, narration and announcer lines.

1. Ask Bali, for example: *"Voice Nova's opening line: 'We don't have much time. Follow me.'"*
2. In the **Generate Speech** card, check the line, then set:

   | Option          | What it does                                                                          |
   | --------------- | ------------------------------------------------------------------------------------- |
   | **Model**       | The speech model.                                                                     |
   | **Voice Name**  | The voice to use for the character.                                                   |
   | **Instruction** | Required. How the line should be performed, such as *calm and warm*, *urgent whisper* or *slow and menacing*. |

3. Click **Generate**, listen, and click **Done**.

Speech files are saved as WAV files in a folder for each character, under `assets/tts/`.

:::note
If speech generation isn't available on your account, the card tells you.
:::

### Tips for speech

- **Use the same voice for a character every time** so they sound consistent across scenes.
- **Direct the performance in Instruction**, not in the line itself. Put emotion, pace and volume there.
- **Generate dialogue in batches.** Ask Bali to voice a whole scene, and it prepares a request for each line.
