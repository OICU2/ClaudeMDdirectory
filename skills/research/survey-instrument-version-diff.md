---
name: survey-instrument-version-diff
description: >
  Compares two versions of a survey instrument and generates a structured changelog for audit and continuity purposes. Use when someone says "compare these survey versions," asks about "what changed between survey drafts," or wants to "track question changes across study waves." Also triggers when someone needs to "document survey revisions" or "audit instrument modifications" between versions.
category: research
tags: [survey, versioning, changelog, audit, research-instruments]
author: community
---

# Survey Instrument Version Diff

This skill compares two versions of a survey instrument and produces a structured, auditable changelog categorizing every change by type so researchers can document instrument evolution and assess threats to longitudinal validity.

## Comparison Workflow

1. **Ingest both versions** — Accept the two survey versions as pasted text, uploaded files, or structured lists. Label them Version A (older) and Version B (newer). If version labels or dates are provided, record them in the changelog header.

2. **Normalize the inputs** — Strip formatting artifacts. Number all items in each version sequentially if not already numbered. Identify the unit of comparison (full questions, response options, section headers, instructions).

3. **Align items across versions** — Match questions between versions by semantic content, not position. A question that moved from Q4 to Q7 is a reorder, not a deletion plus addition. Use exact wording match, near-match, and conceptual equivalence as a hierarchy for alignment decisions.

4. **Classify every detected change** into one of five categories:
   - **ADDED** — Item exists in Version B but has no counterpart in Version A.
   - **REMOVED** — Item exists in Version A but has no counterpart in Version B.
   - **REWORDED** — Same core construct, different phrasing. Note whether the change is minor (typo, punctuation, capitalization) or substantive (altered meaning, changed construct).
   - **REORDERED** — Item wording is identical or near-identical but position changed. Record old and new position numbers.
   - **RESPONSE SCALE CHANGED** — Question stem is the same but response options, anchors, or scale points were modified.

5. **Flag continuity risks** — For any REWORDED or RESPONSE SCALE CHANGED item, add a brief note on whether the change may affect longitudinal comparability or require re-validation.

6. **Count and summarize** — Tally changes by category before listing individual changes.

## Output Format

Produce a changelog with the following structure:

```
SURVEY INSTRUMENT VERSION DIFF
Version A: [label/date if provided]
Version B: [label/date if provided]
Comparison Date: [today's date]

SUMMARY
  Added:                  [n]
  Removed:                [n]
  Reworded (minor):       [n]
  Reworded (substantive): [n]
  Reordered:              [n]
  Response scale changed: [n]
  Unchanged:              [n]
  Total items compared:   [n]

DETAILED CHANGELOG

[ADDED]
- Q[#] (Version B): "[Full question text]"

[REMOVED]
- Q[#] (Version A): "[Full question text]"

[REWORDED — MINOR]
- Q[#]: "[Version A text]"
       → "[Version B text]"
  Note: [what changed, e.g., "corrected spelling of 'recieve'"]

[REWORDED — SUBSTANTIVE]
- Q[#]: "[Version A text]"
       → "[Version B text]"
  ⚠ Continuity risk: [brief explanation of potential comparability issue]

[REORDERED]
- "[Question text]": moved from Q[#] to Q[#]

[RESPONSE SCALE CHANGED]
- Q[#]: "[Question stem]"
  Version A scale: [describe]
  Version B scale: [describe]
  ⚠ Continuity risk: [brief explanation]

UNCHANGED ITEMS: [list item numbers or state count only if list would be excessively long]
```

If either version is ambiguous or items cannot be reliably aligned, flag the specific items as `[UNRESOLVED — manual review required]` rather than guessing.
