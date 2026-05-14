---
name: content-internal-link-opportunity-map
description: >
  Analyzes a body of existing content and identifies specific phrases, sentences, or sections
  that represent strong internal linking opportunities to other relevant pieces within the same
  publication. Use when someone says "find places to add internal links," asks to "improve content
  discoverability," wants to "map out linking opportunities across articles," needs to "strengthen
  content clusters," or is trying to "reduce orphaned pages."
category: writing
tags: [internal-linking, seo, content-strategy, content-audit, site-architecture]
author: community
---

# Internal Link Opportunity Mapper

Scans one or more pieces of existing content and produces a precise, actionable map of phrases and sections that should carry internal links to other relevant content in the same publication.

## Workflow

1. **Ingest source content**: Accept the primary article(s) to audit. If the user provides a list of other existing content (titles, URLs, or summaries), treat that as the target link inventory. If no inventory is provided, identify conceptual gaps and flag where links *should* exist even if targets are unknown.

2. **Extract linkable candidates**: Scan the source content for:
   - Named concepts, tools, frameworks, or methodologies mentioned but not explained
   - Proper nouns (people, products, companies, events) that likely have dedicated content
   - Phrases that introduce a topic the publication likely covers in depth elsewhere
   - Transition sentences that summarize or reference adjacent topics
   - Statistics or claims that imply a deeper-dive source exists

3. **Match candidates to targets**: For each candidate phrase or section, identify the most relevant target from the provided inventory. If no inventory exists, propose the ideal target content type (e.g., "a glossary entry," "a how-to guide on X").

4. **Score each opportunity**: Rate each opportunity as:
   - **High**: Exact concept match, phrase is a clear anchor text candidate
   - **Medium**: Topical overlap, may require slight rewording of anchor text
   - **Low**: Loose relevance, link would add context but is not essential

5. **Flag anchor text**: For each opportunity, extract the exact phrase from the source content that should become the hyperlink. If the current phrasing is weak anchor text, suggest an improved rewrite.

6. **Identify gaps**: Note any topics that are referenced repeatedly but have no linkable target in the inventory — these are content creation opportunities.

## Output Format

Produce a structured link opportunity map with the following sections:

**Summary**
- Total opportunities found: [N]
- High priority: [N] | Medium: [N] | Low: [N]
- Content gaps identified: [N]

**Link Opportunity Table**
For each opportunity, one row containing:
| Priority | Source Location (paragraph/heading) | Exact Anchor Text | Suggested Target | Notes |

**Anchor Text Rewrites** (if applicable)
List only entries where the current phrasing is weak, formatted as:
- Original: "[current text]" → Suggested: "[improved anchor text]"

**Content Gaps**
Bulleted list of topics repeatedly mentioned but unlinked, with a one-line description of the content piece that should be created.

Keep the table exhaustive but concise — one row per opportunity, no narrative padding.
