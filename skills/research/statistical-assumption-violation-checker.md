---
name: statistical-assumption-violation-checker
category: research
description: >
  Reviews a proposed statistical analysis plan and flags violations of underlying statistical assumptions before any data is collected or analyzed. Use when someone says "I'm planning to run a regression," asks about whether their analysis plan is valid, shares a proposed study design for review, wants to check if their statistical approach is appropriate, or describes a methodology they intend to use. Surfaces assumption violations for tests like t-tests, ANOVA, linear regression, logistic regression, chi-square, and nonparametric alternatives.
tags: [statistics, research-design, methodology, assumptions, data-analysis]
author: community
---

# Statistical Assumption Violation Checker

This skill audits a proposed statistical analysis plan against the formal assumptions of the intended test(s) and returns a structured violation report before data collection begins, preventing wasted effort and invalid conclusions.

## Assumption Audit Workflow

1. **Identify the intended statistical test(s)** from the plan. If ambiguous, ask the user to clarify the outcome variable type, number of groups, and research question before proceeding.

2. **Map assumptions for each test** using this reference:
   - **Independent samples t-test**: normality of each group, homoscedasticity (Levene's), independence of observations, continuous DV
   - **Paired t-test**: normality of difference scores, paired/matched observations, continuous DV
   - **One-way ANOVA**: normality within groups, homoscedasticity, independence, continuous DV
   - **Linear regression**: linearity, independence of residuals, homoscedasticity of residuals, normality of residuals, no perfect multicollinearity
   - **Logistic regression**: independence of observations, no perfect multicollinearity, linearity of log-odds for continuous predictors, adequate sample size per outcome event
   - **Chi-square test**: independence of observations, expected cell frequency ≥ 5 in each cell, categorical variables
   - **Pearson correlation**: bivariate normality, linearity, no significant outliers, continuous variables
   - **Mann-Whitney U / Wilcoxon**: ordinal or continuous DV, independence, similar distributional shape if testing medians
   - **Repeated measures ANOVA**: sphericity (Mauchly's), normality, no extreme outliers

3. **Evaluate each assumption against the plan description**:
   - Flag assumptions that are **likely violated** based on design details (e.g., clustered data breaks independence, Likert scales violate continuity)
   - Flag assumptions that are **unverifiable pre-collection** and note what diagnostics to run post-collection
   - Flag assumptions that are **likely satisfied** with brief justification

4. **Assess severity** for each violation:
   - **Critical**: invalidates the test entirely without correction (e.g., non-independence in a standard t-test)
   - **Moderate**: degrades power or inflates Type I error; may be manageable with corrections or robust alternatives
   - **Minor**: small samples or slight deviations often tolerable; note robustness conditions

5. **Recommend remediation** for each violation:
   - Suggest design changes that can be made pre-collection (e.g., randomization, matched pairs, stratified sampling)
   - Suggest alternative tests appropriate for the actual data structure
   - Specify post-collection diagnostics (e.g., Shapiro-Wilk, Bartlett's test, VIF, Durbin-Watson) to verify borderline assumptions

6. **Check sample size adequacy** against the intended test's requirements:
   - Central Limit Theorem thresholds (n ≥ 30 per group as a rough guide for normality relaxation)
   - Rule-of-ten for logistic regression (≥10 outcome events per predictor)
   - Expected cell count requirements for chi-square
   - Flag if power analysis has not been mentioned

## Output Format

Produce a structured report with these sections:

**Analysis Plan Summary** (2–3 sentences restating the user's intended test and design to confirm understanding)

**Assumption Audit Table**

| Assumption | Test It Applies To | Status | Severity | Issue |
|---|---|---|---|---|
| [Assumption name] | [Test] | ✅ Likely Met / ⚠️ Unverifiable / ❌ Likely Violated | Critical / Moderate / Minor / N
