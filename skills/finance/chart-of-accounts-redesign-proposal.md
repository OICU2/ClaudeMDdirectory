---
name: chart-of-accounts-redesign-proposal
description: >
  Analyzes an existing chart of accounts to identify redundant, misclassified, or missing accounts
  and produces a restructured proposal aligned to reporting and segment requirements. Use when
  someone says "our chart of accounts is a mess," asks about reorganizing or cleaning up their
  GL structure, wants to align accounts to business segments or reporting needs, mentions they
  have duplicate or overlapping account codes, or needs to redesign their account hierarchy
  before a system migration or audit.
category: finance
tags: [chart-of-accounts, general-ledger, financial-reporting, accounting-structure, ERP]
author: community
---

# Chart of Accounts Redesign Proposal

This skill audits an existing chart of accounts for structural problems and produces a prioritized, actionable redesign proposal aligned to the organization's reporting, segment, and compliance requirements.

## Analysis & Redesign Workflow

### Step 1: Intake the Existing Structure
- Request the current COA as a list, export, or paste (account code, account name, type/classification, and segment if available).
- Ask clarifying questions if not provided:
  - What accounting standard applies (GAAP, IFRS, cash basis)?
  - What are the key reporting outputs (P&L by segment, consolidated balance sheet, department budgets)?
  - How many legal entities or business segments exist?
  - What ERP or accounting system is in use?

### Step 2: Audit for Structural Problems
Systematically flag the following issues:

**Redundancy**
- Accounts with identical or near-identical names serving the same purpose (e.g., "Office Supplies" and "Office Materials" both coded as operating expense).
- Multiple accounts tracking the same transaction type at different granularity without a clear rollup logic.

**Misclassification**
- Balance sheet items coded as P&L accounts or vice versa.
- Revenue accounts nested under expense categories.
- Intercompany or elimination accounts mixed into operational accounts.
- Capital expenditures coded as operating expenses.

**Missing Accounts**
- No dedicated accounts for tax liabilities, deferred revenue, or accruals if the business requires them.
- Gaps in the numbering schema that suggest deleted accounts with no replacement.
- Segment or department codes referenced in transactions but not represented in the COA.

**Structural/Hierarchy Issues**
- Flat structure with no parent-child rollup (summary vs. detail accounts).
- Inconsistent numbering conventions (mixed 4-digit and 6-digit codes).
- Accounts used for both budgeting and actuals without separation.

### Step 3: Map to Reporting & Segment Requirements
- Cross-reference flagged accounts against the stated reporting outputs.
- Identify which accounts roll up to each financial statement line.
- Flag accounts that appear in no report (orphaned accounts) and accounts that appear in conflicting report lines.
- Confirm segment or cost center tagging is consistent across equivalent account types.

### Step 4: Design the Proposed Structure
- Propose a new account hierarchy using a standardized numbering convention:
  - 1000–1999: Assets
  - 2000–2999: Liabilities
  - 3000–3999: Equity
  - 4000–4999: Revenue
  - 5000–5999: Cost of Goods Sold / Direct Costs
  - 6000–6999: Operating Expenses
  - 7000–7999: Other Income / Expense
  - 8000–8999: Intercompany / Eliminations (if applicable)
- Consolidate redundant accounts into a single account with a clear description.
- Move misclassified accounts to the correct category with a migration note.
- Add missing accounts with suggested codes, names, and types.
- Preserve any account codes that are locked by regulation or system constraints; flag them explicitly.

### Step 5: Produce Migration Guidance
- Map each old account code to its new code (one-to-one or many-to-one).
- Flag accounts requiring journal entry reclassification for prior periods.
- Note accounts that can be inactivated vs. deleted.
- Identify any system configuration changes required (e.g., segment tags, intercompany flags).

## Output Format

Produce the following sections in order:

---

**1. Audit Summary**
A bulleted list of all identified issues grouped
