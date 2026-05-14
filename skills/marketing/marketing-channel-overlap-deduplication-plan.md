---
name: marketing-channel-overlap-deduplication-plan
description: >
  Detects audience and message overlap across active marketing channels and produces a rationalization
  plan to reduce wasted spend and cannibalization. Use when someone says their channels are
  competing with each other, asks about audience overlap between campaigns, wants to consolidate
  their marketing mix, notices the same customers being targeted across multiple platforms, or
  needs to cut redundant ad spend without losing reach.
category: marketing
tags: [marketing, channel-strategy, audience-segmentation, deduplication, spend-optimization]
author: community
---

# Marketing Channel Overlap & Deduplication Plan

This skill audits active marketing channels for audience and message overlap, then generates a prioritized rationalization plan to eliminate wasted spend and channel cannibalization.

## Overlap Detection & Rationalization Workflow

### Step 1: Inventory Active Channels
Collect the following for each active channel:
- Channel name (e.g., Google Search, Meta Ads, Email, Organic Social, Affiliate, Display)
- Primary audience definition (demographics, behavioral segments, lookalikes, email lists)
- Core message or offer being promoted
- Monthly spend or effort level
- Conversion goal (e.g., acquisition, retention, upsell)

Ask the user for this information if not provided. Accept approximate or partial data — do not block on perfect inputs.

### Step 2: Map Audience Overlap
For each pair of channels, evaluate:
- **Identity overlap**: Are the same users reachable on both? (e.g., email list uploaded to Meta = direct overlap)
- **Behavioral overlap**: Do both channels target users at the same funnel stage with similar intent signals?
- **Lookalike/expansion overlap**: Are both using similar seed audiences that likely expand to the same pool?

Score each channel pair: **High / Medium / Low / None** overlap.

### Step 3: Map Message Overlap
For each pair of channels with Medium or High audience overlap, check:
- Are the offers identical or near-identical?
- Are the creative angles or value propositions differentiated?
- Is one channel reinforcing the other (acceptable) or substituting for it (cannibalization risk)?

Label each overlapping pair as: **Reinforcement** (intentional, acceptable) or **Cannibalization** (redundant, wasteful).

### Step 4: Calculate Waste Exposure
For each cannibalization pair:
- Identify the lower-performing or higher-cost channel in the pair
- Estimate the percentage of that channel's spend exposed to duplicate reach
- Flag as: **Redundant Spend** (should be reduced or redirected)

### Step 5: Build the Rationalization Plan
Produce specific recommendations in priority order:
1. **Eliminate**: Channels with high cannibalization and no unique audience or message contribution
2. **Consolidate**: Merge targeting or creative across channels serving the same segment
3. **Differentiate**: Retain both channels but assign distinct funnel stages, segments, or offers to each
4. **Suppress**: Apply audience exclusions (e.g., exclude existing customers from acquisition campaigns, exclude converters from retargeting)
5. **Reallocate**: Shift budget from redundant channels to under-served segments or higher-ROI channels

### Step 6: Assign Owners and Timelines
For each recommendation, specify:
- Who owns the change (paid media, CRM, organic, agency)
- Implementation complexity: Quick Win (days) / Medium Lift (weeks) / Strategic (months)
- Expected impact: Spend reduction %, reach preservation %, cannibalization risk reduction

## Output Format

Produce a structured report with the following sections:

**1. Channel Inventory Summary**
A table listing each channel, its audience definition, message/offer, spend tier, and funnel stage.

**2. Overlap Matrix**
A channel-vs-channel grid showing audience overlap score (High/Medium/Low/None) and overlap type (Reinforcement/Cannibalization) for each pair.

**3. Waste Exposure Summary**
A bullet list of cannibalization pairs, estimated redundant spend exposure, and the weaker channel in each pair.

**4. Rationalization Plan**
A numbered list of prioritized recommendations, each containing:
- Action (Eliminate / Consolidate / Differentiate / Suppress / Reallocate)
- Specific change required (e.g., "Add existing-customer exclusion list
