---
name: dividend-recapitalization-impact-model
description: >
  Models the balance sheet, leverage ratio, and coverage metric impact of a dividend recapitalization across multiple debt sizing and interest rate scenarios. Use when someone asks about modeling a dividend recap, wants to analyze the impact of a leveraged dividend on a company's balance sheet, needs to evaluate debt capacity for a recapitalization, or is stress-testing coverage ratios under new debt loads. Also activates when someone wants to compare multiple recap scenarios side by side.
category: finance
tags: [dividend-recapitalization, leveraged-finance, balance-sheet-modeling, debt-capacity, coverage-ratios]
author: community
---

# Dividend Recapitalization Impact Model

This skill builds a structured scenario analysis model showing how a dividend recapitalization affects a company's balance sheet, leverage ratios, and interest/debt service coverage across a matrix of debt sizes and interest rates.

## Modeling Workflow

### Step 1: Gather Base Company Financials
Collect or prompt the user for the following pre-recap inputs:
- Revenue, EBITDA, EBIT, and net income (LTM or projected)
- Existing debt (by tranche if available) and cash on balance sheet
- Total equity value or book equity
- Current interest expense and debt service obligations
- Tax rate

### Step 2: Define Scenario Parameters
Build a matrix with:
- **Debt sizing scenarios**: At minimum three tranches (e.g., 3.0x, 4.0x, 5.0x EBITDA or specific dollar amounts)
- **Interest rate scenarios**: At minimum three rates (e.g., SOFR + 300bps, SOFR + 400bps, SOFR + 500bps, or fixed equivalents)
- If the user provides specific values, use those; otherwise default to the ranges above

### Step 3: Calculate Post-Recap Balance Sheet for Each Scenario
For each debt size / rate combination compute:
- **New total debt** = existing debt + new recap debt
- **Net debt** = total debt − cash (adjust cash if dividend is paid from cash + new debt)
- **Total equity** = pre-recap equity − dividend paid
- **Total capitalization** = new total debt + adjusted equity

### Step 4: Calculate Leverage Ratios
For each scenario:
- **Gross leverage**: Total Debt / EBITDA
- **Net leverage**: Net Debt / EBITDA
- **Debt / Total Cap**: Total Debt / (Total Debt + Equity)
- Flag any scenario exceeding 6.0x net leverage as high-risk

### Step 5: Calculate Coverage Metrics
For each scenario, using new interest expense = new debt × applicable rate:
- **Interest Coverage Ratio (ICR)**: EBITDA / Total Interest Expense
- **Fixed Charge Coverage Ratio (FCCR)**: (EBITDA − Capex) / (Interest + Required Amortization), if capex and amortization are provided
- **Debt Service Coverage Ratio (DSCR)**: EBITDA / (Interest + Principal) if principal schedule is known
- Flag any scenario with ICR below 2.0x as potentially covenant-breaching

### Step 6: Summarize Dividend Capacity
- Compute implied dividend size for each debt scenario = new debt raised − transaction fees (assume 2% of new debt unless specified)
- Show dividend as % of current equity value and $ per share if share count is provided

### Step 7: Sensitivity Commentary
- Identify the scenario matrix cells where leverage exceeds typical sponsor thresholds (5.0x–6.0x) and coverage falls below lender minimums (2.0x ICR)
- Note which combinations are likely executable vs. likely to face market resistance

## Output Format

Produce the following in order:

**1. Base Case Summary Table**
A single row showing pre-recap: Revenue, EBITDA, existing debt, net debt, leverage, and ICR.

**2. Scenario Matrix — Leverage Ratios**
A formatted table with debt sizing scenarios as rows and interest rate scenarios as columns, showing Gross Leverage / Net Leverage for each cell.

**3. Scenario Matrix — Coverage Ratios**
Same row/column structure showing ICR (and FCCR/DSCR if data available) for each cell. Use visual indicators (✓ for
