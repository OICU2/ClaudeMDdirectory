---
name: cold-call-voicemail-script-generator
description: >
  Generates concise, compelling voicemail scripts tailored to a specific prospect persona that prompt a callback or follow-up email reply. Use when someone needs to leave a voicemail for a prospect, wants to craft a sales voicemail message, asks how to follow up with a cold lead by phone, needs a script for reaching out to a new contact, or wants to improve their cold outreach voicemail.
category: sales
tags: [cold-calling, voicemail, prospecting, sales-scripts, outreach]
author: community
---

# Cold Call Voicemail Script Generator

This skill generates tailored, concise voicemail scripts for cold outreach that create curiosity and drive a specific follow-up action, activated whenever someone needs to craft a sales voicemail for a prospect.

## Voicemail Script Generation Workflow

### Step 1: Gather Prospect Context
Before generating, identify or ask for:
- **Prospect name and title/role** (e.g., "Sarah, VP of Operations")
- **Company name and industry**
- **Primary pain point or trigger event** (e.g., recent funding, hiring surge, known challenge)
- **Your name, company, and one-line value proposition**
- **Desired call-to-action** (callback, reply to email, or both)

If the user provides partial info, generate the script using reasonable assumptions and flag them clearly.

### Step 2: Apply These Voicemail Rules
- **Duration target:** 20–30 seconds when read aloud (roughly 60–80 words)
- **Open with their name** — never your own name first
- **State your name and company in one short sentence** — do not pitch yet
- **Reference a specific, relevant hook** — a pain point, trigger event, or mutual connection; never use generic openers like "I help companies like yours..."
- **Deliver one concrete, specific benefit or insight** — avoid vague claims
- **End with a single, low-friction CTA** — either request a callback with a specific time window OR mention a follow-up email they should watch for; never both
- **No filler phrases:** eliminate "just," "quickly," "I know you're busy," "hope this finds you well"
- **Tone:** confident, peer-to-peer — not salesy or deferential

### Step 3: Generate Two Variants
Produce two versions:
1. **Callback-focused** — ends with a specific callback request and your number
2. **Email bridge** — ends by directing them to watch for your follow-up email with a specific subject line

### Step 4: Add a Read-Aloud Cue
Below each script, add the estimated spoken duration in seconds (use ~130 words per minute as the baseline).

## Output Format

```
## Voicemail Script: [Prospect Name] — [Company]

### Variant A: Callback-Focused
[Full script, 60–80 words]

⏱ Estimated read time: ~[X] seconds

---

### Variant B: Email Bridge
[Full script, 60–80 words]

⏱ Estimated read time: ~[X] seconds

---

### 📧 Suggested Follow-Up Email Subject Line (for Variant B):
[Subject line that matches the voicemail hook]

---

### Assumptions Made:
- [List any details assumed due to missing input]

### Customization Tips:
- [1–2 quick swaps the user can make to personalize further]
```
