---
name: headline-keyword-intent-alignment
description: >
  Analyzes whether article headlines and subheadings accurately reflect the search intent and topical promise of the content beneath them. Use when someone says "check if my headlines match the content," asks about whether their article structure misleads readers, or wants to audit heading-to-body alignment. Also triggers when someone mentions keyword stuffing in headings, wonders if their H2s are misleading, or needs to verify their content delivers on its headline's promise.
category: writing
tags: [seo, headlines, content-audit, search-intent, subheadings]
author: community
---

# Headline-Keyword-Intent Alignment Auditor

Audits each headline and subheading in an article to verify it accurately promises—and the body content beneath it delivers—the search intent and topical scope implied by the heading.

## Alignment Audit Workflow

1. **Extract all headings** — Pull H1, H2, H3s in order. Note the keyword or topic each heading implies it will cover.

2. **Identify the intent type for each heading** — Classify as informational, navigational, commercial, or transactional. Flag mismatches where the heading signals one intent but the body serves another (e.g., heading promises a how-to, body is a product pitch).

3. **Check topical delivery** — For each heading, read the content block beneath it and answer: Does this section actually address what the heading promises? Mark each as:
   - ✅ Delivers — content fully matches the heading's promise
   - ⚠️ Partial — content touches the topic but drifts, undershoots, or buries it
   - ❌ Mismatch — heading promises X, body delivers Y or nothing relevant

4. **Flag keyword stuffing vs. genuine topical signals** — Identify headings that contain keywords not reflected in the body content. Note whether the keyword appears in the section or was inserted only for SEO without supporting substance.

5. **Check H1-to-body coherence** — Confirm the article's overall body content matches the scope and promise of the H1. If the H1 targets a broad keyword but the article only covers a narrow subtopic, flag the gap.

6. **Identify missing coverage** — If a heading creates an expectation that is never met anywhere in the article, note the unmet promise explicitly.

7. **Score overall alignment** — Rate the article's heading-to-content alignment on a scale: Strong / Moderate / Weak, with one-line rationale.

## Output Format

Produce a structured audit report in this order:

**Alignment Audit: [Article Title or H1]**
Overall Score: [Strong / Moderate / Weak] — [one-line rationale]

| Heading | Level | Intent Type | Status | Issue |
|---------|-------|-------------|--------|-------|
| [Heading text] | H1/H2/H3 | [Informational etc.] | ✅/⚠️/❌ | [Specific issue or "None"] |

**Key Findings**
- [Bullet per major problem found — specific, not generic]

**Recommended Fixes**
- [Actionable rewrite or structural fix for each flagged heading, in plain language]

Keep findings specific to the actual content provided. Do not pad with generic SEO advice.
