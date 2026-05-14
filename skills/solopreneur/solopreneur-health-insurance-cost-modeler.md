---
name: solopreneur-health-insurance-cost-modeler
description: >
  Models monthly and annual health insurance cost scenarios for solo operators comparing coverage options. Use when someone asks about health insurance costs as a freelancer or self-employed person, wants to compare marketplace plans versus HSA options, is trying to figure out what health coverage will actually cost them as a solopreneur, or needs help choosing between professional association plans and ACA marketplace coverage.
category: solopreneur
tags: [health-insurance, cost-modeling, HSA, marketplace-plans, solopreneur-benefits]
author: community
---

# Solopreneur Health Insurance Cost Modeler

This skill builds side-by-side cost scenarios for solo operators evaluating marketplace plans, HSA-eligible options, and professional association coverage so they can make an informed financial decision.

## Cost Modeling Workflow

1. **Gather inputs first** — Ask for: estimated annual income, age, state of residence, current health usage (low/medium/high), whether they want HSA eligibility, and any known professional associations they belong to (NASE, Freelancers Union, chamber of commerce, trade groups, etc.).

2. **Define three standard scenarios** to model unless the user specifies otherwise:
   - **Scenario A: ACA Marketplace Bronze/HDHP** — Low premium, high deductible, HSA-eligible
   - **Scenario B: ACA Marketplace Silver** — Moderate premium, moderate deductible, cost-sharing reductions if income qualifies
   - **Scenario C: Professional Association Plan** — Note that availability and pricing vary; flag this as requiring direct verification with the association

3. **Calculate total annual cost for each scenario** using this structure:
   - Monthly premium × 12
   - Estimated out-of-pocket based on usage tier (low = ~$500/yr, medium = ~$2,500/yr, high = ~$5,000–deductible max)
   - HSA tax savings (if applicable): multiply HSA contribution amount by marginal tax rate, show as a cost offset
   - Net annual cost = premiums + OOP − HSA tax savings

4. **Flag subsidy eligibility** — If income is between 100%–400% of the federal poverty level (or up to 600% under current enhanced subsidies), note that premium tax credits may significantly reduce Scenario A and B costs and direct them to healthcare.gov for actual quotes.

5. **Call out HSA math explicitly** — For any HDHP/HSA option, show: 2024 contribution limits ($4,150 single / $8,300 family), estimated tax savings at their bracket, and the long-term investment value note if they contribute beyond expected medical costs.

6. **Surface hidden costs** — Always include: dental/vision gap (most marketplace plans exclude these), short-term disability coverage gap common for solopreneurs, and whether the plan network includes their preferred providers.

7. **Make a conditional recommendation** — State which scenario wins under each usage assumption (low/medium/high) and at what income level subsidies change the calculus.

## Output Format

Produce a structured comparison with these sections:

**Your Inputs Summary** — Restate the key variables used in the model.

**Cost Comparison Table** — Markdown table with columns: Scenario | Monthly Premium (est.) | Annual Premium | Est. OOP | HSA Savings | Net Annual Cost

**HSA Deep Dive** (if any HSA-eligible plan is included) — 3–5 bullet points covering contribution limits, tax savings math, and investment angle.

**Subsidy Check** — One paragraph stating whether they likely qualify and what to do next.

**Recommendation by Usage Tier** — Bullet list: "If your health usage is LOW → Scenario X wins because..." for each tier.

**Next Steps** — Numbered list of 3–5 concrete actions (get quotes on healthcare.gov, contact specific association, open HSA account, etc.).

Use real 2024 benchmark premium ranges where possible ($300–$550/mo for individual Bronze, $450–$750/mo for Silver) and clearly label all estimates as illustrative until verified with actual quotes.
