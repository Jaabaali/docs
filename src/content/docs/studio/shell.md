---
title: Let Bali run commands with the Shell tool
description: Let Bali run shell commands in your project folder in Jabali Studio. Approve commands, choose bash, zsh or PowerShell, set timeouts and manage saved approvals.
sidebar:
  label: Shell tool
---

With the **Shell tool**, Bali can run commands in your project folder, the same way you would in a terminal. It uses this to install packages, run builds and tests, search files and automate repetitive tasks, especially in [web projects](/docs/studio/engines/#web-projects).

The Shell tool is new and still evolving. You stay in control: Bali asks before running commands that could change things.

## Approve commands

When Bali wants to run a command, a **Shell Approval Required** card appears in the chat showing the exact command. Read it, then:

- Click **Approve Once** to run it this time.
- Click **Deny** to stop it.
- To skip the prompt next time, open **Remember approval** and choose to remember it for this session, this project or all projects.

:::caution[Only approve commands you recognize]
Shell commands can change or delete files on your computer. If you're not sure what a command does, click **Deny** and ask Bali to explain it first.
:::

Some read-only commands run without asking, such as listing files, reading a file, searching with `grep`, checking a program's version, and viewing `git status`, `git diff` or `git log`.

## How commands run

- Commands always run in the current project's folder, even if you switch between projects.
- Commands that run too long are stopped after the timeout. The default is 30 seconds.
- When a command prints a lot of output, Bali sees a shortened version, and the full output is saved to a log file in the project.

## Choose your shell

Studio detects a shell automatically:

| Your computer | Studio uses the first one it finds                          |
| ------------- | ----------------------------------------------------------- |
| Windows       | Git Bash (or another bash), then PowerShell 7, then Windows PowerShell |
| Mac           | bash, then zsh                                              |

To change it, open **Settings → Shell**. You'll see your **Current OS** and the **Resolved shell** Studio is using.

| Setting                  | What it does                                                                     |
| ------------------------ | -------------------------------------------------------------------------------- |
| **Shell mode**           | **Auto** detects a shell for you. **Custom executable** lets you pick one.       |
| **Shell family**         | bash, zsh, PowerShell or custom                                                  |
| **Executable** and **Args** | The program to run and any arguments, for a custom shell                      |
| **Default timeout (ms)** | How long a command can run before it's stopped. Up to 300,000 ms (5 minutes).    |

Click **Save shell settings** when you're done.

Approvals can't be remembered for custom shells, or for commands that run script files, so Studio asks every time.

:::tip[On Windows?]
Studio prefers bash when it's available. To get it, install [Git for Windows](https://git-scm.com/download/win), which includes Git Bash.
:::

## Manage saved approvals

- **All projects**: **Settings → Shell** lists the commands you've approved for all projects.
- **One project**: open **Project Settings → AI Settings → Project Shell** to see **Project Approvals**. Here you can also turn off **Inherit global shell settings** to give the project its own shell settings.
