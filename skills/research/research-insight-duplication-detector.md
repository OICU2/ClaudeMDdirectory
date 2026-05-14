---
name: research-insight-duplication-detector
description: >
  Scans a compiled set of research insights to identify semantically redundant findings that can be consolidated before reporting. Use when someone says "clean up my research notes," asks about "overlapping findings in my report," or wants to "deduplicate insights before writing up results." Also triggers when someone mentions "redundant themes in research" or needs to "consolidate research before presenting."
category: research
tags: [research, deduplication, insights, synthesis, consolidation]
author: community
---

# Research Insight Duplication Detector

This skill analyzes a collection of research insights, findings, or notes to surface semantically redundant entries and recommend consolidations before the user moves into reporting or synthesis.

## Deduplication Workflow

1. **Ingest the insight set**: Accept the list of insights as bullet points, numbered items, or free-form paragraphs. Ask the user to paste or describe the full set if not already provided.

2. **Normalize for comparison**: Mentally strip phrasing differences, synonyms, and formatting variation to reduce each insight to its core claim or finding.

3. **Cluster by semantic similarity**: Group insights that express the same underlying idea, even if worded differently. Use these similarity thresholds:
   - **High overlap (>80%)**: Nearly identical claims with surface-level wording differences — flag for direct merge.
   - **Moderate overlap (50–80%)**: Same theme with partially distinct evidence or scope — flag for conditional merge with notes.
   - **Low overlap (<50%)**: Related but meaningfully distinct — flag as a thematic family but keep separate.

4. **Identify the strongest representative**: Within each high-overlap cluster, select the insight that is most precise, best evidenced, or most broadly applicable as the canonical version.

5. **Draft consolidation suggestions**: For each cluster, write a single merged insight that preserves the full informational value of the group without redundancy.

6. **Flag unresolved tensions**: If two insights appear similar but contradict each other in detail, call this out explicitly rather than merging — require user judgment.

7. **Preserve unique insights untouched**: Any insight with no meaningful overlap should be listed as confirmed unique and passed through without modification.

## Output Format

Produce a structured report with the following sections:

**Summary**
- Total insights reviewed: N
- Duplicate clusters found: N
- Recommended merges: N
- Unique insights confirmed: N

**Duplicate Clusters**
For each cluster:
- `Cluster [#] — [Theme Label]`
- Original insights (quoted, numbered)
- Overlap level: High / Moderate
- Recommended consolidated insight (clearly marked)
- Reason for merge (1 sentence)

**Contradictory Pairs**
- List any near-duplicate insights that conflict, with both originals quoted and a note explaining the tension

**Confirmed Unique Insights**
- Bulleted list of all insights with no significant overlap, passed through verbatim

Keep the report scannable. Use consistent formatting so the user can copy the consolidated insight set directly into their report draft.
