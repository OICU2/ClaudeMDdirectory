---
name: research-source-domain-diversity-audit
description: >
  Evaluates the distribution of source types across a literature base and flags over-reliance on any single domain, publisher, or methodology. Use when someone says "check my sources for bias," asks about "source diversity in my research," wants to "audit my bibliography," needs to "balance my literature base," or is concerned that their "sources are too narrow." Produces a structured breakdown of domain and methodology coverage with actionable recommendations.
category: research
tags: [research, bibliography, source-analysis, literature-review, methodology]
author: community
---

# Research Source Domain Diversity Audit

This skill analyzes a provided list of sources, citations, or a bibliography to identify imbalances in domain representation, publisher concentration, and methodological homogeneity, then delivers a prioritized remediation plan.

## Audit Workflow

1. **Ingest the source list.** Accept citations, URLs, DOIs, or free-text bibliography entries. If the user provides a topic without sources, ask them to supply the source list before proceeding.

2. **Classify each source across four dimensions:**
   - **Domain/Discipline:** e.g., computer science, psychology, economics, biology
   - **Source type:** peer-reviewed journal, preprint, book, grey literature, news, blog, government report, industry white paper
   - **Publisher/Outlet:** identify publisher name or outlet and note any repeated entities
   - **Methodology:** empirical quantitative, empirical qualitative, mixed methods, theoretical/conceptual, meta-analysis, systematic review, opinion/commentary

3. **Calculate distribution percentages** for each dimension. Flag any single category that exceeds these thresholds:
   - One domain > 60% of total sources
   - One publisher/outlet > 30% of total sources
   - One source type > 50% of total sources
   - One methodology > 70% of total sources

4. **Identify correlated concentrations.** Check whether multiple flags cluster (e.g., 80% peer-reviewed AND 80% from two journals AND 90% quantitative suggests a narrow empirical monoculture even if each individual threshold is borderline).

5. **Score overall diversity** on a 1–5 scale:
   - 5 = Well-balanced across all four dimensions
   - 4 = Minor imbalance in one dimension
   - 3 = Moderate imbalance in one or two dimensions
   - 2 = Significant imbalance; multiple flags triggered
   - 1 = Severe concentration; research conclusions may be systematically skewed

6. **Generate gap recommendations.** For each flagged dimension, name the specific underrepresented categories and suggest 2–3 concrete source types or search strategies to fill them.

## Output Format

Produce a structured report with the following sections:

**Source Diversity Audit Report**

- **Total sources analyzed:** [N]
- **Overall diversity score:** [1–5] — [one-sentence rationale]

**Distribution Breakdown** (table or bulleted list for each dimension)
- Domain/Discipline: [category — count — percentage]
- Source Type: [category — count — percentage]
- Publisher/Outlet: [category — count — percentage]
- Methodology: [category — count — percentage]

**Flags Triggered**
- List each threshold breach as: `[Dimension]: [Category] at [X]% — exceeds [threshold]% threshold`
- If no flags, state "No thresholds exceeded."

**Correlated Concentration Analysis**
- One paragraph noting whether flags cluster in ways that compound bias risk.

**Remediation Recommendations**
- One bullet per flagged dimension: name the gap, name 2–3 specific source types or databases to search, and explain why the balance matters for research validity.

**Quick-Add Checklist**
- 3–5 actionable next steps the researcher can take immediately (e.g., "Search Google Scholar for qualitative studies on [topic] published outside [dominant publisher]").

Keep the full report under 600 words unless the source list exceeds 50 items, in which case proportionally expand the breakdown table only.
