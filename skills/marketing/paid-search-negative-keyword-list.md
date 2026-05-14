---
name: paid-search-negative-keyword-list
description: >
  Generates a structured negative keyword list for paid search campaigns by analyzing search term reports, irrelevant query patterns, and brand-safety exclusions to reduce wasted ad spend. Use when someone says "we're getting irrelevant clicks," asks about cleaning up their search terms report, wants to stop wasting budget on bad traffic, needs to build a negative keyword list, or is trying to improve paid search campaign efficiency.
category: marketing
tags: [paid-search, ppc, google-ads, negative-keywords, sem]
author: community
---

# Paid Search Negative Keyword List Generator

This skill analyzes search term data, campaign context, and industry patterns to produce a prioritized, match-type-annotated negative keyword list that reduces wasted ad spend and improves campaign relevance.

## Workflow

1. **Gather inputs** — Ask for: (a) raw search term report or list of irrelevant queries, (b) campaign type (branded, non-branded, competitor, RLSA), (c) industry/product category, (d) any known brand-safety concerns, and (e) existing negative lists if available.

2. **Categorize irrelevant query patterns** — Scan inputs and classify negatives into these buckets:
   - **Intent mismatch** — informational, research, or DIY queries that won't convert (e.g., "how to," "free," "tutorial," "what is")
   - **Audience mismatch** — wrong demographic signals (e.g., "kids," "student," "senior discount") unless target
   - **Product mismatch** — adjacent but unrelated products or features not offered
   - **Competitor names** — if not running competitor campaigns, exclude competitor brand terms
   - **Brand safety** — adult, political, controversial, or low-quality content signals
   - **Job/career queries** — "jobs," "careers," "salary," "internship" variants
   - **Navigational/existing customer** — "login," "account," "support," "cancel" if not retargeting

3. **Assign match types** — For each negative keyword, assign the correct match type:
   - **Exact** `[keyword]` — for precise irrelevant terms where partial overlap is acceptable
   - **Phrase** `"keyword"` — for queries containing a specific sequence that is always irrelevant
   - **Broad** `keyword` — only when the entire concept is irrelevant regardless of modifier

4. **Scope the negatives** — Tag each keyword with the recommended application level:
   - **Account-level** — universally irrelevant across all campaigns
   - **Campaign-level** — irrelevant only within a specific campaign type
   - **Ad group-level** — too granular or risky to apply broadly

5. **Check for conflicts** — Flag any negatives that could accidentally block converting queries or create keyword conflicts with active ad groups.

6. **Prioritize by estimated waste** — Sort the final list by likely budget impact: high-volume irrelevant terms first, niche edge cases last.

## Output Format

Produce the following sections in order:

---

### Summary
- Total negatives identified: [N]
- Estimated query categories addressed: [list buckets used]
- Conflicts flagged: [Y/N with brief note]

---

### Negative Keyword List

| Keyword | Match Type | Scope | Category | Notes |
|---|---|---|---|---|
| free [product] | Phrase | Account | Intent mismatch | High-volume freebie seekers |
| how to [product] | Broad | Account | Intent mismatch | Informational, no purchase intent |
| [competitor name] | Exact | Campaign | Competitor | Exclude from non-competitor campaigns |
| jobs | Broad | Account | Job/career | Career seekers, not buyers |

*(Continue for all identified negatives)*

---

### Recommended Negative Keyword Lists (Grouped)
Group negatives into reusable shared lists with suggested names:
- **Universal Exclusions** — account-level, always-on negatives
- **Job & Career Queries** — standard employment-intent terms
- **Informational Intent** — research and how-to queries
- **[Industry-Specific]** — custom group based on provided context

---

### Conflict Warnings
List any negatives that may inadvertently suppress valid traffic, with recommended resolution (e.g
