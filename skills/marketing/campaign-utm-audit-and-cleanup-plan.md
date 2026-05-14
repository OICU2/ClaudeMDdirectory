---
name: campaign-utm-audit-and-cleanup-plan
description: >
  Audits existing UTM parameter usage across campaigns for inconsistent naming conventions, missing parameters, and duplicate tracking values, then generates a standardized UTM taxonomy and migration plan. Use when someone says their UTM tracking is a mess, asks how to clean up campaign parameters, wants to standardize their UTM naming conventions, needs to audit their marketing tracking links, or is getting inconsistent data in Google Analytics due to UTM issues.
category: marketing
tags: [utm, campaign-tracking, analytics, naming-conventions, marketing-ops]
author: community
---

# UTM Audit and Cleanup Plan

This skill analyzes provided UTM parameter data to surface inconsistencies, gaps, and duplicates, then produces a standardized taxonomy and step-by-step migration plan.

## Audit Workflow

### Step 1: Collect Raw UTM Data
Ask the user to provide their existing UTM parameters in any format they have — spreadsheet export, GA campaign report, a list of URLs, or even a rough description of their current conventions. If they have no data ready, prompt them with: "Paste a sample of 10–20 URLs or your current UTM naming rules."

### Step 2: Extract and Categorize All Values
Parse every unique value across all five UTM dimensions:
- `utm_source` (e.g. google, facebook, newsletter)
- `utm_medium` (e.g. cpc, email, social)
- `utm_campaign` (e.g. spring_sale, SpringSale2024, spring-sale)
- `utm_content` (e.g. banner_v1, hero-image, CTA_blue)
- `utm_term` (e.g. running+shoes, running shoes, RunningShoes)

### Step 3: Flag Issues by Category
Identify and label each issue type:

**Inconsistent Formatting**
- Mixed case (Email vs email vs EMAIL)
- Mixed delimiters (spring_sale vs spring-sale vs springsale)
- Abbreviation variants (fb vs facebook vs Facebook)

**Missing Parameters**
- Campaigns missing `utm_medium` or `utm_source`
- Paid campaigns missing `utm_term` or `utm_content`
- Flag which channels require which parameters

**Duplicate/Redundant Values**
- Multiple values mapping to the same logical source (ig, instagram, Instagram)
- Overlapping campaign names across date ranges with no version distinction

**Structural Problems**
- Values with spaces or special characters that will break URLs
- Overly long values (>50 characters) that obscure reporting
- utm_medium values that should be utm_source and vice versa

### Step 4: Define Standardized Taxonomy
Based on the audit findings, produce a canonical UTM convention document:
- Choose one casing standard (recommend: all lowercase)
- Choose one delimiter (recommend: underscore for multi-word values)
- Define allowed values per source and medium
- Establish campaign naming formula: `[objective]_[audience]_[date]` or similar
- List reserved/approved source values with aliases to retire

### Step 5: Build Migration Map
Create a direct old-to-new mapping table for every non-compliant value found. Include:
- Which URLs or campaigns are affected
- Priority tier (High = active campaigns, Medium = recent but paused, Low = historical)
- Owner or channel responsible for the fix

### Step 6: Prioritization and Rollout Plan
Sequence the cleanup:
1. Fix all active campaigns immediately
2. Update tracking templates in ad platforms (Google Ads, Meta, LinkedIn)
3. Redirect or re-tag email and social links
4. Apply GA4 channel grouping rules or regex filters to normalize historical data
5. Archive old URL builder sheets and replace with new standardized template

## Output Format

Produce a structured report with the following sections:

**1. Audit Summary**
- Total unique UTM values reviewed (by dimension)
- Count of issues by type (formatting, missing, duplicate, structural)
- Overall health score: Clean / Needs Attention / Critical

**2. Issue Log**
A table with columns: `Dimension | Current Value | Issue Type | Recommended Fix | Priority`

**3. Standardized UTM Taxonomy**
A reference sheet listing approved values and naming formulas per dimension, formatted as a copyable table or code block.

**4. Migration Map**
A table with
