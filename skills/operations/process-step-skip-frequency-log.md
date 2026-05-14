---
name: process-step-skip-frequency-log
description: >
  Tracks how often specific steps in a standard workflow are bypassed and surfaces patterns that signal compliance gaps or training needs. Use when someone says "certain steps keep getting skipped," asks about why a process isn't being followed consistently, or wants to identify which workflow stages are most frequently bypassed. Also activates when someone needs to audit process adherence, report on procedural compliance, or investigate recurring shortcut behaviors across a team or time period.
category: operations
tags: [compliance, workflow, audit, process-tracking, training]
author: community
---

# Process Step Skip Frequency Log

This skill builds and analyzes a structured log of bypassed workflow steps, calculates skip rates per step, and flags patterns that indicate systemic compliance or training gaps.

## Step Logging and Analysis Workflow

1. **Define the baseline workflow** — Establish the complete ordered list of steps in the process being tracked. If not provided, ask the user to supply them before proceeding.

2. **Collect skip event data** — Gather raw data on skipped steps. Accept input in any of these forms:
   - A list of incidents with the step(s) skipped and a date or time period
   - A summary table of skip counts per step
   - A narrative description of observed behavior patterns

3. **Build the frequency log** — For each step in the workflow, record:
   - Step name and position in sequence
   - Total number of times skipped
   - Total number of times the step was applicable (opportunities)
   - Skip rate as a percentage (skips ÷ opportunities × 100)
   - Date range of the data

4. **Identify patterns** — Analyze the log for:
   - High-frequency skips: any step with a skip rate above 20%
   - Clustered skips: multiple adjacent steps skipped together consistently
   - Trend direction: skip rate increasing, decreasing, or stable over time
   - Role or team patterns if that data is available

5. **Classify each flagged step** — For every step with a notable skip rate, assign one of these root cause categories:
   - **Training Gap** — step is unclear, unknown, or misunderstood
   - **Compliance Gap** — step is known but deliberately bypassed
   - **Process Design Issue** — step is redundant, inaccessible, or impractical
   - **Data Insufficient** — not enough observations to classify

6. **Generate recommendations** — For each flagged step, produce one concrete next action tied to its classification (e.g., add to onboarding checklist, issue a policy reminder, redesign the step, collect more data).

## Output Format

Produce a structured report with these sections:

**1. Workflow Step Skip Frequency Table**
A table with columns: `Step #` | `Step Name` | `Times Skipped` | `Opportunities` | `Skip Rate (%)` | `Flag Status (Normal / Watch / Critical)`

Flag thresholds:
- Normal: < 10%
- Watch: 10–20%
- Critical: > 20%

**2. Pattern Summary**
3–6 bullet points describing the most significant patterns observed, including any clustered skips, trend direction, or role-specific behavior.

**3. Flagged Steps Detail**
For each Watch or Critical step, a short block containing:
- Step name and skip rate
- Suspected root cause category
- One specific recommended action

**4. Overall Compliance Score**
A single aggregate metric: average skip rate across all steps, with a one-sentence interpretation.

Keep the full report under 600 words excluding the table. Use plain language suitable for both operational managers and training coordinators.
