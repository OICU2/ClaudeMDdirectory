---
name: competing-claims-arbitration
category: writing
description: >
  Scans long-form drafts to surface contradictory or inconsistent factual claims and recommends resolutions for each conflict. Use when someone says "check my draft for contradictions," asks to "find inconsistencies in this document," wants to "reconcile conflicting statements," needs to "audit a report for factual conflicts," or says "something feels off between sections." Produces a structured conflict report with paired citations and actionable fixes.
tags: [fact-checking, editing, consistency, long-form, revision]
author: community
---

# Competing Claims Arbitration

This skill detects contradictory or inconsistent factual claims within a single long-form document and flags each conflicting pair with source locations and a recommended resolution.

## Arbitration Workflow

1. **Segment the document** — mentally divide the draft into logical sections (introduction, body sections, conclusion, footnotes/appendices).

2. **Extract all verifiable claims** — identify every statement of fact, figure, date, name, causality assertion, or quantitative value. Ignore opinion and hedged speculation.

3. **Cross-reference claims** — compare each claim against every other claim in the document. Flag any pair where:
   - Two statements assert different values for the same variable (e.g., "founded in 1998" vs. "established in 2001")
   - One statement directly negates another ("X causes Y" vs. "X does not cause Y")
   - A conclusion contradicts evidence presented earlier in the same draft
   - A term is defined differently in two locations
   - A statistic or percentage is restated with a different number

4. **Classify severity** for each conflict:
   - **Critical** — directly undermines the document's central argument or contains a hard factual impossibility
   - **Moderate** — creates reader confusion but does not collapse the argument
   - **Minor** — small numerical discrepancy or wording inconsistency that could be a typo

5. **Determine resolution** for each conflict by applying this priority order:
   - Prefer the claim that is supported by an inline citation or sourced evidence
   - If neither claim is sourced, prefer the claim that appears in the document's most authoritative section (e.g., methodology over passing mention)
   - If still ambiguous, flag for author verification rather than inventing a resolution

6. **Compile the conflict report** — list every flagged pair in severity order (Critical → Moderate → Minor).

## Output Format

Produce a numbered conflict report using this structure for each entry:

---
**Conflict #[N] — [Severity: Critical / Moderate / Minor]**

- **Claim A:** "[Exact quote or close paraphrase]" *(Location: paragraph X / section title)*
- **Claim B:** "[Exact quote or close paraphrase]" *(Location: paragraph Y / section title)*
- **Nature of conflict:** One sentence explaining why these claims contradict each other.
- **Recommended resolution:** Specific corrective action (e.g., "Replace Claim B with Claim A's figure; Claim A cites the 2022 annual report while Claim B appears unsourced" or "Author must verify — neither claim is sourced").
---

After all conflicts, append a one-paragraph **Summary** stating: total conflicts found, breakdown by severity, and the single highest-priority fix the author should address first.

If no conflicts are found, state that explicitly and note which claim types were checked.
