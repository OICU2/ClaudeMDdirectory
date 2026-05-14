---
name: code-complexity-audit
description: >
  Analyzes a codebase to identify functions and modules with high cyclomatic complexity, deep nesting, or excessive coupling and produces a prioritized refactoring report. Use when someone says "this codebase is getting hard to maintain," asks about code quality or technical debt, wants to find the most complex parts of their code, needs to prioritize refactoring work, or says "where should I start cleaning up this code."
category: developer
tags: [complexity, refactoring, code-quality, technical-debt, static-analysis]
author: community
---

# Code Complexity Audit

This skill scans a codebase for complexity hotspots — high cyclomatic complexity, deep nesting, tight coupling, and oversized modules — and delivers a prioritized, actionable refactoring report.

## Audit Workflow

### 1. Scope the Codebase
- Ask for the target directory, file types, or entry points if not provided
- Identify the language(s) in use to apply appropriate complexity heuristics
- Exclude generated files, vendored dependencies, and test fixtures unless explicitly requested

### 2. Measure Cyclomatic Complexity
- Count decision points per function: `if`, `else if`, `for`, `while`, `switch/case`, `catch`, ternary operators, logical `&&`/`||` in conditions
- Flag any function with complexity ≥ 10 as **High**, 7–9 as **Medium**, ≤ 6 as **Low**
- Note functions exceeding 50 lines as a secondary signal

### 3. Detect Deep Nesting
- Identify blocks nested more than 3 levels deep (loops, conditionals, callbacks)
- Flag arrow-function pyramids, nested ternaries, and deeply chained promises
- Record the file, function name, and line range for each violation

### 4. Identify Excessive Coupling
- Find functions or classes that import from or directly call more than 7 distinct modules/classes
- Flag god objects or god functions that handle multiple unrelated responsibilities
- Note circular dependencies between modules

### 5. Score and Prioritize
Assign each hotspot a **Refactoring Priority Score** (1–10) weighted by:
- Cyclomatic complexity (40%)
- Nesting depth (25%)
- Coupling breadth (25%)
- File change frequency if git history is accessible (10%)

Sort findings from highest to lowest score.

### 6. Suggest Refactoring Strategies
For each flagged item, recommend one or more concrete techniques:
- Extract Method / Extract Function for long or complex functions
- Guard Clauses / Early Returns to flatten nesting
- Strategy or Command pattern for branchy switch blocks
- Dependency Injection or interface segregation for high coupling
- Module splitting for oversized files (> 300 lines)

## Output Format

Produce a structured Markdown report with the following sections:

```
# Complexity Audit Report — [directory/project name]

## Summary
- Files scanned: N
- Total hotspots found: N
- Critical (score 8–10): N | High (5–7): N | Medium (1–4): N

## Top Hotspots (Prioritized)

### 1. [FunctionName] in `path/to/file.ext` — Score: 9/10
- **Cyclomatic Complexity:** 14
- **Nesting Depth:** 5 levels (lines 42–78)
- **Coupling:** imports 9 modules
- **Why it matters:** [1-sentence business/maintenance impact]
- **Recommended fix:** Extract the validation branch into `validateOrder()` and replace the nested conditionals with guard clauses

### 2. ...

## Quick Wins (score ≤ 4, fixable in < 30 min)
[Bulleted list of low-effort, low-risk improvements]

## Suggested Refactoring Order
1. [Hotspot name] — unblocks X or reduces risk in Y
2. ...

## Metrics Glossary
Brief definitions of cyclomatic complexity, nesting depth, and coupling for stakeholder communication.
```

- Keep each hotspot entry to 6 lines or fewer
- Cap the report at the top 20 hotspots unless the user asks for full output
- If no severe issues are found, state that explicitly and list the three
