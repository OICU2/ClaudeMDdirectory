---
name: sdk-integration-quickstart-guide
description: >
  Generates a structured, copy-paste-ready quickstart guide for integrating a specific SDK into a project. Use when someone says "help me get started with [SDK]", asks about integrating a library or API client, wants a quickstart for an SDK, needs to set up authentication for a service, or asks how to make their first API call with a specific tool.
category: developer
tags: [sdk, integration, quickstart, documentation, onboarding]
author: community
---

# SDK Integration Quickstart Guide

This skill produces a complete, working quickstart guide for any SDK — covering installation, authentication setup, and a minimal but functional code example — whenever a user needs to integrate a new library or service.

## Quickstart Generation Workflow

1. **Identify the SDK and target language** — Confirm the SDK name and the user's programming language or framework. If ambiguous, ask before proceeding.

2. **Determine the user's starting context** — Note whether they have an existing project, need a new one scaffolded, or just need the integration steps dropped into their current setup.

3. **Write the Prerequisites section** — List exact requirements: runtime version, package manager, account or API key requirements, and any environment assumptions (e.g., Node.js >= 18, a paid Stripe account).

4. **Write the Installation section** — Provide the exact install command(s) for the relevant package manager(s). Include both primary and alternative package managers when common (e.g., npm and yarn, pip and poetry).

5. **Write the Authentication section** — Show how to securely provide credentials. Always use environment variables (`process.env`, `os.environ`, etc.) — never hardcode secrets. Include the `.env` snippet and the code to load it.

6. **Write the First Call section** — Provide a minimal, self-contained code snippet that performs one real action (e.g., list resources, send a message, create a record). The snippet must:
   - Be fully runnable with no missing pieces
   - Include necessary imports/requires
   - Handle the response and print or return a meaningful result
   - Include inline comments explaining each non-obvious step

7. **Write the Next Steps section** — List 3–5 concrete follow-up actions or common use cases with links to official docs where relevant.

8. **Validate completeness** — Before outputting, confirm the guide covers: install → auth → first call → output verification. If any step is missing, add it.

## Output Format

Produce a Markdown document with the following structure and length:

```
# [SDK Name] Quickstart Guide ([Language])

## Prerequisites
- Bullet list of requirements (runtime, accounts, keys)

## Installation
\```[shell]
# exact install command(s)
\```

## Authentication
Short explanation (1–2 sentences) of the auth method used.

\```[language]
// code to load and configure credentials
\```

> ⚠️ Never commit your API keys. Add `.env` to `.gitignore`.

## Your First [Action]
1–2 sentence explanation of what this example does.

\```[language]
// fully working code example with inline comments
\```

**Expected output:**
\```
// what the user should see when it works
\```

## Next Steps
- [ ] Link or description of next common task
- [ ] Link or description of next common task
- [ ] Link or description of next common task
```

- Total length: 150–400 lines depending on SDK complexity
- Code blocks must specify the language for syntax highlighting
- All code must be immediately runnable without modification beyond swapping in real credentials
- Use checkboxes (`- [ ]`) in Next Steps to signal actionable items
