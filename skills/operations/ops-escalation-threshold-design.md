---
name: ops-escalation-threshold-design
description: >
  Defines quantitative triggers and thresholds that automatically escalate operational issues to the appropriate team or decision-maker before they become critical failures. Use when someone asks how to set up escalation rules, wants to define alert thresholds for their system, or needs to design an on-call escalation policy. Also activates when someone says "we keep missing incidents" or wants to build a runbook with automatic escalation logic.
category: operations
tags: [escalation, thresholds, alerting, incident-management, on-call]
author: community
---

# Ops Escalation Threshold Design

This skill produces a structured escalation threshold framework — including specific numeric triggers, severity tiers, responsible parties, and timing windows — for any operational system or service.

## Escalation Threshold Design Workflow

### 1. Capture System Context
Before defining thresholds, establish:
- **What system/service** is being monitored (API, database, pipeline, infrastructure, etc.)
- **Current pain point**: Are incidents missed, responded to too slowly, or over-escalated?
- **Team structure**: Who is on-call, who is the secondary, who is the decision-maker (manager/director)?
- **Existing tooling**: PagerDuty, OpsGenie, Datadog, Grafana, custom webhook, etc.

If any of these are missing, ask before proceeding.

---

### 2. Define Severity Tiers
Map every threshold to exactly one severity tier. Use this standard four-tier model unless the user specifies otherwise:

| Tier | Label | Business Impact | Default Response Time |
|------|-------|-----------------|----------------------|
| S1 | Critical | Revenue loss, full outage, data loss | Immediate (< 5 min) |
| S2 | High | Significant degradation, partial outage | < 15 min |
| S3 | Medium | Degraded performance, non-blocking errors | < 1 hour |
| S4 | Low | Informational, no user impact | Next business day |

---

### 3. Set Quantitative Thresholds Per Signal Type
For each relevant signal, define thresholds at S1–S3 levels. Use these baseline templates:

**Latency**
- S3: p99 > 500ms for 5 consecutive minutes
- S2: p99 > 1s for 3 consecutive minutes
- S1: p99 > 3s for 2 consecutive minutes OR p50 > 1s

**Error Rate**
- S3: Error rate > 1% over 10-minute rolling window
- S2: Error rate > 5% over 5-minute rolling window
- S1: Error rate > 15% over 2-minute rolling window

**Availability / Uptime**
- S3: Success rate < 99.5% over 15 minutes
- S2: Success rate < 98% over 5 minutes
- S1: Success rate < 95% over 2 minutes

**Queue Depth / Backlog**
- S3: Queue depth > 2× baseline for 10 minutes
- S2: Queue depth > 5× baseline for 5 minutes
- S1: Queue depth growing for 3 consecutive 1-minute intervals with no drain

**CPU / Memory**
- S3: > 75% sustained for 15 minutes
- S2: > 90% sustained for 5 minutes
- S1: > 95% sustained for 2 minutes OR OOM kill detected

**Disk / Storage**
- S3: > 70% capacity
- S2: > 85% capacity
- S1: > 95% capacity OR write failure detected

Adjust baselines to the user's system. Always ask for actual SLA targets if available.

---

### 4. Build the Escalation Ladder
Define who gets notified at each severity tier and when re-escalation triggers.

**Escalation ladder rules:**
1. **Initial alert** fires to primary on-call when threshold is crossed.
2. **Re-escalation** triggers if no acknowledgment within the defined window.
3. **Secondary escalation** goes to secondary on-call or team lead.
4. **Executive escalation** fires if S1 is not acknowledged or resolved within 15 minutes.
5. **All-clear notification**
