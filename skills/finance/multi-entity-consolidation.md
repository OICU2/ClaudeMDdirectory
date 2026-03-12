---
name: multi-entity-consolidation
category: finance
description: >
  Combines financial statements from multiple business entities, eliminates intercompany transactions, and produces unified consolidated reports. Use when someone says "consolidate our subsidiaries," asks about "rolling up financials across entities," wants to "eliminate intercompany balances," needs to "combine financials from multiple companies," or is preparing "group-level financial statements."
tags: [consolidation, intercompany, financial-statements, subsidiaries, group-reporting]
author: community
---

# Multi-Entity Financial Consolidation

This skill combines financial statements from multiple business entities, eliminates intercompany transactions, and produces accurate consolidated reports suitable for group-level reporting.

## Consolidation Workflow

**1. Gather Entity Data**
- Collect trial balances or financial statements (Income Statement, Balance Sheet, Cash Flow) for each entity in a common currency and chart of accounts
- Confirm the reporting period and ownership percentages for each subsidiary
- Identify the functional currency of each entity and apply FX translation if needed (use closing rate for balance sheet, average rate for income statement)

**2. Map to Unified Chart of Accounts**
- Align each entity's account codes to a single consolidated chart of accounts
- Flag any accounts that exist in one entity but not others — treat as zero for missing entities

**3. Aggregate Line Items**
- Sum each account line across all entities before eliminations
- Clearly label the pre-elimination subtotal column

**4. Identify and Eliminate Intercompany Transactions**
Apply these elimination entries:
- **Sales/Revenue ↔ Cost of Goods Sold**: Eliminate intercompany sales revenue and the corresponding COGS
- **Receivables ↔ Payables**: Eliminate intercompany AR against AP balances
- **Loans**: Eliminate intercompany loan assets against loan liabilities
- **Dividends**: Eliminate intercompany dividend income against equity distributions
- **Unrealized Profit in Inventory**: Eliminate any profit on inventory transferred between entities still held at period end
- **Investment in Subsidiary ↔ Equity**: Eliminate parent's investment account against subsidiary's equity

**5. Calculate Non-Controlling Interests (NCI)**
- For subsidiaries not 100% owned, calculate NCI share of net assets and net income
- Present NCI as a separate line in equity and below net income

**6. Compile Consolidated Statements**
- Consolidated Income Statement: Revenue → Gross Profit → EBIT → Net Income → NCI → Group Net Income
- Consolidated Balance Sheet: Assets = Liabilities + Group Equity + NCI
- Verify consolidated balance sheet balances (Assets = Liabilities + Equity)
- Attach an elimination schedule showing each intercompany entry with entity pairs and amounts

## Output Format

Produce the following in clearly labeled sections:

**1. Consolidation Summary Table**
- Columns: Account | Entity A | Entity B | Entity N | Pre-Elimination Total | Eliminations | Consolidated Total
- Rows grouped by: Revenue, COGS, Operating Expenses, Assets, Liabilities, Equity

**2. Elimination Schedule**
- Table with columns: Elimination # | Description | Debit Account | Debit Amount | Credit Account | Credit Amount | Entities Affected

**3. Consolidated Financial Statements**
- Consolidated Income Statement (vertical format, comparative period if data provided)
- Consolidated Balance Sheet (vertical format)
- Key ratios: Group Revenue, Group Net Income, Group Net Margin, Group Equity

**4. Variance Flags**
- List any intercompany imbalances (AR ≠ AP between entity pairs) with the discrepancy amount and suggested resolution

Format as structured markdown tables. If data is missing for any entity or account, explicitly state the assumption made rather than silently defaulting to zero.
