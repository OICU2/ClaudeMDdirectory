---
name: subheading-keyword-density-audit
description: >
  Analyzes whether target keywords appear in subheadings at the right frequency relative to SEO goals without over-optimizing. Use when someone says "check my headings for keywords," asks whether their subheadings are optimized enough, wants to audit keyword placement in article structure, is worried about keyword stuffing in headers, or needs to know if their H2s and H3s support their SEO strategy.
category: writing
tags: [seo, keyword-density, subheadings, content-audit, on-page-optimization]
author: community
---

# Subheading Keyword Density Audit

This skill audits all H2, H3, and H4 headings in a piece of content to evaluate keyword presence, frequency, and distribution against SEO best practices — flagging both under-optimization and over-optimization.

## Audit Workflow

1. **Extract all subheadings** — Pull every H2, H3, and H4 from the provided content. List them in order with their heading level noted.

2. **Identify target keywords** — If the user provided target keywords, use those. If not, infer primary and secondary keywords from the page title, meta description, or dominant topic of the content.

3. **Count keyword appearances in headings** — For each target keyword (including close variants and synonyms), count how many subheadings contain it. Record exact matches and semantic variants separately.

4. **Calculate keyword-to-heading ratio** — Divide the number of keyword-containing headings by the total number of subheadings. Express as a percentage.

5. **Apply density benchmarks:**
   - **Under-optimized:** Primary keyword appears in fewer than 15% of subheadings, or not at all in H2s
   - **Healthy range:** Primary keyword or close variant appears in 20–40% of subheadings; secondary keywords appear in 10–25%
   - **Over-optimized (keyword stuffing):** Any single keyword appears in more than 50% of subheadings, or two or more consecutive headings contain the exact same keyword phrase

6. **Check distribution** — Verify keywords are spread across the content, not clustered in the first or last third only.

7. **Flag specific problem headings** — Identify each heading that is stuffed, missing an opportunity, or contains an awkward forced insertion.

8. **Generate revised heading suggestions** — For every flagged heading, provide a rewritten version that improves or corrects the keyword usage while preserving meaning and readability.

## Output Format

Produce a structured audit report with these sections:

**Summary Table**
| Heading | Level | Contains Primary KW | Contains Secondary KW | Issue |
List every subheading with yes/no columns and a brief issue flag (none / stuffed / missing / awkward phrasing).

**Density Score**
- Primary keyword density in headings: X% (status: under / healthy / over)
- Secondary keyword density in headings: X% (status: under / healthy / over)
- Distribution: even / front-loaded / back-loaded

**Problem Headings** (if any)
For each flagged heading:
- Original heading (with level)
- Issue: one sentence explaining the specific problem
- Suggested revision: rewritten heading

**Overall Verdict**
2–4 sentences summarizing the heading strategy's SEO health, the biggest risk (stuffing or under-optimization), and the single highest-priority fix.
