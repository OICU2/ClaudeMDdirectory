---
name: linkedin-outreach-personalization-builder
description: >
  Drafts personalized LinkedIn connection requests and follow-up messages by extracting
  relevant signals from a prospect's profile, recent posts, and activity. Use when someone
  wants to reach out to a LinkedIn prospect, needs to write a cold connection request,
  is following up with a LinkedIn contact, or wants to personalize outreach for a specific person.
  Activate when someone says "help me message this person on LinkedIn," "write a connection
  request for," or "I want to reach out to someone I found on LinkedIn."
category: sales
tags: [linkedin, outreach, personalization, prospecting, messaging]
author: community
---

# LinkedIn Outreach Personalization Builder

This skill drafts highly personalized LinkedIn connection requests and follow-up message sequences by analyzing prospect signals — including job title, company, recent posts, shared connections, and career history — and weaving them into concise, authentic-sounding outreach.

## Workflow

### Step 1: Gather Prospect Signals
Ask the user to provide any of the following (use whatever is available):
- Prospect's name, current role, and company
- Recent LinkedIn posts or activity (copy/paste text if possible)
- Shared connections or groups
- Career history highlights (promotions, company changes, notable past employers)
- Awards, publications, or speaking engagements mentioned on their profile
- The user's own role, company, and reason for reaching out

### Step 2: Identify the Best Personalization Hook
Prioritize signals in this order:
1. **Recent post or comment** — most timely and shows active attention
2. **Specific career event** — new role, promotion, company milestone, or funding news
3. **Shared connection or experience** — mutual contact, alma mater, past employer
4. **Published content or public achievement** — article, award, conference talk
5. **Company-level signal** — hiring trend, product launch, press mention

Use only one primary hook per message. Do not stack multiple signals — it reads as scraping.

### Step 3: Draft the Connection Request
Apply these rules:
- **300 character limit** (LinkedIn's cap)
- Open with the specific hook — name the post, event, or detail directly
- State one clear, genuine reason for connecting
- No pitch, no ask for a call, no "I'd love to pick your brain"
- End with a low-friction close ("would love to connect" or similar)

### Step 4: Draft the Follow-Up Sequence (if requested)
Write a 2-message follow-up sequence for after the connection is accepted:

**Message 1 (Day 2–3 after connecting):**
- 3–4 sentences max
- Reference the original hook briefly, then transition to value
- Offer something concrete: an insight, a resource, a relevant observation about their industry
- Soft CTA: invite a reaction or opinion, not a meeting

**Message 2 (Day 7–10 if no reply):**
- 2–3 sentences
- New angle — do not repeat the same hook
- Direct but low-pressure ask (15-minute call, quick question, or specific resource offer)
- Make it easy to say yes or no

### Step 5: Tone Calibration
Ask the user: "Should the tone be formal, conversational, or peer-level casual?"
Default to **peer-level casual** unless the prospect is a C-suite executive (shift to polished professional) or the user is in a highly formal industry like law or finance.

## Output Format

Produce a clearly labeled block for each message:

---

**CONNECTION REQUEST** *(X/300 characters)*
[Message text]

---

**FOLLOW-UP MESSAGE 1** *(Send 2–3 days after connecting)*
[Message text]

---

**FOLLOW-UP MESSAGE 2** *(Send 7–10 days after connecting, if no reply)*
[Message text]

---

**PERSONALIZATION NOTES**
- Hook used: [signal name and why it was chosen]
- Tone applied: [formal / conversational / peer-level casual]
- Suggested send time: [e.g., Tuesday–Thursday, 8–10am prospect's local time]
- If stronger signals are available: [flag what additional info would improve personalization]

---

Each message must be immediately copy-pasteable. No placeholders like [NAME] left unfilled.
