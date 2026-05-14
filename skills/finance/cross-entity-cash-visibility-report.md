---
name: cross-entity-cash-visibility-report
description: >
  Aggregates daily bank balances across all legal entities and accounts into a single consolidated cash position dashboard. Use when someone says "show me our cash position," asks about "consolidated bank balances," wants to "see liquidity across entities," needs a "daily cash report," or asks "how much cash do we have across all accounts." Triggers on requests for cross-entity treasury visibility, intercompany cash summaries, or group-level liquidity snapshots.
category: finance
tags: [treasury, cash-management, consolidation, liquidity, multi-entity]
author: community
---

# Cross-Entity Cash Visibility Report

This skill consolidates bank account balances across all legal entities into a single cash position dashboard, activated whenever a user requests a unified view of organizational liquidity or multi-entity cash status.

## Workflow

1. **Identify entities in scope**: Ask the user to confirm which legal entities, subsidiaries, or business units to include. If a prior entity list exists in context, use it and confirm before proceeding.

2. **Collect or accept balance data**: Accept bank balance inputs in any of these forms:
   - Pasted CSV or table data (entity, bank, account number, currency, balance, as-of date)
   - Manually entered figures per entity
   - A structured data file reference

3. **Normalize currencies**: Identify all non-base currencies. Ask the user for the reporting currency and apply exchange rates. If rates are not provided, prompt for them or note where spot rates were assumed and flag those cells.

4. **Aggregate by hierarchy**:
   - Group accounts by entity
   - Subtotal each entity's cash position in local currency and reporting currency
   - Sum all entities into a group-level total
   - Separate operating accounts, restricted cash, and intercompany balances if distinguishable

5. **Flag anomalies**: Highlight accounts with:
   - Zero or negative balances
   - Balances unchanged from the prior period (if prior data is available)
   - Missing as-of dates or stale data (older than 2 business days)

6. **Calculate key metrics**:
   - Total group cash (reporting currency)
   - Cash by region or legal entity tier (if hierarchy is known)
   - Percentage of total held per entity
   - Net cash after known intercompany eliminations (if intercompany data is provided)

7. **Summarize findings**: Write a 3–5 sentence executive summary noting total cash, largest holders, any concentration risks, and flagged anomalies.

## Output Format

Produce the following sections in order:

**Header**
- Report title: "Consolidated Cash Position Report"
- As-of date and reporting currency
- Number of entities and accounts included

**Entity-Level Summary Table**
| Entity Name | Bank | Account Type | Local Currency | Local Balance | Reporting Currency | Converted Balance | As-of Date | Notes |
Include a subtotal row per entity and a grand total row at the bottom.

**Group Cash Summary**
- Total cash across all entities (reporting currency)
- Breakdown by region or tier if applicable
- Restricted vs. unrestricted cash split
- Intercompany eliminations (if applicable) with net cash figure

**Anomaly & Risk Flags**
Bulleted list of flagged items with entity name, account, and description of the issue.

**Executive Summary**
3–5 sentences covering: total group cash, top cash-holding entities, currency concentration, and any immediate liquidity concerns.

**Assumptions & Data Notes**
Bulleted list of any exchange rates applied, data gaps, or user-supplied figures that could not be verified.

Output should be in Markdown. If the dataset is large (10+ entities), offer to produce a condensed version with entity subtotals only.
