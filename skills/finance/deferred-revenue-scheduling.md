---
name: deferred-revenue-scheduling
description: >
  Automates the creation of revenue recognition schedules for prepaid contracts, subscriptions,
  and advance payments to ensure income is recorded in the correct accounting periods according
  to GAAP/IFRS standards. Use when someone says "we received a prepaid contract," asks about
  "spreading revenue over time," wants to "build a deferred revenue schedule," needs to "recognize
  subscription income monthly," or is trying to "amortize a prepaid service agreement."
category: finance
tags: [revenue-recognition, deferred-revenue, subscriptions, accounting, GAAP, IFRS, amortization]
author: community
---

# Deferred Revenue Scheduling

This skill generates period-by-period revenue recognition schedules for prepaid contracts and subscriptions, determining how and when deferred revenue should be recognized as earned income across accounting periods.

## Revenue Recognition Workflow

### 1. Gather Contract Details
Collect the following inputs before building any schedule:
- **Contract start date** and **end date** (or total term in months/days)
- **Total contract value** (full prepayment amount)
- **Recognition method**: straight-line (default), milestone-based, or usage-based
- **Reporting period granularity**: monthly, quarterly, or annual
- **Partial period handling**: prorate by days, recognize full first/last month, or skip partial months
- **Currency** and any applicable tax exclusions

### 2. Validate Recognition Method
- **Straight-line**: Divide total contract value evenly across all periods
- **Milestone-based**: Assign revenue amounts to specific deliverable completion dates provided by the user
- **Usage-based**: Apply percentages per period based on usage data or estimated consumption curves provided by the user
- If method is unclear, default to straight-line and note the assumption explicitly

### 3. Calculate Period Amounts

**Straight-line formula:**
```
Period Revenue = Total Contract Value ÷ Total Number of Full Periods
Partial Period Revenue = (Daily Rate × Days in Partial Period)
Daily Rate = Total Contract Value ÷ Total Contract Days
```

**For each period:**
1. Determine period start and end date
2. Calculate revenue recognized in that period
3. Compute cumulative revenue recognized to date
4. Compute remaining deferred revenue balance (Total Value − Cumulative Recognized)

### 4. Handle Edge Cases
- **Mid-month start**: Prorate first and last periods by day count unless user specifies otherwise
- **Renewals**: Treat each contract term independently; do not blend across renewal periods
- **Early termination clauses**: Flag periods beyond any stated cancellation window with a note
- **Multi-element arrangements**: Request a breakdown of standalone selling prices (SSPs) before proceeding; do not bundle unless instructed

### 5. Apply Accounting Entries (Optional Narrative)
If requested, describe the journal entry logic for each period:
- On receipt: Debit Cash / Credit Deferred Revenue (liability)
- Each recognition period: Debit Deferred Revenue / Credit Revenue

### 6. Flag Compliance Considerations
- Note if ASC 606 (US GAAP) or IFRS 15 performance obligation identification is required
- Flag any contract value above $1M for disclosure consideration
- Note if variable consideration or refund liabilities may apply

## Output Format

Produce the following in order:

### Summary Block
```
Contract: [Name or ID]
Total Value: $[amount]
Term: [start date] to [end date] ([X] months / [Y] days)
Recognition Method: [method]
Reporting Granularity: [monthly/quarterly/annual]
Daily Rate: $[amount] (if applicable)
```

### Recognition Schedule Table
| Period | Start Date | End Date | Days | Revenue Recognized | Cumulative Recognized | Deferred Balance |
|--------|------------|----------|------|-------------------|----------------------|-----------------|
| 1      | YYYY-MM-DD | YYYY-MM-DD | ## | $##,###.## | $##,###.## | $##,###.## |
| ...    | ...        | ...      | ... | ...               | ...                  | ...             |
| **Total** | | | | **$[total]** | | **$0.00** |

- Always show the deferred balance reaching **$0.00** at
