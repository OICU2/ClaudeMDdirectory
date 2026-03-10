---
name: continuous-deployment-systems
description: >
  Automates deployment pipelines that ship code to production safely and reliably. Use when someone says "set up a deployment pipeline," asks about "automating releases," wants to "deploy continuously," needs help with "CI/CD configuration," or is trying to "ship code to production automatically."
category: developer
tags: [ci-cd, deployment, automation, devops, pipelines]
author: community
---

# Continuous Deployment Systems

This skill designs and implements end-to-end CD pipelines that automate testing, building, and deploying code to production with safety gates and rollback capabilities.

## Pipeline Design Workflow

### 1. Assess the Deployment Context
- Identify the target platform (AWS, GCP, Azure, Kubernetes, bare metal, serverless)
- Determine the language/framework and existing CI tooling (GitHub Actions, GitLab CI, Jenkins, CircleCI)
- Clarify deployment targets: staging, canary, blue/green, or direct production
- Ask about rollback requirements, downtime tolerance, and approval gates

### 2. Define Pipeline Stages
Structure every pipeline with these mandatory stages in order:
1. **Source** — trigger on push/merge to main or tag creation
2. **Build** — compile, lint, run unit tests, generate artifacts
3. **Integration Tests** — spin up dependencies, run integration/e2e tests
4. **Security Scan** — SAST, dependency vulnerability checks (Snyk, Trivy, Semgrep)
5. **Artifact Publishing** — push Docker image, package, or binary to registry with immutable tag
6. **Deploy to Staging** — automated deployment with smoke tests
7. **Approval Gate** (optional) — manual sign-off or automated canary analysis
8. **Deploy to Production** — rolling update, blue/green swap, or canary promotion
9. **Post-Deploy Verification** — health checks, synthetic monitoring, alert suppression window

### 3. Implement Safety Mechanisms
- **Rollback triggers**: auto-rollback on health check failure within 5 minutes of deploy
- **Feature flags**: decouple deploy from release using LaunchDarkly, Unleash, or env vars
- **Canary analysis**: route 5–10% of traffic before full promotion; use error rate + latency thresholds
- **Deploy locks**: prevent concurrent deploys to the same environment
- **Immutable artifacts**: never rebuild — promote the exact artifact from staging to production

### 4. Write the Pipeline Configuration
- Use environment-specific variable injection (never hardcode secrets)
- Store secrets in Vault, AWS Secrets Manager, or GitHub/GitLab secrets
- Pin action/image versions to SHAs, not floating tags
- Cache dependencies aggressively to reduce build times
- Parallelize independent stages (lint, unit test, security scan)

### 5. Add Observability Hooks
- Emit deployment events to Datadog, Grafana, or PagerDuty
- Tag releases in APM tools with commit SHA and deployer identity
- Create deployment markers in dashboards for correlation with incidents
- Notify Slack/Teams on deploy start, success, and failure with diff links

### 6. Handle Common Scenarios

**Database migrations**: run migrations before deploying new code; use expand-contract pattern for zero-downtime schema changes

**Multi-service deploys**: use dependency ordering, deploy services in topological sort order

**Monorepos**: implement path-based filtering so only changed services trigger their pipelines

**Environment promotion**: artifacts flow staging → UAT → production; never redeploy from source

## Output Format

Produce the following artifacts, clearly labeled with headers:

1. **Pipeline Configuration File** — complete YAML for the chosen CI/CD platform (GitHub Actions, GitLab CI, etc.) with all stages, jobs, and conditions

2. **Deployment Script** — shell script or tool-specific config (Helm values, Terraform, deploy.sh) for the actual deployment step

3. **Rollback Procedure** — numbered steps for manual and automated rollback with exact commands

4. **Environment Variable Reference** — table listing all required secrets/vars, their purpose, and where to store them

5. **Checklist** — pre-launch verification items (permissions, registry access, health check URLs, alert thresholds)

Each section should be production-ready, not pseudocode. Include inline comments explaining non-obvious decisions. Flag any assumptions made about infrastructure with `