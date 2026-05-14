---
name: secrets-management-setup
description: >
  Designs a secure secrets management workflow to eliminate hardcoded credentials, API keys, and passwords across all environments. Use when someone says "we have hardcoded credentials," asks about "managing secrets securely," wants to "set up Vault or AWS Secrets Manager," needs to "rotate credentials automatically," or is trying to "remove secrets from source code."
category: developer
tags: [secrets, security, vault, aws, credentials, devops]
author: community
---

# Secrets Management Setup

This skill designs and implements a complete secrets management workflow using tools like HashiCorp Vault or AWS Secrets Manager, replacing hardcoded credentials with secure, auditable, and rotatable secret references.

## Secrets Management Workflow

### 1. Audit Existing Secrets
- Scan codebase for hardcoded credentials using tools like `git-secrets`, `truffleHog`, or `gitleaks`
- Catalog all secret types: API keys, DB passwords, TLS certs, OAuth tokens, service account keys
- Identify which environments (dev/staging/prod) use which secrets
- Flag any secrets already committed to git history (require rotation immediately)

### 2. Choose the Right Tool
Select based on infrastructure:
- **AWS Secrets Manager** — AWS-native apps; supports automatic rotation for RDS, Redshift, DocumentDB
- **HashiCorp Vault** — Multi-cloud or on-prem; fine-grained policies, dynamic secrets
- **Azure Key Vault** — Azure-native workloads
- **GCP Secret Manager** — GCP-native workloads
- **Doppler / 1Password Secrets Automation** — Simpler setups or smaller teams

### 3. Define Secret Hierarchy
Structure secrets by path/namespace:
```
{env}/{service}/{secret-name}
# e.g., prod/payments-api/stripe-secret-key
#       staging/auth-service/jwt-secret
```
Separate secrets per environment. Never share prod secrets with lower environments.

### 4. Implement Access Control
- Use IAM roles / service accounts (not static credentials) to grant app access
- Apply least-privilege: each service accesses only its own secrets
- For Vault: define policies per service, use AppRole or Kubernetes auth
- For AWS: use IAM policies scoped to specific secret ARNs
- Enforce MFA for human access to production secrets

### 5. Integrate with Applications
Replace hardcoded values with dynamic retrieval:

**AWS Secrets Manager (Python example):**
```python
import boto3, json
client = boto3.client('secretsmanager', region_name='us-east-1')
secret = json.loads(client.get_secret_value(SecretId='prod/payments-api/stripe-secret-key')['SecretString'])
```

**Vault (environment injection via agent):**
```hcl
# vault-agent-config.hcl
template {
  contents = "{{ with secret \"secret/prod/db\" }}{{ .Data.data.password }}{{ end }}"
  destination = "/app/config/db_password"
}
```

**Environment variable injection** (preferred for 12-factor apps):
- Use Vault Agent, AWS Parameter Store + `chamber`, or Doppler CLI to inject secrets as env vars at runtime
- Never write secrets to disk in plaintext

### 6. Enable Secret Rotation
- AWS Secrets Manager: enable automatic rotation with Lambda rotation functions
- Vault: use dynamic secrets (generates short-lived credentials per request) for databases, AWS, SSH
- Set rotation schedules: every 30–90 days for long-lived secrets
- Test rotation in staging before enabling in prod

### 7. Set Up CI/CD Integration
- Store CI/CD secrets (GitHub Actions, GitLab CI, etc.) in the secrets manager, not in platform UI
- Use OIDC federation to grant CI runners short-lived tokens (no static keys)
- Example: GitHub Actions → AWS OIDC → IAM role → Secrets Manager (zero static credentials)

### 8. Audit and Monitoring
- Enable CloudTrail / Vault audit logs for all secret access
- Alert on: unusual access patterns, failed auth attempts, access outside business hours
- Review access logs monthly; revoke unused permissions

### 9. Eliminate Secrets from Git
- Add `.env` to `.git
