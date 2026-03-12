---
name: contractor-payment-tracking
description: >
  Manages payment schedules, 1099 thresholds, and outstanding balances for independent contractors and freelancers. Use when someone says "I need to track contractor payments," asks about "when to send a 1099," or wants to "see what I owe freelancers." Also activates when someone mentions outstanding invoices from contractors or needs to organize their freelancer payment history.
category: finance
tags: [contractors, 1099, freelancers, payments, accounts-payable]
author: community
---

# Contractor Payment Tracking

This skill organizes contractor payment data, flags 1099 reporting thresholds, and surfaces outstanding balances so you never miss a tax deadline or an unpaid invoice.

## Payment Tracking Workflow

1. **Collect contractor data**: For each contractor gather: full legal name, business name (if applicable), EIN or SSN (last 4 only for display), payment dates, amounts, and payment method (check, ACH, PayPal, etc.).

2. **Aggregate year-to-date totals**: Sum all payments per contractor for the current tax year. Flag any contractor who has received or is approaching $600 USD (the IRS 1099-NEC threshold).

3. **Classify payment status**:
   - **Paid**: Invoice received, payment sent and cleared
   - **Pending**: Invoice received, payment not yet sent
   - **Overdue**: Payment past agreed due date
   - **Disputed**: Invoice under review

4. **Apply 1099 rules**:
   - Threshold: $600+ in a calendar year triggers a 1099-NEC requirement
   - Exclude: Payments to corporations (C-corp or S-corp) generally do not require a 1099, unless for legal or medical services
   - Flag: Contractors paid via credit card or third-party networks (PayPal, Venmo Business) are reported by the payment processor on a 1099-K instead
   - Deadline: 1099-NEC forms must be sent to contractors by January 31 and filed with the IRS by January 31

5. **Calculate outstanding balances**: Total all pending and overdue invoices per contractor and across all contractors.

6. **Flag action items**:
   - Contractors crossing or near the $600 threshold who lack a W-9 on file
   - Invoices overdue by more than 30 days
   - Approaching year-end with missing tax information

## Output Format

Produce a structured summary with these sections:

**Contractor Payment Summary — [Current Year]**

| Contractor Name | YTD Paid | Status | 1099 Required | W-9 on File | Outstanding |
|-----------------|----------|--------|---------------|-------------|-------------|
| [Name]          | $X,XXX   | Active | Yes / No / TBD| Yes / No    | $XXX        |

**Outstanding Balance Total**: $X,XXX across X invoices

**Action Items** (bulleted list):
- Specific contractor names and what is needed
- 1099 threshold warnings with exact amounts
- Overdue invoice details with days past due

**1099 Filing Checklist** (only shown if year-end is within 90 days or explicitly requested):
- List each contractor requiring a 1099-NEC with their YTD total

Keep the output concise. If data is incomplete, list exactly what information is needed per contractor before proceeding.
