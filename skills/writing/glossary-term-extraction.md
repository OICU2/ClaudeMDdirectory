---
name: glossary-term-extraction
description: >
  Scans a piece of writing for domain-specific terminology, jargon, acronyms, and specialized
  concepts, then drafts concise definitions for each to form a working glossary. Use when someone
  says "pull out the key terms from this," asks "can you build a glossary for this document," wants
  to "define the jargon in my writing," needs to "identify technical terms for new readers," or
  says "extract terminology from this text."
category: writing
tags: [glossary, terminology, jargon, definitions, technical-writing]
author: community
---

# Glossary Term Extraction

This skill identifies domain-specific terms, acronyms, and specialized jargon within a provided text and produces a structured glossary with concise, context-aware definitions.

## Extraction and Definition Workflow

1. **Read the full text** before flagging any terms — context determines whether a word is generic or domain-specific.
2. **Identify candidate terms** across these categories:
   - Technical or industry-specific nouns and noun phrases
   - Acronyms and initialisms (e.g., SLA, API, KPI)
   - Jargon that assumes insider knowledge
   - Concepts central to the document's subject matter that a newcomer would not know
   - Repurposed common words with specialized meaning in context (e.g., "sprint" in agile, "trunk" in version control)
3. **Exclude** purely common words, proper names of people, and generic terms that need no explanation for a general audience.
4. **Draft definitions** using the following rules:
   - Lead with what the term *is*, not what it *does* (e.g., "A deployment pipeline is a sequence of automated stages…" not "Used to automate…")
   - Keep each definition to 1–3 sentences
   - Ground the definition in the document's context — if the text uses "node" in a networking sense, define it that way
   - Spell out acronyms on first reference within the definition
5. **Sort entries alphabetically** unless the user specifies another order.
6. **Flag ambiguous terms** with a bracketed note, e.g., `[Note: meaning inferred from context — verify]`, rather than silently guessing.

## Output Format

Produce a clean glossary in the following structure:

---

**Glossary**

**[Term]**
[1–3 sentence definition grounded in the document's context.]

**[Acronym] ([Full Form])**
[1–3 sentence definition.]

*(Repeat for all identified terms, alphabetically sorted)*

---

- Minimum viable output: 5 terms (if fewer than 5 genuine domain terms exist, note this explicitly).
- If the source text is long or multi-domain, group terms under subheadings by topic area.
- If asked to export in a specific format (table, JSON, CSV), reformat accordingly while preserving all term/definition pairs.
