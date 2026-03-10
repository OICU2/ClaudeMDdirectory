---
name: task-management-systems
description: >
  Sets up and maintains task tracking systems to keep work organized and visible across projects. Use when someone says "I need to track my tasks," asks about organizing project work, wants to set up a todo system, needs to manage a backlog, or wants to keep their team aligned on what's in progress.
category: operations
tags: [task-tracking, project-management, organization, productivity, workflow]
author: community
---

# Task Management Systems

This skill designs and implements task tracking systems tailored to the user's workflow, team size, and tooling, then provides the structure and conventions needed to maintain them consistently.

## System Design Workflow

1. **Assess the context** — Ask or infer: Is this for one person or a team? What tools are available (GitHub Issues, Jira, Notion, plain markdown, spreadsheet)? What is the project type (software, ops, research, personal)?

2. **Choose a task model** — Select the simplest model that fits:
   - **Single list**: backlog → in progress → done (solo or small projects)
   - **Kanban board**: columns for each stage, WIP limits (teams, ongoing work)
   - **Sprint-based**: time-boxed buckets with backlog grooming (software teams)
   - **Priority matrix**: urgent/important quadrants (executive or ops roles)

3. **Define task anatomy** — Every task must have:
   - **Title**: action verb + object (e.g., "Write onboarding doc for new hires")
   - **Status**: one of a fixed set (Todo, In Progress, Blocked, Done)
   - **Owner**: person responsible (even if solo, write your name)
   - **Due date or priority**: at minimum a P1/P2/P3 label
   - **Context**: one-line description of why this matters

4. **Set up the system** — Produce the actual artifact:
   - For markdown: create a `TASKS.md` file with table or checklist format
   - For GitHub: provide label schema, issue template, and project board column names
   - For Notion/spreadsheet: define column headers and status options
   - For Jira: define issue types, workflow states, and field requirements

5. **Establish maintenance conventions** — Define:
   - How often to review/update (daily standup, weekly grooming)
   - How tasks get added (one intake point only)
   - How done tasks are archived (not deleted, dated and moved)
   - Who can change status and when

6. **Create a starter backlog** — If the user has described their work, generate 5–10 real tasks in the correct format to populate the system immediately.

## Output Format

Produce three sections:

**1. System Summary** (3–5 bullet points)
- Chosen model and rationale
- Tool being used
- Review cadence
- Ownership and intake rules

**2. The Artifact** (ready-to-use)
- A fully formatted `TASKS.md`, board setup, spreadsheet schema, or template — whichever fits the tool
- Include headers, columns, example tasks with real fields filled in
- Include status legend and priority definitions inline

**3. Quick-Start Checklist** (numbered, 5–8 steps)
- Exact actions the user takes in the next 30 minutes to go live
- Each step is one concrete action (create file, add label, share link, schedule review)