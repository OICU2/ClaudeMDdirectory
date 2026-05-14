---
name: developer-onboarding-codebase-tour-builder
description: >
  Generates a structured guided tour of a codebase to help new developers get up to speed quickly, covering entry points, architecture, and common pitfalls. Use when someone says "I'm new to this codebase", asks "where do I start with this project", wants to onboard a new team member, needs to understand how a codebase is organized, or requests a walkthrough of the project structure.
category: developer
tags: [onboarding, documentation, architecture, codebase, developer-experience]
author: community
---

# Codebase Tour Builder

Analyzes a codebase and produces a structured onboarding guide for new developers, highlighting entry points, architectural decisions, and gotchas.

## Workflow

1. **Scan the project root** — Identify the project type (monorepo, microservices, monolith, library, etc.) by examining `package.json`, `Cargo.toml`, `pyproject.toml`, `go.mod`, `Makefile`, CI configs, and directory layout.

2. **Map entry points** — Find all meaningful starting points: main executables, server bootstrap files, CLI entrypoints, exported library roots, and test runners. List the file path and a one-line description of what each one does.

3. **Trace the primary request/data flow** — Follow the most important user-facing flow (HTTP request, CLI command, job trigger, etc.) from entry to exit, naming each layer (routing → middleware → controller → service → repository → database). Show actual file paths at each layer.

4. **Extract architectural decisions** — Identify patterns in use: dependency injection, event-driven design, layered architecture, domain-driven design, CQRS, etc. Note where these patterns are implemented and why they likely exist (infer from code structure, comments, ADRs, or README).

5. **Locate configuration and environment setup** — Find all config files, `.env.example`, feature flags, and secret references. List what a developer must configure before the project runs locally.

6. **Identify gotchas and non-obvious behaviors** — Look for:
   - Non-standard build steps or bootstrapping requirements
   - Global state or singletons
   - Implicit conventions (e.g., magic file naming, auto-registration patterns)
   - Known footguns in comments or TODO/FIXME notes
   - External dependencies that must be running locally (databases, queues, third-party services)

7. **Highlight key files every developer must know** — Select 8–15 files that are highest-leverage for understanding the system. For each: file path, role in the system, and why it matters.

8. **Suggest a learning path** — Provide a sequenced reading order: which files to read first, second, and third, based on dependency and conceptual complexity.

## Output Format

Produce a Markdown document with the following sections in order:

```
# Codebase Tour: [Project Name]

## Project Overview
[2–3 sentences: what the project does, its primary language/stack, and architectural style]

## Project Type & Structure
[Bullet list: repo type, top-level directory purposes]

## Entry Points
| File | Purpose |
|------|---------|
| path/to/file | Description |

## Primary Flow: [Flow Name]
[Step-by-step numbered list tracing the flow with file paths at each step]

## Architecture Patterns
[Bullet list of patterns used, where they appear, and inferred rationale]

## Configuration & Environment Setup
[Bullet list of config files and required environment variables with descriptions]

## Gotchas & Non-Obvious Behaviors
[Numbered list of pitfalls, each with: what it is, where it occurs, and how to handle it]

## Key Files Every Developer Should Know
| File | Role | Why It Matters |
|------|------|----------------|
| path/to/file | Role | Reason |

## Suggested Learning Path
1. Start with: [file] — [reason]
2. Then read: [file] — [reason]
3. ...continue to 6–8 steps total
```

- Length: comprehensive but scannable; aim for 400–800 words of content excluding tables
- Tone: direct, technical, peer-to-peer (not tutorial-style)
- Always use actual file paths found in the codebase, not placeholders
