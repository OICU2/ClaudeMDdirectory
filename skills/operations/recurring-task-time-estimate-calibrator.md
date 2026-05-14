---
name: recurring-task-time-estimate-calibrator
description: >
  Compares estimated versus actual time spent on recurring operational tasks to surface patterns
  and improve future scheduling accuracy. Use when someone says their tasks are taking longer than
  expected, asks how to improve time estimates for regular work, wants to calibrate sprint or
  capacity planning, mentions that estimates are consistently off, or needs to build a more
  accurate task time baseline.
category: operations
tags: [time-tracking, capacity-planning, estimation, recurring-tasks, calibration]
author: community
---

# Recurring Task Time Estimate Calibrator

This skill analyzes historical estimate vs. actual time data for recurring tasks and produces calibration factors, bias patterns, and adjusted future estimates to improve scheduling accuracy.

## Calibration Workflow

1. **Collect task data** — Ask the user to provide a list of recurring tasks with: task name, original estimate (hours/minutes), actual time spent, and how many times the task has recurred. Accept data as free text, a table, CSV, or bullet list.

2. **Normalize units** — Convert all time values to the same unit (minutes) before calculating. Flag any ambiguous entries and ask for clarification before proceeding.

3. **Calculate per-task metrics** for each recurring task:
   - **Estimate Accuracy Rate** = (Estimate / Actual) × 100
   - **Variance** = Actual − Estimate (positive = underestimate, negative = overestimate)
   - **Calibration Factor** = Actual / Estimate (multiply future estimates by this factor)
   - **Average Variance** across all recurrences of that task

4. **Identify bias patterns** — Classify each task as:
   - Consistently underestimated (calibration factor > 1.2 across most recurrences)
   - Consistently overestimated (calibration factor < 0.8 across most recurrences)
   - Well-calibrated (factor between 0.9–1.1)
   - High variance (large spread between recurrences — flag for further decomposition)

5. **Generate adjusted estimates** — Apply the calibration factor to produce a recommended future estimate for each task. If fewer than 3 data points exist for a task, mark the adjusted estimate as low-confidence.

6. **Aggregate capacity impact** — Sum total underestimated time across all tasks per period (week/sprint/month) to show cumulative scheduling drift.

7. **Surface root cause prompts** — For tasks with calibration factor > 1.3 or high variance, suggest 2–3 questions the user can investigate (e.g., interruptions, scope creep, dependency delays, context-switching overhead).

## Output Format

Produce a structured report with these sections:

**Task Calibration Table**
A markdown table with columns: Task Name | Avg Estimate | Avg Actual | Calibration Factor | Bias Type | Adjusted Future Estimate | Confidence

**Top Findings** (3–5 bullet points)
Plain-language summary of the most significant estimation patterns (e.g., "Code review is consistently underestimated by 40%").

**Capacity Drift Summary**
One paragraph stating total hours lost per period due to underestimation, and total hours over-reserved due to overestimation.

**Recommended Adjustments**
Numbered list of specific changes: revised estimates per task, tasks to decompose further, and tasks to investigate for scope or process issues.

**Low-Confidence Flags**
List any tasks with fewer than 3 data points and note that estimates need more data before calibration is reliable.

Keep the full report under 600 words. Use markdown formatting throughout.
