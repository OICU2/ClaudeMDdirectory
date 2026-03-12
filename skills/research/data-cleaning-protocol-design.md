---
name: data-cleaning-protocol-design
description: >
  Designs structured, step-by-step data cleaning protocols for raw research datasets. Use when someone says "my data is messy," asks about handling missing values or outliers, wants to standardize a dataset before analysis, needs to remove duplicates from survey or experimental data, or is preparing raw data for statistical modeling or publication.
category: research
tags: [data-cleaning, research-methods, data-quality, preprocessing, statistics]
author: community
---

# Data Cleaning Protocol Designer

This skill generates a complete, ordered data cleaning protocol tailored to a specific dataset type and research context, activated whenever a user needs to systematically prepare raw data for analysis.

## Protocol Design Workflow

1. **Identify dataset context** — Determine the data type (survey, experimental, observational, administrative), domain (clinical, social science, environmental, etc.), and downstream analysis goal before writing any steps.

2. **Assess cleaning scope** — Ask or infer which of the four core problem categories are present: missing values, duplicates, outliers, and inconsistencies. Tailor the protocol to only the relevant categories.

3. **Structure the protocol in this fixed order:**
   - **Phase 1 — Initial Inspection:** Load data, check dimensions, review column types, generate a summary report (row count, column count, dtype per field, % missing per column).
   - **Phase 2 — Duplicate Detection and Removal:** Define what constitutes a duplicate for this dataset (exact row vs. key-field match). Flag, inspect, then remove duplicates with a documented decision rule.
   - **Phase 3 — Missing Value Treatment:** Classify missingness mechanism (MCAR, MAR, MNAR). Apply strategy per column: deletion, mean/median/mode imputation, model-based imputation, or sentinel coding. Document thresholds (e.g., drop columns >40% missing).
   - **Phase 4 — Outlier Identification and Resolution:** Apply domain-appropriate detection methods (IQR fences, Z-score, DBSCAN, manual domain thresholds). For each outlier: verify it is not a data entry error, then decide — retain with flag, Winsorize, transform, or remove.
   - **Phase 5 — Consistency and Standardization:** Enforce category label harmonization (e.g., "Male/M/male" → "Male"), unit standardization, date format normalization, string trimming, and range validation against codebook or domain rules.
   - **Phase 6 — Validation and Audit Trail:** Re-run summary statistics, cross-check record counts, verify referential integrity, and produce a cleaning log that records every transformation with before/after counts.

4. **Specify tooling** — Where relevant, recommend concrete implementations: pandas/R dplyr for tabular data, specific functions (`df.duplicated()`, `mice` package, `sklearn.impute`), or domain-specific validators.

5. **Flag irreversibility risks** — Explicitly mark any destructive steps (row deletion, imputation that overwrites originals) and recommend saving a pre-cleaning snapshot before those steps.

## Output Format

Produce a numbered, phase-organized protocol document with the following structure:

- **Header:** Dataset description, cleaning goal, and assumptions stated in 2–3 sentences.
- **Phase blocks (1–6):** Each phase has a bold title, a 1-sentence objective, and 3–8 specific numbered action steps. Steps include concrete decision rules and thresholds, not vague guidance.
- **Decision table:** A compact table mapping each data problem type → detection method → resolution strategy → when to escalate.
- **Audit log template:** A small template (columns: Step, Variable Affected, Action Taken, Records Before, Records After, Analyst Notes) ready to fill in during execution.
- **Total length:** 400–700 words for the protocol body. Use code snippets (fenced blocks) only when a specific function or query adds precision unavailable in plain language.
