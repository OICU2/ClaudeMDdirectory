---
name: citation-and-reference-formatting
description: >
  Converts sources in any format into properly structured citations following a specified style guide.
  Use when someone says "format my references," asks to "fix my citations," wants to "convert sources to APA/MLA/Chicago/IEEE,"
  needs to "clean up a bibliography," or requests "consistent citation formatting" for a paper or document.
category: writing
tags: [citations, references, bibliography, APA, MLA, Chicago, IEEE, academic-writing]
author: community
---

# Citation and Reference Formatting

Transforms raw or inconsistently formatted source lists into clean, accurate citations following APA, MLA, Chicago, or IEEE style with correct punctuation, ordering, and field formatting.

## Citation Formatting Workflow

1. **Identify the target style**: If not specified, ask the user which style guide to use (APA 7th, MLA 9th, Chicago 17th Author-Date or Notes-Bibliography, or IEEE). Default to APA 7th if the user is unsure.

2. **Parse each source**: Extract all available metadata from each provided source — author names, publication year, title, journal/book name, volume, issue, pages, DOI, URL, publisher, and access date.

3. **Flag missing fields**: If a required field is absent for a given style (e.g., no publication year for APA), note it inline with `[MISSING: field name]` rather than silently omitting it.

4. **Apply style rules precisely**:
   - **APA 7th**: Last, F. M. (Year). *Title of work*. Publisher. https://doi.org/xxxxx
   - **MLA 9th**: Last, First. *Title of Work*. Publisher, Year, pp. xx–xx.
   - **Chicago Author-Date**: Last, First. Year. *Title of Work*. City: Publisher.
   - **Chicago Notes-Bibliography**: Footnote and bibliography forms both provided when applicable.
   - **IEEE**: [#] F. M. Last, *Title*, Publisher, Year, pp. xx–xx.

5. **Enforce ordering**:
   - APA, MLA, Chicago: Alphabetical by first author's last name.
   - IEEE: Numbered in order of appearance in text (if order is unknown, alphabetize and note the assumption).

6. **Standardize punctuation**: Apply italics to titles per style, use en-dashes for page ranges, capitalize correctly (sentence case vs. title case per style rules).

7. **Handle special source types**: Apply correct formatting for journal articles, books, book chapters, websites, conference papers, theses, and reports per the target style guide.

8. **Output the full formatted list**: Present all references in final form, ready to paste into a document.

## Output Format

- Present a numbered or bulleted reference list in the requested style, with each citation on its own line.
- If the original source list was large, group entries alphabetically with a letter heading (A, B, C…) for readability.
- Include a brief header line stating the style used, e.g., `**References — APA 7th Edition**`.
- Append a short **Notes** section below the list flagging any missing metadata or assumptions made (e.g., "No DOI found for source 3; URL used instead").
- Do not include explanatory prose between citations — the list should be clean and paste-ready.
