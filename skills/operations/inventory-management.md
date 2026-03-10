---
name: inventory-management
description: >
  Tracks and optimizes inventory levels to balance supply with demand while minimizing carrying costs and stockouts. Use when someone says "we're running out of stock," asks about reorder points, wants to reduce inventory costs, needs to forecast demand, or is dealing with overstock or dead inventory problems.
category: operations
tags: [inventory, supply-chain, demand-forecasting, operations, procurement]
author: community
---

# Inventory Management

This skill analyzes inventory data, calculates reorder points and safety stock, and produces actionable recommendations to prevent stockouts and reduce excess inventory.

## Inventory Analysis Workflow

1. **Gather current state data**
   - List SKUs with current stock levels, unit costs, and storage costs
   - Collect historical sales/consumption data (minimum 3 months, ideally 12+)
   - Note lead times per supplier and order minimums

2. **Calculate key metrics per SKU**
   - **Average Daily Demand** = Total units sold ÷ number of days in period
   - **Reorder Point (ROP)** = (Average Daily Demand × Lead Time in days) + Safety Stock
   - **Safety Stock** = Z-score × Standard Deviation of Demand × √Lead Time
     - Use Z = 1.65 for 95% service level, 1.28 for 90%
   - **Economic Order Quantity (EOQ)** = √(2 × Annual Demand × Order Cost ÷ Holding Cost per unit)
   - **Days of Supply** = Current Stock ÷ Average Daily Demand

3. **Classify inventory by priority**
   - **ABC Analysis**: Rank SKUs by revenue contribution
     - A items: top 70–80% of revenue (high attention, tight controls)
     - B items: next 15–25% of revenue (moderate controls)
     - C items: bottom 5–10% of revenue (simple rules, bulk orders)
   - **Flag problem inventory**:
     - Stockout risk: Days of Supply < Lead Time + Safety Stock days
     - Overstock: Days of Supply > 90 days (or industry threshold)
     - Dead stock: Zero movement in 60+ days

4. **Identify root causes for problems**
   - Demand spikes, seasonality, supplier delays, poor forecasting, min/max rules not updated
   - Check if reorder points were ever set or are outdated

5. **Generate recommendations**
   - For each at-risk SKU: specific reorder quantity and timing
   - For overstock: markdown strategy, return to supplier, or reallocation options
   - For systemic issues: process fixes (e.g., review cycle, supplier diversification)

6. **Set up ongoing controls**
   - Define review frequency by ABC class (A = weekly, B = bi-weekly, C = monthly)
   - Recommend alert thresholds for stockout risk and excess
   - Suggest cycle count schedule

## Output Format

Produce a structured inventory report with these sections:

**Summary Table** (one row per SKU):
| SKU | Current Stock | Avg Daily Demand | Days of Supply | ROP | Status |
Include color-coded status: 🔴 Stockout Risk / 🟡 Watch / 🟢 Healthy / ⚪ Overstock

**Top 5 Urgent Actions** — numbered list, each with:
- SKU name and issue
- Specific action (e.g., "Order 240 units of SKU-1042 by Friday; lead time is 7 days and current stock hits ROP in 5 days")
- Expected impact

**Metrics Summary** — total SKUs analyzed, % at stockout risk, % overstocked, estimated carrying cost of excess inventory

**Recommended Reorder Schedule** — table of upcoming orders with SKU, quantity, order-by date, and supplier

Keep the report scannable. Use tables for data, bullet points for actions. Flag any assumptions made when data was incomplete.