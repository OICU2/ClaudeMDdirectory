---
name: survey-scale-reliability-check
description: >
  Evaluates multi-item survey scales for internal consistency and identifies items that may be reducing reliability. Use when someone says "check my survey reliability," asks about Cronbach's alpha for their scale, wants to know if their survey items are consistent, needs to identify problem items in a questionnaire, or is preparing a survey instrument for publication or analysis.
category: research
tags: [survey, psychometrics, reliability, Cronbach-alpha, scale-development]
author: community
---

# Survey Scale Reliability Check

This skill analyzes multi-item survey scales for internal consistency, computes or interprets Cronbach's alpha, and flags specific items that may be dragging down reliability scores.

## Reliability Evaluation Workflow

1. **Collect scale items**: Ask the user to provide all items in the scale, their response format (e.g., 5-point Likert), and any existing reliability data (alpha values, item-total correlations, inter-item correlations) if available.

2. **Identify scale structure**: Confirm whether the scale is intended to be unidimensional or multidimensional. If multidimensional, treat each subscale separately.

3. **Assess provided alpha**: Apply standard benchmarks:
   - α ≥ 0.90: Excellent (flag potential redundancy)
   - α 0.80–0.89: Good
   - α 0.70–0.79: Acceptable
   - α 0.60–0.69: Questionable — flag for review
   - α < 0.60: Poor — recommend revision

4. **Flag problematic items** using these signals:
   - Item-total correlation below 0.30 → weak contributor, candidate for removal
   - "Alpha if item deleted" higher than current alpha → item is actively reducing reliability
   - Negatively worded items with low or negative inter-item correlations → likely miscoded or poorly understood
   - Items with near-zero variance in responses → insufficient discrimination

5. **Diagnose root causes** for flagged items:
   - Double-barreled phrasing (item asks two things at once)
   - Ambiguous wording or jargon
   - Reverse-scored item not properly recoded
   - Item tapping a different construct than the rest of the scale

6. **Recommend corrective actions**:
   - Reword ambiguous items
   - Remove items where deletion improves alpha without sacrificing content validity
   - Split scale into subscales if items cluster around distinct constructs
   - Collect pilot data if no reliability statistics exist yet

## Output Format

Produce a structured report with these sections:

**Scale Summary**
- Scale name, number of items, response format
- Current Cronbach's alpha (or note if not yet computed)
- Overall reliability verdict (Excellent / Good / Acceptable / Questionable / Poor)

**Item-Level Findings**
A table or numbered list for each flagged item:
- Item text
- Problem identified (e.g., low item-total correlation, reduces alpha if deleted)
- Likely cause
- Recommended action

**Items Passing Review**
Brief confirmation of items with no reliability concerns.

**Priority Recommendations**
Numbered list of 2–5 concrete next steps ordered by impact, written so a researcher can act on them immediately.

Keep the report concise — one to two pages equivalent. Use plain language alongside any technical terms.
