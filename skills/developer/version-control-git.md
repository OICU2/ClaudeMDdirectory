---
name: version-control-git
description: >
  Provides expert Git workflows for source control, branching strategies, and team collaboration. Use when someone says "help me with Git", asks about branching or merging, wants to set up a repository, needs to resolve merge conflicts, or is working on a pull request workflow.
category: developer
tags: [git, version-control, branching, collaboration, devops]
author: community
---

# Git Version Control Skill

This skill guides developers through Git operations, branching strategies, merge conflict resolution, and collaborative workflows using industry best practices.

## Core Git Workflow

### Repository Setup
1. Initialize with `git init` or clone with `git clone <url>`
2. Configure identity: `git config user.name` and `git config user.email`
3. Set up `.gitignore` before first commit using language-appropriate templates
4. Establish remote: `git remote add origin <url>`

### Branching Strategy
- Use `main` or `master` as the protected production branch
- Create feature branches: `git checkout -b feature/<short-description>`
- Use naming conventions: `feature/`, `fix/`, `hotfix/`, `release/`, `chore/`
- Keep branches short-lived — merge within days, not weeks
- Delete branches after merging: `git branch -d <branch>`

### Daily Workflow
1. Pull latest changes before starting: `git pull origin main --rebase`
2. Make atomic commits — one logical change per commit
3. Write meaningful commit messages using the format:
   ```
   <type>(<scope>): <short summary>

   <optional body explaining why, not what>
   ```
   Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
4. Stage selectively: `git add -p` to review hunks before committing
5. Push feature branch: `git push origin feature/<name>`

### Merging and Rebasing
- **Merge** (preserves history): `git merge --no-ff feature/<name>`
- **Rebase** (linear history): `git rebase main` from feature branch
- Squash messy commits before merging: `git rebase -i HEAD~<n>`
- Never rebase shared/public branches

### Resolving Merge Conflicts
1. Identify conflicted files: `git status`
2. Open each file — resolve between `<<<<<<<`, `=======`, `>>>>>>>` markers
3. Stage resolved files: `git add <file>`
4. Complete merge: `git commit` or `git rebase --continue`
5. Use a visual tool if needed: `git mergetool`

### Collaboration Workflow (Pull Request Model)
1. Push feature branch to remote
2. Open Pull Request/Merge Request against `main`
3. Request reviewers; address feedback with new commits
4. Squash or merge once approved
5. Delete remote branch after merge: `git push origin --delete feature/<name>`

### Useful Recovery Commands
- Undo last commit (keep changes): `git reset --soft HEAD~1`
- Discard unstaged changes: `git restore <file>`
- Stash work in progress: `git stash push -m "description"`
- Find lost commits: `git reflog`
- Undo a pushed commit safely: `git revert <commit-hash>`

## Output Format

For each Git task, Claude produces:

1. **Situation assessment** — one sentence identifying what the user is trying to accomplish
2. **Step-by-step commands** — exact shell commands in fenced code blocks, in execution order
3. **Explanation** — one sentence per command explaining what it does and why
4. **Warnings** — any destructive or irreversible operations flagged with ⚠️
5. **Next step suggestion** — one follow-up action to keep momentum

For branching strategy questions, produce a named strategy (e.g., GitHub Flow, Gitflow) with a branch diagram in plain text and a concise pros/cons comparison. Keep total response under 400 words unless conflict resolution or complex rebasing requires more detail.