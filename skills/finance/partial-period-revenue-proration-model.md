---
name: partial-period-revenue-proration-model
description: >
  Calculates prorated revenue recognition amounts for contracts that start or terminate mid-period across multiple billing cycle types. Use when someone says "prorate a contract," asks about mid-month revenue recognition, wants to calculate partial-period billing, needs to handle a contract that starts mid-cycle, or is trying to figure out how much revenue to recognize for an incomplete period.
category: finance
tags: [revenue-recognition, proration, billing, contracts, SaaS]
author: community
---

# Partial-Period Revenue Proration Model

This skill computes accurate prorated revenue amounts for contracts beginning or ending mid-period, supporting daily, weekly, monthly, and annual billing cycles, and outputs a structured breakdown Claude uses whenever partial-period revenue recognition is needed.

## Proration Calculation Workflow

### 1. Collect Required Inputs
- Contract start date and end date (or termination date)
- Total contract value (TCV) or periodic rate (monthly, annual, etc.)
- Billing cycle type: daily, weekly, monthly, quarterly, or annual
- Period start and period end dates for the billing period in question
- Calendar convention: actual days, 30/360, or 30/365

### 2. Determine the Applicable Days in Period
- Identify the full period length based on billing cycle:
  - Monthly: use actual days in the calendar month (or 30 if 30/360)
  - Annual: use 365 (or 366 for leap years, or 360 if 30/360)
  - Weekly: 7 days
  - Quarterly: actual days in quarter (or 90 if 30/360)
- Identify the active days: the overlap between the contract active window and the billing period
- Formula: `Active Days = MIN(contract_end, period_end) - MAX(contract_start, period_start) + 1`

### 3. Calculate the Periodic Rate
- If given TCV and contract duration: `Periodic Rate = TCV / total_contract_periods`
- If given an annual rate: `Monthly Rate = Annual Rate / 12` (or divide by 365 for daily)
- Normalize to a daily rate: `Daily Rate = Periodic Rate / Days in Full Period`

### 4. Compute Prorated Amount
- `Prorated Revenue = Daily Rate × Active Days`
- Round to 2 decimal places (currency precision)
- Flag if Active Days ≤ 0 (no revenue recognized — contract outside period)

### 5. Handle Edge Cases
- **Same-day start and end**: Active Days = 1; recognize one day of revenue
- **Mid-month termination with refunds**: compute unearned portion = `Full Period Amount - Prorated Revenue`
- **Overlapping amendments**: split the period at the amendment date and prorate each segment separately
- **Leap years**: use actual day count unless 30/360 is specified
- **Timezone ambiguity**: assume contract dates are in the customer's local timezone unless stated otherwise

### 6. Validate Output
- Confirm: `Prorated Amount ≤ Full Period Amount`
- Confirm: `Active Days ≤ Days in Full Period`
- If inputs are inconsistent (e.g., start date after end date), state the conflict explicitly and ask for clarification before proceeding

## Output Format

Produce a structured proration summary with the following sections:

**Inputs Summary**
- List every input value used (dates, rates, cycle type, convention)

**Period Analysis**
- Full period: [start] to [end] = [N] days
- Contract active window: [start] to [end]
- Active days in period: [N]

**Calculation Breakdown**
- Full periodic rate: $[amount]
- Daily rate: $[amount] / day
- Prorated amount: $[daily rate] × [active days] = **$[result]**

**Edge Case Notes**
- Call out any edge cases detected and how they were handled

**Unearned / Remaining Revenue** (if applicable)
- Unearned amount: $[full period amount] − $[prorated amount] = $[result]

Format numbers with comma separators and two decimal places. If multiple periods or amendments are involved, produce one calculation block per segment and a totals row. Keep the output scannable — use tables when three or more segments are present.
