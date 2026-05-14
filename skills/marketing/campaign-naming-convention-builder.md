---
name: campaign-naming-convention-builder
description: >
  Creates a standardized naming convention system for campaigns, ad sets, and creatives to ensure consistent UTM tagging and reporting accuracy. Use when someone says "our campaign names are inconsistent," asks about "how to structure UTM parameters," or wants to "build a naming convention for ads." Also triggers when someone mentions "reporting is broken because of naming" or "we need a standard for campaign tracking."
category: marketing
tags: [utm, naming-conventions, campaign-management, tracking, reporting]
author: community
---

# Campaign Naming Convention Builder

This skill generates a structured, team-ready naming convention system for campaigns, ad sets, and creatives across any ad platform, and produces ready-to-use UTM templates and a reference guide.

## Workflow

### Step 1: Gather Context
Ask the user for the following if not already provided:
- **Platforms** in use (Google Ads, Meta, TikTok, LinkedIn, email, etc.)
- **Business type** (ecommerce, SaaS, lead gen, etc.)
- **Team size** and who will be creating campaigns
- **Key dimensions** they report on (region, funnel stage, audience type, creative format, offer, etc.)
- **Existing conventions** if any (even broken ones)

If the user says "just give me a template," proceed with sensible defaults and note assumptions.

### Step 2: Define the Naming Structure
Build a convention using ordered components separated by underscores or hyphens. Standard components to include:

| Position | Component | Example Values |
|----------|-----------|----------------|
| 1 | Platform/Channel | `meta`, `goog`, `tktk`, `li`, `em` |
| 2 | Campaign Type | `pros` (prospecting), `ret` (retargeting), `brand`, `upsell` |
| 3 | Funnel Stage | `tof`, `mof`, `bof` |
| 4 | Audience/Segment | `lal`, `int`, `list`, `broad` |
| 5 | Date (YYYYMM) | `202506` |
| 6 | Unique Identifier | `summersale`, `v1`, `promo01` |

**Format:** `[platform]_[type]_[stage]_[audience]_[YYYYMM]_[id]`
**Example:** `meta_pros_tof_lal_202506_summersale`

Adjust components based on the user's reported dimensions. Remove components that don't apply. Add custom ones where needed.

### Step 3: Define Hierarchy Rules
- **Campaign name** = full convention above
- **Ad set name** = subset of campaign convention + audience detail + budget tier if relevant
  - Example: `meta_pros_tof_lal-25-45-us_202506`
- **Ad/Creative name** = ad set reference + creative format + variant
  - Example: `meta_pros_tof_lal_202506_vid-15s_v2`

### Step 4: Build UTM Parameter Templates
Map naming convention components to UTM parameters:

```
utm_source    = [platform]          → meta, google, tiktok
utm_medium    = [channel type]      → cpc, paid-social, email, display
utm_campaign  = [campaign name]     → meta_pros_tof_lal_202506_summersale
utm_content   = [ad/creative name]  → vid-15s_v2
utm_term      = [keyword or audience] → lal-lookalike, branded-kw
```

Full UTM example:
```
?utm_source=meta&utm_medium=paid-social&utm_campaign=meta_pros_tof_lal_202506_summersale&utm_content=vid-15s_v2&utm_term=lal
```

### Step 5: Define Governance Rules
State these explicitly in the output:
1. All components must use lowercase, no spaces (use hyphens within a component, underscores between components)
2. Date format is always YYYYMM — never MM/DD or written months
3. No special characters except `_` and `-`
4. Abbreviations must come from the approved glossary (provide it)
5. New abbreviations require team approval before
