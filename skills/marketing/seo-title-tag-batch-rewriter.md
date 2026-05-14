---
name: seo-title-tag-batch-rewriter
description: >
  Rewrites multiple existing page title tags to improve keyword targeting, search click-through rates, and character length compliance. Use when someone says "my title tags need work," asks about optimizing page titles for SEO, wants to improve organic click-through rates, needs to audit and fix title tags across multiple pages, or is preparing a site for an SEO overhaul.
category: marketing
tags: [seo, title-tags, on-page-seo, copywriting, search-optimization]
author: community
---

# SEO Title Tag Batch Rewriter

This skill audits and rewrites a batch of existing page title tags to maximize keyword alignment, search intent match, and click-through potential while enforcing character length best practices.

## Rewriting Workflow

1. **Collect inputs**: Ask the user to provide a list of existing title tags and, for each page, the target keyword(s), the page's primary purpose, and the domain/brand name if it should appear in titles.

2. **Audit each existing title against these criteria**:
   - Character length: flag anything under 30 or over 60 characters
   - Primary keyword: is it present, and does it appear in the first half of the title?
   - Search intent match: does the title match informational, navigational, commercial, or transactional intent?
   - Click appeal: does it use power words, numbers, or a value proposition?
   - Brand inclusion: is the brand name present when appropriate (typically homepage and key landing pages)?

3. **Rewrite each title following these rules**:
   - Keep length between 50–60 characters (desktop display sweet spot)
   - Place the primary keyword as close to the start as natural language allows
   - Match the intent of the target query (e.g., "Best X" for commercial, "How to X" for informational)
   - Include a secondary keyword or modifier when it fits without forcing
   - Add a differentiator: price signal ("Affordable"), audience ("For Small Teams"), or outcome ("In 10 Minutes") where relevant
   - Append brand name with a pipe separator only when instructed or when the page is brand-critical
   - Never keyword-stuff; titles must read naturally

4. **Flag titles that need additional information** (e.g., missing target keyword, unclear page purpose) rather than guessing.

5. **Provide a brief rationale** (one sentence) for each rewrite explaining the primary change made.

## Output Format

Produce a structured table followed by a summary, formatted as:

**Batch Rewrite Table**

| # | Page / URL | Original Title | Rewritten Title | Char Count | Key Change |
|---|-----------|----------------|-----------------|------------|------------|
| 1 | /example  | Original here  | Rewrite here    | 57         | Moved keyword to front, added outcome modifier |

**Summary**
- Total titles reviewed: X
- Titles within optimal length (50–60 chars): X
- Titles flagged for missing input: X (list them)
- Common patterns fixed: [bullet list of recurring issues found, e.g., "keyword buried at end," "titles too generic," "missing intent signal"]

If the user provides more than 20 titles, process them in batches of 20 and confirm before continuing.
