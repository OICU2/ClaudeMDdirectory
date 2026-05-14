---
name: service-demand-spike-response-plan
description: >
  Builds a step-by-step operational response playbook for handling sudden demand surges across staffing, tooling, and communication channels. Use when someone says "we're getting slammed with traffic," asks about handling a surge in orders or requests, or wants to prepare for a flash sale, viral event, or unexpected load spike. Also activates when someone needs to define escalation triggers or wants a team response plan for capacity overload scenarios.
category: operations
tags: [incident-response, capacity-planning, escalation, playbook, operations]
author: community
---

# Service Demand Spike Response Plan

This skill generates a structured, role-specific operational playbook for responding to sudden demand surges, covering detection thresholds, staffing escalation, tooling actions, and communication protocols.

## Response Plan Construction Steps

### 1. Gather Context (Ask if Not Provided)
Before building the plan, collect:
- **Service type**: e-commerce, SaaS platform, support queue, physical fulfillment, API, etc.
- **Baseline capacity**: normal load metrics (orders/hour, requests/sec, tickets/day)
- **Spike definition**: what % or absolute increase counts as a spike (e.g., 2x normal, 10k concurrent users)
- **Team size and roles**: who is on-call, who can be pulled in, and their responsibilities
- **Existing tooling**: monitoring stack, autoscaling setup, communication tools (PagerDuty, Slack, etc.)

### 2. Define Spike Tiers
Create three escalation tiers based on severity:

| Tier | Threshold | Response Time | Owner |
|------|-----------|---------------|-------|
| **Yellow** | 1.5x–2x baseline | 15 min | On-call engineer / team lead |
| **Orange** | 2x–4x baseline | 5 min | Engineering + Ops + Support managers |
| **Red** | 4x+ baseline or SLA breach | Immediate | Executive escalation + all hands |

Adjust thresholds to match the user's baseline and risk tolerance.

### 3. Build the Step-by-Step Response Playbook

**Detection & Triage (T+0 to T+5 min)**
- Identify the trigger: monitoring alert, customer report, or manual observation
- Confirm spike is real (not a monitoring anomaly): cross-check at least 2 data sources
- Classify tier (Yellow / Orange / Red) using defined thresholds
- Assign incident commander — single person owns coordination

**Immediate Stabilization (T+5 to T+15 min)**
- Enable autoscaling rules or manually scale compute resources
- Activate rate limiting or queue throttling if overload risk is critical
- Disable or defer non-essential background jobs consuming resources
- Check third-party dependencies (payment gateways, CDNs, APIs) for their own degradation

**Staffing Escalation**
- **Yellow**: Notify on-call; no additional staff pulled
- **Orange**: Page team leads; put support, ops, and engineering on standby; activate overflow staffing protocol (contractors, cross-trained staff)
- **Red**: Activate full incident team; pull in senior engineers; notify executives; open a war room (virtual or physical)

**Tooling Actions by Role**
- *Infrastructure/DevOps*: Scale up pods/instances, purge CDN cache if stale, enable circuit breakers
- *Engineering*: Hot-patch known bottlenecks, disable feature flags for expensive features, increase DB connection pool limits
- *Support*: Activate canned responses for common spike-related issues, increase chat/phone staffing, set queue expectations
- *Product/Leadership*: Draft customer-facing status page update, decide whether to throttle new signups or purchases

**Communication Escalation Protocol**
- **Internal**: Post spike status in dedicated incident Slack channel every 15 minutes; use structured format: [Time] | [Tier] | [Current Load] | [Actions Taken] | [Next Check-in]
- **External**: Post status page update within 10 minutes of Orange or Red declaration; do not speculate on cause; commit only to confirmed facts
- **Executive**: Brief via Slack DM or call at Orange; daily summary at Red resolution

### 4. Resolution & Recovery Criteria
Define explicit "all clear" conditions:
- Load returns to 
