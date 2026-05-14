---
name: variable-vs-fixed-cost-segregation
category: finance
description: >
  Classifies all operating expenses into fixed, variable, and semi-variable buckets to enable
  accurate contribution margin and breakeven analysis. Use when someone says "help me understand
  my cost structure," asks about "which costs change with revenue," wants to "calculate breakeven,"
  needs to "separate fixed and variable expenses," or is trying to "build a contribution margin
  analysis."
tags: [cost-analysis, breakeven, contribution-margin, financial-modeling, expense-classification]
author: community
---

# Variable vs. Fixed Cost Segregation

This skill classifies operating expenses into fixed, variable, and semi-variable categories using standard cost behavior analysis, enabling accurate contribution margin calculation and breakeven modeling.

## Cost Segregation Workflow

### Step 1: Collect Expense Data
Request a list of all operating expense line items with at minimum 3 months of actuals. If unavailable, ask for a representative month plus any known seasonal patterns. Required fields: expense name, amount, billing frequency (monthly/quarterly/annual), and whether it scales with output/revenue.

### Step 2: Apply Classification Rules

**Fixed Costs** — Do not change with output volume within the relevant range:
- Rent, lease payments, property taxes
- Salaried employee compensation (base only)
- Depreciation and amortization
- Software subscriptions (flat-rate)
- Insurance premiums
- Loan interest payments

**Variable Costs** — Change proportionally with revenue or units produced:
- Raw materials and direct inputs
- Sales commissions (percentage-based)
- Payment processing fees
- Shipping and fulfillment per unit
- Hourly/contract labor tied to output
- Revenue-based royalties or licensing

**Semi-Variable (Mixed) Costs** — Contain both a fixed base and a variable component:
- Utilities (base charge + usage)
- Tiered SaaS tools (base plan + per-seat or per-usage fees)
- Salaried staff with overtime or bonuses
- Phone/internet with overage charges

### Step 3: Split Semi-Variable Costs
Use the **High-Low Method** if historical data is available:
- Variable rate = (Cost at high activity − Cost at low activity) ÷ (High units − Low units)
- Fixed component = Total cost at either point − (Variable rate × Activity at that point)

If historical data is unavailable, ask the operator to estimate: "What portion of this expense would remain if revenue dropped to zero?"

### Step 4: Validate and Sanity-Check
- Confirm total classified costs reconcile to total operating expenses
- Flag any costs that are ambiguous or owner-discretionary (e.g., owner salary in owner-operated business)
- Note any costs that are fixed in the short term but variable long-term (stepped fixed costs)

### Step 5: Calculate Key Outputs
- **Contribution Margin** = Revenue − Total Variable Costs
- **Contribution Margin %** = Contribution Margin ÷ Revenue × 100
- **Breakeven Point (units)** = Total Fixed Costs ÷ Contribution Margin per Unit
- **Breakeven Point (revenue)** = Total Fixed Costs ÷ Contribution Margin %

## Output Format

Produce a structured report with four sections:

**1. Cost Classification Table**
| Expense Line Item | Monthly Amount | Category | Notes/Assumptions |
|---|---|---|---|
List every expense with its assigned category and any split methodology used.

**2. Summary Totals**
- Total Fixed Costs: $X/month
- Total Variable Costs: $X (or X% of revenue)
- Total Semi-Variable — Fixed Portion: $X/month
- Total Semi-Variable — Variable Portion: X% of revenue
- Combined effective fixed cost base: $X/month
- Combined effective variable cost rate: X% of revenue

**3. Contribution Margin Analysis**
- Contribution Margin at current revenue: $X (X%)
- Breakeven Revenue: $X/month
- Breakeven Units (if applicable): X units/month
- Current margin of safety: $X above breakeven (X%)

**4. Flags and Assumptions**
Bullet list of any ambiguous classifications, data gaps, or items requiring owner confirmation. Note any stepped fixed costs or one-time expenses excluded from the model.

Keep the tone analytical and conc
