---
name: grant-milestone-drawdown-tracker
category: finance
description: >
  Maps grant disbursement tranches to project completion milestones, tracks actual spending against allowable budget categories, and surfaces underspend or compliance risk before reporting deadlines. Use when someone says "we need to draw down our next grant tranche," asks about "grant spending compliance," wants to "check if we're on track for our milestone report," mentions "we're behind on our grant deliverables," or needs to "reconcile grant expenses before the deadline."
tags: [grants, compliance, nonprofit, budget-tracking, disbursement]
author: community
---

# Grant Milestone Drawdown Tracker

Tracks grant tranche eligibility against milestone completion and spending compliance, alerting users to underspend, ineligible expenses, or reporting risks before deadlines hit.

## Tracking Workflow

1. **Capture Grant Structure**
   - Ask for: total award amount, number of tranches, tranche amounts, and release conditions (milestone-based, time-based, or hybrid)
   - Record grant period start and end dates, plus each interim and final reporting deadline

2. **Map Milestones to Tranches**
   - List each milestone required to unlock each tranche (e.g., Tranche 2 requires 80% completion of deliverable set A)
   - Assign a completion status to each milestone: Not Started / In Progress / Complete / Verified by Funder
   - Flag any milestone marked In Progress within 30 days of its associated tranche release deadline

3. **Log and Categorize Spending**
   - Accept expense entries with: date, amount, vendor/payee, budget category, and invoice reference
   - Validate each expense against allowable categories specified in the grant agreement (personnel, indirect, travel, supplies, subcontractors, etc.)
   - Flag any expense in a disallowed category or exceeding the budgeted line-item cap

4. **Calculate Drawdown Eligibility**
   - Compute: (allowable expenses incurred) – (amounts already drawn) = eligible drawdown amount
   - Check milestone completion status before confirming tranche eligibility
   - Warn if drawdown is being requested before milestone verification is documented

5. **Identify Underspend and Burn Rate Risk**
   - Calculate monthly burn rate: total spent ÷ months elapsed
   - Project end-of-period balance: remaining budget ÷ monthly burn rate
   - Flag underspend if projected unspent balance exceeds 10% of total award within 60 days of grant end
   - Note any budget categories with less than 50% spend when the grant period is more than 60% complete

6. **Compliance Pre-Check Before Reporting**
   - Confirm all expenses have supporting documentation references
   - Confirm all milestones required for the reporting period are complete or have documented justification for delay
   - List any expenses lacking a budget category or invoice reference
   - Summarize whether the organization is ready to submit or what gaps must be resolved first

## Output Format

Produce a structured grant status report with the following sections:

**Grant Overview Table**
| Field | Value |
|---|---|
| Grant Name | |
| Funder | |
| Total Award | |
| Grant Period | |
| Next Reporting Deadline | |
| Next Tranche Amount | |
| Next Tranche Status | Eligible / Pending Milestone / At Risk |

**Milestone Status List**
- One line per milestone: name, due date, status, and tranche it unlocks
- Bold any milestone that is incomplete within 30 days of its deadline

**Budget vs. Actual Table**
| Category | Budgeted | Spent to Date | Remaining | % Used | Status |
|---|---|---|---|---|---|
- Status column: On Track / Underspend Risk / Overspend / Disallowed Expense Flagged

**Drawdown Summary**
- Total allowable expenses incurred
- Total previously drawn
- Current eligible drawdown amount
- Confirmation or denial of tranche release readiness with reason

**Risk Flags** (bulleted, only include if issues exist)
- Each flag states: risk type, affected tranche or category, deadline at risk, and recommended action

**Readiness Verdict**
- One of three verdicts: READY TO DRAW / ACTION REQUIRED BEFORE DRAW / DO NOT DRAW — COMPLIANCE RISK
- Follow with 2–4
