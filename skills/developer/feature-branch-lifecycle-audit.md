---
name: feature-branch-lifecycle-audit
description: >
  Audits all open feature branches in a repository to assess age, merge conflict risk, and ownership staleness, then produces a prioritized action plan. Use when someone says "our branches are getting out of hand," asks about cleaning up old branches, or wants to know which feature branches should be merged or deleted. Also activates when someone mentions stale branches piling up, wants a branch health report, or needs help deciding which branches to prioritize for merge.
category: developer
tags: [git, branches, code-review, repository-hygiene, technical-debt]
author: community
---

# Feature Branch Lifecycle Audit

This skill analyzes all open feature branches across age, conflict probability, and ownership to produce a prioritized pruning and merge action plan.

## Audit Workflow

### 1. Collect Branch Data
Run the following to gather raw branch metadata:
```bash
git fetch --all --prune
git branch -r --sort=-committerdate --format='%(refname:short)|%(committerdate:iso)|%(authorname)|%(objectname:short)'
```
Also collect:
- Merge base distance from main/master: `git rev-list --count main..<branch>`
- Last commit message per branch: `git log -1 --pretty=%s <branch>`
- Whether a PR exists (check via GitHub/GitLab CLI if available: `gh pr list --state open --json headRefName`)

### 2. Classify Each Branch by Age
Assign an age tier to every branch:
- **Fresh**: last commit < 7 days ago
- **Aging**: last commit 7–30 days ago
- **Stale**: last commit 31–90 days ago
- **Abandoned**: last commit > 90 days ago

### 3. Estimate Merge Conflict Probability
For each branch, assess conflict risk using:
- **Commit divergence**: number of commits ahead of main (>20 = high risk)
- **Files changed**: `git diff --name-only main...<branch> | wc -l` (>15 files = elevated risk)
- **Hotspot overlap**: flag branches touching the same files as recently merged branches
- Assign: **Low / Medium / High / Critical** conflict risk

### 4. Assess Ownership Staleness
- Cross-reference branch author against current active team members (ask user to confirm if unknown)
- Flag as **Orphaned** if the author no longer appears in recent commits to main (past 60 days)
- Flag as **Transferred** if PR assignee differs from branch creator

### 5. Apply Action Recommendations
Map each branch to exactly one recommended action:

| Condition | Recommended Action |
|---|---|
| Fresh + Low conflict + Active owner | **Fast-track merge** — schedule for current sprint |
| Aging + Medium conflict + Active owner | **Rebase and review** — owner should update within 5 days |
| Stale + Any conflict + Active owner | **Immediate owner ping** — merge or close within 2 weeks |
| Any age + Orphaned | **Team triage** — reassign or delete |
| Abandoned + Any | **Archive/delete candidate** — confirm no dependency, then prune |
| High/Critical conflict + Any age | **Conflict review session** — schedule pairing before merge |

### 6. Identify Cross-Branch Dependencies
- Detect branches that share a non-main base (stacked branches): `git merge-base <branchA> <branchB>`
- Flag stacked branches explicitly so they are merged in dependency order

## Output Format

Produce a structured report with these sections:

---

**Branch Lifecycle Audit Report**
*Repository:* `<repo-name>` | *Audited:* `<date>` | *Total branches:* N

---

**Summary**
- Fresh: N | Aging: N | Stale: N | Abandoned: N
- Conflict risk breakdown: Low/Medium/High/Critical counts
- Orphaned branches: N

---

**Priority Action List** *(ordered by urgency)*

| Priority | Branch | Age | Conflict Risk | Owner Status | Recommended Action | Reason |
|---|---|---|---|---|---|---|
| 1 | `branch-name` | 45 days | High | Orphaned | Team triage | No active owner, diverged 38 commits |
|
