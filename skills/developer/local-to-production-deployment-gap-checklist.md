---
name: local-to-production-deployment-gap-checklist
description: >
  Analyzes a project and generates a structured checklist of environment-specific differences that must be resolved before promoting a local build to production. Use when someone says "we're ready to deploy to production," asks about "what's different between local and prod," or wants to "promote a build to production," needs to "go live with this feature," or is "preparing a production release." Covers secrets management, DNS/domain config, environment variables, scaling, logging, and infrastructure differences.
category: developer
tags: [deployment, production, checklist, devops, environment]
author: community
---

# Local-to-Production Deployment Gap Checklist

This skill generates a comprehensive, project-aware checklist of environment gaps and required resolutions before any local build is promoted to a production environment.

## Analysis Steps

1. **Scan project structure** — Identify framework, runtime, containerization (Docker, Compose), IaC files (Terraform, Pulumi, CDK), and CI/CD config (GitHub Actions, CircleCI, etc.).

2. **Identify environment variable usage** — Find all `.env`, `.env.local`, `.env.example`, and hardcoded config values. Flag any that differ between environments or are missing from production secrets stores.

3. **Check secrets management** — Look for hardcoded credentials, API keys, tokens, or connection strings. Confirm whether a secrets manager (Vault, AWS Secrets Manager, Doppler, etc.) is configured for production.

4. **Audit DNS and domain configuration** — Check for localhost URLs, hardcoded IPs, CORS origins, OAuth redirect URIs, and webhook endpoints that reference local or staging domains.

5. **Review database and storage config** — Identify local DB connections (localhost, SQLite, in-memory), migration state, seed data dependencies, and storage paths that won't exist in production.

6. **Assess scaling and resource limits** — Look for single-instance assumptions, missing health check endpoints, absent readiness/liveness probes, and hardcoded concurrency or memory limits.

7. **Inspect logging and observability** — Flag `console.log`/`print` debug output, missing structured logging, absent APM integration, and error tracking (Sentry, Datadog, etc.) not configured.

8. **Review security settings** — Check for debug mode flags, disabled TLS/HTTPS, permissive CORS (`*`), missing rate limiting, and HTTP-only cookies not set for production.

9. **Check build and dependency state** — Verify production build command differs from dev, dev dependencies aren't bundled, and asset minification/compression is enabled.

10. **Validate CI/CD pipeline completeness** — Confirm deployment pipeline runs tests, linting, security scans, and doesn't auto-deploy from local machine.

## Output Format

Produce a markdown checklist grouped into the following sections. Each item must be actionable and specific to the project — no generic placeholders.

```
# Local → Production Deployment Gap Checklist

## 🔐 Secrets & Credentials
- [ ] [Specific secret or key name] must be moved to [specific secrets store]
- [ ] ...

## 🌐 DNS & Domain Configuration
- [ ] CORS origin `http://localhost:3000` must be updated to `https://yourdomain.com`
- [ ] ...

## 🗄️ Database & Storage
- [ ] ...

## ⚙️ Environment Variables
- [ ] ...

## 📈 Scaling & Infrastructure
- [ ] ...

## 🔍 Logging & Observability
- [ ] ...

## 🔒 Security Hardening
- [ ] ...

## 🏗️ Build & Dependencies
- [ ] ...

## 🚀 CI/CD Pipeline
- [ ] ...

## ⚠️ Blockers (Must Resolve Before Deploy)
[List only the critical items that would cause immediate production failure]
```

- Each checklist item references specific files, variable names, or services found in the project
- The **Blockers** section surfaces only hard-stop issues (missing secrets, broken migrations, no HTTPS)
- Omit any section where no issues are found — do not include empty sections
- Add a one-line note after each item explaining the production risk if left unresolved
