---
name: solopreneur-break-even-client-count-calculator
description: >
  Calculates the exact number of clients or units needed at current pricing to cover all fixed and variable costs each month. Use when someone says "how many clients do I need to break even," asks about covering their monthly costs, wants to know their minimum viable client count, wonders if their pricing covers their expenses, or needs to figure out how many sales to make before turning a profit.
category: solopreneur
tags: [break-even, pricing, cash-flow, solopreneur, revenue-planning]
author: community
---

# Break-Even Client Count Calculator

This skill calculates the exact number of clients or units a solopreneur needs to sell each month to cover all costs, and surfaces actionable insights when the number feels unreachable.

## Break-Even Calculation Workflow

**Step 1: Gather Fixed Monthly Costs**
Ask the user to list all costs that don't change regardless of client count:
- Rent, utilities, coworking space
- Software subscriptions (tools, CRM, hosting)
- Insurance, accountant, legal retainers
- Loan payments, equipment leases
- Any salary they pay themselves (if treating it as a fixed draw)

Sum these into **Total Fixed Costs (TFC)**.

**Step 2: Gather Variable Costs Per Client**
Ask for costs that increase with each client or unit sold:
- Contractor or subcontractor fees per project
- Payment processing fees (e.g., 2.9% + $0.30 per transaction)
- Materials, shipping, or delivery costs per unit
- Platform fees or commissions per sale

Sum these into **Variable Cost Per Client (VCC)**.

**Step 3: Confirm Pricing**
Ask for the price charged per client, project, or unit sold. If they have multiple offerings, calculate separately for each or use a weighted average. This is **Price Per Client (PPC)**.

**Step 4: Calculate Contribution Margin**
```
Contribution Margin = PPC - VCC
```
This is how much each client contributes toward covering fixed costs.

**Step 5: Calculate Break-Even Client Count**
```
Break-Even Count = TFC ÷ Contribution Margin
```
Round up to the nearest whole number — partial clients don't exist.

**Step 6: Sanity Check and Insight Layer**
- If break-even count seems high (>20 clients for a solo operator), flag it and ask about current capacity.
- Calculate what percentage of a typical working month (160 hours) would be consumed at break-even.
- If variable costs are near or above price, immediately flag a negative or zero contribution margin as a critical pricing problem.
- Calculate how much revenue above break-even is needed to hit a stated income goal, if provided.

**Step 7: Sensitivity Analysis**
Show what happens to break-even count if:
- Price increases by 10% and 20%
- Fixed costs are reduced by 10% and 20%
- A common variable cost changes (e.g., contractor rate shifts)

## Output Format

Produce a structured summary with the following sections:

**Your Break-Even Summary**
- Total Fixed Monthly Costs: $X
- Variable Cost Per Client: $X
- Price Per Client: $X
- Contribution Margin Per Client: $X
- **Break-Even Client Count: X clients/month**
- Break-Even Monthly Revenue: $X

**What This Means**
- 2–3 plain-language sentences interpreting the result (e.g., "At your current pricing, you need 8 clients per month before you earn a single dollar of profit.")

**Sensitivity Table**
A short table (3–4 rows) showing how break-even count shifts with price or cost changes.

| Scenario | Change | New Break-Even Count |
|---|---|---|
| Raise price 10% | $X → $Y | N clients |
| Raise price 20% | $X → $Y | N clients |
| Cut fixed costs 10% | $X → $Y | N clients |
| Cut fixed costs 20% | $X → $Y | N clients |

**Top Recommendation**
- One specific, prioritized action to reduce break-even count or validate whether it's achievable given capacity.

Keep the output skimmable. Use bold for all key numbers. Avoid jargon. If data is missing,
