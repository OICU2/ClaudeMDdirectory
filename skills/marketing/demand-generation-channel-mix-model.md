---
name: demand-generation-channel-mix-model
description: >
  Builds a data-driven scoring model that evaluates demand generation channels by CAC, conversion rate, and pipeline contribution to recommend optimal budget allocation. Use when someone wants to optimize their marketing channel mix, asks how to allocate demand gen budget, needs to compare channel performance across CAC and pipeline metrics, wants to score or rank marketing channels, or is building a budget reallocation recommendation for demand generation.
category: marketing
tags: [demand-generation, budget-allocation, channel-mix, CAC, pipeline]
author: community
---

# Demand Generation Channel Mix Model

This skill builds a weighted scoring model that ranks demand generation channels by efficiency and pipeline impact, then outputs a data-backed budget allocation recommendation.

## Channel Mix Modeling Workflow

### Step 1: Collect Channel Inputs
Ask the user to provide (or estimate) for each active channel:
- **CAC** (Customer Acquisition Cost in $)
- **Conversion Rate** (lead-to-opportunity or MQL-to-SQL %)
- **Pipeline Contribution** (% of total pipeline sourced or influenced)
- **Current Budget Allocation** (% or $ amount)
- **Volume** (leads or opportunities generated per period)

If data is missing, prompt the user to estimate or flag the channel as "data-sparse" for a sensitivity note.

### Step 2: Normalize Metrics
Normalize each metric to a 0–10 scale across all channels:
- **CAC Score**: Lowest CAC = 10, highest CAC = 0. Formula: `10 × (max_CAC - channel_CAC) / (max_CAC - min_CAC)`
- **Conversion Rate Score**: Highest rate = 10, lowest = 0. Formula: `10 × (channel_rate - min_rate) / (max_rate - min_rate)`
- **Pipeline Contribution Score**: Highest contribution = 10, lowest = 0. Same min-max formula.

### Step 3: Apply Weighting Model
Apply default weights (adjustable based on business stage):
- CAC Efficiency: **35%**
- Conversion Rate: **30%**
- Pipeline Contribution: **35%**

Calculate **Composite Channel Score**:
`Score = (CAC_score × 0.35) + (Conv_score × 0.30) + (Pipeline_score × 0.35)`

If the user is in early-stage growth, suggest reweighting to: CAC 25%, Conversion 40%, Pipeline 35%.
If the user is in scale/efficiency mode, suggest: CAC 45%, Conversion 25%, Pipeline 30%.

### Step 4: Generate Budget Allocation Recommendation
- Rank channels by Composite Score (highest to lowest)
- Flag channels scoring **≥ 7.0** as "Scale" (increase budget)
- Flag channels scoring **4.0–6.9** as "Maintain" (hold or test)
- Flag channels scoring **< 4.0** as "Reduce" (cut or pause)
- Distribute recommended budget proportionally to Score, with a floor of 5% for "Maintain" channels and 0–5% for "Reduce" channels
- Ensure total allocation = 100%

### Step 5: Sensitivity Check
- Identify the 1–2 channels with missing or estimated data and note how scores could shift
- Flag any channel where current budget significantly exceeds its Score-based recommendation (over-investment alert)
- Flag any channel where budget is well below its Score-based recommendation (underinvestment opportunity)

## Output Format

Produce a structured report with these sections:

**1. Channel Scoring Table**
A markdown table with columns: Channel | CAC | Conv Rate | Pipeline % | CAC Score | Conv Score | Pipeline Score | Composite Score | Tier (Scale/Maintain/Reduce)

**2. Budget Reallocation Summary**
A markdown table with columns: Channel | Current Budget % | Recommended Budget % | Change | Rationale (1 sentence)

**3. Top 3 Insights**
Bullet list of the three most actionable findings (e.g., "Paid Search has the lowest CAC but only 8% of budget — strong underinvestment signal").

**4. Sensitivity Notes**
2–4 bullet points flagging data gaps, assumptions, or scenarios where rankings could shift.

**5.
