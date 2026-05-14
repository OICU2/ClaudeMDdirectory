---
name: longitudinal-panel-attrition-bias-report
description: >
  Analyzes demographic shifts between baseline and follow-up samples to identify and quantify attrition-driven selection bias in longitudinal research panels. Use when someone says "my follow-up sample looks different from baseline," asks about who dropped out of their study, or wants to check whether panel attrition is distorting their results. Also triggers when researchers mention retention bias, differential dropout, or need to validate sample representativeness across waves.
category: research
tags: [longitudinal, attrition, selection-bias, panel-data, survey-methodology]
author: community
---

# Longitudinal Panel Attrition Bias Report

This skill compares baseline and follow-up sample characteristics to detect, quantify, and interpret attrition-driven selection bias, producing a structured report Claude uses whenever a researcher needs to assess whether dropout patterns have compromised sample representativeness.

## Analysis Workflow

1. **Collect sample information**: Request baseline N, follow-up N, attrition rate, and which demographic or key variables are available for both waves. If the user has data pasted or described, extract variable names and group counts.

2. **Compute attrition rate**: Calculate overall dropout percentage `((baseline_N - followup_N) / baseline_N) × 100`. Flag if attrition exceeds 20% as a high-risk threshold warranting closer scrutiny.

3. **Compare distributions for each variable**:
   - For categorical variables (gender, race, education, income bracket): compute percentage distributions at baseline vs. follow-up; calculate absolute percentage-point differences.
   - For continuous variables (age, income, test scores): compare means and standard deviations across waves.

4. **Test statistical significance**:
   - Use chi-square logic for categorical variables; flag differences with effect sizes (Cramér's V) ≥ 0.10 as meaningful.
   - Use standardized mean difference (Cohen's d) for continuous variables; flag d ≥ 0.20 as meaningful.
   - If the user cannot provide test statistics, instruct them on which tests to run and interpret the pattern directionally.

5. **Identify bias direction**: For each flagged variable, state which group is overrepresented or underrepresented in the follow-up sample relative to baseline, and what that implies for generalizability.

6. **Assess composite bias risk**: Classify overall attrition bias as **Low** (no variables flagged), **Moderate** (1–2 variables with small effects), or **High** (3+ variables flagged or any large effect size).

7. **Recommend corrective actions**: Based on flagged variables, suggest specific remedies — inverse probability weighting (IPW), post-stratification raking, multiple imputation, or sensitivity analyses — matched to the bias pattern found.

## Output Format

Produce a structured report with the following sections:

**Attrition Summary**
- Baseline N, Follow-up N, Attrition N, Attrition Rate (%)
- Overall bias risk classification (Low / Moderate / High)

**Variable-by-Variable Comparison Table**
A markdown table with columns: Variable | Baseline % or Mean | Follow-up % or Mean | Difference | Effect Size | Flagged?

**Bias Interpretation**
2–4 sentences per flagged variable explaining which group dropped out more, the likely direction of distortion in study outcomes, and which research conclusions are most at risk.

**Overall Bias Assessment**
1 paragraph summarizing the composite threat to internal and external validity.

**Recommended Corrections**
A numbered list of 2–4 actionable remedies with one sentence each explaining when and how to apply them.

Report length: 400–800 words depending on number of variables. Use markdown headers and tables. Avoid statistical jargon without brief plain-language definitions.
