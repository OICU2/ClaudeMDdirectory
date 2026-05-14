---
name: sales-tax-reconciliation-builder
description: >
  Matches collected sales tax by jurisdiction against remitted amounts to identify discrepancies, filing gaps, and over- or under-remittance before audit exposure occurs. Use when someone says they need to reconcile sales tax, asks about tax filing discrepancies, wants to check if their remittances match collections, needs to find jurisdictions where tax wasn't filed, or is preparing for a sales tax audit.
category: finance
tags: [sales-tax, reconciliation, tax-compliance, jurisdiction, audit-prep]
author: community
---

# Sales Tax Reconciliation Builder

This skill analyzes collected versus remitted sales tax across jurisdictions to surface discrepancies, missed filings, and over- or under-remittance risks before they become audit liabilities.

## Reconciliation Workflow

### 1. Gather Input Data
Ask the user to provide or paste:
- **Collections data**: Total sales tax collected per jurisdiction (state, county, city) for the period
- **Remittance data**: Amounts actually filed and paid per jurisdiction and filing period
- **Period scope**: Month, quarter, or year being reconciled
- **Filing calendar**: Which jurisdictions require monthly vs. quarterly vs. annual filings

If data is incomplete, prompt specifically for what is missing before proceeding.

### 2. Normalize Jurisdiction Labels
- Standardize jurisdiction names (e.g., "CA", "California", "Calif." → "California")
- Split combined state+local entries into discrete rows if lumped together
- Flag any jurisdictions in collections data that have no corresponding remittance entry

### 3. Calculate Variances
For each jurisdiction:
- **Net variance** = Amount collected − Amount remitted
- **Variance %** = (Net variance / Amount collected) × 100
- Classify each line:
  - `OVER-REMITTED`: Remitted > Collected (potential refund opportunity)
  - `UNDER-REMITTED`: Collected > Remitted (liability exposure)
  - `NOT FILED`: Collections exist, zero remittance on record
  - `ZERO ACTIVITY`: No collections, no remittance (informational)
  - `MATCHED`: Variance within ±1% or ±$5 (whichever is greater)

### 4. Identify Filing Gaps
- Cross-reference the filing calendar against actual remittances
- Flag any jurisdiction where a filing was due but no payment appears in the remittance data
- Note if a jurisdiction shows collections across multiple sub-periods but only one filing (potential missed interim filing)

### 5. Prioritize by Risk
Rank findings using this logic:
1. `NOT FILED` entries — highest risk, immediate action required
2. `UNDER-REMITTED` entries — sort descending by absolute dollar variance
3. `OVER-REMITTED` entries — sort descending by dollar amount (refund/credit recovery)
4. Filing calendar gaps with no collections — lowest priority, flag for monitoring

### 6. Suggest Remediation Steps
For each high-risk finding, provide a specific next action:
- Under-remittance: Voluntary disclosure filing, amended return, or catch-up payment with estimated penalty
- Not filed: Identify the correct filing authority and form number if the jurisdiction is known
- Over-remittance: Note the jurisdiction's refund claim or credit carryforward process

## Output Format

Produce a structured reconciliation report with these sections:

---

**SALES TAX RECONCILIATION REPORT**
Period: [user-specified period]
Generated: [date if available]

**SUMMARY**
| Metric | Value |
|---|---|
| Total Collected | $X |
| Total Remitted | $X |
| Net Variance | $X |
| Jurisdictions Reviewed | N |
| Matched | N |
| Under-Remitted | N |
| Over-Remitted | N |
| Not Filed | N |

**JURISDICTION DETAIL TABLE**
| Jurisdiction | Period | Collected | Remitted | Variance ($) | Variance (%) | Status |
|---|---|---|---|---|---|---|
| [one row per jurisdiction/period combination] |

**HIGH-PRIORITY FINDINGS**
[Numbered list of NOT FILED and UNDER-REMITTED items with dollar exposure and recommended action]

**RECOVERY OPPORTUNITIES**
[List of OVER-REMITTED jurisdictions with estimated ref
