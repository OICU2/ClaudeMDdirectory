---
name: test-suite-execution-time-optimizer
category: developer
description: >
  Analyzes CI test run timing data to identify slow test bottlenecks and recommends concrete strategies to reduce pipeline duration. Use when someone says their tests are too slow, asks how to speed up CI, wants to optimize test suite performance, is frustrated with long build times, or needs to identify which tests are bottlenecking their pipeline.
tags: [testing, ci-cd, performance, optimization, developer-productivity]
author: community
---

# Test Suite Execution Time Optimizer

Analyzes test timing data and CI pipeline metrics to pinpoint slow tests and deliver prioritized, actionable recommendations for parallelization, mocking, and test removal.

## Analysis Workflow

### 1. Gather Timing Data
Ask the user to provide one or more of the following:
- Raw CI log output with test durations
- A timing report (JUnit XML, pytest `--durations`, Jest `--verbose`, etc.)
- A description of their test stack and rough total runtime
- Which CI platform they use (GitHub Actions, CircleCI, Jenkins, etc.)

If no data is provided, ask for the top 10–20 slowest tests and total suite duration before proceeding.

### 2. Categorize Tests by Duration
Bucket every test or test file into tiers:
- **Critical (>30s per test):** Immediate action required
- **High (10–30s):** Strong optimization candidate
- **Medium (2–10s):** Worth batching or reviewing
- **Low (<2s):** Acceptable; flag only if count is very high

### 3. Diagnose Root Causes
For each slow test, identify the likely cause:
- **Real I/O:** Network calls, database hits, file system operations — recommend mocking or test doubles
- **Setup/teardown overhead:** Expensive fixtures or environment spinning — recommend shared fixtures or containerized snapshots
- **Missing parallelization:** Sequential execution of independent tests — recommend shard strategies
- **Redundant coverage:** Tests duplicating what unit tests already cover — recommend removal or consolidation
- **Flaky sleeps/waits:** `time.sleep`, `waitFor` polling — recommend event-driven alternatives
- **Large data payloads:** Seeding too much data — recommend minimal fixtures

### 4. Generate Prioritized Recommendations
Rank recommendations by expected time savings × implementation effort:
1. **Quick wins (high impact, low effort):** Enable parallel execution flags, split test files across workers
2. **Medium effort:** Introduce mocks for external services, refactor shared fixtures
3. **Larger refactors:** Remove redundant integration tests, migrate to contract testing
4. **Structural changes:** Move slow tests to a nightly job, implement test impact analysis to skip unaffected tests

For each recommendation, specify:
- The exact test(s) or file(s) affected
- The concrete change to make (with code snippet if applicable)
- Estimated time savings (in seconds or as a percentage)
- Implementation complexity (Low / Medium / High)

### 5. Propose a New Pipeline Architecture
If total suite time exceeds 10 minutes, suggest a tiered pipeline:
- **Tier 1 (fast feedback, <2 min):** Unit tests only, runs on every push
- **Tier 2 (integration, <10 min):** Parallelized, runs on PR
- **Tier 3 (full suite):** Runs pre-merge or nightly

## Output Format

Produce a structured report with these sections:

**Summary Table**
A markdown table listing the top 10 slowest tests/files with: test name, current duration, assigned tier, root cause, and recommended action.

**Prioritized Action Plan**
A numbered list of recommendations, each containing:
- What to change (specific test, file, or config)
- How to change it (1–3 sentence description + code snippet if relevant)
- Expected time savings
- Effort level

**Projected Outcome**
A before/after comparison:
- Current total suite duration
- Projected duration after quick wins
- Projected duration after all recommendations

**Pipeline Architecture Recommendation** *(if applicable)*
A brief description of the proposed tiered pipeline with estimated duration per tier.

Keep the report skimmable: use headers, bullet points, and tables. Avoid prose-heavy paragraphs. Total length should be comprehensive but not padded — cut anything that doesn't help the developer take action
