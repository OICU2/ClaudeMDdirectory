---
name: environment-configuration-management
category: developer
description: >
  Designs and documents multi-environment configuration strategies covering secrets management, environment variable schemas, and safe defaults. Use when someone asks about managing configs across environments, wants to set up environment variables for their project, needs a secrets management strategy, is configuring dev/staging/production environments, or asks how to handle sensitive credentials safely.
tags: [configuration, environment-variables, secrets-management, devops, infrastructure]
author: community
---

# Environment Configuration Management

This skill designs and documents comprehensive multi-environment configuration strategies, producing environment variable schemas, secrets management policies, and environment-specific defaults for dev, staging, and production.

## Configuration Strategy Workflow

### 1. Audit Existing Configuration Needs
- Identify all application config points: database URLs, API keys, feature flags, service endpoints, timeouts, log levels
- Classify each value by sensitivity: public (safe to commit), internal (team-only), secret (never commit)
- Note which values differ across environments vs. which stay constant

### 2. Define the Environment Schema
For each config variable, document:
- **Name**: Use `SCREAMING_SNAKE_CASE` with a service prefix (e.g., `APP_DB_URL`, `STRIPE_SECRET_KEY`)
- **Type**: string, boolean, integer, enum
- **Required vs. optional**
- **Default value** per environment (or explicit "no default — must be set")
- **Description**: one-line explanation of purpose and expected format

### 3. Apply Environment-Specific Defaults
| Setting | Development | Staging | Production |
|---|---|---|---|
| Log level | `DEBUG` | `INFO` | `WARN` or `ERROR` |
| Debug mode | `true` | `false` | `false` |
| DB connection pool | small (2–5) | medium (10–20) | large (20–100) |
| External API calls | mock/sandbox | sandbox or real | real |
| Error detail exposure | full | partial | none |
| HTTPS enforcement | optional | required | required |

### 4. Design Secrets Management Strategy
Choose the appropriate tier based on project scale:
- **Local/solo**: `.env` file with `.gitignore`, provide `.env.example` with dummy values
- **Team/small org**: Secret manager service (AWS Secrets Manager, GCP Secret Manager, HashiCorp Vault, Doppler)
- **Enterprise**: Vault with dynamic secrets, rotation policies, and audit logging

Rules to enforce regardless of tier:
- Never commit secrets to version control — add pre-commit hooks (e.g., `detect-secrets`, `gitleaks`)
- Rotate secrets on: employee offboarding, suspected compromise, and scheduled intervals
- Use separate credentials per environment — never share production secrets with dev/staging
- Document who has access to production secrets and require approval for changes

### 5. Structure the File Layout
```
project/
├── .env.example          # Committed — all keys, no real values
├── .env.local            # Gitignored — developer overrides
├── .env.development      # Gitignored or managed — dev defaults
├── .env.staging          # Managed via secret manager
├── .env.production       # Managed via secret manager
└── config/
    └── schema.ts/.js     # Validated config schema with types
```

### 6. Implement Config Validation at Startup
- Use a validation library (Zod, Joi, Pydantic, envalid) to parse and validate all env vars at application start
- Fail fast with a clear error message listing every missing or invalid variable
- Never let the app start in an ambiguous config state

### 7. Document Rotation and Incident Procedures
- Define rotation schedule per secret type (API keys: 90 days, DB passwords: 30 days)
- Document the runbook for emergency secret rotation
- Set up alerting for secrets nearing expiry

## Output Format

Produce the following artifacts, clearly separated:

**1. Environment Variable Schema Table**
A markdown table with columns: Variable Name | Type | Required | Dev Default | Staging Default | Prod Default | Description

**2. `.env.example` File**
Complete file with all variable names, placeholder values, and inline comments explaining each variable's purpose and expected format.

**3. Secrets Management Recommendation**
2–4 sentences explaining which secrets management approach fits the project, why,
