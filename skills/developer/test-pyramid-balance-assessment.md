---
name: test-pyramid-balance-assessment
category: developer
description: >
  Analyzes the distribution of unit, integration, and end-to-end tests in a codebase and provides
  actionable recommendations to rebalance the test suite for optimal speed, reliability, and coverage.
  Use when someone says their tests are slow, asks about test coverage strategy, wants to improve their
  test suite structure, mentions having too many E2E tests, or is wondering why CI is taking too long.
tags: [testing, quality, ci-cd, coverage, refactoring]
author: community
---

# Test Pyramid Balance Assessment

This skill audits the ratio of unit, integration, and E2E tests in a codebase and recommends specific rebalancing actions to align with the testing pyramid model.

## Assessment Workflow

### 1. Discover and Count Tests
- Scan test files by directory, naming convention, and framework markers
- Categorize each test file as unit, integration, or E2E based on:
  - **Unit**: No I/O, no network, no DB; mocks external dependencies; fast (<100ms)
  - **Integration**: Hits real DB, filesystem, or internal services; moderate speed
  - **E2E**: Drives a browser or full stack; slow (seconds per test)
- Count total tests per category and compute percentages

### 2. Compare Against Pyramid Targets
Apply these target ratios as the baseline:
- Unit: **~70%**
- Integration: **~20%**
- E2E: **~10%**

Flag imbalances:
- E2E > 20%: over-reliance on slow tests, high flakiness risk
- Unit < 50%: insufficient fast feedback loop
- Integration < 10%: likely missing boundary/contract coverage
- Unit > 90%: possible under-testing of integration points

### 3. Identify Root Causes
For each imbalance, diagnose likely causes:
- Heavy E2E bias → teams lacking unit testing culture or testing through the UI as a shortcut
- Low integration coverage → mocking everything, missing real database/service contract bugs
- Low unit count → complex tightly-coupled code that is hard to test in isolation

### 4. Generate Specific Recommendations
For each imbalance, produce concrete actions:
- Which test files or test types to convert (e.g., "Convert 15 login-flow E2E tests to unit tests for the auth module")
- Which untested units need new unit tests added
- Which integration boundaries lack contract tests
- Prioritize by effort-to-impact ratio

### 5. Estimate Impact
For each recommendation, estimate:
- Approximate CI time reduction (if applicable)
- Coverage delta
- Flakiness risk reduction

## Output Format

Produce a structured report with these sections:

**1. Current Distribution**
A table showing test counts and percentages per category:
```
| Category    | Count | Percentage | Target |
|-------------|-------|------------|--------|
| Unit        |  120  |    48%     |  70%   |
| Integration |   85  |    34%     |  20%   |
| E2E         |   45  |    18%     |  10%   |
```

**2. Imbalance Summary**
2–4 bullet points identifying the key imbalances and their severity (minor / moderate / severe).

**3. Prioritized Recommendations**
Numbered list of 3–6 specific, actionable recommendations. Each includes:
- What to do
- Which files or test areas are affected
- Expected benefit (speed / coverage / reliability)

**4. Quick Wins**
2–3 high-impact, low-effort changes that can be made immediately.

**5. Suggested Target State**
A revised distribution table showing realistic near-term targets given the codebase size.

Keep the report under 600 words. Use tables and bullets — no prose paragraphs.
