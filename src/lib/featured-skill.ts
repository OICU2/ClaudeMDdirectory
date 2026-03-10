export const FEATURED_SKILL_MD = `---
name: smart-commit
description: >
  Writes a clean, conventional git commit message from your staged
  changes. Trigger on: "commit", "write a commit message",
  "generate commit", or "what should my commit say".
category: developer
tags: [git, commits, developer]
---

# Smart Commit

When you say **"commit"** or **"write a commit message"**, analyze
the staged diff and write a conventional commit message.

## Format

\`\`\`
type(scope): short description under 72 chars

Optional body — only if the change needs context.
\`\`\`

**Types:** feat · fix · docs · refactor · test · chore

## Rules

- Be specific. "fix(auth): handle null token on login" not "fix bug"
- Scope is the affected module or file — keep it short
- Body only when the *why* isn't obvious from the diff
- No period at end of subject line

## After writing

Print the commit message in a code block, then ask:
> Run \`git commit -m\` with this message? (yes / no)

If yes — execute it. If no — ask what to change.`;
