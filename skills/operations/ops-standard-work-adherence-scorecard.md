---
name: ops-standard-work-adherence-scorecard
description: >
  Scores team or individual adherence to documented standard operating procedures using checklist or audit data. Use when someone says "score our SOP compliance," asks about "how well is the team following procedures," or wants to "audit standard work adherence," "evaluate process compliance," or "generate an adherence scorecard." Accepts raw checklist data, audit logs, observation notes, or procedure lists and returns a structured compliance score with gap analysis.
category: operations
tags: [compliance, sop, audit, scorecard, process-adherence]
author: community
---

# SOP Adherence Scorecard

Analyzes checklist, audit, or observation data against documented standard operating procedures and produces a weighted compliance scorecard with scores, gaps, and prioritized corrective actions.

## Scoring Workflow

1. **Parse Input Data**
   - Identify the source type: checklist responses, audit log, observation notes, or a mix
   - Extract each procedure step or requirement mentioned
   - Map each item to one of three states: Compliant, Non-Compliant, Not Observed/N/A

2. **Identify the SOP Scope**
   - If the user provides an explicit SOP document or list, use it as the master checklist
   - If no SOP is provided, infer procedure categories from the data and flag that a formal SOP baseline was not supplied
   - Group items into logical sections (e.g., Safety, Documentation, Process Steps, Quality Checks)

3. **Calculate Section and Overall Scores**
   - Per section: `(Compliant items / Total applicable items) × 100 = Section Score %`
   - Overall score: weighted average across sections (equal weight unless user specifies criticality weights)
   - Flag any section below 70% as a Critical Gap, 70–84% as a Moderate Gap, 85–100% as Compliant

4. **Identify Root Patterns in Non-Compliance**
   - Group non-compliant items by type: skipped steps, incorrect sequence, missing documentation, unsafe shortcuts
   - Note whether failures are isolated (one individual/instance) or systemic (recurring across team/time)

5. **Generate Corrective Action Priorities**
   - Rank gaps by: (a) safety/regulatory risk, (b) frequency of occurrence, (c) downstream process impact
   - Assign each gap a Priority Level: P1 (immediate), P2 (within 1 week), P3 (next review cycle)

6. **Handle Ambiguity**
   - If a step's compliance status is unclear from the data, mark it as "Insufficient Data" and exclude from scoring denominator
   - If fewer than 5 data points exist, add a confidence warning to the scorecard

## Output Format

Produce a structured scorecard in this exact order:

---

**SOP Adherence Scorecard**
*Scope:* [Team name / Individual / Process name]
*Data Source:* [Checklist / Audit log / Observation notes / Mixed]
*Date:* [If provided, else "Not specified"]
*Confidence:* [High / Moderate / Low — based on data volume and completeness]

---

**Overall Adherence Score: XX%** — [Compliant / Moderate Gap / Critical Gap]

---

**Section Scores**

| Section | Items Reviewed | Compliant | Score | Status |
|---|---|---|---|---|
| [Section Name] | N | N | XX% | ✅ / ⚠️ / 🔴 |

---

**Non-Compliance Details**

For each non-compliant item:
- **Item:** [Procedure step or requirement]
- **Section:** [Category]
- **Status:** Non-Compliant
- **Observed Behavior:** [What happened or was skipped]
- **Expected Behavior:** [What the SOP requires]
- **Pattern:** Isolated / Systemic

---

**Corrective Action Plan**

| Priority | Gap | Action Required | Owner Suggestion | Timeline |
|---|---|---|---|---|
| P1 | [Gap description] | [Specific action] | [Role] | Immediate |

---

**Notes & Caveats**
- [List any items marked Insufficient Data]
- [Flag if no formal SOP baseline was provided]
- [Confidence warnings if applicable]
