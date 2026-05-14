---
name: content-cluster-architecture
description: >
  Structures a topic cluster of pillar pages and supporting content pieces with internal linking logic to maximize topical authority for SEO. Use when someone wants to build topical authority for a subject, asks how to organize content around a core topic, needs a content cluster strategy, wants to dominate a niche with SEO content, or is planning a pillar page with supporting articles.
category: marketing
tags: [seo, content-strategy, topical-authority, pillar-pages, internal-linking]
author: community
---

# Content Cluster Architecture

This skill designs a complete topic cluster system — one pillar page, 6–12 supporting cluster pages, and a precise internal linking map — that Claude will use whenever someone needs to build SEO topical authority around a subject.

## Content Cluster Architecture Workflow

### 1. Define the Core Topic and Pillar Page
- Identify the broad, high-volume head keyword (e.g., "email marketing")
- Define the pillar page scope: comprehensive, 2,000–4,000 word guide covering the topic at a high level
- Confirm the pillar page URL slug (e.g., `/email-marketing-guide`)
- State the pillar's primary intent: informational, commercial, or hybrid

### 2. Identify Cluster Content Subtopics
- Break the pillar topic into 6–12 distinct subtopics using these criteria:
  - Each subtopic must be a narrower slice of the pillar (e.g., "email subject line best practices," "email list segmentation," "drip campaign setup")
  - Each subtopic must support a separate long-tail keyword with clear search intent
  - No two cluster pages should target overlapping keywords
- For each subtopic, specify:
  - Target keyword (primary)
  - Search intent (informational / commercial / transactional)
  - Estimated word count (800–2,000 words)
  - Content type (how-to guide, listicle, comparison, definition post, case study)

### 3. Map Internal Linking Logic
- **Pillar → Cluster:** The pillar page links to every cluster page using exact-match or close-variant anchor text matching each cluster's primary keyword
- **Cluster → Pillar:** Every cluster page links back to the pillar page using the pillar's primary keyword as anchor text — once per page, naturally placed
- **Cluster → Cluster:** Identify lateral links between related cluster pages (minimum 2 per cluster page); use descriptive anchor text that reflects the destination page's keyword
- Flag any cluster pages with no natural lateral linking opportunities as standalone — these link only to/from the pillar

### 4. Prioritize Publishing Order
- Rank cluster pages by: (1) search volume, (2) content difficulty, (3) commercial value
- Assign publishing tiers:
  - **Tier 1 (publish first):** Pillar page + 2–3 highest-volume cluster pages
  - **Tier 2:** Mid-volume cluster pages that link laterally to Tier 1
  - **Tier 3:** Long-tail, low-competition pages that reinforce topical depth

### 5. Flag Coverage Gaps and Cannibalization Risks
- Identify missing subtopics that competitors likely cover
- Flag any two cluster pages that risk keyword cannibalization and recommend merging or differentiating them

## Output Format

Produce a structured cluster architecture document with these sections:

**1. Pillar Page Brief**
- Topic, target keyword, URL slug, intent, word count target

**2. Cluster Content Map** (table format)
| # | Cluster Page Title | Target Keyword | Intent | Content Type | Word Count | Tier |
|---|---|---|---|---|---|---|

**3. Internal Linking Map**
- Pillar → Cluster links (list each cluster page + anchor text)
- Cluster → Pillar links (standard anchor text for all)
- Cluster → Cluster links (list each pair + anchor text)

**4. Publishing Order**
- Tier 1, Tier 2, Tier 3 lists with rationale

**5. Gap and Risk Analysis**
- Bullet list of missing topics and cannibalization flags

Total output length: 400–800 words of prose plus tables. Use headers, tables, and bullet points throughout. No paragraph blocks without structure.
