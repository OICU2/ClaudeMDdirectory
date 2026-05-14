---
name: research-participant-attrition-recovery-plan
description: >
  Generates a targeted re-contact and replacement strategy when longitudinal panel dropout threatens sample adequacy. Use when someone says their study is losing participants, asks how to handle panel attrition, or wants to recover from dropout rates damaging statistical power. Also triggers when a researcher needs to replace lost subjects in a longitudinal cohort or is worried that wave-to-wave attrition will invalidate their findings.
category: research
tags: [longitudinal-research, attrition, participant-retention, sampling, panel-study]
author: community
---

# Participant Attrition Recovery Plan

This skill produces a structured re-contact and replacement strategy when longitudinal study dropout threatens sample size requirements, activating whenever a researcher reports wave-to-wave participant loss or compromised statistical power.

## Recovery Planning Workflow

### 1. Diagnose Attrition Severity
- Calculate current attrition rate: (baseline N − current N) / baseline N × 100
- Compare against original power analysis minimum N
- Identify which waves experienced the sharpest dropout
- Flag whether attrition is random (MCAR), related to observed variables (MAR), or systematic (MNAR) — this determines whether replacement or statistical correction is the priority

### 2. Characterize Lost Participants
- Profile dropouts by demographic, baseline outcome score, and any last-known contact variables
- Test whether dropouts differ significantly from retained participants on key variables (t-tests, chi-square)
- Determine if bias is differential (e.g., sicker participants leaving a health study) — if so, replacement must target similar profiles

### 3. Build the Re-Contact Strategy
- Tier participants by dropout recency: recent dropouts (1 wave missed) get priority outreach before recruiting replacements
- Draft re-contact message variants: acknowledge the gap, reduce burden (offer shorter survey version if possible), and restate study value
- Specify channels in order: email → SMS → postal → proxy contact (emergency contact if IRB-approved)
- Set a re-contact window (typically 2–3 weeks) before pivoting to replacement recruitment

### 4. Design the Replacement Recruitment Plan
- Define eligibility criteria that match the baseline sample's demographic and prognostic profile
- Identify replacement recruitment channels: existing waitlists, community partners, sibling studies, or panel vendors
- Calculate replacement N needed with a 20–30% buffer for screening failures
- Specify whether replacements enter at the current wave or require a truncated baseline catch-up protocol
- Note statistical consequences: replacements shorten their follow-up duration and may need sensitivity analysis exclusion

### 5. Apply Statistical Mitigation in Parallel
- Recommend multiple imputation (MI) or full-information maximum likelihood (FIML) for MCAR/MAR scenarios
- Flag if MNAR requires pattern mixture models or selection models
- Advise updating the power analysis with the reduced N to recalculate detectable effect sizes
- Suggest attrition weighting if retained sample is demonstrably non-representative

### 6. Prevent Future Attrition
- Identify the top 2–3 modifiable causes of dropout from exit interviews or last-contact data
- Recommend specific retention interventions: incentive adjustment, contact frequency change, burden reduction, or participant engagement touchpoints between waves

## Output Format

Produce a structured recovery plan with the following sections, each as a labeled header:

**Attrition Severity Summary** — 3–5 bullet points with calculated dropout rate, power impact, and attrition type classification

**Dropout Profile** — brief table or bullet list comparing retained vs. lost participants on key variables, with a bias risk rating (Low / Moderate / High)

**Re-Contact Protocol** — numbered action steps with specific message framing guidance, channel sequence, and timeline

**Replacement Recruitment Plan** — target N with buffer, eligibility criteria, recruitment channels, and entry-point protocol for replacements

**Statistical Mitigation Recommendations** — 2–4 specific methods matched to the attrition type, with one-line rationale each

**Retention Safeguards for Remaining Waves** — 2–3 concrete interventions with implementation notes

Length: 400–700 words. Use headers, bullets, and a brief table where specified. Avoid generic advice — all recommendations must reference the specific attrition rate, wave structure, or variable context provided by the researcher.
