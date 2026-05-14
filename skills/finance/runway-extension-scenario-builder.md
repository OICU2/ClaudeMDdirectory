---
name: runway-extension-scenario-builder
description: >
  Builds side-by-side financial scenarios showing how cost cuts or revenue changes shift cash runway from today's date. Use when someone says "how long will our money last if we cut X," asks about extending runway, wants to model the impact of layoffs or price increases on burn rate, or needs to compare survival scenarios before a fundraise.
category: finance
tags: [runway, scenarios, burn-rate, cash-flow, startups]
author: community
---

# Runway Extension Scenario Builder

This skill generates a structured, side-by-side scenario comparison showing how specific financial decisions extend or shorten cash runway from the current date, giving founders and finance leads a clear view of tradeoffs before acting.

## Workflow

1. **Collect baseline inputs** — Ask for: current cash on hand, monthly burn rate, and today's date (or use system date). If not provided, prompt for each before proceeding.

2. **Identify the decisions to model** — Extract 2–4 specific levers the user wants to test (e.g., cutting headcount by 3 people, reducing SaaS spend by $8K/month, closing a $20K MRR deal, raising prices 15%). If the user gives only one, suggest a logical contrast scenario (e.g., "do nothing" vs. the proposed change).

3. **Calculate baseline runway** — Divide current cash by current monthly burn. Anchor the end date to today's date plus that number of months.

4. **Model each scenario** — For each lever:
   - Adjust monthly burn or revenue to get a new net burn figure
   - Recalculate runway in months and as a hard calendar date
   - Flag one-time costs or delays before the change takes effect (e.g., severance, migration time)
   - Note if any scenario crosses a critical threshold (e.g., runway extends past 18 months, or drops below 6 months)

5. **Highlight the delta** — For each scenario, state explicitly how many additional days/months of runway the decision buys (or costs) compared to the baseline.

6. **Surface decision context** — Add one line per scenario noting what milestone or event the runway endpoint aligns with (e.g., "reaches Series A target month," "expires before planned product launch").

## Output Format

Produce a markdown table with one column per scenario (including baseline) and these rows:
- Monthly Burn
- Monthly Revenue / Inflow (if applicable)
- Net Burn
- Cash on Hand
- Runway (months)
- Runway End Date
- Delta vs. Baseline
- Key Assumption

Follow the table with a **3–5 bullet summary** highlighting: the highest-impact lever, any scenario that crosses a meaningful threshold, and the recommended next question the user should answer (e.g., "Can the sales close happen before month 4?").

Keep all numbers in the same currency unit the user provides. Do not round runway to the nearest month — show one decimal place (e.g., 14.3 months).
