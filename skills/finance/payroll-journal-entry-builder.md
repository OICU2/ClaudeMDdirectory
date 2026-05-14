---
name: payroll-journal-entry-builder
description: >
  Generates recurring payroll journal entries by mapping gross wages, tax withholdings, benefits deductions, and employer contributions to their correct GL accounts. Use when someone says "book our payroll," asks about "recording payroll expenses," wants to "create a payroll journal entry," needs to "post wages to the general ledger," or asks how to "account for payroll taxes and deductions."
category: finance
tags: [payroll, journal-entries, general-ledger, accounting, bookkeeping]
author: community
---

# Payroll Journal Entry Builder

This skill generates complete, balanced double-entry journal entries for payroll processing, mapping every payroll component to its correct debit and credit GL account.

## Payroll Journal Entry Workflow

### Step 1: Gather Payroll Components
Collect or prompt the user for the following figures:
- **Gross wages** (salary + hourly + overtime, broken out by department if needed)
- **Employee tax withholdings**: Federal income tax, state income tax, Social Security (6.2%), Medicare (1.45%)
- **Employee benefit deductions**: Health insurance, dental, vision, 401(k), FSA, HSA, garnishments
- **Employer payroll tax contributions**: FUTA (0.6% on first $7,000), SUTA (state-specific rate), Social Security match (6.2%), Medicare match (1.45%)
- **Employer benefit contributions**: Health insurance, 401(k) match, other fringe benefits
- **Net pay** (gross wages minus all employee deductions and withholdings)

### Step 2: Map Components to GL Accounts
Apply these standard mappings (adjust account numbers to match the user's chart of accounts if provided):

| Component | Debit | Credit |
|---|---|---|
| Gross wages | Wages Expense (5000) | — |
| Employer payroll taxes | Payroll Tax Expense (5100) | — |
| Employer benefit contributions | Employee Benefits Expense (5200) | — |
| Net pay owed to employees | — | Accrued Payroll Payable (2100) |
| Federal income tax withheld | — | Federal Income Tax Payable (2110) |
| State income tax withheld | — | State Income Tax Payable (2120) |
| Employee Social Security withheld | — | FICA Payable (2130) |
| Employee Medicare withheld | — | FICA Payable (2130) |
| Employer Social Security match | — | FICA Payable (2130) |
| Employer Medicare match | — | FICA Payable (2130) |
| FUTA payable | — | FUTA Payable (2140) |
| SUTA payable | — | SUTA Payable (2150) |
| Employee benefit deductions | — | Benefits Payable (2160) |
| Employer benefit contributions | — | Benefits Payable (2160) |

### Step 3: Build Entry 1 — Payroll Expense Accrual
Record the gross payroll and all liabilities created:
- Debit all expense accounts (wages, payroll tax, benefits)
- Credit all liability accounts (net pay payable, tax payables, benefits payable)
- Verify: Total Debits = Total Credits

### Step 4: Build Entry 2 — Payroll Cash Disbursement
Record when net pay is actually paid to employees:
- Debit: Accrued Payroll Payable (2100) for the net pay amount
- Credit: Cash / Checking (1010) for the net pay amount

### Step 5: Build Entry 3 — Tax and Benefits Remittance (optional)
Record when withheld taxes and benefits are remitted to agencies:
- Debit: Each liability account (FICA Payable, Federal Tax Payable, etc.)
- Credit: Cash / Checking (1010) for total remittance

### Step 6: Validate the Entries
- Confirm each entry balances (debits = credits)
- Confirm gross wages = net pay + all employee deductions + all employee withholdings
- Flag any rounding discrepancies greater than $0.01
- Note any department-level allocations if the user provided a departmental breakdown
