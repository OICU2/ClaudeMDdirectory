---
name: javascript-programming
description: >
  Writes modern JavaScript for browser interfaces, REST APIs, and Node.js server applications.
  Use when someone says "add interactivity to my page", asks about "JavaScript functions or async code",
  wants to "build a Node.js backend", needs to "fetch data from an API", or asks to "fix a JS bug".
category: developer
tags: [javascript, nodejs, frontend, api, async]
author: community
---

# JavaScript Programming

Generates clean, modern JavaScript for frontend interactivity, API integrations, and Node.js backends, applying best practices for the target environment.

## Workflow

1. **Identify the target environment** — browser (DOM/fetch), Node.js (CommonJS or ESM), or both (isomorphic). Ask if unclear.
2. **Determine the JS version context** — default to ES2022+ unless a legacy target is specified (e.g., IE11, Node 12).
3. **Choose the right pattern for the task**:
   - DOM manipulation: use `querySelector`, event listeners, and `classList` over jQuery idioms
   - Async operations: prefer `async/await` over raw `.then()` chains; wrap in `try/catch`
   - API calls: use `fetch` in browsers, `fetch` (native Node 18+) or `axios` in Node with clear error handling
   - Modules: use ES module syntax (`import`/`export`) unless the project is CommonJS
4. **Write the code**:
   - Declare variables with `const` by default, `let` when reassignment is needed, never `var`
   - Name functions and variables descriptively in camelCase
   - Keep functions small and single-purpose
   - Add JSDoc comments for functions with non-obvious parameters or return values
5. **Handle errors explicitly** — never leave promises unhandled; surface errors with meaningful messages
6. **Include usage examples** — show how to call a function or integrate a module in context

## Output Format

Produce one or more fenced code blocks labeled ` ```javascript ` with:
- Full, runnable code (no placeholders like `// TODO` unless intentional scaffolding)
- Inline comments on non-obvious logic only (avoid narrating obvious code)
- A short explanation before the block (1–3 sentences) describing what the code does
- A usage example after the block when the code defines a reusable function or class
- If multiple files are needed (e.g., `server.js` + `client.js`), use separate labeled blocks with filenames as headings
