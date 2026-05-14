---
name: signal-to-noise-source-filter
description: >
  Evaluates a list of information sources against a defined research question and ranks them by relevance, recency, and methodological rigor. Use when someone says "help me figure out which sources to trust," asks about filtering research results, or wants to prioritize sources from a bibliography. Also activates when someone needs to separate credible evidence from noise in a source list, or wants to know which studies or articles deserve the most weight.
category: research
tags: [source-evaluation, research-quality, evidence-ranking, literature-review, critical-appraisal]
author: community
---

# Signal-to-Noise Source Filter

This skill evaluates a provided list of sources against a specific research question and ranks them by relevance, recency, and methodological rigor so the researcher knows exactly where to focus their attention.

## Evaluation Workflow

1. **Clarify the research question** — If the user has not stated a precise research question, ask for one before proceeding. Every ranking decision depends on it.

2. **Extract source metadata** — For each source, identify: author(s), publication year, publication venue (journal, preprint, news outlet, blog, etc.), study design or content type, and stated methodology if available.

3. **Score each source on three dimensions** (1–5 scale each):
   - **Relevance**: How directly does the source address the research question? Penalize tangential or only thematically adjacent sources.
   - **Recency**: Weight by field norms. Fast-moving fields (AI, clinical medicine) favor sources within 2–3 years; stable fields (history, classical physics) tolerate older sources. Flag sources that predate major paradigm shifts.
   - **Methodological rigor**: Peer-reviewed empirical studies > systematic reviews/meta-analyses (note: meta-analyses rank highest when well-conducted) > preprints > expert opinion > journalism > blog posts. Penalize small sample sizes, lack of controls, or undisclosed conflicts of interest if evident.

4. **Compute a weighted composite score** — Default weights: Relevance 50%, Recency 20%, Rigor 30%. Adjust weights if the user specifies a priority (e.g., "I need the most current sources" shifts Recency weight to 40%).

5. **Flag disqualifying issues** — Mark any source with: obvious conflicts of interest, retraction notices, predatory journal origin, or a publication date that makes it categorically obsolete for the question.

6. **Rank and tier the list**:
   - **Tier 1 (Must Read)**: Composite score ≥ 4.0
   - **Tier 2 (Useful Supplement)**: Score 2.5–3.9
   - **Tier 3 (Low Priority or Caution)**: Score < 2.5 or flagged

7. **Identify gaps** — After ranking, note what type of source is missing from the list that would strengthen the evidence base (e.g., "No RCTs present," "No sources address the post-2022 regulatory changes").

## Output Format

Produce a structured report with the following sections:

**Research Question Confirmed:** [Restate the exact question being evaluated against]

**Ranked Source List:**
| Rank | Source (Author, Year, Venue) | Relevance | Recency | Rigor | Composite | Tier | Notes |
|------|------------------------------|-----------|---------|-------|-----------|------|-------|
| 1 | ... | 5 | 4 | 5 | 4.7 | Tier 1 | Gold-standard RCT |
| 2 | ... | ... | ... | ... | ... | ... | ... |

**Flagged Sources:** List any sources with disqualifying issues and the specific reason.

**Evidence Gaps:** 2–4 bullet points describing what source types are absent and why they matter.

**Recommended Reading Order:** A numbered list of Tier 1 sources in the order they should be read to build understanding most efficiently (foundational → specific).

Keep the report scannable. Notes column should be one sentence maximum per source.
