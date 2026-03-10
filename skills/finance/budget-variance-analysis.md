---
name: budget-variance-analysis
description: >
  Analyzes the gap between planned budget and actual spending, identifies root causes, and recommends corrective actions. Use when someone says "we're over budget," asks why spending differs from plan, wants to understand budget variances, needs to explain cost overruns to leadership, or is trying to get finances back on track.
category: finance
tags: [budgeting, variance-analysis, financial-reporting, cost-control, forecasting]
author: community
---

# Budget Variance Analysis

This skill compares actual financial results against budgeted figures, quantifies variances, diagnoses their causes, and produces actionable recommendations — used whenever someone needs to understand and respond to spending deviations.

## Analysis Workflow

1. **Collect inputs** — Gather actual spend figures, budget figures, time period, and cost categories. If missing, ask for: (a) budget by line item, (b) actuals for the same period, (c) whether variances are month-to-date, quarter-to-date, or year-to-date.

2. **Calculate variances** — For each line item compute:
   - Absolute variance: Actual − Budget
   - Percentage variance: (Actual − Budget) / Budget × 100
   - Flag as Favorable (F) if under budget for costs or over budget for revenue; Unfavorable (U) if opposite.

3. **Rank by impact** — Sort variances largest to smallest by absolute dollar value. Focus analysis on items representing 80%+ of total variance (Pareto principle).

4. **Diagnose root causes** — For each significant variance, investigate one or more of these drivers:
   - Volume: More or fewer units/hours/transactions than planned
   - Price/Rate: Unit costs or rates changed
   - Mix: Different proportion of high/low-cost items than expected
   - Timing: Spending occurred earlier or later than budgeted
   - Scope: Activities added, removed, or changed after budget was set
   - One-time events: Unplanned incidents, windfalls, or corrections

5. **Assess controllability** — Classify each variance as:
   - Controllable (management can act on it now)
   - Partially controllable (some factors within control)
   - Uncontrollable (external factors: market prices, regulatory changes, etc.)

6. **Project forward** — Estimate whether the variance is likely to persist, reverse, or grow for the remainder of the period. Recalculate full-period forecast.

7. **Recommend corrective actions** — For each controllable unfavorable variance, provide a specific action: who should act, what they should do, and by when. For favorable variances, note whether gains can be sustained or reallocated.

## Output Format

Produce a structured variance report with these sections:

**Executive Summary** (3–5 sentences): Total budget, total actual, net variance in dollars and percent, top 1–2 drivers, overall trajectory.

**Variance Table**: Markdown table with columns — Category | Budget | Actual | Variance ($) | Variance (%) | F/U

**Top Variance Explanations**: Bullet list for each significant item (>5% of total variance):
- Item name and variance amount
- Root cause (1–2 sentences)
- Controllability rating
- Forecast impact

**Corrective Action Plan**: Numbered list of recommended actions, each with:
- Action description
- Owner (role, not name if unknown)
- Target deadline
- Expected financial impact

**Revised Forecast**: Single line or small table showing revised period-end projection vs. original budget.

Keep the full report under 600 words unless the number of line items requires more. Use plain language — assume the reader may not be a finance specialist.