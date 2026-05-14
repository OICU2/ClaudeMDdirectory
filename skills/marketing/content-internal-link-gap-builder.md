---
name: content-internal-link-gap-builder
description: >
  Audits existing blog posts and landing pages to surface missing internal linking opportunities that strengthen topical authority and improve crawlability. Use when someone says "our content isn't ranking well," asks about improving internal link structure, or wants to find linking gaps between related articles. Also activates when someone shares a list of URLs and asks which pages should link to each other, or mentions they need to build topical clusters.
category: marketing
tags: [internal-linking, seo, content-audit, topical-authority, content-strategy]
author: community
---

# Internal Link Gap Builder

Analyzes a set of content URLs or page titles to identify missing internal linking opportunities, then produces a prioritized action plan for connecting related content to strengthen topical authority.

## Audit Workflow

1. **Collect the content inventory**
   - Ask the user to provide a list of URLs, page titles, or a sitemap export
   - If unavailable, ask for the site's main topic clusters or pillar pages plus supporting blog posts
   - Request current internal link data if accessible (e.g., from Screaming Frog, Ahrefs, or Google Search Console)

2. **Map topical relationships**
   - Group pages by topic cluster (e.g., pillar page + supporting articles)
   - Identify the primary keyword or intent for each page
   - Flag pages that share overlapping subtopics, target similar queries, or sit in the same buyer journey stage

3. **Identify linking gaps**
   - For each page, determine which other pages it *should* link to but currently does not
   - Prioritize gaps where:
     - A supporting article never links back to its pillar page
     - Two articles cover adjacent subtopics but don't cross-reference
     - A high-traffic page has no outbound links to conversion-focused pages
     - A new page has zero inbound internal links (orphaned content)

4. **Score and rank opportunities**
   - Score each gap as High / Medium / Low based on:
     - Topical relevance (does the link make logical sense to a reader?)
     - Authority flow (does the linking page have strong backlinks or traffic?)
     - Conversion potential (does the linked page move a user toward a goal?)

5. **Suggest anchor text**
   - For each recommended link, propose 1–2 natural anchor text options
   - Avoid exact-match over-optimization; prefer descriptive, contextual phrasing

6. **Validate before finalizing**
   - Confirm no suggested links create circular loops without purpose
   - Check that pillar pages aren't over-linked from every post (dilutes signal)

## Output Format

Produce a structured audit report with the following sections:

---

### Internal Link Gap Report

**Summary**
- Total pages audited: [N]
- Orphaned pages found: [N]
- Total missing link opportunities: [N]
- Priority breakdown: [X High / Y Medium / Z Low]

**Orphaned Pages (Fix First)**
| Page Title | URL | Recommended Inbound Links From |
|---|---|---|
| [Title] | [URL] | [Page A, Page B] |

**High-Priority Link Gaps**
| Source Page | Target Page | Suggested Anchor Text | Reason |
|---|---|---|---|
| [Title/URL] | [Title/URL] | "[anchor text option]" | [1-line rationale] |

**Medium-Priority Link Gaps**
[Same table format]

**Low-Priority Link Gaps**
[Same table format]

**Pillar Page Coverage Check**
- List each pillar page and confirm which supporting articles link to it and which do not

**Quick Wins (Top 5 actions to implement today)**
Numbered list of the five highest-impact changes with exact source page, target page, and anchor text ready to copy.

---

Keep the report scannable. Use tables for all link recommendations. Limit rationale to one sentence per row. Flag if more content needs to be created to fill a topical gap rather than just linked.
