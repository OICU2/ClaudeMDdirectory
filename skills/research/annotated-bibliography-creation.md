---
name: annotated-bibliography-creation
category: research
description: >
  Builds structured annotated bibliographies from a list of sources by summarizing each source's key arguments, methodology, and relevance to a research question. Use when someone says "create an annotated bibliography," asks to "summarize my sources," wants to "analyze references for my paper," needs to "evaluate sources for relevance," or wants to "organize my research with annotations."
tags: [bibliography, research, citations, literature-review, academic]
author: community
---

# Annotated Bibliography Creation

This skill generates fully structured annotated bibliographies from a provided list of sources, evaluating each for key arguments, methodology, and relevance to a specified research question or topic.

## Workflow

1. **Identify the research question or topic** — If not explicitly stated, ask the user to clarify the central thesis or inquiry the bibliography should serve before proceeding.
2. **Collect sources** — Accept sources in any format: URLs, DOIs, pasted abstracts, titles with authors, or free-form citations. If a source is ambiguous, note it and proceed with available information.
3. **For each source, extract and assess:**
   - **Full citation** — Format in the style the user specifies (APA, MLA, Chicago, etc.); default to APA if unspecified.
   - **Summary** — 2–4 sentences capturing the source's central argument or findings.
   - **Methodology** — 1–2 sentences describing how the research was conducted or how the argument is constructed (empirical study, literature review, theoretical framework, case study, etc.). Skip if not applicable (e.g., primary sources).
   - **Relevance** — 2–3 sentences explaining how this source connects to the user's specific research question, what it contributes, and any notable limitations or biases.
4. **Order entries** alphabetically by author's last name** unless the user requests a different order (chronological, thematic, by relevance score).
5. **Flag gaps or concerns** — After the bibliography, note any sources that could not be fully evaluated, apparent redundancies, or significant gaps in coverage (e.g., missing counterarguments, no primary sources).

## Output Format

Produce a document with the following structure for each source:

---

**[Full Citation in requested style]**

*Summary:* [2–4 sentences on central argument or findings.]

*Methodology:* [1–2 sentences on research approach or argumentative structure. Omit if not applicable.]

*Relevance:* [2–3 sentences on connection to the research question, contribution, and any limitations.]

---

Repeat for every source. After all entries, include a **Notes** section listing any flagged gaps, unresolvable citations, or recommendations for additional source types. Total annotation length per source should be 100–200 words. Keep language precise and academic in register.
