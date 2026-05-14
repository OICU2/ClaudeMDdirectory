---
name: deal-close-date-slip-analysis
description: >
  Analyzes historical CRM data to identify patterns in deal close date slippage and scores active opportunities by slip risk. Use when someone says "our deals keep pushing," asks why close dates keep moving, wants to understand forecast accuracy problems, needs to find which deals are at risk of slipping this quarter, or is trying to reduce pipeline sandbag issues.
category: sales
tags: [crm, forecasting, pipeline, risk-scoring, deal-management]
author: community
---

# Deal Close Date Slip Analysis

This skill mines historical CRM opportunity data to surface the root causes of close date slippage and produces a prioritized risk-scoring checklist for every active deal in the pipeline.

## Analysis Workflow

### Step 1: Define the Dataset
- Pull all closed-won and closed-lost opportunities from the last 12–24 months
- Include fields: original close date, final close date, stage history with timestamps, deal size, industry, rep name, number of stage regressions, contact engagement score, days since last activity, number of close date pushes
- Calculate slippage delta: `final_close_date - original_close_date` for each deal

### Step 2: Identify Slip Patterns
Segment slipped deals (delta > 14 days) and analyze frequency of these root causes:
1. **Champion went dark** — no contact activity in 21+ days before slip
2. **Stage regression** — deal moved backward at least one stage
3. **Missing economic buyer** — no executive-level contact logged
4. **Procurement/legal hold** — late-stage stall lasting 30+ days
5. **Competitive displacement** — competitor mentioned in notes within 30 days of original close
6. **Discount requested late** — pricing discussion initiated in final 15% of deal cycle
7. **Multi-stakeholder misalignment** — 3+ contacts with conflicting communication threads
8. **Seasonal/budget freeze** — cluster of slips at quarter-end or fiscal year boundaries

For each cause, calculate: frequency %, average days added to cycle, correlation with deal size tier.

### Step 3: Build the Risk-Scoring Model
Assign point weights based on historical correlation strength:

| Signal | Points |
|---|---|
| No activity in 14+ days | 25 |
| Close date already pushed once | 20 |
| No executive contact on record | 15 |
| Stage regression in last 30 days | 20 |
| Deal age > 2x average sales cycle | 15 |
| Competitor mentioned in last 30 days | 10 |
| Discount request in last 2 weeks | 10 |
| No mutual action plan documented | 5 |

**Score tiers:**
- 0–20: Low risk
- 21–45: Medium risk — monitor weekly
- 46–70: High risk — immediate rep action required
- 71+: Critical — manager escalation recommended

### Step 4: Score Active Pipeline
- Apply the model to every open opportunity
- Flag deals with close dates within 30 days that score 46+
- Sort output by score descending within each close-date bucket

### Step 5: Generate Recommendations
For each risk tier, produce 2–3 specific next actions tied to the highest-scoring signals (e.g., "Re-engage champion with executive sponsor outreach within 48 hours" or "Request mutual close plan document by Friday").

## Output Format

Produce three clearly labeled sections:

**Section 1 — Slip Root Cause Report**
- Ranked table of the top 5 slip causes with: cause name, frequency %, average days slipped, deal-size correlation
- One-sentence insight per cause explaining the business pattern

**Section 2 — Active Deal Risk Scorecard**
- Table with columns: Deal Name | Rep | Close Date | Score | Risk Tier | Top 2 Risk Signals | Recommended Action
- Sorted by score descending; highlight Critical and High rows
- Include a summary line: total deals scored, count per tier, total at-risk ARR

**Section 3 — Forecast Accuracy Recommendations**
- 3–5 process changes ranked by estimated impact on slip reduction
- Each recommendation includes: what to change, who owns it, leading metric to track
- Keep each recommendation to 2–3 sentences maximum
