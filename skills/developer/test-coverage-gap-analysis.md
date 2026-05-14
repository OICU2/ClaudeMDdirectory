---
name: test-coverage-gap-analysis
category: developer
description: >
  Audits an existing codebase to identify untested critical paths, high-risk modules, and missing edge cases, then generates a prioritized remediation plan. Use when someone says "our tests aren't covering everything," asks about finding gaps in test coverage, wants to know which parts of the codebase are undertested, needs to improve test quality before a release, or wants to identify high-risk untested code paths.
tags: [testing, coverage, quality, audit, risk-analysis]
author: community
---

# Test Coverage Gap Analysis

Scans a codebase to surface untested critical paths, risky modules, and missing edge cases, then produces a prioritized action plan to close those gaps.

## Analysis Workflow

### 1. Gather Coverage Baseline
- Request or locate existing coverage reports (lcov, Istanbul, coverage.py, JaCoCo, etc.)
- If no report exists, identify the test runner and instruct how to generate one: `npm run test -- --coverage`, `pytest --cov`, `go test -cover`, etc.
- Note overall line, branch, function, and statement percentages as the baseline

### 2. Identify High-Risk Modules
Scan the codebase and flag files/modules that meet any of these criteria:
- **Complexity**: cyclomatic complexity > 10 (look for deeply nested conditionals, long functions)
- **Business criticality**: auth, payments, data persistence, external API calls, security logic
- **Churn rate**: files modified frequently in git history (`git log --oneline -- <file>`)
- **Dependency centrality**: imported by many other modules
- **Error handling paths**: catch blocks, fallback logic, retry mechanisms

### 3. Map Untested Critical Paths
For each high-risk module with low coverage:
- List public functions/methods with 0% or <50% branch coverage
- Identify error paths (exceptions, null returns, edge inputs) with no test
- Flag integration points (DB calls, HTTP requests, message queues) lacking tests
- Note any conditional branches where only the happy path is tested

### 4. Detect Missing Edge Cases
For each function under test, check for absence of tests covering:
- Empty inputs (null, undefined, empty string, empty array)
- Boundary values (0, -1, MAX_INT, very large payloads)
- Concurrent or race-condition scenarios
- Partial failure states (third-party timeout, partial DB write)
- Permission/role boundary conditions
- Malformed or adversarial input

### 5. Prioritize Gaps
Assign each gap a priority score using this matrix:

| Priority | Criteria |
|----------|----------|
| **P0 – Critical** | Untested auth, payments, data corruption paths, or security logic |
| **P1 – High** | Untested error handling in core business logic; high-churn files <50% coverage |
| **P2 – Medium** | Missing edge cases in stable but important modules |
| **P3 – Low** | Utility functions, display logic, or rarely-changing code with no tests |

### 6. Generate Remediation Plan
For each P0 and P1 gap, produce a concrete test stub or describe exactly what the test must assert. For P2/P3, provide grouped recommendations.

## Output Format

Produce a structured report with these sections:

---

### Coverage Summary
- Current overall coverage: `XX%` (line/branch/function)
- Total files analyzed: N
- Files with <50% coverage: N
- Files with 0% coverage: N

---

### High-Risk Untested Modules
A table listing:
| File | Coverage % | Risk Factors | Untested Functions |
|------|------------|--------------|-------------------|

---

### Critical Path Gaps (P0/P1)
For each gap:
```
File: src/payments/charge.ts
Function: processRefund()
Gap: No test for partial refund failure — catch block at line 87 is unreachable in tests
Risk: Data inconsistency if payment provider returns 207 partial success
Suggested test:
  it('should roll back order state when refund partially fails', () => { ... })
  Assert: order.status === 'refund_failed', audit log entry created
```

---

### Edge Case Gaps (P2/P3)
