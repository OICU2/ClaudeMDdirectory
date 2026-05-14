---
name: tax-rate-reconciliation-schedule
description: >
  Builds a structured tax rate reconciliation schedule that bridges the statutory federal tax rate to the company's effective tax rate by identifying and quantifying each reconciling item. Use when someone says "reconcile our tax rate," asks about "why our effective tax rate differs from statutory," or wants to "explain the gap between book tax rate and federal rate," needs to "prepare a tax rate reconciliation for the footnote," or is analyzing "permanent and temporary tax differences."
category: finance
tags: [tax, reconciliation, effective-tax-rate, financial-reporting, ASC-740]
author: community
---

# Tax Rate Reconciliation Schedule

This skill builds a line-by-line tax rate reconciliation that explains the difference between the statutory federal tax rate and the company's actual effective tax rate, suitable for financial statement footnotes or management reporting.

## Reconciliation Workflow

1. **Establish the baseline** — Confirm the statutory federal rate (21% for US C-corps) and pre-tax book income. Compute the expected tax expense at statutory rate.

2. **Gather reconciling items** — Collect data on the following categories:
   - Permanent differences: meals & entertainment, officer life insurance, goodwill impairment, non-deductible fines, tax-exempt income (municipal bond interest)
   - State and local income taxes (net of federal benefit)
   - Federal tax credits: R&D credit, foreign tax credit, FICA tip credit
   - Equity compensation (excess tax benefits or deficiencies)
   - Valuation allowance changes on deferred tax assets
   - Return-to-provision adjustments from prior year
   - Foreign rate differentials (if applicable)
   - Uncertain tax positions (ASC 740-10 reserves)
   - Other miscellaneous items

3. **Quantify each item in two forms** — Express every line item as both a dollar amount and a percentage of pre-tax book income so both columns reconcile.

4. **Compute effective tax rate** — Sum statutory rate plus/minus all reconciling percentages to arrive at effective tax rate. Verify: total tax expense ÷ pre-tax book income = effective tax rate.

5. **Validate** — Cross-check that the dollar column sums to total income tax expense per the income statement. Flag any unexplained residual variance above $10K or 0.1% for further investigation.

6. **Label favorable vs. unfavorable** — Mark each item as a rate decrease (benefit) or rate increase (expense) relative to statutory.

## Output Format

Produce a formatted table with the following columns:

| Reconciling Item | Dollar Amount ($) | % of Pre-Tax Income |
|---|---|---|
| Tax at statutory federal rate (21%) | $XXX,XXX | 21.0% |
| State and local taxes, net of federal benefit | $XX,XXX | X.X% |
| Permanent differences — meals & entertainment | $X,XXX | X.X% |
| R&D tax credits | $(XX,XXX) | (X.X%) |
| Valuation allowance change | $XX,XXX | X.X% |
| [Additional items as applicable] | ... | ... |
| **Effective income tax rate / total tax expense** | **$XXX,XXX** | **XX.X%** |

Below the table include:
- A 3–5 sentence narrative suitable for a financial statement footnote explaining the most significant drivers of the rate difference
- A flagged list of any items requiring additional documentation or audit support (uncertain tax positions, large valuation allowance movements, significant permanent differences)
- If data is incomplete, list exactly which inputs are needed before the schedule can be finalized
