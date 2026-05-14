---
name: sales-email-bounce-back-classifier
description: >
  Categorizes email bounce responses by type and recommends corrective actions for each affected prospect record. Use when someone says "our emails are bouncing," asks about cleaning up bounced contacts, or wants to fix delivery failures in their outreach campaign. Also activates when a user shares a list of bounce messages and needs to know what went wrong or how to recover deliverability.
category: sales
tags: [email, deliverability, bounce-handling, prospect-management, outreach]
author: community
---

# Sales Email Bounce-Back Classifier

This skill analyzes email bounce responses, classifies each by bounce type, and provides specific corrective actions to take on each prospect record to restore or remove them from active outreach.

## Bounce Classification Workflow

1. **Ingest the bounce data** — Accept raw bounce messages, exported CSV rows, or copy-pasted SMTP error codes. If the user provides a list, process each entry individually.

2. **Classify each bounce** into one of five categories:

   - **Hard Bounce – Invalid Address**: SMTP 550, 551, 553, or "user unknown." Address does not exist. Mark record as permanently undeliverable.
   - **Hard Bounce – Domain Dead**: SMTP 550 + DNS failure or "domain not found." Company domain is inactive or defunct. Flag for prospect research to find new contact info.
   - **Soft Bounce – Mailbox Full**: SMTP 452 or "over quota." Temporary issue. Retry after 48–72 hours, maximum 2 retries before suppressing.
   - **Soft Bounce – Server Temporarily Unavailable**: SMTP 421, 450, or "try again later." Retry after 24 hours up to 3 times before escalating.
   - **Block Bounce – Spam or Policy Rejection**: SMTP 541, 554, or "rejected by policy/spam filter." Do not retry. Audit sending domain, check blacklist status, and attempt contact via alternate channel.

3. **Assign corrective action** to each record based on classification:
   - Hard bounces → suppress from all sequences immediately; log in CRM as "Invalid" or "Dead Domain"
   - Soft bounces → queue for scheduled retry; do not manually remove from sequence yet
   - Block bounces → remove from sequence; flag sender domain for review; note alternate outreach channel (LinkedIn, phone)

4. **Identify patterns** — If more than 10% of bounces are block bounces, flag a potential sender reputation issue. If multiple records share a dead domain, suggest account-level research to find updated company contacts.

5. **Output a prioritized action list** sorted by: (1) hard bounces requiring immediate suppression, (2) block bounces requiring sender audit, (3) soft bounces requiring retry scheduling.

## Output Format

Produce a structured report with the following sections:

**Summary Table**
| Prospect Email | Bounce Type | SMTP Code | Classification | Action Required |
|---|---|---|---|---|
One row per bounce entry, filled with specific data from input.

**Corrective Action Queue**
- Grouped by action type (Suppress, Retry, Audit)
- Each group lists affected emails and the exact next step with a suggested timeframe

**Sender Health Flag** (include only if block bounces exceed 10% of total)
- State the percentage, name the likely cause, and list 3 specific remediation steps (e.g., check MXToolbox blacklist, review SPF/DKIM records, reduce send volume)

Keep output scannable and ready to hand off directly to a CRM admin or sales ops team.
