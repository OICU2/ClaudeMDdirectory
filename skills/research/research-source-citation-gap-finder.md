---
name: research-source-citation-gap-finder
category: research
description: >
  Scans a research document or written content to identify unsupported claims, assertions, and statements that lack citations or sourcing. Use when someone says "check my citations," asks "what needs a source in this document," or wants to find unsupported claims, flag citation gaps, or audit a paper for missing references.
tags: [research, citations, fact-checking, academic-writing, sourcing]
author: community
---

# Research Source & Citation Gap Finder

This skill analyzes a research document to detect claims, statistics, and assertions that lack supporting citations and returns a structured list of flagged items requiring sourcing.

## Citation Gap Detection Workflow

1. **Parse the document in full** before flagging anything — read all sections including abstract, body, and conclusion to understand scope and context.

2. **Identify citation-required content** by scanning for:
   - Specific statistics, percentages, or numerical claims (e.g., "70% of users...")
   - Causal or correlational assertions (e.g., "X leads to Y," "studies show...")
   - Historical facts or dates not considered common knowledge
   - Expert opinions or attributed positions without a named source
   - Comparative or superlative claims (e.g., "the most effective method," "better than traditional approaches")
   - Definitions of contested or technical terms presented as fact

3. **Exclude from flagging:**
   - Claims immediately followed by an inline citation (parenthetical, footnote, or hyperlink)
   - Statements clearly framed as the author's own original argument or opinion
   - Universally accepted common knowledge (e.g., "the Earth orbits the Sun")

4. **For each flagged claim:**
   - Copy the exact sentence or phrase verbatim
   - Note its location (paragraph number, section heading, or line number if available)
   - Classify the claim type (statistic, causal claim, expert assertion, comparative claim, definition, historical fact)
   - Assign a priority level: **High** (factual/numerical), **Medium** (interpretive/causal), **Low** (general background)

5. **Suggest sourcing strategies** for High-priority gaps, such as recommended databases (PubMed, Google Scholar, JSTOR), search terms, or source types (peer-reviewed study, government report, meta-analysis).

## Output Format

Produce a structured report with the following sections:

---

**Citation Gap Report**

**Summary:** X unsupported claims found across Y sections. [1–2 sentence overall assessment of citation coverage.]

**Flagged Claims:**

| # | Location | Verbatim Claim | Claim Type | Priority | Suggested Source Approach |
|---|----------|---------------|------------|----------|--------------------------|
| 1 | Intro, Para 2 | "Social media use has tripled in the last decade." | Statistic | High | Search Pew Research, Statista, or peer-reviewed media studies |
| 2 | Methods, Para 1 | "This approach is widely considered best practice." | Comparative | Medium | Cite a field-specific guideline, review paper, or standards body |

**Recommendations:**
- List 2–4 actionable next steps (e.g., "Prioritize sourcing the 3 High-priority statistics before submission," "Consider adding a limitations section if key claims cannot be verified.")

---

Keep the table concise — one row per flagged claim. If the document has no citation gaps, state that explicitly with a brief explanation of what was checked.
