---
title: Add Jabali Ads to Your Game
description: Choose ad placements with Bali, implement Jabali ads, and verify rewards, cooldowns, and gameplay recovery in Preview and after publishing.
sidebar:
  label: Monetization
---

**Before you start:** Jabali must whitelist your creator account. Jabali handles this.

## 1. Choose Your Ad Placement

An ad placement is a specific moment when your game requests an ad. Start with the player experience, not a target number of ads.

### Good Placement Practices

- **Use natural breaks.** Reward shops, results screens, and between-round transitions are good candidates. Avoid interrupting movement, aiming, boss fights, tutorials, or timed challenges.
- **Make rewarded ads optional.** Clearly explain what players receive before watching. Normal gameplay must remain available without ads.
- **Avoid early interruptions.** As a starting recommendation, wait at least 5 minutes before showing the first automatic interstitial.
- **Limit interstitial frequency.** Use a minimum 3-minute interval between automatic ads as an initial guideline. Longer intervals may be appropriate.
- **Offer meaningful rewards.** Avoid rewards that are useless in the current situation or undermine normal progression.
- **Be transparent.** Clearly label ads and their rewards. Do not disguise ads as Continue buttons or promise a duration you cannot control.
- **Handle unavailable ads.** Players must never lose progress or become stuck because an ad fails, is dismissed, or is unavailable.
- **Pause gameplay during ads.** Freeze simulation, timers, enemies, and input. Mute game audio and restore the previous state afterward.

These timing recommendations are starting points, not universal requirements. Ask Bali to assess your game's actual gameplay loop.

### Prompt: Ask Bali for Placement Recommendations

> Inspect my current game and design documents. Do not change anything yet. Recommend up to three ad placements suited to its actual gameplay loop.
>
> For each, explain the exact trigger, rewarded or interstitial format, player benefit if any, interruption risk, frequency rule, and what happens when no ad is available.
>
> Flag effects on difficulty and progression. Rank the options, recommend the smallest sensible first integration, and explain where you would NOT place ads.
>
> Tell me if no placement is a good fit. Ask me to choose before implementing.

### Prompt: Challenge a Placement Idea

> I'm considering [describe the ad placement and reward]. Inspect how this would fit my game.
>
> Critique it honestly: could it interrupt play, feel compulsory, mislead players, or undermine progression?
>
> Identify any missing limits or failure behavior. Recommend keeping it, changing it, or rejecting it, and explain why.
>
> Do not edit the game until I approve.

## 2. Ask Bali to Implement the SDK

Tell Bali which placement you selected and ask it to connect that placement, not merely install a package.

### Prompt: Implement the Chosen Placement

> Implement the Jabali ads SDK for the placement we agreed on: [trigger], [format], [reward if any], [frequency rule], and [fallback].
>
> Explain what you implemented, what is synthetic versus live, and what still requires manual verification.
>
> Then give me simple Preview testing steps for this exact game.

## 3. Verify in Preview

A successful build proves that code compiles. It does not prove that ads appear or that monetization works.

### Preview: Start With These Three Tests

#### Test 1: Enable Monetization

1. Make sure **Enable Monetization** is selected in **Preview Settings**. If it isn't, click the checkbox to enable it.
2. When monetization is enabled, select **Reload with monetization**. Preview will load with Jabali SDK mock ads.

#### Test 2: Complete an ad

Choose an eligible reward and complete the synthetic ad using its completion control.

Expected result:

- The reward is granted exactly once.
- The game remains usable afterward.
- The intended cooldown begins.
- Audio and controls return to their previous state.

#### Test 3: Dismiss an ad

Trigger a different eligible ad and dismiss it before completion.

Expected result:

- No reward is granted.
- No new reward cooldown begins.
- Gameplay remains available.
- No progress is lost.

Finally, disable Preview monetization and verify that the game remains playable.

### Prompt: Get Preview Testing Instructions

> Read the ad integration you just implemented.
>
> Give me a short, numbered Preview checklist using the actual button labels and controls in my game.
>
> For each test, tell me what to do, what should happen, and what to report if it does not.

## 4. Verify After Publishing

Preview testing and published-game testing are separate requirements.

### Published Game Checklist

1. Publish the updated build.
2. Open the normal Jabali player page.
3. Test each placement. Verify completion, dismissal, reward amounts, cooldowns, and gameplay recovery using approved test delivery.

### Prompt: Published Game Testing

> Prepare a short checklist for testing this exact ad integration after publishing.
>
> Tell me which placements and outcomes to repeat on the published game's normal Jabali player page.
>
> Include availability, completion, dismissal, pause/audio/input recovery, mobile layout, and reload/navigation.
