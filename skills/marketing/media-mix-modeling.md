---
name: media-mix-modeling
description: >
  Evaluates the contribution of each marketing channel to revenue and recommends budget reallocation to maximize overall campaign performance. Use when someone says "which channels are driving the most revenue," asks about marketing attribution or budget efficiency, wants to optimize their media spend across channels, needs to understand diminishing returns on ad spend, or is deciding how to redistribute a marketing budget.
category: marketing
tags: [media-mix, attribution, budget-optimization, marketing-analytics, ROI]
author: community
---

# Media Mix Modeling

This skill analyzes channel-level marketing data to quantify each channel's revenue contribution and produces concrete budget reallocation recommendations to maximize campaign ROI.

## Workflow

### 1. Collect Inputs
Request the following if not provided:
- Current spend per channel (e.g., paid search, paid social, display, email, TV, OOH)
- Revenue or conversions attributed to each channel (last-touch, multi-touch, or raw data)
- Time period covered (weeks, months, quarters)
- Total budget available for reallocation
- Any fixed constraints (minimum/maximum spend per channel, channel commitments)
- Business objective: revenue maximization, customer acquisition, brand awareness, or ROAS target

### 2. Calculate Channel Metrics
For each channel, compute:
- **Current ROAS**: Revenue ÷ Spend
- **Cost per Acquisition (CPA)**: Spend ÷ Conversions
- **Spend share vs. Revenue share**: Compare % of budget vs. % of revenue contribution
- **Efficiency index**: Revenue share ÷ Spend share (>1 = underinvested, <1 = overinvested)
- **Marginal ROI estimate**: Flag channels approaching diminishing returns based on spend concentration

### 3. Identify Reallocation Opportunities
Apply these rules:
- Channels with efficiency index > 1.2 are candidates for increased investment
- Channels with efficiency index < 0.8 are candidates for budget reduction
- Channels consuming >30% of budget but <20% of revenue are high-priority cuts
- Preserve channels with strategic value (brand, retention) even if ROAS is lower — flag but don't auto-cut
- Apply diminishing returns logic: large increases to a single channel rarely scale linearly; recommend staged increases

### 4. Build Reallocation Scenarios
Generate two scenarios:
- **Conservative (10–20% shift)**: Minimal disruption, reallocates from lowest-efficiency channels to highest-efficiency
- **Aggressive (20–40% shift)**: Maximizes projected revenue lift, accepts higher execution risk

For each scenario, project:
- Expected revenue change (use current ROAS as baseline, apply a 15–25% efficiency discount for scaled channels)
- New spend per channel
- New ROAS per channel

### 5. Validate Against Constraints
- Ensure no channel drops below stated minimums
- Flag channels being cut significantly (>50%) as requiring wind-down planning
- Note data quality issues: if attribution model is last-touch only, caveat that upper-funnel channels are likely undervalued

## Output Format

Produce a structured report with these sections:

**1. Channel Performance Summary Table**
| Channel | Current Spend | Revenue | ROAS | CPA | Spend Share | Revenue Share | Efficiency Index |
|---|---|---|---|---|---|---|---|
(one row per channel, totals row at bottom)

**2. Key Findings** (3–5 bullet points)
- Identify the 1–2 most underinvested channels
- Identify the 1–2 most overinvested channels
- Note any data quality or attribution caveats

**3. Reallocation Recommendations Table**
| Channel | Current Spend | Conservative Scenario | Aggressive Scenario | Rationale |
|---|---|---|---|---|

**4. Projected Outcomes**
- Conservative scenario: projected total revenue, projected blended ROAS, estimated lift %
- Aggressive scenario: projected total revenue, projected blended ROAS, estimated lift %

**5. Implementation Notes**
- Sequence of changes (which to cut first, which to scale first)
- Suggested test period before full commitment (default: 4–6 weeks)
- Any channels requiring further data collection before acting

Length: Concise but complete. Tables are mandatory. Prose sections should be 2–4 sentences each
