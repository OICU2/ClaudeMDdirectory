---
name: intercompany-markup-consistency-checker
category: finance
description: >
  Validates that intercompany sales transactions apply consistent transfer pricing markups across all related entities in a consolidated group. Use when someone says "check our intercompany markups," asks about transfer pricing consistency, wants to verify related-party transaction pricing, needs to audit intercompany sales for markup discrepancies, or is preparing for a consolidation review and suspects pricing irregularities.
tags: [transfer-pricing, intercompany, consolidation, markup-validation, related-party]
author: community
---

# Intercompany Markup Consistency Checker

This skill audits intercompany sales transactions across a consolidated group to detect inconsistent transfer pricing markups, flag policy violations, and produce a structured discrepancy report.

## Markup Consistency Validation Workflow

### 1. Collect Transaction Data
Request or parse the following fields for each intercompany transaction:
- Selling entity name and ID
- Buying entity name and ID
- Transaction date and period
- Cost of goods or services (cost basis)
- Intercompany sales price
- Product or service category
- Applicable transfer pricing policy (standard markup %)

### 2. Establish the Markup Baseline
- Identify the group's approved transfer pricing policy per entity pair or product category
- If multiple policies exist (e.g., by region, product line, or entity tier), map each transaction to its governing policy
- Calculate the **expected markup %** for each transaction: `(Policy Markup % × Cost Basis) + Cost Basis = Expected Price`

### 3. Calculate Actual Markups
For each transaction:
```
Actual Markup % = ((Sales Price - Cost Basis) / Cost Basis) × 100
Variance = Actual Markup % - Expected Markup %
```

### 4. Apply Consistency Rules
Flag a transaction as **inconsistent** if:
- Variance exceeds ±2% from the approved policy markup (or use client-defined threshold)
- The same selling entity applies different markups to the same buying entity within the same period without documented justification
- Markup is 0% or negative (unless explicitly approved as a pass-through)
- Markup policy is missing or unassigned for the entity pair

### 5. Detect Systemic Patterns
After transaction-level checks, aggregate results to identify:
- Entities that consistently over- or under-apply markups
- Product categories with the highest variance frequency
- Periods where markups shifted without policy changes
- Entity pairs with no consistent markup pattern

### 6. Cross-Reference Eliminations
Confirm that flagged intercompany transactions are candidates for elimination in consolidation and that inconsistent markups will distort consolidated margin reporting.

## Output Format

Produce a structured report with the following sections:

**Summary Block**
- Total transactions reviewed
- Number and % flagged as inconsistent
- Highest single variance detected
- Number of entity pairs with systemic issues

**Flagged Transaction Table**
| Transaction ID | Selling Entity | Buying Entity | Period | Cost Basis | Actual Price | Expected Markup % | Actual Markup % | Variance | Flag Reason |
|---|---|---|---|---|---|---|---|---|---|

**Systemic Pattern Summary**
- Bullet list of entities or categories with recurring issues, including frequency and average variance

**Policy Gap List**
- List any entity pairs or product categories with no assigned transfer pricing policy

**Recommended Actions**
- Numbered list of corrective steps (e.g., restate transactions, update policy documentation, escalate to tax team)
- Flag transactions requiring external transfer pricing documentation under OECD or local rules if variance exceeds 5%

Report length scales with data volume. For fewer than 20 transactions, include every flagged item in full detail. For larger datasets, summarize by entity pair and provide a full flagged-transaction appendix.
