---
name: seo-cannibalization-fix-priority-list
description: >
  Identifies URL pairs competing for the same keyword intent and generates a prioritized list of consolidation or differentiation actions to recover ranking equity. Use when someone says "my pages are stealing traffic from each other," asks about keyword cannibalization, wants to fix duplicate ranking issues, notices two URLs competing for the same query, or needs to decide which page to keep for a target keyword.
category: marketing
tags: [seo, cannibalization, content-strategy, ranking, consolidation]
author: community
---

# SEO Cannibalization Fix Priority List

Analyzes competing URL pairs targeting the same keyword intent and produces a ranked action plan for consolidation or differentiation, used whenever duplicate ranking signals are diluting search equity.

## Cannibalization Analysis Workflow

### 1. Collect Inputs
Request the following from the user if not provided:
- List of cannibalizing URL pairs (minimum: two URLs per conflict)
- Target keyword or query for each pair
- Available data: impressions, clicks, average position, backlink counts, page authority, last-modified dates, and organic traffic per URL
- Business context: which page is the "intended" winner, if known

### 2. Score Each URL Pair
For every conflicting pair, evaluate both URLs across these dimensions and assign a winner:

| Signal | Weight |
|---|---|
| Higher average position (lower number = better) | 30% |
| More backlinks / referring domains | 25% |
| Higher organic clicks (last 90 days) | 20% |
| Better topical depth / content completeness | 15% |
| More recent last-modified date | 10% |

Calculate a composite score (0–100) for each URL. The higher-scoring URL is the **Canonical Candidate**; the lower-scoring is the **Challenger**.

### 3. Assign Fix Action
Based on scores and content overlap, assign one of four actions:

- **REDIRECT** — Overlap > 80% and score gap > 20 points → 301 Challenger to Canonical Candidate
- **CONSOLIDATE** — Overlap > 60% and both URLs have meaningful backlinks → merge content into one URL, 301 the other
- **DIFFERENTIATE** — Overlap 40–60% → rewrite Challenger to target a distinct long-tail variant; update internal links
- **INTERNAL LINK BOOST** — Overlap < 40% and score gap < 15 points → strengthen internal linking to Canonical Candidate; no structural change needed

### 4. Calculate Priority Score
Rank each fix by estimated impact:

```
Priority Score = (Combined Monthly Clicks) × (Keyword Difficulty / 100) × (Action Complexity Weight)
```

Action Complexity Weights: REDIRECT = 1.0 | CONSOLIDATE = 0.85 | DIFFERENTIATE = 0.7 | INTERNAL LINK BOOST = 0.5

Sort all pairs highest to lowest Priority Score.

### 5. Flag Quick Wins
Mark any item as **⚡ Quick Win** if:
- Action is REDIRECT or INTERNAL LINK BOOST
- Combined clicks > 500/month
- Implementation time estimated < 2 hours

## Output Format

Produce a structured report with these exact sections:

---

### Cannibalization Fix Priority List

**Summary**
- Total conflicting pairs analyzed: N
- Estimated recoverable monthly clicks: N
- Recommended actions breakdown: X Redirects | X Consolidations | X Differentiations | X Internal Link Boosts

---

**Priority Table**

| Rank | Canonical URL | Challenger URL | Target Keyword | Action | Priority Score | Est. Traffic Recovery | Quick Win? |
|---|---|---|---|---|---|---|---|
| 1 | /page-a | /page-b | [keyword] | REDIRECT | 87 | +420 clicks/mo | ⚡ Yes |

(List all pairs, sorted by Priority Score descending)

---

**Per-Pair Detail** (for top 5 pairs only, or all if ≤ 10 total)

For each:
- **Conflict:** [Canonical URL] vs [Challenger URL]
- **Keyword:** [target query]
- **Scoring:** Canonical [score] | Challenger [score]
- **Overlap:** [percentage]%
- **Action:** [
