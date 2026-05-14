---
name: code-review-checklist-builder
description: >
  Generates a structured, language-specific code review checklist covering security, performance, readability, and correctness criteria for a given codebase or pull request. Use when someone says "help me review this code", asks for "a checklist for this PR", wants to "standardize our code review process", needs to "audit this codebase before merging", or requests "review criteria for this language or framework".
category: developer
tags: [code-review, checklist, security, performance, best-practices]
author: community
---

# Code Review Checklist Builder

Analyzes a provided codebase, file, or pull request description and generates a prioritized, language-specific code review checklist that reviewers can use immediately.

## Checklist Generation Workflow

1. **Identify the language and framework** from the provided code or description. If ambiguous, ask one clarifying question before proceeding.

2. **Scan for context signals** — note the code's purpose (API, UI, data pipeline, etc.), team size if mentioned, and any stated constraints (performance-critical, security-sensitive, public-facing).

3. **Build checklist across five mandatory categories**, with language-specific items in each:

   - **Correctness**: Logic errors, edge cases, null/undefined handling, error propagation, off-by-one errors, incorrect assumptions about data types or external API contracts.
   - **Security**: Input validation, injection risks (SQL, XSS, command injection), hardcoded secrets or credentials, insecure dependencies, improper authentication or authorization checks, sensitive data exposure in logs or responses.
   - **Performance**: N+1 query patterns, unnecessary re-renders or recomputation, missing indexes on queried fields, unbounded loops or recursion, memory leaks, synchronous blocking calls in async contexts.
   - **Readability & Maintainability**: Naming clarity, function length (flag functions over 40 lines), cyclomatic complexity, missing or outdated comments on non-obvious logic, dead code, magic numbers without constants.
   - **Testing**: Missing unit tests for new logic, untested edge cases, mocked dependencies that should be integration-tested, test assertions that don't actually verify behavior.

4. **Assign priority to each item** using three levels:
   - 🔴 **Blocker** — must be fixed before merge
   - 🟡 **Suggestion** — should be addressed but not merge-blocking
   - 🟢 **Nitpick** — minor style or preference, optional

5. **Add language-specific rules** on top of the universal categories. Examples:
   - Python: type hint coverage, use of mutable default arguments, proper use of `__slots__`
   - JavaScript/TypeScript: `any` type usage, promise rejection handling, prototype pollution risks
   - Java: null safety, checked exception handling, thread safety annotations
   - Go: error return ignored, goroutine leaks, defer in loops
   - SQL: query parameterization, missing `LIMIT` on unbounded queries, transaction boundaries

6. **Include a "Quick Wins" section** listing the 3 highest-impact, lowest-effort fixes found.

## Output Format

Produce the checklist in this exact structure:

```
## Code Review Checklist — [Language/Framework] — [Date]

**Context**: [1-line summary of what the code does]

---

### 🔴 Blockers
- [ ] [Specific issue with file/line reference if code was provided]
- [ ] ...

### 🟡 Suggestions
- [ ] [Specific, actionable item]
- [ ] ...

### 🟢 Nitpicks
- [ ] [Item]
- [ ] ...

---

### ⚡ Quick Wins
1. [Highest impact fix]
2. [Second fix]
3. [Third fix]

---

### Checklist Coverage Summary
| Category       | Items Found | Blockers |
|----------------|-------------|----------|
| Correctness    | X           | X        |
| Security       | X           | X        |
| Performance    | X           | X        |
| Readability    | X           | X        |
| Testing        | X           | X        |
```

- If actual code is provided, reference specific line numbers or function names in each item.
- If only a description is provided, generate a template chec
