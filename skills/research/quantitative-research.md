---
name: quantitative-research
category: research
description: >
  Designs and executes rigorous quantitative research frameworks to measure phenomena and test hypotheses at scale. Use when someone wants to run a survey study, needs to design an experiment with statistical controls, asks how to measure something numerically, wants to validate a hypothesis with data, or needs to analyze patterns across large datasets.
tags: [research, statistics, hypothesis-testing, survey-design, data-analysis]
author: community
---

# Quantitative Research

Guides the full lifecycle of quantitative research — from hypothesis formation and study design through data collection, statistical analysis, and interpretation — ensuring methodological rigor and reproducible results.

## Research Design Workflow

### 1. Define the Research Question
- State the hypothesis in falsifiable form: "X causes/correlates with/predicts Y under conditions Z"
- Identify dependent variable(s) (what you measure) and independent variable(s) (what you manipulate or observe)
- Specify confounders and control variables upfront
- Set the unit of analysis: individual, session, cohort, transaction, etc.

### 2. Choose Study Type
Select the appropriate design based on the research question:
- **Randomized Controlled Trial (RCT)**: causal claims, A/B testing, treatment effects
- **Observational (cross-sectional)**: snapshot comparisons, prevalence, correlation
- **Longitudinal/Panel**: change over time, lagged effects, cohort tracking
- **Survey-based**: self-reported attitudes, behaviors, demographics at scale
- **Secondary data analysis**: existing datasets, logs, public records

### 3. Determine Sample and Power
- Define the target population and sampling frame
- Calculate required sample size using power analysis:
  - Set significance level α (typically 0.05)
  - Set desired power (1 - β), typically 0.80 or 0.90
  - Estimate minimum detectable effect size (Cohen's d, odds ratio, etc.)
- Specify sampling method: random, stratified, cluster, convenience (note limitations)
- Identify inclusion/exclusion criteria

### 4. Design Measurement Instruments
- Operationalize each variable with a specific, measurable definition
- For surveys: use validated scales where available; avoid double-barreled, leading, or ambiguous questions
- Specify measurement scale for each variable: nominal, ordinal, interval, ratio
- Plan for reliability checks: Cronbach's alpha for scales, inter-rater reliability for coded data
- Define data collection timeline and method (API logs, survey platform, sensor, database query)

### 5. Pre-register the Study (if original research)
Document before data collection:
- Hypotheses (directional or non-directional)
- Primary and secondary outcomes
- Statistical tests to be used
- Decision rules for stopping or excluding data

### 6. Data Collection and Cleaning
- Log collection date, source, and version
- Check for missing data: report rates, apply listwise deletion or imputation with justification
- Identify and handle outliers: winsorize, remove with documented threshold, or report sensitivity analysis
- Verify distributions match expected ranges; flag anomalies

### 7. Statistical Analysis
Match the test to the data type and design:

| Goal | Data Type | Test |
|---|---|---|
| Compare 2 group means | Continuous | t-test (independent or paired) |
| Compare 3+ group means | Continuous | ANOVA + post-hoc (Tukey, Bonferroni) |
| Relationship between variables | Continuous | Pearson r or Spearman ρ |
| Predict outcome | Mixed | Linear or logistic regression |
| Count/frequency differences | Categorical | Chi-square, Fisher's exact |
| Time-to-event | Continuous | Kaplan-Meier, Cox regression |
| Repeated measures | Continuous | Mixed-effects model |

- Report effect sizes alongside p-values (Cohen's d, η², OR, R²)
- Apply corrections for multiple comparisons (Bonferroni, FDR) when testing multiple hypotheses
- Check model assumptions: normality, homoscedasticity, independence, linearity

### 8. Interpret Results
- State whether the null hypothesis is rejected or retained
- Interpret effect size in practical terms, not just statistical significance
- Identify alternative explanations and threats to validity:
  - Internal validity: confounding, selection bias, attrition