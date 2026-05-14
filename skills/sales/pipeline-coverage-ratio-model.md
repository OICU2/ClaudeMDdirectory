---
name: pipeline-coverage-ratio-model
description: >
  Calculates required pipeline coverage ratios by segment and close rate to determine how much qualified pipeline sales managers need to hit quota each period. Use when someone asks "how much pipeline do I need," wants to model coverage ratios, needs to figure out pipeline targets by segment, or is trying to understand what win rates imply for required pipeline volume.
category: sales
tags: [pipeline, coverage-ratio, quota, forecasting, sales-planning]
author: community
---

# Pipeline Coverage Ratio Model

Calculates how much qualified pipeline each sales segment needs to hit quota, given close rates and period targets — used when sales managers or ops teams need to set pipeline minimums or diagnose coverage gaps.

## Calculation Workflow

1. **Collect inputs** — Ask for or extract from context:
   - Quota or revenue target for the period
   - Number of segments (e.g., SMB, Mid-Market, Enterprise) or a single blended view
   - Historical or assumed close rate (%) per segment
   - Average deal size per segment (if breaking down by deal count as well)
   - Pipeline time horizon (e.g., current quarter, rolling 90 days)

2. **Calculate coverage ratio per segment**
   - Coverage Ratio = 1 / Close Rate
   - Example: 25% close rate → 4x coverage ratio

3. **Calculate required pipeline per segment**
   - Required Pipeline = Quota × Coverage Ratio
   - Example: $1M quota at 25% close rate → $4M required pipeline

4. **Layer in deal count if average deal size is provided**
   - Required Deals in Pipeline = Required Pipeline / Average Deal Size
   - Useful for SDR/AE capacity planning

5. **Flag coverage gaps** — Compare required pipeline to current pipeline (if provided):
   - Gap = Required Pipeline − Current Pipeline
   - Express gap as both dollar value and percentage shortfall
   - If current pipeline > required, flag as adequately covered

6. **Sensitivity table** — Build a matrix showing required pipeline at ±10%, ±20% close rate variance so managers can stress-test assumptions.

7. **Segment rollup** — Sum required pipeline across all segments for total company pipeline target.

## Rules

- Always state the coverage ratio explicitly (e.g., "3.3x") alongside the dollar figure
- If close rate is not provided, prompt for it — do not assume a default silently; if user insists on a default, use 25% and disclose it
- Distinguish between total pipeline and *qualified* pipeline — note that coverage ratios apply to qualified pipeline only
- If quota or close rate inputs seem implausible (e.g., 95% close rate), flag the assumption before calculating
- Use the same time period consistently across all segments

## Output Format

Produce a structured response with these sections:

**Inputs Summary**
- Table listing: Segment | Quota | Close Rate | Avg Deal Size (if provided)

**Coverage Ratio Model**
- Table: Segment | Coverage Ratio | Required Pipeline | Required Deal Count (if applicable) | Current Pipeline (if provided) | Gap / Surplus

**Sensitivity Analysis**
- Matrix: Close Rate scenarios (low / base / high) × Required Pipeline for each segment

**Key Takeaways**
- 3–5 bullet points calling out the largest gaps, highest-risk segments, and one actionable recommendation per gap (e.g., "Mid-Market is $2M short — requires 8 additional qualified opportunities at average deal size")

Length: concise tables preferred over prose; limit narrative to Key Takeaways section.
