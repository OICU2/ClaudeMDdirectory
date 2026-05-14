---
name: product-waitlist-segmentation-plan
description: >
  Designs a segmentation strategy for waitlist subscribers to personalize launch outreach based on how and why they signed up. Use when someone says "we have a waitlist and need to prioritize who to contact first," asks about "how to segment our early access users," or wants to "personalize our launch emails based on signup data." Also triggers when someone needs to "figure out which waitlist subscribers are most likely to convert" or asks "how to group waitlist users for different outreach campaigns."
category: marketing
tags: [waitlist, segmentation, launch, email-marketing, growth]
author: community
---

# Waitlist Segmentation Plan

This skill builds a structured segmentation framework for waitlist subscribers using signup source, stated intent, and engagement signals so Claude can help teams send the right launch message to the right person at the right time.

## Segmentation Workflow

### Step 1: Audit Available Data
Ask the user to confirm which data points exist for each subscriber:
- **Signup source** (paid ad, organic search, referral, social, direct)
- **Stated intent** (form fields: use case, role, company size, pain point)
- **Engagement signals** (email opens, link clicks, referrals made, survey responses, social follows)
- **Temporal data** (days on waitlist, recency of last interaction)
- **Firmographic/demographic data** (industry, team size, geography — if collected)

Flag any missing data and suggest lightweight enrichment tactics (e.g., a one-question re-engagement email).

### Step 2: Define Primary Segments
Build segments using a priority hierarchy:
1. **Intent clarity** (high-intent stated use case > generic signup)
2. **Engagement level** (active engagers > passive signups)
3. **Signup source quality** (referral/organic > cold paid)

Produce 4–6 named segments. For each segment, define:
- Inclusion criteria (specific data conditions)
- Estimated behavior profile
- Conversion likelihood (High / Medium / Low)
- Recommended outreach timing (Day 0 / Week 1 / Week 2+)

### Step 3: Map Messaging Angles per Segment
For each segment, specify:
- **Primary message hook** (what pain or desire to lead with)
- **Social proof type** (peer testimonials, metrics, case studies, or early access exclusivity)
- **CTA** (book a call, activate account, refer a friend, complete profile)
- **Tone** (urgent, educational, community-driven, or VIP)

### Step 4: Define Exclusion and Suppression Rules
Identify subscribers to exclude or delay:
- Duplicate emails / bot signups
- Competitors (if detectable by domain)
- Subscribers who have already churned from a prior product
- Any unsubscribes or complaint signals

### Step 5: Propose Sequencing Logic
Outline a launch outreach sequence:
- Which segments get Day 0 access
- Which get a waitlist-position nudge email first
- Which need a re-engagement campaign before launch offer
- Recommended send cadence and gap between touches

## Output Format

Produce a structured segmentation plan with the following sections:

**1. Data Inventory Summary**
Table listing each data point: Available / Missing / Estimated Coverage %

**2. Segment Definitions**
One section per segment (4–6 total), formatted as:
- Segment name (descriptive, not generic — e.g., "Power Users with Active Referrals")
- Criteria: bulleted conditions
- Profile: 2–3 sentence behavioral description
- Size estimate: percentage of list (if inferable) or "Unknown — recommend tagging"
- Conversion likelihood: High / Medium / Low with one-line rationale

**3. Messaging Matrix**
Markdown table with columns: Segment | Hook | Proof Type | CTA | Tone | Timing

**4. Suppression Rules**
Bulleted list of exclusion criteria with reasoning

**5. Launch Sequence Overview**
Numbered timeline showing which segments receive outreach on which days and in what order

**6. Recommended Next Steps**
3–5 prioritized actions to implement the plan (e.g., add a tagging rule in email platform, send enrichment survey, create segment in CRM)

Total length: 600–1000 words
