---
name: research-hypothesis-prioritization
category: research
description: >
  Ranks a list of research hypotheses by feasibility, strategic value, and resource requirements to help teams decide what to investigate first. Use when someone says "we have too many hypotheses to test," asks "which research questions should we prioritize," wants to "rank our experiments by impact," needs help "deciding what to investigate first," or is trying to "triage our research backlog."
tags: [research, prioritization, decision-making, hypothesis-testing, strategy]
author: community
---

# Research Hypothesis Prioritization

This skill evaluates and ranks a set of research hypotheses across three dimensions — feasibility, strategic value, and resource requirements — so teams can make confident, defensible decisions about what to investigate first.

## Prioritization Workflow

1. **Extract all hypotheses** from the user's input. If they are vague or incomplete, ask for clarification on what each hypothesis claims and what evidence would confirm or refute it.

2. **Score each hypothesis** on three dimensions using a 1–5 scale:
   - **Feasibility** (1 = nearly impossible, 5 = straightforward): Can this be tested with available data, tools, and expertise? Are there known blockers?
   - **Strategic Value** (1 = low impact, 5 = transformative): How directly does this hypothesis connect to core goals, decisions, or user needs? What is the cost of not knowing?
   - **Resource Requirement** (1 = very expensive, 5 = minimal cost): Estimate time, personnel, compute, data access, or budget needed. Invert this so lower resource needs score higher.

3. **Calculate a Priority Score** for each hypothesis:
   - Formula: `(Feasibility × 0.35) + (Strategic Value × 0.45) + (Resource Score × 0.20)`
   - Strategic value is weighted highest because it anchors research to impact.

4. **Identify dependencies and risks**: Flag any hypotheses that must be tested before others, or that share confounds. Note hypotheses with high variance in assumptions.

5. **Apply tiebreakers** when scores are within 0.3 of each other:
   - Prefer hypotheses that generate reusable knowledge
   - Prefer hypotheses that reduce uncertainty for downstream decisions
   - Prefer hypotheses with faster time-to-signal

6. **Generate a ranked list** with rationale for the top three, and flag any hypotheses that should be deprioritized or reframed before testing.

## Output Format

Produce a structured report with the following sections:

**Hypothesis Scoring Table**
A markdown table with columns: `Hypothesis`, `Feasibility (1–5)`, `Strategic Value (1–5)`, `Resource Score (1–5)`, `Priority Score`, `Rank`

**Top 3 Recommendations**
For each of the top-ranked hypotheses, write 2–4 sentences explaining: why it ranked high, what a first test might look like, and any key risks or assumptions to validate.

**Deprioritized or Flagged Hypotheses**
A bulleted list of hypotheses that scored below 2.5 or have critical blockers, with a one-line reason for each.

**Suggested Next Step**
One concrete action the team should take within the next week to begin testing the top-ranked hypothesis.

Total length: 300–600 words depending on the number of hypotheses. Use plain language; avoid academic hedging.
