---
name: subscriber-re-permission-campaign-design
description: >
  Designs a structured re-permission email campaign to re-confirm consent from dormant or unengaged subscribers while protecting sender reputation and minimizing list churn. Use when someone says their email list has gone cold, asks about reactivating inactive subscribers, wants to clean up their email list properly, needs to comply with consent regulations for old contacts, or is worried about deliverability from unengaged segments.
category: marketing
tags: [email-marketing, deliverability, consent, list-hygiene, re-engagement]
author: community
---

# Subscriber Re-Permission Campaign Design

This skill designs a complete re-permission email campaign sequence with copy, timing, segmentation logic, and sunset rules to recover dormant subscribers while protecting deliverability and legal compliance.

## Campaign Design Workflow

### 1. Gather Context First
Ask for these inputs before generating anything:
- Definition of "dormant" for this list (e.g., no opens/clicks in 6, 12, or 18+ months)
- Email platform in use (affects segmentation and automation logic)
- Applicable regulations (GDPR, CAN-SPAM, CASL, or none specified)
- Brand tone (formal, conversational, playful)
- Primary value proposition or incentive available (discount, exclusive content, nothing)
- Current list size of dormant segment

### 2. Segment the Dormant List
Define three tiers before writing any copy:
- **Tier 1 — Soft dormant:** No engagement in 6–12 months. Send a lighter re-engagement first, not a full re-permission ask.
- **Tier 2 — Hard dormant:** No engagement in 12–24 months. Full re-permission sequence required.
- **Tier 3 — Deep dormant:** No engagement in 24+ months or regulatory risk contacts. Treat as unconfirmed; suppress unless explicit re-permission is granted.

### 3. Build the Email Sequence
Design a 3-email sequence with defined send intervals:

**Email 1 — The Soft Check-In (Day 0)**
- Subject line options: curiosity-driven or value-led, no urgency yet
- Body: Acknowledge the silence without guilt-tripping. Remind them of the value they signed up for. Single CTA: "Yes, keep me subscribed" (confirmed opt-in click).
- Secondary CTA: Update preferences link
- No unsubscribe pressure — keep tone warm

**Email 2 — The Direct Ask (Day 7)**
- Subject line options: direct and honest ("Should we stay in touch?")
- Body: Be transparent that this is a consent check. State what happens if they don't respond. Reiterate core value. Same primary CTA.
- Add social proof or content highlight to remind them why they subscribed

**Email 3 — The Final Notice (Day 14)**
- Subject line: Clear finality ("This is our last email if we don't hear from you")
- Body: Short, respectful, no emotional manipulation. State the exact date they'll be removed. One CTA only: confirm to stay.
- Optional: Offer a preference center as a middle path

### 4. Define Sunset Rules
- Anyone who does not click confirm after Email 3 → suppress from all marketing sends immediately
- Do not delete records — tag as "re-permission failed [date]" for compliance records
- For GDPR/CASL contacts: treat non-response as withdrawal of consent; document accordingly
- Set a suppression review date 12 months out to decide on permanent removal

### 5. Post-Campaign Actions
- Report on: re-permission rate, unsubscribe rate, hard bounces surfaced, list size delta
- Warm up remaining confirmed list by reducing send frequency for 2–4 weeks
- Set up ongoing engagement scoring to prevent the segment from growing back

## Output Format

Produce the following in order:

1. **Segmentation Summary** — A short table defining Tier 1/2/3 based on client's dormancy window
2. **Campaign Sequence Plan** — A timeline table showing Email #, Send Day, Goal, and CTA
3. **Email Copy for Each of the 3 Emails** — Full subject line (3 options each), preview text, body copy, and CTA button label. Formatted as distinct blocks.
4. **Sunset Protocol** — Bullet list of exact suppression and
