---
name: solo-operator-project-type-profitability-ranker
description: >
  Calculates and ranks each project type a solopreneur delivers by net hourly profit, accounting for all time spent and direct expenses, to surface which work is worth pursuing or dropping. Use when someone says "I want to know which projects make me the most money," asks about "which services are actually worth my time," wants to "figure out what to stop doing," mentions "I feel like some work pays better than others," or needs to "prioritize what clients or projects to take on."
category: solopreneur
tags: [profitability, pricing, time-tracking, revenue, solopreneur]
author: community
---

# Solo Operator Project Type Profitability Ranker

This skill extracts data on each project type the solopreneur delivers and computes a net hourly profit ranking so they know exactly which work to pursue, price higher, or decline.

## Data Collection Workflow

**Step 1 — Inventory project types**
Ask the user to list every distinct type of project or service they deliver (e.g., "brand identity package," "monthly retainer," "one-off consulting call," "website build"). Capture each as a separate line item.

**Step 2 — Gather revenue data per type**
For each project type, collect:
- Typical gross revenue per engagement (or monthly, if retainer)
- Average number of these projects delivered per month or year

**Step 3 — Capture ALL time inputs**
For each project type, prompt for every time bucket:
- Client-facing work (calls, delivery, revisions)
- Pre-sale and proposal time (averaged across wins and losses)
- Admin, invoicing, and project management overhead
- Re-work or scope creep hours (average)

Sum to a **total hours per engagement**.

**Step 4 — Capture direct expenses**
For each project type, collect out-of-pocket costs attributable to that work:
- Software, tools, or licenses used only for this project type
- Subcontractors or freelancers paid
- Materials, stock assets, or third-party services
- Any other direct cost (not fixed overhead)

**Step 5 — Compute net hourly profit**
For each project type apply:

```
Net Revenue = Gross Revenue − Direct Expenses
Net Hourly Profit = Net Revenue ÷ Total Hours per Engagement
```

**Step 6 — Rank and flag**
- Sort all project types from highest to lowest net hourly profit
- Flag any type below the user's stated or implied minimum acceptable rate
- Flag any type where pre-sale or revision hours are disproportionately large (>30% of total hours), signaling a pricing or scoping problem

**Step 7 — Interpret outliers**
For the top 2 and bottom 2 ranked types, identify the primary driver:
- Low rate? (underpriced)
- High hours? (scope creep, inefficiency, or poor fit)
- High expenses? (vendor or tool cost eating margin)

## Output Format

Produce a structured table followed by a brief action summary.

**Profitability Ranking Table**

| Rank | Project Type | Gross Revenue | Direct Expenses | Net Revenue | Total Hours | Net Hourly Profit | Flag |
|------|-------------|--------------|----------------|-------------|-------------|-------------------|------|
| 1    | ...         | $X           | $X             | $X          | X hrs       | $X/hr             | —    |
| 2    | ...         | ...          | ...            | ...         | ...         | ...               | ⚠️   |

Flags: ⚠️ = below minimum rate or disproportionate overhead hours

**3–5 Bullet Action Summary**
- One sentence on the highest-profit project type and what it suggests (do more, raise prices, protect capacity)
- One sentence on the lowest-profit type and the primary cause
- Any flagged types with a specific corrective action (re-price, cap revision rounds, cut a vendor cost, decline this work)
- If applicable, one sentence on a quick win — the single change that would most improve overall portfolio profitability

Keep the table concise and the action bullets direct. No explanations of methodology in the final output — only findings and recommendations.
