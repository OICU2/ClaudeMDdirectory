---
name: sensitivity-analysis-modeling
description: >
  Creates multi-variable sensitivity tables showing how changes in key assumptions impact revenue, margin, and valuation outcomes. Use when someone asks "what if my assumptions change," wants to stress-test a financial model, needs to see how sensitive their projections are to key drivers, asks about scenario analysis on revenue or margins, or wants to understand valuation range under different conditions.
category: finance
tags: [sensitivity-analysis, financial-modeling, scenario-planning, valuation, forecasting]
author: community
---

# Sensitivity Analysis Modeling

This skill builds structured multi-variable sensitivity tables that quantify how changes in key assumptions (growth rate, margin, churn, pricing, discount rate, etc.) ripple through to revenue, profitability, and valuation outcomes.

## Workflow

1. **Identify the base case** — Extract or ask for the central assumptions: revenue, growth rate, margins, discount rate, or any model-specific drivers. Confirm the base case output metric (revenue, EBITDA, valuation, NPV, etc.).

2. **Define the variables** — Select 2–4 key input variables most likely to drive outcome variance. Prioritize levers the user explicitly mentions; default to growth rate and margin if unspecified.

3. **Set sensitivity ranges** — For each variable, define a realistic range: typically ±3 steps around the base case (e.g., −20%, −10%, base, +10%, +20%). Adjust granularity to the user's context (early-stage startup vs. mature business).

4. **Build the sensitivity tables** — Produce one 2D table per output metric. Rows = one variable's range, columns = second variable's range, cells = resulting output value. If more than two variables exist, produce multiple tables (one pair per table).

5. **Highlight critical thresholds** — Annotate cells where outcomes cross meaningful boundaries: break-even, target valuation, covenant breach, profitability threshold, etc. Bold or flag these explicitly.

6. **Interpret the results** — Provide a 3–5 sentence narrative identifying: which variable has the most leverage, which combinations represent upside/downside scenarios, and what the realistic range of outcomes looks like.

7. **Flag assumptions** — List all fixed assumptions held constant so the user knows what the model does and does not capture.

## Output Format

Produce the following for each sensitivity analysis:

**Table(s):** Markdown table with labeled rows and columns showing variable ranges. Column headers = Variable A values, Row headers = Variable B values, cells = computed output. Include a "Base" label on the base case row/column. Example:

| Growth Rate ↓ / Margin → | 15% | 20% | 25% (base) | 30% | 35% |
|--------------------------|-----|-----|------------|-----|-----|
| 10%                      | ... | ... | ...        | ... | ... |
| 20% (base)               | ... | ... | **$X**     | ... | ... |
| 30%                      | ... | ... | ...        | ... | ... |

**Threshold callout:** One line identifying which cells cross a key threshold (e.g., "Valuation exceeds $50M in 6 of 25 scenarios, all requiring margin ≥ 25%").

**Narrative summary:** 3–5 sentences covering key driver leverage, realistic upside/downside range, and strategic implication.

**Fixed assumptions list:** Bullet list of all variables held constant with their assumed values.

Length: As long as required to cover all tables — do not truncate. Use clean markdown throughout.
