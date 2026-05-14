---
name: feature-flag-dependency-audit
description: >
  Scans a codebase to identify feature flags with interdependencies, stale states, or conflicting configurations that could cause unexpected production behavior. Use when someone says "our feature flags are a mess," asks about cleaning up old flags, or wants to audit feature toggles for hidden dependencies. Also activates when someone reports unexpected behavior tied to feature flags or needs to safely remove a flag.
category: developer
tags: [feature-flags, audit, technical-debt, configuration, debugging]
author: community
---

# Feature Flag Dependency Audit

This skill analyzes feature flag definitions, usages, and interdependencies across a codebase to surface stale flags, circular dependencies, and risky flag combinations before they cause production incidents.

## Audit Workflow

### 1. Discover All Feature Flags
- Search for flag definitions in config files (JSON, YAML, TOML), environment variables, database seeds, and flag management SDKs (LaunchDarkly, Unleash, Flagsmith, etc.)
- Search code for common patterns: `isEnabled()`, `getFlag()`, `featureFlags.`, `FEATURE_*`, `FF_*`, `flags[`, `flagsmith.isFeatureEnabled`
- Build a complete inventory: flag name, type (boolean/multivariate), default value, and file location

### 2. Map Flag Usages and Dependencies
- For each flag, find every call site in the codebase
- Detect flag-on-flag dependencies: cases where one flag's branch checks another flag
- Detect implicit dependencies: flags that gate the same component, route, or data path
- Note flags referenced in tests vs. flags never referenced in tests

### 3. Classify Each Flag by State
- **Active**: recently modified or clearly tied to an ongoing rollout
- **Stale**: flag is hardcoded to one state everywhere, or last modified >90 days ago with no open work item
- **Zombie**: flag defined but never read in application code
- **Conflicting**: two flags that when both enabled produce contradictory behavior
- **Circular**: Flag A's enabled path checks Flag B, which checks Flag A

### 4. Assess Risk Per Flag
For each stale or dependent flag, assign risk level:
- **High**: flag controls auth, payments, data writes, or schema migrations
- **Medium**: flag controls UI flows or API responses used by other services
- **Low**: flag controls cosmetic UI or logging behavior

### 5. Generate Removal Safety Check
For any flag recommended for removal:
- List every file that must be edited
- Identify which branch (enabled or disabled) becomes the permanent behavior
- Flag any database migrations, config deletions, or SDK console changes required
- Note whether removal requires a coordinated deploy or can be done incrementally

## Output Format

Produce a structured markdown report with these sections:

**Summary Table**
| Flag Name | State | Risk | Dependents | Recommendation |
|-----------|-------|------|------------|----------------|
| `flag_name` | Stale/Active/Zombie | High/Med/Low | flag_b, flag_c | Remove / Keep / Investigate |

**Dependency Graph** (text-based)
```
flag_new_checkout
  └── requires: flag_new_payment_flow
        └── conflicts with: flag_legacy_cart
```

**Stale Flag Removal Checklist**
For each stale flag, a numbered list of exact steps to safely remove it, including file paths and the permanent behavior to preserve.

**Risk Highlights**
Bullet list of the top 3–5 most dangerous flag states found, with a one-sentence explanation of the failure scenario each could cause.

Keep the report scannable. Use code blocks for flag names and file paths. Flag counts and locations must be exact, not estimated.
