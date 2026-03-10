---
name: workflow-monitoring
description: >
  Monitors active workflows to detect errors, delays, and performance degradation in real time.
  Use when someone says "check my workflows," asks about workflow health, wants to investigate
  slow or failing pipelines, needs to audit running processes, or reports that something in their
  automation seems broken or stuck.
category: operations
tags: [workflow, monitoring, performance, errors, automation]
author: community
---

# Workflow Monitoring

Analyzes active workflows for errors, delays, and performance issues, then surfaces actionable findings with severity context.

## Monitoring Workflow

1. **Identify scope** — Determine which workflows to inspect: all active, a specific pipeline, a time range, or a named process.
2. **Collect status data** — Pull current state for each workflow: running, paused, failed, completed, or stuck.
3. **Check for errors** — Identify any workflows in a failed or error state. Log the error type, timestamp, last successful step, and failure message.
4. **Detect delays** — Compare actual duration against expected or historical baseline. Flag workflows exceeding threshold by >20%.
5. **Assess performance** — Look for resource contention, retry storms, queue backlog, or abnormal step durations.
6. **Classify severity** — Assign each issue a severity level:
   - **Critical** — Workflow failed, data loss risk, or blocking downstream processes
   - **Warning** — Delayed beyond threshold, retrying repeatedly, or degraded throughput
   - **Info** — Minor anomaly, no immediate impact
7. **Identify root cause** — For each flagged issue, trace to the likely origin: bad input, dependency failure, resource exhaustion, code error, or timeout.
8. **Recommend action** — Provide a concrete next step for each issue (restart, investigate logs, increase timeout, notify owner, etc.).

## Output Format

Produce a structured monitoring report with the following sections:

**Summary**
- Total workflows checked
- Count by status (running / failed / delayed / healthy)
- Critical issues count

**Issues Found** (one block per issue)
```
Workflow: [name or ID]
Status: [Failed | Delayed | Degraded]
Severity: [Critical | Warning | Info]
Duration: [actual] vs [expected]
Last successful step: [step name]
Error: [error message or description]
Root cause: [brief diagnosis]
Action: [specific recommended fix]
```

**Healthy Workflows**
- List names/IDs with average duration if notable

**Overall Health Score**
- Simple rating: Healthy / At Risk / Degraded / Critical
- One sentence summary of system state

Keep the report scannable. Use plain text or markdown tables. Omit healthy workflows from the issues section. Lead with critical items.