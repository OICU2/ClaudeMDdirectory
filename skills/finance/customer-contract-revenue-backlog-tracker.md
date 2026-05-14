---
name: customer-contract-revenue-backlog-tracker
description: >
  Schedules remaining performance obligations from signed contracts into future periods to project recognized revenue and backlog drawdown over time. Use when someone says "we need to map out our contract backlog," asks about "remaining performance obligations," wants to "project revenue from signed deals," needs to "schedule contract revenue recognition," or is trying to "track how much backlog we have left to recognize."
category: finance
tags: [revenue-recognition, backlog, contracts, ASC-606, forecasting]
author: community
---

# Customer Contract Revenue Backlog Tracker

This skill schedules remaining performance obligations from signed contracts into future reporting periods, producing a period-by-period revenue recognition schedule and running backlog balance, and Claude will use it whenever a user needs to model how contracted but unrecognized revenue will flow through future financials.

## Workflow

### 1. Collect Contract Data
Prompt the user to provide (or accept input as a table/CSV) the following fields per contract:
- Contract ID / Customer Name
- Contract Start Date and End Date
- Total Contract Value (TCV)
- Amount Already Recognized to Date
- Revenue Recognition Method: straight-line, milestone-based, or delivery-based
- Any variable or contingent amounts (flag separately)

### 2. Calculate Remaining Performance Obligation (RPO)
For each contract:
- RPO = TCV − Amount Already Recognized
- Flag contracts where RPO ≤ 0 as fully recognized (exclude from schedule)
- Note any contracts with variable consideration separately

### 3. Build the Recognition Schedule
For each active contract, spread the RPO across future periods:

**Straight-line:** Divide RPO evenly across remaining months/quarters between today and contract end date.

**Milestone-based:** Ask the user to specify milestone dates and values; assign revenue to the period each milestone is achieved.

**Delivery-based:** Ask the user to specify delivery dates and unit values; assign revenue to each delivery period.

Round to two decimal places. Flag any rounding residuals and assign them to the final period.

### 4. Aggregate Across All Contracts
- Sum recognized revenue per period across all contracts
- Compute running backlog: Starting Backlog − Cumulative Recognized = Ending Backlog per period
- Identify periods with unusually high or low recognition (>20% variance from average) and annotate

### 5. Validate and Flag Risks
- Contracts ending within 90 days with large remaining RPO: flag as acceleration risk
- Contracts with end dates more than 3 years out: flag for renewal/extension assumption review
- Any contract where recognition method was not specified: flag for clarification

## Output Format

Produce three deliverables:

**1. Contract Summary Table**
One row per contract with columns: Contract ID | Customer | TCV | Recognized to Date | RPO | End Date | Recognition Method | Risk Flags

**2. Period-by-Period Revenue Schedule**
Columns: Period (Month or Quarter) | [Contract ID columns, one per contract] | Total Revenue Recognized | Cumulative Recognized | Ending Backlog Balance
- Default to quarterly periods; switch to monthly if the user specifies or if contract durations are under 12 months
- Include a totals row

**3. Key Observations (3–5 bullet points)**
- Largest single-period revenue recognition and which contracts drive it
- Estimated date when backlog falls below 25% of starting value
- Any flagged risks from Step 5
- Assumptions made where data was missing or ambiguous

Present tables in Markdown. If the dataset exceeds 10 contracts, offer to export as CSV structure instead of inline Markdown.
