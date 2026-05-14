---
name: service-queue-aging-escalation-trigger
description: >
  Defines threshold-based escalation rules for unresolved service queue items based on age, priority, or customer tier. Use when someone asks how to handle aging tickets, wants to set up automatic escalation rules, needs to define SLA breach thresholds, wants to know when queue items should be escalated, or is designing a service queue triage workflow.
category: operations
tags: [escalation, service-queue, sla, triage, automation]
author: community
---

# Service Queue Aging Escalation Trigger

This skill generates structured escalation rule sets for service queues, defining when and how unresolved items should be automatically escalated based on age, priority level, and customer tier.

## Escalation Rule Definition Workflow

### 1. Gather Queue Context
Identify the following before generating rules:
- Queue type (support tickets, incidents, service requests, complaints)
- Priority tiers in use (e.g., P1–P4, Critical/High/Medium/Low)
- Customer tiers if applicable (e.g., Enterprise, Pro, Standard, Free)
- Business hours vs. 24/7 coverage model
- Escalation targets (team lead, on-call engineer, account manager, etc.)

### 2. Define Age Thresholds Per Priority
Apply these baseline thresholds unless the user specifies otherwise:

| Priority | First Response SLA | Escalation Trigger | Hard Escalation |
|----------|-------------------|-------------------|-----------------|
| Critical | 15 minutes | 30 minutes unresolved | 1 hour |
| High | 1 hour | 4 hours unresolved | 8 hours |
| Medium | 4 hours | 24 hours unresolved | 48 hours |
| Low | 1 business day | 3 business days unresolved | 5 business days |

### 3. Apply Customer Tier Multipliers
Adjust thresholds based on customer tier:
- **Enterprise**: Use base thresholds as-is; escalate to dedicated account manager in parallel
- **Pro**: Apply 1.5× multiplier to base thresholds
- **Standard**: Apply 2× multiplier to base thresholds
- **Free**: Apply 3× multiplier; escalation target is queue manager only

### 4. Define Escalation Actions Per Stage
For each escalation stage, specify:
- **Stage 1 (Soft Escalation)**: Notify assigned agent + team lead via internal alert; tag ticket as "At Risk"
- **Stage 2 (Hard Escalation)**: Reassign ticket to escalation queue; notify department head; send customer acknowledgment
- **Stage 3 (Executive Escalation)**: Loop in VP or C-level stakeholder; initiate incident response if applicable; log in escalation register

### 5. Define Trigger Conditions Beyond Age
Include these non-age triggers:
- Customer sends 3+ follow-up messages without resolution → immediate Stage 2
- Sentiment detection flags frustration or churn risk → Stage 1 regardless of age
- Ticket reopened after closure within 24 hours → auto-escalate one priority level
- Regulatory or compliance flag on ticket → immediate Stage 2 with legal team CC

### 6. Document Exceptions and Overrides
- Allow agents to manually suppress escalation with a documented reason
- Define a cooldown period to prevent escalation spam (minimum 30-minute gap between alerts)
- Specify holiday/weekend handling (pause business-hour timers or apply on-call rules)

## Output Format

Produce a structured escalation rule document containing:

1. **Summary Table** — All priority levels with their first response, soft escalation, and hard escalation thresholds in a markdown table
2. **Customer Tier Adjustment Table** — Shows adjusted thresholds per tier with multipliers applied
3. **Escalation Stage Definitions** — Numbered list of stages with: trigger condition, action taken, notification targets, and ticket state change
4. **Non-Age Trigger List** — Bulleted list of behavioral or sentiment-based triggers with corresponding escalation stage
5. **Exception Rules** — Numbered list of override conditions, suppression rules, and edge case handling
6. **Implementation Notes** — 3–5 bullet points on how to encode these rules in a ticketing system (e.g., Zendesk, Jira Service Management, ServiceN
