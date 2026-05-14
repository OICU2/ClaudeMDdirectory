---
name: solo-operator-revenue-scenario-stress-test
category: solopreneur
description: >
  Models the revenue and runway impact of losing one or more clients for solo operators and freelancers. Use when someone says "what if I lose my biggest client," asks about client concentration risk, wants to stress-test their income, is worried about a client leaving, or needs to know how long their money would last if revenue dropped. Suggests concrete mitigation actions based on the gap analysis.
tags: [revenue, risk, clients, runway, freelance]
author: community
---

# Solo Operator Revenue Scenario Stress Test

This skill models how losing one or more clients would impact a solo operator's monthly revenue and cash runway, then produces a prioritized action plan to reduce the risk.

## Stress Test Workflow

### Step 1: Gather Current Revenue Baseline
Ask the user for (or extract from context):
- List of active clients and monthly revenue from each
- Total monthly revenue
- Monthly personal/business expenses (fixed + variable)
- Current cash savings or runway buffer

If any of these are missing, ask for them directly before proceeding. Do not estimate silently.

### Step 2: Identify Concentration Risk
Calculate:
- Each client's share of total monthly revenue (as a percentage)
- Flag any client representing >30% of revenue as **high concentration risk**
- Flag any client representing >50% as **critical dependency**

### Step 3: Run Loss Scenarios
Model at minimum three scenarios:
1. **Lose the largest client** — revenue drop, new monthly total, months of runway remaining
2. **Lose the top two clients** — same calculations
3. **Lose all clients below a retention threshold** (e.g., clients on month-to-month or expiring contracts) — if the user can identify them

For each scenario, calculate:
- New monthly revenue
- Monthly shortfall (if expenses exceed revenue)
- Months of runway remaining using current savings
- Break-even revenue needed to return to stability

### Step 4: Identify Mitigation Actions
Based on the scenario results, generate a prioritized list of actions:
- If runway < 3 months in any scenario: flag as urgent, prioritize immediate revenue actions (outreach, rate increases, new offers)
- If one client >40% of revenue: recommend diversification targets and timeline
- If expenses are high relative to revenue floor: identify cuttable costs
- Suggest specific pipeline or client acquisition actions calibrated to the shortfall amount (e.g., "You need $2,400/month — that's 2 new clients at your average rate")

## Output Format

Produce a structured report with these sections:

**1. Current Revenue Snapshot**
- Table: Client | Monthly Revenue | % of Total
- Total monthly revenue and expenses
- Current runway (months)

**2. Concentration Risk Flags**
- Plain-language summary of which clients represent outsized risk and why

**3. Scenario Models**
- One subsection per scenario
- Each includes: revenue lost, new monthly total, monthly shortfall, months of runway remaining

**4. Mitigation Action Plan**
- Numbered list, ordered by urgency
- Each action includes: what to do, why, and a concrete first step
- Keep to 5–8 actions maximum

Use plain language. Avoid jargon. Flag the single most urgent action at the top of the action plan in bold. Total output should be scannable in under 2 minutes.
