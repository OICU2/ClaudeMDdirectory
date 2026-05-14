---
name: ops-recurring-exception-pattern-classifier
description: >
  Analyzes process exception logs to group repeated failures by type and frequency, separating systemic issues from isolated incidents. Use when someone says "we keep seeing the same errors," asks about which exceptions are worth fixing first, or wants to understand if a problem is a pattern or a fluke. Also activates when someone needs to prioritize exception backlog or determine root cause categories across incidents.
category: operations
tags: [exceptions, pattern-analysis, incident-management, operations, process-quality]
author: community
---

# Recurring Exception Pattern Classifier

This skill groups process exceptions by type and frequency to help operations teams distinguish systemic failures that need structural fixes from one-off incidents that can be closed without escalation.

## Classification Workflow

1. **Collect exception data** — Request the exception log, incident list, or error report. Minimum fields needed: exception description, timestamp, affected process or system, and frequency or count. Accept raw text, CSV, or pasted table formats.

2. **Normalize exception types** — Strip instance-specific details (IDs, timestamps, usernames, amounts) to identify the underlying exception template. Group exceptions that share the same root cause pattern under a single category label.

3. **Calculate frequency and recurrence metrics** — For each category, compute:
   - Total occurrence count
   - First and last occurrence date
   - Recurrence interval (daily, weekly, sporadic)
   - Percentage of total exceptions it represents

4. **Apply classification thresholds** — Label each category using these rules:
   - **Systemic** — Occurs 3+ times across different instances or time periods, or accounts for >10% of total exceptions
   - **Trending** — Frequency is increasing over the observed period, even if total count is low
   - **Isolated** — Occurs once or twice with no recurrence pattern; no shared root cause with other exceptions
   - **Correlated** — Spikes coincide with another exception type, suggesting a shared upstream cause

5. **Identify top systemic patterns** — Rank systemic and trending categories by total volume and estimated operational impact. Flag any category that appears in multiple processes or systems as cross-cutting.

6. **Map to resolution path** — For each classification, assign a recommended action:
   - Systemic → Escalate for root cause investigation and process fix
   - Trending → Monitor with alert threshold; escalate if growth continues
   - Isolated → Close or log without escalation
   - Correlated → Investigate upstream dependency before treating separately

## Output Format

Produce a structured classification report with these sections:

**Summary Line**
One sentence stating total exceptions analyzed, number of distinct patterns found, and how many are systemic.

**Pattern Table**
Markdown table with columns: Pattern Name | Classification | Count | % of Total | First Seen | Last Seen | Recurrence | Recommended Action

**Top 3 Systemic Patterns**
For each: pattern name, plain-language description of what triggers it, frequency detail, and specific next step for resolution.

**Isolated Incidents List**
Bulleted list of exceptions that do not warrant escalation, with a one-line rationale for each.

**Correlated Clusters** (if any)
Description of which patterns appear linked and the suspected shared cause.

Keep the full report under 600 words unless the exception volume requires more rows in the table. Use plain language throughout — no jargon beyond standard ops terminology.
