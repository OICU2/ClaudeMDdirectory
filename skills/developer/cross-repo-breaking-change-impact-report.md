---
name: cross-repo-breaking-change-impact-report
description: >
  Scans multiple repositories to identify all consumers of a changed interface and produces a prioritized impact report. Use when someone says "I'm changing this API and need to know what breaks," asks about the blast radius of a refactor, wants to find all callers of a function before removing it, needs to assess downstream impact of a signature change, or is planning a breaking change and wants a migration checklist.
category: developer
tags: [breaking-changes, refactoring, impact-analysis, multi-repo, api-contracts]
author: community
---

# Cross-Repo Breaking Change Impact Report

Analyzes multiple codebases to surface every file, service, and team affected by a changed interface, then ranks them by severity so engineers know exactly what to fix and in what order.

## Analysis Workflow

1. **Extract the changed interface signature** — identify the function name, class, type, API endpoint, or exported symbol being modified. Note the old signature and new signature explicitly.

2. **Enumerate target repositories** — ask the user for a list of repos or directories to scan, or infer from a monorepo layout. If a dependency graph or lockfile exists (`package.json`, `go.mod`, `Cargo.toml`, `requirements.txt`, `pom.xml`), parse it to identify which downstream packages declare the changed package as a dependency.

3. **Search for direct usages** — across each repo, grep for:
   - Import statements referencing the changed module/package
   - Call sites using the exact function/method/class name
   - Type annotations, interface implementations, or schema references
   - Configuration files or OpenAPI specs referencing the endpoint

4. **Classify each hit by severity**:
   - **Critical** — runtime call site that will fail immediately (wrong arity, missing required param, incompatible type)
   - **High** — type-checked reference that will cause compile/lint failure
   - **Medium** — test file or mock that references the interface
   - **Low** — documentation, comment, or generated code referencing the old signature

5. **Group by service/team ownership** — map files to their owning service using directory structure, `CODEOWNERS`, or package boundaries.

6. **Estimate migration effort** — for each affected location, classify effort as Trivial (rename/add default param), Moderate (logic change required), or Complex (architectural adjustment needed).

7. **Identify safe-change options** — check whether a backward-compatible shim, deprecation wrapper, or versioned endpoint can reduce blast radius before committing to a hard break.

## Output Format

Produce a structured report with these sections:

```
## Breaking Change Impact Report
**Changed Interface:** `<old signature>` → `<new signature>`
**Repos Scanned:** N
**Total Affected Files:** N
**Critical Blockers:** N

---

### 🔴 Critical (must fix before deploy)
| Repo | File | Line | Usage | Effort |
|------|------|------|-------|--------|
| ...  | ...  | ...  | ...   | ...    |

### 🟠 High (compile/type failures)
[same table format]

### 🟡 Medium (test/mock failures)
[same table format]

### 🟢 Low (docs/comments)
[same table format]

---

### By Service / Team
- **service-name** (owner: @team): N files, highest severity: Critical
  - Recommended action: [specific instruction]

---

### Migration Checklist
- [ ] [Ordered, specific action items starting with critical blockers]

### Safe-Change Options Considered
- [List any shim/versioning strategies that could reduce impact, or "None identified"]
```

Report must be skimmable in under 2 minutes. Omit sections with zero findings. If a repo could not be scanned, flag it explicitly under a **⚠️ Scan Gaps** heading.
