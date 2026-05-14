---
name: search-intent-mapping
category: marketing
description: >
  Categorizes target keywords by informational, navigational, and transactional intent to align content and landing pages with the appropriate buyer stage. Use when someone says "help me understand what my keywords mean for content," asks about matching pages to search intent, or wants to organize keywords by funnel stage. Also triggers when someone needs to audit why pages aren't converting or wants to map queries to the buyer journey.
tags: [seo, keyword-research, content-strategy, conversion, search-intent]
author: community
---

# Search Intent Mapping

This skill analyzes a list of keywords or queries and classifies each by search intent type—informational, navigational, commercial investigation, or transactional—then recommends the correct content format and page type to match each intent.

## Intent Classification Workflow

1. **Receive keyword input** — Accept a list of keywords, queries, or a content/campaign topic. If no list is provided, ask the user to supply 5–50 target keywords before proceeding.

2. **Classify each keyword into one of four intent categories:**
   - **Informational** — User seeks knowledge. Signals: "how to," "what is," "why," "guide," "tips," "learn." Best served by: blog posts, guides, FAQs, educational landing pages.
   - **Navigational** — User seeks a specific brand, site, or page. Signals: brand names, "login," "official site," "[brand] + product name." Best served by: homepage, brand landing pages, product pages.
   - **Commercial Investigation** — User is researching before buying. Signals: "best," "vs," "review," "top," "compare," "alternatives." Best served by: comparison pages, review articles, listicles, case studies.
   - **Transactional** — User is ready to act. Signals: "buy," "price," "discount," "hire," "get a quote," "download," "sign up," "order." Best served by: product pages, pricing pages, checkout flows, lead-gen forms.

3. **Assign funnel stage to each keyword:**
   - Informational → Top of Funnel (TOFU)
   - Commercial Investigation → Middle of Funnel (MOFU)
   - Navigational → Any stage (brand-aware)
   - Transactional → Bottom of Funnel (BOFU)

4. **Identify content or page gaps** — Cross-reference intent categories against what the user currently has (if stated). Flag keywords where no matching page type exists.

5. **Prioritize by conversion potential** — Rank BOFU transactional keywords highest, MOFU commercial keywords second, TOFU informational keywords third unless the user specifies otherwise.

6. **Flag intent conflicts** — If a keyword is ambiguous (e.g., "SEO tools" could be commercial or informational), note the ambiguity and provide a recommended classification with rationale.

## Output Format

Produce a structured intent map in this exact format:

**Intent Classification Table**

| Keyword | Intent Type | Funnel Stage | Recommended Page/Content Type | Notes |
|---|---|---|---|---|
| [keyword] | Informational | TOFU | Blog post / How-to guide | — |
| [keyword] | Transactional | BOFU | Product page / Lead form | High priority |
| [keyword] | Commercial | MOFU | Comparison article | Ambiguous—see note |

**Summary Section (after the table):**
- **Total keywords analyzed:** N
- **Intent breakdown:** X% Informational, X% Commercial, X% Transactional, X% Navigational
- **Top 3 content gaps** (pages you need but likely don't have)
- **Top 3 quick wins** (transactional keywords with clearest conversion path)
- **Recommended next step:** One concrete action the user should take first

Keep the table concise. Notes column is only used for ambiguous classifications or high-priority flags. Do not add explanatory prose inside the table rows.
