---
name: survey-nonresponse-bias-analysis
category: research
description: >
  Analyzes survey data to detect and quantify nonresponse bias by comparing early versus late respondents and validating against known population benchmarks. Use when someone says their survey may have a response bias problem, asks whether nonrespondents differ from respondents, wants to assess how representative their survey sample is, needs to evaluate survey data quality, or is concerned that low response rates are skewing their results.
tags: [survey, nonresponse-bias, sampling, data-quality, research-methods]
author: community
---

# Survey Nonresponse Bias Analysis

This skill detects and quantifies nonresponse bias in survey data by applying wave analysis (early vs. late respondents as a proxy for nonrespondents) and benchmarking against known population parameters.

## Analysis Workflow

### 1. Clarify Inputs
Before proceeding, confirm the user has:
- Response data with timestamps or response wave identifiers
- Key demographic or outcome variables to test
- A population benchmark source (census, administrative records, prior survey, or sampling frame statistics)

If timestamps are unavailable, note that wave analysis is not possible and shift to benchmark-only analysis.

### 2. Wave Analysis (Early vs. Late Respondents)
- Split respondents into at least two waves: early (first ~50%) and late (last ~20–25%), based on response date or contact attempt number
- For continuous variables: run independent samples t-tests or Mann-Whitney U tests comparing early vs. late waves
- For categorical variables: run chi-square tests or Fisher's exact tests
- Calculate effect sizes (Cohen's d for continuous, Cramér's V for categorical)
- Interpret late respondents as proxies for nonrespondents; significant differences signal likely nonresponse bias

### 3. Benchmark Analysis
- Compare sample proportions/means for key variables against known population values
- Use z-tests for proportions or one-sample t-tests for means
- Calculate the absolute bias estimate: `B = (sample estimate) − (population parameter)`
- Compute relative bias: `RB = B / population parameter × 100%`
- Flag variables where |RB| > 5% as potentially biased

### 4. Bias Severity Classification
Classify each tested variable:
- **Low bias**: no significant wave difference AND |RB| < 5%
- **Moderate bias**: significant wave difference OR 5% ≤ |RB| < 15%
- **High bias**: significant wave difference AND |RB| ≥ 15%, or |RB| ≥ 20% on any key variable

### 5. Mitigation Recommendations
Based on findings, recommend as applicable:
- Post-stratification weighting to align sample to population benchmarks
- Raking/iterative proportional fitting for multiple variables simultaneously
- Sensitivity analysis: rerun key analyses with and without weights
- If bias is high: disclose limitations explicitly in reporting; consider follow-up with nonrespondents

## Output Format

Produce a structured analysis report with the following sections:

**1. Summary** (3–5 sentences): Overall bias risk level, number of variables tested, and top concern variables.

**2. Wave Analysis Table**
| Variable | Early Mean/% | Late Mean/% | Test Statistic | p-value | Effect Size | Bias Signal |
Each row flagged as Yes/No/Borderline.

**3. Benchmark Comparison Table**
| Variable | Sample Value | Population Value | Absolute Bias | Relative Bias (%) | Risk Level |

**4. Overall Bias Assessment**: One of Low / Moderate / High, with a 2–3 sentence justification.

**5. Recommended Actions**: Bulleted list of specific corrective steps, ordered by priority.

**6. Limitations**: Note any missing data, unverified benchmarks, or analytic constraints.

Keep the report concise but complete. Use plain language for non-statistician audiences while preserving technical precision in tables and test results.
