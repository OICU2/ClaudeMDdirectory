---
name: content-topic-cluster-gap-finder
description: >
  Analyzes an existing content library against a target topic cluster model to identify and prioritize missing subtopics needed for topical authority. Use when someone wants to find content gaps in their topic cluster, asks what content is missing from their SEO strategy, needs to build topical authority in a niche, wants to audit their content coverage against a pillar page structure, or is planning a content calendar and needs to know which subtopics to write next.
category: marketing
tags: [seo, content-strategy, topic-clusters, content-gaps, topical-authority]
author: community
---

# Content Topic Cluster Gap Finder

This skill maps a set of existing published content URLs or titles against a defined topic cluster model and outputs a prioritized list of missing subtopics, enabling strategic content planning to achieve topical authority.

## Workflow

### Step 1: Gather Inputs
Ask the user for the following if not already provided:
- **Pillar topic**: The central theme or main keyword (e.g., "email marketing")
- **Existing content**: A list of published URLs, page titles, or content descriptions
- **Target audience**: Who the content is for (e.g., B2B SaaS marketers, e-commerce store owners)
- **Competitor or reference clusters** (optional): Any competitor domains or example topic clusters to benchmark against

### Step 2: Build the Ideal Topic Cluster Model
Using the pillar topic and target audience, construct a comprehensive topic cluster by:
1. Defining 4–8 core subtopic categories (e.g., for "email marketing": list building, segmentation, copywriting, automation, deliverability, analytics, compliance, tools)
2. Under each subtopic category, generate 3–6 specific article-level subtopics covering:
   - Foundational/definition content ("What is X")
   - How-to and tactical content ("How to do X")
   - Comparison and tool content ("Best X for Y")
   - Advanced and nuanced content ("X strategies for Z")
   - Common problems and troubleshooting ("Why X fails")

### Step 3: Map Existing Content to the Cluster Model
For each piece of existing content provided:
1. Identify which subtopic category and specific subtopic it covers
2. Note partial coverage (content exists but is thin, outdated, or misses a key angle)
3. Flag uncovered subtopics across all categories

### Step 4: Identify and Score the Gaps
For each missing or partially covered subtopic, assign a priority score based on:
- **Funnel stage fit** (TOFU gaps weighted higher if brand awareness is the goal; BOFU gaps if conversion is the goal)
- **Cluster coherence** (subtopics that connect to multiple other subtopics score higher)
- **Foundational importance** (definition/pillar-supporting content scores highest — Google expects these to exist)
- **Competitive necessity** (subtopics commonly covered by authoritative competitors score higher)

Label each gap as:
- 🔴 **Critical** — foundational content missing; cluster is incomplete without it
- 🟡 **High Priority** — important subtopic with strong search intent coverage
- 🟢 **Opportunity** — valuable addition but not blocking topical authority

### Step 5: Generate Output

## Output Format

Produce a structured report with the following sections:

---

**Topic Cluster Gap Analysis: [Pillar Topic]**

**Cluster Coverage Summary**
- Total subtopics in ideal cluster: [N]
- Subtopics currently covered: [N] ([X]%)
- Subtopics with partial coverage: [N]
- Subtopics missing: [N]

**Existing Content Mapped**
A table with columns:
| Content Title / URL | Subtopic Category | Specific Subtopic Covered | Coverage Quality |
|---|---|---|---|

Coverage Quality options: Full, Partial, Thin

**Gap List by Priority**

Group missing subtopics by priority tier:

🔴 Critical Gaps (write these first)
- [Subtopic title] — [1-sentence rationale for why it's critical]

🟡 High Priority Gaps
- [Subtopic title] — [1-sentence rationale]

🟢 Opportunity Gaps
- [Subtopic title] — [1-sentence rationale]

**Recommended Content Calendar
