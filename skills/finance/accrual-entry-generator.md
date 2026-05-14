---
name: accrual-entry-generator
description: >
  Drafts month-end accrual journal entries for recurring liabilities including wages, benefits, and unpaid vendor invoices based on provided expense schedules. Use when someone says "I need to accrue expenses for month-end," asks about recording unpaid liabilities, wants to generate journal entries for accruals, needs to close the books for the period, or is preparing accrual-basis financial statements.
category: finance
tags: [accounting, journal-entries, accruals, month-end-close, liabilities]
author: community
---

# Accrual Entry Generator

This skill drafts accurate month-end accrual journal entries for recurring liabilities based on expense schedules, ensuring proper matching of expenses to the correct accounting period.

## Accrual Entry Workflow

### 1. Gather Required Inputs
Collect the following before generating entries:
- Accounting period (month and year)
- Expense schedule or list of unpaid liabilities with amounts
- General ledger account codes (if available; otherwise use standard placeholders)
- Cost center or department allocations (if applicable)
- Accrual reversal date (typically the first day of the following month)

### 2. Categorize Liabilities
Group expenses into standard accrual categories:
- **Payroll accruals**: Wages earned but unpaid (e.g., partial pay period at month-end), payroll taxes, overtime
- **Benefits accruals**: Health insurance premiums, retirement contributions, PTO/vacation earned
- **Vendor/AP accruals**: Invoices received but not yet entered, services rendered but not yet billed
- **Other recurring accruals**: Rent, utilities, subscriptions, interest payable

### 3. Calculate Accrual Amounts
For each liability:
- **Wages**: (Annual salary ÷ 365) × unpaid days, or (hourly rate × hours worked in period)
- **Benefits**: Pro-rate monthly premium by days worked if mid-period cutoff applies
- **Vendor invoices**: Use invoice amount if known; use contract rate or prior-period average if estimate required
- Flag any estimated amounts clearly with the basis of estimate

### 4. Construct Journal Entries
For each accrual, apply the standard double-entry structure:
- **Debit**: Expense account (e.g., Salaries Expense, Benefits Expense, Professional Fees)
- **Credit**: Corresponding accrued liability account (e.g., Accrued Salaries Payable, Accrued Liabilities)
- Ensure debits equal credits for each entry
- Add a reversing entry dated the first day of the next month (debit the liability, credit the expense)

### 5. Validate Entries
Before finalizing:
- Confirm total debits equal total credits across all entries
- Verify expense accounts align with the correct cost category
- Check that no invoice has been double-counted (already posted in AP)
- Note any amounts exceeding materiality thresholds that require additional documentation

## Output Format

Produce a structured accrual entry report with the following sections:

**Header**
- Entity name (if provided), accounting period, preparer, date prepared

**Journal Entry Table** (one table per accrual category)

| Entry # | Date | Account Code | Account Name | Debit ($) | Credit ($) | Description |
|---------|------|-------------|--------------|-----------|------------|-------------|
| JE-001  | MM/DD/YYYY | 5010 | Salaries Expense | 12,500.00 | — | Wage accrual: 3 unpaid days, period ending MM/DD |
| JE-001  | MM/DD/YYYY | 2010 | Accrued Salaries Payable | — | 12,500.00 | Wage accrual: 3 unpaid days |

**Reversing Entry Table**
Mirror of each accrual entry dated the first of the following month, with debits and credits swapped.

**Summary Section**
- Total accruals by category (wages, benefits, vendor, other)
- Grand total accrued liabilities added to balance sheet
- List of estimated amounts with the estimation method used
- Any missing data or assumptions that the preparer should verify

**Length**: As long as needed to cover all provided line items; no truncation of entries.
