---
name: content-data-point-freshness-audit
description: >
  Reviews all statistics, studies, and numerical claims in a draft and flags those sourced more than a specified number of years ago for replacement. Use when someone says "check my data points," asks to "audit the stats in my article," wants to "find outdated research in my draft," needs to "flag stale numbers," or says "my content needs fresh sources." Accepts a draft and an optional cutoff year (defaults to 3 years if unspecified).
category: writing
tags: [content-audit, fact-checking, research, statistics, editing]
author: community
---

# Content Data Point Freshness Audit

This skill scans a piece of writing for every statistic, study citation, and numerical claim, then flags any sourced or dated beyond the specified cutoff year so the writer knows exactly what needs updated sourcing.

## Audit Workflow

1. **Accept inputs**: Take the draft text and the freshness cutoff (e.g., "older than 3 years" or a specific year like "before 2022"). Default to flagging anything older than 3 years if no cutoff is given.
2. **Extract all data points**: Read through the full draft and identify every instance of:
   - Percentages, statistics, and numerical figures tied to a claim
   - Named studies, reports, or surveys
   - Phrases like "research shows," "according to," "studies find," or "data from"
   - Ranges, averages, projections, and benchmark numbers
3. **Date each data point**: For each extracted claim, determine or estimate its source date using:
   - Explicit years mentioned in the text
   - Named studies or organizations (infer approximate publication era if known)
   - Contextual clues (referenced events, technologies, or terminology)
   - Mark as "date unknown" if no date can be determined
4. **Apply the cutoff**: Compare each data point's date against the cutoff year. Flag anything that falls outside the acceptable range or is marked "date unknown."
5. **Do not alter the draft**: Only identify and report — do not rewrite or suggest replacement sources within the draft itself.

## Output Format

Produce a structured audit report with three sections:

**Summary**
- Total data points found: X
- Flagged as stale or undated: X
- Cleared as current: X

**Flagged Data Points** (table format)
| # | Quote or Paraphrase from Draft | Estimated Date | Reason Flagged | Location in Draft |
|---|-------------------------------|---------------|----------------|-------------------|
List every flagged item with the exact quote or close paraphrase, the estimated or stated date, why it was flagged (stale/undated/ambiguous), and its approximate location (paragraph number or section heading).

**Cleared Data Points**
- Brief bulleted list of data points confirmed within the acceptable date range, with their dates noted.

**Recommendations**
- 2–4 plain-language suggestions for where to find updated versions of the flagged data (e.g., relevant government databases, journal repositories, industry report publishers) based on the topic of the flagged claims.
