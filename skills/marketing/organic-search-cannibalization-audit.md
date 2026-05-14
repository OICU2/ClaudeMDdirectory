---
name: organic-search-cannibalization-audit
description: >
  Analyzes a domain's URL structure and keyword targeting to identify pages competing against each other in search results, then prescribes consolidation or differentiation actions. Use when someone says their rankings are dropping despite having good content, asks why multiple pages rank poorly for the same topic, or wants to fix keyword cannibalization. Also triggers when someone shares a list of URLs and wants to know which pages are hurting each other, or asks how to improve organic search performance across a site.
category: marketing
tags: [seo, keyword-cannibalization, content-strategy, organic-search, site-audit]
author: community
---

# Organic Search Cannibalization Audit

This skill identifies URL pairs on the same domain that compete for identical or overlapping keywords, diagnoses the severity of cannibalization, and produces prioritized consolidation or differentiation recommendations to recover ranking potential.

## Audit Workflow

### 1. Collect Inputs
Request the following from the user if not provided:
- List of URLs (CSV, sitemap, or pasted list)
- Target keywords per URL (if available) or the site's primary topic areas
- Google Search Console data (queries, clicks, impressions, average position) — optional but preferred
- CMS or redirect capabilities (to gauge feasibility of fixes)

### 2. Identify Cannibalization Candidates
For each keyword or topic cluster:
- Group URLs that target the same primary keyword or keyword intent
- Flag pairs where two or more URLs rank on page 1–2 for the same query (if GSC data provided)
- Without GSC data, identify overlap by analyzing: page titles, H1s, meta descriptions, URL slugs, and on-page content themes
- Classify intent match: exact (same keyword, same intent), partial (same keyword, different intent), or topical (same cluster, different angle)

### 3. Score Severity
Rate each cannibalization pair on a 3-tier scale:
- **Critical**: Two URLs ranking in positions 1–20 for the same exact-match keyword; splitting clicks and authority directly
- **Moderate**: URLs targeting the same keyword but one ranks below position 20; passive competition draining crawl budget and link equity
- **Low**: Topically overlapping pages with no current ranking overlap; risk is future competition as domain grows

### 4. Diagnose Root Cause
For each flagged pair, identify why cannibalization exists:
- Duplicate or near-duplicate content (content was copied or repurposed)
- Siloed content without internal linking hierarchy (no clear canonical page)
- Tag/category pages competing with posts (CMS architecture issue)
- Multiple blog posts on the same topic published at different dates
- Landing pages and blog content targeting the same commercial keyword

### 5. Prescribe Actions
Assign one of four resolution actions per pair:

**Consolidate**: Merge weaker page into stronger page via 301 redirect. Use when: pages cover identical ground, one has significantly more backlinks or traffic, or both pages are thin.

**Canonicalize**: Add `rel=canonical` pointing to the preferred URL. Use when: both pages must remain live (e.g., pagination, filtered views) but one should be the ranking target.

**Differentiate**: Rewrite one page to target a distinct but related keyword or shift search intent (informational vs. transactional). Use when: both pages serve legitimate but currently blurry purposes.

**Interlink + Clarify**: Establish a clear parent-child relationship via internal links and update title/H1 to remove keyword overlap. Use when: pages are genuinely different but share ambiguous titles.

### 6. Prioritize the Fix List
Order recommendations by:
1. Severity score (Critical first)
2. Estimated traffic impact (pages with most impressions or clicks)
3. Implementation effort (redirects before rewrites)

---

## Output Format

Produce a structured audit report with these sections:

### Summary
- Total URLs audited
- Number of cannibalization pairs found (by severity tier)
- Estimated ranking recovery opportunity (qualitative: high/medium/low based on severity count)

### Cannibalization Pairs Table
A table with columns:
| URL 1 | URL 2 | Competing Keyword(s) | Severity | Root Cause | Recommended Action | Priority |

Minimum 5 rows if data supports it; cover all Critical and Moderate pairs exhaustively.

### Detailed Action Items
