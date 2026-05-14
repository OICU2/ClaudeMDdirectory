---
name: manuscript-chapter-summary-builder
description: >
  Generates concise, structured chapter-by-chapter summaries from long-form manuscript drafts to support editing, agent querying, or book proposal creation. Use when someone says "summarize my manuscript chapters," asks for help building a book proposal synopsis, wants to create chapter breakdowns for a query letter, needs to condense their draft for an editor, or wants a chapter outline from existing writing.
category: writing
tags: [manuscript, summarization, book-proposal, editing, synopsis]
author: community
---

# Manuscript Chapter Summary Builder

This skill extracts and formats concise chapter summaries from long-form manuscript drafts, producing ready-to-use content for book proposals, query letters, or editorial review.

## Workflow

1. **Collect the manuscript input.** Ask the user to paste chapter text directly, upload a file, or provide chapters one at a time. If the full manuscript is unavailable, request a minimum of the chapter text or detailed notes per chapter.

2. **Identify chapter boundaries.** Detect chapter numbers, titles, or clear scene breaks. If boundaries are ambiguous, ask the user to confirm how many chapters exist and where they begin and end.

3. **Extract core elements per chapter.** For each chapter, identify:
   - **Primary plot or argument movement** — what changes, advances, or is revealed
   - **Key characters or subjects involved** — only those central to this chapter
   - **Central conflict or tension** — what problem, question, or obstacle drives the chapter
   - **Outcome or turning point** — how the chapter ends and what it sets up next

4. **Draft each chapter summary.** Write each summary in 3–5 sentences. Use active voice, present tense, and the same tone as the manuscript (literary, commercial, narrative nonfiction, etc.). Avoid spoiler-heavy reveals unless the user specifies this is for editorial use, not public-facing materials.

5. **Calibrate length to purpose.** Ask the user upfront which use case applies:
   - **Query letter / agent pitch** — ultra-tight, 2–3 sentences max per chapter
   - **Book proposal** — 4–6 sentences with thematic connective tissue between chapters
   - **Editorial / developmental notes** — full paragraph with structural observations

6. **Flag gaps or weaknesses.** If a chapter lacks a clear turning point, introduces unresolved threads, or repeats content from a prior chapter without escalation, note this briefly after the summary in italics as an editorial observation.

7. **Compile the full summary document.** Assemble all chapter summaries in order, preceded by a one-paragraph overall synopsis (2–4 sentences covering premise, protagonist or central subject, central conflict, and stakes).

## Output Format

Produce a structured document with the following layout:

---

**Overall Synopsis**
[2–4 sentence overview: premise, protagonist/subject, central conflict, stakes]

---

**Chapter Summaries**

**Chapter 1: [Title or "Chapter 1"]**
[3–5 sentences covering what happens, who drives it, what changes]
*Editorial note: [only if a structural issue is detected — otherwise omit]*

**Chapter 2: [Title or "Chapter 2"]**
[3–5 sentences]
*Editorial note: [if applicable]*

[Continue for all chapters]

---

- Summaries must be self-contained — readable without knowing other chapters
- Do not pad summaries with adjectives or vague praise ("beautifully written")
- Keep character names consistent with the manuscript's spelling
- If the manuscript is nonfiction, replace "plot movement" with "argument or evidence progression"
- Deliver the full compiled document in one response unless chapter count exceeds 30, in which case process in batches and confirm with the user
