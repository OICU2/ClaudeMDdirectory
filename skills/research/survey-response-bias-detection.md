---
name: survey-response-bias-detection
category: research
description: >
  Analyzes survey datasets and response patterns to identify systematic biases that distort findings, including acquiescence bias, social desirability bias, recency effects, and satisficing behavior. Use when someone says their survey results look suspicious, asks why respondents keep agreeing with everything, wants to validate the quality of survey data, needs to clean response data before analysis, or wonders if their questionnaire design is affecting answers.
tags: [survey, bias-detection, research-methods, data-quality, questionnaire]
author: community
---

# Survey Response Bias Detection

This skill audits survey datasets and response patterns to surface specific bias types, quantify their likely impact, and recommend corrective actions before analysis proceeds.

## Detection Workflow

### 1. Intake and Data Assessment
- Request the dataset (or a sample), the questionnaire structure, and the scale types used (Likert, binary, semantic differential, etc.)
- Identify the number of respondents, question count, and response format consistency
- Note any reverse-scored items already present in the instrument

### 2. Screen for Acquiescence Bias (Yea-Saying)
- Calculate the proportion of "agree" or positive-end responses across all items
- Flag if >65% of responses cluster on the agreement side regardless of item content
- Check whether reverse-coded items exist; if absent, note this as a design vulnerability
- Compare response distributions on semantically opposite items — convergence signals acquiescence

### 3. Screen for Social Desirability Bias
- Identify items touching sensitive topics: income, health behaviors, ethics, illegal activity, demographics
- Look for ceiling effects on socially favorable items (e.g., charitable behavior, competence self-rating)
- Check for floor effects on socially unfavorable items (e.g., substance use, negative attitudes)
- Flag implausibly low variance on sensitive items compared to neutral items

### 4. Screen for Recency and Primacy Effects
- Analyze whether response distributions shift systematically across question position
- Compare early-question responses to late-question responses on thematically similar items
- For list-based questions, check if first and last options are disproportionately selected
- Flag fatigue indicators: increasing non-response rate or straight-lining after question 20+

### 5. Screen for Satisficing and Straight-Lining
- Identify respondents who selected the same response option for 80%+ of items
- Calculate response time if available — flag completions under a reasonable threshold
- Check for non-differentiation on matrix/grid questions
- Compute individual-level standard deviation; flag respondents with SD near zero

### 6. Screen for Acquiescence vs. Extreme Response Style
- Plot response frequency distributions per item; bimodal distributions may indicate extreme responding
- Compare midpoint usage rates — very low midpoint selection suggests polarization bias
- Identify whether extreme responses concentrate in specific demographic segments

### 7. Assess Questionnaire Design Vulnerabilities
- Flag leading questions (presuppositions embedded in wording)
- Flag double-barreled items (two concepts in one question)
- Identify absence of "don't know" or "not applicable" options where relevant
- Note scale length inconsistency across items

## Output Format

Produce a structured **Bias Detection Report** with these sections:

**Executive Summary** (3–5 sentences): Overall data quality assessment and the most critical bias risks found.

**Bias Findings Table**:
| Bias Type | Risk Level (Low/Medium/High) | Evidence | Affected Items/% of Sample |
|---|---|---|---|

**Per-Bias Detail** (one block each):
- What was detected
- Specific items or respondent segments implicated
- Estimated direction of distortion (inflates/deflates which constructs)

**Respondent-Level Flags**: List of respondent IDs (or count) recommended for exclusion or sensitivity analysis, with reason codes.

**Design Recommendations**: Numbered list of questionnaire revisions to reduce bias in future waves.

**Analytical Guidance**: Suggest statistical corrections where applicable (e.g., acquiescence correction via ipsatization, weighting adjustments, matched-sampling for social desirability).

Length scales with dataset complexity — minimum one paragraph per detected bias type, no filler where a bias type is not found (simply mark "Not detected").
