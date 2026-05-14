---
name: clawback-provision-tracker
description: >
  Tracks executive compensation clawback obligations, recovery timelines, and outstanding repayment
  balances for corporate governance and compliance purposes. Use when someone asks about clawback
  provisions, needs to monitor executive pay recovery obligations, wants to track triggering events
  for compensation recoupment, is managing SEC Rule 10D-1 compliance, or needs to calculate
  outstanding clawback balances owed by executives.
category: finance
tags: [executive-compensation, clawback, compliance, sec-10d-1, corporate-governance]
author: community
---

# Clawback Provision Tracker

This skill tracks executive compensation clawback obligations by logging triggering events, computing recovery amounts, monitoring repayment timelines, and surfacing outstanding balances for compliance reporting.

## Clawback Tracking Workflow

### 1. Identify and Classify the Triggering Event
Capture the following for each clawback trigger:
- **Event type**: Financial restatement, misconduct finding, regulatory violation, voluntary departure with non-compete breach, or custom policy trigger
- **Event date**: Date the triggering condition was confirmed or publicly disclosed
- **Applicable policy**: Reference the specific clawback policy (e.g., SEC Rule 10D-1, Dodd-Frank mandate, company policy section)
- **Executives affected**: Name, title, and employee ID of each subject executive

### 2. Calculate the Clawback Amount
For each affected executive:
- Identify the **look-back period** (default: 3 years prior to restatement trigger under SEC 10D-1; adjust per policy)
- Pull **incentive compensation paid** during that window (cash bonuses, equity vesting proceeds, performance awards)
- Compute **excess compensation**: amount paid minus what would have been paid under restated financials
- Apply any **offsets or deductions** permitted by policy (taxes withheld, documented hardship exemptions)
- Record the **gross clawback obligation** and **net recoverable amount**

### 3. Set Recovery Timeline
- Note the **notice date**: when the executive was formally notified of the clawback obligation
- Apply the **recovery deadline**: typically 12–24 months from notice date per policy
- Define **installment schedule** if repayment is structured in tranches
- Flag **statute of limitations** constraints by jurisdiction if litigation risk exists

### 4. Track Repayment Status
For each obligation, maintain running totals:
- Total obligation amount
- Amount recovered to date (cash payments, equity forfeitures, offset against future pay)
- Outstanding balance remaining
- Days remaining until recovery deadline
- Status: `Pending Notice`, `In Recovery`, `Disputed`, `Settled`, `Defaulted`, `Waived`

### 5. Flag Exceptions and Escalations
- Mark obligations where recovery has been **legally contested**
- Identify cases where the board has **voted to waive** recovery (document rationale per SEC disclosure rules)
- Escalate any obligation **past 90% of recovery deadline** with less than 50% recovered
- Note if **insurance proceeds** are being applied to offset repayment

### 6. Compliance Cross-Check
- Confirm the clawback policy was **in effect** at the time of the original compensation award
- Verify the policy covers the **executive's role and compensation type**
- Check whether **proxy statement or 8-K disclosure** of the clawback event is required
- Log date of any required **SEC filings or board committee approvals**

## Output Format

Produce a structured clawback obligation record with the following sections:

---

**CLAWBACK OBLIGATION SUMMARY**

| Field | Details |
|---|---|
| Executive Name | [Name, Title] |
| Trigger Event | [Type and description] |
| Trigger Date | [YYYY-MM-DD] |
| Applicable Policy | [Policy name/rule citation] |
| Look-Back Period | [Start date – End date] |

**Compensation Analysis**

| Component | Amount |
|---|---|
| Total Incentive Compensation in Window | $[X] |
| Compensation Under Restated Figures | $[X] |
| Gross Clawback Obligation | $[X] |
| Permitted Offsets | $[X] |
| Net Recoverable Amount | $[X] |

**Recovery Timeline**
