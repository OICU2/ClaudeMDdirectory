---
name: cross-source-data-schema-alignment
description: >
  Audits and reconciles structural differences between datasets from multiple sources so they can be merged or compared without introducing analytical errors. Use when someone says their datasets don't match up, asks how to combine data from different systems, wants to merge tables with conflicting column names, needs to compare data across sources with different formats, or is getting errors when joining datasets from multiple providers.
category: research
tags: [data, schema, merging, reconciliation, integration]
author: community
---

# Cross-Source Data Schema Alignment

This skill systematically identifies and resolves structural mismatches between datasets from different sources so they can be safely merged, joined, or compared.

## Schema Audit and Reconciliation Workflow

1. **Inventory each dataset's schema**
   - List all field/column names, data types, nullability, and sample values for each source
   - Note the primary or natural key candidates in each dataset
   - Identify the intended grain (one row = what entity/event?)

2. **Detect structural conflicts**
   - **Name mismatches**: Same concept, different column names (e.g., `customer_id` vs `cust_num` vs `ClientID`)
   - **Type mismatches**: Same field stored as different types (e.g., date as `VARCHAR` in one source, `DATE` in another)
   - **Format mismatches**: Inconsistent encodings (e.g., `"2024-01-15"` vs `"01/15/2024"`, `"M"/"F"` vs `1/0`)
   - **Grain mismatches**: Datasets aggregated at different levels (daily vs monthly, per-user vs per-session)
   - **Missing fields**: Fields present in one source but absent in another
   - **Duplicate semantics**: Two fields that appear different but capture the same thing

3. **Map equivalent fields across sources**
   - Produce an explicit field-to-field mapping table
   - Flag confidence level for each mapping: confirmed match, likely match, ambiguous, no match
   - Note any fields that require transformation before equivalence holds

4. **Specify required transformations**
   - For each conflict, write the exact transformation needed (cast, reformat, normalize, aggregate, split, or drop)
   - Flag transformations that may introduce data loss or assumptions
   - Identify which source should be treated as authoritative when values conflict

5. **Define the merged schema**
   - Propose the target schema with unified field names, canonical types, and nullability rules
   - Specify how to handle fields unique to one source (include with nulls, exclude, or flag as source-specific)
   - Confirm the join keys and join type (inner, left, full outer)

6. **Surface analytical risk warnings**
   - Duplicate records risk after merge
   - Null inflation from mismatched coverage
   - Silent data loss from type coercion
   - Aggregation errors from grain differences

## Output Format

Produce a structured schema alignment report with these sections:

**1. Dataset Inventory Table**
One row per source, columns: Source Name | Row Count | Key Fields | Grain | Notable Issues

**2. Conflict Registry**
A table listing every detected conflict: Field | Source A Value/Type | Source B Value/Type | Conflict Type | Severity (blocking/warning/informational)

**3. Field Mapping Table**
Columns: Target Field Name | Source A Field | Source B Field | Transformation Required | Confidence | Notes

**4. Transformation Specifications**
Numbered list of exact transformations in executable pseudocode or SQL where applicable.

**5. Proposed Target Schema**
Table with: Field Name | Data Type | Nullable | Source(s) | Description

**6. Risk Summary**
Bulleted list of analytical risks with recommended mitigations.

Keep the report precise and scannable. Use tables for all structured comparisons. Flag every assumption explicitly. If sample data was provided, include concrete examples in conflict and transformation descriptions.
