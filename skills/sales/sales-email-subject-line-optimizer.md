---
name: sales-email-subject-line-optimizer
description: >
  Analyzes reply rate patterns and generates high-converting subject line variants for cold and follow-up sales emails. Use when someone wants to improve email open rates, asks how to write better subject lines for outreach, or needs to A/B test sales email subject lines. Also activates when a user shares a subject line that isn't performing well or wants to increase responses to cold or follow-up emails.
category: sales
tags: [email, cold-outreach, copywriting, a-b-testing, conversion]
author: community
---

# Sales Email Subject Line Optimizer

This skill analyzes existing or draft subject lines and generates multiple high-converting variants optimized for cold outreach and follow-up emails, using proven reply-rate patterns.

## Subject Line Analysis and Generation Workflow

1. **Collect context before generating**
   - Ask for the target audience (job title, industry, company size) if not provided
   - Ask for the email's core value proposition or goal (book a call, demo, referral, etc.)
   - Ask whether it's a cold email or a follow-up (sequence step number if known)
   - Ask for any existing subject lines and their performance data if available

2. **Diagnose existing subject lines (if provided)**
   - Flag lines that are too long (over 50 characters)
   - Flag vague or generic language ("quick question", "following up", "touching base")
   - Flag lines that sound like mass marketing or spam triggers (ALL CAPS, excessive punctuation, "FREE", "limited time")
   - Identify missing personalization hooks or specificity

3. **Apply high-converting subject line patterns**
   - **Curiosity gap**: Tease a specific insight without revealing it ("Why [Competitor] stopped using X")
   - **Direct personalization**: Use company name, role, or recent trigger event ("[Company]'s Q3 hiring push")
   - **Outcome-first**: Lead with the result the prospect wants ("Cut SDR ramp time by 3 weeks")
   - **Short and disruptive**: 3–6 word lines that break pattern ("Still worth a look?", "Idea for [Name]")
   - **Social proof hook**: Name-drop a relevant peer or competitor ("How [Similar Company] handled this")
   - **Question format**: Pose a problem they recognize ("Struggling to hit pipeline targets?")
   - **Re-engagement hook** (for follow-ups): Reference prior context without sounding needy ("Re: my last note")

4. **Generate variants**
   - Produce 6 subject line variants per request
   - Cover at least 3 different pattern types from step 3
   - Include one short variant (under 30 characters) and one personalization-heavy variant
   - For follow-up emails, include one that references the prior email thread naturally

5. **Score and rank each variant**
   - Rate each on: Specificity (1–5), Curiosity (1–5), Personalization potential (1–5)
   - Flag the top 2 recommended variants with a brief reason

## Output Format

Produce the following structure for every request:

---

**Diagnosis** (if an existing subject line was provided):
- 2–4 bullet points identifying specific weaknesses

**Subject Line Variants:**

| # | Subject Line | Pattern Type | Specificity | Curiosity | Personalization |
|---|-------------|-------------|-------------|-----------|-----------------|
| 1 | [subject line] | [pattern name] | /5 | /5 | /5 |
| 2 | ... | | | | |
| 3–6 | ... | | | | |

**Top Picks:**
- ⭐ **#X** — [One sentence explaining why this is likely to perform best for this audience and goal]
- ⭐ **#X** — [One sentence explaining the alternate use case or audience segment it suits]

**Personalization tip:**
One actionable note on how to customize the top pick using prospect-specific data (e.g., recent funding, job change, tech stack).

---

Keep total output under 400 words. Do not include generic email writing advice unrelated to subject lines.
