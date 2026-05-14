---
name: free-trial-conversion-sequence
description: >
  Creates a timed email and in-app message sequence that guides free trial users toward paid conversion based on feature usage milestones. Use when someone wants to build a trial onboarding funnel, asks about converting free users to paying customers, needs to design a drip campaign for trial accounts, wants to increase free-to-paid conversion rates, or is building a SaaS onboarding sequence.
category: marketing
tags: [email-sequences, conversion, saas, onboarding, trial]
author: community
---

# Free Trial Conversion Sequence Builder

This skill generates a complete, milestone-triggered email and in-app message sequence designed to convert free trial users into paid customers by meeting them at key usage moments.

## Workflow

### 1. Gather Context First
Before generating the sequence, collect:
- Trial length (default: 14 days)
- Product type and top 2–3 power features
- Primary user persona (role, goal)
- Conversion goal (plan name, price point)
- Any known usage milestones (e.g., "user creates first project," "user invites a teammate")

If these are not provided, make reasonable SaaS assumptions and state them explicitly at the top of the output.

### 2. Define Milestone Triggers
Map the trial journey to 5–7 behavioral milestones:
- **Day 0** — Signup (always include)
- **Day 1** — First login / first core action
- **Mid-trial** — Power feature activated or not activated
- **Day N-3** — Trial expiration warning
- **Day N** — Trial ends
- **Day N+1 to N+7** — Post-trial recovery (lapsed users)

For each milestone, classify the user state: **engaged**, **at-risk**, or **churned**.

### 3. Write Each Message
For every milestone, produce both:
- **Email**: Subject line, preview text, body (100–150 words), single CTA
- **In-app message**: Headline (8 words max), body (25 words max), button label

Message rules:
- Engaged users → show value realized, introduce upgrade benefit
- At-risk users → surface the specific feature they haven't used, offer help
- Churned/lapsed users → create urgency, offer trial extension or discount
- Every message has exactly one CTA — no secondary links
- Use the user's action data in copy ("You've already done X — here's what unlocks next")

### 4. Add Sequence Logic
After each message, specify:
- **Send condition**: triggered by event OR time-based fallback
- **Skip condition**: do not send if user has already converted or completed the milestone
- **Branch**: if no open within 48 hours, send a follow-up variant (provide the variant)

### 5. Include a Conversion Moment Checklist
List 5 specific tactics embedded in the sequence:
- Social proof placement (where and what type)
- Urgency mechanism (countdown, seat limits, price lock)
- Friction reducer (free migration, onboarding call offer, money-back guarantee)
- Personalization token used in each email
- Win-back incentive for post-trial lapsed users

## Output Format

Produce a structured document with these sections in order:

```
## Assumptions
[Bulleted list of any assumptions made]

## Trial Sequence Overview
[Table: Day | Trigger | User State | Channel | Message Name]

## Message Library
[For each message:]
### [Message Name] — Day X | [Engaged / At-Risk / Churned]
**Trigger:** [event or time condition]
**Skip if:** [condition]

**EMAIL**
Subject: [subject line]
Preview: [preview text]
Body:
[150 words max]
CTA: [button label] → [destination]

**IN-APP**
Headline: [≤8 words]
Body: [≤25 words]
Button: [label]

**Follow-up variant (if no open in 48h):**
Subject: [alternate subject]
Body: [2–3 sentences only]

## Conversion Moment Checklist
[5-item checklist with specific placement notes]

## Recommended A/B Tests
[3 high-priority test ideas with hypothesis and success metric]
```

Length: Complete sequence for a 14-day trial =
