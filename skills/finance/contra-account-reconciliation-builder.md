---
name: contra-account-reconciliation-builder
description: >
  Matches contra account entries against their source transactions across accounts receivable, sales returns, and allowance accounts to identify and surface unreconciled balances. Use when someone says "my contra accounts don't balance," asks about unmatched returns or allowances, wants to reconcile debit memos against credits, needs to find outstanding contra entries, or is investigating why allowance for doubtful accounts is off.
category: finance
tags: [reconciliation, contra-accounts, accounts-receivable, allowances, returns]
author: community
---

# Contra Account Reconciliation Builder

Systematically matches contra entries to source transactions across AR, returns, and allowance accounts, then flags any unreconciled balances with actionable findings.

## Reconciliation Workflow

### 1. Collect Input Data
- Request the following from the user:
  - Source transaction ledger (invoices, revenue entries, AR balances)
  - Contra account ledger (sales returns, allowances, doubtful accounts, purchase discounts)
  - Date range for the reconciliation period
  - Chart of accounts mapping if contra accounts span multiple sub-ledgers

### 2. Classify Contra Account Types
Identify and separate entries by contra type before matching:
- **Sales Returns & Allowances** → match against original sales invoices
- **Allowance for Doubtful Accounts** → match against specific AR aging buckets
- **Accumulated Depreciation** → match against fixed asset cost accounts
- **Purchase Returns** → match against original purchase orders or vendor invoices
- **Contra Revenue (discounts)** → match against revenue line items

### 3. Apply Matching Logic
For each contra entry, perform the following in order:
1. Match on exact document/invoice reference number
2. If no exact match, match on amount + counterparty + date range (±30 days)
3. If still unmatched, flag as a candidate and match on amount alone within period
4. Mark partial matches when the contra amount covers only a portion of the source

### 4. Compute Net Balances
- Net each source transaction against its matched contra entries
- Accumulate totals per account pair (e.g., AR 1100 vs. Allowance 1105)
- Calculate: `Gross Balance − Total Matched Contra = Net Exposed Balance`

### 5. Identify Unreconciled Items
Flag entries in any of these states:
- **Orphaned Contra**: contra entry with no matching source transaction
- **Uncontrolled Source**: source transaction with no contra entry when one is expected
- **Partial Match**: contra covers less than 100% of the source amount
- **Stale Contra**: matched pair where the contra entry is older than 90 days without resolution
- **Duplicate Contra**: multiple contra entries referencing the same source document

### 6. Validate Allowance Adequacy
- Compare Allowance for Doubtful Accounts balance to AR aging schedule
- Flag if allowance percentage deviates more than 5% from prior period or policy rate
- Note any specific accounts in 90+ day bucket without a corresponding allowance entry

## Output Format

Produce a structured reconciliation report with the following sections:

**Header Block**
- Entity name, period, accounts in scope, run date

**Summary Table** (one row per contra account pair)
| Contra Account | Source Account | Gross Balance | Total Matched | Unreconciled | Net Exposed |
|---|---|---|---|---|---|

**Unreconciled Items Detail List**
For each flagged item:
- Entry ID / Document Reference
- Date, Amount, Counterparty
- Flag type (Orphaned / Uncontrolled / Partial / Stale / Duplicate)
- Recommended action (e.g., "Obtain credit memo," "Write off," "Reverse duplicate")

**Allowance Adequacy Note**
- Current allowance balance vs. recommended based on aging
- Variance amount and percentage
- Pass / Review Required / Escalate status

**Reconciling Items Count**
- Total entries reviewed
- Matched count and percentage
- Unreconciled count broken down by flag type

Keep the report factual and quantitative. Do not speculate on causes — note findings and recommended next steps only.
