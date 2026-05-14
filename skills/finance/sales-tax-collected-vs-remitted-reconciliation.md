---
name: sales-tax-collected-vs-remitted-reconciliation
description: >
  Reconciles sales tax collected from customers against amounts remitted to tax authorities to identify timing gaps, variances, or compliance issues. Use when someone says "our sales tax books don't match," asks about reconciling tax collected vs. paid, wants to find discrepancies in sales tax filings, needs to explain why tax liabilities have a balance, or is preparing for a sales tax audit. Produces a structured variance analysis with actionable explanations.
category: finance
tags: [sales-tax, reconciliation, tax-compliance, accounts-payable, audit-prep]
author: community
---

# Sales Tax Collected vs. Remitted Reconciliation

This skill walks through a systematic reconciliation of sales tax collected from customers against amounts remitted to tax authorities, surfacing timing differences, under/over-remittances, and filing gaps.

## Reconciliation Workflow

### 1. Gather Source Data
- Pull total sales tax collected by jurisdiction for the period (from POS, ERP, or invoicing system)
- Pull total sales tax remitted by jurisdiction (from bank records, tax returns filed, or payment confirmations)
- Identify the reporting period and filing frequency (monthly, quarterly, annual) for each jurisdiction

### 2. Build the Comparison Table
For each jurisdiction, record:
- **Tax Collected**: Sum of sales tax billed to customers on invoices/receipts
- **Tax Remitted**: Sum of payments sent to the tax authority (match to returns filed)
- **Gross Variance**: Collected minus Remitted
- **Filing Period(s) Covered**: Which return periods are included

### 3. Classify Each Variance
Assign one of these root causes to each non-zero variance:
- **Timing Gap**: Tax collected in period X but remitted in period Y due to filing schedule — expected and normal
- **Accrual Mismatch**: Tax accrued but not yet collected (credit sales), or collected but not yet accrued
- **Exempt Sales Error**: Tax collected on exempt transactions, or exempt sales incorrectly taxed
- **Rate Error**: Wrong tax rate applied at point of sale
- **Nexus Gap**: Sales in a jurisdiction where no return was filed
- **Refunds/Credits**: Tax refunded to customers but not yet claimed back from the authority
- **Under-Remittance**: Return filed but payment short or missing
- **Rounding/Calculation Error**: System-level rounding differences across high transaction volumes

### 4. Quantify Open Liability
- Sum all variances classified as Under-Remittance, Nexus Gap, or Rate Error — these represent potential tax liability
- Flag any jurisdictions with no remittance on record where collections occurred
- Note interest/penalty exposure if remittance is overdue (reference jurisdiction-specific deadlines)

### 5. Resolve Timing Items
- Match timing gaps to the correct future filing period
- Confirm the liability account balance on the balance sheet equals the sum of all unremitted collected tax
- If balance sheet liability ≠ unremitted tax, flag as a GL reconciling item requiring journal entry review

### 6. Action Items
For each open variance, assign:
- Responsible party
- Required action (file amended return, issue refund, post journal entry, etc.)
- Due date based on jurisdiction filing deadline

## Output Format

Produce the following sections in order:

**1. Reconciliation Summary Table**
Markdown table with columns: Jurisdiction | Period | Tax Collected | Tax Remitted | Variance | Variance Type

**2. Open Liability Schedule**
Bullet list of jurisdictions with unresolved variances, the dollar amount at risk, and the reason.

**3. Balance Sheet Tie-Out**
One paragraph confirming whether the GL sales tax payable account balance matches total unremitted collections, or describing the difference.

**4. Action Item List**
Numbered list: Action | Owner | Deadline | Jurisdiction

**5. Red Flags**
Bulleted list of any items requiring urgent attention (missed filings, nexus exposure, audit risk triggers). If none, state "No critical issues identified."

Keep the output factual and numerical. Do not speculate on penalties without jurisdiction-specific data. If data is incomplete, call out exactly what is missing before proceeding.
