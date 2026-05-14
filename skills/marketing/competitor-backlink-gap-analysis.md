---
name: competitor-backlink-gap-analysis
description: >
  Identifies high-value backlink sources that competitors have secured but your site has not yet targeted. Use when someone says "find backlinks my competitors have that I don't," asks about closing the backlink gap, wants to discover untapped link-building opportunities, needs to analyze competitor link profiles, or is looking for sites that link to competitors but not to them.
category: marketing
tags: [seo, backlinks, competitor-analysis, link-building, gap-analysis]
author: community
---

# Competitor Backlink Gap Analysis

This skill systematically uncovers high-value backlink opportunities by comparing competitor link profiles against your own, surfacing domains you should prioritize outreach to.

## Analysis Workflow

1. **Gather inputs** — Collect the user's domain and 2–5 competitor domains. If not provided, ask for them before proceeding.

2. **Define the gap** — Explain that the backlink gap = domains linking to one or more competitors but NOT linking to the user's site.

3. **Prioritize by value signals** — Rank gap domains using these criteria (highest to lowest priority):
   - Domain Authority / Domain Rating (DA/DR ≥ 50 preferred)
   - Number of competitors the domain links to (links to 3+ competitors = high priority)
   - Topical relevance to the user's industry
   - Estimated organic traffic of the referring domain
   - Link type (editorial > directory > sponsored)

4. **Categorize opportunity types** — Group gap domains into:
   - **Resource pages** — pages that curate links to tools/guides in the niche
   - **Guest post sources** — blogs accepting contributor content
   - **Industry directories** — niche-specific listing sites
   - **News/media outlets** — journalists who cover the space
   - **Partner/integration pages** — sites listing compatible tools or services
   - **Broken link opportunities** — dead links on competitor-linking pages your content could replace

5. **Assess difficulty** — Flag each opportunity as Easy / Medium / Hard based on:
   - Whether the site accepts unsolicited outreach
   - Commercial vs. editorial nature of the site
   - Number of outbound links on the linking page

6. **Recommend outreach angle** — For each category, suggest the specific pitch approach (e.g., "pitch a guest post on X topic," "submit to their resource page with this angle," "use broken link replacement").

7. **Flag quick wins** — Highlight any domains that link to 3+ competitors with DA ≥ 40 and clear contact information as immediate priorities.

## Output Format

Produce a structured report with the following sections:

---

### Backlink Gap Summary
- User domain: `[domain]`
- Competitors analyzed: `[list]`
- Total gap domains identified: `[N]`
- Quick-win opportunities: `[N]`

---

### Priority Gap Opportunities Table

| Domain | DA/DR | Competitors Linking | Category | Difficulty | Recommended Outreach Angle |
|--------|-------|---------------------|----------|------------|---------------------------|
| example.com | 67 | 4/5 competitors | Resource page | Easy | Submit tool to their curated list |
| ... | ... | ... | ... | ... | ... |

*(List top 10–20 domains sorted by priority score)*

---

### Opportunity Categories Breakdown
For each category present in the results:
- **Category name** — how many domains, why they matter, sample outreach template (2–3 sentences)

---

### Quick Wins (Act This Week)
Bulleted list of 3–5 highest-confidence opportunities with specific next steps.

---

### Tools to Pull This Data
If the user needs to gather raw data, recommend: Ahrefs Link Intersect, SEMrush Backlink Gap, Moz Link Explorer, or Majestic — with the specific report name to run in each tool.

---

*If the user has not provided actual domain data, generate a realistic example using a hypothetical niche (e.g., project management SaaS) and clearly label it as illustrative.*
