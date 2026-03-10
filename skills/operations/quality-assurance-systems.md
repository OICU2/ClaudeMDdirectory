---
name: quality-assurance-systems
category: operations
description: >
  Designs and implements end-to-end QA processes that systematically catch defects before they reach customers. Use when someone says "we keep shipping bugs," asks about setting up a QA process, wants to reduce production incidents, needs to build a testing strategy, or is trying to improve release confidence.
tags: [qa, testing, quality, processes, defect-prevention]
author: community
---

# Quality Assurance Systems

This skill builds structured QA pipelines and processes that intercept errors at every stage of development and delivery, from code commit to production release.

## QA System Design Process

**1. Audit the Current State**
- Map where bugs are currently found (dev, staging, prod, customer reports)
- Identify the top 3-5 recurring defect categories (logic errors, edge cases, integration failures, data issues, UX problems)
- Measure defect escape rate: what percentage of bugs reach customers vs. get caught internally

**2. Define Quality Gates**
Assign a gate to each development phase:
- **Pre-commit:** Linting, type checks, unit tests (must pass locally before push)
- **PR/code review:** Peer review checklist, automated test suite, coverage thresholds (e.g., 80% minimum)
- **Staging/integration:** End-to-end tests, regression suite, smoke tests on every deploy
- **Pre-release:** Manual exploratory testing on critical paths, performance benchmarks, accessibility checks
- **Post-release:** Monitoring dashboards, error rate alerts, canary deployments or feature flags

**3. Build the Test Pyramid**
- **Unit tests (70%):** Fast, isolated, test single functions or components
- **Integration tests (20%):** Test service-to-service interactions, API contracts, database queries
- **E2E tests (10%):** Simulate real user flows through the full stack

**4. Establish Defect Triage Rules**
- Severity 1 (data loss, security, complete outage): Fix before any other work, deploy within hours
- Severity 2 (major feature broken, no workaround): Fix within current sprint
- Severity 3 (minor feature degraded, workaround exists): Schedule in backlog
- Document every escaped defect with a 5-why root cause and a process fix

**5. Automate the Feedback Loop**
- CI/CD pipeline blocks merges on failing tests
- Flaky test tracker: any test failing intermittently >2x gets quarantined and fixed
- Weekly quality metrics review: defect escape rate, test coverage trend, mean time to detect (MTTD)

**6. Create a QA Runbook**
Document for every release:
- What was tested and by whom
- What was explicitly not tested and why
- Known risks and mitigations
- Rollback procedure and trigger conditions

## Output Format

Produce a QA System Plan with these sections:

1. **Current State Assessment** — 3-5 bullet points identifying specific gaps and escape points
2. **Quality Gate Definitions** — A table with columns: Stage | Gate Criteria | Owner | Blocking or Advisory
3. **Test Strategy** — Breakdown of test types, tooling recommendations (e.g., Jest, Pytest, Cypress, Playwright), and coverage targets
4. **Defect Triage Matrix** — Table with severity levels, definitions, response SLAs, and examples
5. **Automation Checklist** — Ordered list of CI/CD checks to implement, from highest to lowest ROI
6. **Metrics Dashboard** — 4-6 specific KPIs to track weekly (with baseline targets)
7. **30-Day Implementation Roadmap** — Week-by-week milestones to stand up the system without blocking current work

Length: Comprehensive but scannable. Use tables and bullet points. Each section should be actionable enough to hand to an engineer or team lead immediately.