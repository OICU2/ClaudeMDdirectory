---
name: royalty-revenue-calculation-model
description: >
  Calculates royalty payments owed or receivable by applying tiered rate structures, volume thresholds, and contract terms to underlying sales or usage data. Use when someone says "calculate my royalties," asks about "how much I owe in licensing fees," wants to "model royalty revenue," needs to "apply tiered royalty rates to sales data," or is trying to "figure out royalty payments from a contract." Handles both licensor and licensee perspectives across music, publishing, software, patents, and merchandise.
category: finance
tags: [royalties, licensing, revenue-modeling, contract-finance, tiered-pricing]
author: community
---

# Royalty Revenue Calculation Model

This skill computes royalty payments by parsing contract terms, applying tiered rate structures to sales or usage data, and producing a structured breakdown of amounts owed or receivable.

## Calculation Workflow

1. **Extract contract parameters** from user input or provided documents:
   - Base royalty rate(s) and any escalator clauses
   - Tier thresholds (e.g., 0–10,000 units at 8%, 10,001–50,000 at 10%, 50,001+ at 12%)
   - Royalty base definition (gross sales, net sales, net receipts, or usage count)
   - Deductions allowed (returns, freight, packaging, taxes — specify % or flat amounts)
   - Advance recoupment balance, if any
   - Reporting period (monthly, quarterly, annual)
   - Minimum guarantees or caps

2. **Clarify missing inputs** before calculating. If tier thresholds, rate structure, or royalty base are ambiguous, ask one focused question rather than proceeding with assumptions.

3. **Compute the royalty base**:
   - Start with gross revenue or unit count provided
   - Subtract all contractually defined deductions
   - Confirm the resulting net royalty base

4. **Apply tiered rates in sequence**:
   - Allocate units/revenue to each tier bucket in order
   - Multiply each bucket by its applicable rate
   - Sum all tier results for gross royalty amount

5. **Apply advance recoupment**:
   - If an unrecouped advance exists, subtract it from gross royalty
   - Report remaining unrecouped balance or net payment due

6. **Check against minimums and caps**:
   - If a minimum guarantee applies and calculated royalty falls below it, flag the shortfall
   - If a payment cap applies, apply it and note the excess

7. **Validate reasonableness**:
   - Effective blended rate = total royalty ÷ total royalty base; flag if it falls outside expected range given the tier structure
   - Cross-check arithmetic on each tier bucket

## Output Format

Produce a structured royalty statement with the following sections:

**Contract Parameters Summary**
- Royalty base type, deduction list, tier structure, advance balance, period

**Royalty Base Calculation**
| Item | Amount |
|---|---|
| Gross Sales / Usage | $X |
| Less: [Deduction 1] | $(X) |
| Less: [Deduction 2] | $(X) |
| **Net Royalty Base** | **$X** |

**Tiered Rate Application**
| Tier | Units/Revenue in Tier | Rate | Royalty |
|---|---|---|---|
| Tier 1 (0–10,000) | X | 8% | $X |
| Tier 2 (10,001–50,000) | X | 10% | $X |
| Tier 3 (50,001+) | X | 12% | $X |
| **Total Gross Royalty** | | | **$X** |

**Net Payment Calculation**
- Gross Royalty: $X
- Less: Advance Recoupment: $(X)
- **Net Royalty Payable / Receivable: $X**
- Remaining Unrecouped Advance (if any): $X

**Effective Blended Rate**: X.X%

**Notes**: Flag any minimum guarantee shortfalls, caps applied, assumptions made about ambiguous contract terms, or items requiring legal/accounting review.

Keep the output concise — one table set per period. If multiple periods are provided, produce one statement
