---
name: research-question-priority-cost-matrix
description: >
  Maps each open research question against estimated cost, time, and decision impact to produce a ranked priority order for investigation. Use when someone says "I have too many research questions to tackle," asks about which research to do first, wants to prioritize their research backlog, needs to allocate limited research budget, or is trying to figure out what to investigate next.
category: research
tags: [prioritization, research-planning, cost-benefit, decision-making, roadmap]
author: community
---

# Research Question Priority & Cost Matrix

This skill collects all open research questions, scores them across cost, time, and decision impact dimensions, and returns a ranked priority matrix so Claude can tell you exactly which questions to investigate first and why.

## Workflow

1. **Collect all open questions**: Ask the user to list every research question they're considering, or extract them from any document, brief, or context they provide. Number each question.

2. **Define scoring dimensions**: Apply these three dimensions to every question:
   - **Decision Impact (1–5)**: How significantly does answering this question change a decision, strategy, or outcome? (5 = blocks major decisions, 1 = nice to know)
   - **Estimated Cost (1–5)**: How expensive is the research in money, effort, and resources? (1 = cheap/easy, 5 = expensive/complex)
   - **Time to Answer (1–5)**: How long will it take to get a reliable answer? (1 = days, 5 = months)

3. **Calculate priority score**: For each question, compute:
   `Priority Score = Decision Impact / ((Cost + Time) / 2)`
   Higher scores mean higher priority — high impact relative to low cost and time.

4. **Identify dependencies**: Note any questions where answering one unlocks or invalidates another. Flag these explicitly.

5. **Apply tiebreakers**: When scores are close (within 0.3), rank by: (a) lower time-to-answer first, then (b) lower cost.

6. **Assign recommendation tier**:
   - Score ≥ 2.0 → **Tier 1: Investigate immediately**
   - Score 1.0–1.99 → **Tier 2: Schedule next cycle**
   - Score < 1.0 → **Tier 3: Defer or drop**

7. **Flag any Tier 3 questions** that still have high Decision Impact (≥ 4) — these are high-stakes but costly and need explicit acknowledgment, not silent deferral.

## Output Format

Produce a markdown table followed by a short ranked list and recommendations:

**Priority Matrix Table**

| Rank | Research Question | Impact (1–5) | Cost (1–5) | Time (1–5) | Priority Score | Tier |
|------|------------------|-------------|-----------|-----------|---------------|------|
| 1    | [Question text]  | 5           | 2         | 1         | 3.33          | Tier 1 |
| ...  | ...              | ...         | ...       | ...       | ...           | ...  |

**Ranked Priority List**

A numbered list of all questions in priority order, one line each, with a single sentence explaining the ranking rationale.

**Dependency Notes**

Bullet list of any questions that block or depend on each other, with a suggested sequencing note.

**Tier 3 Flags**

If any Tier 3 questions have Decision Impact ≥ 4, call them out explicitly with a recommended mitigation (e.g., scope reduction, proxy research, or stakeholder decision to proceed without data).

Total length: concise enough to fit one screen for ≤ 8 questions; paginate or summarize for larger sets.
