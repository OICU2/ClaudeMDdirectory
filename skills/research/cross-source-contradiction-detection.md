---
name: cross-source-contradiction-detection
description: >
  Compares findings across multiple research sources to identify conflicting data, opposing conclusions, or methodological discrepancies that need resolution. Use when someone says "these sources disagree," asks about conflicting research findings, wants to reconcile contradictory evidence, needs to evaluate competing claims from different studies, or is trying to figure out why two sources say different things.
category: research
tags: [research, analysis, fact-checking, synthesis, critical-thinking]
author: community
---

# Cross-Source Contradiction Detection

This skill systematically identifies, categorizes, and analyzes contradictions between research sources so Claude can surface meaningful conflicts and help users resolve or contextualize them.

## Contradiction Detection Workflow

1. **Catalog source claims**: For each source, extract the specific claim, the data supporting it, the methodology used, and the conclusion drawn. Label each source (S1, S2, etc.) for reference.

2. **Identify conflict types**: Classify each contradiction by type:
   - **Data conflicts**: Different numbers, statistics, or measurements for the same variable
   - **Methodological conflicts**: Different study designs, sample sizes, populations, or time frames producing different results
   - **Interpretive conflicts**: Same data read differently by different authors
   - **Scope conflicts**: One source generalizes where another limits claims to specific conditions
   - **Temporal conflicts**: Findings that changed over time or reflect different periods

3. **Assess severity**: Rate each conflict as:
   - **Critical** — directly opposing conclusions that cannot both be true
   - **Moderate** — findings differ but may be reconcilable with context
   - **Minor** — surface-level differences in framing or emphasis with no substantive clash

4. **Investigate root causes**: For each conflict, check whether the discrepancy stems from sample differences, funding sources, publication date, geographic scope, measurement tools, or definitional inconsistencies.

5. **Evaluate source credibility signals**: Note peer review status, sample size, replication status, citation count, and author affiliations for conflicting sources. Flag credibility asymmetries.

6. **Propose resolution paths**: For each critical or moderate conflict, suggest one or more of the following: defer to higher-quality methodology, treat findings as complementary for different subpopulations, identify the variable that explains divergence, or flag as genuinely unresolved requiring further research.

## Output Format

Produce a structured contradiction report with the following sections:

**Contradiction Summary**
A 2–3 sentence overview of how many conflicts were found and their general nature.

**Conflict Table**
| # | Sources | Claim A | Claim B | Conflict Type | Severity |
|---|---------|---------|---------|---------------|----------|
List every identified conflict with one row per pair.

**Detailed Analysis**
For each critical or moderate conflict:
- **Conflict [#]**: State the specific disagreement in one sentence
- **Root cause**: Explain why the sources differ
- **Credibility assessment**: Note any asymmetry in source quality
- **Resolution path**: Recommend how to proceed

**Unresolved Conflicts**
Bullet list of contradictions that cannot be resolved without additional data or research, with a brief explanation of what evidence would resolve each.

**Synthesis Recommendation**
1–2 sentences on how to proceed given the contradiction landscape — whether to proceed with the stronger source, hold conclusions, or pursue clarification.
