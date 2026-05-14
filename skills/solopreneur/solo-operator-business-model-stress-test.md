---
name: solo-operator-business-model-stress-test
description: >
  Simulates the revenue and cash impact of losing the top one or two clients simultaneously, revealing how fragile the current income structure is. Use when someone says "I rely on a few big clients," asks about client concentration risk, wants to know if their business is too dependent on one client, wonders what happens if their biggest client leaves, or is trying to understand how stable their freelance or consulting income really is.
category: solopreneur
tags: [revenue-risk, client-concentration, cash-flow, freelance, consulting]
author: community
---

# Solo Operator Business Model Stress Test

This skill runs a structured financial stress test against a solo operator's client revenue mix to expose concentration risk and model the real cash impact of sudden client loss.

## Stress Test Workflow

**Step 1 — Gather Revenue Data**
Ask the user to list their current clients and the monthly or annual revenue each one generates. If they don't know exact numbers, have them estimate to the nearest $500. Also ask:
- Average monthly fixed expenses (rent, subscriptions, software, insurance)
- Average monthly variable expenses (contractors, tools, travel)
- Current cash reserve in months of operating expenses

**Step 2 — Calculate Concentration Score**
- Rank clients by revenue, highest to lowest
- Calculate each client's percentage of total revenue
- Flag any client representing more than 30% of revenue as a High Concentration Risk
- Flag any client representing more than 50% as a Critical Dependency

**Step 3 — Run the Stress Scenarios**

Scenario A — Lose Top Client:
- Remove the single highest-revenue client
- Recalculate monthly income
- Subtract total monthly expenses
- Determine monthly deficit or surplus
- Calculate how many months of cash reserves remain before insolvency

Scenario B — Lose Top Two Clients:
- Remove the two highest-revenue clients
- Repeat the same deficit/surplus and runway calculation

Scenario C — Lose Top Client with 30-Day Notice:
- Model the same loss as Scenario A but assume zero revenue from that client starting 30 days from now
- Factor in any deferred payments or invoices likely to clear before cutoff

**Step 4 — Identify the Break-Even Client Floor**
Calculate the minimum number of current clients needed to cover all expenses. Label this the "floor." If the floor equals or exceeds the total client count minus one, the business has no margin for client loss.

**Step 5 — Generate Recovery Timeline**
Based on the user's typical sales cycle (ask if unknown, default to 60 days), estimate how long it would take to replace lost revenue through new client acquisition at their average deal size.

## Output Format

Produce a structured report with these exact sections:

**Client Revenue Breakdown**
A ranked table: Client (use initials or generic labels if privacy matters), Monthly Revenue, % of Total Revenue, Risk Flag (none / high / critical)

**Stress Test Results**
Three labeled scenarios (A, B, C), each showing:
- Post-loss monthly revenue
- Monthly surplus or deficit (with a + or − prefix)
- Cash runway in months at current reserves

**Concentration Risk Summary**
2–3 sentences stating the current fragility level plainly. No softening. If one client leaving would create a deficit within 60 days, say that directly.

**Break-Even Floor**
Single line: "You need at least X of your current Y clients to cover expenses."

**Recovery Gap**
Estimated time to replace lost revenue based on sales cycle, and the number of new clients needed at average deal size.

**3 Immediate Actions**
Specific, prioritized steps the operator can take within 30 days to reduce concentration risk (e.g., raise rates with smaller clients to reduce dependency on the largest, begin outreach to a specific prospect tier, restructure a retainer to add a longer notice period).

Total output length: 400–600 words. Use plain language. No jargon. Present numbers in a table where possible.
