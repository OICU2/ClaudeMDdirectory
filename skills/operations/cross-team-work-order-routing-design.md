---
name: cross-team-work-order-routing-design
description: >
  Designs routing logic and escalation rules for work orders that span multiple teams or departments to reduce handoff delays and bottlenecks. Use when someone asks about work order handoffs, wants to reduce cross-team delays, needs to design routing rules for tickets or requests, is struggling with inter-departmental coordination, or wants to build escalation workflows for multi-team operations.
category: operations
tags: [routing, work-orders, escalation, workflows, coordination]
author: community
---

# Cross-Team Work Order Routing Design

This skill designs structured routing logic and escalation rules for work orders that touch multiple teams, reducing handoff friction and ensuring accountability at every stage.

## Routing Design Process

### 1. Identify Work Order Types and Ownership Boundaries
- List every work order category in scope (e.g., IT, facilities, procurement, maintenance)
- Define the primary owning team for each type
- Identify which types routinely require secondary or tertiary team involvement
- Flag any "gray zone" work orders where ownership is contested

### 2. Map Current Handoff Points
- Document each handoff step: who sends, who receives, what triggers the transfer
- Measure or estimate delay at each handoff (hours or days)
- Identify handoffs that lack a defined SLA or acknowledgment requirement
- Note any handoffs that bypass a team lead or require manual intervention

### 3. Define Routing Rules
For each work order type, specify:
- **Primary route**: default team assignment based on category, keywords, or request source
- **Conditional branches**: if X attribute is present, route to Y team instead
- **Parallel routing**: steps that can run simultaneously across teams (e.g., procurement + facilities)
- **Sequential gates**: steps that must complete before the next team is engaged
- **Auto-assignment criteria**: skill tags, geography, capacity thresholds, or time of day

### 4. Build Escalation Rules
Define escalation triggers and paths at three levels:
- **Level 1 — SLA breach warning**: notify assigned team lead when X% of allowed time has elapsed
- **Level 2 — Active escalation**: reassign or CC next-tier team/manager when SLA is missed by Y hours
- **Level 3 — Executive escalation**: alert senior stakeholder when work order is stalled beyond Z hours or has been reassigned more than N times
- Specify who receives escalation notifications and through what channel (email, ticketing system, Slack)

### 5. Handle Cross-Team Conflict and Ambiguity
- Designate a tiebreaker role (e.g., operations manager) for disputed ownership
- Create a "holding queue" with a defined SLA for work orders that cannot be immediately classified
- Document a reclassification process when a work order's scope expands after initial assignment

### 6. Define Accountability and Visibility Rules
- Each active work order must have one named owner at all times
- Status must be updated within N hours of a handoff
- All teams with a pending action must see the full work order history, not just their segment
- Define who can close, reopen, or escalate a work order

## Output Format

Produce a structured routing design document with the following sections:

**1. Work Order Taxonomy Table**
A table with columns: Work Order Type | Primary Team | Secondary Teams | Routing Trigger

**2. Routing Logic Flowchart (Text Representation)**
A numbered decision-tree outline showing branching conditions and team assignments for each major work order type

**3. Escalation Matrix**
A table with columns: Escalation Level | Trigger Condition (time/event) | Action Taken | Notified Parties | Channel

**4. Handoff Protocol Summary**
Bullet list of mandatory steps at each handoff: acknowledgment window, required status update, data passed to next team

**5. Ownership and Conflict Resolution Rules**
Short numbered list of rules covering disputed ownership, reclassification, and closure authority

**6. Implementation Notes**
3–5 bullet points flagging risks, prerequisites (e.g., ticketing system fields needed), and recommended rollout sequence

Total length: 400–700 words. Use tables where specified. Avoid prose-heavy explanations; prioritize scannable, actionable content.
