---
name: ops-lessons-learned-repository-builder
description: >
  Structures raw post-incident and post-project debrief notes into a searchable, tagged lessons-learned repository with root causes, corrective actions, and assigned outcome owners. Use when someone says "we just had an incident and need to document what happened," asks to "turn our retrospective notes into something reusable," wants to "build a lessons-learned database from our postmortems," needs to "organize our debrief findings so the team can search them later," or wants to "track corrective actions from our project retrospectives."
category: operations
tags: [postmortem, retrospective, incident-management, knowledge-management, corrective-actions]
author: community
---

# Ops Lessons-Learned Repository Builder

This skill transforms unstructured post-incident or post-project debrief notes into consistently formatted, searchable repository entries with tagged root causes, corrective actions, and named outcome owners.

## Workflow

### 1. Intake and Clarification
- Accept raw input in any form: meeting notes, Slack threads, bullet points, narrative prose, or structured postmortems.
- If critical fields are missing, ask targeted questions before proceeding:
  - What was the incident/project name and date?
  - What was the measurable impact (downtime, cost, scope creep, etc.)?
  - Who owns each corrective action?
  - Has a target resolution date been set?
- Do not guess ownership or dates — flag them as `[UNASSIGNED]` if not provided.

### 2. Root Cause Extraction
- Identify all contributing root causes from the notes.
- Classify each root cause using one of these canonical categories:
  - `process-gap` — missing or unclear procedure
  - `tooling-failure` — system, software, or infrastructure fault
  - `human-error` — miscommunication, oversight, or incorrect action
  - `external-dependency` — third-party or vendor failure
  - `knowledge-gap` — missing documentation or training
  - `scope-creep` — uncontrolled requirement changes
- Apply the "5 Whys" framing if the notes only describe symptoms rather than causes — explicitly note when root cause is inferred vs. stated.

### 3. Corrective Action Structuring
- Extract or derive corrective actions for each root cause.
- For each action, capture:
  - Action description (specific, verb-led: "Implement X," "Document Y," "Schedule Z")
  - Owner (name or role)
  - Due date or sprint target
  - Status: `open`, `in-progress`, `completed`, `deferred`
- Flag vague actions (e.g., "improve communication") and rewrite them as measurable tasks.

### 4. Tagging and Metadata
- Generate searchable tags covering:
  - System or service affected (e.g., `payment-service`, `onboarding-flow`)
  - Incident type (e.g., `outage`, `data-loss`, `missed-deadline`, `security`)
  - Root cause categories applied
  - Team or squad involved
- Assign a severity level: `critical`, `high`, `medium`, `low`
- Generate a unique entry ID using format: `LL-YYYY-MM-[sequential or slug]`

### 5. Repository Entry Creation
- Produce one complete repository entry per incident or project debrief.
- If notes cover multiple distinct incidents, produce one entry per incident.

## Output Format

Produce a structured Markdown entry using this exact template:

```markdown
## Lessons-Learned Entry

**ID:** LL-YYYY-MM-[slug]
**Title:** [Descriptive incident or project name]
**Date of Incident/Project:** YYYY-MM-DD
**Date Documented:** YYYY-MM-DD
**Severity:** [critical | high | medium | low]
**Tags:** [comma-separated list]
**Reported By:** [name or role]

---

### Summary
[2–4 sentences describing what happened, when, and the measurable impact.]

---

### Timeline (if applicable)
| Time | Event |
|------|-------|
| HH:MM | [Event description] |

---

### Root Causes

| # | Root Cause Description | Category | Inferred or Stated |
|---|------------------------|----------|--------------------|
| 1 |
