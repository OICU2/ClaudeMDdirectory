---
name: contract-asset-liability-rollforward
description: >
  Builds a monthly rollforward schedule for contract assets and liabilities under ASC 606, tracking opening balances through closing positions. Use when someone says "reconcile contract assets," asks about "unbilled revenue rollforward," wants to "track deferred revenue movements," needs to "prepare ASC 606 rollforward schedules," or is analyzing "contract asset and liability changes." Produces a structured table showing each movement category with beginning and ending balances.
category: finance
tags: [asc-606, revenue-recognition, contract-assets, deferred-revenue, rollforward]
author: community
---

# Contract Asset & Liability Rollforward

This skill produces a monthly ASC 606 rollforward schedule for contract assets and contract liabilities, tracing every movement from opening to closing balance so users can reconcile recognized revenue, billings, and collections.

## Rollforward Workflow

### 1. Identify Inputs
Collect the following for the period:
- Opening contract asset balance and opening contract liability (deferred revenue) balance
- New performance obligations satisfied (revenue recognized) during the period
- Billings issued to customers during the period
- Cash collected from customers
- Any contract modifications, terminations, or adjustments
- Reclassifications between contract asset and contract liability

### 2. Apply ASC 606 Movement Logic

**Contract Asset Rollforward:**
| Movement | Direction | Explanation |
|---|---|---|
| Revenue recognized | + Increase | Performance obligation satisfied, not yet billed |
| Billings issued | − Decrease | Converts contract asset to accounts receivable |
| Contract modifications | +/− Adjust | Adds or removes unbilled amounts |
| Write-offs / impairments | − Decrease | Uncollectible contract assets |

**Contract Liability (Deferred Revenue) Rollforward:**
| Movement | Direction | Explanation |
|---|---|---|
| Cash received / billings in advance | + Increase | Customer paid before performance |
| Revenue recognized from backlog | − Decrease | Obligation satisfied, liability relieved |
| Refunds issued | − Decrease | Obligation extinguished without performance |
| Contract modifications | +/− Adjust | Changes to transaction price or timing |

### 3. Validate Internal Consistency
- Confirm: Opening Balance + Total Additions − Total Reductions = Closing Balance (for each schedule)
- Cross-check: Total revenue recognized = P&L revenue for the period
- Cross-check: Net billings tie to accounts receivable subledger activity
- Flag any unexplained variance exceeding 1% of opening balance or $10K (whichever is lower)

### 4. Handle Edge Cases
- **Netting:** If a single contract has both an asset and a liability, present gross and note the netting per ASC 606-10-45-1
- **Long-term vs. current:** Split closing balances into current (≤12 months) and non-current (>12 months)
- **Multiple contracts:** Aggregate by contract type or business line if detail is unavailable; note aggregation method

### 5. Disclosures to Flag
Note items that require disclosure in financial statement footnotes:
- Significant changes in contract asset or liability balances
- Revenue expected to be recognized from remaining performance obligations
- Practical expedients applied

## Output Format

Produce two side-by-side rollforward tables (Contract Assets and Contract Liabilities), followed by a variance check and a brief narrative summary.

**Table structure for each schedule:**

```
CONTRACT ASSET ROLLFORWARD — [Month/Period]
─────────────────────────────────────────────────────
                                        Amount ($)
Opening Balance, [Start Date]           XXX,XXX
  + Revenue recognized, not yet billed  XXX,XXX
  + Contract modifications (net)         XX,XXX
  − Billings transferred to A/R        (XXX,XXX)
  − Impairments / write-offs             (X,XXX)
Closing Balance, [End Date]             XXX,XXX
─────────────────────────────────────────────────────
  Current portion (≤12 months)          XXX,XXX
  Non-current portion (>12 months)       XX,XXX
─────────────────────────────────────────────────────

CONTRACT LIABILITY ROLLFORWARD — [Month/Period]
─
