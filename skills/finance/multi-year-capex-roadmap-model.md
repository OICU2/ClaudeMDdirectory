---
name: multi-year-capex-roadmap-model
description: >
  Projects capital expenditure requirements, depreciation schedules, and net book value across a multi-year planning horizon. Use when someone asks about capital spending plans, wants to build a CapEx forecast, needs to model asset depreciation over time, is planning infrastructure or equipment investments across multiple years, or wants to understand the balance sheet impact of major capital projects.
category: finance
tags: [capex, depreciation, financial-modeling, fixed-assets, planning]
author: community
---

# Multi-Year CapEx Roadmap Model

This skill builds a structured multi-year capital expenditure model including asset acquisition schedules, depreciation calculations, net book value tracking, and cash flow impact — used whenever someone needs to plan, forecast, or analyze capital investments across a planning horizon.

## CapEx Modeling Workflow

1. **Gather inputs** — Collect or prompt for: planning horizon (years), list of capital projects or asset categories, estimated cost per project, expected acquisition dates, useful life per asset class, depreciation method (straight-line, double-declining balance, MACRS, units of production), and any salvage values.

2. **Build the asset schedule** — For each asset or project, record: asset name/category, acquisition year, gross cost, useful life, depreciation method, salvage value, and the year it becomes fully depreciated.

3. **Calculate annual depreciation per asset** — Apply the selected method:
   - Straight-line: (Cost − Salvage) ÷ Useful Life
   - Double-declining: (2 ÷ Useful Life) × Beginning Book Value each year
   - MACRS: apply IRS percentage tables by recovery class
   - Prorate partial-year acquisitions using half-year or mid-quarter convention as appropriate.

4. **Roll up depreciation by year** — Sum depreciation across all assets for each year in the planning horizon to produce total annual D&A expense.

5. **Track net book value (NBV)** — For each asset and year: NBV = Prior Year NBV − Current Year Depreciation. Flag assets that reach zero or salvage value.

6. **Model CapEx cash outflows** — Separate the timing of cash payments from depreciation. If projects span multiple years, split payments across acquisition milestones.

7. **Summarize balance sheet and P&L impact** — Calculate cumulative gross PP&E, accumulated depreciation, and net PP&E for each year-end. Link depreciation to operating expense or COGS as appropriate to the business context.

8. **Identify key insights** — Flag peak CapEx years, depreciation cliffs (years where large assets become fully depreciated), and years with significant NBV step-downs.

## Output Format

Produce the following sections in order:

**1. Assumptions Table**
- Planning horizon, depreciation methods used, salvage value assumptions, partial-year convention

**2. Asset Schedule**
Tabular format with columns: Asset Name | Acquisition Year | Gross Cost | Useful Life | Method | Salvage Value | First Full Depreciation Year

**3. Annual Depreciation Schedule**
Year-by-year table: each asset as a row, each year as a column, with a totals row. Include a subtotal for assets acquired in each period.

**4. Net Book Value Roll-Forward**
Table: Year | Beginning NBV | CapEx Additions | Depreciation | Ending NBV | Accumulated Depreciation | Gross PP&E

**5. CapEx Cash Flow Timeline**
Bar-style summary or table showing cash outflows by year, separated from non-cash depreciation.

**6. Key Observations**
3–5 bullet points highlighting peak spend years, depreciation cliffs, fully depreciated asset risks, and balance sheet trends.

Use markdown tables throughout. If working with real numbers, present values in thousands or millions with consistent units labeled. If inputs are incomplete, state assumptions explicitly before proceeding.
