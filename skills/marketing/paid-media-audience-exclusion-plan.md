---
name: paid-media-audience-exclusion-plan
description: >
  Builds a systematic exclusion list for paid media campaigns that prevents wasted spend on
  existing customers, recent converters, and low-intent segments. Use when someone says "we're
  wasting ad spend on existing customers," asks about protecting budget efficiency in paid
  campaigns, wants to stop serving ads to people who already converted, needs to build an
  audience exclusion strategy, or is worried about cannibalizing organic or direct traffic with
  paid ads.
category: marketing
tags: [paid-media, audience-targeting, budget-efficiency, ppc, exclusions]
author: community
---

# Paid Media Audience Exclusion Plan

This skill builds a structured, platform-ready audience exclusion framework that prevents paid campaigns from serving ads to existing customers, recent converters, and low-value segments, protecting budget for net-new acquisition.

## Exclusion Planning Workflow

### Step 1: Gather Campaign Context
Ask for or identify:
- Campaign objective (prospecting, retargeting, brand awareness, lead gen)
- Platform(s) in use (Google Ads, Meta, LinkedIn, TikTok, Programmatic)
- CRM or pixel data availability (customer lists, conversion events, visit data)
- Business type (ecommerce, SaaS, lead gen, local service)
- Average sales cycle length and customer lifetime

### Step 2: Define Core Exclusion Categories

Build exclusions across four tiers:

**Tier 1 — Existing Customers**
- CRM upload: all active customers (match by email, phone, address)
- Loyalty or rewards program members
- Subscription holders or current license holders
- Users who completed a purchase in the past [N] days (define based on repurchase cycle)

**Tier 2 — Recent Converters**
- Anyone who completed the target conversion action within the past 30/60/90 days
- Post-purchase confirmation page visitors
- Thank-you page custom audience from pixel
- Lead form completers (for lead gen campaigns)

**Tier 3 — Low-Intent or Wasteful Segments**
- Employees (exclude by company domain on LinkedIn; use IP exclusion where possible)
- Competitors (exclude known competitor domains from content targeting)
- Irrelevant job titles or industries (B2B campaigns)
- Visitors with extremely high or low dwell time (bounce segments on Display)
- Users who visited careers/jobs pages only

**Tier 4 — Funnel Stage Conflicts**
- Exclude bottom-funnel retargeting audiences from top-of-funnel prospecting campaigns
- Exclude top-of-funnel cold audiences from high-intent bottom-funnel campaigns
- Exclude audiences already in an active email nurture sequence (if suppression list available)

### Step 3: Map Exclusions to Platforms

For each exclusion, specify:
- **List type**: Customer match upload / pixel audience / in-platform segment
- **Platform availability**: Note which platforms support each method (e.g., Google Customer Match requires $50K spend history; LinkedIn matched audiences require 300+ members)
- **Refresh cadence**: Static (one-time upload) vs. dynamic (auto-updating pixel audience)
- **Recommended lookback window**: 30 / 60 / 90 / 180 / 365 days based on sales cycle

### Step 4: Identify Data Gaps and Workarounds
- If no CRM list: use pixel-based purchase event audience as proxy
- If pixel is new or underfire: use email suppression list upload
- If customer list is small (<1,000): note platform minimums and suggest seed expansion
- Flag any GDPR/CCPA consent requirements for customer list uploads

### Step 5: Prioritize by Budget Impact
Rank each exclusion by estimated waste reduction:
- High impact: existing customers + recent converters (always implement first)
- Medium impact: funnel-stage conflicts + employee exclusions
- Lower impact: competitor domains + niche behavioral segments

## Output Format

Produce a structured exclusion plan with the following sections:

1. **Exclusion Summary Table**
   Columns: Exclusion Name | Tier | Platform(s) | List Type | Lookback Window | Data Source | Priority
   Minimum 8–12 rows covering all four tiers.

2. **Platform-Specific Setup Notes**
   Bullet-point implementation guidance per platform
