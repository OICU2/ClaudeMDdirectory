---
name: ideal-follow-up-timing-model
description: >
  Analyzes historical deal data to recommend optimal follow-up intervals segmented by deal size, industry vertical, and buyer persona. Use when someone asks "when should I follow up," wants to know the best time to re-engage a prospect, is trying to build a follow-up cadence, or needs to prioritize outreach timing across a pipeline. Also activates when a rep asks why deals go cold or how long to wait between touchpoints.
category: sales
tags: [follow-up, cadence, deal-velocity, pipeline, outreach-timing]
author: community
---

# Ideal Follow-Up Timing Model

This skill builds a data-driven follow-up timing framework by analyzing deal patterns across size, industry, and persona to tell reps exactly when to reach out at each stage.

## Timing Model Workflow

### Step 1: Gather Deal Context
Ask the user for the following inputs (or extract from data they provide):
- **Deal size tier**: SMB (<$10K), Mid-Market ($10K–$100K), Enterprise (>$100K)
- **Industry vertical**: e.g., SaaS, Healthcare, Manufacturing, Financial Services, Retail
- **Buyer persona**: e.g., Champion/End User, Economic Buyer, Procurement, C-Suite
- **Current deal stage**: Discovery, Demo, Proposal, Negotiation, Legal/Procurement
- **Last interaction type**: Cold outreach, inbound reply, demo completed, proposal sent, verbal yes

### Step 2: Apply Timing Rules by Segment

**By Deal Size:**
- SMB: Follow up within 24–48 hours at every stage; decisions move fast
- Mid-Market: 2–4 business days between touchpoints; allow internal discussion time
- Enterprise: 5–10 business days; account for committee reviews and procurement cycles

**By Industry:**
- SaaS/Tech: Aggressive cadence acceptable; 1–3 days between touches
- Healthcare/Financial Services: Conservative; 5–7 days; compliance reviews slow decisions
- Manufacturing/Industrial: 7–10 days; procurement cycles are long and formal
- Retail: Stage-dependent; compress timing near fiscal quarter ends (Q2, Q4)

**By Buyer Persona:**
- Champion/End User: Follow up in 1–2 days; they want momentum and need ammunition
- Economic Buyer: 3–5 days; respect their time, make every touch high-value
- Procurement: 5–7 days; send structured, document-heavy follow-ups
- C-Suite: 7–14 days; one high-signal touch only unless they initiate

**By Last Interaction Type:**
- Post-cold outreach (no reply): Day 3, Day 7, Day 14, then monthly
- Post-inbound reply or meeting booked: Within 4 hours to confirm and add value
- Post-demo: Within 24 hours with recap + next step
- Post-proposal: 48–72 hours; then escalate cadence if no response
- Post-verbal yes: Same day follow-up with contract or next step; no delays

### Step 3: Identify Deal Risk Windows
Flag deals as at-risk of going cold based on these thresholds:
- SMB: No activity for 7+ days after proposal = cold risk
- Mid-Market: No activity for 14+ days after proposal = cold risk
- Enterprise: No activity for 21+ days at any post-proposal stage = cold risk

Recommend a re-engagement strategy when a deal crosses its risk threshold:
- Change the medium (email → phone → LinkedIn → video message)
- Introduce a new value trigger (case study, ROI calc, exec introduction)
- Create urgency with a legitimate anchor (pricing expiry, cohort deadline, implementation slots)

### Step 4: Build the Recommended Cadence
Produce a sequenced touchpoint schedule from current stage through close, with:
- Day number relative to last touch
- Recommended channel (email, call, LinkedIn, video)
- Message focus/hook for each touchpoint

## Output Format

Produce a structured follow-up timing recommendation with these sections:

**Deal Profile Summary**
- One-line summary of the deal segment (size + industry + persona)

**Recommended Follow-Up Cadence**
A numbered table or list:
| Touch # | Day | Channel | Focus |
|---------|-----|---------|-------|
