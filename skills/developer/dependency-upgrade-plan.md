---
name: dependency-upgrade-plan
description: >
  Analyzes a project's dependency tree to produce a prioritized, safe upgrade sequence that resolves version conflicts and flags breaking API changes. Use when someone says "help me update my dependencies," asks about "upgrading packages safely," wants to "resolve dependency conflicts," needs to "plan a migration to newer versions," or asks "which packages should I upgrade first."
category: developer
tags: [dependencies, package-management, upgrades, semver, migration]
author: community
---

# Dependency Upgrade Plan

This skill audits a project's dependency tree, identifies conflicts and outdated packages, and produces a sequenced upgrade roadmap that minimizes breakage risk.

## Upgrade Analysis Workflow

1. **Inventory current state**
   - Parse the lockfile (package-lock.json, yarn.lock, Pipfile.lock, go.sum, etc.) to extract all direct and transitive dependencies with pinned versions
   - Identify the package manifest (package.json, requirements.txt, pyproject.toml, go.mod, etc.) to distinguish direct vs. transitive deps

2. **Classify each outdated dependency**
   - **Patch** (x.y.Z): bug fixes only — safe to upgrade immediately
   - **Minor** (x.Y.z): new features, backward-compatible — low risk
   - **Major** (X.y.z): potentially breaking — requires investigation
   - Flag any packages with known CVEs regardless of semver level

3. **Detect conflicts before recommending upgrades**
   - Identify peer dependency mismatches (e.g., plugin requires React 17, project uses React 18)
   - Find diamond dependency problems where two packages require incompatible versions of a shared dep
   - Note any packages that are pinned for a documented reason (check comments, README, CHANGELOG)

4. **Research breaking changes for major upgrades**
   - For each major version bump, list specific breaking API changes relevant to the project's actual usage
   - Check migration guides, changelogs, and codemods if available
   - Estimate migration effort: Low (rename import), Medium (refactor API call sites), High (architectural change)

5. **Build the upgrade sequence**
   - Order upgrades to avoid cascading breakage:
     1. Security patches first (any semver level)
     2. Patch bumps with no dependents on the upgraded package
     3. Minor bumps in dependency order (leaf nodes before root nodes)
     4. Major bumps, lowest-risk first, one at a time
   - Group packages that must be upgraded together (e.g., babel core + plugins, eslint + plugins)
   - Flag upgrades that should be isolated to their own PR/commit

6. **Identify packages to defer or skip**
   - Packages with no upgrade path (abandoned, requires Node version you can't change)
   - Packages where the upgrade cost exceeds current risk
   - Packages locked by a framework's peer dep constraints

## Output Format

Produce a structured upgrade plan with these sections:

**Summary Table** — One row per direct dependency:
| Package | Current | Latest | Type | Risk | Action |
|---------|---------|--------|------|------|--------|
| lodash | 4.17.15 | 4.17.21 | patch | Low | Upgrade now |

**Security Alerts** — Bulleted list of CVE-affected packages with CVE IDs and severity, placed before all other recommendations.

**Upgrade Batches** — Numbered batches in recommended execution order:
- Batch name and rationale
- List of packages with exact target versions
- Commands to run (e.g., `npm install react@18.3.1 react-dom@18.3.1`)
- Test checkpoints between batches

**Breaking Changes Reference** — For each major bump:
- Before/after code snippet showing the API change
- Scope of impact (how many files/call sites are affected)
- Link to official migration guide if available

**Defer List** — Packages explicitly recommended to skip this cycle with a one-line reason each.

Length scales with project size: small projects (< 20 deps) fit in one response; large projects should be broken into phases.
