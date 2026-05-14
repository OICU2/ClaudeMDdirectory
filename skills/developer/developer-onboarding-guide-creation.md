---
name: developer-onboarding-guide-creation
description: >
  Drafts a comprehensive new-engineer onboarding document covering repo setup, architecture overview, coding conventions, deployment process, and key contacts. Use when someone says "create an onboarding guide for new developers," asks about "how to help new engineers get up to speed," wants to "document our setup process for new hires," needs to "reduce ramp-up time for new team members," or requests "a guide to help new devs understand our codebase."
category: developer
tags: [onboarding, documentation, developer-experience, team-setup, engineering]
author: community
---

# Developer Onboarding Guide Creation

This skill produces a structured, ready-to-use onboarding document for new engineers, covering everything from first-day setup to deployment workflows, so new hires can become productive quickly.

## Onboarding Guide Workflow

1. **Gather context before writing.** Ask for: tech stack, repo URLs, team size, deployment platform, preferred communication tools, and any existing partial documentation. If the user can't provide specifics, insert clearly marked placeholders like `[INSERT VALUE]`.

2. **Structure the guide in this exact order:**
   - Welcome & purpose statement (2–3 sentences explaining the team's mission)
   - Prerequisites (accounts to create, software to install before day one)
   - Repository setup (clone commands, branch strategy, environment variable setup, local run instructions)
   - Architecture overview (system diagram description or ASCII layout, major components and how they interact, key data flows)
   - Coding conventions (language style guide reference, linting/formatting tools and how to run them, commit message format, PR process and review expectations)
   - Testing (how to run unit/integration tests, where tests live, coverage requirements)
   - Deployment process (environments: dev/staging/prod, deployment commands or CI/CD pipeline steps, rollback procedure)
   - Troubleshooting (5–10 common first-week issues with solutions)
   - Key contacts (names/roles/Slack handles for: tech lead, DevOps, product manager, security, on-call rotation)
   - First-week checklist (checkbox list of tasks new hire should complete days 1–5)

3. **Write for a day-one engineer.** Assume familiarity with general software development but zero knowledge of this specific codebase, team, or infrastructure.

4. **Be explicit, not implicit.** Write out full commands (e.g., `git clone git@github.com:org/repo.git`), not descriptions of commands. Include expected outputs where helpful.

5. **Flag gaps.** If the user hasn't provided information needed for a section, include the section with a `⚠️ TODO:` callout explaining what needs to be filled in and by whom.

6. **Add a "Last Updated" line and owner field** at the top so the document doesn't go stale without accountability.

## Output Format

Produce a single Markdown document with:
- H1 title: `# [Team/Project Name] Engineer Onboarding Guide`
- Metadata block at top: Last Updated, Document Owner, Target Audience
- Each major section as an H2 heading
- Sub-steps as numbered lists or H3s
- All shell commands in fenced code blocks with language tags (e.g., ` ```bash `)
- First-week checklist as a Markdown checkbox list (`- [ ] item`)
- Key contacts in a Markdown table (Name | Role | Contact | Timezone)
- Length: 600–1200 words of actual content, not counting code blocks
- Tone: direct, friendly, practical — written as if from a senior engineer to a colleague
