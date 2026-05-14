---
name: solo-operator-late-payment-impact-calculator
description: >
  Calculates the real cash flow cost of client late payments and produces a ready-to-use late-fee and follow-up policy. Use when someone says their clients pay late, asks how much late payments are actually costing them, wants to create an invoice follow-up system, wonders whether to charge late fees, or needs a payment policy for their freelance or solo business.
category: solopreneur
tags: [cash-flow, invoicing, late-payments, freelance, policy]
author: community
---

# Late Payment Impact Calculator & Policy Generator

This skill quantifies the compounding financial damage of client late payments and generates a tiered late-fee structure and follow-up sequence the solo operator can implement immediately.

## Workflow

### Step 1 — Gather Payment Data
Ask the user for the following (prompt for each if not provided):
- Average invoice amount
- Average number of invoices per month
- Average days late clients pay (e.g., Net 30 but paid at day 52 = 22 days late)
- Current annual revenue (or monthly)
- Their cost of capital or what they'd do with cash on hand (if unknown, use 8% annual as default)
- Whether they currently charge late fees (yes/no)

### Step 2 — Calculate Cash Flow Impact
Run these calculations and show your work:

1. **Monthly revenue tied up in late payments**
   `(Average invoice amount × invoices per month) × (avg days late ÷ 30)`

2. **Opportunity cost per year**
   `Monthly revenue tied up × cost of capital rate`

3. **Administrative drag estimate**
   Assume 45 minutes of follow-up time per late invoice. Multiply by their effective hourly rate (derive from annual revenue ÷ 2,000 hours). Multiply by number of late invoices per month × 12.

4. **Total annual late-payment cost**
   Sum of opportunity cost + administrative drag cost.

5. **Worst-case scenario**
   Show impact if 30% of invoices go 60+ days late (cash flow gap in dollars).

### Step 3 — Build the Tiered Late-Fee Policy
Generate a three-tier policy:

| Tier | Trigger | Action |
|------|---------|--------|
| 1 | 1–7 days past due | Friendly reminder email (template included) |
| 2 | 8–21 days past due | Late fee applied: 1.5% of invoice total + firm follow-up call script |
| 3 | 22+ days past due | 3% cumulative late fee + escalation notice + pause on new work language |

- State the fee as both a percentage and a dollar amount using their average invoice size.
- Flag any state-specific note: "Check your state's maximum allowable late fee before implementing."

### Step 4 — Draft the Policy Language
Write two ready-to-use text blocks:

1. **Invoice footer clause** (1–2 sentences): states payment terms and late fee trigger.
2. **Contract/SOW clause** (3–5 sentences): formal language covering due date, late fee schedule, right to pause services, and collections escalation.

### Step 5 — Follow-Up Email Templates
Provide three short, copy-paste email templates:
- **Day 1 reminder**: warm, assumes oversight
- **Day 10 notice**: direct, states fee has been applied, gives payment link/instructions
- **Day 25 escalation**: firm, references contract clause, states next step (collections or work pause)

Each template: subject line + body under 150 words.

## Output Format

Produce a single structured document with these clearly labeled sections:

1. **Your Late Payment Cost Summary** — bullet list of all calculated figures with plain-English interpretation
2. **What This Means For You** — 2–3 sentence narrative translating numbers into business impact
3. **Your Tiered Late-Fee Policy** — the table plus fee amounts in dollars
4. **Policy Language** — invoice footer clause and contract clause as formatted text blocks (ready to copy)
5. **Follow-Up Email Templates** — all three emails with subject lines, clearly labeled Day 1 / Day 10 / Day 25
6. **Quick-Start Checklist** — 5-item action list to implement this week (e.g., update invoice template
