---
name: sales-cycle-length-variance-report
description: >
  Analyzes CRM pipeline data to identify deals taking significantly longer than average to close and surfaces root causes by stage, rep, or customer segment. Use when someone says "our deals are taking too long to close," asks about "why is our sales cycle dragging," or wants to "find bottlenecks in the pipeline," "understand cycle length variance," or "see which reps or segments have the slowest deals."
category: sales
tags: [pipeline, sales-cycle, variance-analysis, forecasting, rep-performance]
author: community
---

# Sales Cycle Length Variance Report

This skill analyzes deal-level pipeline data to identify outlier deals, stages, reps, and segments where close times deviate significantly from baseline, and surfaces likely causes with supporting evidence.

## Analysis Workflow

1. **Establish Baseline Metrics**
   - Calculate mean and median sales cycle length across all closed-won deals in the selected period (default: last 12 months)
   - Segment baseline by deal size tier (e.g., SMB < $10K, Mid-Market $10K–$100K, Enterprise > $100K)
   - Flag deals exceeding 1.5× the segment median as "high variance" and 2× as "critical variance"

2. **Stage-Level Breakdown**
   - For each pipeline stage, calculate average time-in-stage across all deals
   - Identify stages where average dwell time exceeds 20% above the historical norm
   - Flag stages with the highest frequency of deal stalls (no activity for 14+ days)

3. **Rep-Level Analysis**
   - Compare each rep's average cycle length against the team median for equivalent deal sizes
   - Rank reps by variance percentile (top quartile = longest relative cycles)
   - Note reps with high variance concentrated in specific stages (e.g., always slow at Legal/Procurement)

4. **Segment Analysis**
   - Break down cycle length by industry vertical, company size, geography, and product line
   - Identify which segments consistently run long and by how much
   - Cross-reference with win rate to distinguish "slow but closeable" from "slow and at-risk"

5. **Root Cause Mapping**
   - For each identified variance cluster, apply the following diagnostic framework:
     - **Process**: Is the stage itself poorly defined or lacking exit criteria?
     - **Rep behavior**: Is activity volume low, or are next steps not being set?
     - **Buyer-side**: Are economic conditions, procurement cycles, or multi-stakeholder approvals the norm for this segment?
     - **Deal complexity**: Do larger or more customized deals structurally require longer cycles?
   - Pull 3–5 specific deal examples per variance cluster as evidence

6. **Prioritization**
   - Score each variance driver by: (frequency × deal value at risk)
   - Surface top 3 actionable interventions with estimated cycle reduction impact

## Output Format

Produce a structured report with the following sections:

**Executive Summary** (3–5 bullet points)
- Overall average cycle length vs. prior period
- Top 2–3 variance drivers identified
- Estimated revenue impact of current delays

**Stage Bottleneck Table**
| Stage | Avg Days (Current) | Avg Days (Baseline) | Variance % | Deals Affected |
|---|---|---|---|---|

**Rep Performance Summary**
- List reps with cycle length > 25% above segment median
- Note the specific stage(s) where their delays concentrate

**Segment Heatmap Summary**
- Text-based table: Segment × Cycle Length vs. Baseline, color-coded (Over / On Track / Under)

**Root Cause Findings**
- Numbered list of identified causes, each with: description, supporting evidence (deal IDs or rep names), and confidence level (High / Medium / Low)

**Recommended Interventions**
- 3–5 specific actions (e.g., "Add exit criteria to Proposal stage," "Coach [Rep] on multi-threading at Procurement")
- Each with: owner, estimated effort, and projected cycle reduction

Report length: 400–800 words of narrative plus all tables. Use plain language. Avoid jargon unless the user's data uses it.
