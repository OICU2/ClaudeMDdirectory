---
name: marketing-automation
description: >
  Designs and implements automated marketing workflows that nurture leads through personalized sequences at scale. Use when someone says "set up a drip campaign," asks about automating their email marketing, wants to build a lead nurturing system, needs to create an automated funnel, or wants to trigger marketing actions based on user behavior.
category: marketing
tags: [automation, email-marketing, lead-nurturing, workflows, drip-campaigns]
author: community
---

# Marketing Automation Workflow Builder

This skill designs complete automated marketing workflows — including triggers, sequences, segmentation logic, and timing — that move leads through the funnel without manual intervention.

## Workflow Design Process

1. **Define the automation goal** — Identify the specific outcome: lead nurture, onboarding, re-engagement, upsell, or post-purchase. Clarify the target audience segment.

2. **Map the trigger conditions** — Specify what initiates the workflow:
   - Form submission, content download, or sign-up
   - Page visit or time-on-site threshold
   - Purchase, trial start, or inactivity period
   - Tag applied or list membership change

3. **Design the sequence structure** — Build a step-by-step flow:
   - Day 0: Immediate trigger email (welcome, confirmation, or delivery)
   - Day 2–3: Value-add content (educational, relevant to opt-in topic)
   - Day 5–7: Social proof or case study
   - Day 10–14: Soft CTA (demo, consult, trial)
   - Day 18–21: Direct offer with urgency or incentive
   - Day 30+: Re-engagement or sunset path

4. **Write each touchpoint** — For every email or message, define:
   - Subject line and preview text
   - Core message (one idea per email)
   - Single, clear CTA with linked destination
   - Personalization tokens (first name, company, behavior-based)

5. **Define branching logic** — Add conditional splits:
   - Opened vs. not opened → resend with different subject at +3 days
   - Clicked CTA → move to hot lead sequence or sales notification
   - Did not engage after N emails → move to re-engagement or unsubscribe path

6. **Set exit conditions** — Specify when contacts leave the workflow:
   - Goal completed (purchase, booking, reply)
   - Unsubscribed or marked spam
   - Manually removed by sales team
   - Entered a conflicting workflow

7. **Specify the platform implementation** — Map the workflow to the tool in use (HubSpot, ActiveCampaign, Klaviyo, Mailchimp, Drip, or custom stack), noting exact feature names and configuration steps for that platform.

## Output Format

Produce a complete automation blueprint with the following sections:

**Workflow Overview**
- Name, goal, target segment, estimated duration, and platform

**Trigger Definition**
- Exact trigger event, entry conditions, and any filters or exclusions (bulleted list)

**Sequence Table**
| Step | Day | Channel | Subject / Message | CTA | Condition to Advance |
|------|-----|---------|-------------------|-----|----------------------|
List every touchpoint in order.

**Email Copy**
For each step: subject line, preview text, full email body (150–300 words), and CTA button text + URL placeholder.

**Branching Logic Diagram**
Text-based flowchart showing all conditional paths, splits, and exit points.

**Platform Setup Checklist**
Numbered steps to build the workflow in the specified tool, including list names, tag names, goal tracking configuration, and A/B test recommendations.

**KPIs to Track**
Open rate, click rate, conversion rate, and unsubscribe rate benchmarks for each stage, with recommended review cadence.
