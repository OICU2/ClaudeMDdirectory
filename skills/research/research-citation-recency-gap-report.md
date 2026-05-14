---
name: research-citation-recency-gap-report
description: >
  Audits a research document's reference list to identify outdated citations and surface newer literature that should replace them. Use when someone says "my citations are too old," asks about "updating references in my paper," wants to "find gaps in my literature review," needs to "check if my bibliography is current," or says "flag outdated sources in my research."
category: research
tags: [citations, literature-review, bibliography, research-audit, academic-writing]
author: community
---

# Citation Recency Gap Report

Analyzes a document's reference list against a user-defined age threshold, flags citations that fall outside acceptable recency bounds, and identifies replacement literature from recent publications.

## Workflow

1. **Establish the threshold**: Ask the user for a recency cutoff year (default: 5 years from current year). Confirm the research domain, as thresholds vary — foundational STEM fields may require 3 years; humanities may accept 10+.

2. **Parse the reference list**: Extract all citations from the provided document or reference list. Identify: author(s), publication year, title, and venue/journal. If the document is pasted inline, locate the bibliography or in-text citations systematically.

3. **Flag outdated citations**: Compare each citation's year against the threshold. Mark every citation older than the threshold as a **recency gap**. Note exceptions: seminal/foundational works that are expected to be old (e.g., a paper citing Shannon 1948 in an information theory context) should be flagged but labeled `[Foundational — likely intentional]`.

4. **Categorize by severity**:
   - 🔴 **Critical gap**: More than 10 years old and not foundational
   - 🟡 **Moderate gap**: 5–10 years old in a fast-moving field
   - 🟢 **Acceptable**: Within threshold or flagged as foundational

5. **Suggest replacement search strategies**: For each critical or moderate gap, provide:
   - A specific search query the user can run (Google Scholar, Semantic Scholar, PubMed)
   - 2–3 keyword combinations derived from the outdated citation's topic
   - Recommended databases for that subfield

6. **Identify literature voids**: Note any topic areas in the document that appear underrepresented in recent citations (e.g., a section on machine learning that only cites 2019 sources when the field has evolved rapidly).

## Output Format

Produce a structured report with the following sections:

---

**Citation Recency Audit Report**
- Document/section analyzed: [name or description]
- Recency threshold applied: [year]
- Total citations reviewed: [N]
- Citations flagged: [N] ([%])

---

**Flagged Citations**

| # | Citation | Year | Age | Severity | Category |
|---|----------|------|-----|----------|----------|
| 1 | Author et al. (YYYY), *Title* | YYYY | X yrs | 🔴/🟡/🟢 | Gap / Foundational |

---

**Replacement Search Strategies**

For each 🔴 or 🟡 citation:
> **[Author et al., YYYY]** — Topic: [brief topic]
> - Search query: `"[keyword 1]" AND "[keyword 2]" since:[threshold year]`
> - Recommended database: [Scholar / PubMed / ArXiv / etc.]
> - Related terms to try: [term1], [term2], [term3]

---

**Literature Void Summary**

List any thematic gaps where recent literature is broadly missing, with 1–2 sentences explaining why recency matters for that topic.

---

**Quick Stats**
- Median citation age: [X years]
- Most outdated citation: [reference]
- % of citations within threshold: [X%]
