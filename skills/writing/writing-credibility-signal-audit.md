---
name: writing-credibility-signal-audit
description: >
  Analyzes a finished draft and evaluates the density, placement, and quality of credibility signals including expert citations, data references, statistics, and authoritative source links. Use when someone says "check my credibility signals," asks "does my article have enough citations," or wants to "audit the trust signals in my draft." Also triggers when someone asks "is my content authoritative enough" or "review my sources and references."
category: writing
tags: [credibility, citations, editing, content-quality, sources]
author: community
---

# Credibility Signal Audit

This skill reviews a completed draft and produces a scored, actionable audit of how well the content establishes trust through citations, data, expert references, and authoritative links.

## Audit Workflow

1. **Scan for credibility signal types** — Identify every instance of the following in the draft:
   - Named expert quotes or attributions
   - Statistics or numerical data points
   - Research study or report references
   - Linked authoritative sources (journals, institutions, government sites)
   - Case studies or real-world examples with named entities
   - Industry standards or recognized frameworks cited

2. **Calculate signal density** — Count total credibility signals divided by total word count. Flag the result as:
   - Low: fewer than 1 signal per 300 words
   - Moderate: 1 signal per 150–300 words
   - Strong: 1 signal per 75–150 words

3. **Assess signal quality** — For each signal found, evaluate:
   - Source authority (peer-reviewed, institutional, or anecdotal?)
   - Recency (within 3 years = current; older = flag for update)
   - Specificity (exact figures and named sources outrank vague references)
   - Relevance (directly supports the surrounding claim?)

4. **Identify credibility gaps** — Locate paragraphs or sections with strong claims but zero credibility signals. Mark each as a gap requiring a citation, statistic, or expert reference.

5. **Check source diversity** — Flag over-reliance on a single source, self-citation, or citations from non-authoritative domains (blogs, wikis without attribution).

6. **Score the draft** — Produce an overall credibility score from 0–100 using this weighting:
   - Signal density: 30 points
   - Source authority and recency: 30 points
   - Gap coverage (claims supported vs. unsupported): 25 points
   - Source diversity: 15 points

## Output Format

Produce the audit in this exact structure:

**Credibility Signal Audit**

**Overall Score: [X/100]** — [one-line verdict: Weak / Developing / Solid / Authoritative]

---

**Signal Inventory**
| Signal | Type | Source Authority | Recency | Quality Rating |
|--------|------|-----------------|---------|----------------|
| [quote or data excerpt] | [Expert/Stat/Study/Link] | [High/Med/Low] | [Current/Dated] | [Strong/Adequate/Weak] |

---

**Signal Density**
- Word count: [X]
- Total signals found: [X]
- Density rating: [Low / Moderate / Strong]

---

**Credibility Gaps**
List each unsupported claim with its location (paragraph number or heading) and a recommended fix:
- *Gap:* "[claim text]" — Paragraph [X]
  *Fix:* Add [specific type of source, e.g., a peer-reviewed study on X, a named expert quote about Y]

---

**Source Quality Issues**
- [Flag any dated, low-authority, or over-used sources with specific corrective action]

---

**Priority Improvements** (top 3 actions ranked by impact)
1. [Highest-impact fix]
2. [Second fix]
3. [Third fix]
