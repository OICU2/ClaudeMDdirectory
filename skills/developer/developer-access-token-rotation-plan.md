---
name: developer-access-token-rotation-plan
description: >
  Creates a comprehensive, scheduled rotation plan for API keys, service tokens, and secrets including rollback procedures and notification steps. Use when someone says "I need to rotate my API keys," asks about token rotation strategy, wants to plan a secrets rotation cycle, needs to schedule credential refreshes, or is setting up a key rotation policy for their services.
category: developer
tags: [security, api-keys, secrets-management, rotation, credentials]
author: community
---

# Developer Access Token Rotation Plan

This skill generates a structured, step-by-step rotation plan for API keys, service tokens, and secrets with rollback procedures, stakeholder notifications, and scheduling guidance.

## Rotation Plan Workflow

### 1. Inventory & Scope Assessment
- List every credential type in scope: API keys, OAuth tokens, JWT secrets, database passwords, service account keys, certificates
- Identify the service/system each credential belongs to
- Note expiration dates, last-rotation dates, and criticality (P0/P1/P2)
- Flag credentials shared across multiple services (higher rotation risk)

### 2. Pre-Rotation Checklist
- Confirm all dependent services are documented
- Verify rollback mechanism exists (previous secret version stored in vault)
- Identify the maintenance window (low-traffic period)
- Notify stakeholders at least 48 hours in advance
- Confirm secret manager or vault is accessible (AWS Secrets Manager, HashiCorp Vault, GCP Secret Manager, etc.)
- Test deployment pipeline has access to inject new secrets

### 3. Rotation Execution Steps
For each credential:
1. **Generate** new credential in the issuing system (do not revoke old one yet)
2. **Store** new credential in the secrets manager under a versioned key
3. **Deploy** updated credential to all dependent services (rolling deploy if possible)
4. **Validate** each service is healthy post-deploy (check health endpoints, logs, error rates)
5. **Wait** a defined soak period (minimum 15 minutes for non-critical, 1 hour for P0 services)
6. **Revoke** the old credential only after all services confirm healthy

### 4. Rollback Procedure
- Keep the previous credential version active in the vault for the soak period
- If any service fails health check: immediately re-deploy using the previous secret version
- Document rollback trigger conditions (error rate spike >1%, latency increase >20%, explicit service failure)
- Rollback command template: re-point secret reference to prior version, trigger re-deploy, re-validate

### 5. Notification Plan
- **T-48h**: Email/Slack to engineering leads and on-call — rotation scheduled, scope, and maintenance window
- **T-1h**: Final reminder to on-call and service owners
- **T-0**: Rotation start notification in incident/ops channel with expected completion time
- **Post-rotation**: Completion notice with health summary and next scheduled rotation date

### 6. Rotation Schedule
- **High-sensitivity secrets** (payment APIs, auth secrets): every 30 days
- **Standard API keys**: every 90 days
- **Internal service tokens**: every 180 days
- **Certificates**: 30 days before expiration
- Set calendar reminders and automate rotation triggers where the platform supports it (e.g., AWS Secrets Manager automatic rotation Lambda)

### 7. Post-Rotation Documentation
- Log rotation date, who performed it, and which systems were updated
- Update the credential inventory spreadsheet or CMDB
- Record any incidents or near-misses encountered
- Schedule the next rotation in the calendar

## Output Format

Produce a **rotation plan document** with these sections:

```
## Credential Rotation Plan — [Service/Project Name]
**Date:** [Date]
**Rotation Window:** [Start – End time + timezone]
**On-call:** [Name/handle]

### Credentials In Scope
| Credential | Service | Criticality | Last Rotated | Next Due |
|---|---|---|---|---|

### Pre-Rotation Checklist
- [ ] Item 1
- [ ] Item 2
...

### Execution Steps (ordered, per credential)
1. Step with exact commands or vault paths where known

### Rollback Procedure
- Trigger condition: ...
- Rollback steps: ...

### Notification Timeline
- T-48h: ...
- T
