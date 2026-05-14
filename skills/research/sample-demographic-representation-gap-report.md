---
name: sample-demographic-representation-gap-report
description: >
  Analyzes how well a collected research sample mirrors the intended target population by comparing demographic breakdowns across key segments and surfacing representation gaps. Use when someone says "my sample doesn't look right," asks about demographic imbalance in their data, wants to check if their survey respondents match the target population, needs to assess sample quality before analysis, or is concerned about underrepresented groups in their research.
category: research
tags: [sampling, demographics, representation, research-quality, survey-analysis]
author: community
---

# Sample Demographic Representation Gap Report

This skill compares the demographic composition of a collected research sample against a target population profile and produces a structured gap analysis showing which segments are over- or under-represented and by how much.

## Workflow

1. **Gather inputs**: Request two data sets from the user — (a) the collected sample's demographic breakdown (counts or percentages by segment) and (b) the target population profile (benchmark percentages). If the target population profile is unavailable, ask the user to specify the source they want to benchmark against (e.g., census data, industry report, customer database).

2. **Identify demographic dimensions**: Confirm which dimensions to analyze (e.g., age group, gender, race/ethnicity, geography, income bracket, education level). Flag any dimensions present in one data set but missing from the other.

3. **Calculate representation metrics for each segment**:
   - Sample proportion (%) vs. target proportion (%)
   - Absolute gap = Sample% − Target%
   - Relative gap = (Sample% − Target%) / Target% × 100
   - Flag segments where the absolute gap exceeds ±5 percentage points or the relative gap exceeds ±15% as actionable gaps.

4. **Assess overall sample fidelity**: Compute a summary representation index (average absolute gap across all segments weighted by segment size). Rate overall fidelity: Low (avg gap >10pp), Moderate (5–10pp), High (<5pp).

5. **Diagnose likely causes**: For each flagged gap, note plausible structural causes (e.g., recruitment channel bias, survey language barriers, opt-in skew, frame error).

6. **Recommend corrective actions**: Suggest targeted remedies — additional recruitment in underrepresented segments, post-hoc weighting/raking, stratified oversampling in future waves, or explicit scope limitation to the actual sample composition.

## Output Format

Produce a structured report with the following sections:

**Header**: Study name (if provided), date, sample size (n), and target population source.

**Demographic Gap Table** (one table per dimension):
| Segment | Sample % | Target % | Absolute Gap | Relative Gap | Status |
|---|---|---|---|---|---|
Use ✅ Within range / ⚠️ Moderate gap / 🔴 Critical gap in the Status column.

**Overall Fidelity Summary**: One paragraph (3–5 sentences) rating the sample's overall representativeness, identifying the most problematic dimensions, and noting any dimensions where data was unavailable.

**Gap Diagnosis**: Bullet list of likely causes for each flagged segment (1–2 bullets per flagged gap).

**Recommended Actions**: Numbered list of concrete next steps, ordered by priority (immediate fixes first, longer-term improvements last).

**Limitations**: 2–4 bullet points noting what the analysis cannot determine from the data provided (e.g., intersectional gaps, non-response bias within segments).

Length: Concise — aim for a report a researcher can read in under 5 minutes. Avoid narrative padding.
