---
name: feature-flag-cleanup-audit
description: >
  Audits a codebase to identify stale, permanently-enabled, or dead feature flags that can be safely removed to reduce conditional branching and technical debt. Use when someone says "our feature flags are a mess," asks about cleaning up old flags, wants to find flags that are always on or always off, needs to reduce technical debt from feature toggles, or is wondering which feature flags can be deleted.
category: developer
tags: [feature-flags, technical-debt, code-cleanup, refactoring, audit]
author: community
---

# Feature Flag Cleanup Audit

This skill scans the codebase for stale, permanently-enabled, or obsolete feature flags and produces a prioritized removal plan with safe refactoring guidance.

## Audit Workflow

### 1. Discover Flag Definitions
- Search for flag definition patterns: config files, constants, enums, database seed files, environment variables
- Common patterns to grep: `FLAG_`, `FEATURE_`, `ff_`, `toggle_`, `isEnabled`, `featureFlag`, `feature_flag`
- Check: `config/`, `constants/`, `.env.example`, `seeds/`, `settings.py`, `application.yml`, `flags.ts`

### 2. Classify Each Flag
For every flag found, determine its status:
- **Always ON**: Flag is hardcoded `true`, set to `true` in all environments, or the `false` branch is unreachable
- **Always OFF**: Flag is hardcoded `false`, never set to `true` anywhere, or commented out
- **Dead**: Flag is defined but never referenced in application code
- **Active**: Flag varies by environment or user cohort — leave these alone
- **Undetermined**: Insufficient context; flag for manual review

### 3. Trace Flag Usage
- For each non-active flag, find all call sites using grep/search
- Map the call sites to understand which code path is live and which is dead
- Note whether removal requires deleting an `if` block, inverting logic, or inlining the enabled path

### 4. Assess Removal Safety
For each stale flag, evaluate:
- Is the "enabled" code path fully tested?
- Are there database migrations, API contracts, or external dependencies tied to the flag?
- Does removal affect rollback capability for a recent release?
- Is there a ticket, PR, or comment referencing the flag's intended cleanup date?

### 5. Prioritize Removals
Rank flags by:
1. **High**: Always ON with no rollback risk — safe to inline immediately
2. **Medium**: Always OFF or dead — delete the dead branch, verify tests pass
3. **Low**: Undetermined or tied to external systems — flag for team review

## Output Format

Produce a structured report with the following sections:

---

### Feature Flag Audit Report

**Summary**
- Total flags found: N
- Always ON (safe to inline): N
- Always OFF / Dead (safe to delete): N
- Active (no action needed): N
- Requires manual review: N

---

**Flags to Remove — High Priority**

| Flag Name | Location | Status | Action |
|-----------|----------|--------|--------|
| `FLAG_NEW_CHECKOUT` | `config/flags.ts:12` | Always ON | Inline enabled path, delete conditional |

For each flag include:
- Exact file paths and line numbers of definition and all call sites
- The specific refactor: which branch to keep, which to delete, whether to invert any logic
- A one-line code example showing before/after if the change is non-obvious

---

**Flags to Remove — Medium Priority**

Same table format as above.

---

**Flags Requiring Manual Review**

List flag name, reason for uncertainty, and the question the team needs to answer before proceeding.

---

**Suggested Cleanup Order**

Numbered list of flags in recommended removal sequence, accounting for dependencies between flags.

---

**Notes**
- Call out any flags that appear in external systems (LaunchDarkly, Unleash, Statsig) that must also be archived there
- Warn if any flag removal would affect a feature currently in A/B testing or gradual rollout
