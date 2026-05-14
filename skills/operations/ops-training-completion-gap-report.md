---
name: ops-training-completion-gap-report
description: >
  Cross-references required training assignments against completion records to produce a prioritized gap report by team and role. Use when someone says "who hasn't completed their training," asks about training compliance gaps, wants to see which teams are behind on required courses, needs a training status report, or asks which roles have the most incomplete assignments.
category: operations
tags: [training, compliance, gap-analysis, reporting, hr-ops]
author: community
---

# Training Completion Gap Report

This skill analyzes required training assignments against actual completion records and produces a prioritized, actionable gap report organized by team and role.

## Workflow

1. **Gather inputs** — Request or confirm access to two data sources:
   - Required training assignments (who must complete what, by when)
   - Completion records (who has finished what, with timestamps)
   - If data is not provided directly, ask the user to paste, upload, or describe the structure of both sources.

2. **Parse and normalize** — Align both datasets on a common identifier (employee ID, name, or email). Standardize course names across both sources to handle minor naming inconsistencies.

3. **Compute gaps** — For each person, subtract completed courses from required courses. Flag:
   - **Overdue**: past due date with no completion record
   - **Pending**: due date upcoming, not yet completed
   - **Complete**: all required courses finished

4. **Aggregate by team and role** — Roll up individual gaps to the team level and the role level. Calculate:
   - Total required assignments per group
   - Number and percentage incomplete
   - Number overdue vs. pending

5. **Prioritize gaps** — Rank groups using this logic:
   - Highest overdue percentage → Priority 1
   - Highest total incomplete count → Priority 2
   - Earliest aggregate due date → tiebreaker

6. **Identify top individual offenders** — Within each team, list the individuals with the most incomplete or overdue items.

7. **Flag anomalies** — Note any employees who appear in completion records but not in the assignment list, or vice versa, as data integrity issues.

## Output Format

Produce a structured report with the following sections:

---

**TRAINING COMPLETION GAP REPORT**
*Generated: [date]*

**Executive Summary**
- Total employees analyzed: X
- Overall completion rate: X%
- Employees with overdue training: X
- Employees fully compliant: X

---

**Gap Summary by Team** *(sorted by priority)*

| Priority | Team | Required | Completed | % Complete | Overdue | Pending |
|----------|------|----------|-----------|------------|---------|---------|
| 1 | ... | ... | ... | ... | ... | ... |

---

**Gap Summary by Role** *(sorted by % incomplete, descending)*

| Role | Required | Completed | % Complete | Overdue | Pending |
|------|----------|-----------|------------|---------|---------|

---

**Top Individuals With Incomplete Training** *(top 10 or all if fewer)*

| Name | Team | Role | Courses Overdue | Courses Pending | Earliest Due Date |
|------|------|------|-----------------|-----------------|-------------------|

---

**Recommended Actions**
- List 3–5 specific next steps (e.g., "Send overdue reminder to [Team] by [date]," "Escalate [X] employees in [Role] to manager")

**Data Integrity Issues** *(if any)*
- List mismatched or unmatched records

---

- Keep tables concise; do not repeat raw data already summarized
- Flag any assumptions made during normalization
- If due dates are missing from source data, note this and sort by completion status only
