---
name: sales-email-open-rate-diagnosis
description: >
  Analyzes sales email open rate data to pinpoint subject line patterns, send time trends, and segment-level performance gaps causing low engagement. Use when someone says their email open rates are dropping, asks why prospects aren't opening sales emails, or wants to understand what's hurting email engagement. Also activates when someone shares email campaign metrics and wants to know what to fix, or asks how to improve cold email performance.
category: sales
tags: [email, open-rates, sales-enablement, diagnostics, outreach]
author: community
---

# Sales Email Open Rate Diagnosis

This skill diagnoses low email open rates by systematically analyzing subject lines, send timing, list segmentation, and deliverability signals, then produces a prioritized action plan.

## Diagnosis Workflow

### 1. Request Required Data
Ask for the following if not already provided:
- Open rate by campaign or email (last 30–90 days)
- Subject lines used (exact text)
- Send day and time for each campaign
- Audience segments (industry, persona, funnel stage, list source)
- Bounce rate, spam complaint rate, and unsubscribe rate
- Email client or platform (e.g., HubSpot, Outreach, Mailchimp)

### 2. Benchmark Against Standards
Compare provided rates against these thresholds:
- Cold outreach: 20–30% is average; below 15% is a problem
- Nurture/warm lists: 25–40% is average; below 20% warrants investigation
- Re-engagement campaigns: below 10% signals list decay

### 3. Analyze Subject Lines
Scan all subject lines for these patterns:
- **Spam triggers**: words like "free," "guaranteed," "act now," excessive punctuation, all caps
- **Length issues**: over 50 characters get cut off on mobile; flag these
- **Personalization**: no first name or company name = lower open rates
- **Curiosity vs. clarity**: vague teasers often underperform direct value statements in B2B
- **A/B test history**: identify which variants were tested and which won or lost

### 4. Identify Send Time Patterns
- Map open rates to day of week and hour of send
- Flag sends on Monday mornings, Friday afternoons, or outside 7am–6pm recipient local time
- Check for clustering: if all emails send at the same time, inbox competition may be the issue

### 5. Segment-Level Breakdown
- Compare open rates across industries, personas, or funnel stages
- Identify which segments are pulling the average down
- Flag segments with high bounce or spam rates — these hurt sender reputation across all sends

### 6. Deliverability Check
- High bounce rate (>2%) or spam rate (>0.1%) signals deliverability problems
- Ask whether SPF, DKIM, and DMARC records are configured
- Check if the domain or IP has been used for high-volume sending recently

### 7. Prioritize Root Causes
Rank identified issues by likely impact:
1. Deliverability/sender reputation (affects everything)
2. List quality and segmentation
3. Subject line problems
4. Send timing
5. Volume and frequency

## Output Format

Produce a structured diagnosis report with these sections:

**Open Rate Summary**
- Table showing campaign name, open rate, benchmark, and delta (above/below average)

**Top 3–5 Root Causes**
- Each cause listed with: diagnosis, evidence from the data, and severity (High / Medium / Low)

**Subject Line Audit**
- List each subject line with specific issues flagged and a rewritten alternative

**Send Time Findings**
- Best and worst performing time slots from the data; recommended send windows

**Segment Performance Gaps**
- Ranked list of segments by open rate; highlight underperformers with a one-line reason

**Action Plan**
- Numbered list of fixes in priority order, each with: action, expected impact, and who owns it

Keep the report scannable. Use tables and bullet points. Limit prose paragraphs to one or two sentences per section. Flag any data gaps that would change the diagnosis.
