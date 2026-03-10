---
name: cash-reserve-planning
description: >
  Analyzes business financials to determine appropriate cash reserve targets and maintenance strategies.
  Use when someone asks "how much cash should my business keep on hand," wants to build an emergency
  fund for their business, is worried about cash flow gaps, needs to figure out their operating
  reserve requirements, or wants to stress-test their liquidity position.
category: finance
tags: [cash-flow, liquidity, financial-planning, reserves, working-capital]
author: community
---

# Cash Reserve Planning

Calculates the right cash reserve level for a business and produces a concrete plan to reach and maintain it based on the company's expense structure, revenue volatility, and risk profile.

## Reserve Calculation Workflow

1. **Gather baseline financials**
   - Monthly fixed operating expenses (rent, payroll, insurance, subscriptions)
   - Monthly variable expenses (COGS, commissions, utilities)
   - Average monthly revenue for the last 6–12 months
   - Revenue volatility (how much does monthly revenue swing?)
   - Existing credit lines or financing available

2. **Classify business risk profile**
   - **Low risk**: Stable recurring revenue, long-term contracts, low seasonality → target 1–2 months expenses
   - **Medium risk**: Mixed revenue, some seasonality, occasional large receivables → target 2–4 months expenses
   - **High risk**: Project-based revenue, high seasonality, single customer concentration, or under 2 years old → target 4–6 months expenses

3. **Calculate the reserve target**
   - Base reserve = (Fixed monthly expenses) × (months per risk tier)
   - Volatility buffer = (Peak-to-trough revenue swing) × 0.5
   - Final target = Base reserve + Volatility buffer
   - Subtract available credit lines if they are reliable and unconditional

4. **Identify the current gap**
   - Current liquid cash − Final target = Surplus or deficit
   - Flag if cash in accounts is tied up in long-notice instruments

5. **Build the funding plan**
   - Determine monthly surplus available to build reserves
   - Calculate months to reach target at current surplus rate
   - Identify levers: reduce discretionary spend, accelerate receivables, pause distributions, liquidate idle assets
   - Set a 90-day milestone and a full-target milestone

6. **Define maintenance rules**
   - Set a floor trigger (e.g., 80% of target) that initiates a replenishment protocol
   - Define which expenses can be deferred if reserves are breached
   - Schedule a quarterly reserve review tied to financial close

## Output Format

Produce a structured reserve plan with these sections:

**Reserve Summary**
- Risk profile classification with one-line rationale
- Monthly expense baseline (fixed + variable)
- Calculated reserve target (show the math)
- Current reserve position and gap amount

**Funding Roadmap**
- Monthly surplus available for reserve building
- Timeline to reach 50% target / 100% target
- Top 2–3 specific actions to accelerate funding

**Maintenance Rules**
- Floor trigger amount and replenishment action
- Quarterly review checklist (3–5 bullet points)
- One-line policy on distributions when reserves are below target

Keep the output to one page equivalent. Use plain numbers, not ranges, unless data is insufficient. Flag any assumptions made explicitly.
