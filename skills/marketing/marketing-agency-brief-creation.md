---
name: marketing-agency-brief-creation
description: >
  Generates a comprehensive agency briefing document for external vendor engagements, covering objectives, target audience, budget, deliverables, and success metrics. Use when someone needs to brief a marketing agency, wants to onboard an external vendor, asks how to communicate campaign requirements to an outside partner, or needs to prepare documentation for an agency pitch or RFP response.
category: marketing
tags: [agency-brief, vendor-management, campaign-planning, rfp, marketing-strategy]
author: community
---

# Marketing Agency Brief Creation

This skill produces a structured, professional agency briefing document that gives external marketing vendors everything they need to understand scope, expectations, and success criteria before work begins.

## Brief Creation Workflow

1. **Gather project context** — Before drafting, ask for or extract: company name, campaign name or initiative, primary goal, timeline, and approximate budget range. If any are missing, prompt the user with targeted questions before proceeding.

2. **Define the objective section** — State the single primary business objective in one sentence. List 2–4 supporting marketing objectives that ladder up to it. Frame objectives using outcome language (e.g., "increase qualified leads by 30%"), not activity language (e.g., "run social ads").

3. **Profile the target audience** — Include primary and secondary audience segments. For each segment, specify: demographics, psychographics or behavioral traits, pain points, and where they consume media. If the user has not provided this, derive reasonable defaults from the industry context and flag them for review.

4. **Scope deliverables explicitly** — List every expected output: asset types, quantities, formats, and platforms. Distinguish between required deliverables and optional stretch deliverables. Note ownership and usage rights expectations.

5. **Specify budget and timeline** — State total budget or budget range. Break down how budget should be allocated across production, media, and fees if known. Provide a project timeline with key milestones: kickoff, concepts due, revisions, final delivery, campaign launch.

6. **Set approval and revision process** — Name the internal point of contact and decision-maker. State the number of revision rounds included. Specify the review turnaround expectation.

7. **Define success metrics** — List 3–5 KPIs tied directly to the objectives. For each KPI, include: metric name, measurement method, target value or benchmark, and reporting cadence.

8. **Add mandatory inclusions** — Always include: brand guidelines reference or note that they will be provided, competitive restrictions or sensitivities, legal or compliance requirements, and any existing assets the agency should use or avoid.

## Output Format

Produce a single, ready-to-send Markdown document with the following sections in order:

```
# Agency Brief: [Campaign/Project Name]
**Client:** [Company Name]
**Date:** [Date]
**Point of Contact:** [Name, Title, Email]

---

## 1. Project Overview
[2–3 sentence summary of the initiative and why it matters now]

## 2. Objectives
**Primary Business Objective:**
**Supporting Marketing Objectives:**
- ...

## 3. Target Audience
**Primary Segment:** [Name]
- Demographics:
- Psychographics/Behaviors:
- Pain Points:
- Media Consumption:

**Secondary Segment (if applicable):** [Name]
- ...

## 4. Deliverables
| Deliverable | Quantity | Format/Platform | Notes |
|---|---|---|---|

## 5. Budget & Timeline
**Total Budget:** $[X] or [$X–$Y range]
**Budget Allocation (if known):**
- Production: 
- Media: 
- Agency Fees: 

**Key Milestones:**
| Milestone | Date |
|---|---|

## 6. Approval Process
- Internal POC: 
- Decision Maker: 
- Revision Rounds: 
- Review Turnaround: 

## 7. Success Metrics
| KPI | How Measured | Target | Reporting Cadence |
|---|---|---|---|

## 8. Brand & Compliance Requirements
- Brand Guidelines: 
- Competitive Restrictions: 
- Legal/Compliance Notes: 
- Existing Assets: 

---
*Questions? Contact [POC name] at [email].*
```

Target length: 400–700 words in the completed brief. Use plain language. Every field must be filled or
