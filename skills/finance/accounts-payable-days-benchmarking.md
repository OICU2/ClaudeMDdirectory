---
name: accounts-payable-days-benchmarking
description: >
  Analyzes a company's days payable outstanding (DPO) and compares it against industry benchmarks to identify cash flow optimization opportunities. Use when someone asks about days payable outstanding, wants to benchmark supplier payment terms, is looking to improve working capital through payables, or needs to evaluate whether their AP payment timing is competitive. Also triggers when someone wants to optimize cash flow by adjusting when they pay suppliers.
category: finance
tags: [accounts-payable, dpo, working-capital, benchmarking, cash-flow]
author: community
---

# Accounts Payable Days Benchmarking

This skill calculates and benchmarks a company's days payable outstanding against industry standards, then surfaces actionable opportunities to optimize supplier payment timing for improved cash flow.

## Analysis Workflow

1. **Gather inputs** — Collect or prompt for: accounts payable balance, cost of goods sold (COGS) or total purchases, period length, and industry/sector classification.

2. **Calculate DPO** — Apply the standard formula:
   - DPO = (Accounts Payable ÷ COGS) × Number of Days in Period
   - If purchases data is available instead of COGS, use purchases for a more precise payables-specific figure.

3. **Establish industry benchmark** — Map the company's sector to benchmark DPO ranges using standard reference tiers:
   - **Retail**: 30–45 days
   - **Manufacturing**: 45–75 days
   - **Technology**: 40–60 days
   - **Healthcare**: 50–80 days
   - **Construction**: 30–60 days
   - **Food & Beverage**: 35–55 days
   - **General/Other**: 30–60 days
   - If the user provides a known benchmark, use that figure directly.

4. **Gap analysis** — Compare the company's DPO to the benchmark midpoint and upper bound:
   - Below lower bound → underperforming (paying too fast, leaving cash on the table)
   - Within range → on par, but may still have room to extend
   - Above upper bound → flag supplier relationship risk or potential cash constraint perception

5. **Quantify cash flow impact** — Calculate the cash flow impact of closing the DPO gap:
   - Additional cash available = (Target DPO − Current DPO) × (COGS ÷ Days in Period)
   - Express this in absolute dollar terms.

6. **Identify optimization levers** — Based on the gap, recommend specific actions:
   - Negotiate extended payment terms with top suppliers by spend
   - Implement dynamic discounting or supply chain finance programs
   - Shift from early payment to net-30/60/90 where no early-pay discounts exist
   - Centralize AP processes to use full contracted terms consistently
   - Evaluate payment timing within existing terms (pay on due date, not before)

7. **Flag tradeoffs** — Note any risks:
   - Supplier relationship strain if terms are pushed too aggressively
   - Lost early-pay discounts (calculate if 2/10 net 30 discounts outweigh the cash benefit)
   - Industry norms where fast payment is a competitive differentiator (e.g., small supplier ecosystems)

## Output Format

Produce a structured report with the following sections:

**DPO Summary**
- Current DPO (calculated, with formula shown)
- Industry benchmark range and midpoint
- DPO gap (positive = room to extend, negative = already above benchmark)

**Cash Flow Opportunity**
- Dollar value of cash unlocked by reaching benchmark midpoint
- Dollar value of cash unlocked by reaching benchmark upper bound

**Benchmarking Verdict**
- One-line status: Underperforming / On Par / Above Benchmark

**Recommended Actions**
- 3–5 prioritized, specific actions ranked by ease of implementation and cash impact

**Tradeoffs to Consider**
- 2–3 concise bullets on risks or offsetting factors

Format as clean sections with headers. Use a table for the DPO summary if multiple scenarios are compared. Keep total length to one focused page unless multiple suppliers or scenarios are analyzed.
