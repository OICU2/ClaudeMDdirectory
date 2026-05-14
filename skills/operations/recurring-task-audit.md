---
name: recurring-task-audit
description: >
  Inventories and evaluates all recurring operational tasks to identify redundancies, automation candidates, and opportunities to reallocate team effort. Use when someone says "we keep doing the same things manually," asks about reducing operational overhead, wants to audit their team's recurring work, needs to find tasks to automate, or is trying to free up capacity on their team.
category: operations
tags: [automation, productivity, operations, workflow, efficiency]
author: community
---

# Recurring Task Audit

This skill systematically inventories, scores, and categorizes recurring operational tasks so teams can eliminate waste, automate high-value targets, and redirect effort toward higher-impact work.

## Audit Workflow

### 1. Collect the Task Inventory
Ask the user to provide or describe their recurring tasks. If they don't have a list, prompt them with:
- What does your team do daily, weekly, monthly, and quarterly?
- What do you personally do that feels repetitive?
- What tasks would pile up if someone was out sick for a week?
- What reports, updates, or check-ins happen on a schedule?

Capture for each task:
- Task name and brief description
- Frequency (daily / weekly / monthly / quarterly / ad hoc)
- Estimated time per occurrence
- Who performs it (role or individual)
- What system or tool is involved
- What the output or purpose is

### 2. Score Each Task
Evaluate every task against four criteria, scoring each 1–3:

**Automation Potential (1=hard, 3=easy)**
- 3: Rule-based, structured data, no judgment required
- 2: Semi-structured, requires occasional review
- 1: Requires human judgment, creativity, or relationships

**Redundancy Risk (1=unique, 3=redundant)**
- 3: Overlaps significantly with another task or system
- 2: Partial overlap or unclear ownership
- 1: Clearly necessary and distinct

**Time Cost (1=low, 3=high)**
- Calculate: (minutes per occurrence × occurrences per month) / 60 = hours/month
- 3: >4 hours/month, 2: 1–4 hours/month, 1: <1 hour/month

**Strategic Value (1=high, 3=low)**
- 3: No direct link to team goals or business outcomes
- 2: Indirect or supporting value
- 1: Directly tied to key outcomes

### 3. Categorize Each Task
Using the scores, assign each task to one of four buckets:

- **Automate**: Automation Potential ≥ 2, Strategic Value ≥ 2 — invest in tooling
- **Eliminate**: Redundancy Risk = 3 or Strategic Value = 3 — stop doing it
- **Delegate or simplify**: Time Cost ≥ 2, Strategic Value ≤ 2 — reduce friction or reassign
- **Protect**: Strategic Value = 1 — keep and defend this time

### 4. Identify Quick Wins
Flag tasks that meet all three:
- Automation Potential = 3
- Time Cost ≥ 2
- Currently done manually with no tooling in place

These are immediate automation candidates. For each, suggest a specific tool or approach (e.g., Zapier, a cron job, a templated report, a Slack bot).

### 5. Surface Redundancies
Compare tasks across the inventory and flag:
- Two tasks that produce the same output from different sources
- Tasks where the output is never referenced or acted on
- Check-ins or status updates that duplicate information already in a tool

## Output Format

Produce a structured audit report with these sections:

**Summary**
- Total tasks inventoried
- Total estimated hours/month across all tasks
- Count per category (Automate / Eliminate / Delegate / Protect)
- Estimated hours/month recoverable if all Automate + Eliminate actions are taken

**Task Inventory Table**
Markdown table with columns: Task Name | Frequency | Hours/Month | Owner | Auto Score | Redundancy Score | Time Score | Value Score | Category

**Automate Candidates** (ranked by hours/month, highest first)
For each: task name, current time cost, recommended tool or approach, estimated implementation effort (low/medium/high)

**Eliminate Candidates**
For each:
