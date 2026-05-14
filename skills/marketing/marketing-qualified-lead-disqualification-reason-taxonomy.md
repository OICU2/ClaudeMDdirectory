---
name: marketing-qualified-lead-disqualification-reason-taxonomy
description: >
  Builds a structured taxonomy of MQL disqualification reasons from CRM data to identify patterns and improve lead scoring model accuracy. Use when someone wants to understand why leads are being disqualified, asks about fixing their lead scoring model, or needs to categorize MQL rejection reasons. Also activate when someone says their sales team is rejecting too many marketing leads or wants to audit MQL quality.
category: marketing
tags: [mql, lead-scoring, crm, taxonomy, disqualification]
author: community
---

# MQL Disqualification Reason Taxonomy Builder

This skill analyzes CRM disqualification data to construct a structured taxonomy of MQL rejection reasons, surfaces patterns, and recommends lead scoring model improvements.

## Workflow

### 1. Data Gathering
- Ask the user to provide disqualification data in any available format: CRM export (CSV/JSON), a list of rejection reasons, or free-text notes from sales reps
- If no data is provided, ask for the top 10–20 most common disqualification reasons written out manually
- Confirm the CRM system in use (Salesforce, HubSpot, Pipedrive, etc.) to contextualize field names and stage terminology

### 2. Raw Reason Normalization
- Deduplicate semantically identical reasons (e.g., "no budget" = "budget not available" = "can't afford")
- Standardize free-text notes into clean, consistent labels
- Flag ambiguous reasons for clarification (e.g., "not a fit" without further detail)

### 3. Taxonomy Construction
Organize disqualification reasons into a two-level hierarchy:

**Level 1 — Primary Categories (use these exactly):**
- `BANT_BUDGET` — Budget-related rejections
- `BANT_AUTHORITY` — Wrong contact, no decision-making power
- `BANT_NEED` — No pain point, wrong use case, product mismatch
- `BANT_TIMING` — Too early, already in contract, future consideration only
- `DATA_QUALITY` — Bad contact info, duplicate, inactive account
- `FIRMOGRAPHIC_FIT` — Wrong company size, industry, geography, or segment
- `BEHAVIORAL_SIGNAL` — Inflated score from low-intent actions (e.g., content download only)
- `COMPETITIVE` — Already using a competitor, locked in
- `OTHER` — Uncategorizable after review

**Level 2 — Sub-reasons:** Create 2–5 specific sub-reasons under each active primary category based on the data provided.

### 4. Pattern Analysis
- Calculate frequency and percentage share for each primary category
- Identify the top 3 disqualification categories by volume
- Flag any category exceeding 20% share as a systemic issue
- Note correlations if data includes lead source, campaign, or persona fields (e.g., "BEHAVIORAL_SIGNAL is 60% of rejections from content syndication leads")

### 5. Lead Scoring Recommendations
For each high-volume disqualification category, produce one concrete scoring model fix:
- `FIRMOGRAPHIC_FIT` issues → add hard-filter gates on company size/industry before MQL threshold
- `BEHAVIORAL_SIGNAL` issues → increase weight of high-intent actions (demo request, pricing page) vs. passive actions (blog visit)
- `BANT_TIMING` issues → introduce a nurture re-entry path instead of full disqualification
- `DATA_QUALITY` issues → enforce field validation at form submission; add data enrichment step
- `BANT_NEED` issues → audit ICP definition and review lead source targeting

## Output Format

Produce a structured report with the following sections:

**Section 1 — Normalized Taxonomy Table**
A markdown table with columns: `Category`, `Sub-reason`, `Count`, `% of Total`, `Example Raw Reason`

**Section 2 — Pattern Summary**
3–5 bullet points highlighting dominant disqualification patterns, anomalies, and any lead source or campaign correlations found.

**Section 3 — Lead Scoring Recommendations**
A numbered list of specific model changes, one per high-volume category, written as actionable directives (e.g., "Add a firmographic gate: exclude companies with fewer than 50 employees before scoring begins").

**Section 4 — Data Gaps & Next
