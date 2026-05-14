---
name: ops-process-retirement-checklist
description: >
  Guides teams through the safe and complete decommissioning of obsolete operational processes. Use when someone says a process is being retired or deprecated, asks how to shut down an existing workflow, or wants to decommission a legacy procedure. Also triggers when someone needs to sunset an operational system or hand off responsibilities before a process ends.
category: operations
tags: [operations, decommissioning, process-management, documentation, stakeholder-communication]
author: community
---

# Process Retirement Checklist

This skill walks teams through every required step to safely retire an operational process, ensuring nothing is missed across documentation, handoffs, and stakeholder communication.

## Retirement Checklist Workflow

### 1. Identify and Scope the Process
- Name the process being retired and its unique identifier or owner
- Document the current purpose, frequency, and all systems it touches
- List every team, role, or external party that depends on or participates in this process
- Confirm the target retirement date and who has authority to approve retirement

### 2. Assess Dependencies and Risks
- Audit upstream inputs: what feeds data or triggers this process?
- Audit downstream outputs: what systems, reports, or teams consume results from this process?
- Identify any regulatory, compliance, or contractual obligations tied to this process
- Flag processes that cannot be retired without a replacement in place and document the replacement

### 3. Document the Current State
- Capture the full process map or SOP in its final state before retirement
- Record all credentials, access accounts, and system integrations involved
- Note known edge cases, exceptions, and tribal knowledge held by current owners
- Save all versions to the designated archive location (specify path or system)

### 4. Plan and Execute Handoffs
- Assign a named owner for each responsibility that will continue elsewhere after retirement
- Write explicit handoff notes for any tasks being absorbed by other processes
- Schedule and confirm handoff meetings with receiving teams
- Obtain written acknowledgment from each receiving owner that they accept responsibility

### 5. Communicate to Stakeholders
- Draft a retirement notice stating: process name, retirement date, reason for retirement, and what replaces it (if anything)
- Send notice to all identified stakeholders at least 10 business days before retirement
- Provide a point of contact for questions during the transition period
- Send a final confirmation notice on or after the retirement date

### 6. Archive and Close
- Move all process documentation to the designated archive folder with a `RETIRED-[DATE]` prefix
- Revoke or transfer system access tied to the process
- Remove or disable any automation, cron jobs, or scheduled tasks
- Update the process registry or inventory to mark the process as retired with the retirement date
- Close any open tickets, recurring calendar events, or standing meetings associated with the process

### 7. Post-Retirement Verification
- 30 days after retirement, confirm no unintended disruptions have surfaced
- Verify no orphaned dependencies are still pointing to the retired process
- Document any issues that arose and resolutions taken

## Output Format

Produce a structured retirement checklist document with the following sections:

**Process Retirement Record**
- Process Name and ID
- Retirement Date
- Approving Authority
- Reason for Retirement
- Replacement Process (or "None")

**Dependency Map** — bulleted list of upstream inputs and downstream consumers

**Handoff Summary** — table with columns: Responsibility | Receiving Owner | Handoff Date | Acknowledgment Status

**Stakeholder Notification Log** — table with columns: Stakeholder / Team | Contact | Notice Sent Date | Confirmation Received

**Archive Location** — full path or system reference where documentation is stored

**Checklist Status** — each of the 7 workflow steps listed above with a status: Complete / In Progress / Not Started and the name of the person responsible

**Open Issues** — any unresolved risks or blockers, each with an owner and target resolution date

Length: as long as needed to be complete; no truncation of tables or checklists. Format in Markdown.
