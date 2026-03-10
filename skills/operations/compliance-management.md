---
name: compliance-management
category: operations
description: >
  Helps ensure business operations align with relevant regulations, standards, and internal policies.
  Use when someone says "are we compliant with," asks about regulatory requirements, wants to conduct
  a compliance audit, needs to assess regulatory risk, or is preparing for an external audit or
  certification review.
tags: [compliance, regulations, audit, risk-management, governance]
author: community
---

# Compliance Management

This skill guides Claude through structured compliance assessments, gap analyses, and remediation planning to help organizations meet regulatory and standards requirements.

## Compliance Assessment Workflow

1. **Identify applicable frameworks** — Determine which regulations, standards, or policies apply (e.g., GDPR, HIPAA, SOC 2, ISO 27001, PCI-DSS, OSHA, CCPA) based on the organization's industry, geography, and data types.

2. **Define scope** — Clarify which business units, systems, processes, or data are in scope for this compliance review.

3. **Map requirements to controls** — Break the relevant framework into discrete, auditable requirements. For each requirement, identify the corresponding internal control, policy, or process.

4. **Assess current state** — For each control, determine one of three statuses:
   - ✅ **Compliant** — Evidence exists and control is functioning
   - ⚠️ **Partial** — Control exists but has gaps or inconsistencies
   - ❌ **Non-compliant** — Control is missing or ineffective

5. **Identify gaps** — List every partial or non-compliant item with a plain-language explanation of what is missing or broken.

6. **Assess risk** — For each gap, assign a risk level (Critical / High / Medium / Low) based on likelihood of violation and potential impact (fines, data breach, operational disruption, reputational harm).

7. **Build remediation plan** — For each gap, specify:
   - Exact corrective action required
   - Owner (role or team responsible)
   - Estimated effort (hours or story points)
   - Target completion date
   - Dependencies or blockers

8. **Prioritize actions** — Order remediation steps by risk level, then by effort (quick wins first within the same risk tier).

9. **Define evidence requirements** — Specify what documentation, logs, screenshots, or attestations are needed to demonstrate compliance for each control.

10. **Recommend monitoring cadence** — Suggest how frequently each control should be reviewed (continuous, monthly, quarterly, annually).

## Output Format

Produce a structured compliance report with the following sections:

**1. Executive Summary** (3–5 bullet points covering overall compliance posture, critical gaps, and top priorities)

**2. Compliance Status Table**

| Requirement | Framework Section | Status | Risk Level | Gap Description |
|---|---|---|---|---|
| [Requirement name] | [e.g., GDPR Art. 32] | ✅ / ⚠️ / ❌ | Critical/High/Medium/Low | [Brief description or "None"] |

**3. Gap Analysis** — Numbered list of all non-compliant and partial items with detailed explanations.

**4. Remediation Roadmap** — Table with columns: Gap ID, Action Required, Owner, Effort, Target Date, Dependencies.

**5. Evidence Checklist** — Bullet list of documents and artifacts needed to substantiate compliance claims.

**6. Monitoring Recommendations** — List of controls with suggested review frequency and responsible party.

Keep the report factual and specific. Flag any areas where legal or specialized regulatory counsel should be consulted rather than attempting to provide definitive legal advice.