---
name: solopreneur-project-to-revenue-forecast-mapper
description: >
  Converts a pipeline of active and prospective client projects into a month-by-month revenue forecast weighted by probability and expected close or delivery dates. Use when someone says "forecast my revenue," asks "what will I make over the next few months," wants to "map my pipeline to cash flow," needs to "project income from my client list," or is trying to "plan around expected project revenue."
category: solopreneur
tags: [revenue-forecasting, pipeline-management, cash-flow, freelance, client-projects]
author: community
---

# Solopreneur Project-to-Revenue Forecast Mapper

This skill takes a list of active and prospective client projects with values, probability estimates, and expected dates, then produces a weighted month-by-month revenue forecast so the solopreneur can plan finances and capacity.

## Workflow

### Step 1 — Collect Project Data
Ask the user to provide, for each project:
- **Project/client name**
- **Total project value** (or expected invoice amount)
- **Expected close or payment date** (month and year is sufficient)
- **Probability of closing or completing** (as a percentage; suggest defaults: active/contracted = 90–100%, proposal sent = 50–70%, early conversation = 20–40%)
- **Payment structure** (lump sum, milestone-based, or monthly retainer)

If the user provides a rough list without all fields, prompt only for the missing critical fields (value, date, probability). Do not ask for everything upfront if partial data is already given.

### Step 2 — Normalize and Distribute Revenue
For each project:
1. Calculate **weighted value** = Total Value × (Probability / 100)
2. If lump sum: assign full weighted value to the expected payment month
3. If milestone-based: distribute weighted value across milestone months as described by the user (or split evenly if unspecified)
4. If retainer: distribute monthly amount across each month of the engagement period

### Step 3 — Aggregate by Month
- Sum all weighted values landing in each calendar month
- Cover a rolling 6-month window by default (or longer if the user's projects extend further)
- Flag months where confirmed (≥90% probability) revenue falls below a threshold the user cares about (ask if not stated, default to $0 as a gap alert)

### Step 4 — Identify Risks and Gaps
- Highlight months with low confirmed revenue vs. high speculative revenue
- Flag any single project that represents >50% of a month's forecast (concentration risk)
- Note months with no projects expected (pipeline gap)

### Step 5 — Surface Recommendations
- If a month looks thin, suggest the user identify projects to accelerate or new leads to pursue
- If a month is overloaded, note potential capacity or invoicing timing conflicts
- Recommend converting high-probability prospects to contracts to lock in revenue

## Output Format

Produce the following sections in order:

**1. Project Summary Table**
A markdown table with columns: Project Name | Value | Probability | Weighted Value | Payment Month(s) | Type

**2. Month-by-Month Forecast Table**
A markdown table with columns: Month | Confirmed Revenue (≥90%) | Weighted Pipeline Revenue | Total Weighted Forecast | Notes

**3. Forecast Narrative (3–6 bullet points)**
- Overall 6-month weighted total
- Strongest and weakest months
- Concentration risks
- Pipeline gaps
- One prioritized action to improve the forecast

**4. Assumptions & Caveats**
A brief 2–4 line note on any assumptions made (e.g., probabilities assigned by Claude, payment timing estimated), so the user knows what to verify.

Keep tables clean and scannable. Use plain numbers formatted with commas and a currency symbol. Do not pad with filler commentary.
