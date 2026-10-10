---
title: Troubleshoot Jabali Studio
description: Fixes for common Jabali Studio problems, including sign-in failures, missing games, stuck playtests, crashes, slowdowns, Bali loops and usage limits.
sidebar:
  label: Troubleshooting
---

Find your problem below. If nothing here helps, [report the bug](#report-a-bug) or ask on the [Jabali Discord](https://discord.gg/jabali).

## Quick fixes

Try these first:

- Restart Studio if anything seems stuck.
- Check your internet connection if syncing fails.
- Make sure you're on the latest version. See [Update Jabali Studio](/docs/studio/install/#update-jabali-studio).
- Publish frequently, and [save versions](/docs/studio/version-history/) before big changes, so you can always go back.

## Sign-in fails or freezes

- If you sign in with Discord, make sure you're logged in to the right Discord account in your default browser. If sign-in still fails, log out of Discord in your browser, log back in, then try again.
- If the authentication page doesn't load, restart the app or your browser.
- Some VPNs and browser privacy settings block the login window. Try disabling them temporarily.

## A game is missing from your library

Go back to the home screen to reload your library, and make sure you're signed in with the same account you used to create the game. Your library only lists games you can open and edit in Studio.

## The playtest is stuck or won't load

Click **Rebuild the project** in the toolbar, and make sure your scripts and scenes don't have errors. Check the logs below the preview and click **Ask Bali** to have Bali look at an error. For Godot projects, if the build failed, click **Diagnose with Bali**. See [Playtest your game](/docs/studio/playtest/).

## The game crashed while Bali was working

It's probably not broken. If you test while Bali is still editing files, you may be running a half-finished change. Wait until Bali finishes, then rebuild and test again. If it still crashes, ask Bali to look at the logs. [Watch at 12:43](https://youtu.be/tvKLPOiFMBM?t=763)

## Studio crashes or lags

- Close unused tabs or scenes.
- Restart the app.
- Make sure your computer meets the [system requirements](/docs/studio/install/#system-requirements).
- If you use many large assets, try reducing their file sizes.
- If a very long Bali conversation feels slow, click **Reset Thread** to start a fresh one.
- Make sure you're on the latest version. See [Update Jabali Studio](/docs/studio/install/#update-jabali-studio).

## Bali keeps trying the same fix

Bali can get stuck in a loop, changing the same file or suggesting the same fix without solving the problem. Reset the chat and explain the problem from a new angle, with what you've already tried. See [Reset the chat when Bali gets stuck](/docs/studio/debugging/#reset-the-chat-when-bali-gets-stuck).

## Bali says the conversation is too long

Click **Reset thread**, then briefly summarize what you're working on. Resetting clears the chat history but doesn't change your project.

## Bali can't see an image you attached

Some AI models can't read images. Studio shows a warning on the image when the selected model doesn't support it. Switch to a model that supports images and send it again. See [Models and behavior](/docs/studio/models-and-behavior/#choosing-a-model).

## You ran out of Sparks

Bali pauses and shows that you've reached your usage limit. Wait for your usage to refresh, or upgrade your plan in **Settings → Billing**. When Sparks are available again, click **Continue**. See [Sparks and usage](/docs/studio/sparks/).

## Report a bug

Click **Report** (the bug icon at the top of Bali's panel) to send a bug report. Include what you expected, what happened and how to reproduce it. See [how to write a good bug report](/docs/studio/debugging/#be-descriptive-when-reporting-bugs).

## Related pages

- [Jabali Studio FAQ](/docs/studio/faq/)
- [Get help](/docs/support/)
