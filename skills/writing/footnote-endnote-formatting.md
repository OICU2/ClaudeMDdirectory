---
name: footnote-endnote-formatting
description: >
  Converts inline citations, parenthetical references, and in-text notes into properly
  formatted footnotes or endnotes following a specified style guide. Use when someone says
  "convert my citations to footnotes," asks to "reformat these references," wants to
  "clean up my in-text citations," needs to "switch from parenthetical to endnotes," or
  says "format my citations in Chicago/Turabian/APA style."
category: writing
tags: [citations, footnotes, endnotes, academic-writing, style-guides]
author: community
---

# Footnote and Endnote Formatting

This skill converts inline or parenthetical citations into properly formatted footnotes or endnotes, applying the correct style guide rules and numbering throughout the document.

## Formatting Workflow

1. **Identify the style guide** — Ask the user to confirm the target style (Chicago, Turabian, MLA, APA, Bluebook, etc.) if not stated. Default to Chicago Notes-Bibliography if unspecified.
2. **Identify the output type** — Confirm whether the user wants footnotes (page-level) or endnotes (document-level). Default to footnotes if unspecified.
3. **Scan for all citations** — Locate every inline citation, parenthetical reference, ibid., op. cit., and any bracketed or superscript marker in the provided text.
4. **Number sequentially** — Assign sequential superscript numbers starting at 1, placed after punctuation except before dashes, following the style guide's placement rules.
5. **Format each note** — Construct each footnote or endnote entry using the correct element order, punctuation, and italicization for the identified style:
   - **Chicago (Notes)**: Author First Last, *Title* (Place: Publisher, Year), page.
   - **MLA**: Author Last, First. *Title*. Publisher, Year, page.
   - **APA**: Author, A. A. (Year). *Title*. Publisher. https://doi.org/xxx
   - **Bluebook**: Author, *Title* page (Publisher Year).
6. **Handle repeated citations** — Apply ibid. (Chicago), shortened citations, or full repeats as required by the style guide.
7. **Return the revised document** — Reproduce the full text with superscript markers inserted, followed by the complete footnote or endnote list.

## Handling Incomplete Source Data

- If a citation is missing required fields (e.g., no publisher, no year), insert a placeholder: `[MISSING: publisher]` and flag it in a note at the end.
- Do not fabricate bibliographic data.
- If the source type is ambiguous (journal article vs. book chapter), ask before formatting.

## Output Format

Produce two clearly labeled sections:

**Section 1 — Revised Text**
The full input text with superscript footnote/endnote numbers inserted at correct positions. Mark superscripts with `^[n]` notation if plain text, or use `¹²³` Unicode superscripts if formatting is supported.

**Section 2 — Footnotes / Endnotes**
A numbered list of all formatted notes, each on its own line, indented first line per style guide convention. If endnotes, include the header "Endnotes" before the list. If footnotes, label each with its corresponding number.

**Section 3 — Flagged Issues** *(only if problems exist)*
A bulleted list of any citations with missing data, ambiguous source types, or formatting decisions that required an assumption.
