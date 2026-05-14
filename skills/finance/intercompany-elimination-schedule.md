---
name: intercompany-elimination-schedule
description: >
  Generates a consolidation elimination schedule that identifies and offsets intercompany transactions to prevent double-counting in consolidated financial statements. Use when someone says "prepare intercompany eliminations," asks about consolidation adjustments, wants to remove related-party transactions from group financials, needs to reconcile intercompany balances, or is closing the books for a consolidated entity.
category: finance
tags: [consolidation, intercompany, elimination, financial-reporting, group-accounting]
author: community
---

# Intercompany Elimination Schedule

This skill builds a structured elimination schedule that identifies all intercompany transactions across subsidiaries and produces the offsetting journal entries required for accurate consolidated financial statements.

## Workflow

### 1. Gather Intercompany Transaction Data
- Collect trial balances or subledger exports from each legal entity in the consolidation group
- Identify all intercompany account codes (receivables, payables, revenue, COGS, loans, dividends, investments)
- Request the intercompany transaction listing or ask the user to provide transaction details: entity pairs, amounts, transaction type, and currency

### 2. Reconcile Intercompany Balances
- Match each intercompany receivable to the corresponding payable across entity pairs
- Flag mismatches (timing differences, FX translation differences, missing entries)
- Calculate the net unreconciled variance for each entity pair and flag for resolution before elimination
- Note any unrealized profit in inventory or fixed assets that requires elimination

### 3. Categorize Eliminations by Type
Apply the following elimination categories in order:
- **Investment in subsidiary vs. equity:** Eliminate the parent's investment account against the subsidiary's equity
- **Intercompany loans:** Eliminate IC loan receivable against IC loan payable
- **Intercompany sales/purchases:** Eliminate IC revenue against IC COGS or expense
- **Intercompany receivables/payables:** Eliminate IC AR against IC AP
- **Unrealized profit in inventory:** Eliminate deferred profit still held in ending inventory
- **Intercompany dividends:** Eliminate dividend income against dividends paid

### 4. Build the Elimination Journal Entries
For each category:
- Assign a unique elimination reference (e.g., ELIM-001, ELIM-002)
- Record: Debit account, Credit account, Amount, Currency, Entity pair affected, Elimination type
- Apply currency translation if entities report in different functional currencies before elimination

### 5. Validate the Schedule
- Confirm eliminations net to zero impact on consolidated equity (unless unrealized profit exists)
- Verify that no intercompany balance remains on the consolidated balance sheet
- Cross-foot totals: sum of all debit eliminations must equal sum of all credit eliminations per category
- Check that consolidated revenue is reduced by the full intercompany sales amount

## Output Format

Produce the following components in order:

**1. Intercompany Matrix Table**
A grid showing each entity pair (rows = selling/owing entity, columns = buying/receiving entity) with the gross intercompany balance and any reconciling variance highlighted.

**2. Elimination Schedule Table**
| Ref | Type | Debit Account | Credit Account | Amount | Currency | Entity A | Entity B | Notes |
Each row represents one elimination entry. Group rows by elimination type.

**3. Summary Totals Block**
- Total intercompany revenue eliminated
- Total intercompany COGS eliminated
- Total intercompany AR eliminated
- Total intercompany AP eliminated
- Total unrealized profit eliminated
- Net impact on consolidated net income
- Net impact on consolidated balance sheet

**4. Open Items List**
Bullet list of any unreconciled variances, missing data, or items requiring controller sign-off before the schedule can be finalized.

**5. Consolidation Journal Entry Pack** *(optional, if requested)*
Ready-to-post journal entries formatted for the user's stated ERP or accounting system (e.g., SAP, NetSuite, Oracle), with period, entity, and posting reference fields populated.
