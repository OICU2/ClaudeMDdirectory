---
name: feature-branch-to-release-note-generator
description: >
  Aggregates merged feature branch commit messages and PR descriptions into a structured,
  user-facing release note draft. Use when someone says "generate release notes," asks to
  "summarize what shipped in this release," wants to "turn these commits into a changelog,"
  needs to "draft release notes from merged PRs," or says "what changed in this version."
category: developer
tags: [release-notes, changelog, git, documentation, versioning]
author: community
---

# Feature Branch to Release Note Generator

Transforms raw git commit messages and PR descriptions from merged feature branches into a clean, user-facing release note draft organized by impact and category.

## Workflow

1. **Collect source material** — Ask for one or more of: git log output (`git log --merges --oneline`), a list of PR titles and descriptions, branch names, or a raw commit list. If none is provided, generate a `git log` command the user can run and paste back.

2. **Parse and deduplicate** — Extract unique changes, strip internal noise (e.g., "fix typo," "merge conflict resolution," "bump version," "WIP"), and consolidate related commits that touch the same feature.

3. **Classify each change** into one of these categories:
   - 🚀 **New Features** — net-new capabilities visible to users
   - ⚡ **Improvements** — enhancements to existing functionality
   - 🐛 **Bug Fixes** — resolved defects or unexpected behaviors
   - 🔒 **Security** — vulnerability patches or auth/permission changes
   - ⚠️ **Breaking Changes** — anything requiring user action or migration
   - 🧹 **Internal / Dependencies** — refactors, upgrades, CI changes (include only if relevant)

4. **Rewrite for end users** — Convert technical commit language into plain, benefit-focused sentences. Lead with the user impact, not the implementation detail. Example: `refactor auth middleware to use JWT` → `Login sessions are now more secure and faster to validate.`

5. **Infer version context** — If a version number or release date is available, include it in the header. If not, leave a `[VERSION]` and `[DATE]` placeholder.

6. **Flag ambiguities** — If a commit is unclear or could belong to multiple categories, add an inline `<!-- TODO: verify category -->` comment rather than guessing silently.

## Output Format

Produce a Markdown document with the following structure:

```
## Release Notes — v[VERSION] ([DATE])

### 🚀 New Features
- **[Feature Name]**: [One sentence describing user benefit.]

### ⚡ Improvements
- [One sentence per improvement, leading with the affected area.]

### 🐛 Bug Fixes
- Fixed an issue where [symptom], which caused [user impact].

### ⚠️ Breaking Changes
- **[Change]**: [What changed, who is affected, and what action is required.]

### 🔒 Security
- [Brief description without exposing vulnerability details.]

---
_Full changelog: [LINK]_
```

- Omit any section that has no entries.
- Each bullet is one to two sentences maximum.
- Use plain English; avoid internal jargon, ticket numbers, and branch names in final copy.
- Append a `## Raw Source Summary` section at the end listing how many commits were processed, how many were filtered out, and any items flagged for review.
