---
name: prospect-linkedin-profile-to-opener-builder
description: >
  Converts a prospect's LinkedIn profile into a highly personalized cold outreach opening line by analyzing their role, recent activity, and career signals. Use when someone shares a LinkedIn profile and wants a cold email opener, needs a personalized first line for outreach, wants to craft a relevant icebreaker based on someone's background, or asks how to start a cold message to a specific prospect. Also activates when someone says "write me an opener for this person" or "help me reach out to this lead."
category: sales
tags: [cold-outreach, personalization, linkedin, sales, prospecting]
author: community
---

# LinkedIn Profile to Cold Outreach Opener Builder

This skill analyzes a prospect's LinkedIn profile details and generates a personalized, contextually relevant opening line for cold outreach that references their specific role, recent activity, or career signals.

## Workflow

1. **Extract key profile signals** from the provided LinkedIn information:
   - Current title and company
   - Recent posts, shares, or comments (last 30–90 days)
   - Career transitions or promotions (new role, new company)
   - Skills, endorsements, or featured content
   - Education, mutual connections, or shared groups
   - Company news (funding, hiring spree, product launch)

2. **Prioritize signal hierarchy** in this order:
   - Recent post or public activity (highest relevance — they're actively thinking about it)
   - Career change or promotion (timely and personal)
   - Company milestone or news (external trigger)
   - Role-specific pain point based on title (fallback if no activity signals exist)

3. **Select the opener angle** based on the top signal:
   - **Activity-based**: Reference a specific post, comment, or topic they engaged with
   - **Transition-based**: Acknowledge a new role or challenge that comes with it
   - **Company-based**: Tie into something happening at their organization
   - **Role-based**: Speak directly to a known pain point for their function and seniority level

4. **Write the opener** following these rules:
   - Start with "I" or the prospect's first name — never with a compliment like "I love your work"
   - Be specific — name the actual post topic, company name, role title, or initiative
   - Keep it to 1–2 sentences maximum
   - Do not pitch in the opener — no product mention, no ask
   - Sound human, not templated — avoid phrases like "I came across your profile" or "I noticed you're in [industry]"
   - End with a natural segue that sets up the next sentence without asking a question yet

5. **Generate 3 opener variations** using different signals or angles if multiple strong signals exist.

6. **Flag weak inputs**: If the profile lacks sufficient detail (no activity, vague title, no company info), state what additional information would improve personalization rather than producing a generic opener.

## Output Format

Produce the following structure:

**Top Signal Identified:** [One sentence describing the strongest personalization hook found]

**Opener Variations:**

1. **[Angle: e.g., Recent Post / Career Transition / Company News]**
   "[The opening line — 1 to 2 sentences]"

2. **[Angle]**
   "[The opening line]"

3. **[Angle]**
   "[The opening line]"

**Recommended Pick:** Variation [#] — [One sentence explaining why this one is strongest for this prospect]

**If profile data is thin:** List 2–3 specific pieces of information that, if provided, would unlock a stronger opener.
