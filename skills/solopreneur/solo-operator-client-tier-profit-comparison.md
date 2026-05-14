---
name: solo-operator-client-tier-profit-comparison
description: >
  Analyzes and compares actual profit per hour across different client tiers or engagement types to reveal which relationships are worth expanding and which are draining resources. Use when someone says "I'm not sure which clients are actually worth it," asks about which client type makes them the most money, wants to figure out which engagements to phase out, wonders if their retainer clients are more profitable than project clients, or is trying to decide where to focus their business development. Surfaces hidden costs and real margins so the operator can make clear-eyed decisions about their client mix.
category: solopreneur
tags: [profitability, client-management, pricing, time-tracking, revenue-analysis]
author: community
---

# Solo Operator Client Tier Profit Comparison

This skill calculates and compares true profit-per-hour across client tiers or engagement types, exposing which client relationships are actually worth growing and which should be wound down.

## Data Collection

Ask the operator to provide — or estimate — the following for each client tier or engagement type they want to compare (e.g., retainer clients, one-off projects, ongoing advisory, productized packages):

1. **Revenue**: Total billed per month or per engagement
2. **Direct time**: Hours spent on delivery, calls, revisions, and reporting
3. **Indirect time**: Admin, invoicing, scheduling, and relationship maintenance tied to that client type
4. **Hard costs**: Any software, contractors, tools, or materials used specifically for this tier
5. **Scope creep rate**: Rough % of engagements that expand beyond original scope without additional billing
6. **Collection friction**: Average days to payment; flag any chronic late payers

If the operator can't provide exact numbers, prompt them to give a confident estimate and note it as an estimate in the output.

## Calculation Method

For each client tier, compute:

- **Gross revenue** = billed amount (adjusted downward by scope creep % if unbilled overages are common)
- **Total hours** = direct hours + indirect hours
- **Net revenue** = gross revenue − hard costs
- **True hourly rate** = net revenue ÷ total hours
- **Stress-adjusted flag**: If the operator mentions high emotional overhead, difficult communication, or frequent firefighting for a tier, flag it with a ⚠️ and note it reduces effective value beyond the numbers

## Comparison Analysis

After calculating each tier:

1. Rank tiers from highest to lowest true hourly rate
2. Identify the **top performer**: highest true hourly rate with stable or growing demand
3. Identify the **value trap**: tier that looks profitable on paper but has the lowest true hourly rate due to hidden time costs
4. Identify any tier where true hourly rate falls below the operator's stated or implied minimum acceptable rate
5. Surface one non-obvious insight per tier (e.g., "Your project clients pay 40% more per hour but require 3x more sales effort to acquire")

## Recommendations

Provide three clear, ranked recommendations:

- **Grow**: Which tier to prioritize for new business development and why
- **Optimize or reprice**: Which tier is salvageable with a rate increase, scope tightening, or process change
- **Phase out**: Which tier to stop accepting or gradually exit, with a suggested timeline or transition approach

## Output Format

Produce a structured comparison using this format:

---

**Client Tier Profit Comparison**

| Tier | Gross Revenue | Total Hours | Hard Costs | True Hourly Rate | Flag |
|------|--------------|-------------|------------|-----------------|------|
| [Name] | $X | Xh | $X | $X/hr | ⚠️ or ✓ |

**Top Performer:** [Tier name] — $X/hr true rate. [One sentence on why it wins.]

**Value Trap:** [Tier name] — appears to pay $X/hr but true rate is $X/hr due to [specific reason].

**Below Minimum Threshold:** [Tier name or "None identified"]

---

**Non-Obvious Insights**
- [Tier]: [One specific insight]
- [Tier]: [One specific insight]
- [Tier]: [One specific insight]

---

**Recommendations**

1. **Grow** — [Tier]: [Specific action, e.g., "Raise minimum engagement size to $X and
