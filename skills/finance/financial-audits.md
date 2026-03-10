---
name: financial-audits
description: >
  Conducts structured internal financial audits to verify accuracy, reconcile accounts, and identify discrepancies or compliance gaps. Use when someone says "audit our financials," asks to "review the books," wants to "check for discrepancies in our accounts," needs to "verify financial accuracy," or asks to "identify irregularities in spending or reporting."
category: finance
tags: [audit, finance, accounting, compliance, reconciliation]
author: community
---

# Financial Audits Skill

This skill guides Claude through a structured internal financial audit process to verify accuracy, surface discrepancies, and produce a clear findings report.

## Audit Workflow

1. **Define Audit Scope**
   - Identify the period under review (month, quarter, fiscal year)
   - Confirm which accounts, departments, or cost centers are included
   - Clarify audit objective: accuracy check, fraud detection, compliance review, or reconciliation

2. **Gather Source Documents**
   - Request or reference: general ledger, bank statements, invoices, payroll records, expense reports, and prior audit reports
   - Note any missing documents and flag them as audit risks

3. **Perform Account Reconciliation**
   - Compare ledger balances against bank statements line by line
   - Identify unreconciled items, duplicate entries, or unexplained adjustments
   - Check that debits and credits balance across all reviewed accounts

4. **Verify Transactions**
   - Cross-reference high-value or unusual transactions against supporting documentation
   - Flag transactions lacking proper authorization, receipts, or matching purchase orders
   - Check for round-number anomalies, repeated vendors, or off-cycle payments

5. **Assess Compliance**
   - Verify adherence to internal policies (approval thresholds, expense categories, capitalization rules)
   - Note any deviations from GAAP, IFRS, or applicable regulatory standards
   - Confirm proper period cutoff — revenue and expenses recorded in the correct period

6. **Identify and Classify Discrepancies**
   - Categorize findings by severity: Critical (material misstatement or potential fraud), Moderate (policy violation or reconciling error), Minor (documentation gap or rounding issue)
   - Document the account affected, dollar amount, nature of discrepancy, and likely cause

7. **Recommend Corrective Actions**
   - For each finding, provide a specific remediation step (e.g., reverse journal entry, obtain missing receipt, escalate to management)
   - Prioritize actions by severity and deadline

## Output Format

Produce a structured **Audit Findings Report** with the following sections:

**Audit Summary**
- Period reviewed, scope, and audit objective (2–4 sentences)

**Reconciliation Results**
- Table with columns: Account Name | Book Balance | Verified Balance | Variance | Status

**Discrepancy Log**
- Table with columns: Finding ID | Account | Amount | Description | Severity | Recommended Action

**Compliance Observations**
- Bullet list of policy or regulatory deviations found, each with a one-line remediation note

**Risk Flags**
- Bullet list of high-priority items requiring immediate attention or escalation

**Overall Assessment**
- One paragraph summarizing audit health, total dollar value of discrepancies found, and confidence in financial accuracy

Keep language precise and objective. Use dollar amounts wherever possible. Avoid vague qualifiers.