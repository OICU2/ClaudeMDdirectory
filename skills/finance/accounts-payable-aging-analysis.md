---
name: accounts-payable-aging-analysis
description: >
  Categorizes outstanding vendor invoices by due date buckets to prioritize payments and manage cash outflow timing. Use when someone says "show me what we owe vendors," asks about overdue supplier invoices, wants to understand payment priorities, needs to analyze cash outflow timing, or asks which bills are past due.
category: finance
tags: [accounts-payable, aging, invoices, cash-flow, vendors]
author: community
---

# Accounts Payable Aging Analysis

This skill organizes outstanding vendor invoices into standard aging buckets to help prioritize payments, avoid late fees, and manage cash outflow timing.

## Aging Analysis Workflow

1. **Collect invoice data** — Gather all open vendor invoices including: vendor name, invoice number, invoice date, due date, invoice amount, and any partial payments applied.

2. **Calculate days outstanding** — For each invoice, compute days past due using: `today's date - due date`. Negative values indicate invoices not yet due.

3. **Assign to aging buckets** — Sort every invoice into exactly one bucket:
   - **Current** — Not yet due (days past due ≤ 0)
   - **1–30 Days Past Due** — Overdue 1 to 30 days
   - **31–60 Days Past Due** — Overdue 31 to 60 days
   - **61–90 Days Past Due** — Overdue 61 to 90 days
   - **90+ Days Past Due** — Overdue more than 90 days

4. **Summarize by vendor** — Group invoices under each vendor, subtotaling by bucket. Flag vendors with balances in the 61–90 or 90+ buckets as high-priority.

5. **Identify payment priorities** — Apply this logic:
   - 90+ days: Immediate action required — risk of service suspension or legal action
   - 61–90 days: Urgent — contact vendor, negotiate if needed
   - 31–60 days: Schedule payment this week
   - 1–30 days: Include in next payment run
   - Current: Plan within normal payment terms

6. **Calculate totals** — Sum each bucket across all vendors to show total exposure per aging period and a grand total outstanding.

7. **Flag exceptions** — Note any invoices with early payment discounts available, invoices on hold or in dispute, and vendors with credit holds in effect.

## Output Format

Produce the following structure:

**Accounts Payable Aging Summary — [Date]**

A markdown table with columns: Vendor | Invoice # | Invoice Date | Due Date | Days Past Due | Amount | Bucket

Followed by a **Bucket Summary Table**:
| Aging Bucket | # of Invoices | Total Amount | % of Total |
|---|---|---|---|

Then a **Priority Action List** — bulleted, sorted by urgency, specifying vendor name, total owed, and recommended action.

Finally, a **Cash Flow Recommendation** — 2–4 sentences summarizing total AP exposure, immediate payment obligations, and suggested payment schedule for the next 30 days.

If invoice data is not provided, ask the user to supply it as a table, CSV paste, or file, and specify the minimum required fields: vendor name, due date, and amount.
