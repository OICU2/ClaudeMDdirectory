---
name: preferred-dividend-arrearage-tracker
category: finance
description: >
  Calculates and tracks cumulative unpaid preferred dividends across multiple periods to support accurate equity section reporting and investor communications. Use when someone asks about preferred dividend arrearages, wants to know how much is owed to preferred shareholders, needs to calculate cumulative preferred dividends in arrears, is preparing footnote disclosures for preferred stock, or wants to track missed preferred dividend payments over time.
tags: [preferred-stock, dividends, equity, arrearages, financial-reporting]
author: community
---

# Preferred Dividend Arrearage Tracker

This skill calculates, accumulates, and reports unpaid cumulative preferred dividends across reporting periods for use in financial statements, footnote disclosures, and investor communications.

## Calculation Workflow

1. **Gather preferred stock parameters** for each class:
   - Par value per share and shares outstanding
   - Dividend rate (percentage of par or fixed dollar amount per share)
   - Cumulative vs. non-cumulative designation
   - Date of last paid dividend

2. **Identify unpaid periods**: Determine each quarter or annual period in which the declared dividend was skipped or partially paid. Only cumulative preferred stock accumulates arrearages — flag non-cumulative classes and exclude them.

3. **Calculate annual dividend obligation per class**:
   - `Annual Dividend = Shares Outstanding × (Par Value × Dividend Rate)` or `Shares × Fixed Dollar Rate`

4. **Calculate arrearage per period**:
   - `Period Arrearage = Annual Dividend ÷ Payment Frequency × Missed Periods`
   - Subtract any partial payments made during the period

5. **Accumulate across periods**:
   - Sum all unpaid period amounts chronologically
   - Carry forward prior balance: `Total Arrearage = Prior Balance + Current Period Missed − Any Catch-Up Payments`

6. **Check for catch-up payments**: If a dividend was paid in a later period, apply it against the oldest arrearage first (FIFO order).

7. **Compute per-share arrearage**:
   - `Arrearage per Share = Total Arrearage ÷ Shares Outstanding`

8. **Flag disclosure requirements**: If any arrearage exists, note that GAAP requires disclosure in the equity section footnotes and that arrearages must be satisfied before common dividends can be paid.

## Output Format

Produce a structured arrearage report with the following sections:

**Preferred Stock Arrearage Summary Table**
| Class | Shares Outstanding | Annual Dividend/Share | Periods in Arrears | Total Arrearage ($) | Arrearage per Share ($) |
|---|---|---|---|---|---|
| [Series A, B, etc.] | ... | ... | ... | ... | ... |

**Period-by-Period Arrearage Schedule**
- List each missed period (Q1 2022, Q2 2022, etc.) with:
  - Amount due
  - Amount paid (if partial)
  - Cumulative running balance

**Key Figures**
- Total arrearage across all cumulative preferred classes (single dollar figure)
- Total arrearage per common share (for investor communications)
- Number of consecutive periods without payment

**Disclosure Language (draft)**
- One paragraph suitable for use in financial statement footnotes, e.g.: *"As of [date], the Company has cumulative preferred dividends in arrears of $[X], or $[Y] per preferred share. No dividends may be declared or paid on common stock until all preferred arrearages are satisfied."*

**Assumptions & Inputs Used**
- Bullet list of all rates, share counts, and periods supplied by the user
