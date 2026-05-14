---
name: lead-scoring-model-design
category: marketing
description: >
  Builds a point-based lead scoring framework that ranks inbound leads by fit and engagement to prioritize sales follow-up. Use when someone says "we need to prioritize our leads," asks about lead qualification scoring, wants to build a lead ranking system, needs to identify which prospects sales should call first, or is trying to separate hot leads from cold ones.
tags: [lead-scoring, demand-generation, sales-enablement, marketing-ops, crm]
author: community
---

# Lead Scoring Model Design

This skill builds a structured, point-based lead scoring framework by analyzing demographic fit signals and behavioral engagement signals, producing a ready-to-implement scoring rubric with thresholds for sales handoff.

## Scoring Model Construction Workflow

### 1. Gather Context (ask if not provided)
- What is the product/service and typical customer profile (ICP)?
- What CRM or MAP is in use (HubSpot, Salesforce, Marketo, etc.)?
- What data is currently captured on leads (firmographic, behavioral, source)?
- What is the average sales cycle length and deal size?
- What volume of leads comes in per month?

### 2. Define Fit Scoring (Demographic / Firmographic)
Assign points based on how closely a lead matches the ICP. Build two sub-categories:

**Positive Fit Signals (add points)**
- Job title / seniority match (e.g., Director+ = 15 pts, Manager = 10 pts, IC = 5 pts)
- Company size match (e.g., 200–1,000 employees = 20 pts, 1,001–5,000 = 15 pts)
- Industry match (e.g., target vertical = 20 pts, adjacent vertical = 10 pts)
- Geography match (e.g., primary market = 10 pts, secondary = 5 pts)
- Technology stack alignment (e.g., uses complementary tool = 10 pts)

**Negative Fit Signals (subtract points)**
- Competitor domain email: −20 pts
- Student or personal email (gmail/yahoo): −15 pts
- Non-target industry: −10 pts
- Company too small or too large: −10 pts

### 3. Define Engagement Scoring (Behavioral)
Assign points based on recency and depth of engagement. Apply time decay (halve points if activity is older than 30 days).

| Behavior | Points |
|---|---|
| Requested a demo or pricing | 30 |
| Attended a live webinar | 20 |
| Watched a product video (>50%) | 15 |
| Downloaded a high-intent asset (ROI calc, buyer's guide) | 15 |
| Opened 3+ emails in a sequence | 10 |
| Visited pricing or features page | 10 |
| Downloaded a top-of-funnel asset | 5 |
| Visited website once (single page) | 2 |
| Unsubscribed from email | −10 |
| No activity in 90+ days | −15 |

### 4. Set Score Thresholds and Actions

| Score Range | Label | Sales Action |
|---|---|---|
| 80–100 | Hot (SQL) | Immediate sales outreach within 24 hrs |
| 50–79 | Warm (MQL) | Sales follow-up within 3 business days |
| 25–49 | Nurture | Enroll in automated nurture sequence |
| 0–24 | Cold | No action; monitor for re-engagement |
| Negative | Disqualified | Remove from active pipeline |

### 5. Define Score Decay Rules
- Engagement score decays 10% every 30 days of inactivity
- Leads that drop below MQL threshold revert to nurture automatically
- Scores reset to fit score baseline if no engagement in 180 days

### 6. Map to CRM Implementation
- Specify which fields in the CRM map to each scoring criterion
- Identify which scores are automated vs. manually assigned by SDR
- Define who owns the model and how often it is reviewed (recommend quarterly)

### 7. Recommend Model Validation Steps
- Backtest the model against 3–6 months of closed-
