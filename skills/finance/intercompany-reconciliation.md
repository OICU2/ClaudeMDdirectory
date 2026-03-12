---
name: intercompany-reconciliation
category: finance
description: >
  Identifies, matches, and eliminates intercompany transactions between related entities to produce clean consolidated financial statements. Use when someone says "reconcile intercompany accounts," asks about eliminating intercompany transactions, wants to consolidate financials across subsidiaries, needs to find intercompany mismatches, or is preparing consolidated financial statements for a group of entities.
tags: [consolidation, intercompany, elimination, reconciliation, financial-statements]
author: community
---

# Intercompany Reconciliation

This skill systematically identifies intercompany transactions, matches them across entities, flags mismatches, and produces elimination journal entries for consolidated financial reporting.

## Reconciliation Workflow

### 1. Collect Intercompany Data
- Request trial balances or intercompany schedules from each entity in scope
- Identify all intercompany accounts (receivables, payables, revenue, expenses, loans, dividends)
- Confirm the reporting currency and FX rates if entities operate in different currencies
- Establish the consolidation period (month-end, quarter-end, year-end)

### 2. Map Counterparty Relationships
- Build an entity relationship matrix listing all legal entities and ownership structure
- Tag each transaction with: originating entity, counterparty entity, account type, amount, currency, and transaction date
- Confirm that Entity A's intercompany receivable has a matching intercompany payable on Entity B's books and vice versa

### 3. Match Transactions
- Compare intercompany balances pairwise (Entity A vs. Entity B, Entity A vs. Entity C, etc.)
- Match on: counterparty, account type, amount (after FX conversion), and period
- Flag unmatched or partially matched items as exceptions
- Apply a materiality threshold (e.g., differences > $1,000 or > 0.1% of balance) to prioritize investigation

### 4. Investigate and Resolve Mismatches
- Common causes: timing differences (invoices in transit), FX rate mismatches, missing accruals, incorrect entity coding
- For timing differences: determine which entity needs an accrual or cutoff adjustment
- For FX mismatches: identify which rate each entity used and align to the agreed consolidation rate
- For coding errors: issue correcting journal entries before elimination
- Document the resolution and responsible party for each exception

### 5. Prepare Elimination Entries
- Draft elimination journal entries for each matched intercompany pair:
  - Debit intercompany payable / Credit intercompany receivable (balance sheet)
  - Debit intercompany revenue / Credit intercompany expense (income statement)
  - Eliminate intercompany loan principal and related interest
  - Eliminate unrealized profit in inventory or fixed assets transferred between entities
- Ensure eliminations net to zero at the consolidated level
- Apply eliminations only at the consolidation layer — do not alter subsidiary ledgers

### 6. Validate Consolidated Output
- Confirm that no intercompany balances remain on the consolidated balance sheet
- Confirm that intercompany revenue and expense are fully offset
- Recheck total consolidated equity, retained earnings, and NCI (non-controlling interest) if applicable
- Run a post-elimination trial balance to verify debits equal credits

## Output Format

Produce the following structured outputs:

**1. Intercompany Matrix (table)**
| Entity Pair | Account Type | Entity A Balance | Entity B Balance | Difference | Status |
|---|---|---|---|---|---|
| A ↔ B | AR/AP | $X | $X | $0 | Matched |

**2. Exception Log (table)**
List all unmatched items with: Entity Pair, Account, Amount, Difference, Root Cause, Resolution, Owner, Due Date.

**3. Elimination Journal Entries (numbered list)**
For each elimination: Entry #, Debit account + entity, Credit account + entity, Amount, Narrative.

**4. Reconciliation Summary (short paragraph or bullet list)**
- Total intercompany transactions reviewed
- Number matched / unmatched
- Total eliminations posted
- Outstanding exceptions and next steps
- Sign-off ready: Yes / No (with conditions if No)

Keep the output audit-ready: every figure should be traceable to a source entity and account.
