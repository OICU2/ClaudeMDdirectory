---
name: revenue-run-rate-normalization-builder
description: >
  Strips out one-time items, partial periods, and seasonal distortions from revenue data to produce a clean annualized run-rate figure. Use when someone says "what is our run rate," asks about annualizing revenue, wants to normalize revenue figures, needs to remove one-time items from financials, or is trying to project forward revenue from partial-period data.
category: finance
tags: [revenue, run-rate, normalization, annualization, financial-modeling]
author: community
---

# Revenue Run-Rate Normalization Builder

This skill cleans raw revenue data by stripping one-time items, partial periods, and seasonal noise, then produces a defensible annualized run-rate figure with full documentation of every adjustment made.

## Normalization Workflow

### Step 1: Collect Raw Inputs
Ask the user for the following if not provided:
- Revenue figures (with time periods clearly labeled — monthly, quarterly, or YTD)
- Known one-time items (settlements, insurance proceeds, large non-recurring contracts, asset sales)
- Partial period flags (e.g., business acquired mid-month, product launched mid-quarter)
- Any known seasonality pattern (e.g., retail Q4 spike, summer slowdown)
- Intended use of the run-rate (investor memo, budgeting, acquisition valuation, internal planning)

### Step 2: Strip One-Time Items
- List every non-recurring revenue item identified
- Remove each from the affected period's revenue
- Label each removal with: item name, period affected, amount removed, and rationale
- Flag items where recurrence is ambiguous and ask the user to confirm treatment

### Step 3: Adjust for Partial Periods
- Identify any period where the business was not operating for the full duration
- Annualize partial-period revenue using: `(Revenue / Days Operating) × Days in Full Period`
- Apply the same logic to any acquired or divested business unit
- Document the start/end dates used and the resulting gross-up factor

### Step 4: Smooth Seasonal Distortions
- If 12+ months of data are available, calculate a trailing twelve months (TTM) figure as the primary run-rate
- If fewer than 12 months are available, apply one of these methods (state which was used):
  - **Industry seasonal index**: Divide actual revenue by the known seasonal index for that period, then annualize
  - **Prior-year comp ratio**: Scale current partial-year revenue using the prior-year ratio of that period to full year
  - **Straight-line annualization**: Use only if the user confirms no material seasonality exists
- Flag if seasonality adjustment is based on assumption rather than observed data

### Step 5: Build the Normalized Run-Rate
- Start with raw revenue for the reference period
- Apply each adjustment as a line item (subtract one-time items, gross up partial periods, apply seasonal factor)
- Produce the final annualized run-rate figure
- Calculate run-rate as an explicit formula so it can be audited: `Normalized Period Revenue × Annualization Factor`

### Step 6: Sensitivity Check
- Show the run-rate under three scenarios: Base (all adjustments applied), Conservative (partial-period gross-up removed or reduced), Upside (seasonality not adjusted down)
- Flag any single adjustment that changes the run-rate by more than 10% — these require explicit user confirmation before finalizing

## Output Format

Produce a structured normalization summary with the following sections:

**1. Raw Revenue Summary**
Table of input periods, raw revenue figures, and any flags noted by the user.

**2. Adjustments Log**
Numbered list of every adjustment made:
- Adjustment type (one-time removal / partial-period gross-up / seasonal normalization)
- Period affected
- Dollar amount and direction (+/-)
- Rationale in one sentence

**3. Normalized Run-Rate Calculation**
Single clean formula block showing:
```
Raw Revenue (Reference Period):       $X
  Less: One-Time Items:              ($X)
  Plus: Partial-Period Gross-Up:      $X
  Adjusted for Seasonality:          ($X / +$X)
= Normalized Period Revenue:          $X
  × Annualization Factor:            [e.g., 4x for one quarter]
= Annualized Run-Rate:
