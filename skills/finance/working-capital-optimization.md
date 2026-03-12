---
name: working-capital-optimization
description: >
  Analyzes the gap between current assets and liabilities to identify strategies for improving short-term liquidity and operational efficiency. Use when someone asks about improving cash flow, reducing working capital requirements, managing accounts receivable or payable cycles, or wants to understand why their business is cash-strapped despite being profitable. Also activates when someone mentions struggling with inventory turnover or supplier payment terms.
category: finance
tags: [working-capital, liquidity, cash-flow, accounts-receivable, accounts-payable]
author: community
---

# Working Capital Optimization

This skill analyzes the relationship between current assets and liabilities to surface actionable strategies for improving a business's short-term liquidity position and cash conversion cycle.

## Analysis Workflow

1. **Gather Current Position Data**
   - Collect current assets: cash, accounts receivable (AR), inventory, prepaid expenses
   - Collect current liabilities: accounts payable (AP), short-term debt, accrued expenses
   - Calculate Working Capital = Current Assets − Current Liabilities
   - Calculate Current Ratio = Current Assets ÷ Current Liabilities
   - Calculate Quick Ratio = (Cash + AR) ÷ Current Liabilities

2. **Calculate Cash Conversion Cycle (CCC)**
   - Days Sales Outstanding (DSO) = (AR ÷ Revenue) × 365
   - Days Inventory Outstanding (DIO) = (Inventory ÷ COGS) × 365
   - Days Payable Outstanding (DPO) = (AP ÷ COGS) × 365
   - CCC = DSO + DIO − DPO
   - A lower or negative CCC indicates stronger liquidity efficiency

3. **Identify Specific Levers by Category**

   **Accounts Receivable (reduce DSO):**
   - Tighten credit terms (e.g., Net 30 → Net 15)
   - Offer early payment discounts (e.g., 2/10 Net 30)
   - Implement automated invoice reminders at 7, 14, and 30 days overdue
   - Flag customers with DSO > 45 days for collections review
   - Consider invoice factoring or AR financing for chronic slow payers

   **Inventory (reduce DIO):**
   - Identify SKUs with turnover below industry benchmark
   - Implement just-in-time (JIT) ordering for fast-moving items
   - Liquidate slow-moving or obsolete stock at discount
   - Negotiate consignment arrangements with key suppliers
   - Apply ABC analysis: prioritize capital allocation to A-class items

   **Accounts Payable (increase DPO without penalty):**
   - Renegotiate payment terms with suppliers to Net 45 or Net 60
   - Consolidate supplier base to gain leverage for extended terms
   - Use dynamic discounting: pay early only when discount exceeds cost of capital
   - Align AP payment runs with cash inflow cycles

4. **Prioritize Recommendations**
   - Rank each lever by: estimated cash impact, implementation speed (quick win vs. 90-day project), and execution complexity
   - Flag any liquidity risks if working capital is negative or current ratio is below 1.2

5. **Benchmark Against Industry**
   - Compare DSO, DIO, DPO, and CCC to sector medians where data is available
   - Highlight the largest deviations as priority areas

## Output Format

Produce a structured report with the following sections:

**Working Capital Snapshot**
- Table showing: Working Capital ($), Current Ratio, Quick Ratio, DSO, DIO, DPO, CCC — with a one-line interpretation of each metric

**Gap Analysis**
- 2–3 sentences identifying the primary drag on working capital (e.g., slow collections, excess inventory, aggressive AP terms)

**Optimization Recommendations**
- Numbered list of 4–8 specific actions, each formatted as:
  - **Action**: What to do
  - **Cash Impact**: Estimated $ or days improvement
  - **Timeline**: Quick win (< 30 days), Medium (30–90 days), or Strategic (90+ days)
  - **Complexity**: Low / Medium / High

**Priority Matrix**
- 2×2 summary table: High Impact / Low Complexity items flagged as "Start Here"

**Risk
