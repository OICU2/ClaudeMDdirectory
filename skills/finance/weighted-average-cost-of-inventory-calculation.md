---
name: weighted-average-cost-of-inventory-calculation
description: >
  Calculates weighted average cost (WAC) of inventory across multiple purchase lots to support accurate COGS reporting and balance sheet valuation. Use when someone needs to find the average cost of inventory, asks about valuing stock across different purchase prices, wants to calculate cost of goods sold using the weighted average method, needs to reconcile inventory costs after multiple buying periods, or is trying to determine ending inventory value on a balance sheet.
category: finance
tags: [inventory, COGS, weighted-average, valuation, accounting]
author: community
---

# Weighted Average Cost of Inventory Calculation

This skill computes the weighted average unit cost of inventory from multiple purchase lots and applies it to calculate COGS and ending inventory value for financial reporting.

## Calculation Workflow

1. **Collect lot data**: Gather each purchase lot's quantity and unit cost. If dates are provided, list them chronologically. Required fields per lot: units purchased, cost per unit.

2. **Calculate total units**: Sum all units across every lot (opening inventory + all purchases in the period).

3. **Calculate total cost**: Multiply each lot's quantity × unit cost, then sum all lot costs (including opening inventory value if provided).

4. **Compute weighted average unit cost**:
   - Formula: `WAC = Total Cost ÷ Total Units Available`
   - Round to 4 decimal places for precision; display to 2 decimal places in output.

5. **Apply WAC to units sold**:
   - `COGS = Units Sold × WAC`

6. **Compute ending inventory value**:
   - `Ending Inventory Units = Total Units Available − Units Sold`
   - `Ending Inventory Value = Ending Inventory Units × WAC`

7. **Verify the accounting equation**:
   - `Total Cost Available = COGS + Ending Inventory Value`
   - Flag any rounding discrepancy greater than $0.02.

8. **Handle edge cases**:
   - If units sold exceed units available, flag an error and stop.
   - If no units sold are provided, report WAC and total inventory value only.
   - If opening inventory is $0 or not mentioned, treat as zero and note the assumption.

## Output Format

Produce a structured report with these sections:

**Inventory Lot Summary**
| Lot | Units | Unit Cost | Total Cost |
|-----|-------|-----------|------------|
| (each lot row) |
| **Total** | X units | — | $X.XX |

**Weighted Average Unit Cost**
- WAC = $X.XXXX (display full precision)

**COGS & Ending Inventory**
- Units Sold: X
- COGS: $X.XX
- Ending Inventory Units: X
- Ending Inventory Value: $X.XX

**Verification Check**
- Total Cost Available: $X.XX = COGS $X.XX + Ending Inventory $X.XX ✓

Include a one-line note on any assumptions made (e.g., no opening inventory assumed, periodic vs. perpetual method used). Keep the response concise — no narrative padding beyond the tables and labeled figures.
