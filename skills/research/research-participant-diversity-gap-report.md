---
name: research-participant-diversity-gap-report
description: >
  Analyzes the demographic and professional composition of a research sample and flags underrepresented groups relative to the target population. Use when someone says "check my participant demographics," asks about "who is missing from my study sample," wants to "audit research diversity," needs to "identify gaps in participant representation," or is concerned that their "sample doesn't reflect the target population."
category: research
tags: [research, diversity, demographics, sampling, representation]
author: community
---

# Research Participant Diversity Gap Report

This skill audits a research sample's demographic and professional composition against a defined target population and produces a structured gap report highlighting underrepresented groups with severity ratings.

## Workflow

1. **Collect Sample Data**
   - Ask the user to provide their current participant breakdown. Accept any format: table, list, percentages, or raw counts.
   - Required fields: demographic categories present (e.g., age, gender, race/ethnicity, geography, profession, education level, disability status).
   - If counts are missing, ask whether they can provide totals or percentages.

2. **Collect Target Population Benchmarks**
   - Ask the user to define the target population (e.g., "U.S. adult internet users," "enterprise software buyers," "clinical trial eligibility population").
   - Ask whether they have benchmark data or want Claude to apply a widely cited reference (e.g., U.S. Census, Bureau of Labor Statistics, WHO statistics). Clearly state which reference will be used if Claude supplies it.

3. **Normalize the Data**
   - Convert all sample figures to percentages for direct comparison.
   - Align category labels between sample and benchmark (flag any label mismatches that prevent direct comparison).

4. **Calculate Representation Gaps**
   - For each demographic subgroup, compute: `Gap = Benchmark % − Sample %`
   - Positive gap = underrepresented in sample. Negative gap = overrepresented.
   - Assign severity:
     - **Critical**: gap ≥ 15 percentage points
     - **Moderate**: gap 5–14 percentage points
     - **Minor**: gap 1–4 percentage points
     - **On target**: gap < 1 percentage point

5. **Identify Root Cause Hypotheses**
   - For each Critical or Moderate gap, briefly note likely recruitment or screening factors that could explain the gap (e.g., "English-only recruitment materials may exclude non-English speakers," "LinkedIn sourcing skews toward knowledge workers").

6. **Generate Remediation Recommendations**
   - For each Critical gap: provide 2–3 specific corrective actions (e.g., targeted outreach channels, quota adjustments, screener changes).
   - For each Moderate gap: provide 1–2 corrective actions.
   - For Minor gaps: note as "monitor only" unless the user requests action items.

7. **Flag Data Limitations**
   - Note any demographic dimensions not collected in the sample.
   - Flag intersectional gaps if data permits (e.g., women over 50, not just women or over-50 separately).
   - State confidence level if benchmark data is older than 5 years or from a proxy population.

## Output Format

Produce a structured report with the following sections:

---

**RESEARCH PARTICIPANT DIVERSITY GAP REPORT**

**Study Summary**
- Sample size: [N]
- Target population: [description]
- Benchmark source: [citation or user-provided]
- Dimensions analyzed: [list]

**Gap Analysis Table**

| Dimension | Subgroup | Sample % | Benchmark % | Gap | Severity |
|-----------|----------|----------|-------------|-----|----------|
| [e.g., Gender] | [e.g., Women] | [X%] | [Y%] | [+/−Z pp] | [Critical/Moderate/Minor/On target] |

**Critical Gaps** *(one subsection per gap)*
- **[Subgroup]**: [1-sentence root cause hypothesis] → Recommended actions: [bulleted list]

**Moderate Gaps**
- **[Subgroup]**: [root cause] → Recommended actions: [bulleted list]

**Minor Gaps / Monitor Only**
- [Subgroup]: [gap size]

**Missing Dimensions**
- [List any demographic dimensions not captured in the sample with a recommendation to add them]
