---
name: secondary-data-comparability-checklist
description: >
  Evaluates whether two or more secondary datasets can be meaningfully compared by systematically checking for definitional, temporal, geographic, and methodological alignment. Use when someone asks "can I compare these two datasets," wants to combine data from different sources, is unsure if findings across studies are compatible, needs to validate cross-source analysis, or is merging government statistics with survey data.
category: research
tags: [data-quality, secondary-data, research-methods, comparative-analysis, data-validation]
author: community
---

# Secondary Data Comparability Checklist

This skill runs a structured comparability audit across two or more secondary datasets and flags specific conflicts or gaps that would undermine valid comparison.

## Comparability Audit Workflow

**Step 1 — Identify the datasets**
Ask the user to name each dataset and its source. If not provided, request: source organization, publication year, and the specific variables or metrics being compared.

**Step 2 — Check definitional alignment**
For each shared variable, verify:
- Are core concepts defined the same way? (e.g., "unemployment" vs. "joblessness," "household income" vs. "family income")
- Do age brackets, income bands, or categorical groupings match exactly?
- Are units of measurement identical (currency, rate per 1,000, percentage points)?
- Flag any definitional mismatch as a **CRITICAL** incompatibility.

**Step 3 — Check temporal alignment**
- Do collection periods overlap or match? Note exact reference periods (calendar year, fiscal year, rolling 12-month).
- Are there known structural breaks, policy changes, or methodology revisions between the periods?
- Flag non-overlapping periods or mismatched reference frames as **MODERATE** or **CRITICAL** depending on context.

**Step 4 — Check geographic alignment**
- Do geographic boundaries match? (e.g., metropolitan statistical area vs. city limits vs. county)
- Were boundary changes applied between datasets?
- Are population coverage areas comparable (national vs. regional vs. local)?
- Flag boundary mismatches as **MODERATE** or **CRITICAL**.

**Step 5 — Check sampling and collection methods**
- Were the same populations sampled (e.g., civilian non-institutional vs. all residents)?
- Do sampling frames, response modes (phone, online, in-person), and response rates differ significantly?
- Are weighting and adjustment procedures documented and compatible?
- Flag methodological divergence as **MODERATE** incompatibility unless it directly affects the variable of interest, then escalate to **CRITICAL**.

**Step 6 — Check aggregation and imputation**
- Were missing values handled the same way?
- Is one dataset a subset or derivation of the other?
- Are there seasonal adjustments applied to one but not the other?

**Step 7 — Render a comparability verdict**
Assign one of three verdicts:
- ✅ **Comparable** — No critical conflicts; minor issues noted but manageable with caveats.
- ⚠️ **Conditionally Comparable** — Moderate conflicts exist; comparison is valid only with documented adjustments or restricted scope.
- ❌ **Not Comparable** — One or more critical conflicts make direct comparison invalid without data transformation or reprocessing.

## Output Format

Produce a structured checklist report with the following sections:

```
## Dataset Comparability Report

**Datasets under review:** [Dataset A] vs. [Dataset B] (vs. [Dataset C if applicable])
**Variables being compared:** [List]

---

### Checklist Results

| Dimension            | Status      | Issue Identified |
|----------------------|-------------|-----------------|
| Definitions          | ✅/⚠️/❌    | [Detail or "None"] |
| Temporal alignment   | ✅/⚠️/❌    | [Detail or "None"] |
| Geographic scope     | ✅/⚠️/❌    | [Detail or "None"] |
| Sampling method      | ✅/⚠️/❌    | [Detail or "None"] |
| Aggregation/imputation | ✅/⚠️/❌  | [Detail or "None"] |

---

### Critical Issues
[Bulleted list of blockers, or "None identified."]

### Moderate Issues
[Bulleted list of manageable conflicts with suggested
