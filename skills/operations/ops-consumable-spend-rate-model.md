---
name: ops-consumable-spend-rate-model
description: >
  Projects consumable material usage and spend rate against operational volume to anticipate reorder timing and prevent stockout disruptions. Use when someone says "we're running low on supplies," asks about when to reorder consumables, wants to model burn rate for materials, needs to forecast supply spend against production volume, or is trying to prevent stockouts on operational inputs.
category: operations
tags: [inventory, consumables, spend-rate, reorder-planning, stockout-prevention]
author: community
---

# Consumable Spend Rate Model

This skill builds a data-driven projection of consumable material consumption tied to operational volume, producing reorder timing recommendations and spend forecasts to eliminate stockout risk.

## Modeling Workflow

### 1. Collect Inputs
Gather the following for each consumable item:
- Current on-hand quantity and unit of measure
- Historical usage data (minimum 4 weeks; ask if unavailable)
- Operational volume driver (units produced, orders processed, hours run, etc.)
- Lead time from supplier (days from PO to receipt)
- Safety stock preference (days of buffer; default to 7 if not specified)
- Unit cost

### 2. Calculate Spend Rate
For each consumable:
- **Usage Rate** = Total units consumed ÷ Total volume units (e.g., oz per order, liters per machine-hour)
- **Daily Volume Baseline** = Average operational volume per day (use last 30 days or stated forecast)
- **Daily Consumption** = Usage Rate × Daily Volume Baseline
- **Daily Spend** = Daily Consumption × Unit Cost

### 3. Project Runout Date
- **Days of Supply Remaining** = Current On-Hand ÷ Daily Consumption
- **Projected Runout Date** = Today + Days of Supply Remaining
- **Reorder Trigger Date** = Projected Runout Date − Lead Time Days − Safety Stock Days

### 4. Flag Risk Items
Classify each item:
- 🔴 **Critical**: Reorder Trigger Date has already passed or is within 3 days
- 🟡 **Warning**: Reorder Trigger Date is 4–10 days out
- 🟢 **Healthy**: Reorder Trigger Date is 11+ days out

### 5. Model Volume Sensitivity (if applicable)
If operational volume is expected to change, calculate:
- **Adjusted Daily Consumption** = Usage Rate × Forecasted Volume
- **Adjusted Days of Supply** = Current On-Hand ÷ Adjusted Daily Consumption
- Show the delta in reorder date vs. baseline scenario

### 6. Generate Reorder Quantities
- **Reorder Quantity** = (Lead Time Days + Safety Stock Days + Desired Cycle Days) × Daily Consumption
- Desired Cycle Days = how many days between orders (ask user; default 30)
- Flag if minimum order quantities from supplier affect this calculation

## Output Format

Produce a structured report with the following sections:

**Summary Table** (one row per consumable):
| Item | On-Hand | Daily Consumption | Days Remaining | Runout Date | Reorder By | Reorder Qty | Est. Cost | Status |
|------|---------|-------------------|----------------|-------------|------------|-------------|-----------|--------|

**Risk Callouts**: Bulleted list of 🔴 Critical and 🟡 Warning items with one-line action each (e.g., "Place PO for X units of [item] by [date]").

**Monthly Spend Projection**: Total estimated monthly consumable spend at current volume, broken down by item. Flag any item exceeding 20% of total spend as a cost concentration risk.

**Volume Sensitivity Note** (if volume change was modeled): 2–3 sentences explaining how the forecast shifts and which items are most exposed.

**Assumptions Log**: Bullet list of every assumed value (safety stock days, cycle days, volume baseline, etc.) so the user can correct inputs and rerun.

Keep the output scannable. Use tables and bullets. Avoid prose paragraphs except in the sensitivity note.
