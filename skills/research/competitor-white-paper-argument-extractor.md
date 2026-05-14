---
name: competitor-white-paper-argument-extractor
description: >
  Extracts and structures the core claims, evidence, and reasoning from competitor or industry white papers to support rapid competitive intelligence gathering. Use when someone says "analyze this white paper," asks to "break down a competitor's argument," wants to "summarize the key claims in this report," needs to "understand what evidence they're using," or requests "competitive intelligence from this document." Works with pasted text, URLs, or uploaded PDFs.
category: research
tags: [competitive-intelligence, white-papers, argument-analysis, research, summarization]
author: community
---

# Competitor White Paper Argument Extractor

This skill dissects competitor or industry white papers to surface core claims, supporting evidence, logical structure, and rhetorical weaknesses for fast competitive intelligence use.

## Extraction Workflow

1. **Identify the document's central thesis** — State the single overarching argument the paper is making in one sentence. If none is explicit, infer it from the conclusion or executive summary.

2. **Extract primary claims** — List the 3–7 major claims the paper makes to support its thesis. Each claim should be one sentence, pulled directly from the source or paraphrased with fidelity.

3. **Map supporting evidence per claim** — For each primary claim, identify what evidence is cited: data, studies, case studies, testimonials, analogies, or assertions without support. Note the source name and strength (peer-reviewed, proprietary, anecdotal, etc.).

4. **Trace the logical structure** — Identify how claims build on each other. Note if the paper uses deductive, inductive, or rhetorical reasoning. Flag any logical gaps, circular arguments, or unsupported leaps.

5. **Identify assumptions** — Surface unstated assumptions the argument relies on (market conditions, user behavior, technology trajectory, etc.).

6. **Flag competitive angles** — Highlight any implicit or explicit positioning against alternatives, competitors, or the status quo. Note what the paper is trying to persuade the reader to believe or do.

7. **Assess evidence quality** — Rate overall evidentiary strength: Strong (peer-reviewed or verifiable third-party data), Moderate (proprietary data or plausible anecdote), Weak (assertions, vague statistics, or cherry-picked examples).

## Output Format

Produce a structured report with the following sections:

---

**Document:** [Title, author/company, date if available]

**Central Thesis:**
[1 sentence]

**Primary Claims & Evidence:**
| # | Claim | Evidence Used | Source Type | Strength |
|---|-------|---------------|-------------|----------|
| 1 | ...   | ...           | ...         | Strong / Moderate / Weak |

**Logical Structure:**
[2–4 sentences describing how the argument flows and where it holds or breaks down]

**Key Assumptions:**
- [Assumption 1]
- [Assumption 2]
- [Assumption 3]

**Competitive Positioning:**
[2–3 sentences on how the paper positions against alternatives or implicitly targets competitors]

**Evidence Quality Rating:** Strong / Moderate / Weak
[1–2 sentences justifying the rating]

**Competitive Intelligence Summary:**
[3–5 bullet points a strategist or product team could act on immediately]

---

Keep the full output to under 600 words unless the paper is exceptionally complex. Prioritize precision over completeness — surface what matters most for competitive decision-making.
