---
name: corrective-action-plan-builder
description: >
  Generates a structured corrective action plan (CAP) following an operational failure, incident, or audit finding. Use when someone says "we had an incident and need a corrective action plan," asks to "document what went wrong and how to fix it," wants to "create a remediation plan after a failure," needs to "assign owners and deadlines to fix an outage," or is "writing up a post-incident action plan."
category: operations
tags: [incident-response, remediation, root-cause-analysis, operations, accountability]
author: community
---

# Corrective Action Plan Builder

This skill produces a complete, structured corrective action plan after an operational failure, including root cause analysis, remediation steps, owners, and deadlines.

## Workflow

1. **Gather incident details** — If not provided, ask for: incident title, date/time, systems or processes affected, brief description of what failed, and who discovered it.
2. **Identify contributing factors** — Ask or infer: What triggered the failure? What monitoring or controls failed to prevent or catch it? Were there prior warnings?
3. **Perform root cause analysis** — Use the 5-Whys method. State the proximate cause, then drill down iteratively to the systemic root cause. Label each level clearly.
4. **Define remediation actions** — Break fixes into two categories:
   - *Immediate actions*: steps already taken or needed within 24–72 hours to stop active damage or restore service.
   - *Long-term actions*: process, tooling, or training changes to prevent recurrence.
5. **Assign owners and deadlines** — For each action item, require a named owner (role or person) and a specific due date. Do not allow "TBD" owners on immediate actions.
6. **Define success criteria** — State measurable conditions that confirm each action is complete and effective.
7. **Identify review checkpoint** — Specify a follow-up review date to verify all actions are on track.

## Output Format

Produce a structured document with the following sections in order:

---

**CORRECTIVE ACTION PLAN**

**Incident Title:** [Short descriptive name]
**Date of Incident:** [Date]
**Date CAP Created:** [Today's date]
**Reported By:** [Name/role]
**Severity:** [Critical / High / Medium / Low]
**Systems/Processes Affected:** [List]

---

**1. Incident Summary**
[2–4 sentences describing what happened, when, and the business impact.]

---

**2. Root Cause Analysis (5-Whys)**
- Why 1: [Proximate cause]
- Why 2: [Underlying cause]
- Why 3: [...]
- Why 4: [...]
- Why 5: [Root cause — systemic issue]

**Root Cause Statement:** [1 sentence summary of the true root cause]

---

**3. Immediate Remediation Actions**

| # | Action | Owner | Due Date | Status |
|---|--------|-------|----------|--------|
| 1 | [Action] | [Owner] | [Date] | Open |

---

**4. Long-Term Preventive Actions**

| # | Action | Owner | Due Date | Success Criteria |
|---|--------|-------|----------|-----------------|
| 1 | [Action] | [Owner] | [Date] | [Measurable outcome] |

---

**5. Monitoring & Verification**
[Describe what will be tracked, how, and by whom to confirm the fix holds.]

---

**6. CAP Review Date:** [Date for follow-up check-in]
**CAP Owner:** [Person accountable for driving completion]

---

Keep the tone factual and non-punitive. Focus on systemic fixes over individual blame. Flag any action items missing an owner or deadline as "[INCOMPLETE — REQUIRES ASSIGNMENT]".
