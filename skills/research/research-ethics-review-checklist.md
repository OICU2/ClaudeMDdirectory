---
name: research-ethics-review-checklist
description: >
  Generates a structured IRB-style ethics review checklist for research study designs, covering informed consent procedures, data privacy safeguards, participant risk assessment, and regulatory compliance requirements. Use when someone describes a research study and needs ethics guidance, asks about IRB requirements for their study, wants to evaluate whether their research protocol meets ethical standards, needs to identify risks to human participants, or is preparing an ethics submission for a study design.
category: research
tags: [ethics, IRB, research-compliance, human-subjects, data-privacy]
author: community
---

# Research Ethics Review Checklist

This skill generates a comprehensive IRB-style ethics checklist tailored to a specific study design, helping researchers identify gaps in participant protections, consent procedures, data handling, and regulatory compliance before submission.

## Review Workflow

1. **Extract study parameters** from the user's description: study type (observational, interventional, survey, etc.), population (adults, minors, vulnerable groups), data types collected, and duration.

2. **Assess participant risk level** by categorizing the study as Exempt, Expedited, or Full Board review based on:
   - Physical, psychological, social, legal, or economic risks to participants
   - Involvement of vulnerable populations (minors, prisoners, pregnant individuals, cognitively impaired persons)
   - Sensitivity of data collected (health, financial, sexual behavior, illegal activity)

3. **Generate checklist sections** in this order, marking each item as Required, Recommended, or Not Applicable based on the study design:

   - **Informed Consent**: Voluntary participation statement, right to withdraw, language accessibility, capacity to consent, waiver eligibility, parental consent for minors
   - **Data Privacy & Security**: Identifiability of data, anonymization or de-identification methods, storage security, retention and destruction schedule, third-party data sharing agreements
   - **Participant Risk & Benefit**: Risk-benefit ratio analysis, minimization strategies, stopping criteria, adverse event reporting plan, compensation and coercion risk
   - **Recruitment & Equity**: Non-coercive recruitment methods, inclusive sampling, exclusion criteria justification, gatekeepers and power dynamics
   - **Regulatory Compliance**: Applicable regulations (45 CFR 46, GDPR, HIPAA, FDA 21 CFR if relevant), institutional approval requirements, conflict of interest disclosures, ongoing monitoring plan

4. **Flag critical gaps** — any missing items that would likely result in IRB rejection or ethical violations, highlighted separately.

5. **Assign an overall readiness rating**: Ready for Submission / Needs Revision / Major Issues Identified.

## Output Format

Produce a structured checklist with the following layout:

```
## Ethics Review Checklist: [Study Name or Description]

**Recommended Review Level:** [Exempt / Expedited / Full Board]
**Overall Readiness:** [Ready / Needs Revision / Major Issues]

---

### 1. Informed Consent
- [ ] [Item] — [Required/Recommended] — [1-line rationale or gap note]

### 2. Data Privacy & Security
- [ ] [Item] — [Required/Recommended] — [1-line rationale or gap note]

### 3. Participant Risk & Benefit
- [ ] [Item] — [Required/Recommended] — [1-line rationale or gap note]

### 4. Recruitment & Equity
- [ ] [Item] — [Required/Recommended] — [1-line rationale or gap note]

### 5. Regulatory Compliance
- [ ] [Item] — [Required/Recommended] — [1-line rationale or gap note]

---

### ⚠️ Critical Gaps
- [List any items that must be resolved before submission]

### Recommended Next Steps
- [2-4 concrete actions the researcher should take]
```

Each checklist item should be one specific, verifiable action or condition — not a vague principle. Total output should be 40–80 checklist items depending on study complexity. Include brief rationale only where a gap or elevated risk exists.
