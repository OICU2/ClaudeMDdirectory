---
name: changelog-entry-generation
description: >
  Generates structured changelog entries from git commit history, pull request titles, and diff summaries following conventional changelog formats. Use when someone says "update the changelog", asks to "document what changed in this release", wants to "generate release notes from commits", needs to "write a changelog entry for this PR", or is trying to "summarize changes since the last version".
category: developer
tags: [changelog, git, release-notes, versioning, conventional-commits]
author: community
---

# Changelog Entry Generation

This skill produces formatted changelog entries from git history, PR titles, or diff summaries, grouping changes by type and version following Keep a Changelog and Conventional Commits conventions.

## Workflow

1. **Gather raw material** — Ask for or inspect: git log output, PR titles/descriptions, diff summaries, or a plain list of changes. If none are provided, request `git log --oneline` output or a list of changes.

2. **Extract change intent** — For each commit or PR, identify:
   - The change type: `feat`, `fix`, `docs`, `refactor`, `perf`, `test`, `chore`, `breaking`
   - The affected scope (e.g., `auth`, `api`, `ui`, `deps`)
   - A plain-English summary of what changed and why it matters to users

3. **Classify into changelog categories**:
   - **Added** → new features (`feat`)
   - **Changed** → modifications to existing behavior (`refactor`, `perf`, `chore` with user impact)
   - **Deprecated** → features marked for future removal
   - **Removed** → deleted features or endpoints
   - **Fixed** → bug fixes (`fix`)
   - **Security** → vulnerability patches
   - Omit pure internal changes (test additions, CI tweaks) unless specifically requested

4. **Determine version and date** — Use the provided version number and today's date. If no version is given, use `[Unreleased]`.

5. **Deduplicate and consolidate** — Merge commits that address the same feature or fix into a single entry. Remove noise (merge commits, typo fixes, minor formatting).

6. **Flag breaking changes** — Prefix any breaking changes with `⚠ BREAKING CHANGE:` and list them first within their category.

7. **Write entries in user-facing language** — Each entry should describe impact, not implementation. Avoid internal jargon, file paths, or ticket IDs unless explicitly requested.

## Output Format

Produce a markdown block ready to paste into `CHANGELOG.md`:

```markdown
## [1.4.0] - 2024-11-15

### Added
- Support for OAuth 2.0 authentication via the `/auth/oauth` endpoint
- New `--dry-run` flag for the deploy command to preview changes without applying them

### Changed
- ⚠ BREAKING CHANGE: `createUser()` now requires an `email` field; `username`-only calls will return 400
- Improved query performance for paginated list endpoints by 40%

### Fixed
- Resolved crash when uploading files larger than 2 GB on Windows
- Fixed incorrect UTC offset applied to scheduled job timestamps

### Security
- Patched XSS vulnerability in markdown rendering (CVE-2024-XXXX)
```

**Rules for the output:**
- Always include the version header with date, or `[Unreleased]` if unknown
- Use `###` for category headers, `##` for version headers
- Each bullet starts with a capital letter, no trailing period
- Keep each entry to one line unless a brief (1-sentence) clarification is essential
- List categories only if they have entries; omit empty sections
- If multiple versions are being documented, separate them with a blank line and order newest first
