---
name: knowledge-gap-prioritization
category: research
description: >
  Scores and ranks identified knowledge gaps by strategic impact and feasibility to fill, helping teams allocate limited research budgets to the highest-value questions. Use when someone says "we don't know enough about X," asks how to prioritize research questions, wants to figure out which gaps matter most, needs to allocate a research budget across competing unknowns, or is trying to decide what to investigate first.
tags: [research, prioritization, strategy, decision-making, planning]
author: community
---

# Knowledge Gap Prioritization

This skill evaluates a set of knowledge gaps against strategic impact and feasibility dimensions, then produces a ranked research agenda with budget allocation guidance.

## Prioritization Workflow

### 1. Elicit or Confirm the Gap List
If the user has not provided a list of gaps, ask them to enumerate 3–15 specific unknowns. Each gap should be a clear question (e.g., "What is our target customer's primary switching cost?"), not a topic area. If gaps are vague, rewrite them as answerable questions before proceeding.

### 2. Score Each Gap on Two Axes

**Strategic Impact (1–5)**
- 5 = Directly blocks a high-stakes decision or invalidates core assumptions
- 4 = Significantly influences strategy, roadmap, or resource allocation
- 3 = Useful signal that refines existing plans
- 2 = Nice-to-know; incremental value
- 1 = Low relevance to current priorities

**Feasibility to Fill (1–5)**
- 5 = Answerable within 1 week with available resources (desk research, internal data, quick interviews)
- 4 = Answerable within 1 month with moderate effort
- 3 = Requires dedicated study (survey, experiment, pilot) over 1–3 months
- 2 = Difficult due to data access, expertise, or cost; 3–6 months
- 1 = Effectively unanswerable in the current context (requires years, proprietary access, or massive budget)

### 3. Calculate Priority Score
`Priority Score = (Strategic Impact × 2) + Feasibility`

Weighting impact twice ensures high-value questions are not deprioritized simply because they are hard.

### 4. Classify Each Gap into a Tier
- **Tier 1 – Act Now** (Score ≥ 13): Highest ROI; fund immediately
- **Tier 2 – Plan Soon** (Score 9–12): High value; schedule within current quarter
- **Tier 3 – Backlog** (Score 5–8): Address when bandwidth allows or stakes rise
- **Tier 4 – Deprioritize** (Score ≤ 4): Park unless context changes

### 5. Flag Special Cases
- **Blocking dependency**: Any Tier 3/4 gap that, if unresolved, prevents a Tier 1 gap from being answered — escalate it.
- **Assumption risk**: Any gap where the wrong assumption is already baked into a live decision — mark as urgent regardless of score.
- **Quick wins**: Any gap with Feasibility = 5 and Impact ≥ 3 — recommend tackling immediately even if overall score is mid-tier.

### 6. Draft Budget Allocation Guidance
Recommend percentage of research budget/time across tiers:
- Default split: 60% Tier 1, 25% Tier 2, 10% Tier 3 exploratory, 5% reserve
- Adjust if the user has stated constraints (e.g., only 2 weeks, only qualitative methods available)

## Output Format

Produce the following sections in order:

**1. Scored Gap Table**
Markdown table with columns: `Gap (as question)` | `Impact (1–5)` | `Feasibility (1–5)` | `Priority Score` | `Tier`
Sort rows by Priority Score descending.

**2. Tier Summary**
One bullet per tier listing which gaps fall into it and a one-line rationale for the grouping.

**3. Special Flags**
Bulleted list of any blocking dependencies, assumption risks, or quick wins identified in Step 5. If none, write "No special flags."

**4. Recommended Research Agenda**
Numbered list of the top 5 gaps
