---
name: indirect-tax-recovery-audit
description: >
  Analyzes purchase transaction records to identify unclaimed VAT, GST, or sales tax amounts eligible for recovery or credit. Use when someone says "find missed tax credits," asks about "recovering VAT on purchases," wants to "audit transactions for unclaimed GST," needs to "identify sales tax refund opportunities," or says "we may have left tax money on the table." Surfaces recoverable amounts, flags ineligible claims, and produces a structured recovery report.
category: finance
tags: [tax, VAT, GST, audit, recovery, accounts-payable]
author: community
---

# Indirect Tax Recovery Audit

This skill reviews purchase transaction data to detect VAT, GST, or sales tax amounts that qualify for recovery or input tax credit but were never claimed, producing a prioritized audit report with recoverable totals and filing guidance.

## Audit Workflow

### 1. Establish Tax Context
- Confirm jurisdiction(s) involved (EU VAT, UK VAT, Australian GST, Canadian GST/HST, US state sales tax, etc.)
- Identify the applicable recovery rules: input tax credit eligibility, partial exemption rules, reverse charge obligations, and statute of limitations for late claims
- Note the entity's VAT/GST registration status and any exempt or partially exempt activities

### 2. Ingest and Normalize Transaction Data
- Accept data as CSV, Excel table, or pasted records with columns: date, vendor, invoice number, description, net amount, tax amount, tax rate, GL account code, and whether tax was claimed
- Standardize date formats and currency
- Flag records missing required fields for manual review

### 3. Apply Recovery Eligibility Rules
- **Fully recoverable**: Business purchases with a valid tax invoice, used wholly for taxable supplies — mark as RECOVER
- **Partially recoverable**: Mixed-use purchases subject to apportionment — calculate recoverable portion using the entity's pro-rata or actual-use method — mark as PARTIAL
- **Non-recoverable**: Entertainment, employee benefits, exempt-use purchases, or purchases without a compliant invoice — mark as INELIGIBLE
- **Potentially recoverable via correction**: Transactions where tax was paid but not reclaimed within the filing period — mark as LATE CLAIM, note applicable deadline
- Cross-reference vendor names against known blocked-supplier categories (e.g., car purchases where input tax is restricted)

### 4. Detect Common Missed-Claim Patterns
- Invoices coded to expense GL accounts where tax lines were expensed rather than reclaimed
- Import VAT or use-tax accruals posted but never offset against output tax
- Prepayments and deposits where tax was paid at time of advance
- Intragroup recharges that carry embedded recoverable tax
- Recurring subscriptions and SaaS fees in jurisdictions where digital services are taxable
- Capital expenditure where tax recovery was overlooked at purchase

### 5. Quantify and Prioritize
- Sum recoverable amounts by category (RECOVER, PARTIAL, LATE CLAIM)
- Sort by recoverable value descending to surface highest-impact items first
- Flag any single transaction above a materiality threshold (default: 1,000 in reporting currency, adjustable)
- Calculate total potential recovery and compare to any statute-of-limitations cutoff to identify amounts at risk of expiry

### 6. Recommend Actions
- For RECOVER items: include in next tax return or file a voluntary disclosure / amended return
- For PARTIAL items: document apportionment calculation and include adjusted amount
- For LATE CLAIM items: advise on jurisdiction-specific amended return or error correction procedures and deadline
- For INELIGIBLE items: confirm correct accounting treatment and close

## Output Format

Produce a structured report with these sections:

**Executive Summary**
- Total transactions reviewed
- Total tax identified across all transactions
- Total recoverable amount (confirmed + partial)
- Total at risk of expiry (with earliest expiry date)
- Total ineligible

**Recovery Detail Table**
Columns: `Invoice Date | Vendor | Invoice # | Description | Net Amount | Tax Amount | Tax Rate | Status | Recoverable Amount | Notes`
Sorted by Recoverable Amount descending. Include one row per transaction.

**Category Subtotals**
| Status | Count | Tax Amount | Recoverable Amount |
|--------|-------|------------|-------------------|
| RECOVER | … | … | … |
| PARTIAL | … | … |
