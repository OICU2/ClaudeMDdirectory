---
name: invoice-aging-escalation-workflow
description: >
  Builds an automated escalation workflow that categorizes overdue invoices into aging buckets and generates tiered collection outreach messages for each stage. Use when someone says their invoices are past due, asks how to follow up on unpaid bills, wants to set up a collections process, needs to draft overdue payment reminders, or is trying to reduce accounts receivable aging.
category: finance
tags: [accounts-receivable, collections, invoicing, cash-flow, automation]
author: community
---

# Invoice Aging Escalation Workflow

This skill builds a structured escalation workflow that segments overdue invoices by aging bucket (1–30, 31–60, 61–90, 90+ days) and drafts appropriately toned collection messages for each tier.

## Workflow Steps

### 1. Gather Invoice Data
Request or accept the following inputs:
- Customer name and contact information
- Invoice number, amount, and original due date
- Any prior communication history or payment promises
- Payment terms (Net 15, Net 30, etc.)

If data is provided in bulk (CSV, table, or list), process each invoice individually and group by aging bucket.

### 2. Categorize by Aging Bucket
Calculate days overdue from the current date and assign each invoice to a tier:

| Tier | Days Overdue | Escalation Level |
|------|-------------|-----------------|
| 1    | 1–30 days   | Friendly reminder |
| 2    | 31–60 days  | Firm follow-up |
| 3    | 61–90 days  | Urgent notice |
| 4    | 90+ days    | Final demand / escalation |

### 3. Draft Tiered Outreach Messages

**Tier 1 — Friendly Reminder (1–30 days)**
- Tone: Polite, assume oversight
- Content: Invoice number, amount due, due date, payment link or instructions, offer to answer questions
- Subject line: "Friendly reminder: Invoice [#] due [date]"

**Tier 2 — Firm Follow-Up (31–60 days)**
- Tone: Professional, direct, no longer assuming oversight
- Content: Reference prior reminder, restate amount and due date, request payment or payment plan discussion within 5 business days
- Subject line: "Second notice: Invoice [#] now [X] days past due"

**Tier 3 — Urgent Notice (61–90 days)**
- Tone: Serious, formal
- Content: State account is significantly overdue, list all outstanding invoices if multiple, specify deadline (e.g., 3 business days), note potential consequences (late fees, service suspension, account hold)
- Subject line: "Urgent: Overdue balance requires immediate attention"

**Tier 4 — Final Demand / Escalation (90+ days)**
- Tone: Formal, legal-adjacent
- Content: Final notice language, total outstanding balance, hard deadline, consequences (collections referral, legal action, credit reporting), provide one last contact opportunity
- Subject line: "Final notice: Account [ID] — Immediate action required"

### 4. Build Escalation Timeline
Generate a follow-up schedule showing:
- Recommended send dates for each tier
- Escalation triggers (no response after X days → move to next tier)
- Recommended channel per tier (email → email + phone → certified letter → collections)

### 5. Flag Exceptions
Identify and call out:
- Invoices over 90 days with no prior contact logged
- High-value invoices (define threshold based on user input) that may warrant personal outreach
- Customers with repeated late payment history requiring stricter terms

## Output Format

Produce a structured report with the following sections:

**1. Aging Summary Table**
A table listing each invoice with: customer name, invoice number, amount, due date, days overdue, and assigned tier.

**2. Drafted Messages**
One ready-to-send email draft per invoice (or per customer if consolidated), labeled by tier. Each draft includes subject line, salutation, body, and call-to-action.

**3. Escalation Schedule**
A timeline table showing recommended outreach dates and channel for each invoice, based on today's date.

**4. Exception Flags**
A bulleted list of invoices requiring special handling, with a one-line reason for
