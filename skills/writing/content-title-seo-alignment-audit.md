---
name: content-title-seo-alignment-audit
description: >
  Analyzes a draft's headline and subheadings against its target keyword strategy to surface misalignments that weaken organic search visibility. Use when someone says "check if my headings match my SEO goals," asks about whether their title targets the right keywords, or wants to audit their content structure for search performance. Also triggers when someone shares a draft and asks if the headings support their ranking strategy, or wants to know why their content isn't ranking despite covering the topic.
category: writing
tags: [seo, content-strategy, keyword-optimization, headings, on-page-seo]
author: community
---

# Content Title & SEO Alignment Audit

This skill audits a draft's H1, H2s, and H3s against a provided keyword strategy to identify structural misalignments that reduce search visibility, then delivers a prioritized fix list.

## Audit Workflow

1. **Extract inputs**: Identify the primary keyword, secondary keywords, and any LSI or supporting terms from what the user provides. If no keyword list is given, ask for it before proceeding.

2. **Inventory headings**: Pull every H1, H2, and H3 from the draft verbatim. If the user hasn't shared a draft, request it.

3. **Check H1 alignment**:
   - Does the H1 contain the exact or close-variant primary keyword?
   - Is the primary keyword placed within the first 60 characters of the H1?
   - Flag if the H1 is missing the keyword entirely, buries it past word 8, or uses a synonym that search engines may not associate with the target term.

4. **Check H2/H3 alignment**:
   - Map each secondary keyword to the heading where it appears (or should appear).
   - Flag headings that use vague, brand-voice language with no keyword signal (e.g., "Let's Dive In," "The Bottom Line").
   - Flag keyword cannibalization: two or more headings competing for the same term.
   - Flag keyword orphans: secondary keywords in the strategy that appear in no heading.

5. **Assess search intent fit**:
   - Determine the dominant search intent of the primary keyword (informational, navigational, commercial, transactional).
   - Check whether the H1 framing matches that intent (e.g., a transactional keyword should not have an informational "What is…" H1 unless intent data supports it).

6. **Prioritize issues**: Rank every finding as **Critical** (directly prevents ranking), **Major** (reduces relevance signals), or **Minor** (optimization opportunity).

## Output Format

Produce a structured audit report with the following sections:

---

**SEO Alignment Audit Report**

**Target Keywords Identified**
- Primary: [keyword]
- Secondary: [list]
- Missing from input (if any): [note or "None"]

**Heading Inventory**
| Level | Heading Text | Contains Target Keyword? | Issue |
|-------|-------------|--------------------------|-------|
| H1    | ...         | Yes / No / Partial       | ...   |
| H2    | ...         | ...                      | ...   |

**Findings by Priority**

🔴 Critical
- [Finding + specific heading + why it matters]

🟠 Major
- [Finding + specific heading + why it matters]

🟡 Minor
- [Finding + specific heading + why it matters]

**Recommended Rewrites**
For each Critical or Major finding, provide:
- Original heading
- Suggested replacement (preserving brand voice where possible)
- Reason for change (one line)

**Quick Wins Summary**
3–5 bullet points the writer can action immediately, ordered by impact.

---

Report length scales with draft size. For drafts under 1,000 words, expect 200–350 words of audit output. For longer drafts, full table plus findings without artificial compression.
