---
name: workflow-design
description: >
  Designs efficient workflows that move work through a process with minimal friction and bottlenecks.
  Use when someone says "help me design a workflow," asks about "how should this process work," wants
  to "streamline how our team handles," needs to "map out the steps for," or says "we keep getting
  stuck when."
category: operations
tags: [workflow, process-design, operations, efficiency, systems]
author: community
---

# Workflow Design

Analyzes a work process and produces a structured, friction-minimized workflow with clear stages, handoffs, decision points, and failure modes — used whenever someone needs to design or redesign how work moves from start to completion.

## Workflow Design Process

1. **Clarify the scope**: Identify the trigger event (what starts the workflow), the desired end state (what "done" looks like), and the primary actors involved (people, systems, or teams).

2. **Map the current state**: If a process already exists, extract each step as stated. Note where delays, rework, or ambiguity currently live. If no process exists, define the logical sequence from trigger to completion.

3. **Identify decision points**: Find every fork in the process where the path changes based on a condition. Label each with a clear yes/no or categorical question (e.g., "Is approval required?").

4. **Define handoffs explicitly**: For each transition between actors or systems, specify what must be delivered, in what format, and who is responsible for confirming receipt.

5. **Eliminate friction**: Flag and resolve these anti-patterns:
   - Steps with no clear owner
   - Approvals that block progress without adding value
   - Duplicate data entry or redundant communication steps
   - Vague completion criteria ("review it" → "approve or return with written feedback within 24h")

6. **Add failure handling**: For each critical step, define what happens when it fails, stalls, or produces bad output. Include escalation paths and timeout rules.

7. **Sequence and number every step**: Assign a step number, owner role, action verb, and output to each node in the workflow.

## Output Format

Produce the following sections in order:

**Workflow: [Name]**
- Trigger: [what initiates this workflow]
- End state: [what completion looks like]
- Actors: [list of roles involved]

**Steps**
| # | Actor | Action | Output | Handoff To |
|---|-------|--------|--------|------------|
| 1 | Role  | Verb + object | Deliverable | Next actor |

**Decision Points**
List each fork as: `At step [N]: If [condition] → go to step [X]. If not → go to step [Y].`

**Failure Handling**
List each critical step with: `If step [N] fails or stalls → [action, escalation, or timeout rule].`

**Friction Removed**
Bullet list of specific changes made from the original process (or assumptions made if designing from scratch) and why each reduces friction.

Keep the steps table exhaustive but concise — one clear action per row. Total output should be scannable in under 3 minutes.
