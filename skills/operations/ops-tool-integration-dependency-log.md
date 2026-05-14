---
name: ops-tool-integration-dependency-log
description: >
  Documents how operational tools connect to one another and identifies critical integration points that would break if any single tool went offline. Use when someone says "map our tool dependencies," asks about "what breaks if X goes down," or wants to "document how our ops tools talk to each other." Also triggers when someone needs to "audit tool integrations" or wants to "log which tools depend on which."
category: operations
tags: [integrations, dependencies, operations, tooling, resilience]
author: community
---

# Ops Tool Integration Dependency Log

This skill maps operational tool interconnections, surfaces single points of failure, and produces a structured dependency log that teams can use for incident planning and toolchain audits.

## Dependency Mapping Workflow

1. **Inventory all tools**: Collect the full list of operational tools in scope (monitoring, alerting, CI/CD, ticketing, secrets management, logging, communication, etc.).

2. **Identify connection types for each tool pair**:
   - Data push (Tool A sends data to Tool B)
   - Data pull (Tool A reads from Tool B)
   - Auth dependency (Tool A requires Tool B for authentication)
   - Trigger/webhook (Tool A fires actions in Tool B)
   - Shared credential/secret store dependency

3. **Classify each integration by criticality**:
   - **Critical**: Integration failure causes immediate outage or data loss
   - **High**: Integration failure degrades core workflows within minutes
   - **Medium**: Integration failure causes manual workarounds within hours
   - **Low**: Integration failure is an inconvenience with no service impact

4. **Flag single points of failure (SPOFs)**: Any tool that, if removed, breaks three or more other integrations is a SPOF. Mark these explicitly.

5. **Document fallback state**: For each critical or high integration, note what happens in degraded mode — does the downstream tool fail silently, throw errors, queue, or halt completely?

6. **Assign ownership**: For each integration point, identify the team or person responsible for maintaining it.

## Output Format

Produce a structured log with three sections:

**Section 1 — Tool Inventory Table**
| Tool Name | Type | Owner | SPOF Risk |
|-----------|------|-------|-----------|
| (one row per tool) | | | Yes/No |

**Section 2 — Integration Dependency Matrix**
For each integration, one entry in this format:
```
Integration: [Tool A] → [Tool B]
Connection Type: [push/pull/auth/trigger/credential]
Criticality: [Critical / High / Medium / Low]
What breaks if Tool A goes offline: [specific, concrete description]
What breaks if Tool B goes offline: [specific, concrete description]
Fallback behavior: [queue / fail-open / fail-closed / manual workaround / none]
Owner: [team or person]
```

**Section 3 — Risk Summary**
- Bulleted list of all SPOFs with the count of dependent integrations
- Bulleted list of all Critical integrations with no documented fallback
- Recommended immediate actions, ordered by risk level

Total length scales with toolchain size: expect 1–2 paragraphs per integration plus the tables. Use plain text or Markdown; avoid diagrams unless explicitly requested.
