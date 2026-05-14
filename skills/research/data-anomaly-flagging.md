---
name: data-anomaly-flagging
description: >
  Analyzes a research dataset to detect outliers, missing values, duplicate entries, and inconsistent coding that could compromise study validity. Use when someone says their data looks off, asks about data quality issues, wants to clean their dataset before analysis, needs to check for data entry errors, or is concerned about whether their dataset is ready for statistical analysis.
category: research
tags: [data-quality, outliers, missing-values, data-cleaning, research-integrity]
author: community
---

# Data Anomaly Flagging

This skill systematically audits a research dataset for outliers, missing values, duplicates, and coding inconsistencies, then produces a prioritized report of issues that could compromise study validity.

## Anomaly Detection Workflow

1. **Assess dataset structure first** — Identify variable names, data types, expected ranges, and sample size. Ask the user to clarify expected value ranges or coding schemes if not provided.

2. **Check for missing values** — Count and locate missing, null, blank, or placeholder values (e.g., 999, -99, "N/A") per variable. Calculate missingness rate per column and flag any variable exceeding 5% missing as moderate concern, 20% as high concern.

3. **Detect duplicate entries** — Identify exact duplicate rows and near-duplicate rows (same ID with differing values). Flag participant/record IDs that appear more than once.

4. **Flag outliers** — For continuous variables, apply the IQR method (values below Q1 − 1.5×IQR or above Q3 + 1.5×IQR) and z-score method (|z| > 3). Report both the flagged values and their row locations. Do not delete — mark for review.

5. **Audit coding consistency** — For categorical variables, check for case mismatches (e.g., "Male" vs "male"), typos, unexpected categories, and values outside the defined coding scheme. For date variables, check for impossible dates or format inconsistencies.

6. **Check cross-variable logic** — Identify implausible combinations (e.g., age = 5 with occupation = "retired", or end date before start date). Flag rows where variable relationships violate expected logic.

7. **Prioritize findings by severity**:
   - **Critical**: Duplicated IDs, impossible values, cross-variable contradictions
   - **High**: >20% missingness, extreme outliers (|z| > 4), systematic coding errors
   - **Moderate**: Isolated outliers, <20% missingness, minor coding inconsistencies

## Output Format

Produce a structured anomaly report with the following sections:

**Dataset Summary**
- Total rows, columns, and data types detected
- Overall data quality score (percentage of clean rows)

**Anomaly Findings Table**
For each issue found, list: Variable Name | Issue Type | Severity | Count | Row Locations (up to 10 examples) | Recommended Action

**Critical Issues** (listed first, each as a numbered item with variable, description, affected rows, and specific fix recommendation)

**Moderate/Low Issues** (bulleted list with variable, description, and brief recommendation)

**Recommended Next Steps** — 3–5 ordered actions the researcher should take before proceeding to analysis, specific to the issues found.

Keep the report scannable. Use tables where possible. Flag uncertainty explicitly (e.g., "Cannot determine if 999 is a missing value placeholder without codebook confirmation").
