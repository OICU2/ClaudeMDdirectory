---
name: client-project-profitability-analysis
description: >
  Calculates true per-client profitability by comparing billed revenue against actual time, tool costs, and communication overhead. Use when someone says "I want to know if a client is worth it," asks about whether a project was actually profitable, wants to figure out their real hourly rate on a client, wonders if they're losing money on a retainer, or needs to decide whether to renew a client contract.
category: solopreneur
tags: [profitability, clients, pricing, time-tracking, freelance]
author: community
---

# Client Project Profitability Analysis

This skill calculates the true net profit and effective hourly rate for any client engagement by accounting for all real costs, not just invoiced hours.

## Profitability Calculation Workflow

**Step 1: Gather Revenue Data**
- Total amount billed or contracted for the project/period
- Any unpaid invoices (flag these separately as "at-risk revenue")
- Retainer amount if recurring

**Step 2: Calculate True Time Investment**
Ask for or estimate time across all categories:
- Billable work hours (design, development, writing, delivery)
- Unbillable admin: invoicing, contract review, onboarding
- Communication overhead: emails, Slack, calls, revisions requests
- Scope creep hours (work done but not billed)
- Total = all categories combined

**Step 3: Identify Direct Client Costs**
- Pro-rated tool/software costs used specifically for this client (e.g., $49/mo Figma if client is 40% of workload = $19.60)
- Subcontractor or contractor fees paid
- Platform/marketplace fees taken from payment
- Any out-of-pocket expenses not reimbursed

**Step 4: Run Core Calculations**
```
Gross Revenue         = billed amount
Total Costs           = tool costs + contractor fees + platform fees + expenses
Net Profit            = Gross Revenue - Total Costs
Total Hours           = billable + admin + communication + scope creep
Effective Hourly Rate = Net Profit ÷ Total Hours
Overhead Ratio        = (admin + communication hours) ÷ total hours × 100
```

**Step 5: Benchmark Against Target Rate**
- Ask for their target hourly rate (or default to $75/hr if unstated)
- Calculate the gap: Effective Rate vs. Target Rate
- Flag if overhead ratio exceeds 25% (communication-heavy client)
- Flag if scope creep hours exceed 15% of billable hours

**Step 6: Identify Profit Leaks**
Diagnose the biggest drag on profitability:
- High communication ratio → scope/communication boundaries needed
- Scope creep → contract change-order clause needed
- Tool costs → can tools be shared or downgraded?
- Low bill rate relative to hours → pricing needs adjustment

## Output Format

Produce a structured analysis with these sections:

**Client Profitability Report: [Client Name or "This Client"]**

| Metric | Value |
|---|---|
| Gross Revenue | $X |
| Total Direct Costs | $X |
| Net Profit | $X |
| Total Hours Worked | X hrs |
| Effective Hourly Rate | $X/hr |
| Target Hourly Rate | $X/hr |
| Rate Gap | +/- $X/hr |
| Overhead Ratio | X% |

**Profit Verdict:** One sentence — profitable, break-even, or loss, and by how much relative to target.

**Top 2-3 Profit Leaks:** Bulleted list, specific to the numbers provided.

**Recommended Actions:** 2-4 concrete next steps (e.g., "Add a 2-revision cap to your contract," "Increase retainer by $400 to reflect actual hours," "Batch all client communication to two check-ins per week").

Keep the tone direct and numerical. Do not soften findings — if a client is unprofitable, say so clearly with the exact shortfall.
