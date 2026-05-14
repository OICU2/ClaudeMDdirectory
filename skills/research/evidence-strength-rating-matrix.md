---
name: evidence-strength-rating-matrix
description: >
  Scores each piece of evidence supporting a research claim against a standardized rubric covering source type, recency, sample size, and methodological quality. Use when someone asks "how strong is this evidence," wants to evaluate sources for a literature review, needs to rate the quality of research findings, asks whether a study is reliable, or wants to compare the credibility of multiple sources.
category: research
tags: [evidence-evaluation, research-quality, source-rating, methodology, critical-appraisal]
author: community
---

# Evidence Strength Rating Matrix

Applies a structured scoring rubric to each piece of evidence to produce a numeric strength rating and qualitative tier, used whenever research claims need credibility assessment or source comparison.

## Scoring Rubric

Evaluate each source across four dimensions. Assign points as specified.

### 1. Source Type (0–25 points)
- Systematic review or meta-analysis: 25
- Randomized controlled trial: 20
- Cohort or longitudinal study: 15
- Case-control or cross-sectional study: 10
- Expert opinion, editorial, or case report: 5
- Grey literature, blog, or anecdotal report: 2

### 2. Recency (0–20 points)
- Published within 2 years: 20
- 3–5 years ago: 15
- 6–10 years ago: 10
- 11–20 years ago: 5
- More than 20 years ago: 2

### 3. Sample Size (0–25 points)
- n > 10,000: 25
- n = 1,000–9,999: 20
- n = 100–999: 15
- n = 10–99: 8
- n < 10 or not reported: 2

### 4. Methodological Quality (0–30 points)
Award points for each criterion present:
- Pre-registered study design: +6
- Peer-reviewed publication: +6
- Control group or comparison condition: +6
- Blinding (single or double): +6
- Conflict of interest disclosure with no apparent bias: +6

## Rating Process

1. Identify each distinct piece of evidence provided (study, source, data point).
2. For each source, collect available metadata: publication year, journal/outlet, sample size, study design.
3. Apply the rubric above, recording the score for each dimension.
4. Sum the four dimension scores for a **Total Score (0–100)**.
5. Assign a **Strength Tier** based on total:
   - 80–100: **Strong** — high confidence, suitable as primary evidence
   - 60–79: **Moderate** — useful but note limitations
   - 40–59: **Limited** — treat as supplementary only
   - 0–39: **Weak** — flag significant reliability concerns
6. Note any critical disqualifiers regardless of score: retracted studies, unverifiable sources, undisclosed conflicts of interest.

## Output Format

Produce a markdown table with one row per source, followed by a summary paragraph.

**Table columns:**
| Source | Source Type | Recency | Sample Size | Methodology | Total Score | Tier | Key Limitation |

**After the table**, write a 3–5 sentence **Evidence Summary** that:
- States the overall strength of the evidence body
- Identifies the strongest and weakest sources
- Flags any gaps (e.g., no RCTs, all studies from a single lab, outdated literature)
- Recommends whether the claim is well-supported, needs stronger evidence, or should be treated as preliminary

If metadata is missing for any dimension, mark the cell as `[Not reported]` and apply the lowest point value for that dimension, noting the assumption explicitly below the table.
