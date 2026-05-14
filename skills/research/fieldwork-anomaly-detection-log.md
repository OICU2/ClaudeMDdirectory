---
name: fieldwork-anomaly-detection-log
description: >
  Analyzes field-collected survey or research data to identify quality issues and suspicious response patterns.
  Use when someone wants to clean fieldwork data, is concerned about data quality in surveys, needs to flag
  speeding respondents or straight-lining behavior, wants to audit interviewer performance, or is reviewing
  implausible timestamps or geolocation inconsistencies in collected data.
category: research
tags: [data-quality, survey-research, fieldwork, anomaly-detection, data-cleaning]
author: community
---

# Fieldwork Anomaly Detection Log

This skill systematically scans field-collected research data for common quality violations and produces a structured anomaly log that flags suspicious records for review or exclusion.

## Detection Workflow

1. **Identify the data structure**: Confirm variable names for respondent ID, timestamps, interview duration, and response columns before scanning.

2. **Check for speeding respondents**:
   - Calculate interview duration from start/end timestamps.
   - Flag any record where duration falls below the minimum expected completion time (use 50% of median as default threshold if none is provided).
   - Note the actual vs. expected duration for each flagged record.

3. **Detect straight-lining**:
   - For grid or matrix question blocks, check if a respondent selected the same response option across all items.
   - Flag records where 80% or more of items in a scale block share identical values.
   - Identify which specific question blocks triggered the flag.

4. **Identify implausible timestamps**:
   - Flag interviews recorded outside permitted fieldwork hours (e.g., 11 PM–5 AM unless night shifts are expected).
   - Flag interviews with duplicate timestamps for the same interviewer.
   - Flag records where end time precedes start time.

5. **Check for logical inconsistencies**:
   - Identify skip pattern violations (e.g., a follow-up question answered when the routing condition was not met).
   - Flag out-of-range values (ages below 0 or above 120, percentages exceeding 100, etc.).

6. **Assess interviewer-level patterns**:
   - Group flagged records by interviewer ID.
   - Calculate each interviewer's anomaly rate (flagged records / total records).
   - Flag any interviewer whose anomaly rate exceeds 20% for escalation review.

7. **Assign severity levels**:
   - **Critical**: Record should be excluded (e.g., impossible timestamps, extreme speeding under 25% of median).
   - **Warning**: Record requires manual review before use.
   - **Info**: Minor irregularity; document but likely retain.

## Output Format

Produce a structured anomaly log with the following sections:

**Summary Table** (one row per anomaly type):
| Anomaly Type | Records Flagged | % of Total | Recommended Action |
|---|---|---|---|

**Flagged Record Detail** (one entry per flagged respondent):
- Respondent ID
- Anomaly type(s) detected
- Severity level (Critical / Warning / Info)
- Supporting evidence (e.g., "Duration: 3 min, Median: 18 min")
- Recommendation (Exclude / Review / Retain with note)

**Interviewer Watch List** (if interviewer IDs are present):
- Interviewer ID, total records, flagged records, anomaly rate, recommended action

**Final Counts**:
- Total records reviewed
- Records recommended for exclusion
- Records recommended for manual review
- Clean records

Output should be in markdown table format unless the user specifies CSV or another structure.
