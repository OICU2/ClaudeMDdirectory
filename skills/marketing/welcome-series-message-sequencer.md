---
name: welcome-series-message-sequencer
description: >
  Designs a structured, multi-step welcome email series with timing schedules, content themes, and conversion goals tied to new subscriber behavior stages. Use when someone says "help me onboard new subscribers," asks about building a welcome email sequence, or wants to map out nurture emails for new signups. Also activates when someone needs to plan email timing and content for new customers or wants to convert free users into paying customers through email.
category: marketing
tags: [email-marketing, onboarding, automation, nurture-sequences, conversion]
author: community
---

# Welcome Series Message Sequencer

This skill designs a complete multi-step welcome email series by mapping message timing, content themes, and conversion goals to the behavioral and psychological stages new subscribers move through.

## Workflow

### 1. Gather Subscriber Context
Before building the sequence, establish:
- **Product/service type** (SaaS, ecommerce, content, service business)
- **Primary conversion goal** (free-to-paid, first purchase, booking, engagement)
- **Subscriber source** (lead magnet, signup form, trial, purchase)
- **Average sales cycle length** (days to conversion for this audience)
- **Known subscriber segments** if any (e.g., job role, intent level)

If context is missing, ask 2–3 targeted questions before proceeding.

### 2. Define the Behavioral Stages
Map the sequence to these subscriber mindset stages:

| Stage | Mindset | Goal |
|-------|---------|------|
| Day 0–1 | Curious / skeptical | Confirm value, build trust |
| Day 2–4 | Exploring | Demonstrate relevance, reduce friction |
| Day 5–9 | Evaluating | Overcome objections, show proof |
| Day 10–14 | Deciding | Push toward conversion event |
| Day 15+ | Engaged or cold | Re-engage or segment out |

Adjust stage timing based on sales cycle length provided.

### 3. Sequence Each Email
For every email in the series, define:
- **Send timing** (e.g., immediately, Day 2, Day 5)
- **Trigger condition** (time-based or behavior-based, e.g., "if no click by Day 3")
- **Content theme** (e.g., quick win, social proof, objection handling, case study)
- **Single CTA** (one action per email, no competing links)
- **Conversion goal** (micro-goal this email moves toward)
- **Subject line** (one primary + one A/B variant)
- **Preview text** (one line, complements subject line)
- **Body copy direction** (3–5 bullet points describing what to write, not the copy itself)

### 4. Apply Sequencing Rules
- Email 1 must send within 5 minutes of signup — immediacy builds trust
- No email should contain more than one CTA
- Alternate between value-delivery emails and conversion emails (never two conversion emails back-to-back)
- Include at least one behavior-based branch (e.g., clicked vs. did not click)
- Email before final conversion push must handle the top 2 objections for the product type
- Series must end with a segmentation email that moves subscribers to the appropriate ongoing list

### 5. Build the Behavior Branch Map
Identify at least two decision points in the sequence where subscriber behavior (open, click, purchase, no action) changes what they receive next. Label each branch clearly.

---

## Output Format

Produce the following sections in order:

**Series Overview**
- Total emails in sequence
- Total duration (days)
- Primary conversion goal
- Assumed subscriber source

**Email Sequence Table**
A table with columns: Email #, Send Day/Trigger, Theme, Subject Line, Preview Text, CTA, Conversion Goal

**Email-by-Email Breakdown**
For each email:
```
Email [#] — [Theme Name]
Send: [Day X / Trigger condition]
Subject: [Primary] | A/B: [Variant]
Preview Text: [One line]
Content Direction:
- [Point 1]
- [Point 2]
- [Point 3]
CTA: [Button text → destination]
Micro-goal: [What this email accomplishes]
```

**Behavior Branch Map**
A simple text-based
