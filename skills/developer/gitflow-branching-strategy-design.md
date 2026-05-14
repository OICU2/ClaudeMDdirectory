---
name: gitflow-branching-strategy-design
category: developer
description: >
  Designs a team-specific Git branching strategy by analyzing release cadence, team size, and deployment targets to produce a documented branching model with merge rules and naming conventions. Use when someone says "we need a branching strategy," asks about how to organize their Git workflow, wants to design a release process for their team, needs to standardize how developers create and merge branches, or is setting up a new project's version control approach.
tags: [git, branching, gitflow, workflow, devops, version-control]
author: community
---

# Git Branching Strategy Design

This skill analyzes a team's release cadence, size, and deployment targets to design and document a complete, customized Git branching strategy with naming conventions, merge rules, and lifecycle policies.

## Discovery Phase

Before designing, gather these inputs (ask if not provided):

1. **Team size**: Number of developers actively committing code
2. **Release cadence**: Continuous deployment, scheduled releases (weekly/monthly/quarterly), or hotfix-driven
3. **Deployment targets**: Single environment, multiple environments (dev/staging/prod), or multi-tenant/multi-region
4. **Current pain points**: Merge conflicts, unclear ownership, broken main branch, slow releases, etc.
5. **CI/CD tooling**: GitHub Actions, GitLab CI, Jenkins, etc. (affects branch protection rules)
6. **Support requirements**: Whether older release versions must be maintained simultaneously

## Strategy Selection Logic

Map inputs to a base model, then customize:

| Team Size | Cadence | Complexity | Recommended Base Model |
|---|---|---|---|
| 1–5 devs | Continuous | Low | Trunk-Based Development |
| 1–5 devs | Scheduled | Low–Med | GitHub Flow |
| 6–20 devs | Scheduled | Med | GitHub Flow + Release branches |
| 6–20 devs | Multi-env | Med–High | Gitflow |
| 20+ devs | Any | High | Gitflow or Scaled Trunk-Based |
| Any | Multi-version support | High | Gitflow with long-lived release branches |

**Override rules:**
- If CI/CD deploys on every merge → lean toward trunk-based regardless of team size
- If hotfixes on production are frequent → always include a dedicated `hotfix/` branch pattern
- If multiple customers run different versions → always include long-lived release branches

## Branching Model Design Steps

1. **Define permanent branches** (never deleted):
   - Specify which branches are always present (`main`, `develop`, `release`, etc.)
   - Assign each a clear purpose and protection status

2. **Define transient branch types** with naming conventions:
   - Use prefixes: `feature/`, `bugfix/`, `hotfix/`, `release/`, `chore/`, `experiment/`
   - Specify full naming pattern: `feature/<ticket-id>-<short-description>` (e.g., `feature/PROJ-123-user-auth`)
   - Set maximum lifetime expectations (e.g., feature branches: < 2 weeks)

3. **Define merge rules for each branch type**:
   - Source branch → target branch
   - Merge method: merge commit, squash, or rebase
   - Required reviews and CI checks before merge
   - Who is authorized to merge (author, senior dev, release manager)

4. **Define the release flow**:
   - Step-by-step path from feature code to production
   - How release branches are cut, versioned, and tagged
   - Whether `develop` or `main` is the integration branch

5. **Define the hotfix flow**:
   - Where hotfix branches originate (always from latest production tag or `main`)
   - Which branches receive the hotfix merge (production + develop/main to prevent regression)

6. **Set branch protection rules** (translate to their CI/CD platform):
   - Required status checks
   - Required reviewers
   - Dismiss stale reviews on new commits
   - Restrict force-push

## Output Format

Produce a structured document with these exact sections:

---

**## Recommended Strategy: [Model Name]**
One paragraph explaining why this model fits the team's profile.

**## Branch Architecture**
Table listing every branch type with columns: Branch Name/Pattern | Purpose | Lifetime | Protected (Y/N)
