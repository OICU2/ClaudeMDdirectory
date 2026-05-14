---
name: sales-data-hygiene-audit
description: >
  Scans CRM records to identify data quality issues including duplicate entries, missing required fields, stale opportunity stages, and inconsistent naming conventions, then produces a prioritized cleanup task list. Use when someone says "our CRM data is a mess," asks about cleaning up sales records, wants to audit data quality in their pipeline, needs to find duplicate accounts or contacts, or is preparing for a CRM migration or reporting cycle.
category: sales
tags: [crm, data-quality, sales-ops, duplicates, pipeline]
author: community
---

# Sales Data Hygiene Audit

This skill audits CRM data exports or pasted records to surface data quality issues and outputs a prioritized, actionable cleanup task list for sales operations teams.

## Audit Workflow

1. **Receive Data Input** — Accept CRM data as a CSV paste, JSON export, or structured table. If no data is provided, ask the user to paste a sample (minimum 10 records) or describe their CRM fields and a representative data snapshot.

2. **Check for Duplicate Records** — Identify duplicates by scanning for:
   - Exact or fuzzy matches on company name, email domain, or phone number
   - Contacts with identical names across different accounts
   - Opportunities with the same name and close date under the same account
   - Flag each duplicate pair with a confidence level (High / Medium / Low)

3. **Identify Missing Required Fields** — Evaluate each record against standard required fields:
   - Contacts: First Name, Last Name, Email, Account, Owner
   - Accounts: Company Name, Industry, Account Owner, Country
   - Opportunities: Name, Stage, Close Date, Amount, Owner
   - Report the percentage of records missing each field

4. **Flag Stale Opportunity Stages** — Identify opportunities where:
   - Stage has not changed in more than 30 days (highlight) or 60+ days (critical)
   - Close date is in the past but stage is not Closed Won or Closed Lost
   - Probability does not align with the stated stage (e.g., 90% probability but stage is "Prospecting")

5. **Detect Naming Convention Inconsistencies** — Scan for:
   - Mixed case formats (e.g., "ACME Corp", "acme corp", "Acme")
   - Abbreviated vs. full industry/region labels (e.g., "Tech" vs. "Technology")
   - Owner names entered as email addresses in some records and full names in others
   - Non-standard stage names that don't match the defined pipeline stages

6. **Score and Prioritize Issues** — Assign each finding a priority tier:
   - **P1 (Critical):** Duplicates causing inflated pipeline numbers, missing owner or close date on open opps
   - **P2 (High):** Stale opportunities over 60 days, missing Amount on deals past Discovery stage
   - **P3 (Medium):** Naming inconsistencies, missing non-blocking fields
   - **P4 (Low):** Minor formatting issues, optional fields unfilled

## Output Format

Produce a structured audit report with the following sections:

**1. Executive Summary (3–5 bullet points)**
- Total records reviewed
- Number and type of critical issues found
- Estimated pipeline accuracy impact (e.g., "$X in duplicate or zombie opportunities")

**2. Issue Breakdown Table**
| Issue Type | Records Affected | % of Total | Priority |
|---|---|---|---|
| Duplicate Accounts | 14 | 8% | P1 |
| Missing Close Date | 22 | 13% | P1 |
| Stale Stage (60+ days) | 9 | 5% | P2 |
| Naming Inconsistencies | 37 | 22% | P3 |

**3. Prioritized Cleanup Task List**
Number each task. Include: what to fix, which records (IDs or names if available), and the recommended action. Example:
- **Task 1 [P1]:** Merge duplicate accounts — "Acme Corp" (ID 1042) and "ACME Corporation" (ID 1089). Keep ID 1042, migrate contacts and opportunities from 1089.
- **Task 2 [P1]:** Assign owners to 22 open opportunities currently showing no owner. Route to Sales Ops
