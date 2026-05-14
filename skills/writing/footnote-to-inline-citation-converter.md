---
name: footnote-to-inline-citation-converter
description: >
  Converts footnote-style citations throughout a document into inline parenthetical references formatted to a specified style guide. Use when someone says "convert my footnotes to inline citations," asks to "change footnotes to parenthetical references," wants to "reformat citations to APA/MLA/Chicago style," needs to "remove footnotes and embed sources inline," or says "turn my endnotes into in-text citations."
category: writing
tags: [citations, footnotes, academic-writing, formatting, style-guides]
author: community
---

# Footnote to Inline Citation Converter

This skill transforms footnote or endnote citations in a document into inline parenthetical references matching a specified style guide (APA, MLA, Chicago author-date, or a custom format).

## Conversion Workflow

1. **Identify the target style** — Ask the user which citation style to use (APA, MLA, Chicago author-date, or custom) if not already specified. Do not proceed without this.

2. **Catalog all footnotes/endnotes** — Extract every numbered footnote or endnote from the document, mapping each number to its full citation content.

3. **Parse citation components** — For each footnote, identify: author(s), publication year, title, publisher/journal, volume/issue/page numbers, and URL/DOI if present.

4. **Build the inline reference** — Format each citation per the target style:
   - **APA**: (Author, Year, p. X) → e.g., (Smith, 2019, p. 42)
   - **MLA**: (Author Page) → e.g., (Smith 42)
   - **Chicago author-date**: (Author Year, Page) → e.g., (Smith 2019, 42)
   - **Custom**: Follow the pattern the user provides explicitly

5. **Replace in-text markers** — Substitute each superscript number or footnote marker in the body text with the corresponding inline citation. Preserve surrounding punctuation (inline citation goes before the period, outside quotation marks in MLA; after the period in some Chicago styles — follow style rules exactly).

6. **Handle ambiguous or incomplete footnotes** — If a footnote lacks enough data to format correctly, flag it with `[INCOMPLETE CITATION #N: missing X]` in the output rather than guessing.

7. **Compile a reference list** — Append a fully formatted bibliography or Works Cited / References list at the end of the document using the same style guide.

8. **Remove original footnote block** — Strip the original footnote/endnote section from the document since citations are now inline.

## Output Format

Return the complete revised document in this structure:

- **Full body text** with all footnote markers replaced by inline parenthetical citations, preserving all original headings, paragraphs, and formatting.
- Any flagged incomplete citations marked inline as `[INCOMPLETE CITATION #N: missing field]`.
- A clearly labeled section at the end:

```
---
## References  [or Works Cited / Bibliography per style]

[Fully formatted entries, alphabetized by author last name]
```

If the document is long, process it in full — do not truncate or summarize. If the user pastes only a snippet, convert that snippet and note that the same rules apply to the rest of the document.
