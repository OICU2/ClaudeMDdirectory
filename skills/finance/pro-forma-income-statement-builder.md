---
name: pro-forma-income-statement-builder
description: >
  Builds detailed forward-looking pro forma income statements based on user-supplied growth rates,
  cost assumptions, and revenue drivers. Use when someone says "build me a pro forma," asks to
  "project our income statement," wants to "model out revenue and expenses," needs to "forecast
  financials for a business plan," or asks "what would our P&L look like if we grew X%."
category: finance
tags: [pro-forma, income-statement, financial-modeling, forecasting, P&L]
author: community
---

# Pro Forma Income Statement Builder

This skill generates structured, multi-period pro forma income statements by collecting growth assumptions, cost structure inputs, and revenue drivers from the user, then producing a formatted forward-looking P&L with clearly labeled line items.

## Workflow

1. **Gather baseline financials** — Ask for the most recent full-year actuals: total revenue, COGS, gross profit, operating expenses (broken out if possible), EBITDA, and net income. If the user has none, offer to start from scratch with estimated inputs.

2. **Collect growth assumptions** — Ask for:
   - Revenue growth rate per period (or revenue drivers: units × price, contracts × ACV, etc.)
   - Number of projection periods (months, quarters, or years)
   - Whether growth is flat, stepped, or variable by period

3. **Collect cost structure assumptions** — Ask for each major cost category:
   - COGS as % of revenue (or fixed amount with escalation rate)
   - Headcount-driven costs (salaries, benefits) with hiring plan if relevant
   - Fixed OpEx (rent, software, insurance) with annual escalation %
   - Variable OpEx (marketing, commissions) as % of revenue
   - D&A, interest expense, and tax rate if net income is needed

4. **Clarify edge cases** — Before building, confirm:
   - Should one-time items (fundraising costs, restructuring) be included?
   - Is there a capital raise or debt that affects interest expense?
   - Should the model show a summary view, detailed view, or both?

5. **Build the statement** — Populate each period column using the inputs. Calculate derived metrics automatically: gross margin %, EBITDA margin %, operating leverage indicators.

6. **Highlight key sensitivities** — After the table, note which 2–3 assumptions most heavily drive the outcome and offer to run an alternative scenario if the user changes them.

## Output Format

Produce a plain-text table (Markdown) with periods as columns and line items as rows, structured as follows:

```
| Line Item                  | Year 1      | Year 2      | Year 3      |
|----------------------------|-------------|-------------|-------------|
| Revenue                    | $X,XXX,XXX  | $X,XXX,XXX  | $X,XXX,XXX  |
| Revenue Growth %           | —           | XX%         | XX%         |
| Cost of Goods Sold         | $X,XXX,XXX  | $X,XXX,XXX  | $X,XXX,XXX  |
| Gross Profit               | $X,XXX,XXX  | $X,XXX,XXX  | $X,XXX,XXX  |
| Gross Margin %             | XX%         | XX%         | XX%         |
| Operating Expenses         |             |             |             |
|   Salaries & Benefits      | $XXX,XXX    | $XXX,XXX    | $XXX,XXX    |
|   Sales & Marketing        | $XXX,XXX    | $XXX,XXX    | $XXX,XXX    |
|   G&A                      | $XXX,XXX    | $XXX,XXX    | $XXX,XXX    |
|   Other OpEx               | $XXX,XXX    | $XXX,XXX    | $XXX,XXX    |
| Total OpEx                 | $X,XXX,XXX  | $X,XXX,XXX  | $X,XXX,XXX  |
| EBITDA                     | $X,XXX,XXX  | $X,XXX,XXX  | $X,XXX,XXX  |
| E
