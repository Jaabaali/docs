---
title: Connect Bali to MCP servers
description: Extend Bali in Jabali Studio with MCP servers. Add servers over STDIO, HTTP or SSE, control which tools Bali can use, and approve tool calls.
sidebar:
  label: MCP servers
---

The [Model Context Protocol](https://modelcontextprotocol.io) (MCP) is an open standard for connecting AI assistants to external tools and data. Add an MCP server to Jabali Studio and Bali can use its tools while building your game, for example to read your design wiki, query a database of game items, or control another app on your computer.

:::caution[Only add servers you trust]
An MCP server can run programs on your computer or reach online services on your behalf. Add servers from sources you trust, and keep approvals turned on until you know what a server's tools do.
:::

## Add an MCP server

There are several ways to add a server:

- **From Settings**: open **Settings → MCP** and click **Add MCP Server**.
- **From the chat**: click **+** under Bali's chat box and choose **Add MCP server**. The server is turned on for the current project.
- **From Project Settings**: in **AI Settings → MCP Servers**, click **Add MCP Server**. The server is turned on for that project.
- **From a bundle**: if you have an MCP bundle (an `.mcpb` file), click **Import .mcpb** in **Settings → MCP** or in the project's **MCP Servers** settings, or drag the file onto the MCP settings page or into Bali's chat.

### Server settings

| Field                   | What to enter                                                                          |
| ----------------------- | -------------------------------------------------------------------------------------- |
| **Label**               | Required. A name you'll recognize.                                                     |
| **Description**         | Optional. What the server is for.                                                      |
| **Transport**           | How Studio talks to the server: **HTTP** (the default), **SSE** or **STDIO**.          |
| **URL**                 | For HTTP and SSE servers, the server's address.                                        |
| **Command**, **Arguments**, **Working Directory**, **Environment** | For STDIO servers, the program to run on your computer and how to run it. |
| **Auth Type**           | **None**, **API Key**, **Bearer Token**, **Basic Auth** or **Static Headers**.         |
| **Allowed Tools**       | Which tools Bali may use. Leave blank to allow every tool the server offers.           |
| **Approval Policy**     | When Bali must ask before using a tool. See [Approvals](#approve-tool-calls).          |
| **Enabled**             | Turn the server on or off.                                                             |

Use the server's own documentation to find the right transport, URL or command.

:::tip[Which transport do I need?]
- **STDIO** runs a program on your computer, such as a command-line tool you've installed. Use it for local servers.
- **HTTP** and **SSE** connect to a server running elsewhere, usually online. Use them for hosted services.
:::

## Manage servers

Each server in **Settings → MCP** shows its status and how many tools are available. From a server's card you can:

- **Check Connection** to test that it works
- **Inspect Tools** to see what each tool does, and switch individual tools on (**Allowed**) or off (**Filtered out**)
- **Edit** the server's settings
- **Clear Secrets** to remove saved keys and tokens
- **Delete** the server

If an imported bundle needs more setup, such as an API key, Studio tells you it *still needs configuration before use* and opens the server editor so you can fill in the missing values. You can reopen the editor at any time with **Edit**.

## Turn servers on for a project

Servers you add in **Settings → MCP** are available to all your projects but aren't turned on automatically. To use one in a project:

1. Open the project and click the gear icon (**Open Project Settings**).
2. Open **AI Settings → MCP Servers**.
3. Switch the server to **Active for project**.

Here you can also **Override confirmation policy for this server** to use a different approval policy in this project. Only servers that are **Enabled** in **Settings → MCP** appear in this list.

Servers you add from the chat, by dropping a bundle into the chat, or with **Add MCP Server** or **Import .mcpb** on this page are turned on for the project straight away.

## Approve tool calls

By default, Bali asks before using any MCP tool. When it wants to use one, an **MCP Tool Approval Required** card appears in the chat showing the tool and what Bali wants to do with it. Click **Approve** or **Deny**.

To stop being asked about a tool you trust, open **Advanced: Persistent Approval** on the card. You can allow:

- this tool, or every tool from this server
- in this project, or in all projects

Each server's **Approval Policy** sets the default:

| Policy                                         | Bali asks before...                     |
| ---------------------------------------------- | --------------------------------------- |
| **Require approval for all MCP tools**         | every tool call (the default)           |
| **Require approval for specific MCP tools**    | calls to the tools you choose           |
| **Do not require approval for MCP tools**      | nothing. Use only for servers you fully trust. |

## Troubleshooting

- **The server won't connect.** Click **Check Connection** for details. For STDIO servers, check that the command is installed and runs in a terminal. For HTTP and SSE servers, check the URL and your authentication settings.
- **Bali doesn't use the server.** Make sure it's **Enabled** and **Active for project** in the project's AI settings, and that the tools you need aren't filtered out.
- **Bali uses the wrong tool.** Name the server or tool in your request, for example *"Use the wiki server to look up the lore for the north kingdom."*
