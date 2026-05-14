---
name: test-flakiness-root-cause-report
description: >
  Analyzes test suite history to identify flaky tests, classify their failure causes, and generate targeted fixes or quarantine recommendations. Use when someone says their tests are randomly failing, asks why CI keeps breaking intermittently, wants to find unreliable tests in their suite, needs to investigate non-deterministic test behavior, or wants a flakiness audit of their test infrastructure.
category: developer
tags: [testing, ci-cd, debugging, reliability, test-automation]
author: community
---

# Test Flakiness Root Cause Report

This skill analyzes test history, logs, and code to identify flaky tests, classify failure root causes, and produce actionable fixes or quarantine decisions.

## Analysis Workflow

1. **Collect test history data** — Ask for or inspect CI logs, test run outputs, or failure reports. Request at minimum 10 runs worth of data. Accept JUnit XML, JSON reports, raw logs, or pasted output.

2. **Identify flaky candidates** — Flag any test that has both passed and failed across runs without code changes. Calculate a flakiness rate: `(failure_count / total_runs) * 100`.

3. **Classify each flaky test by root cause category:**
   - **Timing/async** — timeouts, race conditions, sleep-based waits, event ordering issues
   - **State pollution** — shared global state, database leftovers, uncleaned fixtures, test ordering dependencies
   - **External dependencies** — network calls, third-party APIs, file system, environment variables
   - **Resource contention** — port conflicts, thread safety, parallel test interference
   - **Date/time sensitivity** — tests that break near midnight, month boundaries, or use `Date.now()` directly
   - **Randomness** — unseeded random values, shuffled collections, non-deterministic ordering
   - **Infrastructure** — flaky Docker containers, memory pressure, slow CI runners

4. **Inspect the test code** — For each flagged test, examine the implementation for evidence matching the classified cause. Look for: missing `await`, hardcoded timeouts, shared singletons, direct network calls, `Math.random()`, system clock usage.

5. **Generate a fix recommendation** — For each test, produce one of:
   - **Fix**: Specific code change to eliminate flakiness (preferred)
   - **Quarantine**: Isolate the test with a skip tag and tracking ticket if the fix requires significant refactoring
   - **Delete**: Recommend removal if the test provides no reliable signal and cannot be fixed cheaply

6. **Prioritize by impact** — Rank tests by flakiness rate × team disruption (high-frequency CI failures rank highest).

## Output Format

Produce a structured report with these sections:

**Summary Table** (Markdown table)
| Test Name | File | Flakiness Rate | Root Cause Category | Recommendation |
|-----------|------|---------------|---------------------|----------------|

**Per-Test Detail** (one block per flaky test)
```
### [Test Name]
- File: path/to/test.ts:line
- Flakiness Rate: X% (N failures / M runs)
- Root Cause: [category] — [1-sentence explanation of why]
- Evidence: [specific line or pattern in the code that confirms the cause]
- Fix: [concrete code change, diff format preferred] OR Quarantine: [skip tag + ticket template] OR Delete: [reason]
- Effort: Low / Medium / High
```

**Quarantine List** — A copy-paste ready block of test names to skip immediately, formatted for the project's test runner (Jest, pytest, RSpec, etc.).

**Prevention Recommendations** — 3–5 systemic changes to prevent new flaky tests (e.g., enforce `cy.intercept` over real network calls, add lint rule banning `Thread.sleep`, require deterministic seeds).

Keep the report scannable. Use code blocks for all diffs and skip annotations. Flag the top 3 highest-priority fixes prominently.
