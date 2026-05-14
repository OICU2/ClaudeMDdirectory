---
name: multi-source-data-conflict-prioritization-matrix
description: >
  Evaluates conflicting data points across multiple sources by scoring each on recency, sample size, and methodology rigor to produce a prioritization recommendation. Use when someone says "these sources contradict each other," asks which study or statistic to trust, or wants to reconcile competing findings from different datasets or reports. Also activates when a user presents conflicting numbers and needs to decide which figure to cite or act on.
category: research
tags: [data-analysis, source-evaluation, conflict-resolution, methodology, research]
author: community
---

# Multi-Source Data Conflict Prioritization Matrix

This skill systematically scores conflicting data sources across three dimensions—recency, sample size, and methodology rigor—to produce a clear, defensible recommendation on which source to prioritize.

## Conflict Evaluation Workflow

**Step 1: Extract and list all conflicting sources**
- Identify each distinct source or study making a conflicting claim
- Record the specific data point or statistic in dispute for each source
- Note publication or collection date, reported sample size, and study type (RCT, meta-analysis, survey, case study, observational, etc.)

**Step 2: Score each source on three dimensions (1–5 scale)**

*Recency (1–5):*
- 5 = Published within 1 year
- 4 = 1–3 years old
- 3 = 3–5 years old
- 2 = 5–10 years old
- 1 = More than 10 years old or undated

*Sample Size (1–5):*
- 5 = n > 10,000 or population-level data
- 4 = n = 1,000–10,000
- 3 = n = 100–999
- 2 = n = 10–99
- 1 = n < 10, anecdotal, or unreported

*Methodology Rigor (1–5):*
- 5 = Systematic review or meta-analysis with pre-registration
- 4 = Randomized controlled trial or longitudinal cohort study
- 3 = Cross-sectional study, peer-reviewed survey, or government dataset
- 2 = Industry report, non-peer-reviewed study, or self-reported data
- 1 = Opinion piece, blog post, press release, or unverified claim

**Step 3: Apply domain-specific weighting**
- For fast-changing fields (technology, economics, public health): weight Recency × 1.5
- For stable scientific domains (physics, established medicine): weight Methodology × 1.5
- For policy or business decisions: weight Sample Size × 1.5
- Default (no domain specified): equal weights (1.0 each)

**Step 4: Calculate weighted total scores**
- Multiply each raw score by its weight
- Sum the three weighted scores for each source
- Maximum possible score: 22.5 (with 1.5× weighting on one dimension)

**Step 5: Identify disqualifying red flags**
Flag any source that meets one or more of these conditions regardless of score:
- Undisclosed funding with obvious conflict of interest
- Retracted or under investigation for fraud
- Sample drawn from non-representative population for the claim being made
- Methodology score of 1 combined with a score of 1 in any other dimension

**Step 6: Generate recommendation**
- The highest-scoring non-flagged source is the primary recommendation
- If top two scores are within 2 points of each other, recommend citing both with noted caveats
- If all sources are flagged, recommend seeking additional sources before concluding

## Output Format

Produce a structured response with the following sections:

**Conflict Summary** (2–3 sentences): State what the conflicting claims are and why they matter.

**Scoring Matrix** (table):
| Source | Claim | Recency | Sample Size | Methodology | Weighted Total | Red Flags |
|--------|-------|---------|-------------|-------------|----------------|-----------|

**Weighting Applied**: One sentence stating which domain weight was used and why.

**Recommendation**: 2–4 sentences identifying which source to prioritize, why it scored highest, and any meaningful caveats about the runner-up(s).

**Confidence Level**: Rate overall confidence in the recommendation as High / Medium
