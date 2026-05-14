---
name: marketing-channel-budget-reallocation-brief
description: >
  Analyzes current marketing channel performance data and generates a prioritized budget reallocation recommendation to maximize ROI. Use when someone says "where should we shift our ad spend," asks about optimizing their marketing budget, wants to reallocate budget across channels, needs to cut underperforming channels, or is reviewing quarterly marketing performance and looking for spend adjustments.
category: marketing
tags: [budget, roi, channel-optimization, media-mix, performance-marketing]
author: community
---

# Marketing Channel Budget Reallocation Brief

This skill takes current channel performance data and produces a structured reallocation brief that identifies which channels to scale, cut, or test based on ROI signals.

## Analysis Workflow

1. **Collect channel data** — Request the following for each active channel: current monthly spend, revenue or conversions attributed, CPA or ROAS, and trend direction (improving/declining/flat). If data is incomplete, ask for it before proceeding.

2. **Calculate efficiency scores** — For each channel, compute or confirm ROAS (revenue ÷ spend) or inverse CPA. Flag any channel below a 2x ROAS or above target CPA as underperforming.

3. **Segment channels into tiers**:
   - **Tier 1 (Scale):** ROAS ≥ 3x or CPA ≤ 50% of target, with positive trend
   - **Tier 2 (Hold):** ROAS 2–3x or CPA 50–100% of target, stable trend
   - **Tier 3 (Cut or Test):** ROAS < 2x or CPA > target, or declining trend

4. **Identify reallocation amount** — Ask what percentage or dollar amount is available for reallocation, or assume a 20% reallocation from Tier 3 channels if not specified.

5. **Build reallocation logic** — Shift freed budget to Tier 1 channels first, up to their documented saturation point or a 40% spend increase cap. Distribute remainder to Tier 2 channels with positive signals. Reserve 10% of reallocated budget for a new test channel if applicable.

6. **Flag risks and assumptions** — Note attribution gaps (e.g., last-click vs. multi-touch), seasonality factors, minimum spend thresholds, and audience overlap risks.

## Output Format

Produce a structured brief with the following sections:

**Current State Summary**
- Table: Channel | Monthly Spend | ROAS or CPA | Trend | Tier
- 1–2 sentence diagnosis of the overall channel mix health

**Reallocation Recommendation**
- Table: Channel | Current Spend | Recommended Spend | Change ($) | Change (%) | Rationale
- Total budget before and after must match

**Expected Impact**
- Projected blended ROAS improvement (range, not a single number)
- Estimated revenue or conversion lift based on Tier 1 channel performance history
- Timeframe to see results (typically 4–8 weeks for paid channels)

**Risks and Caveats**
- Bullet list of 3–5 specific risks tied to this particular reallocation
- Any data gaps that could affect accuracy

**Next Steps**
- 3 prioritized action items with owners and deadlines if known

Length: 400–700 words. Use tables for numerical data. Avoid jargon unless the user has used it first.
