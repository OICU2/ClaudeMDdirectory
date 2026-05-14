---
name: deal-velocity-analysis
description: >
  Calculates average time spent in each pipeline stage across won and lost deals to identify where opportunities stall and recommends stage-exit criteria. Use when someone asks "why are deals taking so long to close," wants to know where deals get stuck in the pipeline, needs to improve sales cycle length, asks about deal velocity or pipeline efficiency, or wants to understand win/loss patterns by stage.
category: sales
tags: [pipeline, deal-velocity, sales-cycle, win-loss, stage-analysis]
author: community
---

# Deal Velocity Analysis

This skill analyzes time-in-stage data across won and lost deals to surface pipeline bottlenecks and prescribe actionable stage-exit criteria that accelerate close rates.

## Analysis Workflow

1. **Collect pipeline data** — Request or ingest deal records including: deal ID, stage history with entry/exit timestamps, deal outcome (won/lost/churned), deal value, and rep assignment. If data is unavailable, prompt the user to export from their CRM (Salesforce, HubSpot, Pipedrive) as a CSV.

2. **Calculate time-in-stage** — For each stage, compute:
   - Mean and median days spent (use median to reduce outlier skew)
   - Standard deviation to identify high-variance stages
   - Separate calculations for won deals vs. lost deals vs. all deals

3. **Identify stall points** — Flag any stage where:
   - Lost deals average ≥ 1.5× longer than won deals
   - Overall median exceeds the benchmark (use industry standard or user-provided target)
   - Standard deviation is high (>50% of the mean), indicating inconsistent execution

4. **Segment by deal attributes** — Break down velocity by deal size (SMB/Mid-Market/Enterprise), rep, and industry vertical if data supports it. Note which segments show the worst stall rates.

5. **Diagnose root causes** — For each flagged stall stage, apply this decision logic:
   - Long time in *Discovery*: likely qualification gaps or ICP mismatch
   - Long time in *Proposal/Pricing*: budget uncertainty or missing economic buyer
   - Long time in *Legal/Contract*: procurement complexity or missing champion
   - Long time in *Negotiation*: discount cycling or lack of urgency

6. **Define stage-exit criteria** — For each bottleneck stage, prescribe 2–3 specific, binary exit criteria (e.g., "Economic buyer identified and confirmed on next call" not "good engagement").

7. **Recommend time-based SLAs** — Propose maximum days per stage based on won-deal medians +20% buffer. Flag any deal exceeding SLA as "at-risk" for manager review.

## Output Format

Produce a structured report with the following sections:

**1. Pipeline Velocity Summary Table**
A table with columns: Stage | Won Avg (days) | Lost Avg (days) | All Deals Avg | Stall Flag (✓/✗)

**2. Top 3 Bottleneck Stages**
For each: stage name, severity (High/Medium/Low), root cause hypothesis, and 1-sentence impact statement (e.g., "Deals stalling here lose 18 days on average and close at 23% vs. 61% when exited within 10 days").

**3. Stage-Exit Criteria Recommendations**
Bullet list per bottleneck stage — 2–3 binary, verifiable criteria reps must confirm before advancing a deal.

**4. SLA Thresholds**
Table: Stage | Recommended Max Days | Basis (won-deal median + 20%)

**5. Next Steps**
3–5 prioritized actions for the sales leader, each tied to a specific finding (e.g., "Add economic buyer field as required in CRM at Proposal stage entry to enforce qualification").

Length: Concise. Each section should be scannable. Avoid narrative padding. Use tables and bullets throughout.
