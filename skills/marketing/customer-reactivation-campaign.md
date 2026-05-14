---
name: customer-reactivation-campaign
description: >
  Builds a segmented outreach campaign to re-engage dormant customers using behavioral data, personalized messaging, and a structured reactivation offer ladder. Use when someone says "our customers have gone quiet," asks about winning back lapsed buyers, wants to reduce customer churn, needs to reactivate an inactive user base, or is planning a win-back email sequence.
category: marketing
tags: [retention, email-marketing, segmentation, win-back, customer-lifecycle]
author: community
---

# Customer Reactivation Campaign Builder

This skill designs a full segmented win-back campaign — from dormancy tier definitions to personalized message sequences and escalating offers — triggered whenever someone needs to re-engage lapsed or inactive customers.

## Campaign Build Workflow

### Step 1: Define Dormancy Segments
Classify customers into three tiers based on last purchase or engagement date:
- **Tier 1 — Cooling (30–60 days inactive):** Still warm; light nudge required
- **Tier 2 — Dormant (61–180 days inactive):** Needs value reminder + incentive
- **Tier 3 — Lost (181+ days inactive):** Requires strong offer or feedback-first approach

Ask the user for: average purchase cycle, available CRM/behavioral signals (last open, last purchase, product category), and any existing discount constraints.

### Step 2: Build the Reactivation Offer Ladder
Map escalating incentives to each tier:
- **Tier 1:** No discount. Lead with new content, product updates, or social proof. CTA: "See what's new."
- **Tier 2:** Moderate incentive (10–15% off, free shipping, or bonus content). CTA: "Come back — here's something for you."
- **Tier 3:** Maximum retention offer (20–30% off, gift, or exclusive access) OR a feedback request if budget is constrained. CTA: "We miss you — is there anything we got wrong?"

### Step 3: Write Personalized Message Sequences
For each tier, produce a 3-touch email sequence:
1. **Email 1 (Day 0):** Reintroduction — reference last interaction or product purchased, no hard sell
2. **Email 2 (Day 5):** Value reinforcement — highlight what's changed or improved, introduce the offer
3. **Email 3 (Day 10):** Urgency close — offer expiry, limited availability, or final check-in

Personalization variables to inject per message: `[first_name]`, `[last_product_purchased]`, `[days_since_last_visit]`, `[offer_code]`.

### Step 4: Define Behavioral Triggers and Exit Conditions
- If a customer opens Email 1 but doesn't convert → fast-track to Email 2 within 48 hours
- If a customer makes a purchase at any point → immediately exit sequence and trigger onboarding/thank-you flow
- If Tier 3 customer ignores all 3 emails → suppress from campaign and flag for manual review or list pruning

### Step 5: Set Success Metrics
Define KPIs before launching:
- **Primary:** Reactivation rate (% of dormant customers who make a purchase)
- **Secondary:** Email open rate, click-through rate, offer redemption rate
- **Guardrails:** Unsubscribe rate (flag if >0.5% per email), revenue per reactivated customer vs. incentive cost

## Output Format

Produce the following as clearly labeled sections:

1. **Segment Definitions Table** — 3-row table with columns: Tier, Dormancy Window, Behavioral Signals, Goal
2. **Offer Ladder Summary** — bullet list per tier with offer type, offer value, and CTA copy
3. **Email Sequence (per tier)** — 9 emails total (3 tiers × 3 emails), each formatted as:
   - Subject line (A/B variant included)
   - Preview text
   - Body copy (150–200 words, plain conversational tone)
   - CTA button text
4. **Trigger Logic Diagram** — written as a numbered conditional flow (if/then format)
5. **KPI Scorecard** — table with metric name, target benchmark, and measurement method

Total output length: comprehensive but scannable. Use headers
