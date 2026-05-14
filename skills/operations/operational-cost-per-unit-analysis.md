---
name: operational-cost-per-unit-analysis
description: >
  Calculates and benchmarks cost-per-unit metrics across operational processes to identify inefficiencies and inform pricing or budgeting decisions. Use when someone asks "how much does it cost us per unit," wants to find where money is being lost in operations, needs to benchmark production costs against industry standards, is trying to set prices based on actual unit economics, or wants to understand why margins are shrinking. Triggers on phrases like "cost per unit," "unit economics," "cost breakdown by process," or "where are we losing money in production."
category: operations
tags: [cost-analysis, unit-economics, operations, pricing, benchmarking]
author: community
---

# Operational Cost-Per-Unit Analysis

This skill breaks down total operational costs into per-unit metrics by process, compares them against benchmarks or targets, surfaces inefficiencies, and delivers actionable findings to support pricing or budgeting decisions.

## Analysis Workflow

1. **Gather inputs** — Collect or prompt for: total output volume (units), time period, and cost categories (labor, materials, overhead, logistics, waste/rework, equipment depreciation). If data is partial, note assumptions explicitly.

2. **Segment costs by process stage** — Separate costs into discrete operational stages (e.g., procurement, manufacturing, quality control, packaging, fulfillment). Assign direct and allocated indirect costs to each stage.

3. **Calculate cost-per-unit per stage**
   - Formula: `Cost Per Unit (stage) = Total Stage Cost / Total Units Produced`
   - Calculate blended total: `Total CPU = Sum of all stage CPUs`
   - Calculate cost as % of total for each stage

4. **Identify inefficiency signals** — Flag stages where:
   - CPU exceeds 30% of total blended cost (disproportionate weight)
   - Waste or rework costs exceed 5% of stage cost
   - Labor cost per unit is rising while volume is flat or growing
   - Fixed costs are not declining proportionally as volume scales

5. **Benchmark** — Compare calculated CPU against:
   - Internal historical periods (MoM, YoY)
   - Industry benchmarks if provided or known (state source clearly)
   - Target margins or pricing floors provided by the user

6. **Diagnose root causes** — For each flagged inefficiency, propose 1–2 likely causes (e.g., underutilized capacity, supplier pricing, process bottleneck, high defect rate).

7. **Generate pricing/budgeting implications** — Calculate minimum viable price given CPU + target margin. Flag if current pricing is below fully-loaded CPU.

## Output Format

Produce a structured report with the following sections:

**1. Summary Line**
One sentence: blended total CPU, biggest cost driver, and primary recommendation.

**2. Cost-Per-Unit Breakdown Table**
| Stage | Total Cost | Units | CPU | % of Total |
|-------|------------|-------|-----|------------|
Include a totals row.

**3. Inefficiency Flags**
Bulleted list — each flag includes: stage, metric that triggered it, magnitude of the issue, and 1–2 root cause hypotheses.

**4. Benchmark Comparison**
Table or bullets comparing current CPU to historical, target, or industry figures. Note data gaps or assumptions.

**5. Pricing & Budgeting Implications**
- Minimum price at current CPU + stated margin target
- Break-even volume if fixed costs are provided
- Top 1–2 levers to reduce CPU (with estimated impact range if calculable)

**6. Data Gaps & Assumptions**
Explicit list of any figures estimated, assumed, or missing — with confidence level (high / medium / low).

Length: as long as the data requires; never pad with generic commentary. Use tables wherever comparison is involved.
