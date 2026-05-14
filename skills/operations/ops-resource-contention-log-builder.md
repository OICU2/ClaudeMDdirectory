---
name: ops-resource-contention-log-builder
description: >
  Builds structured logs documenting recurring resource contention issues across concurrent operations. Use when someone says "we keep running into bottlenecks," asks about tracking shared resource conflicts, or wants to document why operations are stepping on each other. Also activates when someone mentions staff scheduling collisions, equipment availability conflicts, or system access queues causing delays.
category: operations
tags: [resource-management, bottlenecks, operations-logging, conflict-tracking, capacity-planning]
author: community
---

# Resource Contention Log Builder

This skill generates a structured, recurring-incident log that captures shared resource conflicts across concurrent operations so teams can identify patterns, prioritize fixes, and justify capacity investments.

## Resource Contention Log Workflow

1. **Identify the resource type** — Determine whether the contention involves staff (roles, individuals, teams), equipment (machines, vehicles, tools), or systems (software, databases, network bandwidth, credentials).

2. **Gather incident details** — For each contention instance, collect:
   - Date and time the conflict occurred
   - Operations or projects involved (at least two competing parties)
   - Specific resource being contested
   - Duration of delay or blockage caused
   - Who or what was waiting and who or what held the resource
   - Workaround used (if any)
   - Business impact (deliverable delayed, cost incurred, customer affected)

3. **Assign a severity rating** — Rate each incident on a 1–3 scale:
   - **1 – Low**: Minor delay, no external impact, resolved in under 30 minutes
   - **2 – Medium**: Measurable delay, internal schedule disruption, resolved same day
   - **3 – High**: Missed deadline, customer or revenue impact, required escalation

4. **Tag recurring patterns** — After logging three or more incidents, flag if the same resource appears repeatedly. Note frequency (daily, weekly, per sprint, per shift) and whether it concentrates around specific times, people, or project types.

5. **Record contributing factors** — Note root causes such as: no reservation system, single point of expertise, under-provisioned capacity, poor scheduling visibility, or overlapping project timelines.

6. **Capture resolution and prevention notes** — Document what was done to resolve the immediate conflict and any proposed long-term fix (hire, procure, schedule policy, access expansion).

## Output Format

Produce a contention log with two sections:

**Section 1 — Incident Table**
A markdown table with these columns:
`Incident ID | Date | Resource Type | Resource Name | Competing Operations | Duration of Delay | Severity (1–3) | Workaround Used | Business Impact`

Include one row per incident. Use sequential IDs (RC-001, RC-002, etc.).

**Section 2 — Pattern Summary**
A short bulleted analysis (4–8 bullets) covering:
- Which resources appear in more than one incident
- Time or project-phase concentrations
- Most common severity level and what it signals
- Top contributing factors identified across incidents
- Recommended priority actions ranked by frequency and severity

Total output length: scaled to number of incidents provided. Single incident = ~15 lines. Five or more incidents = full table plus complete pattern summary. Always end with a "Next Review Date" field and a "Recommended Escalation Threshold" note indicating at what frequency this resource should trigger a capacity review.
