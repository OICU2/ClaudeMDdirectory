---
name: customer-deposit-liability-rollforward
description: >
  Tracks customer deposits and advance payments as balance sheet liabilities, rolling them forward each period as revenue is recognized and obligations are fulfilled. Use when someone says "we received a customer deposit," asks about unearned revenue schedules, or wants to track advance payments on the balance sheet. Also activates when someone needs to reconcile deferred revenue, build a deposit liability rollforward, or show how customer prepayments convert to recognized revenue.
category: finance
tags: [deferred-revenue, liabilities, revenue-recognition, deposits, rollforward]
author: community
---

# Customer Deposit Liability Rollforward

This skill builds and maintains a period-by-period rollforward of customer deposit liabilities, tracking opening balances, new deposits received, revenue recognized, refunds issued, and closing balances as obligations are fulfilled.

## Rollforward Workflow

1. **Gather inputs for each period:**
   - Opening liability balance (deposits not yet earned)
   - New deposits or advance payments received during the period
   - Revenue recognized (deposits earned by delivering goods/services)
   - Refunds or forfeitures issued to customers
   - Any reclassifications or adjustments

2. **Apply the rollforward formula:**
   ```
   Closing Balance = Opening Balance
                   + New Deposits Received
                   - Revenue Recognized
                   - Refunds / Forfeitures Issued
                   +/- Adjustments
   ```

3. **Validate the rollforward:**
   - Confirm closing balance ties to the balance sheet liability account
   - Ensure revenue recognized flows to the income statement correctly
   - Flag any negative balances (indicates over-recognition — requires investigation)
   - Check that refunds are supported by cancellation documentation

4. **Categorize deposit types if multiple exist:**
   - Split by product line, customer segment, or contract type
   - Track current vs. long-term portions (expected to be earned within 12 months vs. beyond)
   - Maintain a sub-ledger or schedule per deposit category

5. **Apply revenue recognition rules:**
   - Recognize revenue only when performance obligation is satisfied (ASC 606 / IFRS 15)
   - For partial deliveries, recognize proportional amounts based on contract milestones or delivery percentage
   - Document the recognition trigger for each line (e.g., shipment date, service completion, customer acceptance)

6. **Repeat for each reporting period** (monthly, quarterly, or annually) and roll the closing balance forward as the next period's opening balance.

## Output Format

Produce a structured rollforward table with the following columns, followed by a brief narrative summary:

**Rollforward Table (one row per period):**

| Period | Opening Balance | + Deposits Received | − Revenue Recognized | − Refunds Issued | +/− Adjustments | Closing Balance |
|--------|----------------|--------------------|--------------------|-----------------|----------------|----------------|
| [Q1]   | $X             | $X                 | $X                 | $X              | $X             | $X             |
| [Q2]   | $X             | $X                 | $X                 | $X              | $X             | $X             |

**Below the table, provide:**
- **Balance sheet tie-out:** Confirm closing balance matches the liability on the balance sheet
- **Current vs. long-term split:** Portion expected to be recognized within 12 months vs. beyond
- **Key observations:** Any unusual movements (large spikes in deposits, slow recognition, refund trends)
- **Journal entry summary:** Debit/credit entries for deposits received and revenue recognized during the period
- **Open items:** Deposits older than a specified threshold that have not yet been recognized (flag as risk)

Format as a clean table plus bullet-point narrative. If data is missing, state explicitly what is needed before the rollforward can be completed.
