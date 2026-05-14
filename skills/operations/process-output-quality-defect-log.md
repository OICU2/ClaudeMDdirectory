---
name: process-output-quality-defect-log
description: >
  Standardizes the capture and categorization of process output defects to enable root cause analysis and targeted quality improvement efforts. Use when someone says "we need to track quality issues," asks about logging defects from a process, or wants to document recurring output problems. Also activates when someone mentions "defect tracking," "quality failures keep happening," or "we need to find the root cause of bad outputs."
category: operations
tags: [quality, defects, root-cause-analysis, process-improvement, logging]
author: community
---

# Process Output Quality Defect Log

This skill structures the capture and categorization of process output defects so teams can identify patterns, perform root cause analysis, and drive targeted quality improvements.

## Defect Logging Workflow

1. **Identify the defect source** — Confirm which process, system, or workflow produced the defective output (e.g., manufacturing line, data pipeline, content generation, fulfillment).

2. **Capture the defect details** — Record the following for each defect:
   - Date and time of detection
   - Detected by (person, system, or inspection step)
   - Process step or stage where defect originated (if known)
   - Output affected (batch ID, ticket number, item description)

3. **Classify the defect type** — Assign one of these categories:
   - **Missing** — Required component, field, or output not present
   - **Incorrect** — Output exists but contains wrong value, format, or content
   - **Degraded** — Output is partially correct but below quality threshold
   - **Duplicate** — Output produced more than once when it should not be
   - **Delayed** — Output produced outside acceptable time window
   - **Other** — Document explicitly if none of the above apply

4. **Assess severity** — Rate each defect:
   - **Critical** — Causes failure, safety risk, or customer-facing impact
   - **Major** — Significant rework required or SLA breach
   - **Minor** — Cosmetic or low-impact issue, easy to correct

5. **Document immediate disposition** — Note what was done with the defective output: scrapped, reworked, escalated, accepted with deviation, or pending review.

6. **Record initial root cause hypothesis** — Capture the first plausible cause category:
   - Human error
   - Equipment or tooling failure
   - Input material or upstream data quality
   - Process design gap
   - Environmental or external factor
   - Unknown (requires investigation)

7. **Flag for follow-up if needed** — Mark defects that require formal root cause analysis (RCA), corrective action (CAPA), or escalation to a quality owner.

## Output Format

Produce a structured defect log entry in the following format for each defect reported:

---

**DEFECT LOG ENTRY**

| Field | Value |
|---|---|
| Log ID | [Auto-incremented or provided, e.g., DL-2024-0047] |
| Date / Time | [YYYY-MM-DD HH:MM] |
| Detected By | [Name or system] |
| Process / System | [Name of process or system] |
| Process Stage | [Step or stage where defect originated] |
| Output Affected | [Batch ID, item, ticket, or description] |
| Defect Type | [Missing / Incorrect / Degraded / Duplicate / Delayed / Other] |
| Severity | [Critical / Major / Minor] |
| Description | [1–3 sentences describing exactly what the defect is] |
| Immediate Disposition | [Scrapped / Reworked / Escalated / Accepted with deviation / Pending] |
| Root Cause Hypothesis | [Category + 1 sentence explanation] |
| RCA / CAPA Required? | [Yes / No / Pending review] |
| Assigned To | [Owner name or team, if applicable] |
| Notes | [Any additional context] |

---

If logging multiple defects in one session, produce one table entry per defect, then append a **Summary** section listing:
- Total defects logged
- Breakdown by defect type
- Breakdown by severity
- Any patterns or repeated root cause hypotheses worth flagging for investigation
