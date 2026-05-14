---
name: allowance-for-doubtful-accounts-model
description: >
  Builds an aging-based or historical-rate model to estimate uncollectible receivables and generate
  the journal entries needed to maintain an accurate allowance balance. Use when someone asks about
  estimating bad debt expense, wants to set up an allowance for doubtful accounts, needs to calculate
  uncollectible receivables, is preparing accounts receivable write-offs, or wants to reconcile their
  allowance balance at period end.
category: finance
tags: [accounts-receivable, bad-debt, allowance, aging-schedule, journal-entries]
author: community
---

# Allowance for Doubtful Accounts Model

This skill builds an aging-based or historical-rate model to estimate uncollectible receivables and produces all journal entries needed to establish, adjust, and maintain an accurate allowance for doubtful accounts balance.

## Modeling Workflow

### 1. Gather Inputs
Collect the following before modeling:
- Current accounts receivable aging buckets (current, 1–30, 31–60, 61–90, 90+ days past due)
- Dollar balance in each aging bucket
- Existing allowance for doubtful accounts balance (credit balance)
- Historical uncollectible rates per bucket OR management estimates
- Any specific accounts identified for write-off

### 2. Choose the Method

**Aging of Receivables Method** (preferred when aging data is available):
- Apply a bad-debt percentage to each aging bucket
- Typical benchmark rates (adjust to company history):
  - Current: 0.5–1%
  - 1–30 days: 2–3%
  - 31–60 days: 5–8%
  - 61–90 days: 10–15%
  - 90+ days: 25–50%

**Historical Rate Method** (when only aggregate data is available):
- Calculate: `Historical Write-offs ÷ Average Gross Receivables = Bad Debt Rate`
- Apply rate to current gross receivables balance

### 3. Calculate Required Allowance Balance
- Sum estimated uncollectible amounts across all buckets
- This total is the **required ending allowance balance**

### 4. Determine Bad Debt Expense (Adjustment)
```
Required Allowance Balance
- Existing Allowance Balance (before adjustment)
= Bad Debt Expense (positive = expense; negative = credit/reversal)
```

### 5. Identify Specific Write-offs
- List any individual accounts to be written off
- Write-offs reduce both the allowance and gross AR — they do not affect income

### 6. Generate Journal Entries

**To record bad debt expense (adjusting entry):**
```
Dr. Bad Debt Expense               $X
  Cr. Allowance for Doubtful Accounts   $X
```

**To write off a specific account:**
```
Dr. Allowance for Doubtful Accounts    $X
  Cr. Accounts Receivable (Customer)       $X
```

**To reinstate a previously written-off account (recovery):**
```
Dr. Accounts Receivable (Customer)    $X
  Cr. Allowance for Doubtful Accounts     $X

Dr. Cash                              $X
  Cr. Accounts Receivable (Customer)      $X
```

### 7. Validate the Ending Balance
Confirm:
```
Beginning Allowance
+ Bad Debt Expense Recorded
- Write-offs Taken
+ Recoveries
= Ending Allowance Balance (must equal Required Allowance)
```

## Output Format

Produce the following sections in order:

**1. Aging Schedule Table**
| Bucket | AR Balance | Rate | Estimated Uncollectible |
|---|---|---|---|
| (one row per bucket, totals row at bottom) |

**2. Allowance Reconciliation**
Plain-language calculation block showing beginning balance, required balance, and required adjustment.

**3. Journal Entries**
Numbered, dated journal entries in standard debit/credit format with account names, amounts, and a one-line description for each entry.

**4. Ending Balance Proof**
A short roll-forward table confirming the ending allowance balance ties to the model.

**5. Assumptions & Notes**
Bullet list
