---
name: cross-study-sample-comparability-report
description: >
  Analyzes demographic, methodological, and contextual differences across multiple study samples to identify threats to cross-study comparison validity. Use when someone wants to compare findings across studies, asks whether results from different samples generalize to each other, or needs to evaluate if pooling data from separate studies is appropriate. Also triggers when someone says their samples look different across studies or wonders why replication results diverge.
category: research
tags: [research, methodology, meta-analysis, sampling, validity, demographics]
author: community
---

# Cross-Study Sample Comparability Report

This skill systematically audits demographic and contextual differences across two or more study samples and produces a structured comparability report flagging threats to cross-study validity.

## Analysis Workflow

1. **Extract sample characteristics** from each study provided: age, sex/gender, race/ethnicity, education, geographic region, recruitment method, inclusion/exclusion criteria, sample size, and time of data collection.

2. **Identify measurement equivalence issues**: Check whether the same constructs were measured with identical instruments, response scales, and administration conditions across studies.

3. **Flag demographic mismatches**: For each characteristic, calculate or estimate the degree of difference (e.g., mean age gap, proportion differences in gender or ethnicity). Flag any characteristic where studies differ by a meaningful margin (>10 percentage points for categorical variables; >0.5 SD for continuous variables as a heuristic).

4. **Assess contextual and procedural differences**: Note differences in setting (lab vs. field vs. online), incentive structures, cultural or national context, historical period, and any known moderating variables relevant to the research domain.

5. **Evaluate statistical comparability**: If sample sizes are provided, note power asymmetries. If effect sizes or variance estimates are available, flag heterogeneity.

6. **Rate overall comparability**: Assign a comparability rating — High, Moderate, or Low — based on cumulative threats identified.

7. **Generate recommendations**: Specify which differences should be statistically controlled, whether subgroup analyses are warranted, and whether pooling or direct comparison is defensible.

## Output Format

Produce a structured report with the following sections:

**Sample Characteristics Table**
A side-by-side table listing each study as a column and each demographic/contextual variable as a row. Mark cells with ⚠️ where meaningful differences exist.

**Flagged Comparability Threats**
A numbered list of specific threats, each including:
- Variable name
- Nature and magnitude of the difference
- Potential direction of bias this introduces

**Overall Comparability Rating**
A single line: `Comparability: High / Moderate / Low` followed by a 2–3 sentence rationale.

**Recommendations**
3–6 concrete, actionable recommendations for analysts or reviewers (e.g., "Run age as a covariate in any pooled analysis," "Treat samples as independent replications rather than combining them").

**Caveats**
Note any characteristics that could not be assessed due to missing information in the provided studies.

Length: Concise but complete. The table and flagged threats are mandatory; omit no flagged issue for brevity.
