---
name: research-question-to-interview-guide-alignment-audit
description: >
  Audits an interview guide to ensure every question maps back to at least one core research question, flagging orphaned guide questions and redundant or overlapping items. Use when someone says "check if my interview questions cover my research goals," asks whether their interview guide is aligned with their study objectives, or wants to audit research question coverage in a discussion guide.
category: research
tags: [research, interview-guide, alignment, qualitative-research, audit]
author: community
---

# Research Question to Interview Guide Alignment Audit

This skill systematically maps each interview guide question to the study's core research questions, identifies gaps, orphans, and redundancies, and produces a structured alignment report.

## Alignment Audit Workflow

1. **Extract core research questions (CRQs).** Parse the user's stated research questions and number them (CRQ-1, CRQ-2, etc.). If none are explicitly provided, ask the user to supply them before proceeding.

2. **Extract interview guide questions (IGQs).** Number every question in the guide sequentially (IGQ-1, IGQ-2, etc.), including probes and follow-ups as sub-items (IGQ-2a, IGQ-2b).

3. **Build the alignment matrix.** For each IGQ, determine which CRQ(s) it addresses. Assign one of three statuses:
   - **Aligned** — maps to one or more CRQs clearly.
   - **Orphaned** — does not map to any CRQ.
   - **Redundant** — substantially overlaps with another IGQ targeting the same CRQ without adding new angle or depth.

4. **Check for CRQ coverage gaps.** Identify any CRQ that has zero or only one IGQ mapped to it. Flag these as under-covered.

5. **Assess probe sufficiency.** For each aligned IGQ, note whether at least one probe or follow-up exists to deepen the response. Flag questions with no probes as shallow.

6. **Generate recommendations.** For each flagged item, provide a concrete action: rewrite, remove, merge, or add a new question.

## Output Format

Produce the following sections in order:

**Summary Table**
A markdown table with columns: `IGQ #` | `Question (truncated)` | `Mapped CRQ(s)` | `Status` | `Issue`

**CRQ Coverage Map**
A list of each CRQ with the IGQs mapped to it and a coverage rating: `Strong (3+)`, `Adequate (2)`, or `Weak (0–1)`.

**Flagged Items**
Numbered list of all Orphaned, Redundant, and Weak-coverage items. Each entry includes:
- The full question text
- The specific problem
- A concrete recommended action (rewrite suggestion, merge target, or replacement question)

**Overall Alignment Score**
A percentage: (number of aligned, non-redundant IGQs ÷ total IGQs) × 100, with a one-sentence interpretation.

Keep the report under 600 words excluding the table. Use plain language. Do not restate the entire guide verbatim.
