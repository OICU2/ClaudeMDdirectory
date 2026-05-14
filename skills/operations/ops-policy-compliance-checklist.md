---
name: ops-policy-compliance-checklist
description: >
  Generates a structured checklist that audits operational workflows against internal policy requirements and flags non-compliant steps. Use when someone says "check if this process is compliant," asks about "policy gaps in our workflow," wants to "audit our operations against policy," needs to "validate a procedure against requirements," or requests a "compliance review of our steps."
category: operations
tags: [compliance, audit, policy, workflow, checklist]
author: community
---

# Ops Policy Compliance Checklist

This skill audits a described operational workflow against provided or inferred policy requirements and produces a structured checklist that clearly marks each step as compliant, non-compliant, or requiring review.

## Audit Workflow

1. **Extract the workflow steps** — Identify each discrete step in the operational process described. Number them sequentially. If the workflow is vague, ask for clarification before proceeding.

2. **Identify applicable policies** — Determine which policy domains apply (data handling, access control, approval chains, documentation requirements, retention, security, regulatory). Use policies explicitly provided; if none are provided, state assumed policy framework (e.g., SOC 2, ISO 27001, internal approval gates) and flag assumptions.

3. **Map each step to relevant policy rules** — For every workflow step, identify which policy clauses or requirements it must satisfy. Be specific: cite the rule (e.g., "All data exports require manager approval per Access Control Policy §3.2").

4. **Evaluate compliance status** — Assign each step one of three statuses:
   - ✅ **Compliant** — Step meets all applicable policy requirements
   - ❌ **Non-Compliant** — Step violates one or more policy requirements; cite the specific violation
   - ⚠️ **Needs Review** — Insufficient information to determine compliance, or policy is ambiguous

5. **Generate remediation actions** — For every non-compliant or needs-review step, provide a concrete corrective action. Be specific: name what must change, who is responsible, and what the compliant version looks like.

6. **Summarize risk exposure** — Count totals by status, identify the highest-risk violations, and note any systemic gaps (e.g., a recurring missing approval step pattern).

## Output Format

Produce the following structure:

---

**Compliance Audit Report**
**Workflow:** [Name or description of audited workflow]
**Policy Framework:** [Policies applied or assumed]
**Audit Date:** [Today's date]

---

**Step-by-Step Checklist**

| # | Workflow Step | Applicable Policy | Status | Finding |
|---|--------------|-------------------|--------|---------|
| 1 | [Step description] | [Policy rule] | ✅ / ❌ / ⚠️ | [Brief finding or "Meets requirements"] |
| 2 | ... | ... | ... | ... |

---

**Non-Compliant Steps — Remediation Required**

For each ❌ item:
- **Step [#]:** [Step name]
- **Violation:** [Exact policy rule violated]
- **Risk:** [Low / Medium / High] — [One sentence on impact]
- **Required Action:** [Specific corrective action with owner if determinable]

---

**Needs Review**

For each ⚠️ item:
- **Step [#]:** [Step name]
- **Ambiguity:** [What information or clarification is needed]
- **Recommended Action:** [Interim measure or escalation path]

---

**Summary**

- Total Steps Audited: [N]
- ✅ Compliant: [N]
- ❌ Non-Compliant: [N]
- ⚠️ Needs Review: [N]
- **Overall Compliance Rate:** [X%]
- **Critical Issues:** [Bullet list of highest-priority violations]
- **Systemic Gaps:** [Any patterns observed across multiple steps]
