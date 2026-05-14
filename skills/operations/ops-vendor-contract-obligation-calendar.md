---
name: ops-vendor-contract-obligation-calendar
description: >
  Extracts key performance obligations, delivery milestones, SLA requirements, and compliance deadlines from vendor contracts and maps them into a structured time-based calendar. Use when someone says "I need to track what our vendors owe us," asks about upcoming contract deliverables, wants to build a vendor compliance schedule, needs to know when SLA reviews are due, or is trying to audit whether a vendor is meeting their contractual obligations.
category: operations
tags: [vendor-management, contracts, compliance, SLA, milestones]
author: community
---

# Vendor Contract Obligation Calendar

Parses vendor contract text or summaries to extract all time-sensitive obligations and generates a structured compliance calendar with owners, deadlines, and risk flags.

## Extraction and Mapping Workflow

1. **Ingest contract content** — Accept pasted contract text, a structured summary, or a list of clauses. Ask clarifying questions if the contract type (MSA, SOW, SLA, NDA) is unclear.

2. **Identify obligation categories** — Scan for and tag each obligation by type:
   - Delivery milestones (software releases, hardware shipments, reports)
   - SLA performance thresholds (uptime, response time, resolution windows)
   - Reporting obligations (monthly/quarterly business reviews, audit submissions)
   - Payment and invoicing triggers
   - Renewal and termination notice windows
   - Compliance certifications (SOC 2, ISO, GDPR attestations)
   - Penalty and cure period triggers

3. **Extract temporal anchors** — For each obligation, identify:
   - Absolute dates (e.g., "by March 31")
   - Relative dates (e.g., "within 30 days of contract execution")
   - Recurring intervals (e.g., "quarterly," "annually")
   - Conditional triggers (e.g., "upon go-live," "following a severity-1 incident")
   - If contract execution date is unknown, flag and request it

4. **Resolve relative dates** — Ask for the contract start date and any known milestone dates to convert all relative triggers into absolute calendar entries.

5. **Assign risk and ownership fields** — For each entry, note:
   - Which party is obligated (vendor or client)
   - Consequence of non-compliance (financial penalty, termination right, SLA credit)
   - Recommended internal owner role (e.g., Procurement, Legal, IT Operations)
   - Lead-time alert window (e.g., 30-day advance notice for renewals)

6. **Flag gaps and ambiguities** — Call out any obligations with missing dates, vague language ("reasonable timeframe"), or conflicting terms that require legal review before scheduling.

## Output Format

Produce the following three sections:

**1. Obligation Summary Table**
A markdown table with columns:
| # | Obligation | Type | Party Obligated | Due Date / Trigger | Recurrence | Consequence | Internal Owner | Alert Lead Time |

**2. Month-by-Month Calendar View**
Group all obligations chronologically by month. For relative or conditional entries, list them under a "Triggered Events" section with their trigger condition noted.

```
### [Month Year]
- [Date] — [Obligation description] | Owner: [Role] | Risk: [High/Medium/Low]
```

**3. Risk and Gap Log**
A bullet list of:
- Ambiguous or undated obligations requiring clarification
- High-consequence deadlines within the next 90 days
- Missing information needed to complete the calendar (e.g., contract execution date, go-live date)

Total output length should be proportional to contract complexity. For a single SOW, expect 1–3 pages. For a full MSA with multiple SOWs, expect a paginated breakdown per agreement.
