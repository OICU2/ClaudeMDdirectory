---
name: quote-context-verification
description: >
  Verifies that direct quotes in a draft accurately reflect their original sources, checking for misattribution, paraphrasing errors, and stripped context. Use when someone says "check my quotes," asks whether a citation is accurate, or wants to verify sourcing in their draft. Also activates when someone is worried their quotes might be out of context or needs to fact-check attributions before publishing.
category: writing
tags: [fact-checking, quotes, citations, accuracy, sourcing]
author: community
---

# Quote Context Verification

This skill audits every direct quote in a draft against its stated source to catch misattributions, altered wording, and context that changes meaning — used whenever accuracy of cited material is in question.

## Verification Workflow

1. **Extract all quotes**: Identify every instance of quoted text in the draft, including the attributed speaker/author and the claimed source document, article, or context.

2. **Compare wording exactly**: For each quote, check the verbatim text against the source. Flag any word substitutions, omissions, or additions — even minor ones that alter tone or precision.

3. **Verify attribution**: Confirm the quote is assigned to the correct person. Flag cases where a quote is real but assigned to the wrong speaker, or where the speaker's identity is unverifiable from the source.

4. **Check surrounding context**: Read the sentences before and after the quote in the original source. Flag quotes that are technically accurate but omit qualifications, contradictions, or conditional language that materially changes meaning.

5. **Identify paraphrasing disguised as quotes**: Flag any text in quotation marks that does not appear verbatim in the stated source — this is a paraphrase error, not a direct quote.

6. **Note missing sources**: Flag any quoted text that has no attributed source at all.

7. **Assess severity**: Classify each issue as Critical (changes meaning or is fabricated), Moderate (minor wording change, context gap), or Minor (formatting or stylistic inconsistency).

## Output Format

Produce a structured report with the following sections:

**Summary**: One or two sentences stating total quotes reviewed, number of issues found, and highest severity level present.

**Quote-by-Quote Findings**: For each quote, provide:
- `Quote`: The text as it appears in the draft (truncated to 20 words if long)
- `Attributed to`: Speaker/author and source as stated in the draft
- `Status`: Verified / Issue Found / Unverifiable
- `Issue Type` (if applicable): Misattribution / Wording Error / Missing Context / Paraphrase Error / No Source
- `Severity`: Critical / Moderate / Minor
- `Detail`: One to three sentences explaining the specific problem and what the original source actually says

**Recommended Actions**: A numbered list of concrete fixes for each flagged issue, ordered by severity.
