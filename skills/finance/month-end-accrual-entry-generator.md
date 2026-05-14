---
name: month-end-accrual-entry-generator
description: >
  Drafts recurring and one-time accrual journal entries from expense schedules and service confirmation data ahead of the close deadline. Use when someone says "we need to accrue for this month," asks about booking an expense that hasn't been invoiced yet, or wants to prepare journal entries for month-end close. Also activates when someone needs to record an accrual for services received, wants to set up recurring accrual entries, or is working through a close checklist and needs accrual support.
category: finance
tags: [accruals, journal-entries, month-end-close, general-ledger, accounting]
author: community
---

# Month-End Accrual Entry Generator

This skill drafts complete accrual journal entries — both recurring and one-time — using expense schedules, vendor confirmations, or service data, and formats them ready for GL posting before the close deadline.

## Accrual Entry Workflow

### 1. Gather Required Inputs
Ask the user to provide (or extract from attached data):
- **Expense description**: what service or cost is being accrued
- **Period**: the month and year being accrued
- **Amount**: confirmed, estimated, or pro-rated figure
- **Vendor/department**: who incurred or will invoice the cost
- **Cost center / GL account**: expense account and accrual liability account (typically Accrued Liabilities 2000–2999)
- **Recurring or one-time**: whether this entry repeats each period
- **Supporting basis**: invoice, contract, schedule, or estimate used to derive the amount

If GL accounts are not provided, recommend standard mappings:
- Salaries/wages → DR Salaries Expense / CR Accrued Payroll
- Professional services → DR Professional Fees / CR Accrued Liabilities
- Utilities → DR Utilities Expense / CR Accrued Utilities
- Rent/facilities → DR Rent Expense / CR Accrued Rent

### 2. Validate the Accrual Logic
Before drafting, confirm:
- The expense relates to the current period (service received or benefit consumed)
- No invoice has already been posted for the same amount and period (to avoid double-counting)
- For estimates: note the basis and flag if variance from actual may exceed materiality threshold (default: >5% or >$5,000 — adjust to user's threshold)
- For recurring entries: confirm the amount matches the schedule or flag if it has changed

### 3. Draft the Journal Entry
Produce one entry per accrual item using this structure:

```
Journal Entry #[auto-number or user-provided]
Date: [Last day of accrual period, e.g., 2024-01-31]
Description: Accrual – [Vendor/Service] – [Month Year]
Reference: [Contract/PO/Schedule ID if provided]

  DR  [Expense Account #] [Expense Account Name]     $[Amount]
  CR  [Liability Account #] [Accrued Liabilities]    $[Amount]

Basis: [One sentence explaining the source — e.g., "Based on December service confirmation from Vendor X per MSA dated 2023-03-01."]
Reversing Entry: [Yes – auto-reverse on [first day of next month] / No]
Prepared by: [User name if provided]
```

### 4. Handle Recurring Entry Schedules
If the user provides a recurring expense schedule (e.g., monthly software license, lease, retainer):
- Generate all entries for the requested period range in a single table
- Flag months where the amount changes or the schedule ends
- Recommend setting entries as auto-reversing in the GL system

### 5. Flag Issues and Risks
Call out explicitly if:
- Amount is an estimate with no supporting documentation
- The accrual period does not match the service period
- A reversing entry is missing for a prior-period accrual
- Duplicate accruals are likely based on data provided
- The account mapping conflicts with typical chart of accounts conventions

## Output Format

Produce one clearly labeled journal entry block per accrual item. For multiple entries, number them sequentially (JE-001, JE-002, etc.) and precede the list with a **summary table**:

| JE # | Date | Description | DR Account | CR Account | Amount |
