---
name: qualitative-sample-diversity-gap-report
description: >
  Audits a completed or in-progress qualitative research sample against defined demographic and experiential criteria to identify underrepresented segments before analysis closes. Use when someone says "check if our sample is diverse enough," asks about "who we're missing in our interviews," or wants to "review recruitment gaps before we wrap fieldwork." Also triggers when a researcher shares a participant roster and asks whether they have enough coverage or good representation.
category: research
tags: [qualitative-research, sampling, diversity, recruitment, ux-research]
author: community
---

# Qualitative Sample Diversity Gap Report

This skill audits a qualitative participant sample against target criteria and produces a structured gap report identifying underrepresented segments so researchers can decide whether to recruit more participants before closing fieldwork.

## Audit Workflow

### 1. Collect Sample Inputs
Ask the researcher to provide:
- A participant list or roster (can be anonymized) with available attributes per person
- The target criteria or screener dimensions (demographics, behaviors, experiences, attitudes, geography, tenure, etc.)
- The intended sample size and any quotas already defined
- Study goals or research questions, if available

If target criteria are not provided, infer reasonable diversity dimensions from the study topic and ask the researcher to confirm before proceeding.

### 2. Build a Coverage Matrix
For each target criterion dimension:
- List all intended segments or values (e.g., age bands, job roles, usage frequency tiers)
- Count how many current participants fall into each segment
- Flag segments with zero participants as **Critical Gap**
- Flag segments with only one participant as **At-Risk Gap**
- Flag segments meeting a minimum threshold (typically n≥2 for qualitative) as **Covered**

### 3. Assess Intersectional Gaps
- Identify combinations of two or more dimensions where no participant satisfies both (e.g., heavy users who are also non-English speakers)
- Flag these only when the intersection is analytically meaningful given the research questions
- Limit intersectional flags to the top 3–5 most consequential combinations to avoid noise

### 4. Score Overall Sample Health
Assign one of three ratings:
- **Ready for Analysis** — No critical gaps; at-risk gaps are acceptable given scope
- **Recruit Before Closing** — One or more critical gaps affect core research questions
- **Significant Gaps** — Multiple critical gaps or a systematic skew that threatens findings

### 5. Prioritize Recruitment Recommendations
For each critical or at-risk gap:
- Name the missing segment explicitly
- Explain why the gap matters to the research questions
- Suggest a minimum number of additional participants needed (typically 1–2 for qualitative)
- Note any screener adjustments that would help

## Output Format

Produce a structured report with the following sections:

---

**Sample Diversity Gap Report**

**Overall Sample Health:** [Ready for Analysis / Recruit Before Closing / Significant Gaps]
**Participants Audited:** [n]
**Criteria Dimensions Assessed:** [list]

---

**Coverage Matrix**

| Dimension | Segment | Target | Actual | Status |
|-----------|---------|--------|--------|--------|
| [e.g., Role] | [e.g., Manager] | ≥2 | 0 | 🔴 Critical Gap |
| [e.g., Role] | [e.g., IC] | ≥2 | 5 | ✅ Covered |

Use 🔴 Critical Gap, 🟡 At-Risk, ✅ Covered as status labels.

---

**Intersectional Gaps** (top concerns only)
- [Dimension A] × [Dimension B]: [explanation of why this matters]

---

**Recruitment Recommendations**
1. **[Segment name]** — Recruit [n] additional participants. Rationale: [1 sentence]. Screener note: [adjustment].
2. …

---

**Dimensions Not Assessed**
List any criteria the researcher mentioned but could not be audited due to missing data, with a note on how to collect it.

---

Keep the report skimmable. Use tables and bullets throughout. Total length should be under two pages. Do not editorialize about study quality — report facts and recommendations only.
