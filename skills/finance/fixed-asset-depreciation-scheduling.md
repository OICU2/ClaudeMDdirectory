---
name: fixed-asset-depreciation-scheduling
description: >
  Generates detailed depreciation schedules for capital assets using straight-line, declining balance, or MACRS methods to support accurate financial reporting and tax planning. Use when someone needs to depreciate an asset, asks about calculating annual depreciation, wants to build a depreciation schedule, needs to determine book value over time, or is preparing fixed asset reports for financial statements.
category: finance
tags: [depreciation, fixed-assets, accounting, macrs, financial-reporting]
author: community
---

# Fixed Asset Depreciation Scheduling

This skill generates complete, period-by-period depreciation schedules for capital assets and will activate whenever a user needs to calculate asset depreciation, compare depreciation methods, or produce schedules for financial or tax reporting.

## Depreciation Scheduling Workflow

### 1. Gather Asset Information
Collect the following before computing:
- **Asset cost basis** (purchase price + capitalized acquisition costs)
- **Salvage/residual value** (estimated value at end of useful life; $0 for MACRS)
- **Useful life** (years or units, depending on method)
- **In-service date** (determines partial-year conventions)
- **Depreciation method**: straight-line (SL), declining balance (DB/DDB), or MACRS
- **Asset class** (for MACRS: 3-, 5-, 7-, 10-, 15-, 20-year, residential, or nonresidential)

If the user has not provided required fields, ask for them explicitly before proceeding.

### 2. Apply the Correct Method

**Straight-Line (SL)**
- Annual depreciation = (Cost − Salvage Value) / Useful Life
- Depreciation is equal every period
- Apply half-year convention if asset is placed in service mid-year

**Declining Balance (DB / Double Declining Balance)**
- DB rate = (1 / Useful Life) × DB factor (1.5× or 2×)
- Annual depreciation = Beginning Book Value × DB rate
- Switch to straight-line in the year SL yields a higher deduction
- Depreciation floor = Salvage Value (book value never goes below salvage)

**MACRS (Modified Accelerated Cost Recovery System)**
- Use IRS MACRS percentage tables for the applicable property class
- Apply half-year convention by default; mid-quarter convention if >40% of assets placed in service in Q4
- No salvage value under MACRS
- Reference GDS (General Depreciation System) unless ADS is required
- Common classes: 5-year (cars, computers), 7-year (office furniture, machinery), 39-year (nonresidential real property), 27.5-year (residential rental)

### 3. Build the Schedule
For each period (year or month), calculate:
1. Beginning Book Value
2. Depreciation Expense for the period
3. Accumulated Depreciation (running total)
4. Ending Book Value

Validate: Ending Book Value in final year = Salvage Value (SL/DB) or $0 (MACRS).

### 4. Handle Edge Cases
- **Partial first/last year**: prorate SL; use IRS convention table percentages for MACRS
- **Asset disposal mid-life**: calculate depreciation through disposal date and compute gain/loss = Proceeds − Book Value at Disposal
- **Bonus depreciation / Section 179**: note eligibility and apply in Year 1 if requested, then depreciate remaining basis
- **Currency**: match user's currency; format numbers with thousands separators

## Output Format

Produce the following for each asset:

**Asset Summary Block**
```
Asset:              [Name/Description]
Cost Basis:         $XX,XXX
Salvage Value:      $X,XXX
Useful Life:        X years
Method:             [SL / DDB / MACRS X-year]
In-Service Date:    [MM/DD/YYYY]
```

**Depreciation Schedule Table**
| Year | Beginning Book Value | Depreciation Expense | Accumulated Depreciation | Ending Book Value |
|------|---------------------|---------------------|--------------------------|-------------------|
| 1    | $XX,XXX             | $X,XXX              | $X,XXX                   | $XX,XXX           |
| ...  | ...                 
