---
name: operating-leverage-analysis
category: finance
description: >
  Measures the ratio of fixed to variable costs and models how revenue changes translate into disproportionate impacts on operating income. Use when someone asks about operating leverage, wants to understand how sensitive profits are to revenue changes, needs to calculate degree of operating leverage, or is analyzing fixed vs variable cost structure of a business.
tags: [operating-leverage, fixed-costs, variable-costs, contribution-margin, financial-modeling]
author: community
---

# Operating Leverage Analysis

This skill calculates and interprets operating leverage metrics to show how a company's cost structure amplifies revenue changes into larger swings in operating income.

## Analysis Workflow

1. **Gather cost structure inputs**
   - Total revenue (current period)
   - Variable costs (costs that scale directly with revenue: COGS, commissions, direct labor)
   - Fixed costs (costs that do not change with volume: rent, salaries, depreciation, insurance)
   - Operating income (EBIT = Revenue − Variable Costs − Fixed Costs)

2. **Calculate Contribution Margin**
   - Contribution Margin = Revenue − Variable Costs
   - Contribution Margin Ratio (CMR) = Contribution Margin ÷ Revenue
   - This is the portion of each revenue dollar available to cover fixed costs and generate profit

3. **Calculate Degree of Operating Leverage (DOL)**
   - DOL = Contribution Margin ÷ Operating Income
   - Alternatively: DOL = % Change in EBIT ÷ % Change in Revenue
   - A DOL of 3.0 means a 10% revenue increase produces a ~30% increase in operating income

4. **Model revenue change scenarios**
   - Apply at least three revenue change scenarios: −20%, −10%, +10%, +20% (adjust based on context)
   - For each scenario: New Revenue = Base Revenue × (1 + % Change)
   - New Operating Income = New Revenue − Variable Costs (scaled proportionally) − Fixed Costs (unchanged)
   - Calculate % change in operating income vs base case

5. **Assess risk and business model implications**
   - High DOL (>4): High fixed cost base, profits highly sensitive to revenue — higher risk in downturns, higher reward in growth
   - Moderate DOL (2–4): Balanced cost structure
   - Low DOL (<2): Variable cost-heavy model, more stable profits but limited upside leverage
   - Flag breakeven point: Revenue at which Operating Income = 0 → Breakeven = Fixed Costs ÷ CMR

6. **Identify key drivers and recommendations**
   - Note which cost categories are fixed vs variable and whether reclassification is possible
   - Highlight margin of safety: (Current Revenue − Breakeven Revenue) ÷ Current Revenue
   - Comment on strategic implications (e.g., scaling benefits, recession vulnerability)

## Output Format

Produce a structured analysis with the following sections:

**1. Cost Structure Summary Table**
| Metric | Value |
|---|---|
| Revenue | $X |
| Variable Costs | $X |
| Contribution Margin | $X (XX%) |
| Fixed Costs | $X |
| Operating Income (EBIT) | $X |
| Degree of Operating Leverage | X.Xx |

**2. Scenario Analysis Table**
| Revenue Change | New Revenue | New EBIT | EBIT Change % |
|---|---|---|---|
| −20% | $X | $X | −XX% |
| −10% | $X | $X | −XX% |
| Base | $X | $X | — |
| +10% | $X | $X | +XX% |
| +20% | $X | $X | +XX% |

**3. Breakeven Analysis**
- Breakeven Revenue: $X
- Margin of Safety: XX%

**4. Interpretation (3–5 bullet points)**
- Plain-language explanation of what the DOL means in practice
- Risk characterization (high/moderate/low sensitivity)
- One insight about the fixed vs variable cost mix
- One strategic implication or recommendation

Keep the output concise and decision-oriented. If inputs are incomplete, state exactly which figures are needed before proceeding.
