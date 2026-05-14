---
name: deferred-revenue-release-schedule
description: >
  Builds a period-by-period release schedule for deferred revenue balances based on contractual
  performance obligation timelines. Use when someone asks about recognizing deferred revenue,
  wants to amortize a contract liability over time, needs to map out when deferred revenue hits
  the income statement, is working through ASC 606 revenue recognition schedules, or wants to
  model subscription or multi-year contract revenue release.
category: finance
tags: [revenue-recognition, asc606, deferred-revenue, contract-liabilities, scheduling]
author: community
---

# Deferred Revenue Release Schedule

This skill builds a structured, period-by-period release schedule showing when deferred revenue balances are recognized as earned revenue based on contractual performance obligation timelines.

## Schedule Construction Workflow

1. **Gather inputs** — Collect or ask for: total deferred revenue balance, contract start date, contract end date or term length, release pattern (straight-line, milestone-based, or usage-based), reporting period granularity (monthly, quarterly, annual), and currency.

2. **Identify performance obligations** — Determine whether the contract has a single obligation (simple amortization) or multiple distinct obligations (split allocation required). If multiple, ask for the standalone selling price or allocated percentage per obligation.

3. **Determine release pattern**
   - *Straight-line*: Divide total balance evenly across all periods in the term.
   - *Milestone-based*: Assign specific dollar amounts to each period when a deliverable is satisfied. Ask for milestone dates and amounts.
   - *Usage-based*: Calculate release as (units delivered in period / total contracted units) × total balance.

4. **Calculate period-by-period releases** — For each period:
   - Opening deferred balance = prior period closing balance
   - Revenue released = amount recognized this period
   - Closing deferred balance = opening balance − revenue released
   - Cumulative recognized = sum of all prior releases + current release

5. **Flag edge cases** — Identify and note: partial first/last periods (prorate accordingly), variable consideration that may require constraint, contract modifications that reset the schedule, and any amounts subject to refund or clawback.

6. **Tie out** — Confirm that the sum of all period releases equals the original deferred revenue balance. Flag any rounding differences exceeding $1.

7. **Provide journal entry summary** — For each period, show the standard entry:
   - Dr. Deferred Revenue (liability)
   - Cr. Revenue (income statement)

## Output Format

Produce the following sections in order:

**Schedule Summary**
- Contract name/ID, total deferred balance, term, release pattern, period granularity

**Release Schedule Table**

| Period | Opening Balance | Released This Period | Closing Balance | Cumulative Recognized |
|--------|----------------|---------------------|-----------------|----------------------|
| [date] | $X             | $X                  | $X              | $X                   |

Include one row per period for the full contract term. Use the user's chosen currency and format numbers with commas and two decimal places.

**Tie-Out Check**
- Total released across all periods vs. original balance, with pass/fail status

**Journal Entry Template**
- One representative entry showing the debit/credit structure with period-specific amounts

**Assumptions & Notes**
- Bullet list of every assumption made (release pattern, proration method, rounding rule, etc.)

If inputs are incomplete, list exactly which fields are missing before proceeding.
