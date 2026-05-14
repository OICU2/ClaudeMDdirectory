---
name: ops-license-renewal-calendar
description: >
  Compiles software subscriptions, equipment certifications, and regulatory licenses into a unified renewal calendar with lead-time alerts and owner assignments. Use when someone says "we need to track our license renewals," asks about upcoming software or compliance expirations, or wants to build a renewal reminder system. Also activates when someone mentions missing a renewal deadline, needs to audit what licenses are expiring, or wants to centralize scattered renewal dates.
category: operations
tags: [licensing, compliance, calendar, renewals, operations]
author: community
---

# License Renewal Calendar Builder

This skill compiles all software, equipment, and regulatory license renewal dates into a structured calendar with automated lead-time alerts, owner assignments, and prioritized action lists.

## Workflow

### 1. Gather License Inventory
Ask the user to provide or confirm the following for each license/subscription:
- License name and vendor/issuing authority
- License type (software SaaS, perpetual, equipment certification, regulatory permit, professional credential)
- Expiration or renewal date
- Annual cost or renewal fee
- Owner or responsible party (person or team)
- Consequences of lapse (service outage, compliance violation, equipment downgrounding)

If the user has a partial list, work with what is provided and flag gaps explicitly.

### 2. Categorize and Classify
Group licenses into these categories:
- **Software & SaaS** — subscriptions, API keys, developer tools
- **Equipment & Hardware** — maintenance contracts, calibration certificates, safety inspections
- **Regulatory & Compliance** — business licenses, permits, industry certifications, data privacy registrations
- **Professional Credentials** — staff certifications, insurance policies, bonding

### 3. Calculate Lead-Time Alerts
Apply these standard lead times unless the user specifies otherwise:
- **90 days before**: High-cost renewals (>$10,000), regulatory licenses with long processing times, equipment with long procurement lead times
- **60 days before**: Standard software subscriptions, professional certifications requiring renewal applications
- **30 days before**: Auto-renewing subscriptions needing cancellation review, minor permits
- **14 days before**: Final warning for all items not yet actioned

Flag any items already within their alert window as **IMMEDIATE ACTION REQUIRED**.

### 4. Identify Risks and Dependencies
For each item, note:
- Whether lapse causes a hard stop (service down, legal violation) vs. soft stop (inconvenience)
- Dependencies between licenses (e.g., equipment certification required before regulatory permit renewal)
- Items with long renewal processing times that need earlier action
- Auto-renewal items that require cancellation notice to avoid unwanted charges

### 5. Assign Owners and Actions
For each license entry, define:
- Primary owner (role or name)
- Renewal action required (renew online, submit application, schedule inspection, contact vendor)
- Budget approval needed (yes/no, and who approves)
- Next action date (earliest lead-time trigger)

## Output Format

Produce three artifacts:

**1. Master Renewal Calendar Table**
A markdown table sorted by expiration date (soonest first) with columns:
| License Name | Type | Expiration Date | Days Until Expiry | Alert Date | Owner | Est. Cost | Risk Level | Status |

Risk Level: 🔴 Critical (hard stop/legal) | 🟡 High (significant impact) | 🟢 Standard

**2. Immediate Action List**
A bulleted list of any licenses expiring within the next 90 days, with:
- License name and expiration date
- Specific next action and deadline
- Owner and escalation contact

**3. Renewal Calendar Summary**
A month-by-month breakdown for the next 12 months showing:
- Which licenses require action each month
- Total renewal costs due per quarter
- Any months with high renewal concentration (flag as "heavy renewal months")

End with a brief **Gaps & Recommendations** section noting missing information, suggested process improvements (e.g., centralizing in a tool like Notion or Airtable), and any licenses that should be renegotiated or consolidated.
