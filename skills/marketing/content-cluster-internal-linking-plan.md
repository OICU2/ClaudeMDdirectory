---
name: content-cluster-internal-linking-plan
description: >
  Builds a structured internal linking strategy across pillar and cluster content pages to maximize topical authority signals for search engines. Use when someone wants to improve their site's internal linking structure, asks how to connect their blog content for better SEO, needs to map out links between pillar pages and supporting articles, wants to build topical authority through content clusters, or is planning a hub-and-spoke content architecture.
category: marketing
tags: [seo, internal-linking, content-strategy, topical-authority, content-clusters]
author: community
---

# Content Cluster Internal Linking Plan

This skill generates a structured internal linking map connecting pillar pages to cluster content, and cluster content to each other, to signal topical authority to search engines and improve crawlability.

## Workflow

### Step 1: Gather Inputs
Ask the user for:
- The **pillar page** topic and URL (or planned URL)
- All **cluster/supporting pages** with their topics and URLs
- The **primary keyword** for the pillar and secondary keywords for each cluster page
- Any existing links already in place (to avoid duplication)

### Step 2: Audit the Content Hierarchy
- Identify the single pillar page that owns the broadest topic
- Group cluster pages by subtopic relevance to the pillar
- Flag any cluster pages that could cross-link to each other (shared entities, related subtopics, sequential steps)
- Identify orphaned cluster pages with no natural linking opportunity

### Step 3: Define Link Relationships
Apply these linking rules:

**Pillar → Cluster (Hub-to-Spoke)**
- Every cluster page must receive at least one link from the pillar page
- Anchor text must use the cluster page's primary keyword or a close variant
- Link should appear in body content, not just navigation or footers

**Cluster → Pillar (Spoke-to-Hub)**
- Every cluster page must link back to the pillar page
- Anchor text must use the pillar's primary keyword or a natural variant
- Place the link contextually within the first 60% of the article body

**Cluster → Cluster (Spoke-to-Spoke)**
- Link cluster pages to each other only when topically adjacent (shared subtopic, prerequisite relationship, or complementary angle)
- Maximum 3 cross-links per cluster page to avoid dilution
- Anchor text must be descriptive and specific, not generic ("click here," "this article")

### Step 4: Build the Link Map
Create a directional link table showing:
- Source page → Target page
- Recommended anchor text
- Suggested placement (intro, body section, conclusion, sidebar)
- Link priority (Required / Recommended / Optional)

### Step 5: Flag Gaps and Warnings
- Pages with no inbound links from the cluster (orphans)
- Pillar pages missing cluster coverage for important subtopics (content gaps)
- Over-linked pages that risk appearing manipulative (more than 5 inbound cluster links)
- Anchor text that is too generic or over-optimized

## Output Format

Produce the following in order:

**1. Cluster Overview Table**
| Page Type | Page Title | Primary Keyword | URL |
List all pages in the cluster hierarchy.

**2. Internal Link Map Table**
| Source Page | Target Page | Anchor Text | Placement | Priority |
One row per recommended link. Include all pillar↔cluster and cluster↔cluster links.

**3. Orphan & Gap Report**
Bullet list of:
- Orphaned pages (no inbound links)
- Missing subtopic coverage
- Over-linked pages

**4. Implementation Notes**
3–5 plain-language recommendations the content or dev team should act on first, ordered by SEO impact.

Total output should be scannable and copy-paste ready for a content or SEO brief. Use tables and bullets throughout — no long paragraphs.
