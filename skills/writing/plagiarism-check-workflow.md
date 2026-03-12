---
name: plagiarism-check-workflow
description: >
  Runs systematic originality checks on drafted content, flags duplicated passages, and suggests
  rewritten alternatives to ensure unique, publication-ready copy. Use when someone says "check
  this for plagiarism," asks to verify their content is original, wants to make sure their article
  won't get flagged, needs to audit a draft before publishing, or is worried their writing is too
  similar to a source.
category: writing
tags: [plagiarism, originality, content-audit, rewriting, publishing]
author: community
---

# Plagiarism Check Workflow

This skill audits submitted text for unoriginal passages, scores originality risk, and delivers rewritten alternatives so content is publication-ready.

## Originality Audit Process

1. **Segment the content** — Break submitted text into logical chunks: intro, body paragraphs, conclusion, and any quoted or cited sections.

2. **Identify high-risk passages** — Scan each segment for:
   - Phrases that read as verbatim or near-verbatim from common sources (textbooks, Wikipedia, news articles, well-known blogs)
   - Generic boilerplate language that appears across many published works
   - Patchwork writing: synonyms substituted into an otherwise copied sentence structure
   - Unattributed quotes or statistics that appear to originate from a specific source

3. **Flag and classify each issue** — Label every flagged passage with one of three risk levels:
   - 🔴 **HIGH** — Likely verbatim or structurally identical to a known source; must be rewritten or properly cited
   - 🟡 **MEDIUM** — Close paraphrase or heavy reliance on a single phrasing pattern; consider rewriting
   - 🟢 **LOW** — Mildly generic phrasing; optional revision

4. **Generate rewritten alternatives** — For every HIGH and MEDIUM flagged passage, produce one rewritten version that:
   - Preserves the original meaning and factual content
   - Uses a distinct sentence structure
   - Matches the tone and reading level of the surrounding text
   - Does not introduce new claims or alter data

5. **Score overall originality** — Estimate an originality percentage based on the ratio of flagged content to total word count. Provide a brief rationale for the score.

6. **Summarize action items** — List all required changes (HIGH flags) and recommended changes (MEDIUM flags) in priority order.

## Output Format

Produce a structured report with the following sections:

**Originality Score:** `[0–100]%` — [1-sentence rationale]

**Flagged Passages:**

| # | Original Passage | Risk Level | Reason |
|---|-----------------|------------|--------|
| 1 | "…exact or near-exact text…" | 🔴 HIGH | Matches common phrasing in [domain] sources |
| 2 | "…passage…" | 🟡 MEDIUM | Patchwork paraphrase of standard explanation |

**Rewritten Alternatives:**

> **Flag #1 — Original:**
> "…original flagged text…"
>
> **Suggested Rewrite:**
> "…rewritten version…"

*(Repeat for each HIGH and MEDIUM flag)*

**Action Summary:**
- Required changes: [count] (HIGH flags)
- Recommended changes: [count] (MEDIUM flags)
- Passages cleared: [count]

Keep the report concise. Do not rewrite LOW-risk passages unless explicitly asked. If no high-risk passages are found, state that clearly and confirm the content appears original.
