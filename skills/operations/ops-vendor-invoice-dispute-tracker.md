---
name: ops-vendor-invoice-dispute-tracker
description: >
  Maintains a structured log of disputed vendor invoices including amounts, dispute reasons, escalation status, and resolution deadlines. Use when someone says "we have a problem with a vendor invoice," asks to "track a disputed invoice," wants to "log a billing discrepancy," needs to "escalate an invoice dispute," or wants to "check the status of a vendor dispute."
category: operations
tags: [invoices, vendor-management, disputes, accounts-payable, escalation]
author: community
---

# Vendor Invoice Dispute Tracker

This skill creates and maintains a structured dispute log for vendor invoices, capturing all relevant details needed to manage, escalate, and resolve billing disagreements.

## Dispute Logging Workflow

1. **Capture invoice identity**: Record vendor name, invoice number, invoice date, and date dispute was opened.
2. **Record financial details**: Log the invoiced amount, the disputed amount, and the expected/agreed amount if known.
3. **Document dispute reason**: Classify the reason using one of these categories — Overbilling, Services Not Rendered, Duplicate Invoice, Contract Mismatch, Quality/SLA Dispute, Unauthorized Charges, or Other (with description).
4. **Assign escalation status**: Set current status as one of — Open, Under Review, Escalated to Manager, Escalated to Legal, Pending Vendor Response, Resolved, or Closed.
5. **Set deadlines**: Record the payment due date, internal resolution target date, and any contractual dispute window deadline.
6. **Identify owners**: Note the internal owner (name/role) and the vendor contact responsible for resolution.
7. **Log communication history**: Append dated notes summarizing each touchpoint (calls, emails, meetings) in reverse chronological order.
8. **Update on resolution**: When resolved, record resolution date, final agreed amount, resolution method (credit, revised invoice, payment plan, write-off), and any process notes to prevent recurrence.

## Escalation Rules

- Flag any dispute where payment due date is within 7 days and status is still Open or Under Review.
- Flag any dispute open longer than 30 days without a status change.
- Auto-suggest escalation to Legal if disputed amount exceeds $10,000 or if vendor has gone 14+ days without response.

## Output Format

Produce a structured dispute record in this exact format for each invoice:

```
=== VENDOR INVOICE DISPUTE RECORD ===

INVOICE DETAILS
---------------
Vendor Name:          [Name]
Invoice Number:       [INV-XXXX]
Invoice Date:         [YYYY-MM-DD]
Dispute Opened:       [YYYY-MM-DD]

FINANCIAL SUMMARY
-----------------
Invoiced Amount:      $[amount]
Disputed Amount:      $[amount]
Expected Amount:      $[amount]
Variance:             $[amount]

DISPUTE CLASSIFICATION
----------------------
Reason Category:      [Category]
Description:          [1-3 sentence explanation of the dispute]

STATUS & ESCALATION
-------------------
Current Status:       [Status]
Internal Owner:       [Name, Role]
Vendor Contact:       [Name, Email/Phone]
⚠ Flags:             [Any active escalation flags or "None"]

KEY DATES
---------
Payment Due Date:     [YYYY-MM-DD]
Dispute Window Ends:  [YYYY-MM-DD]
Resolution Target:    [YYYY-MM-DD]
Days Open:            [N]

COMMUNICATION LOG
-----------------
[YYYY-MM-DD] — [Medium: Email/Call/Meeting] — [Summary of interaction]
[YYYY-MM-DD] — [Medium] — [Summary]

RESOLUTION (if applicable)
--------------------------
Resolved Date:        [YYYY-MM-DD or "Pending"]
Final Agreed Amount:  $[amount or "TBD"]
Resolution Method:    [Method or "TBD"]
Notes:                [Any process improvement notes]
=====================================
```

When tracking multiple disputes, stack records sequentially and prepend a summary table listing all open disputes by vendor, disputed amount, status, and days open.
