---
name: customer-logo-usage-permission-tracker
description: >
  Maintains a structured log of which customer accounts have granted permission to use their logo or name in marketing and sales materials. Use when someone says "can we use this customer's logo," asks about logo usage rights, wants to check if a customer approved us as a reference, needs to update marketing permissions for an account, or wants to see which customers have granted brand usage approval.
category: sales
tags: [customer-references, logo-permissions, marketing-compliance, account-management]
author: community
---

# Customer Logo Usage Permission Tracker

This skill manages a structured permission log for customer logo and name usage in marketing materials, and activates whenever someone needs to check, add, update, or audit brand usage rights across accounts.

## Permission Tracking Workflow

### Checking Existing Permissions
1. Look up the customer account by name or domain in the permission log.
2. Report the current permission status: Approved, Denied, Pending, or Not Contacted.
3. Include the permission scope (logo only, name only, case study, all materials), the date granted, the contact who authorized it, and any expiration or restrictions noted.
4. If no record exists, flag the account as untracked and prompt to initiate an outreach.

### Adding or Updating a Permission Entry
1. Collect the following fields before logging:
   - **Account Name** (exact legal or brand name)
   - **Domain** (e.g., acme.com)
   - **Permission Status**: Approved / Denied / Pending / Expired
   - **Scope**: Logo, Company Name, Case Study, Testimonial, All Marketing Materials
   - **Authorization Contact**: Full name and title of the person who granted permission
   - **Date Granted or Denied**
   - **Expiration Date** (if applicable; otherwise mark "Indefinite")
   - **Approved Channels**: Website, Pitch Decks, Social Media, Press Releases, Events
   - **Restrictions or Notes**: Any specific use limitations (e.g., "no competitor comparisons," "require pre-approval for each use")
   - **Evidence**: Email thread ID, contract clause, or document reference
2. Confirm all required fields are present before saving the entry.
3. If permission was denied, note the reason and set a re-contact date if appropriate.
4. If permission is expiring within 30 days, flag it for renewal outreach.

### Auditing the Permission Log
1. When asked for a full audit or report, group accounts by status: Approved, Denied, Pending, Expired, Not Contacted.
2. Highlight any accounts currently being used in active marketing materials that lack confirmed Approved status — treat these as compliance risks.
3. Identify accounts with expiring permissions (within 60 days) for proactive renewal.
4. Note any entries missing required fields (incomplete records).

### Handling Edge Cases
- If a customer was acquired or rebranded, flag the entry for re-verification.
- If permission was granted verbally with no written record, mark status as "Verbal Only — Needs Documentation" and escalate.
- Never assume permission carries over from a previous contract renewal without explicit reconfirmation.

## Output Format

**Single Account Lookup:**
```
Account: Acme Corp (acme.com)
Status: ✅ Approved
Scope: Logo, Company Name, Pitch Decks, Website
Authorized By: Jane Smith, VP Marketing — jane.smith@acme.com
Date Granted: 2023-08-14
Expiration: Indefinite
Approved Channels: Website, Pitch Decks, Social Media
Restrictions: Must not appear alongside direct competitor logos
Evidence: Email thread — ref #2023-0814-ACME
```

**Permission Log Table (Audit View):**
| Account | Domain | Status | Scope | Authorized By | Date Granted | Expiration | Channels | Notes |
|---|---|---|---|---|---|---|---|---|
| Acme Corp | acme.com | ✅ Approved | Logo, Name | Jane Smith | 2023-08-14 | Indefinite | Web, Decks | No competitor adjacency |
| Beta Inc | beta.io | ⏳ Pending | All | — | — | — | — | Outreach sent 2024-01-10 |
| Gamma LLC | gamma.com | ❌
