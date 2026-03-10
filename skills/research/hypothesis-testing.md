---
name: hypothesis-testing
description: >
  Formulates and evaluates hypotheses using rigorous statistical or experimental methods. Use when someone says "I want to test whether," asks "how do I know if X causes Y," or wants to design an experiment, validate an assumption, or determine if results are statistically significant.
category: research
tags: [statistics, experimentation, scientific-method, data-analysis, validation]
author: community
---

# Hypothesis Testing

This skill guides structured hypothesis formulation and testing, applying appropriate statistical or experimental methods when users need to validate claims, analyze data, or design experiments.

## Hypothesis Testing Workflow

### 1. Clarify the Research Question
- Identify the core claim or assumption being evaluated
- Determine the domain: A/B testing, clinical, behavioral, business metric, scientific, etc.
- Ask for available data, sample size, and measurement variables if not provided

### 2. Formulate Hypotheses
- Write a precise **null hypothesis (H₀)**: the default assumption of no effect or no difference
- Write a precise **alternative hypothesis (H₁)**: the specific effect or difference being tested
- Confirm directionality: one-tailed vs. two-tailed test

### 3. Select the Appropriate Test
Match the test to data type and structure:

| Scenario | Test |
|---|---|
| Compare two means, independent groups | Independent samples t-test |
| Compare two means, same group | Paired t-test |
| Compare 3+ group means | One-way ANOVA |
| Compare proportions | Chi-square or z-test for proportions |
| Measure correlation | Pearson or Spearman correlation |
| Non-normal distributions | Mann-Whitney U, Kruskal-Wallis |
| Time-to-event data | Log-rank test, Cox regression |

### 4. Define Parameters Before Testing
- Set significance level (α): default 0.05 unless domain requires otherwise
- Calculate or assess required sample size and statistical power (target ≥ 0.80)
- Identify and address potential confounders or biases

### 5. Evaluate Results
- Compute or interpret the test statistic and **p-value**
- State whether to reject or fail to reject H₀ at the chosen α
- Calculate **effect size** (Cohen's d, r, η², odds ratio) — never rely on p-value alone
- Compute **confidence intervals** for the estimate
- Flag violations of test assumptions (normality, independence, homogeneity of variance)

### 6. Interpret Findings
- Distinguish statistical significance from practical significance
- Acknowledge limitations: sample bias, measurement error, multiple comparisons
- Apply Bonferroni correction or FDR adjustment when running multiple tests
- State what the results do and do not prove

## Output Format

Produce a structured hypothesis test report with these sections:

**Research Question:** One sentence stating what is being tested.

**Hypotheses:**
- H₀: [Null hypothesis, precisely stated]
- H₁: [Alternative hypothesis, with directionality]

**Test Selected:** [Name of test and justification in 1–2 sentences]

**Parameters:** α = [value] | Power = [value] | Sample size = [n] | Tails = [one/two]

**Results:**
- Test statistic: [value]
- p-value: [value]
- Effect size: [metric and value]
- Confidence interval: [range]
- Decision: Reject H₀ / Fail to reject H₀

**Interpretation:** 2–4 sentences explaining what the result means in plain language, including practical significance and key limitations.

**Caveats:** Bullet list of assumptions checked, violations noted, and recommended next steps.