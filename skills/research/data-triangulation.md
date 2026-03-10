---
name: data-triangulation
description: >
  Validates research findings by cross-referencing multiple independent data sources and analytical methods to surface contradictions, confirm patterns, and assign confidence levels. Use when someone says "I need to verify this finding," asks about conflicting data sources, or wants to stress-test a conclusion. Also activates when someone needs to reconcile contradictory results or wants to know how reliable their data is.
category: research
tags: [validation, cross-referencing, data-quality, research-methods, confidence-scoring]
author: community
---

# Data Triangulation

This skill systematically validates research findings by comparing results across multiple independent sources and methods, then produces a structured confidence assessment with reconciliation notes.

## Triangulation Workflow

1. **Identify the core claim** — Extract the specific finding or conclusion that needs validation. State it in one sentence before proceeding.

2. **Map available sources** — List every source or dataset provided. Categorize each as:
   - Primary (direct observation, raw data, first-hand accounts)
   - Secondary (analysis, aggregations, reported summaries)
   - Tertiary (meta-analyses, reviews, synthesized overviews)

3. **Apply at least two methods** — Choose methods appropriate to the domain:
   - **Quantitative cross-check**: Compare numeric outputs across datasets; flag if variance exceeds 10% without explanation
   - **Qualitative convergence**: Check whether independent qualitative sources reach the same interpretation
   - **Temporal consistency**: Does the finding hold across different time periods or snapshots?
   - **Geographic/demographic slice**: Does it hold across different subgroups or regions?
   - **Methodological diversity check**: Were sources collected using fundamentally different methods?

4. **Surface contradictions explicitly** — For every source that diverges from the main finding, document:
   - What it says differently
   - Possible reasons for the divergence (sample bias, date lag, methodology gap)
   - Whether the contradiction is fatal, partial, or explainable

5. **Assign a confidence level** — Score the finding on this scale:
   - **High (3+ independent sources converge, no fatal contradictions)**
   - **Medium (2 sources converge OR contradictions are explainable)**
   - **Low (only 1 source OR unexplained contradictions exist)**
   - **Inconclusive (sources actively conflict with no clear resolution)**

6. **Recommend next steps** — If confidence is Medium or below, specify exactly what additional data or method would raise it to High.

## Output Format

Produce a structured triangulation report with these sections:

```
## Triangulation Report

**Claim under review:** [One-sentence statement]

**Sources assessed:**
- [Source 1] — Type: [Primary/Secondary/Tertiary] — Finding: [What it shows]
- [Source 2] — Type: [...] — Finding: [...]
- (continue for all sources)

**Methods applied:** [List methods used]

**Points of convergence:**
- [Finding X is confirmed by sources A, B, C]

**Contradictions and gaps:**
- [Source D shows Y instead — reason: ...]
- [No data available for Z demographic]

**Confidence level:** [High / Medium / Low / Inconclusive]
**Rationale:** [2-3 sentences explaining the score]

**Recommended next steps:** [Specific action to increase confidence, or "None — finding is sufficiently validated"]
```

Keep the report concise. Each bullet should be one to two sentences maximum. Do not pad findings — if a section has nothing to report, write "None identified."