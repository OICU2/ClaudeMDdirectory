---
name: net-promoter-score-campaign-design
description: >
  Designs a complete NPS survey deployment plan with timing triggers, segmented follow-up sequences, and routing logic for detractors, passives, and promoters. Use when someone wants to launch an NPS program, asks how to collect customer satisfaction scores, or needs to build a feedback loop after purchase or product usage. Also activates when someone says "we need to measure customer loyalty" or wants to automate responses based on survey results.
category: marketing
tags: [nps, customer-feedback, survey-design, retention, customer-success]
author: community
---

# NPS Campaign Design

This skill produces a full NPS survey deployment plan including send timing, trigger conditions, follow-up sequences, and response-based routing logic for detractors, passives, and promoters.

## Campaign Design Workflow

### 1. Define Survey Triggers
- Identify the deployment model: transactional (post-event) or relational (periodic)
- Transactional triggers: post-purchase (3–5 days after delivery), post-onboarding (day 14), post-support ticket close (24 hours), feature adoption milestone
- Relational triggers: quarterly for B2B accounts, every 6 months for B2C, annual for low-touch segments
- Set suppression rules: no survey if contacted in last 30 days, no survey during open support tickets, cap at 2 surveys per customer per year for relational sends

### 2. Survey Design
- Single required question: "How likely are you to recommend [Company] to a friend or colleague?" (0–10 scale)
- One optional open-text follow-up: "What's the primary reason for your score?"
- Keep total survey time under 90 seconds
- Personalize subject line with customer name and context (e.g., "How was your experience with [Product]?")

### 3. Segment Respondents
- **Detractors** (0–6): Flag for immediate intervention
- **Passives** (7–8): Flag for nurture and education
- **Promoters** (9–10): Flag for referral and advocacy programs

### 4. Response-Based Routing Sequences

**Detractors:**
- Hour 0–1: Trigger internal alert to CSM or support team with score + verbatim response
- Day 1: Send personalized acknowledgment email from a named team member, not a no-reply address
- Day 2–3: CSM outreach via phone or calendar invite to understand root cause
- Day 7: Follow-up email summarizing action taken based on feedback
- Day 30: Re-survey or check-in to measure recovery

**Passives:**
- Day 1: Send thank-you email with relevant product tips or feature highlights based on use case
- Day 14: Share a case study or success story relevant to their segment
- Day 30: Invite to a webinar, beta program, or community group
- Day 60: Soft referral ask or upgrade prompt if usage signals support it

**Promoters:**
- Day 1: Send thank-you email with genuine appreciation, no immediate ask
- Day 3: Request a review on G2, Capterra, Google, or App Store with direct link
- Day 7: Invite to referral program with clear incentive structure
- Day 14: Ask for a case study or testimonial if account size and relationship support it
- Day 30: Enroll in champion or advocate program if one exists

### 5. Non-Responders
- Send one reminder at day 3 with a shorter subject line variant
- Close the survey after day 7 for non-responders
- Do not add non-responders to response-based sequences

### 6. Measurement and Reporting
- Calculate NPS: (% Promoters − % Detractors) × 100
- Track response rate, score by segment, score by cohort (product, plan tier, region)
- Set baseline in first 90 days; then track month-over-month and quarter-over-quarter trends
- Flag any score drop of 5+ points in a 30-day window for investigation

## Output Format

Produce the following sections in order:

1. **Campaign Summary** — 3–5 bullet points covering deployment model, audience, and goals
2. **Trigger Conditions Table** — table with columns: Trigger Event | Delay | Audience Segment |
