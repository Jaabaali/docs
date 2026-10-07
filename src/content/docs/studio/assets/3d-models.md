---
title: Generate, rig and animate 3D models with Bali
description: Create 3D props and characters with Bali in Jabali Studio, from a prompt or a reference image, then rig characters and add animations like walking and running.
sidebar:
  label: 3D models and characters
---

Bali can create 3D models for your game, from props and buildings to full characters. Characters can then be rigged and animated, taking them from an idea to a moving, game-ready asset without leaving Studio.

## Generate a 3D model

1. Ask Bali, for example: *"Create a low-poly treasure chest with gold trim."*
2. In the **Generate 3D Models** card, choose a **Generation Mode**:
   - **Prompt**: describe the model in words.
   - **Reference Image**: upload a PNG or JPG (up to 10 MB) of the object or character, such as concept art.
3. Open **Advanced Options** to adjust the [settings](#settings).
4. Click **Generate**. In **Prompt** mode, you first get an untextured preview so you can check the shape.
5. Happy with the shape? Click **Generate Texture** to add color and materials. You can guide this with a **Texture Prompt** or a **Texture Reference Image**.
6. Click **Done**. The model is saved in its own folder under `assets/models/`.

### Settings

| Setting                     | Options                                                                                         |
| --------------------------- | ----------------------------------------------------------------------------------------------- |
| **Art Style**               | **Realistic** or **Sculpture**                                                                  |
| **Mesh Type**               | **Standard**, **Smart Topology** or **Lowpoly**                                                 |
| **Target Polycount**        | How detailed the mesh is. Standard mesh only.                                                   |
| **Should Remesh**           | Rebuilds the mesh with cleaner geometry. Standard mesh only.                                    |
| **Pose Mode (Characters)**  | None, **A-pose** or **T-pose**. Use a pose for characters you plan to rig.                      |
| **Model Format**            | **GLB** (the default), FBX, OBJ, STL, USDZ or 3MF                                               |

:::tip[Which format should I use?]
Stick with **GLB** unless you need something else. It works in both Godot and web projects, and it's the format used for rigging and animation.
:::

## Create an animated character

Bringing a character to life takes three steps: generate it in a rig-friendly pose, rig it, then add animations.

### 1. Generate the character in a pose

When you ask for a character, set **Pose Mode (Characters)** to:

- **A-pose**: arms angled down at the sides. Often gives cleaner, more reliable rigs.
- **T-pose**: arms straight out. The classic rigging pose.

For characters, Bali picks settings that suit rigging and animation.

### 2. Rig the character

Rigging adds a skeleton so the model can move.

1. Ask Bali, for example: *"Rig the knight character."*
2. In the **Rig 3D Models** card, check the **Model Path**. Optionally set **Character Height (meters, Optional)**. The default is 1.7 m.
3. Turn on **Generate Basic Animations** to also get walking and running animations.
4. Click **Generate**, then **Done**. The rigged model is saved as a GLB file.

Rigging works best on textured, humanoid models in GLB format, such as characters you generated in Studio.

### 3. Add animations

1. Ask Bali for an animation, for example: *"Make the knight wave"* or *"Give the knight a sword slash."*
2. The **Animate 3D Model** card shows **Suggested Actions** that fit your request, each with a name, a category and a preview.
3. Pick one. To look further, open **Advanced: Browse More Actions** and browse by **Category**, **Subcategory** and **Animation**.
4. Click **Generate**, then **Done**. Each animation is saved as a new GLB file named after the model and the action, such as `knight_wave.glb`.

Animations need a character that was rigged in Studio.

## View and inspect 3D models

Open a model in the **Assets** tab to preview it. Studio can display GLB, glTF, OBJ, FBX and STL files.

Bali can also inspect models in those formats to understand their structure, such as meshes, materials and animations. Ask things like *"How many animations does knight.glb have?"* or *"Why does the chest look black in the game?"*

## Tips

- **Start simple.** Generate the shape, check it from every angle, then texture it.
- **Use reference images for characters.** A front-facing concept image gives much more control than a text prompt.
- **Match the style of your game.** Use **Lowpoly** for stylized or mobile games and **Realistic** for detailed scenes.
- **Plan for animation early.** If a character will move, generate it in an A-pose or T-pose from the start.
