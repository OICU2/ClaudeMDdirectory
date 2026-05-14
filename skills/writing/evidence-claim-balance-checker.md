---
name: evidence-claim-balance-checker
category: writing
description: >
  Analyzes a piece of writing to identify the ratio of unsupported claims to evidence-backed statements, then flags specific sections that need substantiation. Use when someone says "my writing feels too assertive," asks "does my draft have enough evidence," wants to strengthen the credibility of their argument, needs to know which claims require citations, or wonders if their essay is well-supported.
tags: [writing, editing, research, argumentation, credibility]
author: community
---

# Evidence-Claim Balance Checker

This skill scans a draft for unsupported assertions versus evidence-backed statements and returns a structured report highlighting where substantiation is needed.

## Analysis Workflow

1. **Parse the draft by paragraph.** Read each paragraph and identify every discrete claim — any statement presented as fact, causal relationship, trend, or generalization.

2. **Classify each claim** into one of three categories:
   - **Supported**: Claim is followed by a citation, statistic, direct quote, named source, study reference, or concrete example within the same or adjacent sentence.
   - **Partially supported**: Claim has vague support ("research shows," "experts say," "studies suggest") without a specific source.
   - **Unsupported**: Claim stands alone with no backing whatsoever.

3. **Calculate the balance ratio** across the full draft:
   - Total claims identified
   - Count of supported, partially supported, and unsupported
   - Percentage of claims that are fully supported

4. **Flag high-risk sections.** Mark paragraphs where unsupported or partially supported claims cluster — particularly in thesis statements, topic sentences, and conclusions, where credibility is most critical.

5. **Assess overall risk level:**
   - **Low risk**: ≥70% of claims fully supported
   - **Moderate risk**: 40–69% of claims fully supported
   - **High risk**: <40% of claims fully supported

6. **Generate targeted recommendations** for each unsupported claim: suggest the type of evidence that would strengthen it (e.g., statistical data, peer-reviewed study, expert quote, historical example, case study).

## Output Format

Produce a structured report with these sections:

**Summary Stats**
- Total claims found: [N]
- Supported: [N] ([%])
- Partially supported: [N] ([%])
- Unsupported: [N] ([%])
- Overall risk level: [Low / Moderate / High]

**Flagged Sections**
For each problematic paragraph or passage:
- Location (paragraph number or quoted opening phrase)
- List of unsupported/partially supported claims found within it
- Risk note (why this location matters — e.g., "thesis sentence," "core argument")

**Claim-by-Claim Breakdown**
A numbered list of every unsupported or partially supported claim, formatted as:
> [Claim as quoted or paraphrased] — Status: [Unsupported / Partial] — Suggested evidence type: [specific suggestion]

**Recommended Next Steps**
3–5 prioritized actions the writer should take, ordered by impact on credibility.

Keep the tone direct and diagnostic. Do not rewrite the draft — only analyze and flag.
