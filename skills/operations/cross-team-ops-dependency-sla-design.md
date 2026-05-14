---
name: cross-team-ops-dependency-sla-design
description: >
  Defines internal service level agreements for cross-functional dependencies to establish
  clear turnaround time expectations between operational teams. Use when someone says "we
  need to define response times between teams," asks about "inter-team dependency agreements,"
  wants to "formalize handoff expectations," is dealing with "unclear turnaround times between
  departments," or needs to "document operational commitments across functions."
category: operations
tags: [sla, operations, cross-functional, dependencies, service-agreements]
author: community
---

# Cross-Team Ops Dependency SLA Design

This skill creates structured internal SLA documents that define turnaround times, escalation paths, and accountability standards for dependencies between operational teams.

## SLA Design Workflow

### 1. Identify Dependency Relationship
- Name the **requesting team** (consumer) and **providing team** (owner)
- Define the specific service, deliverable, or action being governed
- Classify dependency type: data handoff, approval, resource provision, support request, or review

### 2. Define Scope and Triggers
- List the exact inputs that initiate the SLA clock (e.g., ticket submission, Slack message in designated channel, email with required fields)
- Specify out-of-scope scenarios explicitly to prevent ambiguity
- Document required information the requesting team must provide for the SLA to begin

### 3. Set Tiered Response Commitments
Establish at minimum three tiers:
- **P1 – Critical**: Define conditions, acknowledgment time (e.g., 1 hour), resolution target (e.g., 4 hours)
- **P2 – Standard**: Define conditions, acknowledgment time (e.g., 4 hours), resolution target (e.g., 2 business days)
- **P3 – Low/Planned**: Define conditions, acknowledgment time (e.g., 1 business day), resolution target (e.g., 5 business days)

### 4. Establish Escalation Path
- Define what constitutes an SLA breach (time threshold)
- Name escalation contacts by role (not individual name) at each level
- Specify escalation channel and required format

### 5. Define Exclusions and Pauses
- List conditions that pause the SLA clock (e.g., waiting on third-party, incomplete request, holiday schedule)
- State how pauses are communicated and logged

### 6. Set Measurement and Review Cadence
- Identify the tracking tool (Jira, ServiceNow, spreadsheet)
- Define reporting frequency (weekly, monthly)
- Set the SLA review cycle (quarterly recommended)
- Name the DRI (directly responsible individual) per team

## Output Format

Produce a structured SLA document with the following sections, in this order:

**Header block** (4 fields): SLA Name, Effective Date, Owner Teams, Version

**Section 1 — Purpose** (2–3 sentences): What this SLA governs and why it exists

**Section 2 — Scope** (bulleted list): What is covered, what is excluded, required inputs to start the clock

**Section 3 — Response Tiers** (table): Columns = Priority, Trigger Criteria, Acknowledgment Time, Resolution Target, Escalation Threshold

**Section 4 — Escalation Path** (numbered steps with role names and channel)

**Section 5 — SLA Pause Conditions** (bulleted list with communication requirement)

**Section 6 — Measurement & Governance** (tracking tool, reporting cadence, review cycle, DRI per team)

**Signature block**: Approver roles and date fields (no actual names)

Length: 400–700 words. Use tables where comparative data exists. Use bullets for lists of 3 or more items. No prose padding.
