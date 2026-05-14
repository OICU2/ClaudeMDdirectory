---
name: writing-numbers-and-units-consistency-audit
description: >
  Scans documents for inconsistent treatment of numbers, percentages, currencies, and measurement units, flagging deviations from a specified or inferred style guide. Use when someone says "check my document for number formatting issues," asks about "inconsistent units across my report," wants to "audit how I've written measurements," needs to "standardize numeric style," or is concerned that "percentages and figures don't look consistent." Applies common style guides (AP, Chicago, APA, or custom rules) as a reference baseline.
category: writing
tags: [consistency, numbers, units, style-guide, editing]
author: community
---

# Numbers and Units Consistency Audit

This skill scans any provided document for inconsistent formatting of numbers, percentages, currencies, and measurement units, then produces a flagged report with corrections and a recommended style rule for each issue type.

## Audit Workflow

1. **Identify the target style guide** — Ask which style guide applies (AP, Chicago, APA, ISO, or custom). If none is specified, infer the most likely standard from context (e.g., journalism → AP, academic → APA) and state the assumption explicitly.

2. **Extract all numeric and unit instances** — Collect every instance of:
   - Spelled-out numbers vs. numerals (e.g., "twelve" vs. "12")
   - Percentages (e.g., "10%", "10 percent", "ten percent")
   - Currencies (e.g., "$10", "10 dollars", "USD 10", "10 USD")
   - Measurements and units (e.g., "5km", "5 km", "5 kilometers")
   - Large numbers (e.g., "1,000,000", "1 million", "1M")
   - Ranges and decimals (e.g., "10-20%", "10% to 20%", "0.5" vs ".5")
   - Dates and times if they contain numerals

3. **Group by category** — Cluster all instances into the categories above for pattern comparison.

4. **Flag inconsistencies** — For each category, identify cases where the same type of value is formatted differently across the document. Mark each flagged instance with its location (paragraph number, sentence snippet, or line number if available).

5. **Apply style guide rules** — For each inconsistency, cite the specific rule from the target style guide that governs correct formatting and determine which variant is correct or preferred.

6. **Propose a document-level rule** — Where the style guide is ambiguous or silent, recommend a consistent internal rule the author should adopt throughout.

## Output Format

Produce a structured audit report with the following sections:

**Style Guide Applied:** [Name of guide and any assumptions made]

**Summary:** One-paragraph overview of how many issues were found and which categories had the most inconsistencies.

**Flagged Issues Table:**

| # | Category | Instance Found | Location | Recommended Form | Rule/Source |
|---|----------|---------------|----------|-----------------|-------------|
| 1 | Percentage | "ten percent" | Para. 3 | "10%" | AP Style: use numerals + % symbol |

List every flagged instance as a row. Do not group multiple issues into one row.

**Document-Level Style Decisions:**
A bulleted list of any rules the author should apply going forward where the style guide was silent or ambiguous, written as clear directives (e.g., "Always write currency as $X.XX with no space before the symbol").

**Corrected Excerpt (optional):** If the document is short (under 500 words), provide a clean version of the full text with all corrections applied. For longer documents, provide corrected versions of only the flagged sentences.
