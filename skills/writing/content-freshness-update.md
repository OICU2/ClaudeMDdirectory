---
name: content-freshness-update
description: >
  Reviews existing published content to identify outdated statistics, stale references, and expired data, then drafts updated replacement passages with current information. Use when someone says "this article feels dated," asks to "refresh our blog post," wants to "update the stats in this piece," needs to "modernize old content," or says "these numbers are out of date." Produces targeted rewrites that preserve the original voice while replacing obsolete material.
category: writing
tags: [content-update, editing, research, seo, publishing]
author: community
---

# Content Freshness Update

This skill audits existing content for outdated information and produces ready-to-publish replacement passages that bring articles, blog posts, or reports up to date.

## Audit and Update Workflow

1. **Scan for staleness indicators** — Read through the provided content and flag every instance of:
   - Specific statistics or percentages with a cited or implied year older than 2 years
   - References to studies, reports, or surveys by name and date
   - Named products, tools, platforms, or companies that may have changed
   - Regulatory or legal references (laws, compliance standards, pricing)
   - Time-anchored language ("recently," "new," "emerging," "last year") that may no longer apply
   - Broken or likely-expired hyperlink anchors

2. **Categorize each flag by severity**:
   - **High**: Factually wrong or misleading if left as-is (wrong statistic, defunct product)
   - **Medium**: Likely outdated but not actively harmful (older study exists but newer exists)
   - **Low**: Tone/language feels dated but substance is still accurate

3. **Draft replacement passages** — For each High and Medium flag:
   - Write a drop-in replacement sentence or paragraph that matches the original tone and reading level
   - Use hedged sourcing language when exact current data is unavailable ("As of [year], approximately…" or "According to recent industry estimates…")
   - Preserve surrounding sentence flow — the replacement must connect cleanly to what comes before and after
   - If a statistic cannot be reliably updated, recommend deletion and provide a bridge sentence instead

4. **Preserve original voice** — Match the existing content's formality, sentence length, and terminology. Do not introduce new jargon, change the argument structure, or alter headings unless explicitly asked.

5. **Flag items requiring human verification** — If a replacement relies on an estimate or requires the author to confirm a current source, mark it clearly with `[VERIFY: reason]`.

## Output Format

Produce a structured audit report followed by the replacement copy:

**Section 1 — Freshness Audit Summary**
A bullet list of every flagged item, formatted as:
- `[HIGH/MEDIUM/LOW]` — Location (e.g., "Paragraph 3, sentence 2") — Issue description in one line

**Section 2 — Replacement Passages**
For each High and Medium item, a labeled block:

```
ORIGINAL:
[exact quoted text being replaced]

REPLACEMENT:
[drop-in updated passage]

NOTE: [optional — verification needed, source suggestion, or reasoning]
```

**Section 3 — Recommended Action List**
A numbered checklist of final steps the author should take before republishing (e.g., confirm specific statistics, update internal links, revise publish date metadata).

Total output length scales with content size: for a 1,000-word article expect 400–700 words of audit output; for longer pieces, proportionally more.
