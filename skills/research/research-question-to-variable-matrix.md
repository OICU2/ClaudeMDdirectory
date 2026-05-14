---
name: research-question-to-variable-matrix
description: >
  Maps each research question to its corresponding measurable variables, data sources, and
  collection methods in a structured matrix format. Use when someone says "I need to operationalize
  my research questions," asks about "what variables I need to measure," wants to "connect my
  research questions to data," needs to "plan data collection for my study," or is trying to
  "figure out what to measure for each question."
category: research
tags: [research-design, variables, data-collection, operationalization, methodology]
author: community
---

# Research Question to Variable Matrix

This skill translates abstract research questions into concrete, measurable components by building a structured matrix that links each question to its variables, data sources, and collection methods.

## Mapping Workflow

1. **Extract research questions** — Identify and list each distinct research question from the user's input. Number them sequentially. If questions are vague, ask for clarification before proceeding.

2. **Identify variable types per question** — For each research question, determine:
   - **Independent variables**: what is being manipulated or used as a predictor
   - **Dependent variables**: what is being measured as an outcome
   - **Control/moderating variables**: what needs to be held constant or accounted for

3. **Define operationalization** — For each variable, specify exactly how it will be measured (e.g., Likert scale 1–5, count of occurrences, binary yes/no, continuous measurement in units).

4. **Assign data sources** — Match each variable to its most appropriate data source (e.g., survey responses, administrative records, observational logs, existing datasets, interviews, sensor data).

5. **Specify collection methods** — For each data source, name the concrete collection method (e.g., online survey via Qualtrics, structured interview, web scraping, archival review, experiment, field observation).

6. **Flag gaps and conflicts** — Identify any research questions with no measurable variables, variables with no viable data source, or collection methods that conflict with stated constraints (budget, ethics, timeline).

## Output Format

Produce a markdown table with the following columns, one row per variable (not per question — a single question may span multiple rows):

| RQ # | Research Question (shortened) | Variable Name | Variable Type | Operationalization | Data Source | Collection Method | Notes/Gaps |
|------|-------------------------------|---------------|---------------|--------------------|-------------|-------------------|------------|

After the table, include:

**Summary** (3–5 bullet points):
- Total number of research questions covered
- Total number of variables identified
- Any data sources that serve multiple questions (efficiency opportunities)
- Any questions with missing or weak variable coverage
- Recommended next steps (e.g., pilot testing an instrument, sourcing a dataset)

Keep the table skimmable — truncate long question text to 8 words max in the "Research Question (shortened)" column but use full text in the Notes column if needed.
