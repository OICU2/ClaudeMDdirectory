---
name: service-cold-start-latency-analysis
description: >
  Analyzes codebases and infrastructure configurations to identify functions or services with high cold start latency and recommends targeted initialization strategies to reduce startup time. Use when someone says their Lambda functions are slow to start, asks about reducing cold start times, wants to optimize serverless initialization, notices high p99 latency on first requests, or needs to improve service warm-up performance.
category: developer
tags: [performance, serverless, latency, optimization, cold-start]
author: community
---

# Service Cold Start Latency Analysis

This skill scans code, configuration files, and deployment settings to pinpoint cold start bottlenecks and produces a prioritized list of initialization optimizations.

## Analysis Workflow

1. **Identify the runtime and deployment model** — Determine if the service uses Lambda, Cloud Run, Azure Functions, containerized microservices, or JVM-based services. Each has distinct cold start profiles.

2. **Audit initialization code paths** — Scan for work happening at module/class load time vs. per-request time:
   - Global variable initialization that triggers heavy computation
   - Database or HTTP connections opened outside handler functions
   - Large imports or requires at the top level
   - Static initializers in JVM languages
   - SDK clients instantiated inside the handler instead of outside

3. **Check bundle and package size** — Large deployment packages extend cold starts. Flag:
   - Unused dependencies in `package.json`, `requirements.txt`, or `pom.xml`
   - Dev dependencies bundled into production artifacts
   - Unminified or unbundled JavaScript
   - Missing tree-shaking configuration

4. **Review memory and resource configuration** — For serverless functions, flag under-provisioned memory. Higher memory allocation increases CPU proportionally on AWS Lambda and reduces initialization time.

5. **Detect missing provisioned concurrency or warm-up strategies** — Check infrastructure-as-code (SAM, Serverless Framework, Terraform, CDK) for:
   - Absence of `ProvisionedConcurrencyConfig`
   - No scheduled warm-up pings or EventBridge rules
   - Missing keep-alive patterns for containers

6. **Identify heavy framework initialization** — Flag cold-start-unfriendly patterns:
   - Full Spring Boot/Hibernate context loaded on every cold start
   - ORMs scanning all models on first connection
   - Large ML model files loaded synchronously at startup

7. **Check for lazy initialization opportunities** — Identify resources that can be deferred until first use:
   - Connections that could use lazy singletons
   - Configuration fetches (SSM, Secrets Manager) that block startup
   - Schema validation or reflection-heavy operations

8. **Measure and baseline** — If observability data is available (CloudWatch, Datadog, X-Ray traces), extract:
   - Init duration vs. execution duration split
   - Cold start frequency relative to invocation rate
   - p50/p99 cold start times

## Output Format

Produce a structured report with the following sections:

**Cold Start Risk Summary**
- Runtime/platform detected
- Estimated cold start severity: Low / Medium / High / Critical
- Top 3 contributing factors (one line each)

**Findings Table**
| # | Location | Issue | Estimated Impact | Effort to Fix |
|---|----------|-------|-----------------|---------------|
| 1 | `src/handler.js:12` | DB client created inside handler | High | Low |

**Prioritized Recommendations**
For each finding, provide:
- **What**: specific change to make (include code snippet before/after when applicable)
- **Why**: how it reduces cold start time
- **Trade-offs**: any downside (cost, complexity, latency shift to warm path)

**Quick Wins** (changes implementable in under 1 hour)
- Bulleted list of the highest-impact, lowest-effort changes only

Keep the report under 600 words unless the codebase has more than 10 distinct findings. Use concrete file paths and line references wherever possible.
