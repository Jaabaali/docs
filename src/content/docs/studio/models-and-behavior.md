---
title: Choose Bali's AI model, reasoning and behavior
description: Pick the AI model Bali uses in Jabali Studio, set reasoning effort, and choose Autonomous, Collaborative, Cautious or Creative behavior for each project.
sidebar:
  label: Models and behavior
---

You can tune how Bali works on each project with three settings:

- **Model**: the AI model behind Bali's conversations
- **Reasoning**: how much thinking to request from models that support it
- **Behavior**: how independently Bali works and how often it checks in with you

All three are saved per project, so you can use a fast model for a quick prototype and a stronger one for a complex game.

## Where to change them

- **In the chat**: click the model chip next to the **+** button under Bali's chat box. The menu has **Model**, **Behavior** and **Reasoning** options.
- **In Project Settings**: click the gear icon in the top-right toolbar and open **AI Settings**. See [Settings](/docs/studio/settings/#ai-settings).

## Models

The model menu groups models by category and shows each one's provider and a short description. The list changes as new models are released, and some models may not be available on every account. If a model shows a label next to its name, it isn't available to you right now.

Recent additions include:

| Released          | Models                                                    |
| ----------------- | --------------------------------------------------------- |
| October 2026      | GPT 6.1 Sol                                               |
| September 2026    | GPT 6 Astra, GLM 5.3, Gemini 3.7 Flash, Grok 4.6 reasoning |
| August 2026       | GPT-5.6 Sol, GPT-5.6 Terra, GPT-5.6 Luna, GLM 5.2, Kimi K3 |
| June 2026         | Gemini 3.5 Flash                                          |

Studio always shows the current list, so check the model menu for what's available to you. [What's new](/docs/studio/whats-new/) announces new models as they arrive.

### Choosing a model

- **Fast models** (often labeled Flash, Lite or similar) are great for quick questions, small edits and brainstorming. They usually use fewer [Sparks](/docs/studio/sparks/).
- **Stronger models** handle complex coding, large refactors and tricky bugs better, but usually use more Sparks per request.
- **Efficiency varies a lot between models.** For example, GPT 6.1 Sol performs close to GPT 6 Astra on coding and complex work while using around 80% fewer Sparks for comparable token usage.
- **Not every model can see images.** If you attach an image and the selected model can't read it, Studio shows a warning on the image: *"This image won't be included in the context because [model] doesn't support image inputs."* Switch to a model that supports images if Bali needs to see it.

If a model isn't working well for a task, switching models mid-project is fine. Bali keeps your project and chat history.

## Reasoning

Reasoning models can spend more time thinking through a problem before they answer. **Default (Medium)** suits most work. The available levels depend on the model, for example **None**, **Low**, **Medium**, **High** and **Extra High**.

- Use **higher** reasoning for complex systems, hard bugs and planning large changes.
- Use **lower** reasoning for quick edits and simple questions. It's faster and uses fewer Sparks.

If the selected model doesn't support reasoning, the menu shows **Reasoning: Not supported**.

## Behavior

Behavior sets how much Bali does on its own before checking in with you. For small tasks, every behavior focuses on exactly what you asked. The differences show up on medium and large tasks.

| Behavior          | In short                                 | What Bali does                                                                                   |
| ----------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Autonomous**    | Rapid, independent action                | Makes changes quickly, with minimal interruptions or confirmations. Asks only about critical decisions. |
| **Collaborative** | Balanced collaboration and autonomy      | Checks in periodically, providing updates and confirming significant actions.                    |
| **Cautious**      | Careful, user-guided actions             | Frequently asks for confirmation and clearly explains each step before making changes.            |
| **Creative**      | Exploratory and innovative               | Proactively suggests new ideas and experimental changes beyond your explicit instructions.       |

[Bali best practices](/docs/studio/bali-best-practices/#choose-the-right-agent-behavior) has advice on when to use each one.
