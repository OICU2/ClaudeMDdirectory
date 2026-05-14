---
name: geotargeting-strategy-design
description: >
  Identifies optimal geographic markets and defines location-based targeting parameters for paid and organic campaigns. Use when someone says "we need to figure out which cities to target," asks about expanding into new regions, wants to refine their local advertising reach, needs to prioritize geographic markets for budget allocation, or is building a location-based campaign strategy.
category: marketing
tags: [geotargeting, local-marketing, paid-campaigns, market-expansion, location-strategy]
author: community
---

# Geotargeting Strategy Design

This skill analyzes business context, audience data, and market signals to define precise geographic targeting parameters for both paid and organic marketing campaigns.

## Geotargeting Strategy Workflow

### 1. Gather Business Context
Collect the following before proceeding:
- Product/service type and whether it has physical, digital, or hybrid delivery
- Current customer location data (if available) or proxy signals (website traffic by region, existing sales data)
- Budget range and whether campaigns are paid, organic, or both
- Business goals: brand awareness, lead generation, revenue, foot traffic

### 2. Define Market Tiers
Segment geographic targets into three tiers based on demand signals, competition density, and cost efficiency:

**Tier 1 — Core Markets**
- Highest existing customer concentration or strongest demand signals
- Lowest CAC relative to LTV
- Allocate 50–60% of geo-targeting budget here

**Tier 2 — Growth Markets**
- Adjacent regions with similar demographics to Tier 1 or emerging demand
- Moderate competition, reasonable CPCs
- Allocate 25–35% of budget

**Tier 3 — Test Markets**
- Untested regions with potential upside
- Low budget allocation (10–15%) for signal gathering
- Evaluate after 30–60 days before scaling

### 3. Define Location Targeting Parameters
For each tier, specify:
- **Geographic unit**: country / state / DMA / city / ZIP code / radius around point
- **Radius targeting** (if applicable): define km/mile radius for service-area businesses
- **Exclusion zones**: competitor strongholds, low-conversion regions, areas outside service range
- **Bid adjustments**: recommend +/- % modifier by tier for paid campaigns

### 4. Platform-Specific Configuration Rules
- **Google Ads**: Use location targeting with "presence" (not "interest") for precision; layer in radius targeting for local service businesses
- **Meta Ads**: Use city-level or ZIP targeting; avoid country-level unless brand awareness goal
- **Organic/SEO**: Prioritize city + service keyword clusters for Tier 1; create location landing pages for each Tier 1 and Tier 2 market
- **Programmatic**: Use polygon/geo-fence targeting around physical locations or competitor addresses where applicable

### 5. Prioritization Criteria
Rank markets using these factors (weighted scoring optional):
1. Population size or addressable market density
2. Existing customer or lead concentration
3. Average CPC / competition index for the category
4. Proximity to fulfillment, service areas, or physical locations
5. Seasonality or regional demand patterns

### 6. Measurement Setup
Define success metrics per tier before launch:
- Tier 1: conversion rate, ROAS, or CPL vs. baseline
- Tier 2: lead volume growth, impression share by region
- Tier 3: click-through rate, engagement rate, or micro-conversions

## Output Format

Produce a structured geotargeting strategy document with the following sections:

**1. Market Tier Summary Table**
| Tier | Markets | Targeting Unit | Budget % | Primary Goal |
|------|---------|----------------|----------|--------------|
List 3–8 specific named locations per tier.

**2. Platform Configuration Specs**
Bullet list per relevant platform with exact targeting settings, bid modifiers, and exclusions.

**3. Keyword/Content Geo-Anchoring** (if organic is in scope)
List of 5–10 location-modified keyword targets or landing page recommendations per Tier 1 market.

**4. 30/60/90-Day Expansion Roadmap**
Short timeline showing when to evaluate Tier 3 markets, when to shift budget, and what triggers a market promotion or deprioritization.

**5. Measurement Checklist**
Bulleted KPIs per tier
