---
name: research-finding-to-recommendation-traceability-map
description: >
  Builds a structured traceability matrix that links every actionable recommendation in a research
  report back to the specific finding it derives from and the underlying raw data or evidence that
  supports that finding. Use when someone says "show me what backs up these recommendations," asks
  about "tracing recommendations to evidence," wants to "audit the logic chain in a research report,"
  needs to "validate that recommendations are grounded in findings," or asks "where does this
  recommendation come from."
category: research
tags: [traceability, research, recommendations, findings, evidence-mapping]
author: community
---

# Research Finding-to-Recommendation Traceability Map

This skill constructs a full traceability matrix connecting each recommendation in a research report to its parent finding and source data, enabling audit, validation, and gap detection across the entire logic chain.

## Workflow

1. **Extract all recommendations** — Scan the research report and list every distinct actionable recommendation verbatim, assigning each a unique ID (R1, R2, R3...).

2. **Extract all findings** — Identify every stated finding or conclusion in the report, assigning each a unique ID (F1, F2, F3...). A finding is any empirical conclusion the authors draw, distinct from the raw data.

3. **Extract all data sources and evidence** — List all cited data points, datasets, survey results, statistics, quotes, or study references, assigning each a unique ID (D1, D2, D3...).

4. **Map recommendations to findings** — For each recommendation, identify which finding(s) directly justify it. If a recommendation maps to no finding, flag it as UNSUPPORTED. If a finding supports no recommendation, flag it as ORPHANED.

5. **Map findings to data** — For each finding, identify which data source(s) it is derived from. If a finding has no data backing, flag it as UNGROUNDED.

6. **Detect gaps and conflicts** — Flag any of the following:
   - Recommendations with no finding linkage (logic gap)
   - Findings with no data linkage (evidence gap)
   - Data cited but connected to no finding (unused evidence)
   - Contradictions where two findings support opposing recommendations

7. **Summarize chain integrity** — Calculate and report: total recommendations, total findings, total data sources, number of complete chains (R→F→D), number of broken chains, and an overall traceability score (complete chains / total recommendations × 100%).

## Output Format

Produce three sections:

**Section 1 — Traceability Matrix Table**
A table with columns: `Rec ID | Recommendation (verbatim) | Finding ID(s) | Finding Summary | Data ID(s) | Data/Evidence Summary | Chain Status`
Chain Status values: COMPLETE, UNSUPPORTED, UNGROUNDED, or PARTIAL.

**Section 2 — Gap & Conflict Register**
A numbered list of every flagged issue. Each entry includes: issue type, the IDs involved, a one-sentence explanation of why it is a problem, and a suggested resolution.

**Section 3 — Traceability Summary**
A brief block (5–8 lines) stating total counts, traceability score as a percentage, the strongest supported recommendation (most data links), the weakest (fewest links), and a one-sentence overall integrity verdict.
