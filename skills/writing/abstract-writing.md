---
name: abstract-writing
description: >
  Distills a long-form research paper, report, or article into a concise structured abstract covering purpose, methodology, findings, and conclusions within a specified word limit. Use when someone says "write an abstract for this," asks to "summarize my paper into an abstract," or wants to "condense this research into a short summary." Also activates when someone shares a document and requests a "journal-style abstract" or asks to "create an executive abstract."
category: writing
tags: [abstract, research, summarization, academic, writing]
author: community
---

# Abstract Writing

Generates a structured, publication-ready abstract from a long-form document by extracting and distilling its core purpose, methodology, findings, and conclusions into a tight, specified word limit.

## Abstract Writing Workflow

1. **Identify the document type** — determine whether the source is a research paper, technical report, business report, literature review, or article, as this shapes tone and structure.
2. **Confirm the word limit** — default to 250 words if unspecified; ask the user if a specific journal or style guide (APA, AMA, IEEE) applies.
3. **Extract the four core components** from the source material:
   - **Purpose/Objective** — Why was this study or report conducted? What problem does it address?
   - **Methodology** — How was the work carried out? What data, tools, or approaches were used?
   - **Findings/Results** — What were the key results or discoveries? Use specific data points where available.
   - **Conclusions/Implications** — What do the findings mean? What are the recommendations or next steps?
4. **Write in third-person, past tense** for research abstracts unless the target style guide specifies otherwise.
5. **Eliminate all citations, figures, and jargon** that requires external context to understand.
6. **Verify word count** and trim or expand to meet the specified limit without sacrificing any of the four components.
7. **Flag missing information** — if the source material lacks clear methodology or conclusions, note what is absent and offer a best-effort draft with placeholders.

## Output Format

Produce a single, unbroken paragraph (or structured labeled sections if the user specifies a structured abstract format) with the following:

- **Length**: Within the specified word limit (default 250 words)
- **Structure** (standard): One flowing paragraph covering all four components in order — objective → methods → results → conclusions
- **Structure** (structured abstract): Four labeled sections: `Objective:`, `Methods:`, `Results:`, `Conclusions:` — each 1–3 sentences
- **Tone**: Formal, precise, and jargon-minimized
- **Header**: Title the output with the document's title (if provided) followed by "Abstract"
- **Word count**: State the final word count in brackets at the end, e.g., `[Word count: 247]`
