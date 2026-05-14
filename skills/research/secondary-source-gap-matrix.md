---
name: secondary-source-gap-matrix
description: >
  Compares existing secondary data sources against required research variables to identify which gaps require primary data collection. Use when someone says "I already have some data but need to know what's missing," asks about whether existing sources cover their research needs, or wants to figure out what they still need to collect. Also triggers when someone shares a list of available datasets and asks if they're sufficient, or needs to map data sources to research questions.
category: research
tags: [gap-analysis, secondary-data, research-planning, data-mapping, primary-research]
author: community
---

# Secondary Source Gap Matrix

This skill builds a structured matrix mapping available secondary data sources to required research variables, then clearly flags which variables remain uncovered and require primary data collection.

## Gap Analysis Workflow

1. **Extract research variables**: Identify every variable, metric, or data point the research requires. If not explicitly listed, ask the user to enumerate them before proceeding.

2. **Inventory secondary sources**: List all secondary sources the user has identified (databases, reports, published studies, administrative records, etc.). For each source, note:
   - Source name and type
   - Geographic and temporal coverage
   - Key variables it contains
   - Known limitations (age of data, sample size, proxy accuracy)

3. **Map variables to sources**: For each required variable, determine:
   - **Fully covered**: Source provides direct, reliable measurement
   - **Partially covered**: Source provides a proxy or incomplete coverage (note the gap)
   - **Not covered**: No existing source addresses this variable

4. **Assess partial coverage**: For partially covered variables, specify exactly what is missing — wrong geography, outdated timeframe, proxy instead of direct measure, insufficient granularity, or missing subgroup.

5. **Prioritize gaps**: Rank uncovered and partially covered variables by their importance to the research objectives. Flag which gaps are blockers versus acceptable limitations.

6. **Recommend primary data methods**: For each gap that must be filled, suggest the appropriate primary collection method (survey, interview, observation, experiment, etc.) and note the resource implications.

## Output Format

Produce a matrix table followed by a structured summary:

**Matrix Table** (Markdown table):
| Research Variable | Required Detail | Source 1 | Source 2 | Source N | Coverage Status | Gap Description |
|---|---|---|---|---|---|---|
| [Variable] | [Specifics needed] | ✅ / ⚠️ / ❌ | ... | ... | Full / Partial / None | [Exact gap if not full] |

**Gap Summary** (after the table):
- **Fully covered variables** (count): brief list
- **Partially covered variables** (count): each with one-line gap description
- **Uncovered variables** (count): each flagged as blocker or acceptable limitation

**Primary Data Recommendations**:
For each uncovered or partially covered blocker variable, provide:
- Variable name
- Recommended collection method
- Minimum viable approach if resources are constrained

Keep the matrix exhaustive — every required variable must appear as a row. Do not summarize or collapse variables.
