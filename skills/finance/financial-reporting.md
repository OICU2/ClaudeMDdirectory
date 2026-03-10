---
name: financial-reporting
description: >
  Produces accurate, structured financial statements including profit and loss statements, balance sheets, and cash flow reports. Use when someone says "generate a financial report," asks to "create a P&L statement," wants to "summarize our financials," needs to "build a balance sheet," or requests to "show cash flow for the period." Formats raw financial data into professional, GAAP-aligned output ready for stakeholders or auditors.
category: finance
tags: [financial-statements, accounting, reporting, P&L, balance-sheet]
author: community
---

# Financial Reporting Skill

This skill transforms raw financial data into structured, accurate financial statements — P&L, balance sheet, and cash flow — and activates whenever someone needs to generate, review, or format financial reports for a business period.

## Reporting Workflow

1. **Identify the reporting period** — Confirm fiscal period (monthly, quarterly, annual), start and end dates, and reporting currency before proceeding.
2. **Classify input data** — Categorize all provided figures into revenue, COGS, operating expenses, assets, liabilities, equity, and cash movements. Flag any unclassified or ambiguous line items and ask for clarification.
3. **Build the P&L (Income Statement)**
   - Revenue → Gross Profit (Revenue − COGS) → Operating Income (Gross Profit − OpEx) → Net Income (Operating Income − Interest − Taxes)
   - Include margin percentages: gross margin, operating margin, net margin
4. **Build the Balance Sheet**
   - Assets: Current (cash, receivables, inventory) and Non-Current (PP&E, intangibles)
   - Liabilities: Current (payables, short-term debt) and Non-Current (long-term debt)
   - Equity: Retained earnings, paid-in capital, total equity
   - Verify: Total Assets = Total Liabilities + Total Equity; flag if it does not balance
5. **Build the Cash Flow Statement**
   - Operating activities (net income adjusted for non-cash items and working capital changes)
   - Investing activities (capital expenditures, asset sales)
   - Financing activities (debt, equity issuances, dividends)
   - Net change in cash = Operating + Investing + Financing
6. **Validate consistency** — Confirm net income ties from P&L to cash flow, and ending cash ties to the balance sheet cash line.
7. **Surface red flags** — Note negative gross margins, current ratio below 1.0, negative operating cash flow, or significant period-over-period variances above 20%.

## Output Format

Produce three clearly labeled sections in this order:

**1. Profit & Loss Statement**
- Table format: Line Item | Current Period | Prior Period | % Change
- Subtotals for Gross Profit, Operating Income, and Net Income
- Margin % column for each subtotal row

**2. Balance Sheet**
- Two-column table: Line Item | Amount
- Grouped sections: Current Assets, Non-Current Assets, Current Liabilities, Non-Current Liabilities, Equity
- Totals row at the bottom confirming the accounting equation

**3. Cash Flow Statement**
- Three-section table: Operating / Investing / Financing
- Net cash movement per section and a final "Net Change in Cash" row

**Summary Block** (after all three statements):
- 3–5 bullet points highlighting key metrics: revenue growth, net margin, current ratio, free cash flow, and any critical flags
- Keep bullets to one line each, numerical and specific

Use consistent number formatting: commas for thousands, two decimal places, parentheses for negative values. Label currency in the header of each statement.