---
name: cross-service-error-budget-burn-report
description: >
  Aggregates error budget consumption across multiple services and identifies which are at risk of exhausting their SLO budget before the current window closes. Use when someone asks about error budget status, wants to know which services are burning through their SLO, needs a multi-service reliability health check, is concerned about SLO breach risk, or wants to understand error budget burn rates across their platform.
category: developer
tags: [slo, error-budget, reliability, observability, sre]
author: community
---

# Cross-Service Error Budget Burn Report

Analyzes error budget consumption rates across all tracked services and produces a prioritized risk report showing which services are on track to breach their SLO within the current measurement window.

## Workflow

1. **Identify the measurement window**: Confirm the SLO window (rolling 30-day, calendar month, or custom). Default to rolling 30 days if unspecified.

2. **Collect per-service inputs**: For each service, gather or prompt for:
   - SLO target (e.g., 99.9% availability)
   - Total requests or events in the window so far
   - Current error count or error rate
   - Time elapsed in the window (as a percentage)

3. **Calculate error budget metrics per service**:
   - **Total error budget allowed** = `(1 - SLO target) × total_requests`
   - **Budget consumed** = `actual_errors / total_error_budget_allowed × 100%`
   - **Burn rate** = `budget_consumed_% / time_elapsed_%` (1.0 = on pace, >1.0 = burning faster than allowed)
   - **Projected budget exhaustion** = `100% / burn_rate × time_elapsed_%` expressed as % of window elapsed when budget runs out
   - **Remaining budget** = `total_error_budget - actual_errors` (in absolute error count and as %)

4. **Classify each service by risk tier**:
   - 🔴 **Critical**: Burn rate ≥ 2.0 or projected exhaustion before 80% of window
   - 🟠 **At Risk**: Burn rate 1.2–1.99 or projected exhaustion between 80–100% of window
   - 🟡 **Watch**: Burn rate 1.0–1.19 (on pace but no margin)
   - 🟢 **Healthy**: Burn rate < 1.0

5. **Sort services** by burn rate descending (highest risk first).

6. **Identify patterns**: Note if multiple services share a common dependency, deployment window, or upstream provider that correlates with elevated burn.

7. **Generate actionable recommendations** for each Critical and At-Risk service:
   - If burn rate spiked recently: suggest investigating recent deployments or config changes
   - If burn is gradual: suggest capacity review or reliability investment
   - If close to breach: suggest temporarily reducing traffic, enabling feature flags, or freezing deploys

## Output Format

Produce a structured report with these sections:

```
# Error Budget Burn Report
**Window**: [window type and dates]
**Generated**: [timestamp]
**Services Analyzed**: [count]

---

## Executive Summary
[2–3 sentences: how many services are healthy vs. at risk, and the single most urgent action needed]

---

## Service Risk Rankings

| Service | SLO Target | Budget Used | Burn Rate | Time Elapsed | Projected Exhaustion | Status |
|---------|-----------|-------------|-----------|--------------|----------------------|--------|
| [name]  | [%]       | [%]         | [x.xx]    | [%]          | [% of window]        | [emoji + tier] |

---

## Critical & At-Risk Services — Detail

### 🔴 [Service Name] (Burn Rate: x.xx)
- **Budget remaining**: X errors / X%
- **At current rate, budget exhausts at**: [% of window elapsed]
- **Likely cause**: [if determinable from data]
- **Recommended action**: [specific, immediate step]

[Repeat for each Critical/At-Risk service]

---

## Healthy Services
[Single-line summary table only — no detail blocks needed]

---

## Cross-Service Observations
[
