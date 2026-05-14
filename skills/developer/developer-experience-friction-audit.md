---
name: developer-experience-friction-audit
description: >
  Analyzes a codebase and development environment to identify friction points slowing down engineers and produces a prioritized improvement backlog. Use when someone says "our dev setup is painful," asks about improving developer productivity, wants to reduce build times or test feedback loops, complains that onboarding new engineers takes too long, or wants to audit their tooling and local development experience.
category: developer
tags: [developer-experience, productivity, tooling, build-optimization, dx]
author: community
---

# Developer Experience Friction Audit

Conducts a systematic audit of local setup, build pipelines, test feedback loops, and tooling to surface DX pain points and deliver a prioritized improvement backlog.

## Audit Workflow

### 1. Inventory the Development Environment
- Examine `README`, `CONTRIBUTING`, and setup scripts for onboarding complexity
- Count manual steps required to go from `git clone` to running the app
- Identify missing or outdated documentation that would block a new engineer
- Note required tools, versions, and whether version management (nvm, asdf, mise) is in use

### 2. Analyze Build Performance
- Locate build configuration files (Webpack, Vite, Gradle, Makefile, Bazel, etc.)
- Identify cold build vs. incremental build distinctions
- Flag missing caching layers (no `--cache`, no remote cache, no build artifact reuse)
- Check for unnecessary sequential steps that could run in parallel
- Estimate or measure build time if scripts are available

### 3. Evaluate Test Feedback Loops
- Find test runner configuration and measure or estimate full suite runtime
- Identify whether watch mode, fast-fail, or targeted test running is supported
- Flag tests with no isolation (shared state, real network calls, real DB) that slow or flake
- Check for missing test scripts for common patterns (unit, integration, e2e split)

### 4. Inspect Tooling and Automation
- Review CI configuration (GitHub Actions, CircleCI, Jenkins, etc.) for redundant steps
- Check for missing or misconfigured linters, formatters, and pre-commit hooks
- Identify manual processes that could be scripted (DB seeding, env setup, mock data)
- Evaluate `.env` management — are secrets scattered, undocumented, or require manual copying?

### 5. Score Each Finding
Rate every identified issue on two axes:
- **Impact**: How many engineers are affected and how frequently (Daily = High, Occasional = Medium, Rare = Low)
- **Effort to fix**: Lines of config, hours of work, or team coordination required (Small / Medium / Large)

Prioritize: High Impact + Small Effort first ("quick wins"), then High Impact + Large Effort ("strategic investments").

## Output Format

Produce a structured audit report with the following sections:

---

**DX Friction Audit Report**

**Summary**
2–4 sentence executive summary of overall DX health and the most critical bottleneck.

**Findings**

| # | Area | Finding | Impact | Fix Effort | Priority |
|---|------|---------|--------|------------|----------|
| 1 | Setup | No automated env bootstrap script | High | Small | 🔴 Quick Win |
| 2 | Build | No incremental build caching configured | High | Medium | 🟠 Strategic |
| 3 | Tests | Full suite takes >10 min with no watch mode | High | Small | 🔴 Quick Win |
| ... | | | | | |

**Prioritized Improvement Backlog**

List items grouped by priority tier:

🔴 **Quick Wins** (High Impact, Low Effort)
- [Specific, actionable fix with one-line implementation hint]

🟠 **Strategic Investments** (High Impact, Higher Effort)
- [Specific fix with recommended approach or tool]

🟡 **Nice to Haves** (Lower Impact or speculative)
- [Brief description]

**Recommended First 3 Actions**
Numbered list of the three changes that will deliver the fastest, most felt improvement to the team.

---

Report length scales with codebase size: small projects warrant 1–2 pages; large monorepos may require 4–5 pages. Every finding must include a concrete, specific recommendation — no finding should end with "consider improving this."
