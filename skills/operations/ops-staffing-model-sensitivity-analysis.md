---
name: ops-staffing-model-sensitivity-analysis
description: >
  Models how changes in headcount, hours, or labor rates affect operational output and cost under multiple staffing scenarios. Use when someone asks "what happens if we cut staff by 10%", wants to model different shift configurations, needs to understand labor cost sensitivity, is evaluating a hiring freeze impact, or wants to compare staffing scenarios against throughput targets.
category: operations
tags: [staffing, labor-cost, sensitivity-analysis, workforce-planning, operations]
author: community
---

# Ops Staffing Model Sensitivity Analysis

This skill builds a structured sensitivity model showing how operational output and labor costs shift across multiple staffing configurations, then surfaces the breakpoints and tradeoffs decision-makers need.

## Sensitivity Modeling Workflow

1. **Establish the baseline**: Collect current headcount, average hours per week per role, blended labor rate (wages + burden), and current operational output metric (units, calls handled, orders fulfilled, etc.).

2. **Identify the variables to stress**: Confirm which levers to model — headcount (FTE count), hours (full-time vs. part-time vs. overtime mix), or labor rates (wage increases, burden rate changes, contractor vs. employee). Model all three if unspecified.

3. **Define the scenario range**: Default to five scenarios — baseline (0% change), two downside cases (−10%, −20% headcount or cost reduction), and two upside cases (+10%, +20% investment). Adjust if the user specifies different increments.

4. **Calculate per-scenario outputs**:
   - **Total labor cost** = Headcount × Hours/week × 52 × Blended rate
   - **Output capacity** = Baseline output × (Adjusted FTE hours / Baseline FTE hours), applying a productivity adjustment factor (default 0.85 for overtime, 0.95 for part-time vs. full-time)
   - **Cost per unit of output** = Total labor cost / Output capacity
   - **Coverage ratio** = Available staff-hours / Required staff-hours for target throughput

5. **Flag breakpoints**: Identify where output capacity drops below minimum acceptable threshold (ask user; default to 80% of baseline), where overtime becomes more expensive than hiring, and where cost-per-unit crosses a defined ceiling.

6. **Sensitivity ranking**: Rank which lever (headcount vs. hours vs. rate) produces the largest cost and output swing per 1% change — this identifies where the operation is most exposed.

7. **Surface key risks**: Call out single points of failure (e.g., one shift losing 2 FTEs drops coverage below threshold), overtime dependency risk, and any scenario where cost reduction produces negative ROI through output loss.

## Output Format

Produce the following in order:

**1. Baseline Summary Table** (single row): Headcount | Hours/wk | Blended Rate | Weekly Labor Cost | Annual Labor Cost | Weekly Output | Cost per Unit

**2. Scenario Comparison Table** (one row per scenario):
Scenario | FTE Change | Hours Change | Rate Change | Annual Labor Cost | Δ Cost vs. Baseline | Output Capacity | Δ Output vs. Baseline | Cost per Unit | Coverage Ratio | Status (✅ Viable / ⚠️ At Risk / ❌ Below Threshold)

**3. Sensitivity Ranking** (3-row table): Variable | 1% Change Impact on Cost | 1% Change Impact on Output | Sensitivity Rating (High/Medium/Low)

**4. Breakpoint Analysis** (bullet list, max 5 bullets): Each bullet states the specific condition, threshold crossed, and consequence.

**5. Recommendation Summary** (3–5 sentences): State which scenario best balances cost and output, which lever to prioritize, and what to monitor first if conditions change.

Use markdown tables. Include actual numbers, not placeholders, if the user has provided inputs. If inputs are missing, state assumptions explicitly above the tables and proceed with illustrative values.
