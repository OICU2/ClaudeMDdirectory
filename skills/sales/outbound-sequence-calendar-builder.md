---
name: outbound-sequence-calendar-builder
description: >
  Designs a structured, day-by-day multi-channel outreach calendar for a defined prospect segment,
  mapping each touchpoint's channel, message angle, and timing interval. Use when someone says
  "build me an outreach sequence," asks about "how to structure a prospecting cadence," wants to
  "plan a multi-touch campaign for a segment," needs to "map out call and email timing for outbound,"
  or says "create a contact schedule for my sales reps."
category: sales
tags: [outbound, sequencing, cadence, multi-channel, prospecting]
author: community
---

# Outbound Sequence Calendar Builder

Generates a complete day-by-day outreach calendar across calls, emails, and social channels for a specific prospect segment, including touch type, message angle, and spacing intervals for each step.

## Workflow

### Step 1: Gather Segment Context
Before building, confirm or prompt for:
- **Prospect segment**: Role, industry, company size, pain point focus
- **Sequence length**: Total duration (default 30 days if unspecified)
- **Goal of sequence**: Book a meeting, drive a demo, re-engage, etc.
- **Rep resources**: Can they call? Which social channels (LinkedIn, Twitter/X)?
- **Tone**: Enterprise formal, SMB conversational, startup direct

If any of these are missing, ask for them before proceeding.

### Step 2: Apply Cadence Architecture Rules
Build the sequence using these proven structural rules:
- **Days 1–3**: High-intent opening — lead with a call attempt + personalized email same day or next
- **Days 4–7**: Provide value — share a resource, insight, or case study via email; connect on LinkedIn
- **Days 8–14**: Follow-up loop — alternate call attempts with short-form emails referencing prior touches
- **Days 15–21**: Social proof and urgency — reference a peer company, result, or time-sensitive angle
- **Days 22–30**: Breakup sequence — reduce frequency, send a final "closing the loop" message with a low-friction CTA
- Never stack two call attempts on consecutive days
- Space emails at least 2–3 days apart unless explicitly part of a drip pair
- LinkedIn touches should be used 2–4 times max across the full sequence (connect request, comment, DM)

### Step 3: Define Each Touch
For every calendar day with an activity, specify:
1. **Day number**
2. **Channel**: Call / Email / LinkedIn / Twitter
3. **Touch type**: Cold call, voicemail, intro email, follow-up email, value email, breakup email, LinkedIn connect, LinkedIn DM, social comment
4. **Message angle**: The specific angle or hook for that touch (e.g., "pain point led," "competitor mention," "ROI stat," "mutual connection," "case study," "no-reply breakup")
5. **Timing note**: Time of day recommendation where relevant (e.g., Tuesday–Thursday calls before 10am or after 4pm)
6. **Sample subject line or talk track opener**: One concrete example line

### Step 4: Add Sequence Logic Notes
After the calendar, include:
- **Branch logic**: What to do if prospect opens/clicks email vs. no engagement
- **Pause triggers**: When to pause the sequence (reply received, out-of-office, not the right contact)
- **Success metric**: What a completed sequence looks like and when to recycle vs. archive

## Output Format

Produce the calendar as a structured table followed by supporting notes:

---

**Sequence:** [Segment Name] Outreach Calendar
**Goal:** [Meeting/Demo/Re-engagement]
**Duration:** [X days] | **Total Touches:** [N]

| Day | Channel | Touch Type | Message Angle | Timing Note | Sample Opener / Subject Line |
|-----|---------|------------|---------------|-------------|------------------------------|
| 1   | Call    | Cold call  | Pain point led | Tue–Thu, 8–10am | "I work with [role] at [ICP companies] dealing with [pain]…" |
| 1   | Email   | Intro email | Pain point led | Send within 2 hrs of call | Subject: "Quick thought on [pain point]" |
| 3   | LinkedIn | Connect request |
