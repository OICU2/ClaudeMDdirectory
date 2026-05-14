---
name: research-variable-crosswalk-builder
description: >
  Builds structured crosswalk tables that map equivalent variables across multiple datasets or studies that use different naming conventions, scales, or coding schemes. Use when someone says "these datasets use different variable names for the same thing," asks about harmonizing variables across studies, wants to merge datasets with inconsistent column names, needs to compare survey items across waves or sources, or is trying to align codebooks from different data providers.
category: research
tags: [data-harmonization, crosswalk, variable-mapping, codebook, dataset-integration]
author: community
---

# Research Variable Crosswalk Builder

This skill creates structured variable crosswalk tables that map semantically equivalent fields across multiple datasets with differing naming conventions, enabling consistent cross-source analysis.

## Crosswalk Building Workflow

1. **Collect source metadata**: Ask the user to provide variable names, labels, value codes, and units from each dataset. Accept raw codebook text, CSV headers, or paste-in variable lists.

2. **Identify anchor dataset**: Establish one dataset as the reference. All mappings will resolve to this dataset's variable names as the canonical form.

3. **Group variables by construct**: Cluster variables that measure the same underlying concept (e.g., age, income, employment status) across all sources. Flag ambiguous groupings for user review.

4. **Assess mapping type for each group**:
   - **Direct match**: Same construct, same scale/coding — note as clean 1:1 mapping
   - **Recoding required**: Same construct, different scale or categories — document transformation logic (e.g., 1–5 Likert → binary collapse)
   - **Partial match**: Overlapping but not identical construct — flag with a confidence rating (High / Medium / Low)
   - **No match**: Construct exists in one source only — mark as unmapped

5. **Document transformation rules**: For any recoding required, write out the explicit mapping formula or lookup table (e.g., `Source B: 1=Yes, 2=No → Canonical: 0=No, 1=Yes`).

6. **Flag data quality issues**: Note differences in missing value codes, skip patterns, population scope, or collection period that could affect comparability.

7. **Validate with user**: Present grouped mappings before finalizing. Ask the user to confirm or correct any uncertain groupings.

## Output Format

Produce a markdown table as the primary output with one row per variable group:

| Canonical Variable | Canonical Label | Source A Variable | Source B Variable | Source C Variable | Mapping Type | Transformation Notes | Confidence |
|---|---|---|---|---|---|---|---|
| `age_years` | Age in years | `AGE` | `respondent_age` | `Q3_age` | Direct | None required | High |
| `income_bracket` | Income category | `INC_CAT` | `hhincome` | — | Recode | Source B: continuous → recode to 6 brackets per canonical scheme | Medium |

Below the table, include:
- **Unmapped variables**: A bulleted list of variables with no equivalent, organized by source
- **Transformation rules**: A numbered list of any recoding formulas referenced in the table
- **Comparability notes**: 2–5 bullet points flagging substantive differences (e.g., reference periods, universe differences, known measurement discrepancies)

For large crosswalks (20+ variables), group the table by thematic domain (demographics, outcomes, covariates) with a header row separating each section.
