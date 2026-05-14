---
name: research-finding-contradiction-log
description: >
  Identifies and documents contradictory findings across multiple research sources, summarizing the nature of each disagreement and recommending evidence-based resolution approaches. Use when someone says "these sources disagree," asks about conflicting research findings, wants to reconcile contradictory evidence, needs to document research inconsistencies, or is trying to understand why studies reach opposite conclusions.
category: research
tags: [research, contradictions, evidence-synthesis, conflict-resolution, literature-review]
author: community
---

# Research Finding Contradiction Log

This skill systematically identifies, documents, and analyzes contradictory findings across research sources, then recommends concrete resolution strategies — activate it when reconciling conflicting evidence from studies, papers, or data sources.

## Contradiction Analysis Workflow

1. **Extract claims from each source** — Pull the specific finding, statistic, or conclusion from each source. State it precisely, not paraphrase loosely.

2. **Classify the contradiction type** — Determine which category applies:
   - *Direct opposition*: Sources reach opposite conclusions on the same question
   - *Magnitude disagreement*: Same direction, different effect sizes or numbers
   - *Scope mismatch*: Findings apply to different populations, contexts, or time periods
   - *Methodological divergence*: Different study designs produce different results
   - *Definition conflict*: Sources measure or define the key variable differently

3. **Assess source quality differentials** — Note sample size, methodology rigor, publication venue, date, funding source, and replication status for each conflicting source.

4. **Identify plausible explanations** — List specific reasons the contradiction may exist (e.g., different measurement tools, different populations, publication bias, temporal factors, confounding variables).

5. **Assign a contradiction severity score** — Rate 1–3:
   - 1 = Minor (likely explainable by scope or definition differences)
   - 2 = Moderate (genuine uncertainty, requires further investigation)
   - 3 = Critical (directly undermines a core claim or decision)

6. **Recommend a resolution approach** — Choose one or more:
   - Defer to higher-quality evidence (specify which and why)
   - Seek a third source as tiebreaker
   - Acknowledge genuine uncertainty in conclusions
   - Conduct subgroup analysis to reconcile scope differences
   - Flag for expert adjudication

## Output Format

Produce a structured contradiction log with one entry per identified conflict:

---
**Contradiction #[N]**

- **Topic**: [The specific claim or variable in dispute]
- **Source A Finding**: [Exact claim + citation]
- **Source B Finding**: [Exact claim + citation]
- **Contradiction Type**: [Classification from step 2]
- **Quality Assessment**: [Brief comparative note on source strength]
- **Likely Explanation(s)**: [1–3 bullet points]
- **Severity**: [1 / 2 / 3] — [one-line justification]
- **Recommended Resolution**: [Specific action or stance to take]

---

End with a **Synthesis Note** (2–4 sentences) summarizing the overall pattern of contradictions found, whether a defensible conclusion can still be drawn, and what additional evidence would most reduce uncertainty.
