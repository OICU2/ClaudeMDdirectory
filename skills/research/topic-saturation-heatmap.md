---
name: topic-saturation-heatmap
category: research
description: >
  Analyzes a research domain to visualize which subject areas are heavily covered versus underexplored based on source volume, citation density, and publication recency. Use when someone says "I want to find gaps in the literature," asks about "which topics are oversaturated in research," wants to "see where the white space is" in a field, wonders "what hasn't been studied enough," or needs to "map coverage across a research area."
tags: [research, literature-review, gap-analysis, visualization, academic]
author: community
---

# Topic Saturation Heatmap

This skill builds a structured heatmap-style analysis of topic coverage within a research domain, identifying oversaturated areas and underexplored gaps using source volume and recency signals.

## Workflow

1. **Define the domain scope**: Ask the user to name the research domain and any sub-boundaries (discipline, time range, methodology type). If not provided, infer from context and state your assumption explicitly.

2. **Decompose into subtopics**: Break the domain into 8–16 discrete subtopic clusters. Use established taxonomy where possible (e.g., ACM CCS for computing, MeSH for medicine). List each subtopic with a 1-line descriptor.

3. **Score each subtopic on two axes**:
   - **Coverage density** (1–5): Estimate based on how widely cited, reviewed, and textbook-canonized the topic is. Score 5 = exhaustively covered, score 1 = rarely addressed.
   - **Recency index** (1–5): Estimate how active recent publication is. Score 5 = high activity in last 2–3 years, score 1 = dormant or stagnant.

4. **Classify each subtopic** into one of four quadrant labels:
   - **Saturated**: High coverage + High recency (well-trodden, crowded)
   - **Established but cooling**: High coverage + Low recency (mature, slowing)
   - **Emerging**: Low coverage + High recency (hot gap, growing attention)
   - **Neglected**: Low coverage + Low recency (true gap, low competition)

5. **Flag research opportunity tier** for each subtopic:
   - Tier 1 (highest opportunity): Neglected subtopics
   - Tier 2: Emerging subtopics
   - Tier 3: Established but cooling subtopics
   - Tier 4 (lowest opportunity): Saturated subtopics

6. **Identify cross-cutting gaps**: Note 2–3 intersectional areas between subtopics that are structurally absent from the map — topics that logically should exist but appear in neither cluster.

7. **Surface recency signals**: For Emerging and Neglected subtopics, note any known triggering factors (new datasets, regulatory changes, technological shifts, recent landmark papers) that explain the gap or growth.

## Output Format

Produce the following sections in order:

**Domain:** `[Domain name and scope as defined]`

**Heatmap Table:**

| Subtopic | Coverage (1–5) | Recency (1–5) | Quadrant | Opportunity Tier |
|---|---|---|---|---|
| [Subtopic name] | [score] | [score] | [label] | [Tier 1–4] |

*(8–16 rows minimum)*

**Top Research Gaps** (bulleted list of 3–5 items):
- Each gap stated as a specific researchable question or area, not a vague theme
- Include which subtopic(s) it falls under and its opportunity tier

**Cross-Cutting Absences** (2–3 bullets):
- Describe the missing intersection and why it represents a structural gap

**Recency Signals** (for Tier 1 and Tier 2 subtopics only):
- One sentence per subtopic explaining what is driving emergence or continued neglect

**Caveats:**
- State confidence level (High / Medium / Low) based on how well-documented the domain is
- Note if scoring is estimated without live database access
