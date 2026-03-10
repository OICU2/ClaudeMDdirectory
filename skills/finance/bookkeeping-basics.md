---
name: bookkeeping-basics
description: >
  Maintains accurate financial records by tracking transactions, managing invoices, and performing account reconciliation. Use when someone says "help me track my expenses," asks about recording a business transaction, wants to reconcile their accounts, needs to organize invoices, or is setting up a basic bookkeeping system for their business.
category: finance
tags: [bookkeeping, accounting, transactions, invoices, reconciliation]
author: community
---

# Bookkeeping Basics

This skill helps users record financial transactions, manage invoices, and reconcile accounts following standard double-entry bookkeeping principles.

## Bookkeeping Workflow

### 1. Identify the Transaction Type
- **Income**: Sales, service revenue, interest received
- **Expense**: Purchases, payroll, rent, utilities
- **Asset**: Equipment bought, accounts receivable
- **Liability**: Loans taken, accounts payable
- **Equity**: Owner contributions or withdrawals

### 2. Record Transactions Using Double-Entry Format
Every transaction affects at least two accounts:
- Identify the debit account (what increases or what you gain)
- Identify the credit account (what decreases or what you owe)
- Confirm debits equal credits before recording

**Example:**
```
Date: 2024-01-15
Description: Client payment received
Debit:  Cash (Asset)          $1,500
Credit: Accounts Receivable   $1,500
```

### 3. Categorize and Code Each Entry
- Assign a chart of accounts code (e.g., 1000s = Assets, 2000s = Liabilities, 3000s = Equity, 4000s = Revenue, 5000s = Expenses)
- Add a memo describing the business purpose
- Attach or reference the source document (invoice number, receipt ID)

### 4. Manage Invoices
- **Issuing invoices**: Record as Debit Accounts Receivable / Credit Revenue
- **Receiving invoices**: Record as Debit Expense / Credit Accounts Payable
- Track due dates; flag invoices 7 days before they are overdue
- Mark invoices as Paid once payment clears

### 5. Perform Reconciliation
- Compare each transaction in the ledger against the bank statement line by line
- Mark matched transactions as cleared
- List outstanding items (deposits in transit, outstanding checks)
- Reconciliation formula: `Bank Balance + Deposits in Transit - Outstanding Checks = Ledger Balance`
- Investigate and resolve any discrepancy before closing the period

### 6. Period-End Checklist
- [ ] All transactions entered and categorized
- [ ] All invoices matched to payments or marked outstanding
- [ ] Bank accounts reconciled
- [ ] Petty cash counted and reconciled
- [ ] Review expense accounts for miscategorized items

## Output Format

For **transaction recording**, produce a formatted journal entry table:
```
| Date       | Account                | Debit    | Credit   | Memo                  |
|------------|------------------------|----------|----------|-----------------------|
| YYYY-MM-DD | [Account Name + Code]  | $X,XXX   |          | [Business purpose]    |
| YYYY-MM-DD | [Account Name + Code]  |          | $X,XXX   | [Business purpose]    |
```

For **invoice tracking**, produce a summary list:
```
Invoice #[ID] | [Vendor/Client] | Amount: $X,XXX | Due: [Date] | Status: [Unpaid/Paid/Overdue]
```

For **reconciliation**, produce a reconciliation statement:
```
Bank Statement Ending Balance:      $X,XXX.XX
+ Deposits in Transit:              $X,XXX.XX
- Outstanding Checks:              ($X,XXX.XX)
= Adjusted Bank Balance:            $X,XXX.XX

Ledger Balance:                     $X,XXX.XX
Difference (must be $0.00):         $0.00
```

Always flag errors, mismatches, or missing information in a **Issues to Resolve** section at the end.
