---
name: api-client-sdk-changelog-diff-generator
description: >
  Compares two versions of an API client SDK and generates a structured, human-readable changelog
  that categorizes breaking changes, deprecations, new additions, and bug fixes. Use when someone
  says "what changed between SDK versions", asks to "diff two versions of an API client", wants to
  "generate a changelog from SDK changes", needs to "document breaking changes in a new release",
  or asks to "compare old and new SDK interfaces".
category: developer
tags: [api, sdk, changelog, diff, versioning, breaking-changes]
author: community
---

# API Client SDK Changelog Diff Generator

This skill analyzes two versions of an API client SDK and produces a structured changelog that clearly separates breaking changes, deprecations, additions, and fixes so developers can understand upgrade impact at a glance.

## Diff Analysis Workflow

1. **Identify inputs**: Accept two SDK versions as file paths, directory trees, code snippets, or version tags. Confirm which is the old version and which is the new version before proceeding.

2. **Extract the public API surface** from each version:
   - Exported classes, interfaces, and types
   - Public methods and their signatures (name, parameters, return types)
   - Exported constants and enums
   - Constructor signatures
   - HTTP endpoint paths and HTTP methods (if applicable)
   - Required vs. optional fields on request/response types

3. **Classify every change** into exactly one category:
   - **Breaking Changes**: Removed exports, renamed methods/classes, changed parameter types, changed return types, added required parameters, changed HTTP methods or endpoint paths, removed enum values
   - **Deprecations**: Methods/fields marked `@deprecated`, items flagged in JSDoc or Python docstrings with deprecation notices, replaced-but-still-present items
   - **New Additions**: New exported classes, methods, types, or endpoints that did not exist in the old version
   - **Behavior Changes**: Same signature but documented behavior change (error handling, default values, rate limits)
   - **Bug Fixes**: Corrections to previously broken behavior, type fixes that were clearly wrong

4. **For each change, capture**:
   - The exact symbol name (e.g., `client.getUser()`, `UserResponse.id`)
   - Old signature or value (if applicable)
   - New signature or value (if applicable)
   - Migration path or recommended replacement (for breaking changes and deprecations)

5. **Assess overall upgrade severity**:
   - **Major**: Any breaking changes present
   - **Minor**: Only additions and deprecations
   - **Patch**: Only bug fixes and behavior corrections

6. **Flag migration effort** for breaking changes: estimate whether each breaking change requires a find-and-replace fix, a logic rewrite, or a data model migration.

## Output Format

Produce a Markdown document with the following structure:

```markdown
# SDK Changelog: v{OLD_VERSION} → v{NEW_VERSION}

**Upgrade Severity**: Major | Minor | Patch
**Breaking Changes**: {count} | **Deprecations**: {count} | **Additions**: {count}

---

## ⚠️ Breaking Changes

### {SymbolName}
- **Type**: Removed | Renamed | Signature Changed | Required Field Added
- **Before**: `{old signature or value}`
- **After**: `{new signature or value}`
- **Migration**: {Concrete step to fix — include code snippet if helpful}

---

## 🔶 Deprecations

### {SymbolName}
- **Replacement**: `{new preferred symbol}`
- **Removal Target**: {version or timeline if stated}
- **Migration**: {How to switch to the replacement}

---

## ✅ New Additions

- `{SymbolName}` — {One-line description of what it does}

---

## 🔧 Behavior Changes

### {SymbolName}
- **Change**: {What behaves differently}
- **Impact**: {Who is affected and how}

---

## 🐛 Bug Fixes

- `{SymbolName}` — {What was wrong and what is now correct}

---

## Migration Summary

{2–4 sentence plain-English summary of the most important things a developer must do to upgrade successfully. Call out the highest-effort breaking changes explicitly.}
```

- If a section has no entries
