---
name: dead-code-detection-report
description: >
  Scans a codebase to identify unused functions, unreachable code paths, and deprecated dependencies that can be safely removed. Use when someone says "find dead code," asks about "unused functions or variables," wants to "clean up the codebase," needs to "identify unreachable code," or wants to "remove unused dependencies." Produces a structured report with file locations, severity, and safe-removal recommendations.
category: developer
tags: [dead-code, refactoring, static-analysis, cleanup, dependencies]
author: community
---

# Dead Code Detection Report

This skill analyzes a codebase to locate unused functions, unreachable code paths, and deprecated or unused dependencies, then produces a prioritized removal report.

## Detection Workflow

1. **Identify scope**: Determine the target directory, language(s), and entry points (e.g., `main`, exported modules, route handlers).

2. **Scan for unused functions and methods**:
   - Search for function/method definitions with zero call sites across the codebase.
   - Exclude exported symbols unless the project is a closed application (not a library).
   - Flag private/internal functions with no internal callers.

3. **Detect unreachable code paths**:
   - Identify code after unconditional `return`, `throw`, `break`, or `continue` statements.
   - Find branches that can never be true (e.g., `if (false)`, conditions contradicted by type constraints).
   - Flag unused `catch` blocks and empty exception handlers.

4. **Find unused variables and imports**:
   - List declared variables never read after assignment.
   - List imported modules, packages, or `require` statements never referenced in the file.

5. **Check dependency files** (`package.json`, `requirements.txt`, `Gemfile`, `go.mod`, etc.):
   - Compare declared dependencies against actual import/usage across all source files.
   - Flag packages listed as dependencies but never imported.
   - Distinguish `devDependencies` vs. `dependencies` misclassifications.

6. **Assess removal safety**:
   - Mark each item as **Safe to Remove**, **Needs Verification**, or **Do Not Remove** based on:
     - Dynamic calls (e.g., `eval`, reflection, string-based dispatch)
     - Test coverage referencing the symbol
     - Framework-required hooks or lifecycle methods (e.g., `componentDidMount`, Django signals)

7. **Cross-reference with version control** (if available):
   - Note when a symbol was last modified.
   - Flag code untouched for >6 months as higher-priority cleanup candidates.

## Output Format

Produce a Markdown report with the following structure:

```
# Dead Code Detection Report
**Project**: <path>
**Date**: <date>
**Languages detected**: <list>

## Summary
| Category              | Count |
|-----------------------|-------|
| Unused functions      | X     |
| Unreachable blocks    | X     |
| Unused variables      | X     |
| Unused imports        | X     |
| Unused dependencies   | X     |

## Findings

### 🔴 Safe to Remove
For each item:
- **File**: `path/to/file.ext` (line X–Y)
- **Type**: Unused function / Unreachable block / Unused import / etc.
- **Name**: `functionName` or `variableName`
- **Reason**: Why it is considered dead code
- **Action**: Exact removal recommendation

### 🟡 Needs Verification
Same structure as above, with an added:
- **Risk**: Why human review is required before removal

### 🟢 Do Not Remove
Same structure, with:
- **Reason**: Why this appears unused but must be kept

## Recommended Next Steps
1. <Prioritized action item>
2. <Prioritized action item>
3. Rerun analysis after cleanup to confirm reduction.
```

- Group findings by file when more than 10 items exist.
- Keep each finding entry to 5 lines or fewer.
- Do not suggest refactoring beyond removal; scope is detection and deletion only.
