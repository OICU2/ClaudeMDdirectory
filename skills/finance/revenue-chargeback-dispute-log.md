---
name: revenue-chargeback-dispute-log
description: >
  Tracks and documents chargeback disputes by customer, amount, and resolution status to support accurate revenue reporting and collections follow-up. Use when someone says "log a chargeback," asks about disputed revenue, wants to track a payment dispute, needs to update a chargeback status, or is reviewing unresolved chargebacks for collections. Produces structured dispute entries and summary reports ready for finance or accounting review.
category: finance
tags: [chargebacks, disputes, revenue, collections, accounts-receivable]
author: community
---

# Revenue Chargeback Dispute Log

This skill captures, organizes, and reports on chargeback disputes so finance teams can maintain accurate revenue records and prioritize collections follow-up.

## Chargeback Logging Workflow

### When logging a new dispute:
1. Collect the following fields — prompt the user if any are missing:
   - **Customer name / account ID**
   - **Transaction date** (original charge)
   - **Dispute date** (when chargeback was filed)
   - **Disputed amount** (currency and value)
   - **Payment method** (credit card, ACH, etc.)
   - **Dispute reason code** (e.g., fraud, unrecognized charge, service not rendered)
   - **Bank / processor reference number**
   - **Evidence deadline** (date by which a response must be submitted)
   - **Current status**: Open / Evidence Submitted / Won / Lost / Pending Review
   - **Assigned owner** (team member responsible for resolution)
   - **Notes** (any relevant context, prior contact, or partial resolution)

2. Assign a unique dispute ID using the format `CB-YYYYMMDD-###` (e.g., `CB-20240315-001`).

3. Flag disputes where the evidence deadline is within 7 days as **URGENT**.

4. Flag disputes with amounts ≥ $1,000 as **HIGH VALUE**.

### When updating an existing dispute:
1. Reference the dispute ID.
2. Record the status change, date of change, and outcome notes.
3. If status is Won or Lost, record the final recovered or written-off amount.

### When generating a summary report:
1. Group disputes by status (Open, Evidence Submitted, Won, Lost, Pending Review).
2. Calculate total disputed amount, total recovered, and total written off.
3. List all URGENT and HIGH VALUE items at the top.
4. Sort Open disputes by evidence deadline (soonest first).

## Output Format

**Single dispute entry:**
```
Dispute ID:        CB-20240315-001  🔴 URGENT | 💰 HIGH VALUE
Customer:          Acme Corp (ACC-4821)
Transaction Date:  2024-02-28
Dispute Date:      2024-03-10
Amount:            $2,450.00 USD
Payment Method:    Visa (ending 4832)
Reason Code:       Fraud – Card Not Present
Processor Ref:     CH20240310-98712
Evidence Deadline: 2024-03-22
Status:            Open
Assigned To:       Sarah Kim
Notes:             Customer contacted 3/12; denies authorizing charge. Evidence package in progress.
```

**Summary report:**
```
CHARGEBACK DISPUTE SUMMARY — As of [Date]
==========================================
Total Disputes:      [n]
Total Disputed:      $[amount]
Total Recovered:     $[amount]
Total Written Off:   $[amount]

STATUS BREAKDOWN
----------------
Open (n):                $[amount]  — [n] URGENT, [n] HIGH VALUE
Evidence Submitted (n):  $[amount]
Pending Review (n):      $[amount]
Won (n):                 $[amount] recovered
Lost (n):                $[amount] written off

URGENT ITEMS (Evidence Due ≤ 7 Days)
--------------------------------------
[CB-ID] | [Customer] | $[Amount] | Due: [Date] | Owner: [Name]

HIGH VALUE OPEN DISPUTES (≥ $1,000)
--------------------------------------
[CB-ID] | [Customer] | $[Amount] | Status: [Status] | Due: [Date]
```

Deliver all output in plain text or markdown. If the user provides data in bulk (e.g.,
