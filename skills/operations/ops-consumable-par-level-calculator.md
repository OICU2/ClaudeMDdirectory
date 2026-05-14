---
name: ops-consumable-par-level-calculator
description: >
  Calculates optimal par levels for operational consumables by analyzing usage rates, supplier lead times, and safety stock needs. Use when someone asks about reorder points for supplies, wants to know how much stock to keep on hand, needs to set inventory minimums for consumables, is trying to avoid stockouts on operational items, or wants to optimize their supply ordering frequency.
category: operations
tags: [inventory, par-levels, consumables, safety-stock, reorder-points]
author: community
---

# Consumable Par Level Calculator

This skill determines optimal minimum and reorder stock levels for operational consumables using usage data, lead times, and acceptable risk tolerance, activating whenever someone needs to set inventory thresholds for supplies they regularly consume.

## Par Level Calculation Workflow

### 1. Gather Required Inputs
Ask for the following if not provided:
- **Average daily usage** (units/day) — or weekly/monthly usage to convert
- **Usage variability** — steady, moderate fluctuation, or highly variable
- **Supplier lead time** — days from order placement to receipt
- **Lead time variability** — consistent, sometimes delayed, or frequently delayed
- **Review frequency** — how often inventory is checked and orders placed
- **Desired service level** — acceptable stockout risk (default to 95% if not stated)
- **Unit cost** — optional, used for carrying cost context

### 2. Calculate Core Components

**Average Daily Usage (ADU)**
- Convert any non-daily figures: weekly ÷ 7, monthly ÷ 30

**Lead Time Demand**
- Lead Time Demand = ADU × Lead Time (days)

**Safety Stock**
Use the appropriate formula based on variability:

- *Low variability:* Safety Stock = ADU × (Lead Time × 0.25)
- *Moderate variability:* Safety Stock = ADU × (Lead Time × 0.5)
- *High variability or 95% service level:* Safety Stock = 1.65 × σ(daily usage) × √(Lead Time)
  - If standard deviation is unknown, estimate σ ≈ ADU × 0.20 for moderate, × 0.35 for high variability

**Reorder Point (ROP)**
- ROP = Lead Time Demand + Safety Stock

**Par Level (Maximum Stock)**
- Par Level = ROP + (ADU × Review Frequency in days)

### 3. Apply Practical Adjustments
- Round up to nearest logical order quantity (case, box, pack)
- Flag if par level implies excessive carrying cost (>60 days supply)
- Note if lead time exceeds 14 days — recommend dual-sourcing
- For highly variable demand, recommend weekly vs. monthly review cycles

### 4. Validate the Output
Cross-check by asking:
- Does safety stock cover at least one full lead time cycle?
- Is the reorder point reachable before stockout occurs?
- Is the par level achievable given storage constraints?

## Output Format

Produce a structured summary with the following sections:

**Inputs Used**
| Parameter | Value |
|---|---|
| Average Daily Usage | X units/day |
| Lead Time | X days |
| Review Frequency | X days |
| Variability Level | Low / Moderate / High |
| Service Level Target | X% |

**Calculated Par Levels**
| Metric | Value |
|---|---|
| Safety Stock | X units |
| Reorder Point | X units |
| Par Level (Max Stock) | X units |
| Days of Supply at Par | X days |

**Ordering Recommendation**
- 1–2 sentences: when to order, how much to order, and suggested review cadence

**Flags & Warnings**
- Bullet list of any concerns (high carrying cost, long lead time risk, low order frequency mismatch)

**Assumptions Made**
- Bullet list of any values estimated or defaulted due to missing input

Keep the output scannable. Avoid prose paragraphs except in the recommendation and flags sections. If multiple SKUs or consumable types are provided, produce a separate table block for each item.
