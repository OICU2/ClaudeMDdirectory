---
name: email-cadence-fatigue-monitor
description: >
  Analyzes email send frequency alongside open rates and unsubscribe rates per list segment to detect audience burnout before it damages deliverability. Use when someone says their open rates are dropping, asks why a segment is unsubscribing more than usual, wants to audit their email sending cadence, notices engagement declining across a campaign series, or needs to identify which audience groups are being over-mailed.
category: marketing
tags: [email-marketing, engagement, list-health, cadence, fatigue]
author: community
---

# Email Cadence Fatigue Monitor

Analyzes send frequency against engagement metrics per list segment to surface fatigue signals and recommend cadence adjustments before list health degrades.

## Fatigue Analysis Workflow

**1. Collect Segment-Level Inputs**
Request or accept the following per segment:
- Segment name and size
- Emails sent per week (or month)
- Open rate for last 30, 60, and 90 days
- Click-to-open rate (CTOR) for the same periods
- Unsubscribe rate per send
- Spam complaint rate if available
- Last known "healthy baseline" open rate for that segment

**2. Calculate Fatigue Indicators**
For each segment, compute or evaluate:
- **Open rate trend**: % change from baseline to current (flag if >15% decline over 60 days)
- **Unsubscribe velocity**: unsubscribes per 1,000 sends increasing week-over-week (flag if >0.5% per send)
- **CTOR decay**: if click rate drops faster than open rate, content fatigue is outpacing frequency fatigue
- **Frequency-to-engagement ratio**: sends per week divided by open rate — rising ratio signals diminishing returns
- **Complaint spike**: any send with >0.08% spam complaint rate is a hard flag

**3. Score Each Segment**
Assign a fatigue level:
- 🟢 **Healthy**: No flags triggered, stable or improving trends
- 🟡 **Early Fatigue**: 1–2 flags, declining trend beginning, action recommended
- 🔴 **Burning Out**: 3+ flags or any hard flag (spam complaints, >25% open rate drop), immediate intervention required

**4. Identify Root Cause**
For flagged segments, distinguish between:
- **Frequency fatigue**: too many sends regardless of content (reduce cadence)
- **Content fatigue**: sends are spaced fine but content is repetitive (refresh creative/offer)
- **Audience mismatch**: segment definition has drifted and wrong people are receiving campaigns
- **Re-engagement needed**: segment is aged and cold, not newly fatigued

**5. Generate Cadence Recommendations**
Based on fatigue level and root cause:
- Healthy: maintain current cadence, monitor monthly
- Early Fatigue: reduce frequency by 25–30% for 3 weeks, A/B test subject line variation, add preference center prompt
- Burning Out: pause sends for 7–14 days, send a single re-permission or "we've missed you" campaign, rebuild cadence at half the prior frequency

## Output Format

Produce a **Segment Fatigue Report** with the following sections:

**Summary Table**
| Segment | Size | Sends/Week | Open Rate (Now vs. Baseline) | Unsub Rate | Fatigue Level |
|---|---|---|---|---|---|
(one row per segment)

**Flagged Segment Deep-Dives**
For each 🟡 or 🔴 segment:
- Fatigue level and triggered flags listed as bullets
- Root cause diagnosis (1–2 sentences)
- Specific recommended action with timeline (e.g., "Reduce to 1 send/week for 3 weeks starting [date], then re-evaluate")

**Healthy Segments**
- Brief confirmation they are within normal range
- Any early watch items to monitor next cycle

**Overall List Health Score**
- Weighted average fatigue score across all segments
- One paragraph summary with the single most important action to take this week

Report should be scannable — use headers, tables, and bullet points. Length scales with number of segments; 3–5 segments typically produces a 400–600 word report.
