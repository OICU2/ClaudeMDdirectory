---
name: financial-covenant-monitoring
description: >
  Tracks debt agreement covenant ratios including DSCR, leverage thresholds, and liquidity minimums to alert when the business approaches or breaches compliance conditions. Use when someone says "check our covenants," asks about debt service coverage ratio, wants to know if we're at risk of breaching loan terms, needs to review our leverage ratio against bank requirements, or is preparing for a lender compliance certificate.
category: finance
tags: [covenants, debt-compliance, DSCR, leverage, lender-reporting]
author: community
---

# Financial Covenant Monitoring

This skill calculates and evaluates key debt covenant metrics against agreed thresholds, flags breaches or proximity warnings, and produces a lender-ready compliance summary.

## Covenant Monitoring Workflow

### 1. Collect Covenant Terms
Gather the specific covenant definitions from the credit agreement:
- **DSCR** (Debt Service Coverage Ratio): typically EBITDA / Total Debt Service, minimum threshold (e.g., ≥ 1.25x)
- **Leverage Ratio**: Total Debt / EBITDA, maximum threshold (e.g., ≤ 4.0x)
- **Fixed Charge Coverage Ratio (FCCR)**: (EBITDA – CapEx – Taxes) / Fixed Charges, minimum threshold
- **Liquidity / Minimum Cash**: absolute floor (e.g., ≥ $2M unrestricted cash)
- **Interest Coverage Ratio**: EBIT / Interest Expense, minimum threshold (e.g., ≥ 3.0x)
- Note the measurement period (quarterly, trailing twelve months) and cure provisions

### 2. Pull or Request Financial Inputs
Required inputs for each covenant calculation:
- EBITDA (trailing twelve months or per agreement definition)
- Total debt outstanding and current-period principal payments
- Cash interest expense
- Scheduled debt service (principal + interest for the period)
- Capital expenditures (if FCCR applies)
- Unrestricted cash and equivalents
- Any add-backs or exclusions permitted by the credit agreement

### 3. Calculate Each Covenant Ratio
Perform explicit step-by-step arithmetic for each ratio:
- Show numerator and denominator separately before computing the ratio
- Round to two decimal places
- Compare calculated ratio to the covenant threshold
- Compute **headroom**: the absolute and percentage gap between current ratio and threshold

### 4. Apply Warning Thresholds
Flag status for each covenant:
- 🟢 **Compliant** — ratio is more than 15% clear of the threshold
- 🟡 **Caution** — ratio is within 15% of the threshold (approaching breach)
- 🔴 **Breach** — ratio has crossed the covenant threshold
- If caution or breach, state: projected periods until breach at current trajectory (if trend data provided), and available cure options (equity injection, asset sale, debt paydown, waiver request)

### 5. Identify Triggering Events
Check for cross-default provisions or reporting obligations triggered by:
- Any single covenant breach
- Multiple caution-level covenants simultaneously
- Upcoming measurement dates within 30/60/90 days

## Output Format

Produce a structured **Covenant Compliance Dashboard** with these sections:

```
COVENANT COMPLIANCE DASHBOARD
Measurement Date: [date]  |  Measurement Period: [e.g., TTM Q3 2024]

─────────────────────────────────────────────────────────────
COVENANT          THRESHOLD   ACTUAL    HEADROOM    STATUS
─────────────────────────────────────────────────────────────
DSCR              ≥ 1.25x     1.41x     +0.16x      🟢 Compliant
Leverage Ratio    ≤ 4.00x     3.87x     +0.13x      🟡 Caution
Interest Coverage ≥ 3.00x     3.62x     +0.62x      🟢 Compliant
Min. Cash         ≥ $2.0M     $2.3M     +$0.3M      🟡 Caution
─────────────────────────────────────────────────────────────

CALCULATION DETAIL
[For
