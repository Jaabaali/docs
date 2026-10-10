---
title: Bali best practices for building games
description: The habits that get the best results from Bali in Jabali Studio, in one checklist, with links to the full guides on prompting, debugging and behavior.
sidebar:
  label: Best practices checklist
---

Bali can help you build, edit, debug and improve your game in natural language. To get the best results, treat Bali like a game development teammate: give clear goals, describe problems carefully and work in focused steps.

This page is the short version. The full guides are [Write prompts Bali can act on](/docs/studio/prompting/) and [Debug with Bali](/docs/studio/debugging/).

## The habits that matter most

- **Agree on the design before Bali builds.** End your first prompt by asking Bali to talk it through. See [Plan the design with Bali](/docs/studio/prompting/#plan-the-design-with-bali-before-it-builds).
- **Make every prompt specific.** Say what "done" looks like and name the scene, asset or script involved. See [Make every prompt specific](/docs/studio/prompting/#make-every-prompt-specific).
- **Aim for medium-sized tasks.** Big enough to matter, small enough to review. See [Aim for medium-sized tasks](/docs/studio/prompting/#aim-for-medium-sized-tasks).
- **Build the hardest part first.** Get the core mechanic feeling right before you expand. See [Start with the most complex part first](/docs/studio/prompting/#start-with-the-most-complex-part-first).
- **Report bugs with steps and logs.** See [Be descriptive when reporting bugs](/docs/studio/debugging/#be-descriptive-when-reporting-bugs).
- **Reset the chat when Bali goes in circles.** See [Reset the chat when Bali gets stuck](/docs/studio/debugging/#reset-the-chat-when-bali-gets-stuck).

## Choose the right agent behavior

Bali has four behaviors: **Autonomous**, **Collaborative**, **Cautious** and **Creative**. Many creators explore with Creative or Autonomous, then switch to Cautious once the game works. [Models and behavior](/docs/studio/models-and-behavior/#when-to-use-each-behavior) explains when to use each one.

## Test before you build too much

Test the game after each major change. A good loop is:

1. Ask Bali for a focused change.
2. Preview or run the game.
3. Check that the change works.
4. Report bugs with clear reproduction steps.
5. [Save a new version](/docs/studio/version-history/) when the result is stable.
6. Continue building.

This keeps your project easier to debug and improves the quality of each step.

**Watch:** [Get a prototype working, then polish](https://youtu.be/e8WYEWMBMKo?t=2986) (0:33, from the workshop *AI Workshop: Polishing Shortlisted Games*)

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/e8WYEWMBMKo?start=2986&amp;end=3019" title="Video: Get a prototype working, then polish" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Save after major changes

After Bali completes an important change and the game works, [save a new version](/docs/studio/version-history/). Save after:

- A first playable version
- A major system starts working
- A bug is fixed
- A new asset pass is completed
- A level layout is updated
- A script change works correctly
- A publish-ready version is ready

This gives you a safe checkpoint if future edits break something.

Publishing works as a restore point too. Publish whenever a feature works, and if a later change breaks the game, restoring an earlier version is often faster, and uses fewer Sparks, than debugging. Watch at [56:27](https://youtu.be/0MhxWFtoAxw?t=3387), [09:16](https://youtu.be/tvKLPOiFMBM?t=556) or [39:16](https://youtu.be/e8WYEWMBMKo?t=2356)

## Quick checklist

Before you ask Bali for a change, check:

- Is the task focused and medium-sized?
- Did I describe the goal clearly?
- Did I mention the scene, asset, script or system involved?
- If I'm reporting a bug, did I include reproduction steps?
- If there are errors, did I include logs?
- Which behavior do I need: Autonomous, Collaborative, Cautious or Creative?
- Should I save a version before making this change?

## Final tip

Bali works best when you give it clear creative direction and treat each change as a testable step. Build the hardest part first, keep tasks focused, test often, and don't be afraid to reset the chat when the current approach isn't working.

## Where the full sections moved

This page used to hold the full guidance. Each section now lives in a focused guide:

| Section | Now on |
| --- | --- |
| <span id="plan-the-design-with-bali-before-it-builds"></span>Plan the design with Bali before it builds | [Write prompts](/docs/studio/prompting/#plan-the-design-with-bali-before-it-builds) |
| <span id="write-prompts-bali-can-act-on"></span>Write prompts Bali can act on | [Write prompts: Make every prompt specific](/docs/studio/prompting/#make-every-prompt-specific) |
| <span id="aim-for-medium-sized-tasks"></span><span id="why-medium-tasks-work-best"></span><span id="examples-of-good-medium-sized-tasks"></span>Aim for medium-sized tasks | [Write prompts](/docs/studio/prompting/#aim-for-medium-sized-tasks) |
| <span id="start-with-the-most-complex-part-first"></span><span id="core-systems-to-build-first"></span>Start with the most complex part first | [Write prompts](/docs/studio/prompting/#start-with-the-most-complex-part-first) |
| <span id="ask-bali-to-explain-before-changing"></span>Ask Bali to explain before changing | [Write prompts](/docs/studio/prompting/#ask-bali-to-explain-before-changing) |
| <span id="put-lasting-rules-in-instructions"></span>Put lasting rules in Instructions | [Write prompts](/docs/studio/prompting/#put-lasting-rules-in-instructions) |
| <span id="be-descriptive-when-reporting-bugs"></span><span id="a-good-bug-report"></span><span id="a-weak-bug-report"></span><span id="help-bali-see-what-you-see"></span>Be descriptive when reporting bugs | [Debug with Bali](/docs/studio/debugging/#be-descriptive-when-reporting-bugs) |
| <span id="reset-the-chat-when-bali-gets-stuck"></span><span id="how-to-reset-your-approach"></span>Reset the chat when Bali gets stuck | [Debug with Bali](/docs/studio/debugging/#reset-the-chat-when-bali-gets-stuck) |
| <span id="autonomous-mode"></span><span id="collaborative-mode"></span><span id="cautious-mode"></span><span id="creative-mode"></span>Autonomous, Collaborative, Cautious and Creative modes | [Models and behavior](/docs/studio/models-and-behavior/#when-to-use-each-behavior) |
| <span id="switch-as-your-project-matures"></span>Switch as your project matures | [Models and behavior](/docs/studio/models-and-behavior/#switch-as-your-project-matures) |
