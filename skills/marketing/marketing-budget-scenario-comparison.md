---
name: marketing-budget-scenario-comparison
description: >
  Models two or more marketing budget allocation scenarios side by side and projects expected reach, leads, and CAC outcomes for each. Use when someone says "compare these budget options," asks about "what if we shifted spend to," or wants to "see how different allocations would perform." Also activates when someone needs to "model budget scenarios" or asks "which budget breakdown gives better results."
category: marketing
tags: [budget, scenario-planning, CAC, lead-generation, ROI]
author: community
---

# Marketing Budget Scenario Comparison

This skill takes two or more proposed marketing budget allocations and produces a structured side-by-side projection of reach, leads, and customer acquisition cost (CAC) for each, helping teams make data-backed spending decisions.

## Workflow

1. **Collect inputs**: Ask for total budget, number of scenarios, and channel-level spend per scenario (e.g., paid search, social, email, events, content). If not provided, prompt the user to supply them before proceeding.

2. **Establish baseline assumptions**: Request or apply reasonable defaults for:
   - Average CPM or CPC per channel (ask user or use industry benchmarks if unknown)
   - Channel-specific conversion rates (click-to-lead, lead-to-customer)
   - Average deal/order value if CAC context is needed

3. **Calculate per scenario**:
   - **Reach**: Estimate impressions or total addressable audience per channel using CPM; sum across channels.
   - **Leads**: Apply click-through rate → landing page conversion rate chain per channel; sum leads across channels.
   - **CAC**: Divide total scenario budget by projected new customers (leads × average close rate).

4. **Flag trade-offs**: For each scenario, note at least one risk and one advantage (e.g., "Scenario B concentrates 70% in paid social — high reach but volatile CPCs").

5. **Recommend**: State which scenario performs best on a primary metric (user-specified, or default to CAC) and explain why in one sentence.

## Output Format

Produce a markdown table followed by a short analysis block:

**Table** (one column per scenario, rows for each metric):

| Metric | Scenario A | Scenario B | Scenario N |
|---|---|---|---|
| Total Budget | $X | $X | $X |
| Channel Breakdown | List | List | List |
| Projected Reach | # | # | # |
| Projected Leads | # | # | # |
| Est. New Customers | # | # | # |
| Projected CAC | $X | $X | $X |

**Analysis block** (after table, plain prose, 3–5 sentences):
- Key difference between scenarios
- Risk or limitation of each
- Recommended scenario with rationale
- One suggested refinement the user could make to improve results further
