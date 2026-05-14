---
name: account-based-outreach-sequence-personalizer
description: >
  Generates account-specific outreach sequence variants by injecting company news, hiring signals, and product fit evidence into each step of a standard sales cadence. Use when someone says "personalize my outreach sequence for this account," asks to "make my cadence more relevant to a specific company," wants to "customize my email sequence with account intelligence," needs to "build a targeted outreach flow for a prospect," or is looking to "enrich my sales cadence with company-specific signals."
category: sales
tags: [account-based-marketing, outreach, personalization, sales-cadence, prospecting]
author: community
---

# Account-Based Outreach Sequence Personalizer

This skill takes a standard multi-step sales cadence and rewrites each touchpoint with account-specific context—company news, hiring signals, tech stack, and product fit evidence—so every step feels researched and relevant rather than templated.

## Personalization Workflow

### Step 1: Gather Account Intelligence Inputs
Before personalizing, collect or prompt the user for:
- **Company name and URL**
- **Target persona** (title, department, seniority)
- **Standard cadence to personalize** (paste existing steps or use a default 5-step sequence)
- **Known signals** (any of the following):
  - Recent news (funding, product launches, leadership changes, acquisitions)
  - Hiring signals (open roles, headcount growth in specific departments)
  - Tech stack or tool usage (from LinkedIn, job posts, G2, BuiltWith)
  - Trigger events (earnings calls, rebrands, expansions, awards)
  - Mutual connections or shared content

If the user provides a company name but no signals, generate a research checklist they should complete before sending.

### Step 2: Map Signals to Cadence Steps
Assign each signal to the most relevant touchpoint based on recency and intent:
- **Step 1 (Email 1):** Lead with the strongest, most timely signal. This is the hook—use a single specific trigger (e.g., a funding announcement or a new VP hire) as the opening line.
- **Step 2 (LinkedIn connection or follow-up email):** Reference a piece of content the prospect or company has published, or a hiring pattern that implies a strategic priority.
- **Step 3 (Email 2 / value email):** Connect a company initiative or pain point to a specific product capability. Use their language (pulled from job descriptions, press releases, or LinkedIn posts).
- **Step 4 (Breakup or bump email):** Reference a competitive or market pressure the company faces, positioning your solution as timely.
- **Step 5 (Phone/voicemail script):** Synthesize the top two signals into a 20-second voicemail that sounds like a warm, informed call—not a cold pitch.

### Step 3: Personalization Rules
- **One signal per touchpoint.** Do not stack multiple news items in a single email—it reads as a data dump.
- **Lead with them, not you.** The first sentence of every step must reference the prospect's world, not your product.
- **Mirror their language.** Pull exact phrases from job postings or press releases. If they say "operational excellence," use that phrase—not "efficiency."
- **Avoid vague flattery.** "I saw you've been growing fast" is not personalization. Cite the specific data point (e.g., "You've opened 12 SDR roles in Q1 alone").
- **Keep subject lines under 8 words** and tie them directly to the signal used in that step.
- **CTA must match the signal intensity.** A minor signal warrants a soft CTA (reply, not a demo request). A high-intent signal can support a direct ask.

### Step 4: Flag Missing Signals
If fewer than two signals are available, flag the gaps explicitly and suggest where to find them:
- LinkedIn Jobs → hiring volume and department priorities
- LinkedIn Posts/Activity → recent topics the prospect cares about
- Crunchbase/PitchBook → funding, headcount, investors
- Company newsroom or PR feed → product launches, partnerships
- G2, BuiltWith, Stackshare → tech stack

## Output Format

Produce a complete personalized outreach sequence with the following structure for each step:

---

**Step [N]: [Channel] — [Signal Used]**
