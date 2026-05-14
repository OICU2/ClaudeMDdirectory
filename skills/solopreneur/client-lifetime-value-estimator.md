---
name: client-lifetime-value-estimator
description: >
  Calculates the estimated lifetime value (LTV) of each client segment to help solo operators
  decide where to focus retention and acquisition energy. Use when someone asks "which clients
  are worth keeping," wants to know if a client type is profitable long-term, wonders how much
  to spend acquiring a new customer, or needs to prioritize between two client segments.
category: solopreneur
tags: [revenue, client-strategy, retention, pricing, profitability]
author: community
---

# Client Lifetime Value Estimator

Estimates LTV per client segment using revenue, churn, and margin data so a solo operator can make smarter retention and acquisition decisions.

## LTV Calculation Workflow

1. **Gather inputs per segment** — Ask the user for (or estimate from context):
   - Average monthly or annual revenue per client in this segment
   - Average client lifespan (months or years they typically stay)
   - Gross margin percentage (revenue minus direct delivery costs)
   - Approximate cost to acquire one client in this segment (CAC)

2. **Calculate core LTV**
   - LTV = Average Revenue per Period × Average Client Lifespan × Gross Margin %
   - Example: $500/mo × 18 months × 60% margin = $5,400 LTV

3. **Calculate LTV:CAC ratio**
   - Divide LTV by CAC
   - Ratio < 1: losing money on acquisition
   - Ratio 1–3: marginal or sustainable
   - Ratio > 3: healthy, worth investing in

4. **Compare segments side by side**
   - Run the calculation for each distinct client type the user identifies
   - Flag which segment has the highest LTV, best LTV:CAC ratio, and shortest payback period

5. **Identify retention leverage points**
   - If churn is high, show how extending lifespan by 3–6 months changes LTV
   - If margin is low, show how a 10% price increase affects LTV
   - Highlight the single biggest lever for each segment

6. **Make a prioritization recommendation**
   - State which segment to prioritize for retention (highest existing LTV)
   - State which segment to prioritize for acquisition (best LTV:CAC ratio)
   - Flag any segment that is cash-flow negative and should be reconsidered

## Output Format

Produce a structured breakdown with these sections:

**Segment LTV Summary Table**
| Segment | Avg Revenue | Lifespan | Margin | LTV | CAC | LTV:CAC |
|---------|-------------|----------|--------|-----|-----|---------|
| [name]  | $X/mo       | X mo     | X%     | $X  | $X  | X:1     |

**Key Insights** (3–5 bullet points)
- Which segment generates the most lifetime value
- Which segment has the healthiest acquisition economics
- The single highest-impact retention lever per segment
- Any segment that is unprofitable or borderline

**Recommended Actions** (2–3 specific next steps)
- Concrete actions tied directly to the numbers (e.g., "Add a 6-month check-in to reduce churn in Segment B — extending lifespan from 12 to 18 months adds $1,800 LTV per client")

Keep the output scannable. Use real numbers throughout. No generic advice — every recommendation must reference the calculated values.
