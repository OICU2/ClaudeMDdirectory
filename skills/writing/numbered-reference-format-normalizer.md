---
name: numbered-reference-format-normalizer
description: >
  Standardizes all in-text citations and reference list entries throughout a document to a single
  consistent citation style such as APA, MLA, or Chicago. Use when someone says their citations are
  inconsistent, asks to clean up their references, wants to convert all citations to APA format, needs
  their bibliography reformatted, or mentions their paper has mixed citation styles.
category: writing
tags: [citations, references, academic-writing, formatting, bibliography]
author: community
---

# Citation & Reference Format Normalizer

This skill converts all in-text citations and reference list entries in a document to a single specified style (APA, MLA, Chicago, Vancouver, or Harvard), ensuring consistency throughout.

## Normalization Workflow

1. **Identify the target style** — Confirm which citation style is required (APA 7th, MLA 9th, Chicago 17th author-date or notes, Vancouver, Harvard). If unspecified, ask before proceeding.

2. **Audit existing citations** — Scan the full document and catalog every in-text citation and every reference list entry. Note the current format of each (e.g., (Smith 2020), [1], footnote numbers, author-page).

3. **Map each citation to its reference entry** — Match every in-text citation to its corresponding reference list entry so both are transformed together.

4. **Reformat in-text citations** — Apply the exact punctuation, order, and placement rules of the target style:
   - APA: (Author, Year) or (Author, Year, p. X) for quotes
   - MLA: (Author Page) with no comma
   - Chicago author-date: (Author Year, Page) — notes style uses superscript footnotes
   - Vancouver: sequential numbers in brackets [1]

5. **Reformat reference list entries** — Apply the target style's rules for author order, date placement, title capitalization, italics, publisher format, DOI/URL formatting, and hanging indents. Handle all source types present: journal articles, books, chapters, websites, reports.

6. **Handle edge cases explicitly:**
   - Multiple authors: apply correct truncation rules (APA uses "et al." after 2+ authors in-text, lists up to 20 in references)
   - Same-author same-year: append a, b, c suffixes (APA/Chicago)
   - Missing information: flag with [missing: field] rather than guessing
   - Ibid. or op. cit.: expand to full or short-title form per style rules

7. **Return the normalized document** — Replace the original citations and reference list with the corrected versions. Do not alter any other content.

## Output Format

Produce two clearly labeled sections:

**Section 1 — Normalized Document**
Return the full document text with all in-text citations corrected in place and the reference list replaced with a fully reformatted bibliography/works-cited/reference list. Use the correct section heading for the target style (References, Works Cited, Bibliography).

**Section 2 — Change Log**
A compact table listing every change made:

| Original | Corrected | Location |
|----------|-----------|----------|
| (Smith 2020) | (Smith, 2020) | Paragraph 2 |
| Smith, J. 2020. *Title*... | Smith, J. (2020). *Title*... | Reference list |

Flag any entries where information was missing or ambiguous with a note beginning `⚠️`.
