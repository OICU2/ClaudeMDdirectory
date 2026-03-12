---
name: churn-reduction-campaigns
description: >
  Designs targeted re-engagement and retention campaigns for at-risk customer segments based on behavioral signals and lifecycle stage. Use when someone says "customers are leaving," asks about reducing churn, wants to win back lapsed users, needs to retain at-risk accounts, or is planning a re-engagement campaign.
category: marketing
tags: [churn, retention, re-engagement, lifecycle-marketing, customer-success]
author: community
---

# Churn Reduction Campaigns

This skill builds data-informed retention and re-engagement campaigns by mapping behavioral signals to customer risk levels and crafting targeted interventions for each segment.

## Campaign Design Workflow

### 1. Define Churn Signals & Segments
- Identify behavioral indicators: login frequency drop, feature disengagement, support ticket spikes, billing page visits, NPS score decline
- Classify customers into risk tiers:
  - **High risk**: No activity 14–30 days, downgrade intent signals, open support issues
  - **Medium risk**: Reduced engagement 7–14 days, low feature adoption, missed renewal milestones
  - **At-risk new users**: No activation within first 7 days, skipped onboarding steps
- Map lifecycle stage for each segment (onboarding, activation, growth, renewal, post-churn)

### 2. Identify Root Cause Per Segment
- High risk: likely value gap or competitive pressure — focus on ROI proof and relationship touchpoints
- Medium risk: likely habit or awareness gap — focus on feature education and quick wins
- New user: likely onboarding friction — focus on activation milestones and early success moments

### 3. Design Campaign Structure Per Segment
For each segment, define:
- **Channel mix**: email, in-app, SMS, direct outreach (CSM/sales), push notification
- **Sequence length**: 3–7 touchpoints over 7–21 days depending on urgency
- **Incentive logic**: when to offer trial extension, discount, dedicated support, or feature unlock
- **Exit conditions**: what action (login, upgrade, response) ends the sequence

### 4. Write Campaign Messaging
- Subject lines and opening hooks must reference the specific behavior signal (e.g., "We noticed you haven't used [Feature] lately")
- Each message must include one clear CTA tied to a re-engagement milestone
- Personalization tokens: customer name, company, last active feature, account tier, days since last login
- Tone calibration: high-risk = empathetic + urgent; medium-risk = helpful + educational; new user = encouraging + instructional

### 5. Define Success Metrics
- Primary: re-engagement rate, churn rate delta, saved ARR
- Secondary: email open/click rate, feature reactivation, support ticket resolution
- Set measurement window: 30/60/90 days post-campaign launch

## Output Format

Produce a structured campaign brief with the following sections:

**Segment Summary Table**
| Segment | Risk Level | Signal | Lifecycle Stage | Estimated Size |
|---|---|---|---|---|

**Campaign Plan Per Segment** (repeat for each):
- Campaign name and goal
- Channel sequence with timing (Day 1, Day 3, Day 7, etc.)
- Message copy for each touchpoint (subject line + 3–5 sentence body + CTA)
- Incentive or offer if applicable
- Exit/conversion trigger

**Measurement Plan**
- KPIs with baseline and target values
- Reporting cadence and owner

Length: thorough enough to hand directly to a marketing team for execution. Use tables for segment overviews, numbered lists for sequences, and clearly labeled message copy blocks.
