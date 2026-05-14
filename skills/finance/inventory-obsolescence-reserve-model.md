---
name: inventory-obsolescence-reserve-model
description: >
  Calculates inventory obsolescence reserves by applying aging-based write-down percentages to slow-moving or excess stock identified from turnover data. Use when someone asks about inventory reserves, wants to estimate write-downs for slow-moving stock, needs to calculate obsolescence provisions, is building an inventory aging analysis, or wants to assess excess and obsolete inventory exposure.
category: finance
tags: [inventory, obsolescence, reserves, write-down, aging-analysis]
author: community
---

# Inventory Obsolescence Reserve Model

This skill builds a structured obsolescence reserve calculation by bucketing inventory into aging tiers and applying standard or custom write-down percentages to arrive at a total reserve requirement.

## Workflow

### 1. Gather Inputs
Collect or prompt for:
- Inventory line items with quantities and unit costs (or total extended cost)
- Last movement date or days since last sale/usage for each SKU or category
- Annual inventory turnover rate (or COGS and average inventory to compute it)
- Any existing reserve balance on the books
- Industry or company-specific reserve policy (if provided); otherwise apply defaults

### 2. Calculate Days on Hand / Aging
For each SKU or category:
- **Days on Hand** = (Quantity on Hand / Average Daily Usage) OR derive from turnover: Days on Hand = 365 / Turnover Rate
- If turnover data is unavailable, use Last Movement Date to compute days since last activity

### 3. Bucket Inventory into Aging Tiers
Assign each item to a standard aging bucket:

| Aging Tier | Days on Hand | Default Reserve % |
|---|---|---|
| Current / Active | 0–90 days | 0% |
| Slow-Moving | 91–180 days | 10% |
| Excess | 181–365 days | 25% |
| Obsolete Risk | 366–730 days | 50% |
| Fully Obsolete | 730+ days | 100% |

Override percentages if the user provides a company-specific reserve policy.

### 4. Calculate Reserve by Tier
For each tier:
- **Reserve Amount** = Extended Inventory Cost × Reserve %
- Sum all tiers to get **Gross Reserve Requirement**

### 5. Compute Net Reserve Adjustment
- **Net Reserve Adjustment** = Gross Reserve Requirement − Existing Reserve Balance
- Positive = additional reserve needed (income statement charge)
- Negative = reserve release (income statement credit)

### 6. Flag Key Risk Items
Identify SKUs or categories where:
- Reserve % ≥ 50% and extended cost > a materiality threshold (default: top 10 items by reserve dollar or >5% of total reserve)
- Turnover rate is below industry benchmark (prompt user for benchmark or use <2x annually as default)

### 7. Sensitivity Analysis (if requested)
Run reserve totals under three scenarios:
- **Base Case**: default percentages above
- **Conservative**: increase each tier's % by 10 percentage points
- **Aggressive**: decrease each tier's % by 10 percentage points (floor at 0%)

## Output Format

Produce the following sections in order:

**1. Input Summary**
- Total inventory at cost, number of SKUs/categories analyzed, existing reserve balance

**2. Aging Tier Summary Table**
Markdown table with columns: Tier | Days Range | Inventory Cost | Reserve % | Reserve Amount

**3. Reserve Calculation Summary**
- Gross Reserve Requirement
- Existing Reserve Balance
- Net Reserve Adjustment (charge or release)
- Reserve as % of Total Inventory

**4. High-Risk Items**
Bulleted list of flagged SKUs/categories with aging tier, extended cost, and reserve amount

**5. Sensitivity Table** (if requested)
Markdown table: Scenario | Gross Reserve | Net Adjustment | Reserve %

**6. Recommendations**
2–4 concise bullet points covering disposal options, reorder policy changes, or reserve policy adjustments based on findings

Keep all numbers formatted with commas and two decimal places. Label all percentages clearly. If input data is incomplete, state assumptions explicitly before proceeding.
