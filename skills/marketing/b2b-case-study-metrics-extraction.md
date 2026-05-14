---
name: b2b-case-study-metrics-extraction
description: >
  Extracts quantifiable outcomes, timeline details, and customer quotes from raw interview transcripts or notes to populate a structured B2B case study metrics brief. Use when someone shares a customer interview transcript, pastes rough notes from a client call, wants to turn a success story into a case study, needs to pull metrics from a customer conversation, or asks to structure a win story for marketing use.
category: marketing
tags: [case-study, b2b, metrics, content-marketing, customer-stories]
author: community
---

# B2B Case Study Metrics Extraction

This skill parses raw interview transcripts or unstructured notes to extract and organize quantifiable outcomes, timeline data, and direct customer quotes into a structured metrics brief ready for case study production.

## Extraction Workflow

1. **Scan for quantitative outcomes** — Identify all numbers, percentages, dollar figures, time savings, headcount changes, and growth metrics. Flag ambiguous figures (e.g., "around 30%") as approximate.

2. **Identify the before/after state** — Extract the customer's situation before the solution (pain points, inefficiencies, baseline metrics) and after (results achieved). If only one state is present, note the gap explicitly.

3. **Pull timeline details** — Find implementation duration, time-to-value, contract start references, or any stated timeframes. Note if timelines are vague or missing.

4. **Extract direct customer quotes** — Pull verbatim statements that express emotional impact, business value, or recommendation intent. Prioritize quotes that contain a result, a contrast, or a strong opinion. Do not paraphrase — preserve exact wording.

5. **Identify company and role context** — Note the customer's company size, industry, job title, and use case if mentioned. Flag anything that needs verification before publishing.

6. **Flag gaps** — List any standard case study fields that the source material does not answer (e.g., ROI timeline, specific metric, stakeholder title).

## Output Format

Produce a structured brief with these exact sections:

**COMPANY SNAPSHOT**
- Company name, industry, size (if available)
- Customer name and title (if available)
- Use case / product area

**KEY METRICS**
- Bullet list of all quantified outcomes, each formatted as: [Metric]: [Value] ([approximate/exact])
- Example: Revenue increase: 40% over 6 months (exact per transcript)

**TIMELINE**
- Implementation duration:
- Time to first value:
- Other relevant dates or phases:

**BEFORE STATE**
- 2–5 bullets describing the problem, inefficiency, or baseline condition

**AFTER STATE**
- 2–5 bullets describing the improvement, outcome, or new capability

**CUSTOMER QUOTES**
- Each quote on its own line, in quotation marks, with speaker name/title below if known
- Label each quote with its likely use: [Hero quote], [Result quote], [Problem quote], [Recommendation quote]

**GAPS & VERIFICATION FLAGS**
- Bullet list of missing data points or figures that need confirmation before publishing
