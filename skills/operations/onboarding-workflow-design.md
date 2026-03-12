---
name: onboarding-workflow-design
description: >
  Designs structured, repeatable onboarding workflows with task owners, deadlines, dependencies, and checkpoints for employees or clients. Use when someone says "help me onboard a new hire," asks about "setting up a client onboarding process," wants to "create an onboarding checklist," needs to "build an onboarding system," or asks "how do I structure onboarding for new team members."
category: operations
tags: [onboarding, workflow, operations, hr, client-success]
author: community
---

# Onboarding Workflow Design

This skill produces a complete, phased onboarding workflow with assigned owners, deadlines, task dependencies, and milestone checkpoints that can be reused across hires or clients.

## Workflow Design Process

1. **Clarify scope first** — Determine if this is employee or client onboarding, the role/client type, team size, and any existing tools (HRIS, CRM, project management software).

2. **Define phases** — Break onboarding into 3–5 named phases with clear time boundaries:
   - Pre-start/Pre-kickoff (before Day 1)
   - Day 1 orientation
   - Week 1 foundation
   - 30/60/90-day milestones (employee) or activation milestones (client)

3. **List tasks per phase** — For each task, specify:
   - Task name (action verb + object, e.g., "Send welcome packet")
   - Owner (role, not person name)
   - Due date or offset (e.g., "Day -3," "Day 1," "Week 2")
   - Dependencies (what must be completed first)
   - Completion criteria (what "done" looks like)

4. **Identify dependencies** — Flag tasks that block others. Mark with a dependency note (e.g., "Requires: system access provisioned").

5. **Set checkpoints** — Define 2–4 mandatory review points where a stakeholder confirms progress before the next phase begins. Include who reviews and what they verify.

6. **Add automation opportunities** — Note which tasks can be templated, automated, or triggered by a prior task completion.

7. **Include failure modes** — For each phase, note the most common breakdown point and a mitigation step.

## Output Format

Produce the following sections in order:

**Onboarding Workflow: [Type] — [Role or Client Segment]**

---

**Overview**
- Total duration: X days/weeks
- Phases: list phase names and date ranges
- Primary owner: [role]
- Tools required: [list]

---

**Phase-by-Phase Task Table**
For each phase, output a markdown table:

| Task | Owner | Due (Offset) | Depends On | Done When |
|------|-------|--------------|------------|-----------|

---

**Milestone Checkpoints**
Numbered list of checkpoints, each with:
- Checkpoint name
- Timing
- Who reviews
- Pass criteria
- What happens if not met

---

**Automation & Template Opportunities**
Bulleted list of tasks suitable for automation or templating, with suggested trigger.

---

**Common Failure Points**
One sentence per phase identifying the most likely breakdown and how to prevent it.

---

**Repeatable System Notes**
3–5 bullet points on how to standardize this workflow for future use (e.g., where to store it, how to assign it, when to review and update it).
