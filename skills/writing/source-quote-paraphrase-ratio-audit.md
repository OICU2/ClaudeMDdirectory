---
name: source-quote-paraphrase-ratio-audit
description: >
  Analyzes a document to measure the balance between direct quotations and original paraphrasing, identifying sections that lean too heavily on lifted language. Use when someone says "check how much I'm quoting vs. paraphrasing," asks whether their writing relies too heavily on sources, or wants to audit their paper for over-quotation. Also triggers when someone mentions their essay feels like a patchwork of quotes or wants to improve the originality of their writing.
category: writing
tags: [writing, research, academic, citations, originality]
author: community
---

# Source Quote-Paraphrase Ratio Audit

This skill scans a submitted document to calculate the proportion of directly quoted text versus original paraphrasing, then flags over-reliant sections with specific improvement guidance.

## Audit Workflow

1. **Identify quoted passages**: Locate all text within quotation marks or block-quote formatting. Note the character/word count of each quoted segment and its location (paragraph number or section heading).

2. **Identify paraphrased source references**: Locate sentences that reference an external source via citation (e.g., parenthetical, footnote, or inline attribution) but do not use quotation marks. Count these as paraphrased.

3. **Identify original analysis**: Locate sentences that make claims, draw conclusions, or synthesize ideas without direct citation. Count these as original voice.

4. **Calculate ratios**: Produce three percentages:
   - % of total word count that is direct quotation
   - % of total word count that is cited paraphrase
   - % of total word count that is original voice/analysis

5. **Apply thresholds**: Flag any paragraph where direct quotation exceeds 30% of that paragraph's word count. Flag any section (500+ words) where original voice falls below 40%.

6. **Generate per-flag recommendations**: For each flagged passage, identify the exact quote(s) responsible, explain why the over-reliance is problematic in context, and suggest a concrete paraphrase or synthesis approach.

## Output Format

Produce the following structured report:

**Document-Level Summary**
- Total word count
- Direct quotation: X words (X%)
- Cited paraphrase: X words (X%)
- Original voice: X words (X%)
- Overall verdict: Balanced / Lightly over-quoted / Heavily over-quoted

**Flagged Sections**
For each flagged paragraph or section:
- Location: [Paragraph # or section title]
- Issue: [e.g., "62% of this paragraph is direct quotation"]
- Offending text: [excerpt, max 30 words]
- Recommendation: [1–3 specific sentences explaining how to convert, compress, or synthesize the quoted material]

**Top 3 Actionable Fixes**
A prioritized list of the highest-impact changes the writer can make to improve balance across the whole document.

Keep the report under 600 words unless the document has more than 10 flagged sections.
