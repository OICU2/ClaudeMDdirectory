---
name: source-diversity-gap-report
description: >
  Audits the cited sources in a piece of writing to identify over-reliance on a single outlet, author, domain, or ideological perspective, then recommends categories of missing source types. Use when someone says "check my sources for bias," asks whether their citations are too narrow, or wants to audit the diversity of their references. Also triggers when someone asks "am I relying too much on one source" or wants to strengthen the credibility of their sourcing.
category: writing
tags: [sources, research, fact-checking, bias, citations]
author: community
---

# Source Diversity Gap Report

Analyzes the cited sources in a draft or reference list to surface concentration risks and blind spots, then produces a structured gap report with concrete recommendations.

## Analysis Workflow

1. **Extract all cited sources** from the provided text — URLs, author names, publication names, dates, and any implied references (e.g., "according to experts at X").

2. **Categorize each source** across these dimensions:
   - **Outlet/domain**: news org, academic journal, think tank, blog, government body, NGO, industry publication, social media
   - **Author or byline** (if identifiable): note repeat authors
   - **Perspective type**: institutional, advocacy, academic, practitioner, firsthand/eyewitness, dissenting
   - **Geographic or cultural origin**: national, regional, international
   - **Recency**: note if sources cluster in a narrow time window
   - **Primary vs. secondary**: original data/reporting vs. commentary on other sources

3. **Flag concentration risks** — any dimension where ≥50% of sources share the same value (e.g., 4 of 6 sources are from the same outlet, all sources are Western, all sources are from one year).

4. **Identify missing source types** by asking:
   - Is there primary data (studies, official records, datasets)?
   - Are affected parties or practitioners cited directly?
   - Is there a dissenting or counterargument source?
   - Are non-English or non-Western perspectives absent but relevant?
   - Are sources all secondary/aggregated with no originals?

5. **Assign a diversity score** (Low / Medium / High) based on how many dimensions show concentration.

## Output Format

Produce a structured report with these sections:

**Source Inventory Table**
A compact table listing each source with columns: Source Name | Type | Perspective | Origin | Primary/Secondary

**Concentration Flags**
Bullet list of specific over-reliance issues found, each formatted as:
`⚠ [Dimension]: [X of Y sources] are [value] — e.g., "⚠ Outlet: 4 of 5 sources are from The Guardian"`

**Missing Source Categories**
Numbered list of source types absent from the piece, each with a one-sentence explanation of why including them would strengthen the work.

**Overall Diversity Score**
Single line: `Diversity Score: Low / Medium / High` with a one-sentence rationale.

**Quick Wins**
Up to 3 specific, actionable suggestions the writer can act on immediately (e.g., "Search Google Scholar for peer-reviewed studies on [topic] to add a primary academic source").

Keep the report under 500 words excluding the table. Be direct — name the gaps without hedging.
