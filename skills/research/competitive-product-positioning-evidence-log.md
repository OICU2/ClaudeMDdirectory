---
name: competitive-product-positioning-evidence-log
description: >
  Aggregates and organizes publicly available evidence to document how competitors position each product feature over time. Use when someone says "track how competitors are positioning this feature," asks about "what claims rivals are making about their pricing," or wants to "build an evidence log of competitor messaging." Also triggers when someone needs to "document competitive positioning over time" or wants to "collect proof of how a competitor markets their product."
category: research
tags: [competitive-intelligence, market-research, product-positioning, evidence-tracking, pricing-analysis]
author: community
---

# Competitive Product Positioning Evidence Log

This skill systematically collects, structures, and timestamps publicly available competitor evidence—pricing pages, case studies, G2/Capterra reviews, landing pages, press releases—so product and marketing teams can track how rival positioning evolves feature by feature.

## Evidence Collection Workflow

1. **Define scope**: Identify the target competitors (up to 5) and the specific features or capability categories to track (e.g., pricing model, onboarding, integrations, security claims).

2. **Source mapping**: For each competitor, enumerate the evidence sources to pull from:
   - Pricing pages (direct URL if known, otherwise infer from `competitor.com/pricing`)
   - Feature/product pages and landing pages
   - Case studies and customer success pages
   - Third-party review platforms: G2, Capterra, Trustpilot, Reddit threads
   - Press releases, blog posts, and changelog entries
   - Job postings (signals about capability investments)

3. **Evidence extraction per source**: For each source, capture:
   - **Exact quote or claim** (verbatim where possible)
   - **Feature category** it maps to
   - **Positioning angle** (e.g., cost leadership, ease-of-use, enterprise-grade, speed)
   - **Source URL and page title**
   - **Date accessed or published** (use publication date if available; otherwise log access date)

4. **Positioning pattern identification**: After collecting evidence per competitor, identify:
   - Primary positioning claim (the dominant message)
   - Secondary claims (supporting proof points)
   - Notable absences (features they do NOT mention, which may signal weakness)
   - Messaging shifts (if comparing across time snapshots)

5. **Cross-competitor comparison**: Map each competitor's positioning stance for each feature side by side to surface differentiation gaps and messaging overlaps.

6. **Confidence tagging**: Label each evidence entry with a confidence level:
   - `HIGH` — direct quote from official page
   - `MEDIUM` — inferred from case study or indirect claim
   - `LOW` — sourced from third-party review or job posting

## Output Format

Produce a structured evidence log in the following format:

---

### Competitive Positioning Evidence Log
**Generated:** [date]
**Features tracked:** [list]
**Competitors covered:** [list]

---

#### [Competitor Name]

| Feature | Positioning Claim | Angle | Source | Date | Confidence |
|---|---|---|---|---|---|
| Pricing | "Starts at $X/seat/month, no hidden fees" | Cost transparency | competitor.com/pricing | 2024-11-01 | HIGH |
| Onboarding | "Live in 48 hours" | Speed | G2 review by user @X | 2024-09-15 | MEDIUM |

**Primary Positioning Summary:** [1–2 sentences on their dominant market message for this feature set]

**Notable Absences:** [Features or claims competitors conspicuously omit]

**Messaging Shift (if applicable):** [What changed vs. prior snapshot and when]

---

Repeat the table block for each competitor, then add a final section:

#### Cross-Competitor Feature Positioning Matrix

| Feature | Competitor A | Competitor B | Competitor C |
|---|---|---|---|
| Pricing model | Per-seat, transparent | Usage-based, opaque | Flat-rate, enterprise only |
| Security claims | SOC 2 Type II prominent | Mentioned briefly | Not found |

**Key Gaps and Opportunities:** [Bullet list of positioning white space your product could own]

---

Length: as long as the evidence requires; do not truncate evidence entries. Each table row must contain a real, sourced data point—no placeholder rows.
