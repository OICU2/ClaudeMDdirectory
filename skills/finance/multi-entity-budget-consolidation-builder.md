---
name: multi-entity-budget-consolidation-builder
description: >
  Consolidates budget submissions from multiple subsidiaries into a unified parent-level financial view by eliminating intercompany transactions and surfacing gaps or misalignments. Use when someone says "roll up our subsidiary budgets," asks about "consolidating entity budgets," wants to "build a group-level budget," needs to "eliminate intercompany entries from the budget," or is trying to "combine division budgets into a parent view."
category: finance
tags: [consolidation, budgeting, intercompany, multi-entity, financial-planning]
author: community
---

# Multi-Entity Budget Consolidation Builder

This skill aggregates budget data from multiple subsidiaries or business units into a single consolidated parent-level view, applies intercompany eliminations, and flags gaps, inconsistencies, or missing submissions for review.

## Consolidation Workflow

### 1. Collect and Validate Entity Submissions
- Request budget data for each entity: revenue, expenses, capital expenditures, headcount, and intercompany transactions as separate line items.
- Confirm the reporting currency and whether any entities require currency translation; if so, apply stated exchange rates and note them explicitly.
- Flag any entities that have not submitted budgets and hold a placeholder row labeled `[PENDING — Entity Name]` in the consolidated output.

### 2. Standardize the Chart of Accounts
- Map each entity's line items to a master chart of accounts provided by the user, or propose a standard mapping if none exists.
- Highlight any line items that do not map cleanly and request clarification before including them in totals.
- Normalize period structure (monthly, quarterly, annual) across all entities to match the parent reporting cadence.

### 3. Identify and Eliminate Intercompany Transactions
- Extract all intercompany revenue, expense, loan, and transfer entries from each entity.
- Match offsetting entries between entities (e.g., Entity A charges Entity B $500K for services — both sides must exist).
- Flag unmatched intercompany entries with the label `[ICO MISMATCH — requires resolution]` and list the discrepancy amount and the entities involved.
- Remove matched pairs from consolidated totals to prevent double-counting.

### 4. Build the Consolidated Budget
- Sum remaining (post-elimination) line items across all entities by account and period.
- Produce a top-level P&L, balance sheet bridge (if applicable), and capex schedule.
- Add a separate reconciliation section showing: gross entity totals → intercompany eliminations → consolidated net totals.

### 5. Flag Gaps and Anomalies
- Identify budget lines where one entity has submitted figures but peer entities with similar business activities have not (potential omission).
- Flag any entity whose total budget deviates more than 20% from the prior year actuals or stated growth targets (configurable threshold).
- Note missing supporting schedules (headcount detail, capex justification) where expected.

## Output Format

Produce a structured consolidation report with the following sections:

**1. Submission Status Table**
| Entity | Status | Currency | Last Updated | Notes |
List all expected entities with submission status (Received / Pending / Incomplete).

**2. Intercompany Elimination Schedule**
| Transaction ID | Entity A | Entity B | Account | Amount | Match Status |
Separate table for matched eliminations and unmatched mismatches.

**3. Consolidated Budget Summary**
Multi-column table by period (monthly or quarterly) with rows for each major account group:
- Revenue (external)
- Cost of Goods Sold
- Gross Profit
- Operating Expenses (broken into subcategories)
- EBITDA
- Capex
- Net Income
Include subtotals and grand totals. Add a `% of Total` column.

**4. Reconciliation Bridge**
Single table: Gross Aggregated Total → Less: IC Eliminations → Consolidated Total, by account group.

**5. Flags and Action Items**
Numbered list of every gap, mismatch, pending item, or anomaly with: description, entity(ies) involved, dollar impact, and recommended next step.

Deliver output as structured markdown tables. If the user provides spreadsheet data, mirror their column structure where possible. Length scales with number of entities — do not truncate tables. Summarize findings in 3–5 bullet points at the top before the detailed tables.
