---
name: citation-network-analysis
description: >
  Analyzes citation patterns across academic literature to map relationships between papers, authors, and institutions, surfacing the most influential works in a field. Use when someone asks "which papers are most cited in X field," wants to find seminal works or foundational research, needs to understand how ideas flow between research groups, wants to identify key authors or institutions driving a field, or asks to trace the intellectual lineage of a concept or methodology.
category: research
tags: [citations, academic, network-analysis, literature-review, bibliometrics]
author: community
---

# Citation Network Analysis

This skill maps citation relationships across a body of literature to identify influential papers, central authors, institutional clusters, and the flow of ideas through a field, activating whenever someone needs to understand the structure and hierarchy of academic influence.

## Citation Network Analysis Workflow

### 1. Define the Network Scope
- Clarify the field, subfield, or specific topic to analyze
- Establish the time range (e.g., foundational works only, last 10 years, all time)
- Identify the starting corpus: seed papers, author names, or keyword queries
- Set the depth of traversal: direct citations only, or citations-of-citations

### 2. Identify Node Types
Map three distinct node categories:
- **Papers**: title, year, venue, DOI, citation count
- **Authors**: full name, affiliation, h-index if available, co-author relationships
- **Institutions**: university or lab name, country, research output volume

### 3. Analyze Citation Patterns
For each node, compute or estimate:
- **In-degree** (cited by): measures influence received
- **Out-degree** (cites): measures breadth of literature engagement
- **Betweenness centrality**: papers that bridge distinct research communities
- **Clustering**: groups of papers that heavily cite each other (research schools)
- **Temporal trajectory**: is influence rising, stable, or declining?

### 4. Surface Influential Works
Apply these heuristics to rank papers:
- High in-degree relative to publication age → foundational or seminal
- High betweenness → cross-disciplinary bridge paper
- Rapid early citation growth → emerging influential work
- Cited by other highly-cited papers → second-order influence (PageRank-style)

### 5. Trace Intellectual Lineage
- Identify 2–3 "root" papers that precede and enable subsequent clusters
- Show the citation chain from root → intermediate developments → current state-of-the-art
- Flag when a methodology or concept jumps between fields

### 6. Identify Key Authors and Institutions
- List top 5–10 authors by citation influence within the scoped network
- Identify institutional clusters (labs or universities that co-cite heavily)
- Note prolific collaborator pairs or author groups

### 7. Flag Gaps and Anomalies
- Highly cited papers with few outgoing citations (isolated peaks)
- Influential authors rarely citing each other (parallel schools)
- Recent papers with zero citations despite relevance (overlooked work)

## Output Format

Produce a structured report with the following sections:

**Network Overview**
- Scope, time range, total papers/authors/institutions considered
- 2–3 sentence summary of the field's citation structure

**Top Influential Papers** (table)
| Rank | Title | Year | Authors | Est. Citations | Why Influential |
|------|-------|------|---------|---------------|-----------------|
List 5–10 papers minimum.

**Key Authors**
- Numbered list: Name, Institution, Role in network (founder / bridge / current leader)

**Institutional Clusters**
- Bullet list of 3–5 clusters with representative institutions and their dominant research focus

**Intellectual Lineage Map**
- Linear or branching chain showing idea/methodology flow:
  `Paper A (year) → Paper B (year) → Paper C (year) [current frontier]`

**Gaps and Anomalies**
- Bullet list of overlooked papers, isolated clusters, or cross-field borrowings worth investigating

**Recommended Entry Points**
- 3–5 papers a newcomer should read first to understand the field's structure, with one-sentence rationale for each

Use plain text tables and indented bullet chains. Keep the full report under 800 words unless the user requests deeper analysis.
