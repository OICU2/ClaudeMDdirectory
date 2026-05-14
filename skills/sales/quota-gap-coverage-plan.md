---
name: quota-gap-coverage-plan
description: >
  Analyzes pipeline data to calculate the exact number of deals or upsells needed to close the gap between current projections and quota. Use when someone says "I need to hit my number," asks about how many deals they need to close, wants to know if their pipeline will cover quota, is worried about missing their sales target, or needs to figure out where revenue will come from this quarter.
category: sales
tags: [quota, pipeline, forecasting, revenue, sales-planning]
author: community
---

# Quota Gap Coverage Plan

This skill calculates the precise deal volume or upsell count needed to hit a sales target by analyzing pipeline value, close rates, and remaining quota — producing a clear, actionable coverage plan.

## Analysis Workflow

1. **Collect inputs** — Gather these values from the rep or manager:
   - Total quota for the period
   - Revenue already closed/booked
   - Current pipeline value (total open opportunities)
   - Average close rate (%) for pipeline stage or historical average
   - Average deal size (or deal-by-deal breakdown if available)
   - Time remaining in the period
   - Any known upsell or expansion opportunities

2. **Calculate committed revenue** — Multiply pipeline value by close rate to get expected pipeline yield.
   - Formula: `Pipeline Yield = Total Pipeline Value × Close Rate`

3. **Calculate the quota gap** — Subtract closed revenue and pipeline yield from total quota.
   - Formula: `Gap = Quota − Closed Revenue − Pipeline Yield`
   - If Gap ≤ 0, flag that quota is on track and show coverage ratio.

4. **Determine deal coverage needed** — Divide the gap by average deal size to get the number of additional deals required.
   - Formula: `Deals Needed = Gap ÷ Average Deal Size`
   - Round up to the nearest whole number.

5. **Model upsell/expansion path** — If the rep has existing customer accounts, calculate how many upsells at what average upsell value would cover the gap as an alternative or supplemental path.

6. **Stress-test assumptions** — Run the same calculation at three close rate scenarios:
   - Conservative (close rate − 10%)
   - Base (stated close rate)
   - Optimistic (close rate + 10%)

7. **Flag risks** — Identify if the gap is unachievable given time remaining, typical sales cycle length, or pipeline volume, and state this directly.

## Output Format

Produce a structured coverage plan with these sections:

**Quota Summary**
- Quota | Closed | Pipeline | Expected Yield | Gap (in dollars and as % of quota)

**Coverage Math**
- Show all formulas with the rep's actual numbers plugged in
- Deals needed at base case (number + dollar value)
- Upsells needed as an alternative path (number + dollar value)

**Scenario Table**
| Scenario | Close Rate | Pipeline Yield | Gap | Deals Needed |
|---|---|---|---|---|
| Conservative | X% | $X | $X | X |
| Base | X% | $X | $X | X |
| Optimistic | X% | $X | $X | X |

**Risk Flags**
- Bullet list of any coverage risks (e.g., gap exceeds realistic pipeline build in time remaining, cycle length mismatch)

**Recommended Actions**
- 3–5 specific actions ranked by revenue impact (e.g., accelerate specific deal stages, target upsell accounts, pull in pipeline from next quarter)

Keep the output skimmable. Use numbers throughout. Avoid vague language — every recommendation must reference a dollar amount or deal count.
