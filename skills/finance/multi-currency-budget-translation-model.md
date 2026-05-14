---
name: multi-currency-budget-translation-model
description: >
  Translates budget figures denominated in functional currencies into a single reporting currency using specified budget exchange rates, then quantifies translation exposure by cost center. Use when someone says "translate our budget to reporting currency," asks about "budget FX translation," or wants to "show translation exposure by cost center," "convert functional currency budgets," or "apply budget rates to our plan."
category: finance
tags: [fx-translation, budgeting, multi-currency, cost-center, reporting-currency]
author: community
---

# Multi-Currency Budget Translation Model

This skill converts budget figures from multiple functional currencies into a designated reporting currency using locked budget rates and surfaces translation exposure by cost center so finance teams can understand FX risk embedded in the plan.

## Translation Workflow

1. **Collect inputs**: Gather the budget data including cost center, functional currency, budget amount, and the applicable budget rate (e.g., average annual rate, spot at budget lock date) for each currency pair.

2. **Validate budget rates**: Confirm a budget rate exists for every functional currency → reporting currency pair in the dataset. Flag any missing rates before proceeding; do not interpolate rates without explicit instruction.

3. **Apply translation**: For each line item, calculate:
   - `Reporting Currency Amount = Functional Currency Amount ÷ Budget Rate` (if rate is expressed as units of functional currency per 1 unit of reporting currency)
   - Or `Reporting Currency Amount = Functional Currency Amount × Budget Rate` (if rate is expressed as units of reporting currency per 1 unit of functional currency)
   - Confirm the rate convention with the user if ambiguous.

4. **Aggregate by cost center**: Sum translated amounts per cost center across all functional currencies to produce a consolidated reporting-currency budget for each center.

5. **Calculate translation exposure**: For each cost center, compute:
   - Total budget in reporting currency
   - Breakdown by source functional currency (amount and % share)
   - Sensitivity: estimated impact of a ±1% and ±5% move in each currency against the budget rate (= translated amount × rate movement %)

6. **Highlight concentration risk**: Flag cost centers where a single non-reporting currency represents >30% of total translated budget as high translation exposure.

7. **Restate at current rates (optional)**: If current spot rates are provided, restate the budget at spot and compute the variance vs. budget rates (favorable/unfavorable) per cost center and currency.

## Output Format

Produce the following sections in order:

**1. Summary Table — Translated Budget by Cost Center**
| Cost Center | Functional Currency | Functional Amount | Budget Rate | Reporting Currency Amount |
(One row per cost center × currency combination, with subtotals per cost center and a grand total.)

**2. Translation Exposure Table**
| Cost Center | Currency | Translated Amount (RC) | % of Cost Center Total | 1% Move Impact (RC) | 5% Move Impact (RC) | Exposure Flag |
(Flag = HIGH if >30% concentration in a single non-reporting currency.)

**3. Spot Restatement Variance (if spot rates provided)**
| Cost Center | Currency | Budget Rate | Spot Rate | Budget Amount (RC) | Spot Amount (RC) | Variance (RC) | Fav / Unfav |

**4. Key Observations**
- Bullet list (max 6 bullets) calling out: largest exposed cost centers, currencies driving the most translation risk, total favorable/unfavorable variance vs. spot, and any missing rates or data issues.

Use a clean tabular format. Express all reporting currency amounts to 2 decimal places. Label all currencies with ISO 4217 codes (e.g., USD, EUR, GBP). State the budget rate convention used (e.g., "1 EUR = X USD") at the top of the output.
