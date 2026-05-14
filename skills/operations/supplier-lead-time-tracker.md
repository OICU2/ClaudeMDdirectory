---
name: supplier-lead-time-tracker
description: >
  Tracks and analyzes supplier lead times across vendors to identify delays, buffer stock requirements, and procurement timing adjustments. Use when someone says "our supplier is running late," asks about vendor lead time trends, wants to calculate reorder points, mentions procurement delays, or needs to compare supplier reliability across vendors.
category: operations
tags: [procurement, supply-chain, inventory, vendors, lead-time]
author: community
---

# Supplier Lead Time Tracker

This skill analyzes supplier lead time data to surface delays, calculate buffer stock needs, and recommend procurement schedule adjustments based on vendor performance patterns.

## Lead Time Analysis Workflow

1. **Collect baseline data** — Request the following for each vendor: promised lead time (days), actual lead time (days), order dates, delivery dates, and item/SKU names. Accept raw tables, CSV paste, or freeform descriptions.

2. **Calculate lead time variance per supplier**
   - Variance = Actual Lead Time − Promised Lead Time
   - Positive variance = delay; negative = early delivery
   - Compute average variance, max variance, and variance rate (% of orders delayed) per supplier

3. **Identify delay patterns**
   - Flag suppliers with average variance > 20% of promised lead time
   - Flag suppliers with delay rate > 30% of orders
   - Note seasonal clusters if date data is available (e.g., delays concentrated in Q4)

4. **Calculate buffer stock requirements**
   - Buffer Stock = (Max Lead Time − Average Lead Time) × Average Daily Demand
   - If daily demand is not provided, prompt the user for it or calculate from order history
   - Present buffer stock in units and estimated holding cost if cost-per-unit is available

5. **Determine adjusted reorder points**
   - Reorder Point = (Average Daily Demand × Average Lead Time) + Buffer Stock
   - Show both the current reorder point (based on promised lead time) and the adjusted reorder point (based on actual lead time)

6. **Rank suppliers by reliability**
   - Score each supplier: 100 − (average variance % + delay rate %)
   - Label: 90–100 = Reliable, 70–89 = Moderate Risk, below 70 = High Risk

7. **Generate procurement timing adjustments**
   - For each high-risk supplier, recommend placing orders N days earlier, where N = average delay variance
   - Flag any suppliers where the adjusted reorder point exceeds current inventory levels as urgent

## Output Format

Produce a structured report with the following sections:

**Supplier Lead Time Summary Table**
| Supplier | Promised LT | Avg Actual LT | Avg Variance | Delay Rate | Risk Label |
|---|---|---|---|---|---|
(one row per supplier)

**Buffer Stock Recommendations**
- Bullet list per SKU or supplier: current buffer, recommended buffer, delta in units

**Reorder Point Adjustments**
- Bullet list per SKU: current reorder point → adjusted reorder point

**Urgent Actions**
- Numbered list of suppliers or SKUs requiring immediate procurement action, with specific recommended order dates if data allows

**Supplier Reliability Rankings**
- Ranked list from most to least reliable with scores

Keep the report scannable. Use tables for comparative data, bullets for recommendations. If data is incomplete, explicitly state what is missing and what assumptions were made.
