---
name: service-cold-path-coverage-audit
description: >
  Analyzes a service codebase to identify error-handling branches, fallback logic, and failure
  scenarios that lack test coverage. Use when someone says "audit our error path coverage,"
  asks about "untested failure scenarios," wants to "find gaps in cold path testing," needs to
  "check fallback coverage before deploying," or is worried about "uncovered edge cases in
  production." Produces a prioritized report of risky untested paths with remediation guidance.
category: developer
tags: [testing, coverage, error-handling, reliability, audit]
author: community
---

# Service Cold Path Coverage Audit

Scans service code for error-handling, fallback, and failure paths that lack test coverage, then produces a prioritized risk report before production deployment.

## Audit Workflow

1. **Identify cold path constructs** — Scan the codebase for the following patterns:
   - `catch` / `except` / `rescue` blocks
   - `if err != nil` or equivalent null/error checks
   - Fallback assignments (`?? fallback`, `|| default`, `getOrElse`)
   - Retry logic, circuit breaker triggers, timeout handlers
   - Dead-letter queue handlers and compensating transactions
   - Feature flag `else` branches
   - HTTP 4xx/5xx response handlers
   - Graceful degradation paths (e.g., cache miss fallbacks, partial response returns)

2. **Map paths to existing tests** — For each cold path found:
   - Search test files for references to the surrounding function, class, or module
   - Check whether any test forces the error condition (e.g., mocked failure, injected exception, simulated timeout)
   - Mark the path as **covered**, **partially covered** (happy path only), or **uncovered**

3. **Assess risk per untested path**:
   - **Critical**: path handles data loss, security failure, payment error, or service crash
   - **High**: path handles external dependency failure or user-facing error response
   - **Medium**: path handles degraded functionality or non-fatal retries
   - **Low**: path handles logging, metrics, or internal diagnostics

4. **Generate test stubs for top gaps** — For each Critical or High gap, produce a minimal test stub showing:
   - How to inject the failure condition
   - What assertion should verify correct handling
   - Which mock/fixture is needed

5. **Summarize deployment risk** — Provide a one-paragraph verdict on whether the untested cold paths represent acceptable risk for the upcoming deployment.

## Output Format

Produce a structured report with these sections:

```
## Cold Path Coverage Audit Report

**Service:** <name>
**Files Scanned:** <count>
**Cold Paths Found:** <count>
**Untested Paths:** <count> (<percentage>%)

---

### 🔴 Critical Gaps (<count>)

| # | File | Function | Path Description | Risk Reason |
|---|------|----------|-----------------|-------------|
| 1 | auth/token.go | RefreshToken | catch on DB timeout returns stale token | Data integrity risk |

**Suggested Test Stub:**
\```language
// test stub here
\```

---

### 🟠 High Gaps (<count>)
[Same table format]

### 🟡 Medium Gaps (<count>)
[Same table format — no stubs]

### 🟢 Low Gaps (<count>)
[Bulleted list only]

---

### Deployment Risk Verdict
<One paragraph assessing whether untested paths are acceptable for production deployment,
with a clear recommendation: HOLD, DEPLOY WITH MONITORING, or CLEAR TO DEPLOY.>
```

- Limit test stubs to Critical and High gaps only
- Flag any cold path where the fallback silently swallows errors with a ⚠️ **Silent Failure** label
- If coverage tooling data (e.g., lcov, coverage.py output) is provided, use line numbers to confirm coverage status precisely
