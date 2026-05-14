---
name: code-ownership-mapping
description: >
  Analyzes a repository's directory structure and commit history to generate a CODEOWNERS file draft that assigns clear ownership boundaries to teams or individuals. Use when someone says "who owns this code", asks about setting up code ownership, or wants to define review responsibilities across their codebase. Also activates when someone needs to create a CODEOWNERS file, wants to map teams to directories, or asks how to enforce code review by area.
category: developer
tags: [codeowners, git, repository, ownership, code-review]
author: community
---

# Code Ownership Mapping

This skill analyzes repository structure and commit history to generate a CODEOWNERS file draft with ownership assignments for directories and critical files, then explains the ownership rationale.

## Ownership Mapping Workflow

1. **Inspect repository structure**: List top-level directories and key files (e.g., `Makefile`, `Dockerfile`, `*.config.*`, CI/CD files). If the user provides a tree output or file list, use it directly.

2. **Gather commit history signals**: Ask the user to run `git log --format="%ae %s" --name-only | head -200` if history is available, or request a summary of which teams/people work in which areas. Use this to infer ownership from contribution frequency.

3. **Identify ownership candidates**: For each major directory and critical file, determine the most likely owner using:
   - Contributor frequency from commit history
   - Directory names that imply team ownership (e.g., `frontend/`, `infra/`, `billing/`)
   - Explicit team or person names the user provides

4. **Handle ambiguous ownership**:
   - Flag directories with no clear owner using a `# UNASSIGNED` comment
   - Flag directories with multiple heavy contributors as shared ownership with a `# DISPUTED` note
   - Never silently guess — surface uncertainty explicitly

5. **Apply CODEOWNERS syntax rules**:
   - Use GitHub CODEOWNERS format by default (`@org/team-name` or `@username`)
   - Ask whether the repo uses GitHub, GitLab, or Bitbucket if not obvious — adjust syntax accordingly
   - List more specific paths after more general ones (later rules override earlier in GitHub format)
   - Always include a catch-all `*` rule at the top pointing to a default owner or leaving it blank with a comment

6. **Review completeness**: Before finalizing, confirm:
   - All top-level directories are covered
   - CI/CD files (`.github/`, `.gitlab-ci.yml`, `Jenkinsfile`) have an owner
   - Infrastructure and deployment files are assigned
   - Documentation directories are assigned

## Output Format

Produce three sections:

**1. CODEOWNERS file** — fenced code block using `# .github/CODEOWNERS` as the header comment:
```
# .github/CODEOWNERS

# Default owner for everything not explicitly matched below
*   # UNASSIGNED — set a default owner here

# Frontend
/frontend/   @org/frontend-team

# Backend services
/services/   @org/backend-team
/api/        @org/backend-team

# Infrastructure & CI
/.github/    @org/platform-team
/infra/      @org/platform-team
/terraform/  @org/platform-team

# Billing (disputed — both @alice and @org/payments-team contribute heavily)
/billing/    @org/payments-team  # DISPUTED

# Docs
/docs/       @org/tech-writing
```

**2. Ownership summary table** — markdown table with columns: `Path`, `Assigned Owner`, `Confidence`, `Notes`
- Confidence values: `High`, `Medium`, `Low`
- Notes explain rationale or flag gaps

**3. Recommended next steps** — bullet list of 3–5 actions:
- Which unassigned paths need a decision
- Whether to enforce required reviews in branch protection
- How to validate the file using `git check-attr` or the GitHub CODEOWNERS validator
- Suggested review cadence for ownership accuracy
