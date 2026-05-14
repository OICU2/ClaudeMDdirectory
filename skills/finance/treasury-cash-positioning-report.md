---
name: treasury-cash-positioning-report
category: finance
description: >
  Consolidates daily bank balances across multiple accounts into a unified treasury position report with liquidity thresholds and funding gap alerts. Use when someone says "pull today's cash position," asks about available liquidity across accounts, wants to see a funding gap analysis, needs to know if operating accounts are below minimum thresholds, or requests a daily treasury summary.
tags: [treasury, cash-management, liquidity, banking, finance]
author: community
---

# Treasury Cash Positioning Report

This skill consolidates multi-account bank balances into a structured daily treasury position report, flags accounts below liquidity thresholds, and surfaces funding gaps — activated when users request cash positions, liquidity snapshots, or daily treasury summaries.

## Workflow

1. **Collect account data**: Request or ingest the following for each bank account: account name, account number (last 4 digits), bank name, account type (operating, payroll, controlled disbursement, concentration, investment), opening ledger balance, current available balance, and any pending debits/credits.

2. **Establish thresholds**: If not provided, prompt the user for minimum liquidity thresholds per account type. Use these defaults if declined:
   - Operating accounts: $500,000 minimum
   - Payroll accounts: $250,000 minimum (or 110% of next payroll run)
   - Controlled disbursement: $0 (funded same-day)
   - Concentration/header accounts: $1,000,000 minimum

3. **Calculate positions**:
   - Net available position per account = available balance − scheduled outflows for the day
   - Total enterprise cash = sum of all net available positions excluding restricted accounts
   - Funding gap per account = minimum threshold − net available position (positive value = shortfall)
   - Excess liquidity = net available position − minimum threshold (positive value = surplus)

4. **Identify alerts**:
   - **Critical**: Account net position falls below 75% of minimum threshold
   - **Warning**: Account net position is between 75% and 100% of minimum threshold
   - **Surplus**: Account holds more than 150% of minimum threshold (flag for sweep/investment consideration)
   - **Funding gap**: Any account with a positive funding gap requires same-day transfer recommendation

5. **Generate transfer recommendations**: For each funding gap, identify the nearest surplus account and recommend an intercompany transfer or concentration sweep, specifying amount, source account, destination account, and transfer method (wire, ACH, book transfer).

6. **Apply date and currency context**: Label the report with the as-of date and time, note the currency (default USD), and flag any foreign-currency accounts separately with spot rate and USD equivalent.

## Output Format

Produce a structured report with the following sections:

---

**DAILY TREASURY POSITION REPORT**
As of: [Date] | [Time] [Timezone]
Prepared by: Claude Treasury Assistant

---

**EXECUTIVE SUMMARY**
- Total Enterprise Cash Available: $[amount]
- Accounts in Alert Status: [count] ([count] Critical, [count] Warning)
- Funding Gaps Identified: [count] | Total Shortfall: $[amount]
- Surplus Accounts (sweep candidates): [count] | Total Excess: $[amount]

---

**ACCOUNT-BY-ACCOUNT POSITION TABLE**

| Account Name | Bank | Type | Available Balance | Min Threshold | Net Position | Status |
|---|---|---|---|---|---|---|
| [name] | [bank] | [type] | $[amt] | $[amt] | $[amt] | 🔴/🟡/🟢 |

---

**ALERT DETAILS**
For each flagged account:
- Account: [name] ([last 4])
- Status: CRITICAL / WARNING / SURPLUS
- Current Position: $[amount]
- Threshold: $[amount]
- Gap / Excess: $[amount]
- Action Required: [specific action]

---

**TRANSFER RECOMMENDATIONS**
For each funding gap:
1. Transfer $[amount] from [Source Account] → [Destination Account] via [method] by [deadline time]

---

**RESTRICTED / EXCLUDED ACCOUNTS**
List any accounts excluded from enterprise total with reason.

---

**NOTES**
Any manual adjustments, timing caveats, or data quality flags.

---

Report length scales with
