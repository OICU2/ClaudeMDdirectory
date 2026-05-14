---
name: customer-contract-backlog-scheduler
description: >
  Builds a revenue backlog schedule from signed customer contracts by mapping remaining performance obligations to expected recognition periods. Use when someone says "schedule our contract backlog," asks about "remaining performance obligations," wants to "map revenue recognition from contracts," needs to "build a deferred revenue waterfall," or is trying to "forecast contracted but unrecognized revenue."
category: finance
tags: [revenue-recognition, backlog, contracts, deferred-revenue, forecasting]
author: community
---

# Customer Contract Backlog Scheduler

This skill constructs a period-by-period revenue recognition schedule from signed customer contracts, mapping each contract's remaining obligations to the quarters or months in which revenue will be earned.

## Workflow

### 1. Collect Contract Data
Request or parse the following fields for each contract:
- Customer name
- Contract start and end dates
- Total contract value (TCV)
- Already-recognized revenue to date
- Remaining performance obligations (RPO)
- Recognition method: straight-line, milestone-based, delivery-based, or usage-based
- Any variable or contingent components (exclude or flag separately)

### 2. Compute Remaining Obligation Per Contract
- RPO = TCV − Cumulative revenue recognized to date
- Flag contracts where RPO is zero or negative as fully recognized
- Separate one-time fees from recurring fees if both exist in the same contract

### 3. Assign Recognition Method
Apply the correct recognition logic per contract:
- **Straight-line**: Spread RPO evenly across remaining months/quarters
- **Milestone-based**: Assign RPO to the period when each milestone is expected to be met; request milestone dates if not provided
- **Delivery-based**: Assign revenue to the period of expected delivery; request delivery schedule if not provided
- **Usage-based**: Flag as variable; show expected range using low/base/high assumptions

### 4. Build the Period Schedule
- Define the schedule horizon (ask user: monthly or quarterly, and how many periods forward)
- For each period, sum recognition amounts across all contracts
- Separate columns for: new recognition in period, cumulative recognized, and remaining RPO at period end
- Group by segment, product line, or geography if the user provides that dimension

### 5. Validate and Sanity-Check
- Confirm that sum of all period recognitions equals total RPO across all contracts
- Flag contracts where recognition extends beyond contract end date
- Flag contracts with gaps (periods of zero recognition mid-term) for review
- Highlight the top 5 contracts by RPO value as key schedule drivers

### 6. Surface Key Metrics
Calculate and present:
- Total RPO as of schedule date
- Weighted average remaining contract life (months)
- % of RPO expected to recognize in next 12 months (current portion)
- % of RPO beyond 12 months (non-current portion)
- Revenue certainty classification: contracted/fixed vs. variable/contingent

## Output Format

Produce three components:

**1. Summary Table (top of output)**
| Metric | Value |
|---|---|
| Total RPO | $X |
| Current Portion (≤12 mo) | $X (X%) |
| Non-Current Portion (>12 mo) | $X (X%) |
| Weighted Avg Remaining Life | X months |
| Number of Active Contracts | X |

**2. Period-by-Period Backlog Schedule**
A table with one row per period and these columns:
`Period | Beginning RPO | Revenue Recognized | Ending RPO | # Contracts Contributing`

If segments or product lines are provided, add one sub-table per segment plus a consolidated total.

**3. Contract-Level Detail Table**
One row per contract:
`Customer | TCV | Recognized to Date | RPO | Recognition Method | Schedule End Date | Next 4 Periods (columns)`

Deliver output as markdown tables. If the dataset is large (>20 contracts), offer to export as a CSV-formatted code block. Flag all assumptions made about missing fields in a clearly labeled **Assumptions** section at the end.
