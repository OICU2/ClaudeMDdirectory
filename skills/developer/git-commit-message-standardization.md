---
name: git-commit-message-standardization
category: developer
description: >
  Analyzes staged git changes and generates structured commit messages that follow
  Conventional Commits specification and project-specific conventions. Use when someone
  says "write a commit message", asks to "commit these changes", wants to "standardize
  my commits", needs help "describing what I changed", or says "generate a git commit".
tags: [git, commits, conventional-commits, version-control, developer-workflow]
author: community
---

# Git Commit Message Standardization

Inspects staged git changes and produces well-structured, conventional commit messages tailored to the project's existing commit style.

## Workflow

1. **Inspect staged changes** — Run `git diff --staged` to review all staged file changes. If nothing is staged, run `git status` and `git diff` to see unstaged changes and inform the user.

2. **Detect project conventions** — Run `git log --oneline -20` to sample recent commit history. Identify:
   - Commit format in use (Conventional Commits, Angular, plain imperative, etc.)
   - Scope patterns (e.g., `feat(auth):`, `fix(api):`)
   - Capitalization style (sentence case, lowercase, title case)
   - Ticket/issue reference patterns (e.g., `JIRA-123`, `#456`)

3. **Classify the change type** — Based on diff content, assign the appropriate type:
   - `feat` — new feature or capability
   - `fix` — bug fix
   - `refactor` — code restructuring without behavior change
   - `docs` — documentation only
   - `test` — test additions or corrections
   - `chore` — build, config, dependency updates
   - `perf` — performance improvement
   - `style` — formatting, whitespace, no logic change
   - `ci` — CI/CD pipeline changes

4. **Determine scope** — Identify the affected module, component, or directory from the diff. Use the project's existing scope naming patterns. Omit scope if the project history does not use scopes.

5. **Write the subject line** — Follow these rules:
   - Imperative mood, present tense ("add", not "added" or "adds")
   - Max 72 characters
   - No trailing period
   - Match detected capitalization style

6. **Write the body (when needed)** — Include a body if:
   - The change is non-obvious or has important context
   - There are multiple logical changes bundled together
   - A breaking change exists (append `BREAKING CHANGE:` footer)
   - Separate body from subject with one blank line
   - Wrap lines at 72 characters

7. **Add footers** — Include `Closes #N`, `Fixes #N`, or issue references only if the user provides an issue number or one is detectable from branch name (`git branch --show-current`).

8. **Offer alternatives** — Provide 2–3 commit message variants if the change is ambiguous or spans multiple concerns, ranked by best fit.

## Output Format

Produce a fenced code block containing the ready-to-use commit message:

```
feat(auth): add OAuth2 token refresh on expiry

Automatically retry failed requests when a 401 response is received
by refreshing the access token and replaying the original request.
Prevents users from being logged out during active sessions.

Closes #312
```

Follow the code block with:
- **Type rationale**: one sentence explaining the chosen type and scope
- **Alternatives** (if applicable): 2 additional variants as separate fenced blocks, each with a one-line label explaining the trade-off
- **Breaking change warning**: if detected, call it out explicitly before the code block with a `⚠️ BREAKING CHANGE` label

Do not include setup instructions, git command tutorials, or explanations of Conventional Commits unless the user asks.
