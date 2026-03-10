---
name: financial-modeling
description: >
  Builds dynamic spreadsheet models that project business financials under various assumptions and scenarios. Use when someone wants to create a financial model, asks about projecting revenue or expenses, needs to build a DCF or valuation model, wants to forecast cash flow, or is trying to stress-test business assumptions. Supports three-statement models, scenario analysis, and unit economics breakdowns.
category: finance
tags: [financial-modeling, forecasting, spreadsheet, valuation, scenario-analysis]
author: community
---

# Financial Modeling Skill

This skill generates structured, formula-driven financial models with clearly labeled assumptions, dynamic projections, and scenario toggles — activated whenever someone needs to forecast, value, or stress-test a business financially.

## Modeling Workflow

1. **Gather inputs first** — Ask for: business type, time horizon (months/years), key revenue drivers (units, price, growth rate), known cost structure (COGS, opex, headcount), and any existing actuals to anchor from.

2. **Structure the model in layers:**
   - **Assumptions tab / section** — Every input lives here. Label each: `[INPUT]`. Never hardcode numbers inside formulas.
   - **Revenue build** — Break into components (e.g., Volume × Price, or Segments × Growth Rate). Show each driver explicitly.
   - **Cost build** — Separate fixed vs. variable costs. Tie variable costs to revenue drivers where possible.
   - **P&L summary** — Revenue → Gross Profit → EBITDA → Net Income. Include % margin for each line.
   - **Cash flow** — If requested, derive from net income + working capital changes + capex.
   - **Scenarios** — Build at minimum: Base, Bear (-20% revenue, +10% costs), Bull (+25% revenue, flat costs). Use a dropdown/toggle assumption that flows through the model.

3. **Formula discipline:**
   - Use relative/absolute references correctly (anchor assumption cells with `$`).
   - No circular references unless explicitly modeling revolver/interest with iteration enabled.
   - Date headers should drive time periods dynamically (e.g., `=EDATE(start,n)`).
   - Flag hardcoded overrides with a comment or color note.

4. **Sanity checks — always include:**
   - Gross margin % stays within industry-reasonable bounds (flag if <0% or >90% without explanation).
   - Cash balance never goes negative without flagging a funding gap.
   - Growth rates don't exceed 200% YoY without a note.

5. **Callouts** — After the model, provide 3–5 key observations: what drives the most sensitivity, where assumptions are weakest, and what metrics to watch.

## Output Format

Produce the model as one of the following based on context:

- **Markdown table format** — For quick projections in chat. Include an Assumptions block first, then Year 1–3 (or Month 1–12) P&L table with rows for each line item and columns per period. Include a Scenarios summary table at the end.
- **CSV-ready format** — If the user wants to paste into Excel/Sheets, output clean comma-separated rows with a header row and assumption block clearly separated.
- **Structured outline** — If building a full model architecture, output a tab-by-tab build plan with exact row labels, formula logic descriptions, and color-coding convention.

Every output must include:
- Labeled assumptions section (separated from projections)
- At least 3 projection periods
- Gross margin %, EBITDA margin % on every period
- A scenario comparison table (Base / Bear / Bull)
- A "Key Risks & Sensitivities" section (3–5 bullets)