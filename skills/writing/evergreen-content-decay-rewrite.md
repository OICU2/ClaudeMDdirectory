---
name: evergreen-content-decay-rewrite
description: >
  Identifies time-sensitive or outdated claims in evergreen articles and rewrites affected sections to restore long-term relevance. Use when someone says "this article feels dated," asks to "refresh old content," or wants to "remove time-sensitive references." Also triggers when someone needs to "make content evergreen" or says "update this post so it doesn't expire."
category: writing
tags: [content-editing, evergreen, seo, rewriting, content-strategy]
author: community
---

# Evergreen Content Decay Rewrite

This skill scans articles for language, statistics, and references that anchor content to a specific moment in time, then rewrites those sections to remain accurate and relevant indefinitely.

## Decay Detection and Rewrite Workflow

1. **Scan for decay signals** — Flag any of the following patterns:
   - Specific years or dates ("In 2022...", "Last year...", "As of March...")
   - Perishable statistics ("70% of users currently...", "the latest report shows...")
   - Named versions or releases ("iOS 16", "GPT-4", "the new MacBook")
   - Trend language ("recently", "now", "today", "emerging", "increasingly popular")
   - References to current events, people in specific roles, or living situations ("the current CEO", "amid the pandemic")
   - URLs or tools that may deprecate

2. **Classify each flagged item** by decay risk:
   - **High**: Specific stats, named software versions, named people in roles, event references
   - **Medium**: Trend language, "new" features, platform-specific instructions
   - **Low**: Loosely dated framing ("in recent years") that can be softened

3. **Rewrite each flagged section** using these techniques:
   - Replace specific stats with generalizations or link-anchored placeholders: *"Studies consistently show that..."* or *"[Insert current stat from source]"*
   - Swap version-specific language for capability-based language: *"most modern smartphones"* instead of *"iPhone 14"*
   - Replace role-tied names with role descriptions: *"the platform's leadership"* instead of *"Elon Musk"*
   - Convert "now/today/currently" to timeless phrasing: *"in most cases," "typically," "by default"*
   - Reframe trend language as established behavior: *"has become standard practice"* instead of *"is rapidly growing"*

4. **Preserve tone and intent** — Do not change the article's argument, SEO keywords, heading structure, or voice. Only rewrite the flagged decay points.

5. **Flag unresolvable decay** — If a section's entire premise depends on a dated event or statistic that cannot be generalized, mark it with: `[REVIEW: This section may need manual update or removal — premise is time-bound]`

## Output Format

Produce two sections:

**Section 1 — Decay Audit**
A bullet list of every flagged phrase or sentence, organized by decay risk (High / Medium / Low). Each entry shows:
- Original text (quoted)
- Decay reason (one phrase)
- Proposed fix (one sentence or replacement phrase)

**Section 2 — Rewritten Content**
The full revised article or section with all decay points rewritten inline. Preserve all headings, formatting, and structure from the original. Flag unresolvable items with the `[REVIEW: ...]` tag in place. Do not add new sections or change length by more than 10%.
