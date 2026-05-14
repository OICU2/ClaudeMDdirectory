---
name: interview-topic-coverage-gap-checker
description: >
  Analyzes completed qualitative interview transcripts against a topic guide to surface themes and questions that received insufficient or uneven coverage across participants. Use when someone says "check what topics we missed in our interviews," asks about "gaps in our interview data," wants to "see which themes weren't covered enough," needs to "audit interview coverage before analysis," or is "comparing transcripts against our discussion guide."
category: research
tags: [qualitative-research, interviews, content-analysis, gap-analysis, thematic-coverage]
author: community
---

# Interview Topic Coverage Gap Checker

This skill systematically compares interview transcripts against a predefined topic guide to identify which themes, questions, or sub-topics received inadequate coverage across participants, and Claude will use it whenever a researcher needs to audit their qualitative data before coding or analysis begins.

## Coverage Analysis Workflow

1. **Ingest the topic guide**: Accept the structured discussion guide as input — extract every major theme, sub-theme, and probing question as discrete coverage items. Number each item for tracking.

2. **Ingest transcripts**: Accept one or more interview transcripts. If multiple, label each by participant ID or filename.

3. **Map coverage per transcript**: For each transcript, scan for explicit and implicit treatment of every topic guide item. Mark each item as:
   - **Covered** — participant addressed the theme substantively (more than a one-word answer)
   - **Mentioned** — topic arose but was not explored (e.g., interviewer did not probe, participant deflected)
   - **Absent** — no evidence the topic was raised or discussed

4. **Aggregate across participants**: Build a cross-participant matrix showing coverage status per topic item per interview.

5. **Calculate coverage rates**: For each topic guide item, compute the percentage of participants who covered it substantively.

6. **Flag gaps using thresholds**:
   - **Critical gap**: Fewer than 50% of participants covered the item substantively
   - **Partial gap**: 50–74% coverage
   - **Adequate**: 75%+ coverage

7. **Diagnose gap causes**: For each flagged item, note whether the gap appears to be due to interviewer omission, participant avoidance, topic irrelevance to that participant profile, or time constraints (infer from transcript pacing or abrupt transitions).

8. **Generate remediation options**: For critical and partial gaps, suggest whether a follow-up interview, member-checking call, or supplementary question is the appropriate fix.

## Output Format

Produce a structured gap report with the following sections:

**Coverage Matrix Table**
- Rows: topic guide items (numbered)
- Columns: participant IDs
- Cells: C (Covered) / M (Mentioned) / A (Absent)
- Final column: coverage rate %

**Gap Summary List**
- Bulleted list of all critical and partial gaps
- Each entry includes: topic item name, coverage rate, likely cause, recommended remediation

**Overall Coverage Score**
- Single metric: percentage of topic guide items reaching adequate coverage (75%+) across the full interview set

**Interviewer Pattern Notes**
- If patterns suggest systematic omission by the interviewer (e.g., a probing question consistently skipped), flag this separately as a protocol adherence note

Report length scales with number of transcripts and topic guide complexity. Use tables for the matrix. Keep diagnostic notes concise — one to two sentences per gap item.
