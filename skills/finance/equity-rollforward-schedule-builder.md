---
name: equity-rollforward-schedule-builder
category: finance
description: >
  Builds a structured period-over-period equity rollforward schedule that tracks all movements in stockholders' equity including net income, dividends declared, stock issuances, share repurchases, and other comprehensive income. Use when someone says "build me an equity rollforward," asks about "changes in stockholders' equity," wants to "reconcile beginning and ending equity balances," needs to "track equity movements across periods," or is preparing a "statement of changes in equity."
tags: [equity, rollforward, stockholders-equity, financial-statements, reconciliation]
author: community
---

# Equity Rollforward Schedule Builder

This skill constructs a complete period-over-period equity rollforward schedule reconciling beginning to ending equity balances across all components, activating whenever a user needs to track or present changes in stockholders' equity.

## Build Process

1. **Identify equity components** — Collect the relevant equity line items present in the entity's structure:
   - Common stock (par value)
   - Additional paid-in capital (APIC)
   - Retained earnings
   - Accumulated other comprehensive income/loss (AOCI)
   - Treasury stock
   - Noncontrolling interests (if applicable)

2. **Establish the period structure** — Confirm the reporting periods needed (e.g., quarterly, annual, multi-year). Create one column per period with a beginning balance row and ending balance row.

3. **Capture all movement line items** — For each period, collect and categorize:
   - **Net income** → flows into retained earnings
   - **Dividends declared** (common and preferred) → reduces retained earnings; request per-share rate if not provided
   - **Stock issuances** → splits between par value (common stock) and APIC; request shares issued and price
   - **Share repurchases** → increases treasury stock at cost; request shares and repurchase price
   - **Stock-based compensation expense** → increases APIC
   - **OCI items** → unrealized gains/losses on securities, foreign currency translation, pension adjustments go into AOCI
   - **Other adjustments** → ASC 606/842 adoption impacts, prior period corrections, reclassifications

4. **Ask for missing inputs** — If the user provides partial data, explicitly request:
   - Beginning balances for each component
   - Shares outstanding (beginning and ending)
   - Dividend declaration dates and amounts
   - Any non-recurring equity transactions

5. **Validate the rollforward** — Confirm that for each component:
   - Beginning balance + all movements = ending balance
   - Total equity rollforward ties to the balance sheet equity total
   - Net income ties to the income statement bottom line
   - OCI ties to the comprehensive income statement

6. **Flag anomalies** — Call out any unexplained variance, missing tie-outs, or unusual line items that may require footnote disclosure.

## Output Format

Produce a rollforward schedule in Markdown table format with the following structure:

- **Rows**: One row per equity movement category (listed in the order shown in Step 3), plus a beginning balance row and ending balance row
- **Columns**: One column per period, plus a component-level breakdown (Common Stock | APIC | Retained Earnings | AOCI | Treasury Stock | Total)
- **Subtotals**: Group OCI items with a subtotal row; group issuance/repurchase activity with a subtotal row
- **Validation row**: Include a "Check (should = $0)" row at the bottom showing Beginning + Movements − Ending for each column
- **Footnotes**: List any assumptions made (e.g., dividend timing, share price used, rounding)
- **Length**: One table per period set; if multi-year, produce a separate table per year or a consolidated multi-column table depending on user preference

Example header structure:
```
| Movement | Common Stock | APIC | Retained Earnings | AOCI | Treasury Stock | Total Equity |
|---|---|---|---|---|---|---|
| Beginning Balance | | | | | | |
| Net Income | — | — | X | — | — | X |
| Dividends Declared | — | — | (X) | — | — | (X) |
| Stock Issuances | X | X | — | — | — | X |
| Share Repurchases | — | — | — | — | (
