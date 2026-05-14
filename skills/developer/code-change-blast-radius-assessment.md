---
name: code-change-blast-radius-assessment
category: developer
description: >
  Analyzes a proposed code or schema change to map all downstream services, consumers, and data flows that could be affected, then quantifies the deployment risk. Use when someone says "what breaks if I change this", asks about the impact of a refactor, wants to assess deployment risk before merging, is considering a schema migration, or needs to understand who depends on a function or API.
tags: [impact-analysis, risk-assessment, dependency-mapping, refactoring, deployment]
author: community
---

# Code Change Blast Radius Assessment

This skill maps the full downstream impact of a proposed code or schema change and produces a structured risk report Claude uses before any significant refactor, API change, or data migration.

## Assessment Workflow

1. **Identify the change surface**: Extract the exact function signatures, API endpoints, database columns, types, or interfaces being modified. Note whether the change is additive, breaking, or behavioral.

2. **Trace direct consumers**: Search the codebase for all direct callers, importers, or references to the changed symbol. List each file, module, and service that directly depends on it.

3. **Trace transitive consumers**: For each direct consumer, identify what consumes *them*. Continue until the dependency chain terminates or reaches external boundaries (public APIs, message queues, client apps, third-party integrations).

4. **Identify data flow impact**: If the change touches a schema, payload shape, or serialization format, trace all read and write paths — including ETL pipelines, analytics queries, event consumers, and caches that may hold the old shape.

5. **Classify each affected component**:
   - **Critical**: Breaks at compile/type-check time or causes data loss
   - **High**: Runtime failures or incorrect behavior under normal usage
   - **Medium**: Edge-case failures, degraded functionality, or required config changes
   - **Low**: Cosmetic issues, logging changes, or easily auto-migrated dependencies

6. **Identify required remediation**: For each Critical and High item, specify the exact change needed — not just "update the caller" but the specific argument, return type, or schema field to fix.

7. **Flag external blast radius**: Call out any consumers outside the current repository — client SDKs, documented public APIs, partner integrations, or database consumers outside the application layer.

8. **Estimate deployment complexity**: Factor in whether changes can be rolled out incrementally (feature flags, versioned APIs, dual-write migrations) or require a coordinated cutover.

## Output Format

Produce a structured report with these sections:

**Change Summary**
- What is changing (one sentence, precise)
- Change type: Breaking / Non-breaking / Behavioral

**Blast Radius Map**
A table with columns: `Component | Type | Impact Level | Reason | Remediation Required`
List every affected file, service, or system. Group by: Direct Consumers → Transitive Consumers → Data / Storage Layer → External / Cross-repo.

**Risk Score**
- Overall deployment risk: Low / Medium / High / Critical
- Rationale: 2–3 sentences citing the count and severity of affected components

**Remediation Checklist**
Numbered list of every action required before safe deployment, ordered by dependency (fix A before B if B depends on A).

**Safe Deployment Path**
Recommend one of: Direct replace / Feature-flag rollout / Versioned parallel deployment / Multi-phase migration — with a brief reason why.

**Unverified Assumptions**
List any areas where full impact could not be determined from available code (e.g., dynamic dispatch, runtime config, external consumers not visible in the repo).
