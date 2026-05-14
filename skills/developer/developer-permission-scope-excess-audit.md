---
name: developer-permission-scope-excess-audit
category: developer
description: >
  Reviews IAM roles, API keys, and service account permissions assigned to developers and flags any scopes that exceed least-privilege requirements. Use when someone says "audit my permissions," asks about overprivileged accounts, wants to check if their IAM roles are too broad, needs to find excessive API key scopes, or is preparing for a security review of developer access. Produces a structured report of violations with remediation steps.
tags: [security, iam, permissions, least-privilege, audit]
author: community
---

# Developer Permission Scope Excess Audit

This skill analyzes IAM roles, API keys, and service account configurations to identify permissions that exceed what developers actually need, then produces a prioritized remediation plan.

## Audit Workflow

### 1. Collect Permission Inventory
Request or accept the following inputs:
- IAM role bindings (JSON/YAML exports from AWS IAM, GCP IAM, Azure RBAC, or similar)
- API key scopes (OAuth scopes, AWS API Gateway key policies, etc.)
- Service account assignments and their attached policies
- The developer's actual job function or team role (e.g., "frontend engineer," "data analyst")

### 2. Identify the Blast Radius
For each principal (user, service account, API key):
- List all attached policies, roles, and inline permissions
- Identify the resource scope (specific ARN/resource vs. wildcard `*`)
- Note any `AdministratorAccess`, `Owner`, `Editor`, or equivalent catch-all roles
- Flag cross-account or cross-project access grants

### 3. Apply Least-Privilege Rules
Flag a permission as excessive if it meets any of these conditions:
- **Wildcard resources**: Policy applies to `*` where a specific resource ARN is feasible
- **Write access without write need**: Developer role is read-only but has `Create`, `Update`, `Delete`, `Put`, or `Write` actions
- **Admin roles on non-admin principals**: Any `*Admin*`, `Owner`, `FullAccess`, or `Editor` role on a non-infrastructure account
- **Unused high-risk permissions**: Permissions for services the team does not use (e.g., `iam:*`, `kms:*`, `secretsmanager:*` for a frontend developer)
- **Overly broad API key scopes**: OAuth scopes like `https://www.googleapis.com/auth/cloud-platform` when only `bigquery.readonly` is needed
- **Stale elevated access**: Temporary elevated roles (break-glass, incident response) without expiration policies

### 4. Cross-Reference Against Role Baseline
Map each developer's permissions against a least-privilege baseline by role type:
- **Frontend/UI developer**: Read-only on CDN, storage buckets, and CI/CD logs; no database write; no IAM
- **Backend developer**: Read/write on assigned services only; no IAM; no billing; no cross-environment access
- **Data analyst**: Read-only on designated datasets; no compute provisioning; no secrets access
- **DevOps/SRE**: Scoped infrastructure access per environment; no production write without MFA + approval
- If no baseline is provided, flag any permission not directly traceable to a stated job function

### 5. Prioritize Findings
Assign severity:
- **Critical**: Admin/Owner roles, wildcard `*` on sensitive services (IAM, KMS, Secrets), cross-account admin
- **High**: Write access to production resources not required by role, `iam:PassRole`, `sts:AssumeRole` without conditions
- **Medium**: Wildcard resources on non-sensitive services, access to unused AWS/GCP services
- **Low**: Deprecated permissions, redundant role assignments, missing permission boundaries

## Output Format

Produce a structured audit report with the following sections:

```
## Permission Scope Excess Audit Report

**Principal Audited:** [name/email/service account ID]
**Date:** [date]
**Overall Risk Level:** [Critical / High / Medium / Low]

---

### Summary
- Total permissions reviewed: [N]
- Excessive permissions found: [N]
- Critical findings: [N] | High: [N] | Medium: [N] | Low: [N]

---

### Findings

#### [CRITICAL/HIGH/MEDIUM/LOW
