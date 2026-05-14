---
name: warranty-reserve-rollforward-builder
description: >
  Builds a structured period-over-period warranty liability rollforward schedule that captures opening balances, new accruals, claims paid, and reserve adjustments with variance commentary. Use when someone says "build me a warranty reserve rollforward," asks about "warranty liability changes over the period," wants to "reconcile warranty accruals to claims," needs to "explain warranty reserve movements," or is preparing "warranty liability disclosures for financial statements."
category: finance
tags: [warranty, reserves, rollforward, liability, accruals]
author: community
---

# Warranty Reserve Rollforward Builder

This skill builds a complete period-over-period warranty liability rollforward schedule by capturing all reserve movements and generating variance commentary suitable for management reporting or audit support.

## Workflow

1. **Gather inputs** — Collect the following before building:
   - Opening reserve balance (prior period ending balance)
   - New warranty accruals recorded during the period (by product line if available)
   - Actual claims paid or settled during the period
   - Any reserve adjustments (favorable or unfavorable) with reasons
   - Prior period comparative balances for variance analysis
   - Currency and reporting period (month, quarter, fiscal year)

2. **Classify each movement** into one of five line items:
   - Opening Balance
   - Accruals (new provisions based on sales or actuarial estimates)
   - Claims Paid (cash settlements, repair costs, replacements)
   - Adjustments (changes in estimate, model updates, product recalls)
   - Closing Balance (Opening + Accruals − Claims Paid ± Adjustments)

3. **Calculate and validate** — Confirm the closing balance arithmetic ties exactly. Flag any discrepancy between the computed closing balance and the ledger balance as a reconciling item requiring explanation.

4. **Compute period-over-period variances** — Compare current period closing balance to prior period closing balance. Break the variance into:
   - Volume driver (change in accrual rate × prior period sales)
   - Rate driver (change in accrual rate × current period sales)
   - Claims experience driver (actual vs. expected claims)
   - Adjustment driver (discrete reserve changes)

5. **Write variance commentary** — For each driver exceeding a 5% threshold of the opening balance, write one to two sentences explaining the root cause. Reference specific products, markets, or events where known.

6. **Assess reserve adequacy** — Compare the closing reserve balance to trailing twelve-month claims paid. Flag if coverage ratio falls below 1.0x or exceeds 3.0x as potentially under- or over-reserved.

## Output Format

Produce the following sections in order:

**1. Rollforward Table** (tabular, two columns: Current Period and Prior Period)
```
                          Current Period    Prior Period    $ Change    % Change
Opening Balance           $X,XXX,XXX        $X,XXX,XXX
+ Accruals                $X,XXX,XXX        $X,XXX,XXX
− Claims Paid            ($X,XXX,XXX)      ($X,XXX,XXX)
± Adjustments             $X,XXX,XXX        $X,XXX,XXX
Closing Balance           $X,XXX,XXX        $X,XXX,XXX      $XXX,XXX     X.X%
```

**2. Variance Bridge** — Bullet list of each driver with dollar amount and direction (favorable/unfavorable).

**3. Variance Commentary** — Numbered paragraphs, one per material driver, each two to three sentences maximum.

**4. Reserve Adequacy Summary** — Single paragraph with coverage ratio, trend observation, and a recommendation (maintain, increase, or release reserve).

**5. Open Items / Assumptions** — Bulleted list of any data gaps, estimates used, or items requiring management confirmation before the schedule is finalized.

Total output length: one to two pages. Use dollar formatting with commas. Parentheses for negative values. Label all periods explicitly (e.g., Q3 FY2024 vs. Q3 FY2023).
