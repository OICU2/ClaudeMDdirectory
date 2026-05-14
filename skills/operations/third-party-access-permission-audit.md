---
name: third-party-access-permission-audit
description: >
  Reviews and documents all third-party vendor and contractor system access permissions to identify outdated or excessive privilege assignments. Use when someone says "audit vendor access," asks about reviewing contractor permissions, wants to check who has system access from outside the organization, needs to identify stale third-party credentials, or is preparing for a security compliance review of external user accounts.
category: operations
tags: [security, access-control, vendor-management, compliance, permissions]
author: community
---

# Third-Party Access Permission Audit

This skill systematically inventories and evaluates all third-party vendor and contractor access permissions across systems to surface excessive privileges, stale accounts, and compliance gaps.

## Audit Workflow

### 1. Scope Definition
- Identify all systems in scope: SaaS tools, cloud environments, internal apps, VPNs, code repositories, databases
- Clarify what counts as "third-party": vendors, contractors, consultants, managed service providers, integration service accounts
- Confirm the audit period (e.g., accounts active in last 90/180/365 days)

### 2. Access Inventory Collection
Gather the following data points for each third-party account:
- Account identifier (username, email, service account name)
- Affiliated vendor or contractor company
- Systems and environments they can access (prod, staging, dev)
- Permission level or role assigned (read, write, admin, superuser)
- Access provisioning date
- Last login or last active date
- Business justification or associated contract/SOW
- Account owner or internal sponsor

### 3. Risk Classification
Flag each account against these criteria:
- **Stale**: No login in 60+ days or contract end date has passed
- **Excessive Privilege**: Admin or write access where read-only would suffice; access to production without documented need
- **Undocumented**: No internal sponsor, no contract reference, or no stated business justification
- **Orphaned**: Sponsoring employee has left the organization
- **Scope Creep**: Access extends beyond the original engagement scope

### 4. Remediation Recommendations
For each flagged account, assign one of:
- **Revoke immediately**: Stale, orphaned, or contract-expired accounts
- **Downgrade permissions**: Accounts with excessive privilege
- **Request re-justification**: Undocumented accounts (set 5-business-day deadline)
- **Scope-limit access**: Restrict to specific environments or resources
- **Schedule review**: Active accounts approaching 90-day review threshold

### 5. Process Gap Identification
Note systemic issues observed, such as:
- No offboarding process for contractors
- Missing access expiry dates at provisioning
- Shared credentials across multiple vendors
- Lack of MFA enforcement for third-party accounts

## Output Format

Produce a structured audit report with the following sections:

**Executive Summary** (3–5 sentences): total accounts reviewed, number flagged by category, highest-severity findings, and recommended immediate actions.

**Inventory Table**: Markdown table with columns — Vendor/Contractor | Account | Systems | Permission Level | Last Active | Risk Flag | Recommended Action

**Risk Summary Table**: Markdown table with columns — Risk Category | Count | % of Total | Priority

**Remediation Action Items**: Numbered list ordered by priority (Revoke → Downgrade → Re-justify → Scope-limit → Monitor), each item including: account name, system, reason flagged, and specific action with suggested timeline.

**Process Recommendations**: Bulleted list of 3–7 systemic improvements with brief rationale for each.

**Appendix — Clean Accounts**: List of accounts reviewed with no flags, confirming they were examined.

Target length: comprehensive enough to hand to a security or IT team for immediate action. Use tables for scannable data and plain language for recommendations.
