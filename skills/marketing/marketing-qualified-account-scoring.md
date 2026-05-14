---
name: marketing-qualified-account-scoring
description: >
  Builds a weighted scoring model for account-level engagement signals to prioritize high-fit companies for sales handoff. Use when someone says "we need to score our accounts," asks about identifying which companies are ready for sales outreach, or wants to build a marketing qualified account framework. Also activates when someone needs to rank accounts by buying intent or define MQA thresholds for their go-to-market motion.
category: marketing
tags: [account-scoring, mqa, abm, lead-scoring, sales-handoff]
author: community
---

# Marketing Qualified Account Scoring

This skill builds a customized weighted scoring model for account-level engagement signals, producing a prioritized MQA framework that helps marketing teams identify which companies are sales-ready.

## Scoring Model Workflow

### 1. Gather Account Context
Ask the user for:
- Target market (ICP criteria: industry, company size, revenue range, geography)
- Available data sources (CRM, MAP, intent data, website analytics, product usage)
- Current sales handoff threshold or SLA expectations
- Any existing scoring attempts and their pain points

### 2. Define Signal Categories
Build the model around five signal categories:

**Firmographic Fit (max 25 points)**
- Industry match: 10 pts
- Employee count within ICP range: 8 pts
- Revenue within ICP range: 7 pts

**Engagement Depth (max 30 points)**
- High-intent page visits (pricing, demo, case studies): 5 pts each, cap at 15
- Content downloads (gated assets): 4 pts each, cap at 12
- Webinar or event attendance: 3 pts per person

**Contact Breadth (max 20 points)**
- Number of unique contacts engaged at the account: 4 pts per contact, cap at 20
- Seniority bonus: +2 pts per director-level or above contact

**Intent Signals (max 15 points)**
- Third-party intent topic spikes: 8 pts
- Competitor research activity: 4 pts
- Review site visits (G2, Capterra): 3 pts

**Recency Decay (modifier)**
- Activity within 7 days: 1.0x multiplier
- Activity 8–30 days: 0.75x multiplier
- Activity 31–60 days: 0.5x multiplier
- Activity 60+ days: 0.25x multiplier

### 3. Set MQA Threshold Tiers
- **Tier 1 — Sales Accepted Account (SAA):** Score ≥ 70 → immediate BDR outreach
- **Tier 2 — MQA Watch List:** Score 45–69 → nurture + monthly review
- **Tier 3 — Early Stage:** Score 20–44 → awareness programs only
- **Below threshold (< 20):** No action; re-evaluate ICP fit

### 4. Customize Weights
Adjust default weights based on user's business model:
- **Product-led growth:** Increase product usage signals to 35% of total
- **Enterprise/long-cycle:** Increase contact breadth and seniority weight
- **Transactional/SMB:** Simplify to firmographic fit + recency only

### 5. Define Operational Rules
- Scores reset to base firmographic value after 90 days of no activity
- Manual override allowed by sales with documented reason
- Re-scoring frequency: weekly batch or real-time trigger (user specifies)
- Alert rule: notify account owner when account crosses tier boundary

## Output Format

Produce a complete MQA scoring specification with these sections:

1. **Scoring Model Summary Table** — signal category, max points, weight percentage, and data source for each dimension
2. **Threshold Tiers Table** — tier name, score range, recommended action, SLA for follow-up
3. **Recency Decay Schedule** — time window and multiplier in table format
4. **Implementation Checklist** — 8–12 specific tasks (e.g., "Map intent topics to CRM custom field," "Configure weekly batch scoring job")
5. **Sample Account Scorecard** — fictional example account scored across all dimensions with running total
6. **Customization Notes** — 2–3 specific adjustments recommended based on the user
