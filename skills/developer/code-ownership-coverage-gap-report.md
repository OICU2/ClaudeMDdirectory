---
name: code-ownership-coverage-gap-report
description: >
  Analyzes a codebase to identify files and modules that lack a designated owner in CODEOWNERS or equivalent ownership config files, surfacing blind spots in code review and incident response. Use when someone says "we don't know who owns this code," asks about ownership gaps in their repository, wants to audit their CODEOWNERS file, needs to find unowned modules before a production incident, or is trying to improve their on-call coverage.
category: developer
tags: [codeowners, code-review, incident-response, repository-hygiene, ownership]
author: community
---

# Code Ownership Coverage Gap Report

This skill scans a repository's ownership configuration against its actual file tree to produce a structured report of unowned files, directories, and modules that create review and incident response blind spots.

## Ownership Gap Analysis Workflow

1. **Locate ownership config files** — Search for `CODEOWNERS` in `.github/`, `.gitlab/`, `docs/`, and the repo root. Also check for `OWNERS`, `owners.yaml`, or custom ownership manifests. If none exist, flag the entire repo as unowned and stop.

2. **Parse ownership rules** — Extract all glob patterns and their assigned owners (teams, users, or aliases). Note patterns that use wildcards broadly (e.g., `*` or `**`) versus specific paths.

3. **Walk the file tree** — Enumerate all files and directories, excluding `.git/`, build artifacts (`dist/`, `build/`, `node_modules/`, `__pycache__/`, `*.pyc`), and generated files (lock files, auto-generated stubs unless explicitly owned).

4. **Match files to ownership rules** — Apply CODEOWNERS pattern-matching semantics (last matching rule wins for GitHub-style files). Identify every file that matches no rule or only a catch-all wildcard with no real team assigned.

5. **Cluster gaps by directory** — Group unowned files by their parent directory. If an entire directory subtree is unowned, report the root directory rather than every individual file to keep the report actionable.

6. **Assess risk by gap type** — Classify each gap:
   - **Critical**: Unowned files in `src/`, `lib/`, `api/`, or top-level application code
   - **High**: Unowned infrastructure/config files (`.tf`, `.yaml`, `Dockerfile`, `*.sh`)
   - **Medium**: Unowned test directories or documentation
   - **Low**: Unowned tooling, scripts, or non-critical config

7. **Identify stale or invalid owners** — Flag any owner references (e.g., `@org/deleted-team`) that appear in the CODEOWNERS but cannot be validated against known team/user patterns.

8. **Generate remediation suggestions** — For each critical or high-risk gap, suggest the most likely owning team based on file proximity to owned paths, file type conventions, or commit history patterns if accessible.

## Output Format

Produce a Markdown report with the following sections:

```
# Code Ownership Coverage Gap Report
**Repository:** <path or name>
**Ownership Config:** <file found, or "None detected">
**Scan Date:** <today's date>

## Summary
| Metric | Value |
|---|---|
| Total files scanned | N |
| Files with explicit owners | N (X%) |
| Files with no owner | N (X%) |
| Critical gaps | N |
| High gaps | N |
| Stale owner references | N |

## Critical & High Priority Gaps
For each gap cluster:
- **Path:** `src/payments/`
- **Risk:** Critical
- **Unowned files:** 12
- **Suggested owner:** `@org/backend-team` (owns adjacent `src/auth/`)

## Medium & Low Priority Gaps
Bulleted list of directory clusters with file counts only.

## Stale Owner References
List each invalid owner pattern and the rule line it appears on.

## Recommended CODEOWNERS Additions
Ready-to-paste CODEOWNERS lines for all critical and high gaps, e.g.:
`src/payments/ @org/backend-team`

## Next Steps
3–5 specific actions ordered by priority.
```

Keep the report scannable. Use tables for summaries, code blocks for CODEOWNERS snippets, and avoid prose paragraphs in the gap listings.
