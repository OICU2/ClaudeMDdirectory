---
name: financial-restatement-impact-summary
description: >
  Documents the line-item impact of a prior-period restatement across affected financial statements and generates the required disclosure narrative. Use when someone says "we need to restate prior financials," asks about how to document a restatement, or wants to summarize the impact of an accounting correction. Also activates when someone mentions restated earnings, prior-period adjustments, or needs to prepare restatement disclosures for auditors or regulators.
category: finance
tags: [restatement, prior-period-adjustment, financial-disclosure, accounting, SEC]
author: community
---

# Financial Restatement Impact Summary

This skill produces a structured, line-item restatement impact table across all affected financial statements and drafts the required disclosure narrative suitable for footnotes, audit documentation, or regulatory filings.

## Restatement Documentation Workflow

1. **Identify the restatement scope**
   - Confirm which fiscal periods are affected (quarters, annual periods, or both)
   - Identify the root cause: error type (mathematical, GAAP misapplication, fraud correction, classification error), discovery date, and materiality determination
   - Note which financial statements are impacted: Income Statement, Balance Sheet, Statement of Cash Flows, Statement of Equity

2. **Gather line-item data**
   - For each affected period, collect the originally reported figures and the corrected figures for every impacted line item
   - Capture the dollar variance (corrected minus originally reported) and the percentage change
   - Flag items where the restatement crosses from one statement to another (e.g., a revenue correction that also affects retained earnings and deferred revenue on the balance sheet)

3. **Build the impact table**
   - Organize by financial statement, then by line item within each statement
   - Include columns: Line Item | Originally Reported | As Restated | Change ($) | Change (%)
   - Add a subtotal row for each statement showing net income/total assets/operating cash flow impact as applicable
   - Highlight any tax effect adjustments separately

4. **Trace the equity rollforward**
   - Show the cumulative effect on beginning retained earnings for the earliest period presented
   - Document the period-by-period retained earnings bridge: Opening Balance → Restatement Adjustment → Closing Balance

5. **Draft the disclosure narrative**
   - Open with a plain-language description of the nature and cause of the error
   - State when the error was discovered and by whom
   - Confirm the restatement is presented in accordance with ASC 250-10 (or IFRS IAS 8 if applicable)
   - Describe the periods restated and the method of correction
   - Quantify the impact on key metrics (net income, EPS, total assets, equity)
   - Include a statement on internal control implications if the restatement triggers a material weakness assessment

6. **Apply materiality and comparative period rules**
   - If the error is immaterial to any individual period but material in aggregate, note the SAB 99/108 analysis
   - Confirm all comparative period columns in financial statements have been labeled "As Restated"
   - Flag any covenant violations or debt agreement triggers that may result from restated figures

## Output Format

Produce the following three sections in order:

**Section 1 — Restatement Impact Tables**
- One table per affected financial statement
- Columns: Line Item | Originally Reported ($) | As Restated ($) | Change ($) | Change (%)
- Bold the net income, total assets, total equity, and net cash flow rows
- Add a footer row noting the tax rate applied to pre-tax adjustments

**Section 2 — Retained Earnings Bridge**
- A single table showing: Period | Beginning RE (As Reported) | Restatement Adjustment | Beginning RE (As Restated) | Ending RE (As Restated)
- One row per restated period

**Section 3 — Disclosure Narrative**
- 3–6 paragraphs in formal financial reporting language
- Paragraph 1: Nature and cause of the error
- Paragraph 2: Periods affected and method of correction, citing ASC 250-10 or IAS 8
- Paragraph 3: Quantified impact summary (net income, EPS, equity)
- Paragraph 4 (if applicable): Internal control and material weakness implications
- Paragraph 5 (if applicable): Debt covenant or regulatory notification considerations
-
