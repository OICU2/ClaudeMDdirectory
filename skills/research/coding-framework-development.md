---
name: coding-framework-development
description: >
  Creates a systematic qualitative coding framework with defined categories, rules, and examples to enable consistent analysis across transcripts or documents. Use when someone says "I need a coding scheme for my data," asks about "how to categorize themes in my interviews," or wants to "develop a codebook for qualitative analysis," needs to "create consistent codes across multiple transcripts," or is trying to "standardize how researchers label data."
category: research
tags: [qualitative-research, coding, thematic-analysis, codebook, data-analysis]
author: community
---

# Coding Framework Development

This skill builds a structured qualitative coding framework—complete with code definitions, inclusion/exclusion rules, and anchor examples—so multiple analysts can apply codes consistently across transcripts or documents.

## Framework Development Workflow

1. **Clarify the research context** — Identify the research question, data type (interviews, focus groups, documents), and analysis approach (deductive, inductive, or hybrid) before building codes.

2. **Establish top-level domains** — Group related phenomena into 3–8 broad thematic domains that reflect the scope of the research question without overlapping.

3. **Define individual codes within each domain** — For each code, specify:
   - **Code name**: Short, memorable label (2–4 words, use ALL_CAPS or snake_case convention)
   - **Definition**: 1–3 sentence conceptual definition of what the code captures
   - **When to apply**: Concrete conditions that must be met for the code to apply
   - **When NOT to apply**: Boundary conditions and common confusions to exclude
   - **Decision rule**: A single sentence that resolves ambiguous cases

4. **Write anchor examples** — Provide 2–3 verbatim or realistic example quotes that clearly belong to the code, and 1–2 "near-miss" examples that do not qualify with a brief explanation of why.

5. **Handle co-occurrence and hierarchy** — Specify which codes can co-occur on the same passage, which are mutually exclusive, and whether any codes are subcodes of a parent.

6. **Build an intercoder reliability check** — Identify the 3–5 codes most likely to be confused with each other and write explicit comparison notes distinguishing them.

7. **Version and document the framework** — Label the framework with a version number and date; note any codes marked "provisional" that require team discussion before finalizing.

## Output Format

Produce a complete codebook document with the following structure:

```
# Codebook: [Study Name or Topic]
Version: X.X | Date: YYYY-MM-DD | Analytic Approach: [Deductive/Inductive/Hybrid]

## Overview
[2–3 sentences on purpose and scope]

## Domain Structure
[Bulleted list of all domains and their child codes]

---

## Domain 1: [Domain Name]
[1-sentence domain definition]

### Code: CODE_NAME
- **Definition:** ...
- **Apply when:** ...
- **Do NOT apply when:** ...
- **Decision rule:** ...
- **Anchor examples:**
  - ✅ "[example quote]" — [brief rationale]
  - ✅ "[example quote]" — [brief rationale]
  - ❌ "[near-miss quote]" — [why it does not qualify]

[Repeat for each code in the domain]

---

## Intercoder Reliability Notes
[Table or list of easily confused code pairs with distinguishing rules]

## Provisional Codes
[List any codes pending team review]
```

Deliver the full codebook in markdown. Minimum of 2 domains with at least 2 codes each. All codes must include every field above—no placeholders or "TBD" entries unless explicitly marked provisional.
