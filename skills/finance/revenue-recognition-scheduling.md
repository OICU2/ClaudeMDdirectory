---
name: revenue-recognition-scheduling
description: >
  Maps contract terms to GAAP-compliant revenue recognition timelines and generates period-by-period recognition schedules. Use when someone says "recognize this revenue," asks about when revenue can be booked, wants to build a deferred revenue schedule, needs to apply ASC 606 to a contract, or is trying to spread contract value across accounting periods.
category: finance
tags: [revenue-recognition, ASC-606, GAAP, deferred-revenue, accounting]
author: community
---

# Revenue Recognition Scheduling

This skill analyzes contract terms and applies ASC 606 / GAAP rules to produce accurate, period-by-period revenue recognition schedules that finance teams can use directly in their books.

## Recognition Workflow

1. **Extract contract inputs** — Identify total contract value (TCV), contract start date, contract end date, billing schedule, performance obligations, and any variable consideration or contingencies.

2. **Identify performance obligations** — List each distinct good or service promised. Determine if they are satisfied at a point in time or over time. Flag bundled arrangements that require standalone selling price (SSP) allocation.

3. **Allocate transaction price** — If multiple performance obligations exist, allocate TCV to each using SSP ratios. Document the allocation method (adjusted market assessment, expected cost plus margin, or residual approach).

4. **Apply recognition timing rules**:
   - **Over time**: Straight-line across the service period unless a better measure of progress exists (output method, input method). Calculate monthly/quarterly amounts.
   - **Point in time**: Recognize on the date control transfers (delivery, acceptance, or specific milestone).
   - **Usage-based / variable**: Recognize only when the usage occurs or the uncertainty resolves.

5. **Build the period schedule** — Create a row for each accounting period (monthly or quarterly) with:
   - Period start and end dates
   - Amount recognized in the period
   - Cumulative recognized to date
   - Remaining deferred revenue balance

6. **Flag exceptions** — Note any contract modifications, refund liabilities, financing components (>12 months), or non-cash consideration that requires additional treatment.

7. **Validate totals** — Confirm that sum of all recognized amounts equals TCV (or allocated amount). Deferred revenue at end of final period must equal zero.

## Output Format

Produce three sections:

**1. Contract Summary Table**
| Field | Value |
|---|---|
| Contract Value | $ |
| Start Date | |
| End Date | |
| Number of Performance Obligations | |
| Recognition Method | |
| Variable Consideration | Yes/No |

**2. Period-by-Period Recognition Schedule**
| Period | Start Date | End Date | Revenue Recognized | Cumulative Recognized | Deferred Balance |
|---|---|---|---|---|---|
| Q1 2025 | Jan 1 | Mar 31 | $X,XXX | $X,XXX | $XX,XXX |
| … | | | | | |

Include a row for every period from contract start to end. Show monthly periods by default; use quarterly only if the contract spans more than 3 years.

**3. ASC 606 Compliance Notes**
- State which performance obligations are satisfied over time vs. point in time and why.
- Identify the measure of progress used.
- Call out any areas requiring judgment or auditor review.
- Flag if a contract modification or variable element changes recognition in future periods.
