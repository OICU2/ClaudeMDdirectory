---
name: intercompany-profit-elimination-scheduler
description: >
  Calculates and schedules the elimination of unrealized intercompany profit embedded in inventory or fixed assets transferred between consolidated entities. Use when someone asks about eliminating intercompany profits, needs to remove unrealized gains from consolidated financials, wants to calculate the deferred profit in intercompany inventory transfers, or is preparing consolidation journal entries for upstream or downstream sales between subsidiaries.
category: finance
tags: [consolidation, intercompany, elimination, unrealized-profit, ifrs, gaap]
author: community
---

# Intercompany Profit Elimination Scheduler

This skill calculates unrealized intercompany profit embedded in inventory or fixed assets and generates a scheduled elimination plan with journal entries for consolidated financial statements.

## Workflow

### 1. Gather Transfer Details
Collect the following inputs before proceeding:
- Selling entity and buying entity names
- Transfer price and original cost of goods/assets transferred
- Asset type: **inventory** or **fixed asset**
- Percentage of inventory still on hand at period end (for inventory) or remaining useful life and depreciation method (for fixed assets)
- Ownership percentage (upstream vs. downstream sale direction)
- Applicable accounting standard: IFRS or US GAAP
- Reporting period and any prior-period unamortized eliminations

### 2. Calculate Unrealized Profit
**For inventory transfers:**
- Unrealized profit = (Transfer price − Cost) × % inventory remaining unsold at period end
- Full elimination required regardless of ownership percentage under both IFRS and US GAAP

**For fixed asset transfers:**
- Total unrealized profit = Transfer price − Net book value at transfer date
- Current period elimination = Total unrealized profit × (1 − proportion depreciated in current period)
- Depreciation over-charge adjustment = Unrealized profit ÷ Remaining useful life (annual reversal amount)

### 3. Apply Ownership Adjustments (IFRS only)
- **Downstream sale** (parent → subsidiary): Eliminate 100% of unrealized profit against parent's retained earnings
- **Upstream sale** (subsidiary → parent): Eliminate 100% of unrealized profit; apportion NCI share against NCI equity if partial ownership

### 4. Generate Elimination Journal Entries

**Inventory — current period:**
```
Dr. Sales / Intercompany Revenue         [Transfer price]
   Cr. Cost of Goods Sold                [Original cost]
   Cr. Inventory                         [Unrealized profit amount]
```

**Fixed asset — transfer period:**
```
Dr. Gain on Sale / Intercompany Revenue  [Unrealized profit]
   Cr. Fixed Asset (net)                 [Unrealized profit amount]
```

**Fixed asset — subsequent periods (depreciation reversal):**
```
Dr. Accumulated Depreciation             [Annual reversal amount]
   Cr. Depreciation Expense              [Annual reversal amount]
```

### 5. Build the Elimination Schedule
Create a period-by-period table tracking:
- Opening unamortized unrealized profit
- Current period elimination or reversal
- Closing unamortized unrealized profit
- Cumulative NCI adjustment (if applicable)

### 6. Flag Edge Cases
Raise explicit warnings for:
- Intercompany transfers near period end with incomplete sell-through data
- Transfers involving impaired assets (unrealized loss treatment differs)
- Tax-effected eliminations (deferred tax asset may arise — flag for tax team)
- Multiple-layer eliminations (sub-subsidiary chains)

## Output Format

Produce the following sections in order:

1. **Summary Table** — one row per transfer showing: entities involved, asset type, transfer price, cost, unrealized profit, % eliminated this period, net elimination amount.

2. **Journal Entries** — clearly labelled eliminating entries for the current period, formatted as debit/credit pairs with account names and amounts.

3. **Elimination Schedule** — a multi-period table (minimum 3 periods or full asset life) showing opening balance, current adjustment, and closing balance of unrealized profit.

4. **NCI Impact** (if applicable) — quantified effect on non-controlling interest equity and income.

5. **Flags & Notes** — bulleted list of any warnings, assumptions made, or items requiring tax/audit review.

Use tables for all numeric data. Label all amounts with currency. State the accounting standard applied. Keep
