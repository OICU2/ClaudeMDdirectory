---
name: ad-headline-relevance-score-checker
description: >
  Evaluates the semantic alignment between ad headlines and their destination landing page copy to surface relevance gaps that negatively impact Quality Score and conversion rates. Use when someone wants to check if their ad copy matches their landing page, asks why their Quality Score is low, or needs to improve ad-to-page message consistency. Also triggers when someone shares ad headlines alongside a landing page URL or copy and wants a relevance audit.
category: marketing
tags: [ppc, quality-score, ad-copy, landing-page, google-ads]
author: community
---

# Ad Headline Relevance Score Checker

This skill audits the alignment between ad headlines and landing page copy, scoring relevance across key dimensions and producing a prioritized list of gaps to fix for improved Quality Score and conversion rate.

## Relevance Audit Workflow

### Step 1: Extract Core Elements
- From the ad headlines: identify primary keyword, value proposition, call-to-action, and any claims (price, offer, urgency)
- From the landing page copy: identify H1, hero text, primary CTA, key benefit statements, and repeated keyword themes
- Note the page title tag and meta description if provided

### Step 2: Score Relevance Across 5 Dimensions
Rate each dimension 1–10, where 10 = perfect alignment:

1. **Keyword Mirror** — Does the exact or close variant of the headline keyword appear prominently in the landing page H1 or hero copy?
2. **Value Prop Continuity** — Does the specific benefit or offer stated in the headline appear on the landing page within the first screen?
3. **CTA Consistency** — Does the action the ad implies (e.g., "Get a Free Quote") match what the landing page asks the user to do?
4. **Tone & Audience Match** — Does the language register, audience assumed, and urgency level match between ad and page?
5. **Trust Signal Alignment** — If the ad makes a claim (e.g., "#1 Rated," "Free Shipping"), is that claim substantiated on the landing page?

### Step 3: Identify Gaps
For any dimension scoring below 7, produce a specific gap statement:
- What the ad says or implies
- What the landing page actually delivers
- Why this mismatch harms Quality Score or post-click experience

### Step 4: Generate Fix Recommendations
For each gap, provide one of:
- A revised headline variant that better matches existing landing page copy
- Specific landing page copy edits (exact suggested text) to match the ad
- A flag if the mismatch indicates a deeper strategic misalignment requiring campaign restructuring

## Output Format

Produce a structured audit report with the following sections:

**Relevance Audit Summary**
- Overall Relevance Score: [X/50] — [Poor / Needs Work / Good / Strong]
- Headline analyzed: [exact headline(s)]
- Landing page analyzed: [URL or copy snippet identifier]

**Dimension Scores**
| Dimension | Score | Status |
|---|---|---|
| Keyword Mirror | X/10 | ✅ / ⚠️ / ❌ |
| Value Prop Continuity | X/10 | ✅ / ⚠️ / ❌ |
| CTA Consistency | X/10 | ✅ / ⚠️ / ❌ |
| Tone & Audience Match | X/10 | ✅ / ⚠️ / ❌ |
| Trust Signal Alignment | X/10 | ✅ / ⚠️ / ❌ |

**Gap Analysis**
For each ⚠️ or ❌ dimension, list:
- Gap: [1-sentence description]
- Ad says: [quote]
- Page delivers: [quote or "not present"]
- Impact: [specific Quality Score or UX consequence]

**Recommended Fixes** (prioritized by impact)
1. [Highest impact fix — specific and actionable]
2. [Next fix]
...

Keep the full report under 600 words. Use plain language. Flag any dimension where insufficient information was provided to score accurately.
