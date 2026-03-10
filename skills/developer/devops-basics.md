---
name: devops-basics
description: >
  Teaches and applies core DevOps principles including CI/CD pipelines, containerization, infrastructure as code, and monitoring strategies. Use when someone asks about setting up a pipeline, wants to containerize an application, needs help with deployment automation, asks how CI/CD works, or wants to implement monitoring and observability for their services.
category: developer
tags: [devops, cicd, docker, kubernetes, monitoring]
author: community
---

# DevOps Basics

This skill explains and implements DevOps practices — CI/CD, containers, IaC, and monitoring — providing concrete configurations and workflows tailored to the user's stack.

## Core DevOps Workflow

### 1. Identify the Goal
Determine which DevOps domain is needed:
- **CI/CD**: Automating build, test, and deploy stages
- **Containers**: Packaging apps with Docker or managing clusters with Kubernetes
- **IaC**: Defining infrastructure with Terraform, Pulumi, or CloudFormation
- **Monitoring**: Logging, metrics, alerting with Prometheus, Grafana, Datadog, or CloudWatch

### 2. CI/CD Pipeline Rules
- Always include stages: `build → test → lint/scan → deploy`
- Use environment-specific secrets via the platform's secret store (GitHub Actions secrets, GitLab CI variables)
- Gate production deploys behind a manual approval step or passing test threshold
- Cache dependencies between runs to reduce build time
- Example triggers: push to `main` deploys to production; push to feature branches deploys to staging

### 3. Containerization Rules
- Base images must be minimal (prefer `alpine` or `distroless`)
- Never store secrets in a Dockerfile; use environment variables or secret mounts
- Always define a non-root USER in the Dockerfile
- Pin image versions explicitly — never use `latest` in production
- Multi-stage builds: one stage to compile/build, one stage for the final runtime image

### 4. Infrastructure as Code Rules
- All infrastructure changes go through version control
- Use remote state with locking (e.g., Terraform S3 + DynamoDB)
- Separate environments into distinct state files or workspaces
- Validate and plan before applying: `terraform validate && terraform plan`

### 5. Monitoring and Observability Rules
- Define the three pillars: **logs** (what happened), **metrics** (how much/how fast), **traces** (where time was spent)
- Set alerts on SLI/SLO thresholds, not just raw resource limits
- Always include a health check endpoint (`/health` or `/ready`) in every service
- Log in structured JSON format with fields: `timestamp`, `level`, `service`, `message`, `trace_id`

## Output Format

Responses must include:

1. **Explanation** (2–4 sentences): Why this approach is used and what problem it solves
2. **Configuration or Code Block**: A complete, working example — Dockerfile, GitHub Actions YAML, Terraform HCL, Prometheus config, etc. — with inline comments on non-obvious lines
3. **Key Decisions Highlighted**: A short bullet list (3–5 items) calling out choices made and why
4. **Next Step**: One concrete action the user should take immediately after applying the example

Use code blocks with explicit language tags (`yaml`, `dockerfile`, `hcl`, `bash`). Keep explanations tight — lead with the config, follow with context.