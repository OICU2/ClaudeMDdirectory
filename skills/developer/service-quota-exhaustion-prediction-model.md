---
name: service-quota-exhaustion-prediction-model
description: >
  Analyzes historical API usage trends to forecast when rate limits or service quotas will be exhausted and recommends mitigation actions. Use when someone says "we're going to hit our API limits," asks about forecasting quota usage, wants to predict when their rate limits will run out, needs to understand service quota burn rate, or is worried about service disruption from exhausted limits.
category: developer
tags: [api-management, quota-forecasting, rate-limits, capacity-planning, observability]
author: community
---

# Service Quota Exhaustion Prediction Model

This skill analyzes historical API or service usage data to model exhaustion timelines, identify risk windows, and generate prioritized mitigation recommendations before limits are breached.

## Analysis Workflow

### 1. Collect Usage Data
- Request the following inputs: current quota limits (per second/minute/hour/day/month), historical usage samples with timestamps, current billing period start date, and any known upcoming traffic spikes (launches, campaigns, batch jobs).
- If raw data is unavailable, ask for summary statistics: average daily usage, peak usage, and usage from the same period in prior cycles.

### 2. Compute Key Metrics
- **Current consumption rate**: units used / time elapsed in billing period
- **Burn rate**: rolling average over last 7 and 30 days (or available window)
- **Trend slope**: linear regression on usage-over-time to detect acceleration or deceleration
- **Days to exhaustion (DTE)**: `(quota_limit - units_used) / daily_burn_rate`
- **Peak-adjusted DTE**: recalculate DTE using 95th-percentile daily usage instead of mean
- **Quota utilization %**: `units_used / quota_limit * 100`

### 3. Classify Risk Level
| Risk Level | Criteria |
|---|---|
| 🔴 Critical | DTE ≤ 7 days OR utilization > 90% |
| 🟠 High | DTE 8–21 days OR utilization 75–90% |
| 🟡 Medium | DTE 22–45 days OR utilization 50–75% |
| 🟢 Low | DTE > 45 days AND utilization < 50% |

### 4. Identify Contributing Factors
- Flag any single endpoint, service, or consumer consuming >30% of total quota
- Detect anomalous spikes (usage > 2x rolling average in any window)
- Note if growth rate is compounding vs. linear
- Check if quota resets mid-period and model post-reset trajectory

### 5. Generate Mitigation Recommendations
Prioritize recommendations by impact and implementation effort:

**Immediate (implement within 24–48 hours):**
- Throttle or queue the highest-volume non-critical consumers
- Enable request caching for idempotent calls
- Request emergency quota increase if DTE < 7 days

**Short-term (implement within 1–2 weeks):**
- Implement exponential backoff and retry logic with jitter
- Add per-client or per-feature rate limiting in application layer
- Set up alerting at 70%, 85%, and 95% quota utilization thresholds

**Strategic (implement before next billing cycle):**
- Evaluate quota tier upgrade or alternative service regions
- Batch or aggregate requests to reduce call volume
- Audit and deprecate unused or redundant API calls
- Implement circuit breakers for non-essential integrations

## Output Format

Produce a structured report with the following sections:

```
## Quota Exhaustion Forecast Report

**Service / API:** [name]
**Analysis Date:** [date]
**Billing Period:** [start] → [end]

### Current Status
- Quota Limit: [X units / period]
- Units Used: [Y] ([Z]% utilized)
- Units Remaining: [N]
- Burn Rate (7-day avg): [X units/day]
- Burn Rate (30-day avg): [X units/day]

### Exhaustion Forecast
| Scenario | Days to Exhaustion | Projected Date |
|---|---|---|
| Average burn rate | X days | YYYY-MM-DD |
| Peak-adjusted (P95) | X days | YYYY-MM-DD |
|
