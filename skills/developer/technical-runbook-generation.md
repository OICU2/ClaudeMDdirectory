---
name: technical-runbook-generation
description: >
  Generates detailed, step-by-step operational runbooks for deploying, rolling back, or recovering a specific service. Use when someone says "create a runbook for," asks to "document the deployment process," wants to "write recovery procedures," needs to "generate rollback steps," or asks to "document operational procedures" for a service or system.
category: developer
tags: [runbook, devops, deployment, operations, documentation]
author: community
---

# Technical Runbook Generation

This skill produces structured operational runbooks for deployment, rollback, and disaster recovery procedures based on a service's architecture and deployment configuration.

## Runbook Generation Workflow

1. **Gather service context** — Identify the service name, tech stack, deployment target (Kubernetes, ECS, VM, bare metal, serverless), CI/CD tooling, and environment (dev/staging/prod).

2. **Identify runbook type** — Determine which runbook is needed:
   - **Deployment** — steps to release a new version
   - **Rollback** — steps to revert to a previous known-good state
   - **Incident Recovery** — steps to restore service after failure

3. **Extract dependencies** — Note databases, caches, message queues, external APIs, secrets managers, and load balancers the service interacts with.

4. **Define preconditions** — List what must be true before any steps begin (access permissions, health checks passing, backups confirmed, feature flags set).

5. **Write step-by-step procedures** — For each phase of the runbook:
   - Use imperative verb commands (`Run`, `Verify`, `Scale`, `Apply`, `Confirm`)
   - Include exact commands, flags, and file paths where known
   - Add expected output or success criteria after each step
   - Flag steps that require human judgment with `⚠️ MANUAL DECISION`
   - Flag destructive or irreversible steps with `🔴 DESTRUCTIVE`

6. **Add verification checkpoints** — After each major phase, include a health check or smoke test to confirm the system is in the expected state before proceeding.

7. **Define rollback triggers** — Specify observable failure conditions (error rate threshold, latency spike, failed health check) that should trigger an abort and rollback.

8. **Document escalation path** — Include on-call contacts, escalation policy, and links to dashboards, logs, and alert channels.

## Output Format

Produce a Markdown document with the following structure:

```
# Runbook: [Service Name] — [Deployment | Rollback | Recovery]

**Last Updated:** [date placeholder]
**Owner:** [team placeholder]
**Estimated Duration:** [X–Y minutes]
**Severity Impact:** [None | Low | Medium | High]

---

## Prerequisites
- [ ] Bullet list of required access, tools, and preconditions

## Environment Variables / Configuration
| Variable | Description | Source |
|----------|-------------|--------|
| ...      | ...         | ...    |

## Procedure

### Phase 1: [Phase Name]
**Goal:** One sentence describing what this phase achieves.

1. Step one with exact command
   ```bash
   example command --with-flags
   ```
   **Expected output:** what success looks like

2. Step two...

⚠️ MANUAL DECISION: Describe what operator must assess here.

### Phase 2: [Phase Name]
...

## Verification & Smoke Tests
- [ ] Check X endpoint returns 200
- [ ] Confirm metric Y is within normal range
- [ ] Validate Z log output contains expected entries

## Rollback Triggers
Abort and execute rollback if any of the following are observed:
- Condition A (e.g., error rate > 5% for 3 minutes)
- Condition B

## Rollback Procedure
(Link to or inline the rollback runbook steps)

## Escalation
- **Primary On-Call:** [placeholder]
- **Escalation:** [placeholder]
- **Dashboard:** [URL placeholder]
- **Logs:** [URL placeholder]
```

Runbooks must be complete enough that an on-call engineer unfamiliar with the service can execute them without additional context. Omit sections only if explicitly not applicable; do not leave them blank without explanation.
