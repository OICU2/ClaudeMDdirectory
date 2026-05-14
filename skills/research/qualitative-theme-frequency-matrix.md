---
name: qualitative-theme-frequency-matrix
description: >
  Converts coded qualitative responses into a frequency matrix showing how often each theme appears across participant segments. Use when someone says "analyze my interview codes," asks about "theme distribution across groups," wants to "see how often themes appear by segment," needs to "cross-tabulate qualitative codes," or is trying to "compare theme frequency between participant categories."
category: research
tags: [qualitative-research, thematic-analysis, frequency-matrix, coding, data-visualization]
author: community
---

# Qualitative Theme Frequency Matrix

This skill transforms coded qualitative data into a structured frequency matrix that maps theme occurrence rates across participant segments, enabling cross-group comparison and pattern identification.

## Workflow

1. **Collect input data** — Ask the user to provide: (a) their coded responses or theme list, (b) participant segments or grouping variables (e.g., age group, role, region), and (c) raw coded data or a summary of code assignments per participant. If data is missing, prompt specifically for what is needed before proceeding.

2. **Identify all unique themes** — Extract every distinct theme/code from the dataset. Consolidate near-duplicates only if the user explicitly confirms they are equivalent. List all themes clearly before building the matrix.

3. **Identify all participant segments** — Extract every unique segment or group category. Clarify the segmentation variable (e.g., "Role: Manager vs. Individual Contributor") if ambiguous.

4. **Count theme occurrences per segment** — For each theme, count how many participants (or responses) within each segment mention or receive that code. Use raw counts as the primary metric.

5. **Calculate percentages** — Compute the percentage of participants within each segment who exhibited each theme (count ÷ segment total × 100). Round to one decimal place.

6. **Flag notable patterns** — Identify themes that appear in >50% of any single segment, themes with >20 percentage-point differences across segments, and themes absent from one or more segments entirely.

7. **Summarize key findings** — Write 3–5 bullet points describing the most meaningful cross-segment differences and dominant themes.

## Output Format

Produce the following in order:

**1. Frequency Matrix Table**
- Rows: Themes/codes
- Columns: Each participant segment, plus a "Total" column
- Each cell contains: `count (XX.X%)`
- Include a footer row showing total participants per segment

```
| Theme              | Segment A (n=20) | Segment B (n=15) | Total (n=35) |
|--------------------|------------------|------------------|--------------|
| Theme 1            | 14 (70.0%)       | 4 (26.7%)        | 18 (51.4%)   |
| Theme 2            | 8 (40.0%)        | 11 (73.3%)       | 19 (54.3%)   |
```

**2. Notable Patterns**
- Bulleted list of 3–5 specific observations drawn directly from the matrix values
- Each bullet names the theme, the segments compared, and the actual percentages

**3. Interpretation Notes**
- Flag small sample size warnings (any segment with n<10)
- Note if themes were merged or renamed during analysis
- One sentence on suggested next steps (e.g., chi-square test, member checking)
