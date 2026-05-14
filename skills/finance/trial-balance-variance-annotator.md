---
name: trial-balance-variance-annotator
description: >
  Compares current and prior period trial balances to automatically generate variance commentary
  and flag accounts with movements exceeding defined materiality thresholds. Use when someone says
  "explain the movements in the trial balance," asks about "what changed between periods," wants to
  "annotate variances in the accounts," needs to "review period-over-period fluctuations," or asks
  to "flag material account movements."
category: finance
tags: [trial-balance, variance-analysis, financial-reporting, materiality, period-comparison]
author: community
---

# Trial Balance Variance Annotator

This skill compares two periods of trial balance data, calculates account-level variances, applies a materiality threshold, and produces structured commentary explaining significant movements — used whenever a user needs automated analysis of period-over-period account changes.

## Workflow

1. **Collect inputs** — Request or parse the following:
   - Current period trial balance (account code, account name, debit/credit balance)
   - Prior period trial balance (same structure)
   - Materiality threshold (absolute amount, percentage, or both — default to 5% or $10,000 if not specified)
   - Reporting currency and period labels (e.g., "Q3 2024 vs Q2 2024")

2. **Normalize the data** — Align both periods by account code. Flag accounts that appear in one period but not the other as "new account" or "closed account."

3. **Calculate variances** — For each account:
   - Absolute variance = Current balance − Prior balance
   - Percentage variance = (Absolute variance / |Prior balance|) × 100
   - Direction: Favorable (F) or Adverse (A) based on account type (income vs. expense vs. balance sheet)

4. **Apply materiality filter** — Flag accounts where:
   - Absolute variance exceeds the defined threshold, OR
   - Percentage variance exceeds the defined threshold
   - Mark flagged accounts as `[MATERIAL]`

5. **Generate commentary** — For each flagged account, write one to three sentences covering:
   - The magnitude and direction of movement (e.g., "increased by $52,000 / 18%")
   - The likely or stated driver if context is provided (e.g., "driven by accelerated depreciation on new equipment")
   - Whether the movement is expected, unusual, or requires follow-up

6. **Summarize non-material accounts** — Group unflagged accounts into categories (e.g., Revenue, Cost of Sales, Overheads, Balance Sheet) with a single-line summary per group noting aggregate net movement.

7. **Highlight anomalies** — Separately call out:
   - Accounts with sign reversals (debit to credit or vice versa)
   - New or closed accounts
   - Accounts where percentage variance is high but absolute variance is below threshold (indicate as `[LOW VALUE — HIGH %]`)

## Output Format

Produce a structured report with the following sections:

**Header**
- Skill name, reporting entity (if provided), current period, prior period, materiality threshold applied

**Material Variances Table**
| Account Code | Account Name | Prior Balance | Current Balance | Absolute Var | % Var | Flag |
|---|---|---|---|---|---|---|
- Sorted by absolute variance descending
- Flag column: `[MATERIAL]`, `[NEW]`, `[CLOSED]`, `[SIGN REVERSAL]`, `[LOW VALUE — HIGH %]`

**Variance Commentary**
For each flagged account, a labeled block:
```
[Account Code] — [Account Name]
Movement: +$XX,XXX (+XX%) [Favorable / Adverse]
Commentary: [1–3 sentences explaining the movement, driver, and any required action]
```

**Non-Material Summary**
One paragraph per account category summarizing aggregate net movement for unflagged accounts.

**Anomalies & Follow-Up Items**
Bulleted list of accounts requiring further investigation with a one-line reason each.

**Totals Check**
Confirm whether the trial balance is in balance for both periods (debits = credits). Flag any out-of-balance condition as `[TB ERROR — INVESTIGATE]`.
