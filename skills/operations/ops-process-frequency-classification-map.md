---
name: ops-process-frequency-classification-map
description: >
  Categorizes all operational processes by execution frequency to identify automation candidates and right-size staffing and scheduling investments. Use when someone says "we need to understand how often our processes run," asks about which tasks should be automated, or wants to audit operational workload distribution. Also triggers when someone mentions needing to optimize team scheduling, reduce manual effort, or map out recurring versus ad-hoc work.
category: operations
tags: [process-mapping, automation, scheduling, workflow-analysis, operations-efficiency]
author: community
---

# Ops Process Frequency Classification Map

This skill builds a structured frequency classification map of all operational processes so teams can prioritize automation, allocate staff correctly, and eliminate scheduling waste.

## Process Classification Workflow

1. **Collect Process Inventory**
   - Ask the user to list all operational processes, or extract them from any documentation, runbooks, or process lists provided
   - If the list is incomplete, prompt with categories: data pipelines, reporting, customer ops, infrastructure tasks, compliance checks, communications, approvals, and support workflows

2. **Assign Frequency Buckets**
   Classify each process into one of six buckets:
   - **Continuous** — runs in real time or near-real time (monitoring, streaming pipelines)
   - **Hourly** — triggers multiple times per day on a schedule
   - **Daily** — runs once or a few times per day
   - **Weekly** — runs 1–7 times per week
   - **Monthly** — runs 1–4 times per month
   - **Ad-hoc / On-demand** — triggered by events or requests, no fixed cadence

3. **Record Process Attributes**
   For each process, capture:
   - Process name
   - Owner or owning team
   - Current execution method (manual, semi-automated, fully automated)
   - Estimated time-per-execution (minutes or hours)
   - Volume of executions per month (calculated or estimated)
   - Pain points or known failure modes (if mentioned)

4. **Calculate Monthly Effort Load**
   Compute: `monthly_executions × time_per_execution = monthly_hours_per_process`
   Sum totals by frequency bucket and by team to show where effort concentrates.

5. **Flag Automation Candidates**
   Mark a process as an automation candidate if it meets any of these criteria:
   - Frequency is Daily, Hourly, or Continuous AND execution method is manual or semi-automated
   - Monthly effort load exceeds 4 hours AND the process is rule-based with low variability
   - The process has documented recurring failure modes or high error rates

6. **Flag Staffing and Scheduling Insights**
   - Processes that are Weekly or Monthly with high effort load → candidates for dedicated scheduled blocks or contractor augmentation
   - Ad-hoc processes with high volume → candidates for self-service tooling or intake queues
   - Continuous or Hourly processes that are manual → immediate escalation risk, flag as critical gaps

## Output Format

Produce the following three artifacts:

**1. Frequency Classification Table**
A markdown table with columns:
`Process Name | Frequency Bucket | Owner | Execution Method | Time/Execution | Monthly Executions | Monthly Hours | Automation Candidate (Y/N)`

Sort rows by Monthly Hours descending within each frequency bucket.

**2. Effort Load Summary**
A short summary table showing total monthly hours per frequency bucket and per team/owner. Highlight the top 3 effort concentrations.

**3. Prioritized Action List**
A numbered list of recommended actions, ordered by impact:
- Item format: `[Action Type] — Process Name — Rationale (1 sentence)`
- Action types: `AUTOMATE`, `SCHEDULE BLOCK`, `SELF-SERVICE TOOL`, `ELIMINATE`, `REVIEW OWNERSHIP`
- Include no more than 10 items; focus on highest-leverage changes

Keep all output in markdown. Do not add narrative padding between sections. If data is missing for any process, insert `TBD` and note what information is needed to complete the row.
