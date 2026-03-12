---
name: data-retention-policy-design
description: >
  Creates a formal data retention policy document specifying storage durations, locations, and
  purge procedures for different data types. Use when someone says "we need a data retention
  policy," asks about how long to keep customer data, wants to define data lifecycle rules,
  needs to meet GDPR or HIPAA retention requirements, or is setting up data governance for
  their organization.
category: operations
tags: [data-governance, compliance, privacy, gdpr, data-lifecycle]
author: community
---

# Data Retention Policy Design

This skill produces a complete, formal data retention policy document covering data classification, retention schedules, storage locations, and purge procedures for compliance and operational use.

## Policy Design Workflow

1. **Identify the organization context** — Ask for or infer the industry (healthcare, finance, SaaS, etc.), applicable regulations (GDPR, HIPAA, SOX, CCPA, PCI-DSS), and organization size if not provided.

2. **Enumerate data categories** — Define distinct data types relevant to the organization. Standard categories include:
   - Customer PII (names, emails, addresses)
   - Financial and billing records
   - Authentication and access logs
   - Application/system logs
   - Contractual and legal documents
   - Employee records
   - Marketing and analytics data
   - Backups and archives

3. **Assign retention periods per category** — Apply these defaults unless the user specifies otherwise or regulations override:
   - PII: 3 years after last interaction or as required by applicable law
   - Financial records: 7 years (SOX/IRS baseline)
   - Access/audit logs: 1–2 years
   - System/application logs: 90 days
   - Legal/contractual documents: 7–10 years
   - Employee records: 7 years post-termination
   - Marketing data: 2 years or until consent withdrawal

4. **Specify storage locations** — For each category, identify primary storage (database, S3, file system), backup location, and whether data is replicated across regions.

5. **Define purge and anonymization procedures** — State whether data is hard-deleted, anonymized, or archived at end of retention. Include who is responsible (data owner, DBA, automated job) and the method (scheduled script, manual review, third-party tool).

6. **Define exceptions and legal holds** — Describe the process for placing data under legal hold, which overrides standard retention schedules.

7. **Set review cadence** — Specify that the policy must be reviewed annually or when regulations change.

8. **Assign ownership** — Name a policy owner role (e.g., DPO, CTO, Legal Counsel) and approver.

## Output Format

Produce a structured Markdown document with the following sections:

```
# Data Retention Policy
**Version:** 1.0
**Effective Date:** [date]
**Owner:** [role]
**Approved By:** [role]

## 1. Purpose and Scope
[2–3 sentences on why this policy exists and what systems/data it covers]

## 2. Applicable Regulations
[Bulleted list of relevant laws and standards]

## 3. Data Retention Schedule
[Table with columns: Data Category | Description | Retention Period | Storage Location | Purge Method | Owner]

## 4. Data Purge and Anonymization Procedures
[Numbered steps for executing purge, who runs it, how it is verified]

## 5. Legal Hold Process
[Steps to suspend retention schedule for litigation or investigation]

## 6. Roles and Responsibilities
[Table: Role | Responsibility]

## 7. Policy Review and Maintenance
[Review frequency, change process, version history table]

## 8. Exceptions
[How to request and document exceptions to standard retention periods]
```

The retention schedule table must contain at least 6 data categories. Flag any gaps where regulation-specific retention periods conflict or where the user must make a business decision.
