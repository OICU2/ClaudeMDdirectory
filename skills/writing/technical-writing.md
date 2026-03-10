---
name: technical-writing
description: >
  Produces clear, accurate documentation for technical products, APIs, systems, and processes.
  Use when someone says "write docs for this," asks to "document how this works," wants to
  "create a README," needs to "explain this technical process," or requests "developer
  documentation" for a codebase or feature.
category: writing
tags: [documentation, technical, developer-docs, api, readme]
author: community
---

# Technical Writing

This skill produces structured, accurate technical documentation tailored to the audience and purpose, activated whenever someone needs to document code, systems, APIs, or processes.

## Documentation Workflow

1. **Identify the doc type** — Determine what is being documented: API reference, README, how-to guide, architecture overview, runbook, or conceptual explanation.
2. **Clarify the audience** — Distinguish between end users, developers, operators, or stakeholders and adjust vocabulary and assumed knowledge accordingly.
3. **Extract the core information** — Pull the what, why, how, inputs, outputs, prerequisites, and edge cases from the provided code, description, or context.
4. **Structure before writing** — Choose the appropriate structure:
   - **README**: Overview → Installation → Usage → Configuration → Contributing
   - **API reference**: Endpoint/function → Parameters → Return values → Errors → Examples
   - **How-to guide**: Goal → Prerequisites → Numbered steps → Expected outcomes → Troubleshooting
   - **Architecture doc**: Purpose → Components → Data flow → Decisions/tradeoffs
5. **Write in plain, precise language** — Use active voice, short sentences, and concrete nouns. Avoid jargon unless the audience requires it; define it when used.
6. **Include working examples** — Every functional doc must contain at least one concrete code snippet, command, or real-world example.
7. **Flag gaps explicitly** — If information is missing or ambiguous, note it with a `<!-- TODO: clarify X -->` comment rather than guessing.

## Output Format

Produce a complete, ready-to-use Markdown document with:
- **H1** title reflecting the subject
- **H2/H3** section headers matching the chosen doc type structure
- **Code blocks** with language tags for all code, commands, and config snippets
- **Tables** for parameters, options, or comparisons with 3+ items
- **Bold** for UI elements, key terms, and warnings
- **Callout blocks** (`> ⚠️ Warning:`) for critical cautions or deprecations
- Length proportional to complexity: a simple function gets 20–50 lines; a full system gets as many sections as needed
- No placeholder text left unfilled unless explicitly marked as a TODO
