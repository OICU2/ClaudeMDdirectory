---
name: sales-velocity-calculator
category: sales
description: >
  Calculates sales velocity — the rate at which revenue moves through a pipeline — using four core inputs: number of opportunities, average deal value, win rate, and average sales cycle length. Use when someone says "our pipeline feels slow," asks "how do I increase revenue faster," wants to diagnose why deals aren't closing, needs to find pipeline bottlenecks, or asks about improving sales throughput. Surfaces which specific lever (volume, deal size, win rate, or cycle length) will have the greatest acceleration impact.
tags: [sales-velocity, pipeline, revenue-forecasting, deal-analysis, sales-metrics]
author: community
---

# Sales Velocity Calculator

This skill computes sales velocity (revenue generated per day) and performs lever-by-lever sensitivity analysis to show exactly where pipeline acceleration is possible and how much each improvement is worth.

## Calculation Workflow

### Step 1: Collect Inputs
Ask the user for these four values (or extract from context):
- **Number of Opportunities (N):** Active deals in pipeline right now
- **Average Deal Value (V):** Mean contract value in dollars
- **Win Rate (W):** Percentage of deals closed-won (express as decimal, e.g., 0.30)
- **Sales Cycle Length (L):** Average days from opportunity created to close

If any value is missing, ask specifically for it before proceeding.

### Step 2: Calculate Current Sales Velocity
Apply the standard formula:

```
Sales Velocity = (N × V × W) / L
```

**Example:** (50 opportunities × $20,000 × 0.30) / 60 days = **$5,000/day**

Annualize: Multiply daily velocity × 365 to show yearly revenue run rate.

### Step 3: Benchmark Each Lever
Evaluate each input against these general benchmarks and flag underperformers:

| Lever | Weak Signal | Strong Signal |
|---|---|---|
| Win Rate | < 20% | > 35% |
| Sales Cycle | > 90 days (SMB) / > 180 days (Enterprise) | < 45 days (SMB) |
| Deal Size | Flat or declining QoQ | Growing ≥ 10% QoQ |
| Opportunity Volume | < pipeline coverage of 3× quota | ≥ 3× quota coverage |

### Step 4: Run Sensitivity Analysis
For each lever, calculate the new velocity if that single lever improves by **10%** and **25%**, holding all others constant. Show which improvement produces the largest absolute dollar gain per day.

**Format each scenario as:**
- Current value → Improved value
- New daily velocity
- Additional revenue per day
- Additional revenue per year

### Step 5: Identify the Primary Bottleneck
Rank levers by impact (largest revenue gain per unit of effort). Use this priority logic:
1. If win rate < 20%: prioritize **conversion improvement** (coaching, qualification, objection handling)
2. If cycle length > 90 days: prioritize **cycle compression** (executive sponsors, mutual action plans)
3. If deal size is low: prioritize **expansion or upsell** (multi-year, add-ons, tier upgrades)
4. If volume is low: prioritize **top-of-funnel investment** (outbound, marketing, referrals)

### Step 6: Prescribe Actions
For the top 1–2 bottlenecks, provide 3 specific, tactical actions the team can take within 30 days.

## Output Format

Produce a structured report with these exact sections:

---
**📊 Sales Velocity Report**

**Current Velocity:** $X,XXX/day | $X,XXX,XXX/year

**Inputs Used:**
- Opportunities: N
- Avg Deal Value: $V
- Win Rate: W%
- Sales Cycle: L days

---

**🔍 Sensitivity Analysis**

| Lever | +10% Impact | +25% Impact | Annual Gain (+25%) |
|---|---|---|---|
| Opportunities | $X/day | $X/day | $XXX,XXX |
| Deal Value | $X/day | $X/day | $XXX,XXX |
| Win Rate | $X/day | $X/day | $XXX
