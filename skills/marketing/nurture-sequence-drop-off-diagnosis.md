---
name: nurture-sequence-drop-off-diagnosis
description: >
  Analyzes open, click, and conversion rates at each step of an email nurture sequence to identify exactly where audience engagement collapses and why. Use when someone says their nurture sequence isn't converting, asks why subscribers are dropping off, wants to find the weak link in their email funnel, notices engagement falling off in their drip campaign, or needs to diagnose poor performance in an automated email series.
category: marketing
tags: [email-marketing, nurture-sequences, conversion-optimization, funnel-analysis, engagement]
author: community
---

# Nurture Sequence Drop-Off Diagnosis

This skill audits every step of an email nurture sequence using open, click, and conversion rate data to pinpoint the exact message where engagement breaks down and surface the likely causes.

## Diagnosis Workflow

### 1. Collect Sequence Data
Request the following for each email in the sequence:
- Email number and subject line
- Send volume (or audience size at that step)
- Open rate
- Click-through rate (CTR)
- Conversion rate (if applicable)
- Unsubscribe rate per email
- Days between each send

If the user can only provide partial data, proceed with what's available and flag missing metrics.

### 2. Build the Drop-Off Map
Calculate the step-over-step change for each metric:
- **Open rate delta**: Compare each email's open rate to the previous one. Flag any drop greater than 15 percentage points.
- **Click rate delta**: Identify where CTR collapses relative to opens — this signals a content or CTA mismatch.
- **Conversion delta**: Note where clicks stop converting — this signals a landing page or offer mismatch.
- **Unsubscribe spikes**: Flag any email with an unsubscribe rate more than 2x the sequence average.

Identify the **primary drop-off point**: the single email where the steepest compounding loss occurs.

### 3. Diagnose the Root Cause
At the primary drop-off point, evaluate these failure categories:

**Subject line fatigue**: Open rates drop sharply — sequence may feel repetitive, sender trust is eroding, or sending frequency is too high.

**Content-offer mismatch**: Opens hold but clicks collapse — the email body doesn't deliver on the subject line promise, or the CTA doesn't match where the reader is in their buying journey.

**Sequence timing**: Drop-offs correlate with gaps of fewer than 2 days (overwhelming) or more than 7 days (audience goes cold).

**Audience segment drift**: Early emails attract broad interest; later emails target a narrower intent — if the sequence isn't segmented, unqualified subscribers naturally disengage.

**Offer premature close**: Conversion rate collapses on an email that introduces pricing or a hard sell before sufficient trust is built.

**Landing page disconnect**: Clicks hold but conversions drop — the issue is post-click, not in the email itself.

### 4. Score Sequence Health
Rate the overall sequence on three dimensions (Poor / Needs Work / Solid):
- **Engagement retention**: What percentage of original openers are still engaging by the final email?
- **Click-to-open ratio (CTOR)**: Benchmark against 10–15% CTOR as a healthy baseline.
- **Sequence conversion efficiency**: Leads entering vs. conversions achieved — flag if below 2% for cold audiences or below 8% for warm audiences.

### 5. Generate Fixes
For each identified failure point, provide one specific, actionable fix:
- Rewrite guidance for subject lines (with an example)
- CTA repositioning recommendation
- Timing adjustment (specific day intervals)
- Segmentation split suggestion
- Content angle to rebuild trust before the next ask

---

## Output Format

Produce a structured diagnosis report with these exact sections:

**Sequence Drop-Off Map**
A table with columns: Email # | Subject Line | Open Rate | CTR | Conversion Rate | Unsubscribe Rate | Delta vs. Prior Step

**Primary Drop-Off Point**
One clear sentence identifying which email number is the critical failure point and which metric drives the diagnosis.

**Root Cause Analysis**
2–4 bullet points naming the failure category and the specific evidence from the data supporting it.

**Sequence Health Scorecard**
Three-line rating (Engagement Retention / CTOR / Conversion Efficiency) with a one-line explanation
