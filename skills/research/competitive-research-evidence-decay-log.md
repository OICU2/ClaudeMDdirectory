---
name: competitive-research-evidence-decay-log
description: >
  Maintains a structured log of every source used in a competitive analysis, tracking publication dates, reliability half-lives, and re-verification deadlines for each claim. Use when someone says "help me track sources for a competitor report," asks about "keeping competitive research up to date," or wants to "flag stale data in a market analysis." Also activates when a user mentions "evidence freshness," "source reliability audit," or "competitive intelligence review."
category: research
tags: [competitive-intelligence, source-tracking, evidence-management, research-hygiene, market-analysis]
author: community
---

# Competitive Research Evidence Decay Log

This skill builds and maintains a timestamped evidence log for competitive analyses, assigns decay timelines to each source type, and surfaces claims that have passed their reliability threshold and require re-verification.

## Evidence Decay Workflow

### 1. Source Intake
For every source cited in the competitive analysis, capture:
- **Source ID** (sequential, e.g. S-001)
- **Claim it supports** (one-line summary)
- **Source type** (press release, SEC filing, analyst report, news article, product page, LinkedIn post, patent, job listing, etc.)
- **Publication date** (exact date or best estimate)
- **Retrieved date** (when you accessed it)
- **URL or citation**

### 2. Assign Decay Class
Apply a decay class based on source type and competitive context:

| Decay Class | Half-Life | Source Types |
|-------------|-----------|--------------|
| **Volatile** | 30 days | Job listings, pricing pages, social posts, press releases |
| **Short** | 90 days | News articles, blog posts, product feature pages, earnings calls |
| **Medium** | 180 days | Analyst reports, survey data, market share estimates |
| **Long** | 365 days | SEC/regulatory filings, patent grants, academic studies |
| **Structural** | 2+ years | Business model descriptions, founding story, core product category |

### 3. Calculate Re-Verification Deadline
- **Re-verification deadline** = Publication date + (Half-life × 1.5)
- Flag any source where today's date exceeds the re-verification deadline as **STALE**
- Flag any source within 30 days of its deadline as **EXPIRING SOON**

### 4. Assess Claim Risk
For each claim, assign a risk level:
- **HIGH RISK**: Claim is stale AND the competitive decision depends on it being current
- **MEDIUM RISK**: Claim is expiring soon OR the source is secondhand (citing another source)
- **LOW RISK**: Claim is fresh and sourced directly from the competitor or authoritative registry
- **UNVERIFIABLE**: No publication date available; treat as Volatile and flag immediately

### 5. Generate Re-Verification Action Items
For each HIGH or MEDIUM RISK claim, produce a specific re-verification task:
- What to check (exact data point)
- Where to look (primary source recommendation)
- Who should verify (role suggestion: analyst, legal, product team)
- Deadline (based on decay calculation)

## Output Format

Produce three artifacts:

**1. Evidence Decay Log Table**
A markdown table with columns: `Source ID | Claim Summary | Source Type | Pub Date | Retrieved | Decay Class | Re-Verify By | Status | Risk Level`

**2. Flagged Claims Summary**
A bulleted list of all STALE and EXPIRING SOON items grouped by risk level (HIGH → MEDIUM), each with one sentence explaining why the staleness matters competitively.

**3. Re-Verification Action List**
A numbered checklist of specific verification tasks sorted by deadline (soonest first), formatted as:
`[ ] [Deadline] — Re-verify [claim] via [source recommendation] — Owner: [role]`

Include a one-line log health score at the top of the output:
`Log Health: X% of claims are current | Y claims require immediate action | Last audit: [date]`
