---
name: code-documentation
description: >
  Writes clear, structured documentation for codebases, APIs, functions, and developer guides. Use when someone says "document this code," asks to "write docs for my API," or wants to "add comments to this function." Also activates when someone needs a README, wants to "explain this codebase," or asks to "create a developer guide."
category: developer
tags: [documentation, api-docs, readme, comments, developer-guides]
author: community
---

# Code Documentation Skill

This skill produces clear, useful documentation for code — including inline comments, READMEs, API references, and developer guides — triggered when someone needs their code explained or documented for others.

## Documentation Workflow

1. **Identify the documentation target** — determine what needs documenting: a function, module, API endpoint, full codebase, or developer guide.

2. **Infer the audience** — distinguish between end-user docs, internal developer docs, or API consumer docs, and calibrate terminology and depth accordingly.

3. **Scan for context** — read the provided code or description for purpose, parameters, return values, side effects, error conditions, and usage patterns before writing anything.

4. **Choose the right format** — match the format to the target:
   - Functions/methods → docstrings with params, returns, raises, and a usage example
   - Modules/files → header comment explaining purpose, exports, and dependencies
   - APIs → endpoint table or OpenAPI-style blocks with method, path, params, request body, responses, and example calls
   - Codebases → README with project overview, prerequisites, installation, usage, and contribution notes
   - Guides → numbered steps with code snippets and expected outputs

5. **Write documentation that answers "why," not just "what"** — explain intent, edge cases, and non-obvious behavior, not just what the code literally does.

6. **Include concrete examples** — every function doc gets at least one usage example; every API endpoint gets a sample request and response.

7. **Flag gaps** — if the code has undocumented behavior, ambiguous return types, or missing error handling, note it explicitly rather than inventing documentation.

## Output Format

Produce documentation in the appropriate format for the target:

- **Inline/docstrings**: Language-native format (JSDoc, Python docstrings, GoDoc, etc.) placed directly above the function or class, including: one-line summary, parameter descriptions with types, return value, exceptions/errors, and a usage example block.

- **README**: Markdown with sections — Project Name + badge line, Description (2–4 sentences), Prerequisites, Installation (numbered steps with code blocks), Usage (common examples), Configuration (if applicable), Contributing, License.

- **API reference**: Markdown table or fenced blocks per endpoint — method, path, description, request parameters, request body schema, response schema, status codes, and a curl or fetch example.

- **Developer guide**: Numbered steps with explanatory prose between them, inline code blocks for commands, and callout blocks (> **Note:**) for warnings or important context.

Length scales with complexity — a single utility function gets 8–15 lines of docs; a full API reference gets as long as the API requires. No padding. No restating the code in plain English without adding meaning.