---
name: ops-standard-work-deviation-log
description: >
  Tracks and categorizes deviations from documented standard operating procedures to identify recurring compliance gaps and root causes. Use when someone says "we didn't follow the SOP," asks about procedure violations or workarounds, or wants to log a process deviation. Also activates when someone mentions "we skipped a step," "the team did it differently than documented," or wants to analyze why standard work isn't being followed.
category: operations
tags: [sop, compliance, deviation-tracking, process-improvement, root-cause]
author: community
---

# SOP Deviation Log

This skill captures, categorizes, and analyzes deviations from standard operating procedures so teams can identify patterns, prioritize corrective actions, and close recurring compliance gaps.

## Deviation Logging Workflow

**Step 1: Capture the deviation**
- Record the SOP name/ID, version, and the specific step(s) that were not followed
- Note date, time, location/department, and who identified the deviation (not necessarily who caused it)
- Describe exactly what happened versus what the SOP requires — use factual, non-blame language

**Step 2: Classify the deviation**
Assign each deviation to one category:
- **Skip** — step was omitted entirely
- **Substitution** — a different method or material was used
- **Sequence error** — steps performed out of documented order
- **Timing violation** — step performed outside the required time window
- **Documentation only** — process was correct but paperwork/records were incomplete

**Step 3: Identify contributing factors**
Ask and record answers to:
- Was the SOP accessible at the point of use?
- Was the worker trained on the current version?
- Was there a production pressure, equipment issue, or resource constraint?
- Has this deviation occurred before? If yes, how many times in the past 90 days?

**Step 4: Assign severity**
- **Critical** — deviation creates a safety, regulatory, or quality risk
- **Major** — deviation likely to affect output quality or customer impact
- **Minor** — deviation has minimal downstream impact

**Step 5: Assign ownership and corrective action**
- Name a single owner responsible for resolution
- Set a due date (Critical: 24h, Major: 7 days, Minor: 30 days)
- Specify the corrective action type: retraining, SOP revision, tooling fix, escalation, or monitoring only

**Step 6: Identify recurrence patterns**
- Flag any SOP or step that appears 3+ times in the log within 90 days as a **systemic gap**
- Systemic gaps require SOP review, not just individual retraining

## Output Format

Produce a structured deviation log entry followed by a pattern summary if multiple deviations are provided.

**Single Entry Format:**
```
DEVIATION LOG ENTRY
-------------------
Date/Time:
SOP Name & Version:
Step(s) Affected:
Department/Location:
Reported By:

What Happened:
What SOP Requires:

Category: [Skip | Substitution | Sequence Error | Timing Violation | Documentation Only]
Severity: [Critical | Major | Minor]

Contributing Factors:
- SOP Accessible: [Yes/No]
- Training Current: [Yes/No]
- External Constraint: [describe or N/A]
- Prior Occurrences (90 days): [#]

Owner:
Due Date:
Corrective Action Type:
Corrective Action Description:
```

**Pattern Summary (when 3+ deviations are reviewed):**
- Table listing SOP name, deviation count, most common category, and severity distribution
- Bulleted list of systemic gaps (3+ occurrences)
- Top 3 recommended priorities ranked by severity + frequency

Keep entries factual and under 200 words per entry. Pattern summaries should fit on one page.
