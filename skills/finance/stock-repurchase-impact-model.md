---
name: stock-repurchase-impact-model
description: >
  Models the financial impact of share buyback programs on earnings per share, cash reserves, and equity balance over a defined time horizon. Use when someone asks about buyback program analysis, wants to model share repurchase effects, needs to understand EPS accretion from buybacks, is evaluating the financial impact of a stock buyback plan, or wants to project how repurchases affect shareholder equity over time.
category: finance
tags: [buybacks, EPS, equity-analysis, share-repurchase, financial-modeling]
author: community
---

# Stock Repurchase Impact Model

This skill builds a structured, period-by-period financial model showing how a share buyback program affects earnings per share, cash reserves, and equity balance, and Claude will use it whenever someone needs to quantify or project the effects of a repurchase program.

## Modeling Workflow

### 1. Gather Inputs
Collect or prompt for the following parameters:
- **Current shares outstanding** (in millions)
- **Current stock price** (and whether to hold it fixed or apply a growth rate)
- **Total buyback budget** (dollar amount) or **annual repurchase pace** ($/year)
- **Program duration** (in years or quarters)
- **Current net income** (and whether to apply a growth rate)
- **Current cash and cash equivalents**
- **Current total shareholders' equity**
- **Financing assumption**: cash-funded, debt-funded, or mixed (capture interest rate if debt-funded)

If any inputs are missing, state assumptions explicitly before proceeding.

### 2. Build the Period Schedule
For each period (year or quarter):

1. **Shares repurchased** = Buyback spend for period ÷ Assumed repurchase price
2. **Ending shares outstanding** = Prior period shares − Shares repurchased
3. **Weighted-average shares** = Average of beginning and ending shares for the period
4. **EPS** = Net income (adjusted for after-tax interest cost if debt-funded) ÷ Weighted-average shares
5. **EPS accretion %** = (Current period EPS − Baseline EPS) ÷ Baseline EPS × 100
6. **Cash balance** = Prior cash − Cash deployed on buybacks (if cash-funded)
7. **Shareholders' equity** = Prior equity − Buyback spend (treasury stock increases reduce equity)

### 3. Apply Sensitivity Scenarios
Run at least three scenarios:
- **Base case**: Inputs as provided
- **Bull case**: 10% lower average repurchase price (more shares retired per dollar)
- **Bear case**: 10% higher average repurchase price (fewer shares retired per dollar)

### 4. Flag Key Risks and Observations
- Cash runway: periods remaining before cash reserves are depleted
- Equity erosion: flag if equity turns negative (technical insolvency risk)
- EPS accretion vs. opportunity cost: note foregone investment yield on cash deployed
- Debt coverage impact if debt-funded (note interest coverage ratio change)

## Output Format

Produce the following in order:

**1. Assumption Summary Table**
A compact table listing every input parameter and its assumed value.

**2. Period-by-Period Model Table**
Columns: Period | Buyback Spend | Shares Repurchased | Ending Shares | Weighted-Avg Shares | Net Income | EPS | EPS Accretion % | Cash Balance | Shareholders' Equity

Rows: one per year (or quarter if requested), plus a baseline (Period 0) row.

**3. Scenario Comparison Table**
Columns: Scenario | Total Shares Retired | Final EPS | Total EPS Accretion % | Final Cash Balance | Final Equity
Rows: Base / Bull / Bear

**4. Key Observations**
3–5 bullet points highlighting EPS accretion trajectory, cash depletion timeline, equity impact, and any risk flags.

**5. Limitations**
2–3 bullet points noting what the model does not capture (e.g., market price reaction, tax treatment nuances, dilution from stock-based compensation).

Use plain markdown tables. Round shares to two decimal places (millions), dollar figures to one decimal place (millions or billions as appropriate), and percentages to two decimal places.
