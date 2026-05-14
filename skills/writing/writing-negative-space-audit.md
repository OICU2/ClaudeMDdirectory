---
name: writing-negative-space-audit
description: >
  Analyzes a draft to surface topics, counterarguments, stakeholder perspectives, and evidence that are conspicuously absent, then flags these gaps as structured content recommendations. Use when someone says "what am I missing in this piece," asks whether their argument covers all the angles, or wants to stress-test a draft before publishing. Also activates when a writer wonders if their essay feels one-sided or incomplete.
category: writing
tags: [writing, editing, content-strategy, argumentation, revision]
author: community
---

# Negative Space Audit

Scans a draft for what is NOT there — missing counterarguments, unaddressed audiences, absent evidence, and overlooked implications — and returns a prioritized gap report Claude will use during any draft review or completeness check.

## Audit Workflow

1. **Read for stated claims** — Extract every major assertion, position, or recommendation the draft makes explicitly.

2. **Identify implied audiences** — List who the draft is written for, then ask: who else is affected by this topic but not addressed? Who would object? Who holds institutional or lived-experience knowledge the draft ignores?

3. **Map the counterargument space** — For each major claim, generate the strongest opposing argument. Mark any that the draft does not acknowledge, rebut, or steelman.

4. **Check evidence coverage** — Note claim types (statistical, anecdotal, expert opinion, historical). Flag claim types that appear without supporting evidence, and flag evidence types that are entirely absent from the draft.

5. **Scan for suppressed complexity** — Identify binary framings, false dichotomies, or areas where the draft treats a contested issue as settled. Flag nuance that has been flattened.

6. **Assess temporal and contextual blind spots** — Note whether the draft ignores historical precedent, future implications, geographic variation, or cultural context that would materially change how readers interpret the argument.

7. **Prioritize gaps** — Rank each identified gap as: **Critical** (undermines the core argument if absent), **Significant** (weakens credibility or scope), or **Optional** (adds depth but not required).

## Output Format

Produce a structured gap report with the following sections:

**Negative Space Audit Report**

- **Draft Summary (1–2 sentences):** Restate the draft's core argument to confirm alignment before critiquing.

- **Critical Gaps** (numbered list): Each entry states the missing element, explains why its absence is a problem, and suggests a specific addition (e.g., "No acknowledgment of cost barriers for low-income users — add a paragraph addressing accessibility or explicitly scope your audience to enterprises").

- **Significant Gaps** (numbered list): Same format as Critical Gaps.

- **Optional Additions** (bulleted list): Brief labels only, no extended explanation needed.

- **Strongest Unaddressed Counterargument:** One paragraph describing the best opposing case the draft leaves unanswered, written as if by a skeptical reader.

- **Recommended Next Step:** One concrete action the writer should take first (e.g., "Add a limitations section," "Interview a dissenting stakeholder," "Cite one peer-reviewed study on X").

Length: Concise. Critical and Significant sections should each contain 2–5 items. Total report should fit on one to two pages.
