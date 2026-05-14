---
name: solo-operator-income-replacement-runway-calculator
description: >
  Calculates how many months a solopreneur's business reserves can cover personal living expenses if all client revenue stopped today. Use when someone asks "how long could I survive if I lost all my clients," wants to know their financial runway, is worried about their safety net as a freelancer, wonders if they have enough savings to weather a dry spell, or says they need to figure out their emergency buffer as a solo business owner.
category: solopreneur
tags: [runway, cash-reserves, financial-safety-net, freelance, solopreneur]
author: community
---

# Solo Operator Income Replacement Runway Calculator

Computes a solopreneur's financial runway in months by comparing liquid business reserves against total personal living expenses, giving a clear, actionable safety-net number.

## Calculation Workflow

1. **Gather liquid business reserves**
   - Ask for total cash in business checking and savings accounts
   - Ask for any personal emergency fund they consider accessible
   - Exclude receivables, equipment value, or retirement accounts unless the person explicitly wants to include them
   - If they give a range, use the conservative (lower) figure

2. **Identify total monthly personal burn rate**
   - Ask for fixed personal expenses: rent/mortgage, insurance premiums, loan minimums, subscriptions
   - Ask for variable personal expenses: groceries, utilities, transportation, healthcare out-of-pocket
   - Add a 10% buffer to the total for forgotten or irregular expenses
   - Do NOT include business expenses — the scenario is zero revenue, so business operations wind down

3. **Account for taxes and self-employment obligations**
   - Ask whether they have any upcoming estimated tax payments due within 12 months
   - Subtract that tax liability from total reserves before calculating runway
   - If unknown, apply a 25% reserve haircut as a proxy for tax obligations

4. **Calculate runway**
   - Formula: `Runway (months) = (Adjusted Reserves) ÷ (Monthly Personal Burn × 1.10)`
   - Round down to the nearest half-month — never round up in survival scenarios

5. **Assess the result against benchmarks**
   - Under 3 months: Critical — flag as urgent, suggest immediate action steps
   - 3–6 months: Fragile — functional but vulnerable, recommend a reserve-building plan
   - 6–12 months: Stable — solid buffer for most solopreneurs
   - 12+ months: Strong — room to take calculated risks or invest in growth

6. **Identify quick reserve levers**
   - If runway is under 6 months, suggest: cutting one discretionary personal expense, converting a receivable to cash faster, or adding one retainer client
   - Quantify the impact: "Cutting $X/month adds Y weeks to your runway"

## Output Format

Produce a concise report with these exact sections:

**Runway Summary**
- Liquid reserves (after tax haircut): $X
- Monthly personal burn (with buffer): $X/month
- **Financial Runway: X.X months**
- Safety-net status: [Critical / Fragile / Stable / Strong]

**What This Means**
Two to three plain-language sentences interpreting the number — not generic advice, but specific to the numbers provided.

**Your Biggest Lever Right Now**
One to two specific, quantified actions the person can take immediately to extend their runway, based on their actual inputs.

**To Improve This Estimate**
A short bulleted list (max 4 items) of missing data points that would make the calculation more accurate (e.g., "Exact quarterly tax liability," "Outstanding receivables timeline").

Keep the full output under 350 words. Use dollar amounts and month counts throughout — no vague language.
