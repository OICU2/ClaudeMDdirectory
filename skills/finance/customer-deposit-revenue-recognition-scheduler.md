---
name: customer-deposit-revenue-recognition-scheduler
description: >
  Schedules the release of customer deposits into recognized revenue based on contract milestone completion criteria. Use when someone says "recognize deposit revenue," asks about releasing customer deposits to revenue, wants to schedule milestone-based revenue recognition, needs to map deposit balances against contract deliverables, or is setting up deferred revenue drawdown rules.
category: finance
tags: [revenue-recognition, deposits, deferred-revenue, milestones, asc-606]
author: community
---

# Customer Deposit Revenue Recognition Scheduler

This skill builds a structured schedule that maps customer deposit balances to contract milestones and produces a recognition timeline showing when and how much deferred revenue converts to recognized revenue.

## Revenue Recognition Scheduling Workflow

### 1. Gather Input Data
Collect the following before building any schedule:
- Customer name and contract ID
- Total deposit amount and date received
- Contract start and end dates
- List of milestones with: milestone name, completion criteria, percentage of total contract value, and expected completion date
- Any contract modifications or variable consideration constraints
- Applicable accounting standard (ASC 606, IFRS 15, or other)

### 2. Validate Milestone Coverage
- Confirm milestone percentages sum to exactly 100% of the deposit
- Flag any milestones missing completion criteria or completion dates
- Identify performance obligations that are distinct vs. bundled
- Note any milestones tied to customer acceptance (risk of delay)

### 3. Build the Recognition Schedule
For each milestone:
- Calculate the recognizable amount: `Deposit Total × Milestone %`
- Assign a recognition trigger date (milestone completion date or estimated date)
- Label the recognition method: point-in-time or over-time
- Set status: Pending / In Progress / Completed / At Risk

Apply these rules:
- Do not schedule recognition before the performance obligation is satisfied
- If a milestone spans periods, prorate using straight-line or input method as appropriate
- For at-risk milestones, add a note but do not remove them from the schedule
- Remaining unrecognized deposit balance must equal total deposit minus all completed milestones

### 4. Flag Compliance Checkpoints
- Variable consideration: constrain revenue if milestone completion is highly uncertain
- Significant financing component: flag if deposit was received more than 12 months before expected delivery
- Contract modifications: re-allocate transaction price if scope or milestones change
- Refund obligations: identify any milestones with refund clauses that defer recognition

### 5. Generate Journal Entry Outline
For each recognition event:
- Debit: Deferred Revenue (liability)
- Credit: Revenue (income statement)
- Include the dollar amount and effective date

## Output Format

Produce the following three sections:

**Section 1 — Milestone Recognition Schedule (Table)**
| Milestone | Completion Criteria | % of Contract | Recognition Amount | Trigger Date | Method | Status |
|---|---|---|---|---|---|---|
(One row per milestone, sorted by trigger date ascending)

**Section 2 — Cumulative Recognition Summary**
- Total deposit received: $X
- Recognized to date: $X
- Deferred balance remaining: $X
- Next recognition event: [Milestone name] on [Date] for $X

**Section 3 — Compliance Flags & Notes**
- Bulleted list of any issues found in Step 4
- If no issues, state "No compliance flags identified"
- Include recommended action for each flag

Keep the schedule to one page equivalent. Use plain numbers (no rounding unless amounts are under $1). If input data is incomplete, list exactly what is missing before proceeding.
