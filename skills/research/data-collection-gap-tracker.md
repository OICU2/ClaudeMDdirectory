---
name: data-collection-gap-tracker
description: >
  Maps planned data collection points against actual collected data to surface missing responses, skipped modules, or incomplete records before analysis begins. Use when someone says "check my data for gaps," asks about missing survey responses, or wants to audit collected data before running analysis. Also triggers when someone needs to validate data completeness, identify which participants skipped sections, or reconcile expected versus received data records.
category: research
tags: [data-quality, survey-audit, completeness-check, pre-analysis, research-validation]
author: community
---

# Data Collection Gap Tracker

This skill audits collected datasets against a planned collection schema to identify missing responses, incomplete participant records, and skipped modules before analysis begins.

## Gap Detection Workflow

1. **Establish the collection plan**: Ask the user to define the expected structure — participant IDs, required modules or survey sections, mandatory fields, and total expected records. Accept this as a list, table, schema file, or plain description.

2. **Ingest the actual data**: Accept the collected dataset in any format (CSV, JSON, pasted table, or described structure). Extract participant IDs, completed sections, and field-level responses.

3. **Cross-reference at three levels**:
   - **Record level**: Identify participant IDs present in the plan but absent from the dataset entirely.
   - **Module level**: For each present participant, flag any required sections or modules with no responses at all.
   - **Field level**: Within completed modules, identify mandatory fields left blank, null, or containing placeholder values (e.g., "N/A", "-", "999").

4. **Classify each gap**:
   - `MISSING_RECORD` — participant never appears in collected data
   - `SKIPPED_MODULE` — participant present but entire section absent
   - `INCOMPLETE_FIELD` — module present but specific required fields empty
   - `PARTIAL_MODULE` — module started but fewer than 50% of fields completed

5. **Calculate completeness metrics**:
   - Overall completion rate (records received / records expected)
   - Per-module completion rates
   - Field-level missingness percentages for mandatory fields

6. **Flag analysis risks**: Note which gaps would cause exclusion under listwise deletion, which modules have missingness above 10%, and whether any patterns suggest systematic skip logic errors versus random non-response.

## Output Format

Produce a structured gap report with these sections:

**Summary Table**
| Metric | Expected | Actual | Gap | Completion % |
|---|---|---|---|---|
| Total Records | X | Y | Z | % |
| [Module Name] | X | Y | Z | % |

**Gap Inventory** — a flat list of every identified gap:
```
[GAP_TYPE] | Participant ID | Module/Field | Notes
MISSING_RECORD | P042 | — | No data received for this participant
SKIPPED_MODULE | P017 | Module 3 | All other modules complete
INCOMPLETE_FIELD | P031 | Module 2 > Q4b | Field blank; Q4a was answered
```

**Risk Flags** — bullet list of gaps that will affect analysis validity, with a one-line explanation of the impact.

**Recommended Actions** — numbered list of concrete next steps (re-contact participants, check data export filters, review skip logic, impute or exclude).

Keep the report scannable. Use tables and code blocks. Do not summarize gaps in prose only — always include the structured inventory so gaps can be acted on directly.
