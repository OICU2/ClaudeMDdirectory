---
name: ops-tool-access-audit
description: >
  Reviews all operational software tools to identify unused licenses, excessive permission grants, and access that no longer aligns with current team roles. Use when someone says "audit our tool access," asks about unused software licenses, wants to clean up who has access to what, needs to review permission levels across tools, or is concerned about offboarded employees still having active accounts.
category: operations
tags: [access-management, license-optimization, security, permissions, saas-tools]
author: community
---

# Tool Access Audit

This skill conducts a structured review of operational software tools to surface unused licenses, over-privileged accounts, and access misalignments — producing a prioritized action list for remediation.

## Audit Workflow

### 1. Gather Tool Inventory
Ask the user to provide or confirm:
- List of all SaaS and internal tools in use
- Number of paid seats or licenses per tool
- Rough headcount by team/department
- Date of last access review (if any)

### 2. Identify Access Data Sources
For each tool, determine where access records live:
- Admin dashboards (last login dates, role assignments)
- SSO provider logs (Okta, Google Workspace, Azure AD)
- HR system for current active employees
- Offboarding checklist records

### 3. Flag Unused Licenses
Identify accounts that are candidates for removal:
- No login in 60+ days
- Accounts belonging to terminated or transferred employees
- Duplicate accounts for the same user
- Guest or contractor accounts with expired engagements

### 4. Review Permission Levels
For each tool, compare assigned permissions against current job role:
- Admin access granted to non-admins or non-technical staff
- Write/edit access where read-only is sufficient
- Shared credentials or service accounts with no owner
- Permissions inherited from old team structures that no longer exist

### 5. Assess Role Alignment
Cross-reference access against current team structure:
- Users who changed roles but retained old tool access
- Entire teams with access to tools no longer relevant to their function
- Missing access for users who should have it based on current role

### 6. Prioritize by Risk and Cost
Score each finding by:
- **High priority**: Active access for offboarded users, admin over-grants, shared credentials
- **Medium priority**: Stale access for current employees, role mismatches
- **Low priority**: Unused licenses with no security risk, minor permission excess

## Output Format

Produce a structured audit report with the following sections:

**Summary**
- Total tools reviewed
- Total accounts flagged
- Estimated monthly license cost recoverable from removals

**Findings Table**
| Tool | Account/User | Issue Type | Last Active | Recommended Action | Priority |
|------|-------------|------------|-------------|-------------------|----------|
| ... | ... | Unused license / Excessive permission / Role mismatch | Date | Remove / Downgrade / Reassign | High/Med/Low |

**Top 5 Immediate Actions**
Numbered list of the highest-impact remediations to execute first, with the specific tool, the specific account or group, and the exact change to make.

**Remediation Checklist**
A copy-paste ready checklist grouped by tool, listing each account change needed — suitable for handing off to an IT admin or tool owner.

**Recommendations for Ongoing Hygiene**
3–5 specific process changes (e.g., quarterly access reviews, SSO enforcement, automated offboarding triggers) tailored to the tools and gaps identified.

Length: As long as the data requires. Do not truncate findings. Flag any tools where access data was unavailable and note what data is needed to complete that portion of the audit.
