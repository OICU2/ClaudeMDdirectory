---
name: secondary-research-source-ranking
description: >
  Evaluates and ranks a list of secondary research sources by credibility, recency, relevance, and methodology quality to guide data prioritization in analysis. Use when someone says "which of these sources should I trust most," asks about prioritizing research references, or wants to know which data points to weight more heavily. Also activate when someone shares a list of reports, studies, or articles and needs to determine citation hierarchy or source reliability for a project.
category: research
tags: [research, sources, credibility, methodology, prioritization]
author: community
---

# Secondary Research Source Ranking

This skill evaluates a provided list of secondary sources across four weighted dimensions and produces a ranked order with justification to guide which data points deserve priority in analysis.

## Ranking Workflow

1. **Identify source metadata** for each entry: publisher/author, publication date, sample size or data scope, and stated methodology. Flag any missing fields.

2. **Score each source across four dimensions** (1–5 scale each):
   - **Credibility** (weight: 30%): Publisher reputation, author credentials, peer review status, institutional affiliation, known bias or funding conflicts.
   - **Recency** (weight: 25%): Prioritize sources within 2 years as 5, 3–5 years as 3, 6+ years as 1 unless the topic is historically stable.
   - **Relevance** (weight: 30%): Direct match to the specific research question, geography, industry segment, or demographic being analyzed.
   - **Methodology Quality** (weight: 15%): Sample size, data collection transparency, statistical rigor, reproducibility, and clearly stated limitations.

3. **Calculate a weighted composite score** for each source: `(Credibility × 0.30) + (Recency × 0.25) + (Relevance × 0.30) + (Methodology × 0.15)`.

4. **Flag disqualifying conditions** regardless of score: retracted publications, undisclosed sponsor conflicts, sample sizes under 30 for quantitative claims, or data over 10 years old for fast-moving topics.

5. **Assign a tier** to each source:
   - Tier 1 (4.0–5.0): Prioritize — cite directly, weight data heavily
   - Tier 2 (2.5–3.9): Use with caveats — note limitations alongside citations
   - Tier 3 (below 2.5): Avoid or use only for directional context

6. **Identify conflicts between sources** ranked in the same tier and note which methodology differences explain the discrepancy.

## Output Format

Produce a ranked table followed by a brief synthesis:

**Ranked Source Table**
| Rank | Source | Credibility | Recency | Relevance | Methodology | Composite Score | Tier |
|------|--------|-------------|---------|-----------|-------------|-----------------|------|
| 1    | [Name] | X/5         | X/5     | X/5       | X/5         | X.XX            | 1    |

**Per-Source Notes** (2–3 sentences each): Explain the strongest and weakest dimension, any disqualifying flags, and specific limitations to disclose if cited.

**Prioritization Summary** (3–5 sentences): State which sources should anchor the analysis, which should serve as supporting evidence only, and flag any gaps in the source list that leave research questions under-supported.

Total output length: proportional to source list size — approximately 150 words per source plus a 100-word summary.
