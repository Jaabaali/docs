---
title: Sparks and usage limits in Jabali Studio
description: How Sparks measure Bali usage in Jabali Studio, where to check your usage, what happens at the limit, and practical ways to make your Sparks go further.
sidebar:
  label: Sparks and usage
---

**Sparks** measure how much work Bali does for you. Instead of a fixed number of messages, each request uses Sparks based on the work involved, so a quick question costs less than building a new level or generating a batch of assets.

## What uses Sparks

- **Chatting with Bali**: reading your project, planning, writing code and answering questions. Longer, more complex tasks use more.
- **Creating assets**: generating images, video, audio, speech and 3D models.

The AI model you choose and its reasoning setting also affect how many Sparks a request uses. See [Models and behavior](/docs/studio/models-and-behavior/).

## Check your usage

Open **Settings → Billing**. The **Plan & Billing** panel shows:

- Your current plan
- A **Sparks usage** bar
- When your usage refreshes (**Usage refreshes on…**)
- An **Upgrade Plan** button if you need more

## When you reach your limit

If you run out of Sparks, Bali's chat shows *"You've reached your Bali usage limit"* and pauses until more are available. You can:

- **Wait for your usage to refresh** on the date shown in **Settings → Billing**.
- **Upgrade your plan** from **Settings → Billing**.

When Sparks are available again, Bali shows **Additional Sparks are now available.** Click **Continue** to pick up where you left off, or **Retry** to resend your last request.

## Make your Sparks go further

- **Pick an efficient model for everyday work.** Some models use far fewer Sparks for similar results. For example, GPT 6.1 Sol uses around 80% fewer Sparks than GPT 6 Astra for comparable token usage.
- **Lower the reasoning effort** for simple edits and questions.
- **Keep tasks focused.** [Medium-sized tasks](/docs/studio/bali-best-practices/#aim-for-medium-sized-tasks) avoid wasted work on changes you'll undo.
- **Reuse before you regenerate.** For skyboxes, Bali picks from a ready-made library instead of generating from scratch. For other assets, edit an existing one when you can.
- **Start a fresh thread when a conversation gets very long.** Long histories make every request bigger. Click **Reset Thread** at the top of Bali's panel, then summarize where you are.

:::note
Jabali regularly improves efficiency across its products. In August 2026, an update cut Spark usage for many workflows, by up to 75% for some, with nothing for you to do.
:::

## Related questions

- **What if a conversation gets too long?** If Bali shows that the conversation exceeded the model's context window, click **Reset thread** to continue. Your project files aren't affected, only the chat history.
- **Do Sparks roll over?** Check your plan details in **Settings → Billing** or on [jabali.ai](https://jabali.ai).
