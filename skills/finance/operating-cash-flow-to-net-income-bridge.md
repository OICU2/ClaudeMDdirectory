---
name: operating-cash-flow-to-net-income-bridge
description: >
  Builds a structured reconciliation bridge from net income to operating cash flow, itemizing non-cash adjustments, working capital changes, and other reconciling items. Use when someone asks to reconcile net income to cash flow, wants to build a cash flow bridge, needs to explain why cash flow differs from net income, or is preparing an indirect method cash flow statement. Also triggers when someone asks about non-cash adjustments or working capital impacts on operating cash.
category: finance
tags: [cash-flow, reconciliation, working-capital, indirect-method, financial-statements]
author: community
---

# Operating Cash Flow to Net Income Bridge

This skill builds a line-by-line reconciliation bridge from net income to operating cash flow using the indirect method, and will activate whenever a user needs to explain or quantify the differences between accrual-based earnings and cash generation.

## Bridge Construction Workflow

1. **Anchor on Net Income**: Start with GAAP net income (or net loss) as the top line. Confirm the reporting period (quarterly, annual, TTM) and currency.

2. **Add Non-Cash Charges (Addbacks)**:
   - Depreciation & amortization (D&A)
   - Stock-based compensation (SBC)
   - Amortization of debt issuance costs
   - Impairment charges
   - Deferred income tax expense/benefit
   - Other non-cash items (mark-to-market losses, provisions, etc.)

3. **Subtract Non-Cash Income Items**:
   - Gains on asset sales
   - Deferred revenue recognized without new cash
   - Mark-to-market gains
   - Equity income from unconsolidated subsidiaries (net of dividends received)

4. **Itemize Working Capital Movements** (use the sign convention: increase in asset = cash outflow; increase in liability = cash inflow):
   - Accounts receivable (Δ)
   - Inventory (Δ)
   - Prepaid expenses and other current assets (Δ)
   - Accounts payable (Δ)
   - Accrued liabilities (Δ)
   - Deferred revenue (Δ)
   - Other working capital items (Δ)

5. **Include Other Operating Reconciling Items**:
   - Changes in long-term deferred revenue
   - Changes in pension/post-retirement obligations
   - Other long-term assets/liabilities

6. **Arrive at Operating Cash Flow**: Sum all lines to produce total cash from operations. Cross-check against the reported cash flow statement if actual figures are provided.

7. **Flag Anomalies**: Highlight any period where the net income-to-OCF conversion ratio (OCF/Net Income) is unusually high or low, or where a single working capital line dominates the bridge. Note if the company is a net income generator but cash consumer, or vice versa.

8. **Handle Missing Data**: If the user provides partial figures, build the bridge with available items, clearly mark missing lines as `[Not provided]`, and note which items would typically be material for the company's industry.

## Output Format

Produce a formatted bridge table followed by a brief narrative:

**Bridge Table** (pipe-separated or clean ASCII table):

```
Operating Cash Flow Bridge — [Company Name], [Period]
─────────────────────────────────────────────────────
Net Income                                  $X,XXX
─────────────────────────────────────────────────────
Non-Cash Adjustments
  + Depreciation & Amortization               XXX
  + Stock-Based Compensation                  XXX
  + Deferred Taxes                            XXX
  + Impairment / Other Non-Cash               XXX
─────────────────────────────────────────────────────
Working Capital Changes
  +/- Accounts Receivable                    (XXX)
  +/- Inventory                               XXX
  +/- Accounts Payable                        XXX
  +/- Accrued Liabilities                     XXX
  +/- Other Working Capital                   XXX
─────────────────────────────────────────────────────
Other Reconciling Items                       XXX
─────────────────────────────────────────────────────
Operating Cash Flow                         $X,XXX
═════════════
