---
name: stock-compensation-expense-modeling
description: >
  Builds detailed vesting schedules and periodic stock-based compensation expense calculations for employee equity grants. Use when someone asks about stock option expensing, needs to model RSU or option vesting schedules, wants to calculate ASC 718 compensation expense, is setting up equity grant accounting, or needs to spread stock-based compensation over a service period.
category: finance
tags: [stock-compensation, equity, vesting, asc718, options, rsus, payroll]
author: community
---

# Stock Compensation Expense Modeling

This skill builds complete vesting schedules and computes periodic stock-based compensation expense for employee equity grants under cliff and graded vesting structures, following ASC 718 / IFRS 2 principles.

## Grant Input Collection

Gather the following before building any schedule:

1. **Grant type** — ISO, NSO, RSU, or PRSU
2. **Grant date** — exact date; used as the expense recognition start
3. **Number of shares/units** — total granted
4. **Grant-date fair value per share** — for options, use Black-Scholes or binomial output; for RSUs, use stock price on grant date
5. **Vesting structure** — choose one:
   - **Cliff**: 100% vests on a single date (e.g., 1-year cliff)
   - **Graded**: tranches vest at regular intervals (e.g., 25% per year over 4 years)
   - **Combined**: cliff + graded (e.g., 25% at 1 year, then monthly thereafter)
6. **Total vesting period** — in months or years
7. **Reporting period granularity** — monthly, quarterly, or annual expense output
8. **Forfeiture assumption** — either estimated annual forfeiture rate (%) or actual-forfeiture method

## Vesting Schedule Construction

**Step 1 — Compute total grant-date fair value (GDFV)**
```
Total GDFV = Shares × Fair Value per Share
```

**Step 2 — Define vesting tranches**
- Cliff: single tranche = 100% of shares vesting on cliff date
- Graded: split into N equal tranches, each with its own vesting date
  - Tranche i shares = Total Shares / N
  - Tranche i vesting date = Grant Date + (i × interval)

**Step 3 — Apply forfeiture adjustment**
- Estimated method: multiply each tranche's GDFV by `(1 − annual forfeiture rate)^years_to_vest`
- Actual method: true-up expense each period as forfeitures occur; no upfront reduction

**Step 4 — Assign expense per tranche per period**
- For each tranche i with fair value FVᵢ and service period Pᵢ (in reporting units):
  ```
  Periodic expense for tranche i = FVᵢ / Pᵢ   [per reporting period within service window]
  ```
- Graded vesting uses the **tranche-by-tranche method** (each tranche is a separate award)
- Cliff vesting uses **straight-line** over the single service period

**Step 5 — Aggregate across all tranches**
- Sum tranche-level expense for each reporting period to get total period expense
- Cumulative expense must never exceed recognized GDFV (after forfeiture adjustments)

**Step 6 — True-up entries (if actual forfeiture method)**
- Each period: compare cumulative expense to date vs. expense implied by actual headcount
- Record catch-up or reversal in the current period; do not restate prior periods

## Reporting Period Table

Build a row-per-period table with these columns:

| Period | Period Start | Period End | Tranche 1 Exp | Tranche 2 Exp | … | Total Period Exp | Cumulative Exp | Remaining Unamortized |

Flag any period where a vesting event occurs with a ✓ in a "Vest Event" column.

## Output Format

Produce the following sections in order:

**1. Grant Summary Block**
- Grant type, grant date, total shares, fair value per share, total GDFV, vesting structure description, for
