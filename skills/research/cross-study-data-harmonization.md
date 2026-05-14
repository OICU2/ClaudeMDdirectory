---
name: cross-study-data-harmonization
description: >
  Identifies inconsistencies in variable definitions, scales, and units across multiple datasets and produces a unified codebook for combined analysis. Use when someone wants to merge datasets from different studies, asks about reconciling conflicting variable definitions, needs to combine data collected with different instruments or scales, wants to check whether two datasets are compatible for pooled analysis, or is struggling with inconsistent coding schemes across research sites.
category: research
tags: [data-harmonization, codebook, meta-analysis, data-integration, variable-mapping]
author: community
---

# Cross-Study Data Harmonization

This skill systematically audits variable definitions, measurement scales, units, and coding conventions across multiple datasets and generates a unified codebook that enables valid combined analysis.

## Harmonization Workflow

### 1. Inventory Each Dataset
- Extract variable names, data types, value ranges, units, and any existing codebook or data dictionary for each dataset
- Note the study design, population, collection period, and instrument version for each source
- Flag variables that appear in more than one dataset by name or conceptual meaning

### 2. Identify Conflicts and Gaps
Check each shared variable for:
- **Label mismatches**: Same concept, different names (e.g., `age_years` vs. `AGE` vs. `participant_age`)
- **Scale conflicts**: Likert 1–5 vs. 1–7, raw scores vs. percentiles, imperial vs. metric
- **Coding conflicts**: Binary 0/1 vs. 1/2, string "Yes"/"No" vs. boolean
- **Missing value conventions**: -99, NA, blank, 999 — document what each study used
- **Temporal or version differences**: Updated diagnostic criteria, revised questionnaire editions
- **Variables present in one dataset but absent in another** — mark as dataset-specific

### 3. Develop Harmonization Rules
For each conflicting variable, specify:
- The canonical variable name and definition to use in the merged dataset
- The transformation rule (formula, recode table, or crosswalk) to convert each source to the canonical form
- Whether transformation introduces information loss or assumptions (flag these explicitly)
- A confidence rating: **High** (direct equivalence), **Medium** (requires assumption), **Low** (approximate or partial match)

### 4. Handle Irreconcilable Variables
- Mark variables that cannot be harmonized as **unharmonizable** with a reason
- Suggest whether to retain them as dataset-specific indicator columns or drop them
- Note implications for statistical power and subgroup analyses

### 5. Validate the Codebook
- Cross-check transformed variables against original distributions (means, frequencies, ranges) to confirm transformations are correct
- List any edge cases or outlier values that need manual review

## Output Format

Produce the following three artifacts:

**1. Conflict Summary Table**
A markdown table with columns: `Variable`, `Dataset A Name`, `Dataset B Name` (repeat per dataset), `Conflict Type`, `Severity (High/Medium/Low)`, `Notes`

**2. Unified Codebook**
A markdown table with columns: `Canonical Name`, `Definition`, `Data Type`, `Allowed Values / Range`, `Units`, `Missing Value Code`, `Source Datasets`, `Harmonization Rule`, `Confidence`

**3. Transformation Scripts (pseudocode or language-specific)**
For each recode or rescaling operation, provide copy-ready code in the user's preferred language (R, Python, Stata, SPSS) or pseudocode if no preference is stated. Include inline comments explaining each transformation's rationale.

Each artifact should be clearly headed and separated. Flag any harmonization decision that rests on an assumption with a ⚠️ warning and a plain-language explanation of the risk.
