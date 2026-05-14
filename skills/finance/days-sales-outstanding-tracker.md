---
name: days-sales-outstanding-tracker
description: >
  Calculates Days Sales Outstanding (DSO) trends across reporting periods and evaluates receivables aging buckets against target thresholds to identify deteriorating collection performance. Use when someone says "our collections are slowing down," asks about receivables aging, wants to track DSO over time, needs to flag overdue accounts, or is analyzing cash conversion cycle health.
category: finance
tags: [accounts-receivable, dso, collections, working-capital, cash-flow]
author: community
---

# Days Sales Outstanding Tracker

This skill calculates DSO by period, benchmarks results against targets, and flags aging buckets that signal collection deterioration — used whenever someone needs to diagnose receivables health or track collection performance trends.

## DSO Analysis Workflow

### 1. Collect Required Inputs
Request the following data if not provided:
- Ending accounts receivable balance per period
- Net credit sales (or total revenue if credit sales unavailable) per period
- Number of days in each period
- DSO target or industry benchmark (default to 30/45/60 days if unspecified)
- Aging bucket data: Current, 1–30, 31–60, 61–90, 90+ days past due

### 2. Calculate DSO Per Period
Use the standard formula:
```
DSO = (Ending AR / Net Credit Sales) × Number of Days in Period
```
- Calculate for each available period (monthly, quarterly, or trailing 12 months)
- Also compute rolling 3-period average DSO to smooth volatility
- Flag any period where DSO exceeds target by more than 10%

### 3. Identify DSO Trend
- Compare current DSO to prior period and same period prior year (YoY)
- Classify trend as: Improving / Stable / Deteriorating
  - Deteriorating: DSO increased >5 days period-over-period OR >10 days YoY
  - Stable: Within ±5 days of target
  - Improving: DSO decreased >5 days period-over-period

### 4. Analyze Aging Buckets
Calculate each bucket as a percentage of total AR:
- **Current (not yet due):** Healthy baseline — flag if declining below 60%
- **1–30 DPD:** Acceptable — flag if exceeding 20% of total AR
- **31–60 DPD:** Caution zone — flag if exceeding 10% of total AR
- **61–90 DPD:** Risk zone — flag if exceeding 5% of total AR
- **90+ DPD:** Critical — flag any balance; recommend reserve assessment

Apply a **Bucket Stress Score**:
- 0–1 buckets flagged = Green
- 2 buckets flagged = Yellow
- 3+ buckets flagged = Red

### 5. Root Cause Prompts
When deterioration is detected, surface likely causes:
- Sudden DSO spike → check for large single invoice or billing dispute
- Gradual DSO creep → suggest credit policy or collections process review
- 90+ DPD growth → recommend bad debt reserve increase and escalation list
- Seasonal pattern → compare to same period prior years before escalating

### 6. Benchmark Comparison
If industry or internal target is provided:
- Calculate variance: `DSO Variance = Actual DSO − Target DSO`
- Express as days and as a percentage of target
- Estimate working capital impact: `WC Impact = DSO Variance × (Annual Revenue / 365)`

## Output Format

Produce a structured analysis with the following sections:

**DSO Summary Table**
| Period | AR Balance | Net Sales | Days | DSO | Target | Variance | Trend |
(Include all periods provided; highlight deteriorating periods)

**Rolling Average DSO:** [X days over last 3 periods]

**Aging Bucket Analysis**
| Bucket | Balance | % of AR | Threshold | Status |
(Use ✅ / ⚠️ / 🔴 for status)

**Bucket Stress Score:** [Green / Yellow / Red] — [X of 5 buckets flagged]

**Key Findings** (3–5 bullet points)
- Lead with the most critical issue
- Include specific numbers and period references
- Note YoY comparison if data allows

**Working Capital Impact**
