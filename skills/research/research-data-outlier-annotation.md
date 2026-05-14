---
name: research-data-outlier-annotation
description: >
  Flags statistical outliers in collected datasets and generates annotated notes explaining each anomaly's potential impact on research conclusions. Use when someone says their data has unusual values, asks about suspicious data points, wants to identify anomalies in their research dataset, needs to document irregularities before analysis, or is concerned that extreme values might skew their findings.
category: research
tags: [outlier-detection, data-annotation, statistical-analysis, research-integrity, data-quality]
author: community
---

# Research Data Outlier Annotation

This skill identifies statistical outliers in research datasets, labels each anomaly with its detection method and severity, and generates structured notes explaining how each outlier could affect research conclusions.

## Outlier Detection and Annotation Workflow

1. **Ingest the dataset**: Accept data as raw values, CSV, table, or descriptive summary. If the dataset is not provided, ask the user to paste or describe it before proceeding.

2. **Identify applicable detection methods** based on data characteristics:
   - **Z-score method** (|z| > 3): For normally distributed continuous data
   - **IQR method** (below Q1 − 1.5×IQR or above Q3 + 1.5×IQR): For skewed or non-normal distributions
   - **Modified Z-score** (|M| > 3.5): For small samples or heavy-tailed distributions
   - **Domain threshold check**: Flag values that violate known domain constraints (e.g., negative reaction times, ages > 120)

3. **Apply at least two detection methods** and note agreement or disagreement between them. If methods disagree, flag the point as a "contested outlier" and explain why.

4. **For each detected outlier, annotate the following**:
   - Variable name and raw value
   - Detection method(s) that flagged it
   - Severity level: **Minor** (borderline), **Moderate** (clear deviation), **Severe** (extreme or impossible value)
   - Likely cause categories: measurement error, data entry error, natural variation, instrument malfunction, or unknown
   - Impact assessment: how including vs. excluding this point would affect the mean, variance, correlation, or regression slope
   - Recommended action: retain, investigate further, winsorize, or exclude with justification

5. **Assess cumulative impact**: After annotating individual outliers, evaluate whether the combined set of outliers follows a pattern (e.g., clustered in one condition, one participant, one time period) that suggests a systemic issue rather than random noise.

6. **Generate a research implications summary**: Explain in plain language how the outliers collectively could affect the study's conclusions, statistical power, and validity of inferential tests.

## Output Format

Produce the following sections in order:

**1. Outlier Registry Table**
A table with columns: `ID | Variable | Raw Value | Detection Method(s) | Severity | Likely Cause | Recommended Action`

**2. Individual Outlier Annotations**
For each outlier, a labeled block (2–4 sentences) covering: what the value is, why it is anomalous, what likely caused it, and how it affects the analysis if retained.

**3. Cumulative Pattern Assessment**
One paragraph (3–5 sentences) describing whether outliers are random or systemic and what that implies for data collection or methodology.

**4. Research Conclusions Impact Summary**
One paragraph (4–6 sentences) stating which specific conclusions are at risk of being invalidated or overstated due to outliers, and what the researcher should do before finalizing results.

**5. Recommended Next Steps**
A numbered list of 3–5 concrete actions the researcher should take (e.g., "Re-examine raw instrument logs for participant 14 to verify the recorded value of 847ms").
