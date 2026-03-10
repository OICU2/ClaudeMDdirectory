---
name: expense-tracking
description: >
  Systematically records and categorizes business expenses for clear financial visibility and control.
  Use when someone says "I need to track my expenses," asks about logging a business purchase, wants
  to organize receipts, needs to record what they spent, or is looking to categorize company costs.
category: finance
tags: [expenses, budgeting, bookkeeping, categorization, receipts]
author: community
---

# Expense Tracking

This skill captures, categorizes, and organizes business expenses into a structured ledger whenever someone needs to record or review spending.

## Expense Recording Workflow

1. **Capture expense details** — Collect the following for each expense:
   - Date of purchase
   - Vendor/merchant name
   - Amount (include currency)
   - Payment method (cash, card, reimbursement, etc.)
   - Business purpose or description

2. **Assign a category** — Map each expense to one of these standard categories:
   - Travel (flights, hotels, transportation)
   - Meals & Entertainment
   - Office Supplies & Equipment
   - Software & Subscriptions
   - Marketing & Advertising
   - Professional Services (legal, consulting)
   - Utilities & Rent
   - Training & Education
   - Miscellaneous (flag for follow-up)

3. **Flag exceptions** — Identify any expense that:
   - Lacks a clear business purpose
   - Exceeds a typical threshold (ask user for their limit if unknown)
   - Is potentially non-deductible (personal mixed with business)
   - Is missing required details (receipt, date, amount)

4. **Check for duplicates** — If multiple expenses are provided, scan for duplicate entries by cross-referencing date, vendor, and amount.

5. **Summarize totals** — Calculate subtotals per category and a grand total for the period covered.

6. **Suggest next actions** — Based on the data, recommend steps such as submitting for reimbursement, attaching receipts, or reconciling with a bank statement.

## Output Format

Produce a structured expense report with the following sections:

**Expense Log Table**
| Date | Vendor | Category | Amount | Payment Method | Notes/Purpose |
|------|--------|----------|--------|----------------|---------------|
| ...  | ...    | ...      | ...    | ...            | ...           |

**Category Summary**
- List each category used with its subtotal
- Include a bold **Grand Total** line

**Flagged Items**
- Bullet list of any expenses requiring clarification or action, with a one-line reason each

**Recommended Next Steps**
- 2–4 concise action items (e.g., "Attach receipt for $340 Adobe charge dated 06/12")

Keep the table clean and consistent. Use ISO date format (YYYY-MM-DD). Round all amounts to two decimal places. If the user provides only partial information, fill what is known and mark missing fields as `[MISSING]`.
