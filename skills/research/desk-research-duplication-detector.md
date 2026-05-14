---
name: desk-research-duplication-detector
description: >
  Scans a collection of secondary research sources to surface overlapping content, redundant citations,
  and coverage gaps before synthesis begins. Use when someone says "I have too many sources covering
  the same thing," asks about cleaning up their literature pile, wants to find gaps in their desk
  research, needs to audit collected references for redundancy, or is trying to consolidate sources
  before writing a report.
category: research
tags: [research, literature-review, deduplication, citations, secondary-sources]
author: community
---

# Desk Research Duplication Detector

Analyzes a submitted set of secondary sources to identify thematic overlaps, redundant citations, and missing coverage so researchers can streamline their evidence base before synthesis.

## Detection Workflow

1. **Ingest source list**: Accept sources as titles, abstracts, URLs, or brief descriptions. Ask the user to provide at minimum title + main claim or topic for each source.

2. **Extract core claims**: For each source, identify its primary argument, key data points, time period covered, and geographic or demographic scope.

3. **Cluster by theme**: Group sources that address the same topic, mechanism, or finding. Label each cluster with a short descriptor (e.g., "consumer price sensitivity — retail context").

4. **Flag redundancy levels**:
   - **High redundancy**: Same claim, same population, same time window — mark as likely droppable.
   - **Moderate redundancy**: Same claim but different context, method, or date — mark as potentially complementary.
   - **Low redundancy**: Overlapping topic but distinct angle — keep both, note the distinction.

5. **Identify citation chains**: Note when multiple sources cite the same upstream study. Flag if original source is absent from the collection and recommend retrieving it.

6. **Map coverage gaps**: After clustering, list topic areas, time periods, geographies, or demographics that appear underrepresented or entirely missing relative to the stated research question.

7. **Prioritize cuts and additions**: Recommend which sources to drop first, which to verify before dropping, and what search terms or source types would address the identified gaps.

## Output Format

Produce a structured report with four sections:

**1. Redundancy Clusters**
A numbered list of clusters. Each entry includes: cluster label, sources in the cluster (by number or title), redundancy level (High / Moderate / Low), and a one-line rationale.

**2. Citation Chain Alerts**
A short list of upstream studies that are heavily cited but missing from the collection, with a note on why retrieving them matters.

**3. Coverage Gap Map**
A bullet list of gaps organized by dimension: topic, time period, geography, methodology, or population. Each gap gets a brief explanation of why it matters for the research question.

**4. Action Checklist**
A prioritized to-do list: sources to drop, sources to verify, gaps to fill, and any sources flagged for closer reading before a final decision.

Total length scales with collection size: under 10 sources → concise (under 400 words); 10–30 sources → standard (400–800 words); 30+ sources → full report with a summary table.
