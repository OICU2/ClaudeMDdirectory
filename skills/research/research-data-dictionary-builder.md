---
name: research-data-dictionary-builder
description: >
  Generates a standardized data dictionary documenting all variables in a research dataset,
  including definitions, data types, allowable values, and collection sources. Use when someone
  says "document my dataset variables," asks "how do I describe my data fields," wants to
  "create a data dictionary for my study," needs to "standardize variable documentation," or
  is "preparing dataset metadata for publication."
category: research
tags: [data-dictionary, research-documentation, dataset, metadata, variables]
author: community
---

# Research Data Dictionary Builder

Generates a complete, standardized data dictionary for a research dataset by systematically documenting every variable's name, definition, data type, format, allowable values, units, missing data codes, and collection source.

## Workflow

1. **Gather dataset context** — Ask the user to provide: dataset name, research domain, number of variables, file format (CSV, SPSS, etc.), and any existing codebook or schema. If the user provides a sample file or variable list, use it directly.

2. **Extract variable inventory** — Identify every variable (column) in the dataset. If the user shares raw data or headers, parse them. If described verbally, enumerate each one explicitly before proceeding.

3. **Document each variable** — For every variable, collect or infer the following fields:
   - **Variable Name**: Exact name as it appears in the dataset (case-sensitive)
   - **Label**: Human-readable full name
   - **Definition**: Clear, precise description of what the variable measures
   - **Data Type**: One of — String, Integer, Float, Boolean, Date, Categorical, Binary
   - **Format/Units**: e.g., YYYY-MM-DD, kilograms, USD, Likert 1–5
   - **Allowable Values / Range**: Enumerated categories, min–max numeric range, or regex pattern
   - **Missing Data Code**: How missing values are represented (e.g., -99, NA, blank)
   - **Collection Source**: Survey item number, sensor ID, administrative record, instrument name
   - **Notes**: Derived variable logic, known issues, or recoding history

4. **Flag ambiguities** — If any variable's definition, allowable values, or source cannot be determined from what the user provided, explicitly list each gap and ask targeted clarifying questions before finalizing.

5. **Apply naming conventions** — Normalize variable names to snake_case in the Label column if the raw names use inconsistent casing or spaces. Note any renaming in the Notes field.

6. **Validate internal consistency** — Check that allowable values match the stated data type (e.g., a Boolean should not list 5 categories). Flag conflicts.

## Output Format

Produce the data dictionary in three parts:

**Part 1 — Dataset Header Block**
A brief metadata table (plain text or Markdown) containing:
- Dataset Name
- Version / Date
- Principal Investigator / Contact
- Number of Variables
- Number of Records (if known)
- Citation / DOI (if applicable)

**Part 2 — Variable Table**
A Markdown table with one row per variable and these exact columns in order:

| Variable Name | Label | Definition | Data Type | Format / Units | Allowable Values | Missing Code | Collection Source | Notes |

Rows must be sorted by the order variables appear in the dataset, not alphabetically.

**Part 3 — Revision Log**
A short table with columns: Date | Editor | Change Description. Pre-populate with today's date and "Initial draft generated" if no history is provided.

Length: One row per variable with no truncation. For datasets with 50+ variables, produce the full table without summarizing or collapsing rows.
