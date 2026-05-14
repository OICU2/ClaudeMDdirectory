---
name: release-notes-generation
category: developer
description: >
  Compiles merged pull requests, resolved issues, and commit history between two version tags into structured, user-facing release notes. Use when someone says "generate release notes," asks to "document what changed between versions," wants to "write a changelog for this release," needs to "summarize changes since the last tag," or requests to "prepare release documentation."
tags: [release-notes, changelog, git, versioning, documentation]
author: community
---

# Release Notes Generation

This skill produces structured, user-facing release notes by analyzing git history, merged pull requests, and resolved issues between two version tags.

## Workflow

1. **Identify version range** — Confirm the two tags or refs being compared (e.g., `v1.2.0` to `v1.3.0`). If not provided, default to the latest tag and `HEAD`.

2. **Gather raw data** — Collect the following between the two refs:
   - Merged pull requests (title, number, author, labels)
   - Resolved/closed issues referenced in commits or PRs
   - Raw commit log (`git log v1.2.0..v1.3.0 --oneline --merges`)

3. **Categorize changes** — Sort entries into these buckets based on labels, prefixes (feat/fix/chore), or content:
   - **New Features** — user-visible additions
   - **Bug Fixes** — resolved defects
   - **Performance Improvements** — speed or efficiency gains
   - **Breaking Changes** — anything requiring user action to upgrade
   - **Deprecations** — features flagged for future removal
   - **Internal / Chores** — dependency updates, refactors, CI changes (collapse or omit unless requested)

4. **Rewrite for users** — Transform technical commit messages into plain, benefit-oriented language. Remove ticket numbers and internal jargon unless the audience is developers. Preserve PR/issue numbers as references.

5. **Flag breaking changes prominently** — Any breaking change must appear at the top of the notes with a clear ⚠️ callout, regardless of category.

6. **Include metadata** — Add release date, version number, and a contributors list derived from PR authors.

7. **Handle gaps** — If history is sparse or commits are poorly described, note what data was available and flag items that need manual review.

## Output Format

Produce a Markdown document with this structure:

```markdown
# Release Notes — v[VERSION]

**Released:** YYYY-MM-DD

## ⚠️ Breaking Changes
- [Change description] ([#PR or issue number](link))

## New Features
- [User-benefit description] ([#number](link))

## Bug Fixes
- [What was broken and is now fixed] ([#number](link))

## Performance Improvements
- [What got faster/lighter and by how much if known] ([#number](link))

## Deprecations
- [What is deprecated and what to use instead] ([#number](link))

## Internal Changes
- [Brief summary or collapsed list] ([#number](link))

## Contributors
@username1, @username2, @username3

---
Full changelog: [v1.2.0...v1.3.0](repo-compare-url)
```

- Omit any section that has no entries.
- Keep each bullet to 1–2 sentences maximum.
- Use plain English; avoid implementation details unless the audience is explicitly developers.
- If breaking changes exist, prepend the entire notes with a one-line summary warning before the first heading.
