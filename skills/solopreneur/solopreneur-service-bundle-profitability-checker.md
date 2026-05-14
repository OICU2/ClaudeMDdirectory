---
name: solopreneur-service-bundle-profitability-checker
description: >
  Analyzes service bundles to identify which combinations generate the highest profit margin relative to time invested. Use when someone says "I don't know which packages are worth offering," asks about which service bundles make the most money, wants to figure out if their pricing is worth the time, wonders which offers to cut or double down on, or needs to understand their true hourly rate per bundle.
category: solopreneur
tags: [pricing, profitability, service-bundles, time-tracking, revenue-optimization]
author: community
---

# Solopreneur Service Bundle Profitability Checker

Evaluates each service bundle a solopreneur offers by calculating true profit margin and effective hourly rate, then ranks bundles to surface which to scale, reprice, or drop.

## Analysis Workflow

### Step 1: Gather Bundle Data
For each service bundle, collect or prompt the user to provide:
- Bundle name and what's included
- Price charged per sale or per month
- Average number of hours to deliver (include prep, delivery, revisions, client communication)
- Hard costs per delivery (tools, contractors, software allocated to this bundle, transaction fees)
- Average number of sales per month

If the user hasn't tracked hours precisely, prompt them to estimate low/high and use the average.

### Step 2: Calculate Core Metrics Per Bundle

For each bundle, compute:

1. **Net Revenue per Sale** = Price − Hard Costs per Delivery
2. **Effective Hourly Rate** = Net Revenue per Sale ÷ Hours per Delivery
3. **Monthly Net Revenue** = Net Revenue per Sale × Monthly Sales Volume
4. **Monthly Hours Consumed** = Hours per Delivery × Monthly Sales Volume
5. **Profit Margin %** = (Net Revenue per Sale ÷ Price) × 100

### Step 3: Factor in Hidden Time Costs
Ask the user about overhead time not already counted:
- Sales calls or discovery sessions to close this bundle
- Marketing time specific to this offer
- Onboarding and offboarding per client

Add these to the hours per delivery before recalculating the effective hourly rate.

### Step 4: Score and Rank Each Bundle
Assign each bundle a profitability score using this weighted logic:
- **40%** — Effective hourly rate (higher = better)
- **30%** — Profit margin % (higher = better)
- **20%** — Monthly net revenue contribution (higher = better)
- **10%** — Scalability (can delivery time decrease with volume? yes = bonus points)

Rank all bundles from highest to lowest score.

### Step 5: Generate Strategic Recommendations
Based on rankings, categorize each bundle:
- **Scale** — Top quartile: increase marketing spend and volume
- **Reprice** — Good margin but low effective hourly rate: raise price or cut scope
- **Streamline** — High revenue but high hours: identify where time is being lost
- **Cut or Replace** — Bottom quartile: sunset the bundle or redesign it entirely

## Output Format

Produce a structured report with these sections:

**1. Bundle Scorecard Table**
Markdown table with columns: Bundle Name | Price | Hard Costs | Net Revenue/Sale | Hours/Delivery | Effective Hourly Rate | Margin % | Monthly Net Revenue | Score | Rank

**2. Top Performer Summary**
2–3 sentences naming the highest-ranked bundle and why it wins (hourly rate, margin, or volume).

**3. Biggest Profit Leak**
1–2 sentences identifying the lowest-ranked bundle and the specific metric dragging it down.

**4. Action List**
Bullet list of 3–5 concrete next actions, each tied to a specific bundle and a specific change (e.g., "Raise the Website Audit bundle from $500 to $750 — current margin is 80% and demand is steady").

**5. What-If Scenario (optional)**
If the user wants to test a change (raise price, cut scope, drop a bundle), recalculate the affected metrics and show the delta in monthly net revenue and effective hourly rate.

Keep the full output under 600 words unless a what-if scenario is requested. Use plain language — no jargon beyond standard business terms.
