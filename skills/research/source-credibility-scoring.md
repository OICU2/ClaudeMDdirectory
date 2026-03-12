---
name: source-credibility-scoring
description: >
  Evaluates and scores research sources based on authority, recency, bias indicators, and citation frequency to prioritize the most reliable references. Use when someone says "how reliable is this source," asks about ranking references for a research paper, or wants to filter out low-quality citations. Also activates when someone needs to compare multiple sources, assess academic credibility, or identify the most trustworthy references in a list.
category: research
tags: [research, credibility, sources, fact-checking, citations]
author: community
---

# Source Credibility Scoring

This skill evaluates and ranks research sources across four weighted dimensions — authority, recency, bias, and citation frequency — so Claude can recommend which references to prioritize or discard.

## Credibility Scoring Workflow

**Step 1: Extract Source Metadata**
For each source, identify: author credentials (institution, peer review status, domain expertise), publication venue (journal impact factor, editorial standards, predatory publisher flags), publication date, and citation count or reference network presence.

**Step 2: Score Each Dimension (0–25 points each, total 100)**

- **Authority (25 pts):** Peer-reviewed journal = 21–25; institutional report = 15–20; expert blog/trade publication = 8–14; anonymous or unverifiable = 0–7. Deduct 5 pts if author has no verifiable credentials in the relevant field.
- **Recency (25 pts):** Published within 2 years = 21–25; 3–5 years = 15–20; 6–10 years = 8–14; over 10 years = 0–7. For foundational/seminal works, override recency score to 20.
- **Bias Indicators (25 pts):** No disclosed conflict of interest, balanced framing = 21–25; minor commercial or ideological lean = 15–20; clear advocacy position with disclosed funding = 8–14; undisclosed conflicts or demonstrably one-sided = 0–7.
- **Citation Frequency (25 pts):** 500+ citations = 21–25; 100–499 = 15–20; 10–99 = 8–14; under 10 or uncited = 0–7. For new sources (<1 year), substitute venue prestige score.

**Step 3: Flag Critical Disqualifiers**
Automatically flag (do not score) sources that meet any of: retracted publication, known predatory journal, fabricated authorship, or direct contradiction of scientific consensus without evidence.

**Step 4: Assign Tier Label**
- 85–100: Tier 1 — Prioritize
- 65–84: Tier 2 — Use with context
- 40–64: Tier 3 — Supplement only
- 0–39: Tier 4 — Avoid or discard

**Step 5: Rank and Recommend**
Sort all sources by total score, group by tier, and provide a 1-sentence rationale per source explaining its highest and lowest scoring dimensions.

## Output Format

Produce a scored source table followed by a ranked recommendation list:

```
## Source Credibility Report

| Source | Authority | Recency | Bias | Citations | Total | Tier |
|--------|-----------|---------|------|-----------|-------|------|
| [Name] | ##/25     | ##/25   | ##/25| ##/25    | ##/100| #    |

## Flagged Sources
- [Source]: [Reason for disqualification]

## Ranked Recommendations
1. [Source] — Score: ##/100 (Tier 1) — Strong peer-reviewed authority in [field]; slightly dated (2018) but seminal.
2. ...

## Summary
Recommend using [N] sources from Tier 1–2. Avoid [N] sources due to [primary reason].
```

Keep rationale lines to one sentence each. Total output length scales with number of sources: 1–5 sources = concise table only; 6+ sources = full report with summary paragraph.
