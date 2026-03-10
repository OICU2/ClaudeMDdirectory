---
name: burn-rate-calculation
category: finance
description: >
  Calculates monthly cash burn rate and determines financial runway for startups and businesses. Use when someone says "how long is our runway," asks about cash burn, wants to know when they'll run out of money, needs to plan fundraising timing, or is analyzing monthly spending against reserves.
tags: [burn-rate, runway, cash-flow, startup-finance, budgeting]
author: community
---

# Burn Rate & Runway Calculator

This skill computes monthly cash burn and remaining runway from financial inputs, helping founders and finance teams make informed planning and fundraising decisions.

## Calculation Workflow

1. **Gather inputs** — Collect the following from the user:
   - Current cash balance (total reserves available)
   - Monthly revenue (if any; zero is valid)
   - Monthly expenses broken down by category (payroll, infrastructure, marketing, rent, etc.)
   - Start date of the period being analyzed

2. **Calculate gross burn** — Sum all monthly cash outflows regardless of revenue:
   ```
   Gross Burn = Total Monthly Expenses
   ```

3. **Calculate net burn** — Subtract revenue from gross burn:
   ```
   Net Burn = Gross Burn - Monthly Revenue
   ```
   If net burn is negative, the company is cash-flow positive; flag this clearly.

4. **Calculate runway** — Divide current cash by net burn:
   ```
   Runway (months) = Current Cash Balance / Net Burn
   ```
   Convert to a calendar date by adding runway months to today's date.

5. **Identify burn drivers** — Rank expense categories by size. Flag any category exceeding 40% of gross burn as a concentration risk.

6. **Apply scenario modeling** — Run three scenarios automatically:
   - **Base case**: current burn rate unchanged
   - **Optimistic**: 15% burn reduction (identify top 2 levers to achieve it)
   - **Conservative**: 20% burn increase (e.g., hiring, unexpected costs)

7. **Fundraising timing** — Recommend starting a fundraise when runway drops below 9 months. Calculate the date at which that threshold is hit under each scenario.

8. **Flag missing data** — If the user has not provided complete expense detail, explicitly list what is missing before proceeding with estimates.

## Output Format

Produce a structured report with the following sections:

**Summary Block** (3–4 lines)
- Gross burn: $X,XXX/month
- Net burn: $X,XXX/month
- Current runway: X.X months (target date: Month YYYY)
- Status: [Cash-flow positive / Burning cash / Break-even]

**Expense Breakdown Table**
| Category | Monthly Cost | % of Gross Burn |
|----------|-------------|-----------------|
| Payroll  | $XX,XXX     | XX%             |
| ...      | ...         | ...             |
| **Total**| **$XX,XXX** | **100%**        |

**Scenario Runway Table**
| Scenario     | Monthly Burn | Runway  | Cash-Out Date |
|--------------|-------------|---------|---------------|
| Base Case    | $XX,XXX     | XX mo   | Mon YYYY      |
| Optimistic   | $XX,XXX     | XX mo   | Mon YYYY      |
| Conservative | $XX,XXX     | XX mo   | Mon YYYY      |

**Key Insights** (bullet list, max 5 items)
- Largest burn driver and % of total
- Fundraise-trigger date under base case
- Top 2 specific cost levers for optimistic scenario
- Any concentration risks or anomalies

**Recommended Next Steps** (numbered, max 3 actions)
Concrete, prioritized actions based on the runway result.

Keep the full output under 400 words excluding tables. Use plain language; avoid jargon unless the user has used it first.