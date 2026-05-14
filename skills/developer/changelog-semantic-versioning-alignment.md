---
name: changelog-semantic-versioning-alignment
description: >
  Audits changelog entries and release tags to verify they correctly follow semantic versioning conventions based on the nature of changes included. Use when someone says "check if my version bump is correct," asks about whether a release should be major, minor, or patch, wants to verify their changelog follows semver rules, needs to validate version numbers against their changes, or is unsure if breaking changes require a major version. Flags misalignments between change types and version increments.
category: developer
tags: [changelog, semver, versioning, release, audit]
author: community
---

# Changelog Semantic Versioning Alignment

Audits changelog entries and version tags against semantic versioning rules to catch incorrect version bumps before release.

## Audit Workflow

1. **Parse the version bump**: Identify the previous version and the proposed new version, then determine what type of increment was made (major X.0.0, minor 0.X.0, or patch 0.0.X).

2. **Classify each changelog entry** using these strict rules:
   - **Requires MAJOR bump**: Breaking API changes, removed endpoints or parameters, renamed public interfaces, changed return types, dropped support for platforms/languages, behavior changes that break existing integrations.
   - **Requires MINOR bump**: New features, new endpoints, new optional parameters, new public methods, deprecations (with backward compatibility intact), significant performance improvements that expand capability.
   - **Requires PATCH bump only**: Bug fixes, security patches, documentation updates, internal refactors with no public API impact, dependency updates with no behavior change, typo fixes.

3. **Determine the required version bump**: The highest-severity change in the changelog dictates the required version increment. One breaking change overrides all minor and patch changes.

4. **Compare required vs. actual bump**: Check whether the proposed version matches what the change set demands.

5. **Flag misalignments**:
   - Under-bumping (e.g., using patch for a new feature, using minor for a breaking change) — flag as **ERROR**.
   - Over-bumping (e.g., using major for a bug fix with no breaking changes) — flag as **WARNING**.

6. **Check changelog format conventions**:
   - Entries should be categorized under headings: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`.
   - `Removed` and `Changed` entries almost always indicate a major bump is needed — verify each one.
   - Pre-1.0.0 versions follow relaxed rules: minor may contain breaking changes. Note this explicitly if applicable.

## Output Format

Produce a structured audit report with these sections:

**Version Audit Summary**
- Previous version: `X.Y.Z`
- Proposed version: `X.Y.Z`
- Actual increment type: MAJOR / MINOR / PATCH
- Required increment type: MAJOR / MINOR / PATCH
- Verdict: ✅ CORRECT / ❌ UNDER-BUMPED / ⚠️ OVER-BUMPED

**Change Classification Table**
| Entry | Category | Severity Required |
|-------|----------|------------------|
| [changelog entry text] | Fixed / Added / Removed / etc. | PATCH / MINOR / MAJOR |

**Issues Found**
List each misalignment with:
- The specific changelog entry causing the issue
- Why it requires a different version increment
- The corrected version number to use

**Recommendation**
One sentence stating the correct version number and why, or confirming the proposed version is valid.
