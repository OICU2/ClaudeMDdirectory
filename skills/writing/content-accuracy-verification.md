---
name: content-accuracy-verification
category: writing
description: >
  Systematically cross-checks factual claims, statistics, dates, and attributed quotes in a draft
  against provided source materials to identify inaccuracies before publication. Use when someone
  says "verify this before we publish," asks to "fact-check my draft," wants to "check if these
  stats are accurate," needs to "validate the claims in this article," or says "make sure I quoted
  these sources correctly."
tags: [fact-checking, accuracy, verification, editing, publishing]
author: community
---

# Content Accuracy Verification

This skill audits a draft document against provided source materials to surface factual errors, misquoted statistics, and misattributed statements before publication.

## Verification Workflow

1. **Extract all verifiable claims** from the draft: statistics, percentages, dates, names, titles, attributed quotes, study findings, and cause-effect statements. Number each claim.

2. **Map claims to sources**: For each extracted claim, identify which provided source it should correspond to. Note any claims that have no corresponding source.

3. **Compare claim against source**:
   - For statistics/numbers: check exact figures, units, sample sizes, and date of data
   - For quotes: compare word-for-word against the original; flag paraphrases presented as direct quotes
   - For attributions: verify the person, their title, and the context in which they made the statement
   - For dates and timelines: confirm precision (e.g., draft says "2021," source says "March 2021")

4. **Classify each discrepancy** as one of:
   - **INACCURATE**: Contradicts the source directly
   - **UNSUPPORTED**: No source provided to confirm the claim
   - **IMPRECISE**: Technically defensible but misleading (e.g., rounding distorts meaning)
   - **MISATTRIBUTED**: Correct information linked to wrong person or publication

5. **Flag unverifiable claims**: If a claim cannot be checked because no source was provided, note it explicitly rather than assuming it is correct.

## Output Format

Produce a structured verification report with the following sections:

**Summary**
- Total claims reviewed: N
- Confirmed accurate: N
- Issues found: N (broken down by category)

**Issue Log**
For each problem found, include:
- Claim # and the exact text from the draft
- Issue type (INACCURATE / UNSUPPORTED / IMPRECISE / MISATTRIBUTED)
- What the source actually states (quote the source directly)
- Suggested correction or action

**Unsourced Claims List**
Bullet list of claims that require a source citation before publication.

**Confirmed Claims**
Brief list of claim numbers verified as accurate — no detail needed unless a close call warrants a note.

Keep the report factual and direct. Do not editorialize about the quality of the draft. Each issue entry should be self-contained so an editor can act on it without re-reading the full report.
