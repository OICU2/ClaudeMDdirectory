---
name: marketing-qualified-lead-scoring-model
description: >
  Designs a comprehensive lead scoring rubric that assigns weighted point values to behavioral and demographic signals to identify marketing-qualified leads (MQLs) ready for sales handoff. Use when someone wants to build a lead scoring system, needs to prioritize leads by purchase readiness, asks how to separate hot prospects from cold ones, wants to define MQL thresholds, or is trying to reduce wasted sales outreach on unready contacts.
category: marketing
tags: [lead-scoring, mql, demand-generation, marketing-ops, pipeline]
author: community
---

# MQL Lead Scoring Model Builder

Builds a customized point-based lead scoring rubric that quantifies behavioral and demographic signals, sets MQL thresholds, and defines handoff criteria so marketing can pass only sales-ready leads to the pipeline.

## Scoring Model Construction Workflow

### 1. Gather Context Before Scoring
Ask for (or infer from context):
- Product type (B2B SaaS, ecommerce, services, etc.)
- Average sales cycle length
- Ideal Customer Profile (ICP): company size, industry, role, geography
- Available data sources (CRM, MAP, website analytics, form fills)
- Current MQL volume and conversion benchmarks if known

### 2. Build the Demographic / Firmographic Score (Fit Score)
Assign points based on how closely a lead matches the ICP. Use a 0–100 scale split roughly 50 points for fit, 50 for behavior.

| Signal | Points |
|---|---|
| Job title matches buyer persona (e.g., VP Marketing) | +15 |
| Company size in target range (e.g., 50–500 employees) | +10 |
| Industry is a priority vertical | +10 |
| Geography matches sales territory | +7 |
| Technology stack includes relevant tools | +8 |
| Job title adjacent but not primary persona | +5 |
| Company size outside ideal but acceptable | +3 |
| Personal email domain (Gmail, Yahoo) | −10 |
| Student or competitor email | −15 |

Adjust point values to match the client's ICP weight preferences.

### 3. Build the Behavioral / Engagement Score (Intent Score)
Track actions that signal purchase intent. Higher-intent actions earn more points.

| Behavior | Points |
|---|---|
| Requested a demo or free trial | +25 |
| Visited pricing page (1–2 times) | +15 |
| Visited pricing page (3+ times) | +20 |
| Downloaded a bottom-of-funnel asset (ROI calculator, comparison guide) | +15 |
| Attended a live webinar | +12 |
| Opened and clicked 3+ emails in a sequence | +10 |
| Downloaded a top-of-funnel asset (blog, ebook) | +5 |
| Visited website 5+ times in 30 days | +8 |
| Engaged with a case study | +10 |
| Watched a product video > 50% completion | +8 |
| Unsubscribed from email | −20 |
| No activity in 60 days | −10 (score decay) |

### 4. Define Score Decay Rules
- Apply a 10% score reduction every 30 days of inactivity
- Reset behavioral score to 0 after 90 days of no engagement
- Do not decay fit/demographic score

### 5. Set MQL Threshold and Lead Tiers

| Tier | Score Range | Action |
|---|---|---|
| Cold Lead | 0–29 | Nurture sequence only; no sales contact |
| Warm Lead | 30–49 | Add to drip campaigns; monitor activity |
| Marketing Qualified Lead (MQL) | 50–74 | Alert sales for review; SDR follows up within 48 hours |
| Sales Accepted Lead (SAL) | 75–100 | Immediate SDR outreach; escalate to AE if no response in 24 hours |

Default MQL threshold: **50 points**. Adjust up if sales is overwhelmed; adjust down if pipeline volume is too low.

### 6. Define Disqualification Rules (Negative Scoring Triggers)
Automatically remove from MQL queue if:
- Lead is a known competitor
