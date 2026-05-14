---
name: process-step-ownership-assignment-builder
description: >
  Maps each step in a core operational process to a named owner, backup owner, and escalation contact to eliminate accountability gaps. Use when someone says "no one knows who owns this process," asks about assigning responsibility to process steps, or wants to build an ownership matrix for a workflow. Also triggers when someone needs to document who handles what in a recurring operation or wants to prevent tasks from falling through the cracks.
category: operations
tags: [ownership, accountability, process-mapping, raci, operations]
author: community
---

# Process Step Ownership Assignment Builder

This skill takes a described operational process and produces a structured ownership table that assigns a primary owner, backup owner, and escalation contact to every step, eliminating ambiguity about who is responsible when things go wrong or owners are unavailable.

## Workflow

1. **Collect process information**: Ask the user to describe the process by name and list its steps in sequence. If steps are vague, prompt for clarification on what triggers each step and what its completion looks like.

2. **Identify existing personnel**: Ask who is currently involved in the process (names, roles, or teams). If the user does not have names yet, use role placeholders (e.g., "Ops Lead," "Team Manager").

3. **Clarify ownership criteria**: Confirm whether ownership means execution responsibility, decision authority, or both. Note any constraints such as single points of failure, team size limits, or on-call rotations.

4. **Assign ownership to each step**:
   - **Primary Owner**: The person or role directly responsible for completing or overseeing the step.
   - **Backup Owner**: The person who covers when the primary is unavailable. Must be someone with sufficient context to act without a handoff briefing.
   - **Escalation Contact**: The person with decision-making authority if the step stalls, fails, or requires resources beyond the owner's control.

5. **Flag gaps**: Identify any steps where no suitable owner, backup, or escalation contact exists. Mark these explicitly as unresolved and suggest how to resolve them (hire, train, delegate up).

6. **Review for single points of failure**: If the same person appears as primary owner on more than 40% of steps, flag it and recommend redistribution.

7. **Confirm and finalize**: Present the draft table to the user for review before outputting the final version.

## Output Format

Produce a markdown table with the following columns:

| Step # | Step Name | Step Description | Primary Owner | Backup Owner | Escalation Contact | Notes |
|--------|-----------|------------------|---------------|--------------|-------------------|-------|

- **Step #**: Sequential number
- **Step Name**: Short label (3–6 words)
- **Step Description**: One sentence describing what happens and what done looks like
- **Primary Owner**: Name or role
- **Backup Owner**: Name or role
- **Escalation Contact**: Name or role
- **Notes**: Any flags (unresolved gap, single point of failure, dependency on another process)

After the table, include a **Summary** section with:
- Total steps covered
- Number of unresolved ownership gaps
- Names or roles flagged as single points of failure
- Recommended next actions (maximum 5 bullet points)

Length: table plus summary should fit in a single response. No preamble beyond a one-line context statement.
