---
name: developer-toolchain-onboarding-checklist
description: >
  Builds a comprehensive, step-by-step onboarding checklist for new developers joining a team or project.
  Use when someone says "onboard a new developer," asks about "setting up a new dev environment," wants to
  "create a developer onboarding guide," needs to "get a new engineer up to speed," or asks "what does a
  new developer need to install and configure."
category: developer
tags: [onboarding, developer-experience, checklist, toolchain, setup]
author: community
---

# Developer Toolchain Onboarding Checklist

Generates a structured, role-specific onboarding checklist covering required tools, access credentials, and environment verification steps that a new developer can follow from day one.

## Checklist Generation Workflow

1. **Gather context** — Ask for or infer: tech stack, team role (frontend/backend/fullstack/DevOps), OS preference, and any known internal tools or services.

2. **Structure checklist into phases:**

   ### Phase 1: Accounts & Access
   - List every service requiring account creation or access request (GitHub/GitLab, Jira, Slack, AWS/GCP/Azure, CI/CD dashboards, internal wikis)
   - Note approval dependencies (e.g., "request from IT," "ask team lead")
   - Include SSO/MFA setup steps

   ### Phase 2: Core Tooling Installation
   - Package manager first (Homebrew, Chocolatey, apt)
   - Runtime environments with exact version requirements (Node 20.x, Python 3.11, Java 17, etc.)
   - Version managers where applicable (nvm, pyenv, sdkman)
   - IDE and essential plugins (specify plugin names, not just categories)
   - Docker / container runtime if applicable

   ### Phase 3: Repository Setup
   - SSH key generation and registration steps
   - Clone commands for each required repo
   - Git config (user.name, user.email, commit signing if required)
   - Branch naming conventions and git hooks setup

   ### Phase 4: Environment Configuration
   - `.env` file setup — list required variables with placeholder values
   - Secret manager access (Vault, AWS Secrets Manager, 1Password CLI)
   - Local database setup or connection to shared dev DB
   - Service dependencies (message queues, caches, external APIs in dev mode)

   ### Phase 5: Build & Run Verification
   - Exact commands to install dependencies (`npm install`, `pip install -r requirements.txt`, etc.)
   - Command to run the application locally with expected output
   - Command to run the full test suite with expected pass criteria
   - Health check endpoints or UI screens to confirm working state

   ### Phase 6: Workflow Verification
   - Create a test branch, make a trivial change, open a draft PR
   - Verify CI/CD pipeline triggers and passes
   - Confirm code review access and notification settings

3. **Flag blockers** — Mark any step that requires waiting on another person or team with `⏳ BLOCKED: requires [person/team]`.

4. **Add estimated time** — Attach a time estimate to each phase (e.g., "~30 min").

## Output Format

Produce a Markdown document with:

- **Title:** `# [Project/Team Name] Developer Onboarding Checklist`
- **Metadata block:** Role, OS, Date generated, Estimated total time
- **Six labeled phases** as `## Phase N: [Name]` sections
- Each checklist item as a `- [ ]` task with a one-line description and any inline command formatted as `code`
- Blocker items highlighted with `⏳ BLOCKED:` prefix
- Time estimate at the end of each phase header in parentheses
- A final **Verification Sign-Off** section with 3–5 statements the developer confirms are true before marking onboarding complete

Length: 80–150 checklist items depending on stack complexity. Prefer more granularity over fewer steps.
