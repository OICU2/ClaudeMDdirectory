---
name: prospect-annual-report-insight-extractor
description: >
  Parses a prospect's annual report or 10-K filing to extract strategic priorities, risks, and budget signals that sharpen your sales pitch. Use when someone says "analyze this annual report," asks to "find pain points in this 10-K," wants to "prep for a sales call using their filing," needs to "understand what a prospect cares about," or wants to "pull insights from a company report" before an outreach or meeting.
category: sales
tags: [sales-intelligence, account-research, annual-report, 10-K, prospect-analysis]
author: community
---

# Prospect Annual Report Insight Extractor

Analyzes a prospect's annual report or 10-K to surface strategic priorities, operational pain points, risk factors, and budget signals that directly inform a more relevant, timely sales pitch.

## Extraction Workflow

1. **Identify the document scope** — Confirm you have the full report or a meaningful excerpt (CEO letter, MD&A, Risk Factors, Business Overview). Note the fiscal year and company name.

2. **Extract Strategic Priorities** — Pull explicit initiatives from the CEO/Chairman letter and MD&A. Look for phrases like "investing in," "focus on," "expanding," "transforming," "accelerating." List the top 3–5 priorities with a direct quote and page/section reference.

3. **Surface Pain Points and Challenges** — Mine the Risk Factors, MD&A, and Outlook sections for:
   - Operational inefficiencies mentioned explicitly
   - Technology gaps or legacy system references
   - Talent/hiring challenges
   - Supply chain, compliance, or regulatory pressures
   - Customer retention or churn signals
   List each pain point with the source section and a supporting quote.

4. **Identify Budget Signals** — Scan for:
   - CapEx and OpEx trends (increasing or decreasing spend areas)
   - Specific dollar amounts tied to initiatives ("allocated $50M to digital transformation")
   - Mentions of cost-cutting, restructuring, or efficiency drives
   - New business units, acquisitions, or geographic expansions (indicating new spend)
   Flag whether budget posture appears expansionary, defensive, or mixed.

5. **Detect Competitive and Market Pressures** — Note named competitors, market share concerns, pricing pressure, or disruption threats. These reveal urgency and negotiating context.

6. **Map to Sales Relevance** — For each insight, add a one-line "Pitch Hook" suggesting how your product/service connects to that finding. If the seller's offering is not specified, leave a `[YOUR SOLUTION]` placeholder.

7. **Flag Recency and Gaps** — Note the report's fiscal year. If it is more than 18 months old, flag that signals may be stale and recommend supplementing with recent earnings call transcripts or press releases.

## Output Format

Produce a structured briefing document with the following sections:

---

**Company:** [Name] | **Filing Period:** [FY/Year] | **Prepared for:** [Sales Rep/Team if known]

### 1. Strategic Priorities (Top 3–5)
- **Priority:** [Label]
  - *Evidence:* "[Direct quote]" — [Section]
  - *Pitch Hook:* [One-line relevance statement]

### 2. Pain Points & Challenges (Top 3–5)
- **Pain Point:** [Label]
  - *Evidence:* "[Direct quote]" — [Section]
  - *Pitch Hook:* [One-line relevance statement]

### 3. Budget Signals
- **Posture:** [Expansionary / Defensive / Mixed]
- **Key Signals:**
  - [Signal 1 with dollar amount or trend direction]
  - [Signal 2]

### 4. Competitive & Market Pressures
- [Pressure 1 — brief description]
- [Pressure 2 — brief description]

### 5. Recommended Talking Points for Outreach
1. [Talking point tied to top priority or pain]
2. [Talking point tied to budget signal or urgency driver]
3. [Talking point tied to competitive pressure]

### 6. Data Freshness Note
[Flag if filing is >18 months old and suggest supplemental sources]

---

Keep the full briefing to one page or less when printed. Use plain language
