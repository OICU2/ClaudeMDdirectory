---
name: discount-impact-visualization-builder
description: >
  Calculates and formats the downstream revenue and margin impact of proposed discounts to help sales reps and managers make data-informed approval decisions. Use when someone says "what happens if I give this discount," asks about the margin impact of a price reduction, wants to model different discount scenarios, needs to justify a discount to a manager, or is trying to understand how many additional units need to be sold to offset a price cut.
category: sales
tags: [discounting, margin-analysis, revenue-modeling, pricing, sales-enablement]
author: community
---

# Discount Impact Visualization Builder

This skill builds a structured financial impact analysis of proposed discounts, showing revenue, margin, and break-even implications so reps and managers can make fast, informed approval decisions.

## Discount Impact Workflow

1. **Gather required inputs** — If not provided, ask for: original unit price, cost of goods sold (COGS) or gross margin %, proposed discount % or new price, current deal size (units or ARR), and any expected volume uplift from the discount.

2. **Calculate baseline metrics**
   - Gross margin at full price: `(Price - COGS) / Price`
   - Total revenue at full price: `Price × Units`
   - Total gross profit at full price: `(Price - COGS) × Units`

3. **Calculate discounted metrics**
   - Discounted price: `Original Price × (1 - Discount %)`
   - New gross margin %: `(Discounted Price - COGS) / Discounted Price`
   - Margin compression: `Original Margin % - New Margin %`
   - Revenue at discounted price (same volume): `Discounted Price × Units`
   - Gross profit at discounted price: `(Discounted Price - COGS) × Units`
   - Gross profit delta: `Discounted Gross Profit - Original Gross Profit`

4. **Calculate break-even volume** — How many additional units must be sold at the discounted price to match the original gross profit:
   - `Break-even Units = Original Gross Profit / (Discounted Price - COGS)`
   - `Additional Units Needed = Break-even Units - Original Units`
   - `Required Volume Increase % = (Additional Units Needed / Original Units) × 100`

5. **Run scenario comparison** — Model three tiers automatically:
   - Requested discount (as entered)
   - Half the requested discount
   - A "walk-away" floor (discount that brings margin to 10% or a user-specified floor)

6. **Flag risk thresholds** — Mark any scenario where:
   - Gross margin drops below 20% (or user-specified floor) with a ⚠️ warning
   - Break-even volume uplift exceeds 50% with a 🚨 alert
   - Deal goes margin-negative with a ❌ blocker

7. **Generate approval talking points** — Write 2–3 bullet points the rep can use when presenting to a manager, framing the discount in terms of strategic value (volume commit, competitive displacement, expansion potential) to offset margin impact.

## Output Format

Produce a structured analysis with the following sections:

**Deal Snapshot**
- Original price, COGS, baseline margin %, deal size

**Discount Impact Table** (formatted as a plain-text or markdown table)

| Scenario | Discount % | New Price | New Margin % | Margin Δ | Gross Profit | GP Delta | Break-even Units Needed |
|---|---|---|---|---|---|---|---|
| Half discount | X% | $X | X% | -X pts | $X | -$X | +X (+X%) |
| Requested discount | X% | $X | X% | -X pts | $X | -$X | +X (+X%) |
| Floor price | X% | $X | X% | -X pts | $X | -$X | +X (+X%) |

**Risk Flags**
- One line per flag with appropriate emoji (⚠️ 🚨 ❌)

**Approval Talking Points**
- 2–3 concise bullets the rep can use to justify the discount

**Recommendation**
- One sentence: approve, approve with conditions, or escalate — with the specific reason.
