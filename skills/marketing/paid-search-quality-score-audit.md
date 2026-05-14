---
name: paid-search-quality-score-audit
description: >
  Analyzes Google Ads Quality Scores by evaluating ad copy relevance, keyword alignment, and landing page experience to identify root causes and prescribe targeted fixes. Use when someone says their Quality Scores are low, asks why their CPC is too high, wants to improve ad relevance or landing page experience scores, notices poor ad rank despite competitive bids, or needs to diagnose underperforming ad groups in paid search campaigns.
category: marketing
tags: [paid-search, google-ads, quality-score, ppc, ad-optimization]
author: community
---

# Paid Search Quality Score Audit

This skill performs a structured diagnostic of ad group Quality Scores by examining the three core components—expected CTR, ad relevance, and landing page experience—and produces a prioritized action plan for each underperforming ad group.

## Audit Workflow

### 1. Collect Inputs
Request the following from the user if not already provided:
- Ad group names and their current Quality Scores (1–10)
- Keywords within each ad group (match types included)
- Current ad copy (headlines and descriptions for each ad)
- Landing page URLs for each ad group
- Current CTR data if available
- Industry/product context

If the user cannot provide all data, proceed with what is available and flag gaps.

### 2. Score Component Diagnosis
For each ad group, evaluate all three Quality Score components:

**Expected CTR**
- Check if ad headlines directly mirror or closely echo the target keywords
- Flag generic, non-specific headlines that fail to match search intent
- Identify missing emotional triggers, numbers, or calls to action that suppress CTR
- Flag if CTR data shows below-industry-average performance (search: typically <2% is a warning sign)

**Ad Relevance**
- Map each keyword in the ad group to headline and description mentions
- Flag keyword-to-ad mismatches where core terms are absent from ad copy
- Identify ad groups with too broad a keyword mix that dilutes relevance (recommend SKAG or tightly themed groupings if 5+ unrelated keywords exist)
- Check if display URLs use keyword-rich paths

**Landing Page Experience**
- Review the landing page URL provided; assess whether the page likely contains:
  - The primary keyword in H1, title tag, and above-the-fold content
  - A clear, singular CTA matching the ad's promise
  - Fast load signals (flag if mobile optimization is unclear)
  - Content depth matching the search intent (informational vs. transactional)
- Flag message mismatch between ad copy promises and landing page content
- Note any likely trust or transparency issues (no contact info, thin content, heavy ad load)

### 3. Root Cause Classification
Assign each ad group one primary failure mode:
- **Keyword Bloat** — too many unrelated keywords diluting relevance
- **Ad-Keyword Disconnect** — keywords not reflected in ad copy
- **Landing Page Mismatch** — ad promise not fulfilled on the page
- **Low CTR Signals** — weak headlines, missing CTAs, no differentiation
- **Intent Mismatch** — keyword intent (informational/commercial/transactional) misaligned with ad and page

### 4. Generate Improvement Actions
For each ad group, produce 3–5 specific, implementable actions ranked by expected impact:
- Rewrite specific headlines (provide new copy, not just direction)
- Recommend keyword removal or ad group splits with suggested new groupings
- Specify landing page edits (exact section, exact change)
- Suggest ad extensions that address relevance gaps (sitelinks, callouts, structured snippets)
- Recommend A/B test variants where root cause is unclear

## Output Format

Produce a structured audit report with the following sections:

---

**QUALITY SCORE AUDIT REPORT**

**Executive Summary**
- 2–3 sentence overview of the most critical patterns found across all ad groups
- Estimated impact category: High / Medium / Low urgency overall

---

**Ad Group: [Name]**
- Current Quality Score: X/10
- Primary Failure Mode: [classification from Step 3]
- Component Breakdown:
  - Expected CTR: Below Average / Average / Above Average — [1-sentence diagnosis]
  - Ad Relevance: Below Average / Average / Above Average — [1-sentence diagnosis]
  - Landing Page Experience: Below Average / Average / Above
