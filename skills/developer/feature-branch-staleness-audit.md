---
name: feature-branch-staleness-audit
description: >
  Scans all open feature branches in a repository to identify those that have diverged significantly from the main branch, calculates merge risk scores, and recommends concrete actions. Use when someone says "audit our feature branches," asks about "stale branches," wants to "check branch health," needs to "identify risky merges," or asks "which branches are out of date." Produces a prioritized report with actionable next steps for each flagged branch.
category: developer
tags: [git, branches, code-review, devops, merge-risk]
author: community
---

# Feature Branch Staleness Audit

This skill audits all open feature branches against the main branch, assigns merge risk scores based on divergence metrics, and delivers a prioritized action plan to reduce integration risk.

## Audit Workflow

1. **Enumerate branches**: Run `git branch -r` (or use the GitHub/GitLab API if available) to list all remote branches excluding `main`, `master`, `develop`, and release branches.

2. **Compute divergence metrics** for each branch:
   - **Commits behind main**: `git rev-list --count <branch>..main`
   - **Commits ahead of main**: `git rev-list --count main..<branch>`
   - **Last commit age**: `git log -1 --format="%ar" <branch>`
   - **Files changed vs. main**: `git diff --name-only main...<branch> | wc -l`
   - **Conflict likelihood**: Attempt `git merge-tree $(git merge-base main <branch>) main <branch>` and check for conflict markers.

3. **Assign a merge risk score (1–10)** using this rubric:
   - +2 if commits behind main > 50
   - +2 if commits behind main > 100 (cumulative)
   - +1 if last commit age > 14 days
   - +2 if last commit age > 60 days (cumulative)
   - +2 if files changed > 50
   - +2 if conflict markers detected in merge-tree output
   - Cap at 10

4. **Classify each branch**:
   - **Score 1–3**: Healthy — minor drift, low risk
   - **Score 4–6**: Stale — needs rebase or sync soon
   - **Score 7–9**: Critical — high merge complexity, immediate attention required
   - **Score 10**: Abandoned — recommend archiving or closing

5. **Assign recommended action** per classification:
   - Healthy → Rebase at next convenient opportunity
   - Stale → Rebase against main this sprint; assign owner to review
   - Critical → Schedule dedicated merge session; consider breaking into smaller PRs
   - Abandoned → Ping author for status; close or archive if no response within 5 business days

6. **Sort results** by risk score descending so the highest-risk branches appear first.

## Output Format

Produce a Markdown report with the following structure:

```
# Feature Branch Staleness Audit — [repo name] — [date]

## Summary
- Total branches scanned: N
- Healthy: N | Stale: N | Critical: N | Abandoned: N
- Branches requiring immediate action: N

---

## Branch Risk Report

| Branch | Commits Behind | Commits Ahead | Last Commit | Files Δ | Conflicts | Risk Score | Status | Recommended Action |
|--------|---------------|---------------|-------------|---------|-----------|------------|--------|--------------------|
| feature/foo | 120 | 8 | 73 days ago | 64 | Yes | 10 | Abandoned | Archive or close; ping @author |
| feature/bar | 55 | 22 | 18 days ago | 31 | No | 6 | Stale | Rebase this sprint |
| ... | | | | | | | | |

---

## Priority Actions

### 🔴 Immediate (Critical + Abandoned)
- **feature/foo** (score 10): [specific action with owner if determinable]
- ...

### 🟡 This Sprint (Stale)
- **feature/bar** (score 6): [specific action]
- ...

### 🟢 Backlog (Healthy)
- **feature/baz** (
