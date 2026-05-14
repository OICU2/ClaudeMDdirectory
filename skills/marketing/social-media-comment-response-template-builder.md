---
name: social-media-comment-response-template-builder
description: >
  Builds a reusable library of on-brand response templates for common social media comment scenarios. Use when someone wants to create response templates for social media, needs help replying consistently to customer comments, asks about managing brand voice across social platforms, wants to standardize community management responses, or needs templated replies for praise, complaints, and questions.
category: marketing
tags: [social-media, community-management, brand-voice, templates, customer-engagement]
author: community
---

# Social Media Comment Response Template Builder

This skill generates a structured library of branded response templates covering praise, complaints, questions, and other common comment types so community managers can respond consistently and quickly across platforms.

## Workflow

### 1. Gather Brand Context
Before generating templates, collect:
- **Brand name** and industry
- **Brand voice descriptors** (e.g., friendly, professional, playful, empathetic)
- **Target platforms** (Instagram, X/Twitter, Facebook, LinkedIn, TikTok)
- **Any phrases or tones to avoid**
- **Response signing convention** (initials, team name, or unsigned)

If the user hasn't provided these, ask for them upfront in a single message.

### 2. Identify Comment Categories
Build templates for each of these core categories (add others if the user specifies):

- **Praise / Positive Reviews** — thank, reinforce brand affinity, invite further engagement
- **General Complaints** — acknowledge, apologize appropriately, move to resolution channel
- **Product or Service Questions** — answer directly or redirect to support/FAQ
- **Shipping or Order Issues** — empathize, provide next steps, avoid making promises
- **Negative Reviews / 1-Star Comments** — de-escalate, invite private follow-up
- **Spam or Irrelevant Comments** — neutral, non-engaging acknowledgment or ignore guidance
- **Partnership or Collaboration Requests** — professional redirect to correct contact
- **User-Generated Content / Reposts** — express gratitude, encourage community

### 3. Write the Templates
For each category:
- Write **3 variations** to avoid repetitive copy-paste patterns
- Keep each response between **1–3 sentences** for social-appropriate length
- Insert **[PLACEHOLDERS]** for variable elements: `[NAME]`, `[PRODUCT]`, `[ORDER NUMBER]`, `[EMAIL/DM LINK]`
- Reflect the brand voice descriptors provided
- Include a **platform note** if a template is better suited to a specific platform (e.g., longer for Facebook, shorter for X)

### 4. Add Usage Guidelines
After the templates, include a short guidance section:
- When to respond publicly vs. move to DM
- Recommended response time targets per platform
- One rule for handling escalating or hostile comments
- A reminder to personalize placeholders before posting

## Output Format

Produce a structured Markdown document organized as follows:

```
# [Brand Name] Social Media Response Template Library

## Brand Voice Snapshot
[2–3 bullet reminders of the brand tone]

---

## Category: [Category Name]
**When to use:** [1 sentence describing the trigger scenario]

**Template 1:**
[Response text with [PLACEHOLDERS]]

**Template 2:**
[Response text with [PLACEHOLDERS]]

**Template 3:**
[Response text with [PLACEHOLDERS]]

📌 Platform note: [if applicable]

---
[Repeat for each category]

---

## Usage Guidelines
- **Public vs. DM:** [rule]
- **Response time targets:** [per platform]
- **Escalation rule:** [one clear rule]
- **Personalization reminder:** [one sentence]
```

Deliver all categories in a single output. Use horizontal rules between categories for easy scanning. The full library should cover 6–8 categories minimum and be ready to copy into a brand playbook or Notion doc.
