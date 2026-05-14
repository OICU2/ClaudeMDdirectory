---
name: interview-guide-cognitive-load-audit
description: >
  Analyzes an interview discussion guide to identify questions that place excessive cognitive burden on participants, reducing data quality. Use when someone wants to review their interview questions, asks if their discussion guide is too complicated, or needs help simplifying questions for user research. Also triggers when someone shares a moderator guide and wants feedback on question clarity or says their interviews feel confusing or unproductive.
category: research
tags: [user-research, interviews, cognitive-load, discussion-guide, question-design]
author: community
---

# Interview Guide Cognitive Load Audit

This skill reviews an interview or usability discussion guide to flag cognitively taxing questions and provides specific rewrites so participants can answer accurately and comfortably.

## Audit Process

1. **Parse the guide** — Identify every distinct question, including follow-up probes and sub-questions. Number them sequentially for reference.

2. **Check each question for these cognitive load failure modes:**
   - **Double-barreled** — asks two things at once (e.g., "How do you find and evaluate vendors?")
   - **Hypothetical overload** — requires imagining an unrealistic or abstract scenario (e.g., "If you had no budget constraints and could redesign your entire workflow...")
   - **Memory overtax** — asks participants to recall specific details, frequencies, or timelines without a memory cue (e.g., "How many times last year did you...?")
   - **Compound negatives** — uses negation in ways that require mental unpacking (e.g., "What wouldn't you not want to avoid?")
   - **Jargon or abstraction** — uses technical terms, industry acronyms, or abstract concepts the participant may not share with the researcher
   - **Leading + complex** — simultaneously leads the participant AND requires complex reasoning
   - **Too long** — question exceeds roughly 25 words, introducing working memory strain

3. **Rate overall guide difficulty** on a three-point scale:
   - 🟢 Low load — mostly clear, minor fixes needed
   - 🟡 Moderate load — several questions need revision
   - 🔴 High load — structural rework recommended

4. **For every flagged question**, produce:
   - The failure mode label
   - A one-sentence explanation of why it taxes participants
   - A specific rewrite that preserves research intent

5. **Identify structural issues** beyond individual questions:
   - Guide opens with high-effort questions before rapport is built
   - Too many questions for the allotted time (flag if >12 questions per 60 minutes)
   - Topic sequencing creates context confusion

6. **Summarize top 3 priority fixes** — the changes that will most improve data quality.

## Output Format

Produce a structured audit report with the following sections:

**Overall Rating:** [🟢 / 🟡 / 🔴] [Low / Moderate / High] Cognitive Load — one sentence summary.

**Flagged Questions:**
For each flagged question, use this block:

> **Q[number]:** "[original question text]"
> - **Issue:** [failure mode label]
> - **Why it's taxing:** [one sentence]
> - **Suggested rewrite:** "[revised question]"

**Structural Observations:** Bullet list of guide-level issues (skip section if none found).

**Top 3 Priority Fixes:** Numbered list of the highest-impact changes, each 1–2 sentences.

Keep the report scannable. Do not restate questions that pass the audit. Total length should match the size of the guide — a 10-question guide should yield roughly one page of feedback.
