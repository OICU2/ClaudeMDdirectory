---
name: competitor-email-subject-line-swipe-file
description: >
  Collects, organizes, and analyzes competitor email subject lines to build a strategic swipe file for email testing. Use when someone says "I need to spy on competitor emails," asks about "what subject lines are working in my industry," or wants to "build a swipe file for email campaigns," "analyze competitor email tactics," or "improve open rates by studying the competition."
category: marketing
tags: [email-marketing, competitor-analysis, copywriting, swipe-file, subject-lines]
author: community
---

# Competitor Email Subject Line Swipe File

This skill collects and categorizes competitor email subject lines by tactic, tone, and offer type to build an actionable reference library that informs your own A/B testing strategy.

## Workflow

1. **Identify competitors and sources**
   - Ask the user to provide competitor brand names, their industry/niche, and any subject lines they've already collected
   - If no subject lines are provided, prompt them to pull from: Gmail Promotions tab, tools like Milled.com, Really Good Emails, or their own inbox archives
   - Confirm the time range they want to analyze (last 30 days, 90 days, full archive)

2. **Classify each subject line across four dimensions**
   - **Tactic**: curiosity gap, urgency/scarcity, personalization, social proof, direct offer, storytelling, question, listicle, controversy, or re-engagement
   - **Tone**: playful, professional, urgent, conversational, bold, fear-of-missing-out, empathetic
   - **Offer type**: discount/promo, new product, content/resource, event/webinar, seasonal, loyalty/VIP, abandoned cart, educational
   - **Structural pattern**: emoji usage, length (short <40 chars / medium 40–60 / long >60), use of brackets, numbers, or symbols

3. **Score and flag high-performers**
   - Mark any subject line that uses two or more proven tactics simultaneously as "High-Leverage"
   - Flag patterns that repeat across multiple competitors as "Industry-Validated"
   - Note any unusual or pattern-breaking subject lines as "Test Candidate"

4. **Extract strategic insights**
   - Identify the top 3 dominant tactics used in the space
   - Identify gaps — tactics rarely used by competitors that could provide differentiation
   - Map which tactic/tone combinations appear most frequently for each offer type

5. **Generate test recommendations**
   - Produce 5–10 original subject line variants inspired by the swipe file for the user's own brand
   - Each variant should adapt a competitor tactic to the user's voice and offer
   - Pair each with the specific tactic it's testing so results can be attributed

## Output Format

Produce a structured swipe file with four sections:

**Section 1 — Swipe File Table**
A markdown table with columns: `Subject Line | Brand | Tactic | Tone | Offer Type | Pattern | Flag`
Include every subject line provided, one row each.

**Section 2 — Pattern Summary**
Bullet list of the top 5 observed patterns with a one-line explanation and example for each.

**Section 3 — Gap Analysis**
3–5 bullet points identifying tactics or tones that are underused in the competitive set and represent differentiation opportunities.

**Section 4 — Test Queue**
Numbered list of 5–10 original subject lines ready to test, each formatted as:
- `Subject line text`
  - *Tactic being tested:* [tactic name]
  - *Inspired by:* [competitor or pattern]
  - *Best for:* [offer type or campaign scenario]

Total output should be scannable and copy-paste ready for a team doc or Notion page. Avoid prose paragraphs in the table or test queue sections.
