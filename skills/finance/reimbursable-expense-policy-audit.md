---
name: reimbursable-expense-policy-audit
description: >
  Audits submitted expense reports against company reimbursement policies to surface violations, missing documentation, and duplicate claims. Use when someone says "review my expense report," asks about whether an expense will be approved, wants to check if their receipts are compliant, needs to audit team submissions before payroll, or is trying to understand why an expense was rejected.
category: finance
tags: [expenses, compliance, audit, reimbursement, policy]
author: community
---

# Reimbursable Expense Policy Audit

This skill reviews expense reports line-by-line against defined company policy rules to flag out-of-policy claims, missing receipts, duplicate submissions, and provide a structured audit summary with recommended actions.

## Audit Workflow

### 1. Collect Policy Baseline
Before auditing, establish the active policy rules. If not provided, prompt the user for:
- Per-diem meal limits (by city tier or flat rate)
- Hotel nightly rate caps
- Airfare class restrictions (economy vs. business, booking window requirements)
- Mileage reimbursement rate (e.g., IRS standard rate)
- Receipt requirement thresholds (e.g., receipts required above $25)
- Restricted categories (alcohol, entertainment, personal expenses)
- Submission deadline (e.g., within 30 days of expense date)

### 2. Parse Expense Submissions
For each line item, extract and record:
- Date of expense
- Vendor / merchant name
- Category (meal, lodging, travel, supplies, etc.)
- Amount claimed
- Receipt attached (yes/no)
- Business purpose stated (yes/no)
- Employee name and cost center

### 3. Apply Policy Rules — Flag These Violations

**Amount Violations**
- Meal exceeds per-diem limit → flag with overage amount
- Hotel rate exceeds nightly cap → flag with overage amount
- Mileage claim inconsistent with map distance (>10% variance) → flag

**Documentation Violations**
- No receipt attached and amount exceeds receipt threshold → flag as missing receipt
- No business purpose listed → flag as incomplete
- Receipt image is illegible or clearly unrelated → flag for resubmission

**Category Violations**
- Alcohol charged to meal category without explicit policy exception → flag
- Personal items (gym, streaming services, clothing) submitted → flag as non-reimbursable
- First/business class airfare without pre-approval notation → flag

**Duplicate Detection**
- Same vendor + same amount + same or adjacent date across multiple submissions → flag as likely duplicate
- Same receipt appearing under two different expense lines → flag as duplicate

**Timing Violations**
- Expense date more than 30 days before submission (or per policy window) → flag as late submission

### 4. Classify Each Flag
Assign one of three severity levels:
- **REJECT** — Policy clearly prohibits; should not be reimbursed without escalation
- **HOLD** — Missing documentation or ambiguous; requires employee action before approval
- **WARN** — Minor deviation or edge case; approver discretion advised

## Output Format

Produce a structured audit report with the following sections:

---

**EXPENSE AUDIT REPORT**
Employee: [Name] | Period: [Date Range] | Total Claimed: $[Amount]

---

**SUMMARY**
- Total line items reviewed: [N]
- Items approved (no flags): [N]
- Items flagged: [N] ([N] REJECT / [N] HOLD / [N] WARN)
- Recommended reimbursable total: $[Amount]
- Amount under review: $[Amount]

---

**FLAGGED ITEMS**

| # | Date | Vendor | Amount | Category | Flag Type | Severity | Required Action |
|---|------|--------|--------|----------|-----------|----------|-----------------|
| 1 | MM/DD | [Vendor] | $XX.XX | Meals | Exceeds per-diem by $12.00 | HOLD | Resubmit with justification or reduce to policy limit |
| 2 | MM/DD | [Vendor] | $XX.XX | Travel | No receipt attached | HOLD | Attach receipt to proceed |
| 3 | MM/DD | [Vendor] | $XX.XX | Entertainment | Alcohol purchase, no exception on file | REJECT
