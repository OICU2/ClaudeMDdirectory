---
name: technical-debt-assessment
description: >
  Analyzes a codebase to catalog technical debt items, estimate remediation effort, and produce a prioritized refactoring roadmap. Use when someone says "we have too much technical debt," asks about cleaning up legacy code, wants to assess code quality before a major release, needs to plan a refactoring sprint, or wants to know what parts of the codebase to tackle first.
category: developer
tags: [technical-debt, refactoring, code-quality, architecture, maintenance]
author: community
---

# Technical Debt Assessment

This skill systematically scans a codebase to identify, categorize, and prioritize technical debt items, then produces an actionable remediation roadmap with effort estimates.

## Assessment Workflow

### 1. Scope the Codebase
- Ask for the root directory or accept the current working directory
- Identify the language(s), frameworks, and approximate size (file count, LOC)
- Note any areas the user has flagged as problematic up front

### 2. Catalog Debt by Category
Scan files and collect evidence for each debt type:

**Code Smells**
- Long methods (>50 lines), large classes (>300 lines), deep nesting (>3 levels)
- Duplicated logic — flag file paths and approximate line numbers
- God objects, feature envy, inappropriate intimacy between modules

**Architectural Debt**
- Missing or violated layering (e.g., DB calls in UI components)
- Circular dependencies between modules or packages
- Hardcoded configuration values that should be externalized
- Missing or inadequate abstraction boundaries

**Test Debt**
- Files or modules with zero test coverage
- Tests that are skipped, commented out, or always passing trivially
- Missing integration or contract tests on critical paths

**Dependency Debt**
- Outdated dependencies (check package manifests: package.json, requirements.txt, pom.xml, go.mod, etc.)
- Deprecated APIs in use
- Pinned-to-exact or unpinned wildcard versions

**Documentation Debt**
- Public APIs or exported functions with no docstrings or comments
- Outdated README sections that reference removed features
- Missing architectural decision records (ADRs) for non-obvious choices

**Security & Compliance Debt**
- Known vulnerable dependency versions (flag for manual CVE check)
- Secrets or credentials stored in code or config files
- Missing input validation on entry points

### 3. Score Each Item
For every identified debt item assign:
- **Severity**: Critical / High / Medium / Low
  - Critical = blocks releases, causes production incidents, or poses security risk
  - High = causes frequent developer friction or bugs
  - Medium = slows velocity but is manageable
  - Low = cosmetic or minor improvement
- **Effort**: XS (< 2h) / S (< 1d) / M (1–3d) / L (1–2w) / XL (> 2w)
- **Risk to fix**: Low / Medium / High (likelihood of introducing regression)

### 4. Build the Prioritized Roadmap
- Sort by a priority score: weight Severity × (1 / Effort) — high severity, low effort items surface first
- Group items into three phases:
  - **Phase 1 — Quick Wins** (Critical/High severity + XS/S effort): address within current sprint
  - **Phase 2 — Structural Fixes** (High/Medium severity + M/L effort): plan into next 1–2 quarters
  - **Phase 3 — Long-term Investments** (Medium/Low severity + L/XL effort): backlog with periodic review
- Flag any items where fixing debt is a prerequisite for another item (dependency ordering)

### 5. Recommend Process Changes
Based on patterns found, suggest up to 5 guardrails to prevent debt recurrence (e.g., linting rules, required test coverage thresholds, dependency update cadence, PR checklist items).

## Output Format

Produce a Markdown report with the following sections:

```
# Technical Debt Assessment — [Project Name]
Date: YYYY-MM-DD | Scope: [directories assessed] | Size: [LOC / file count]

## Executive Summary
- 3–5 bullet points: total items found, breakdown by severity, biggest risk areas, estimated total remediation effort range

## Debt Catalog
