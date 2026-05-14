---
name: developer-cognitive-load-audit
description: >
  Audits a codebase or development workflow to identify sources of unnecessary complexity, inconsistent patterns, and missing abstractions that increase developer cognitive overhead. Use when someone says "this codebase is hard to understand," asks about reducing complexity in their code, wants to improve developer onboarding, complains about mental overhead when navigating a project, or needs to identify why their team moves slowly through a codebase.
category: developer
tags: [cognitive-load, complexity, code-quality, developer-experience, refactoring]
author: community
---

# Developer Cognitive Load Audit

Analyzes a codebase or workflow to surface specific, ranked sources of unnecessary mental overhead and provides actionable recommendations to reduce them.

## Audit Process

### 1. Gather Context
Ask for or examine:
- Entry points (main files, index files, routing)
- A representative sample: 3–5 files from different layers (UI, business logic, data access)
- Any existing conventions docs, READMEs, or onboarding guides
- Recent pain points or areas developers avoid

### 2. Analyze for Cognitive Load Sources

Scan each artifact across these dimensions:

**Naming & Semantics**
- Inconsistent naming conventions (camelCase vs snake_case mixed, ambiguous abbreviations)
- Variables/functions with misleading or generic names (`data`, `temp`, `handleStuff`)
- Domain terms used inconsistently across files

**Structural Complexity**
- Functions or methods exceeding 40 lines without clear single responsibility
- Nesting depth greater than 3 levels (conditionals, callbacks, loops)
- Files with more than one primary concern
- Circular or unclear dependency chains

**Inconsistent Patterns**
- Multiple ways of doing the same thing (e.g., three different error handling styles, two HTTP client wrappers)
- Mixed paradigms without clear rationale (OOP and functional mixed arbitrarily)
- Inconsistent state management approaches within the same layer

**Missing or Leaky Abstractions**
- Business logic leaking into UI or data layers
- Repeated code blocks that lack a named abstraction
- Raw API responses used directly without a transformation layer

**Navigation Friction**
- Non-obvious file organization that doesn't match mental models
- Logic split across too many small files with unclear relationships
- Magic numbers, strings, or flags without named constants

**Documentation Gaps**
- Public functions/modules with no docstring or comment explaining *why* (not just what)
- Complex algorithms with no explanation of intent
- Outdated comments that contradict current behavior

### 3. Score and Rank Issues

For each issue found, assess:
- **Frequency**: How often does a developer encounter this? (Daily / Weekly / Rarely)
- **Blast radius**: How many files or teammates does it affect?
- **Fix cost**: Low (rename, extract constant) / Medium (refactor function) / High (architectural change)

Prioritize: High frequency + wide blast radius + low fix cost = address first.

### 4. Identify Quick Wins vs. Structural Changes

Separate findings into:
- **Quick wins** (< 1 hour each): Renames, extracting constants, adding docstrings
- **Short-term improvements** (1 day): Extract functions, consolidate duplicate patterns
- **Architectural changes** (1+ sprint): Layer separation, abstraction design, convention standardization

## Output Format

Produce a structured audit report with the following sections:

---

**Cognitive Load Audit Report**

**Executive Summary** (3–5 sentences)
Overall assessment of cognitive load level (Low / Moderate / High / Critical) with the top 2–3 root causes.

**Findings** (table or numbered list)
| # | Issue | Location | Frequency | Blast Radius | Fix Cost | Category |
|---|-------|----------|-----------|--------------|----------|----------|
| 1 | ...   | ...      | Daily     | High         | Low      | Naming   |

Include 5–15 findings depending on codebase size. Each finding must name a specific file, function, or pattern — no vague observations.

**Quick Wins** (bullet list)
Concrete actions with exact changes: "Rename `handleData()` in `api/users.js` to `normalizeUserProfile()`"

**Short-Term Improvements** (bullet list)
Specific refactors with
