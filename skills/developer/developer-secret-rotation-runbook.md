---
name: developer-secret-rotation-runbook
description: >
  Generates a step-by-step runbook for safely rotating API keys, certificates, and secrets across services with zero downtime. Use when someone says "rotate my secrets", asks about "how to rotate an API key", wants to "update credentials without downtime", needs to "revoke and replace a certificate", or is dealing with "leaked or expired secrets".
category: developer
tags: [secrets, security, devops, credentials, runbook]
author: community
---

# Secret Rotation Runbook Generator

This skill produces a complete, service-specific runbook for rotating secrets, API keys, or certificates with zero downtime using a dual-secret overlap strategy.

## Rotation Workflow

### 1. Intake — Identify the Secret Type
Ask the user (or infer from context):
- **Secret type**: API key, OAuth token, database password, TLS certificate, SSH key, service account credential
- **Services affected**: Which apps, microservices, or infrastructure consume this secret
- **Storage location**: Where the secret lives today (env var, Vault, AWS Secrets Manager, Kubernetes secret, .env file, CI/CD variable)
- **Urgency**: Routine rotation, expired, or actively compromised/leaked

### 2. Pre-Rotation Checklist
Generate these steps before any changes:
- [ ] Identify all consumers of the secret (grep codebases, check CI/CD configs, audit cloud IAM policies)
- [ ] Confirm you have permission to generate a new secret at the source (API provider, CA, database admin)
- [ ] Verify rollback path exists (previous secret is still valid or can be re-issued)
- [ ] Set a maintenance window or confirm the overlap strategy allows live rotation
- [ ] Notify dependent teams if the secret is shared across team boundaries
- [ ] Create a snapshot or backup of current secret storage

### 3. Dual-Secret Overlap Strategy (Zero Downtime)
Apply this pattern for all live services:

**Step 1 — Generate new secret** without revoking the old one.
- Issue new API key / generate new cert / rotate DB password at the source
- Store the new secret in the secret manager alongside the old one (e.g., `MY_KEY_v2`)

**Step 2 — Deploy new secret to all consumers** while old secret remains active.
- Update each service's configuration to use the new secret
- For Kubernetes: update the Secret object, then trigger a rolling restart (`kubectl rollout restart deployment/<name>`)
- For Lambda/ECS: update the environment variable or Secrets Manager ARN reference, then redeploy
- For CI/CD: update the pipeline variable, then verify the next pipeline run succeeds

**Step 3 — Validate all consumers are using the new secret.**
- Check logs for authentication errors
- Run smoke tests or health checks against each affected service
- Confirm old secret is no longer appearing in active request headers or logs

**Step 4 — Revoke the old secret.**
- Delete or disable the old API key / expire the old certificate / remove old DB user or password
- Remove the old secret from all secret stores
- Document the revocation timestamp

### 4. Compromised Secret Fast Path
If the secret is actively leaked, compress steps:
1. **Immediately revoke** the old secret at the source — accept brief downtime if necessary
2. Generate and deploy the new secret as fast as possible
3. Audit logs for unauthorized usage during the exposure window
4. File an incident report with: secret type, exposure window, services affected, unauthorized usage found (yes/no)

### 5. Post-Rotation Checklist
- [ ] Confirm all services are healthy and authenticated with the new secret
- [ ] Old secret is fully revoked and removed from all stores
- [ ] Rotation event is logged in your audit trail or incident tracker
- [ ] Set a calendar reminder or automate the next rotation (recommended intervals: API keys 90 days, certs 30 days before expiry, DB passwords 180 days)
- [ ] Update your secret inventory/register with the new expiry date

## Output Format

Produce a **Markdown runbook document** with the following structure:

```
# Secret Rotation Runbook: [Secret Type] — [Service Name]
**Date:** [today's date]
**Urgency:** [Routine | Expired | Compromised]
**Estimated Time:** [X minutes]

## Affected Services
[
