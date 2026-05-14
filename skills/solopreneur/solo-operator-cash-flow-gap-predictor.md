---
name: solo-operator-cash-flow-gap-predictor
description: >
  Projects week-by-week cash inflows and outflows to identify liquidity gaps before they hit your bank account. Use when someone says they're worried about making payroll or covering bills, asks whether they can afford an upcoming expense, wants to know if their invoices will cover next month's costs, mentions clients who pay late, or needs to see where their cash will be tight over the next 4–12 weeks.
category: solopreneur
tags: [cash-flow, invoicing, financial-planning, solopreneur, liquidity]
author: community
---

# Solo Operator Cash Flow Gap Predictor

This skill builds a week-by-week cash flow projection using current invoices, payment terms, and known expenses to surface upcoming shortfalls before they become emergencies.

## Data Gathering

Ask the user for the following if not already provided. Collect in one grouped ask, not one question at a time:

1. **Current cash balance** — what's in the operating account right now
2. **Outstanding invoices** — client name, amount, invoice date, payment terms (Net 15/30/60), and whether payment is on time, late, or uncertain
3. **Expected new income** — any projects closing soon, retainer renewals, or deposits expected and rough timing
4. **Fixed expenses** — recurring costs with due dates (rent/office, subscriptions, insurance, loan payments, contractor retainers)
5. **Variable or one-time expenses** — estimated amounts and when they'll hit (taxes, equipment, travel, estimated quarterly payments)
6. **Projection window** — default to 12 weeks if not specified

## Projection Logic

1. **Build a weekly ledger**: Place each inflow and outflow in the week it is realistically expected to clear — not when invoiced or when due on paper. Apply a buffer:
   - Net 30 clients with no late history: assume payment in week 4–5
   - Net 30 clients with late history: assume week 6–7
   - Net 60: assume week 8–9
   - "On receipt" or deposits: assume week 1–2

2. **Calculate running balance**: Start from current cash balance. Add inflows and subtract outflows week by week to produce an end-of-week balance for each week.

3. **Flag gap weeks**: Any week where the running balance drops below a safe floor (default: 1 month of fixed expenses, or a threshold the user specifies) is a **gap week**. Any week where balance goes negative is a **critical gap**.

4. **Identify root causes per gap**: Late-paying client? Large expense clustering? Income timing mismatch? Name the specific cause for each flagged week.

5. **Generate options**: For each gap, offer 2–3 concrete actions the operator can take now (e.g., send early payment reminder, defer a discretionary expense, draw on a line of credit, request a deposit on the next project).

## Output Format

Produce the following in order:

**1. Cash Position Summary**
- Current balance
- Total inflows expected over projection window
- Total outflows expected over projection window
- Projected end balance

**2. Week-by-Week Table**
Markdown table with columns: Week | Starting Balance | Inflows | Outflows | Ending Balance | Status
Status values: ✅ Healthy | ⚠️ Watch | 🔴 Gap | 💀 Critical

**3. Gap Alert Section**
For each flagged week (⚠️ or worse), provide:
- Week number and date range
- Projected balance vs. safe floor
- Root cause (one sentence)
- 2–3 specific mitigation actions with timing (e.g., "Send payment reminder to [Client] this week to pull payment into Week 4")

**4. 30-Second Summary**
3–5 bullet points a busy operator can read in under a minute:
- Biggest risk and when it hits
- Easiest action to take today
- Whether the overall trajectory is improving or worsening

Keep the table tight and scannable. Flag assumptions clearly (e.g., "Assumed Net 30 client pays in week 5 based on typical pattern"). If data is missing, state what assumption was made rather than skipping the projection.
