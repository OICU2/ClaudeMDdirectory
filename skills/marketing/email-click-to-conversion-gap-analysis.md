---
name: email-click-to-conversion-gap-analysis
description: >
  Analyzes the post-click journey from email campaigns to identify where potential customers drop off before converting. Use when someone says "my email clicks aren't converting," asks why their landing page isn't working after email traffic, wants to understand the gap between click-through rate and conversion rate, notices high CTR but low revenue from email campaigns, or needs to diagnose friction in their email-to-purchase funnel.
category: marketing
tags: [email-marketing, conversion-optimization, funnel-analysis, landing-pages, cro]
author: community
---

# Email Click-to-Conversion Gap Analysis

This skill maps the full post-click journey from email to final conversion, pinpointing specific friction points, mismatches, and drop-off stages that prevent email clicks from becoming customers.

## Analysis Workflow

### Step 1: Establish Baseline Metrics
Request or identify the following data points:
- Email click-through rate (CTR)
- Landing page bounce rate for email traffic
- Time on page / scroll depth for email visitors
- Form start rate vs. form completion rate
- Cart add rate (if e-commerce)
- Final conversion rate
- Calculate the **conversion gap**: (clicks - conversions) / clicks × 100

### Step 2: Audit Message Match
Compare the email creative against the landing page:
- Does the headline on the landing page mirror the email's primary promise or offer?
- Is the CTA wording in the email consistent with the CTA on the landing page?
- Does the visual design (colors, imagery, tone) carry continuity from email to page?
- Is the specific offer, discount, or urgency element from the email prominently visible above the fold?
- Flag any **expectation mismatches** — these cause immediate bounces

### Step 3: Map the Post-Click Funnel Stages
Break the journey into discrete stages and assign drop-off likelihood to each:

1. **Email → Landing Page** — Mismatched messaging, slow load time, mobile rendering issues
2. **Landing Page → Engagement** — Poor above-the-fold clarity, no visible value proposition, distracting navigation
3. **Engagement → Intent Signal** — Weak social proof, missing trust elements, unclear next step
4. **Intent Signal → Form/Cart** — Too many fields, required account creation, hidden pricing
5. **Form/Cart → Conversion** — Unexpected costs, limited payment options, security concerns, complex checkout

### Step 4: Identify Friction Categories
For each stage, categorize friction as one of:
- **Message friction** — Promise in email doesn't match page reality
- **UX friction** — Design, speed, or usability barriers
- **Trust friction** — Missing credibility signals (reviews, guarantees, badges)
- **Cognitive friction** — Too many choices, unclear value, overwhelming content
- **Technical friction** — Broken elements, slow load, mobile incompatibility

### Step 5: Prioritize Gaps by Impact
Score each identified issue:
- **Severity** (1–3): How badly does this block conversion?
- **Volume** (1–3): How many users hit this friction point?
- **Effort to fix** (1–3): How complex is the remediation?
- Priority score = (Severity × Volume) / Effort
- Rank all issues by priority score

### Step 6: Generate Hypotheses
For each high-priority gap, write a testable hypothesis:
> "If we [change X], then [metric Y] will improve by [expected direction], because [rationale]."

---

## Output Format

Produce a structured gap analysis report with the following sections:

**1. Gap Summary (2–3 sentences)**
State the overall conversion gap percentage, the most critical drop-off stage, and the primary friction category causing loss.

**2. Funnel Stage Breakdown (table)**
| Stage | Drop-off Estimate | Primary Friction Type | Severity |
|---|---|---|---|
| Email → Landing Page | % or High/Med/Low | Message/UX/Trust/etc. | 1–3 |
*(one row per stage)*

**3. Top Friction Points (bulleted list)**
List the 3–5 highest-priority issues with:
- Description of the friction
- Where in the journey it occurs
- Why it causes drop-off
- Priority score

**4. Message Match Assessment (1 short paragraph)**
