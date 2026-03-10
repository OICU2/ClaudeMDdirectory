---
name: break-even-analysis
description: >
  Calculates the sales volume required to cover all fixed and variable costs, identifying the exact point where a business becomes profitable. Use when someone asks "when will I break even," wants to know how many units they need to sell to cover costs, is evaluating whether a new product or business is financially viable, needs to understand their profit threshold, or asks about minimum sales targets before launching something.
category: finance
tags: [break-even, cost-analysis, profitability, unit-economics, financial-planning]
author: community
---

# Break-Even Analysis

Calculates the break-even point in units and revenue using fixed costs, variable costs, and selling price, and Claude will use this whenever a user needs to find the minimum sales volume required to avoid a loss.

## Break-Even Analysis Workflow

1. **Gather required inputs** — Collect the following before calculating:
   - Fixed costs (rent, salaries, insurance, equipment — costs that don't change with volume)
   - Variable cost per unit (materials, labor per item, shipping, commissions)
   - Selling price per unit (or average revenue per unit/customer)
   - If any value is missing, ask for it explicitly before proceeding

2. **Calculate contribution margin**
   - Contribution Margin per Unit = Selling Price per Unit − Variable Cost per Unit
   - Contribution Margin Ratio = Contribution Margin per Unit ÷ Selling Price per Unit

3. **Calculate break-even point**
   - Break-Even Units = Fixed Costs ÷ Contribution Margin per Unit
   - Break-Even Revenue = Fixed Costs ÷ Contribution Margin Ratio
   - Round units up to the nearest whole number (you can't sell a fraction of most products)

4. **Calculate margin of safety (if current sales data is provided)**
   - Margin of Safety (Units) = Current Sales Units − Break-Even Units
   - Margin of Safety (%) = (Current Sales − Break-Even Revenue) ÷ Current Sales × 100

5. **Run sensitivity scenarios** — Automatically show 3 variants:
   - What happens if variable costs increase by 10%
   - What happens if the selling price drops by 10%
   - What happens if fixed costs increase by 20%

6. **Identify the key risk factor** — State which single variable (fixed costs, variable cost, or price) has the most impact on the break-even point for this specific situation.

## Output Format

Produce a structured report with these sections:

**Inputs Summary**
| Variable | Value |
|---|---|
| Fixed Costs | $X,XXX |
| Variable Cost per Unit | $XX |
| Selling Price per Unit | $XX |
| Contribution Margin per Unit | $XX |
| Contribution Margin Ratio | XX% |

**Break-Even Results**
- Break-Even Units: **X,XXX units**
- Break-Even Revenue: **$XX,XXX**
- (If current sales provided) Margin of Safety: **X units / XX%**

**Sensitivity Analysis**
Show a 3-row table with scenario name, new break-even units, and change from baseline.

**Key Insight**
2–3 sentences interpreting what the numbers mean for this specific business context — whether the target is realistic, what levers most improve the position, and one concrete recommendation.

Keep the output scannable. Use tables for numbers, bold for key figures, and plain language for the interpretation. Total length: under 400 words unless complexity requires more.
