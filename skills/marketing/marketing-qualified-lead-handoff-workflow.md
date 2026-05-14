---
name: marketing-qualified-lead-handoff-workflow
description: >
  Defines the criteria, timing, and documentation process for transferring marketing-qualified leads
  to the sales team. Use when someone asks how to hand off leads to sales, wants to define MQL
  criteria, needs to document a lead transfer process, is building a sales-marketing alignment
  workflow, or wants to know when a lead is ready for sales outreach.
category: marketing
tags: [lead-generation, sales-alignment, mql, crm, lead-scoring]
author: community
---

# Marketing-Qualified Lead Handoff Workflow

This skill generates a structured MQL-to-SQL handoff process including scoring criteria, transfer timing, documentation requirements, and sales notification protocols.

## MQL Handoff Workflow

### Step 1: Define MQL Scoring Criteria
Establish a lead score threshold (typically 40–100 points) based on:
- **Demographic fit** (job title, company size, industry): 5–25 points
- **Behavioral signals** (page visits, content downloads, webinar attendance, email clicks): 5–10 points each
- **Intent signals** (pricing page visit, demo request, free trial signup): 15–30 points
- **Engagement recency** (activity within last 30 days): +10 point multiplier

Specify a minimum score (e.g., 65+) that triggers MQL status.

### Step 2: Apply Disqualification Rules
A lead does NOT qualify regardless of score if:
- Company is below minimum employee count or revenue threshold
- Lead is a competitor domain
- Contact is a student, consultant, or non-decision-maker (if targeting enterprise)
- Lead has previously been disqualified by sales within the last 90 days

### Step 3: Trigger the Handoff
Handoff occurs automatically when:
- Lead reaches the defined score threshold AND
- At least one high-intent action is recorded (demo request, pricing visit, contact form)

Timing rule: Sales must receive the lead within **4 business hours** of MQL status being assigned.

### Step 4: Document the Lead Record
Before transfer, the CRM record must include:
- Full contact and company information (name, title, company, size, industry, LinkedIn)
- Lead source and original acquisition campaign
- Complete behavioral history (pages visited, assets downloaded, emails opened)
- Lead score breakdown by category
- Assigned sales rep (based on territory or round-robin rules)
- Handoff timestamp and marketing owner name

### Step 5: Notify Sales
Send an internal notification (Slack, email, or CRM task) containing:
- Lead name, company, and title
- Score and top 3 qualifying actions
- Recommended talk track or personalization hook based on content consumed
- Link to full CRM record
- SLA reminder: first outreach within **24 hours**

### Step 6: Define SLA and Feedback Loop
- Sales must accept or reject the MQL within **48 hours**
- If rejected, sales must select a rejection reason (bad fit, timing, duplicate, etc.)
- Marketing reviews rejections weekly to recalibrate scoring criteria
- MQL-to-SQL conversion rate is tracked monthly as a shared KPI

## Output Format

Produce a structured handoff document with these sections:

1. **MQL Criteria Summary** — bullet list of scoring rules and threshold
2. **Disqualification Rules** — short bulleted list
3. **Handoff Trigger Conditions** — 2–3 sentences specifying exact conditions
4. **CRM Checklist** — numbered list of required fields before transfer
5. **Sales Notification Template** — ready-to-use Slack or email message with placeholders (e.g., `[LEAD NAME]`, `[COMPANY]`, `[TOP ACTION]`)
6. **SLA Table** — markdown table with columns: Action | Owner | Deadline
7. **Feedback Loop Process** — 3–4 bullet points on rejection handling and scoring refinement

Length: 400–600 words. Use markdown headers, bullet lists, and one table. No prose padding.
