---
name: desk-research-reading-sequence-planner
description: >
  Analyzes a list of research sources and produces an optimized reading sequence that builds
  knowledge progressively from foundational to advanced material. Use when someone says "I have
  a bunch of sources to read," asks "what order should I read these papers," wants to structure
  their research reading list, needs to prioritize sources before a deadline, or is overwhelmed
  by a pile of references and doesn't know where to start.
category: research
tags: [research, reading-list, knowledge-management, literature-review, prioritization]
author: community
---

# Desk Research Reading Sequence Planner

Analyzes a provided list of research sources and returns a sequenced reading plan ordered by foundational dependency, relevance to the research goal, and recency so the researcher builds understanding progressively.

## Sequencing Workflow

1. **Collect inputs**: Ask for (a) the list of sources (titles, authors, dates, URLs, or abstracts), (b) the research goal or question, and (c) any deadline or time constraints. If the user provides sources immediately, infer the goal from context.

2. **Classify each source** along three axes:
   - **Foundational vs. advanced**: Seminal works, textbooks, and survey/review papers are foundational; empirical studies, technical reports, and niche papers are advanced.
   - **Relevance**: Direct answer to research question (core), background context (supporting), or tangential (optional).
   - **Recency**: Flag sources older than 5 years for potential supersession; flag sources from the last 12 months as cutting-edge.

3. **Identify dependencies**: Note when one source explicitly builds on, critiques, or requires prior understanding of another. Mark these as prerequisite pairs.

4. **Assign a reading tier** to each source:
   - **Tier 1 – Foundation**: Read first. Seminal papers, review articles, textbooks, methodological primers.
   - **Tier 2 – Core**: Read second. Primary studies, key empirical evidence directly relevant to the research goal.
   - **Tier 3 – Depth**: Read third. Advanced, niche, or highly technical sources that extend Tier 2.
   - **Tier 4 – Optional**: Read if time allows. Tangential sources, older superseded work, or supplementary context.

5. **Sequence within tiers**: Within each tier, order sources by (a) dependency (prerequisites first), then (b) recency (older foundational work before newer), then (c) relevance score (highest first).

6. **Flag time-sensitivity**: If a deadline is provided, calculate a daily reading pace and mark which tiers are skippable under time pressure.

7. **Note gaps**: If the source list appears to be missing an obvious foundational reference (e.g., a canonical paper in the field), flag it explicitly as a suggested addition.

## Output Format

Produce a structured reading plan with the following sections:

**Research Goal**: One sentence restating the researcher's objective.

**Reading Sequence Table**: A numbered list grouped by tier. For each source include:
- `#` – Reading order number
- `Tier` – 1/2/3/4
- `Source` – Title + author + year
- `Why here` – One sentence explaining placement (foundational, prerequisite for #X, most recent evidence, etc.)
- `Est. time` – Rough reading time estimate (e.g., 20 min, 1 hr) based on source type

**Dependency Notes**: Bulleted list of any prerequisite pairs (e.g., "Read #3 before #7 — #7 directly critiques the methodology introduced in #3").

**Time-Constrained Path** (if deadline provided): A shortened sequence listing only Tier 1 and Tier 2 sources with daily targets.

**Suggested Additions** (if applicable): Up to 3 missing sources the researcher should consider finding.

Length: As long as the source list requires. Do not truncate. Use markdown tables for the sequence.
