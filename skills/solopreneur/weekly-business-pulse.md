---
name: weekly-business-pulse
description: >
  Pull key business metrics, surface anomalies, and deliver a clean
  weekly summary — revenue, churn, signups, expenses, and what moved.
  Trigger on: "weekly business summary", "how's the business doing",
  "pull my metrics", "business pulse", "what are my numbers this week",
  or any request for a business health check.
category: solopreneur
tags: [metrics, analytics, revenue, saas, business-intelligence, weekly-review]
---

# Weekly Business Pulse

I pull your key numbers, compare them to last week and last month,
surface what's moving in the wrong direction, and deliver a brief you
can actually act on — not a dashboard you have to interpret yourself.

## The Metrics That Matter

Default set (customize on first run):
- **Revenue:** MRR, new MRR, churned MRR, net MRR change
- **Customers:** New signups, churned customers, trial conversions
- **Product:** DAU/WAU, key feature usage (define your north star metric)
- **Marketing:** Traffic sources, email list growth, top acquisition channel
- **Expenses:** Burn this week vs last week vs budget

## Weekly Pulse Workflow

### Step 1 — Connect Your Sources
On first run, identify your data sources:
- Stripe dashboard (revenue + churn)
- Supabase / database (signups, usage)
- Google Analytics / Plausible (traffic)
- Resend / email platform (list growth)
- Bank/card statement (expenses)

I work with whatever you can paste, export, or describe.

### Step 2 — Pull Current Week
Gather this week's numbers for each metric.
If a number isn't available, flag it — don't skip it.

### Step 3 — Compare
Calculate week-over-week and month-over-month deltas.
Direction matters more than absolute size for most metrics.

### Step 4 — Anomaly Detection
Flag any metric that:
- Moved more than 20% in either direction unexpectedly
- Is trending wrong for 3+ consecutive weeks
- Contradicts another metric (high signups + high churn = retention problem)

### Step 5 — So What
For each anomaly, one sentence on the likely cause and one suggested action.
No vague "investigate further" — a specific next step.

## Output Format

**WEEKLY BUSINESS PULSE — [DATE]**

**The headline:** [One sentence — good week / bad week / mixed — and why]

| Metric | This Week | Last Week | Change |
|---|---|---|---|
| MRR | $X | $X | +/-X% |
| New customers | X | X | +/-X |
| Churn | X | X | +/-X |
| ... | | | |

**ANOMALIES**
[List with cause + action for each]

**ONE THING TO DO THIS WEEK**
[Single most important action based on the data]
