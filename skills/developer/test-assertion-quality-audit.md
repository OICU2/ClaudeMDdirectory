---
name: test-assertion-quality-audit
description: >
  Audits test suites to identify weak, missing, or tautological assertions that undermine meaningful coverage. Use when someone says "my tests feel hollow," asks about improving test quality, wants to find gaps in their test assertions, needs to review whether tests actually verify behavior, or is concerned that tests pass but bugs still slip through.
category: developer
tags: [testing, code-quality, assertions, coverage, tdd]
author: community
---

# Test Assertion Quality Audit

Analyzes test suites to surface assertions that are absent, redundant, trivially true, or insufficiently specific, then provides concrete fixes to make tests meaningful.

## Audit Workflow

1. **Scan for tautological assertions** — Find assertions that always pass regardless of implementation: `assert True`, `assertEqual(x, x)`, assertions on hardcoded literals that match the input, or tests with no assertions at all (silent passes).

2. **Identify missing assertions** — For each test, check what behavior is being exercised versus what is being verified. Flag cases where:
   - Side effects (DB writes, API calls, file changes) are triggered but never checked
   - Return values are computed but never asserted
   - Error paths are entered but exception type/message goes unverified
   - Object state changes after a method call but fields are never inspected

3. **Detect weak specificity** — Flag assertions that are correct but too loose to catch regressions:
   - `assertIsNotNone(result)` when the structure of `result` should be checked
   - `assertIn(item, collection)` when count or order matters
   - `assertTrue(len(x) > 0)` instead of asserting exact length or contents
   - Checking only one field of a multi-field response object

4. **Spot over-mocked tests** — Identify tests where mocks replace so much real behavior that the assertion only verifies the mock was called, not that the system does anything correct.

5. **Check assertion-to-behavior ratio** — Flag tests that exercise complex branching logic but have fewer assertions than branches, meaning some paths are untested by any check.

6. **Propose concrete fixes** — For every flagged issue, provide a specific replacement assertion or a minimal code snippet showing what should be added.

## Output Format

Produce a structured audit report with these sections:

**Summary**
- Total tests reviewed
- Count of issues by category (tautological, missing, weak, over-mocked)
- Overall assertion quality score (High / Medium / Low) with one-line rationale

**Findings Table**
For each issue:
| File | Test Name | Issue Type | Description | Suggested Fix |

**Top 3 Priority Fixes**
The three changes that would most improve real defect detection — each with before/after code snippets of 5–15 lines.

**Patterns to Address Globally**
2–4 recurring anti-patterns found across the suite with a one-paragraph recommendation for each, including any helper utilities or assertion libraries that would help (e.g., `pytest-assert-rewrite`, `assertpy`, custom matchers).

Keep findings actionable and scoped to real test files provided. Do not invent issues not present in the code.
