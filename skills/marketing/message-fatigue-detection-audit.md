---
name: message-fatigue-detection-audit
description: >
  Analyzes email and ad campaign frequency data against engagement decline trends to identify
  audience segments experiencing message fatigue. Use when someone says their open rates are
  dropping, asks why engagement is declining across campaigns, wants to know if they are
  over-messaging their audience, notices unsubscribe spikes, or needs to audit contact
  frequency across marketing channels.
category: marketing
tags: [email-marketing, audience-segmentation, campaign-optimization, engagement, frequency-analysis]
author: community
---

# Message Fatigue Detection Audit

This skill diagnoses audience segments showing signs of message fatigue by cross-referencing campaign frequency data with engagement decline patterns, then recommends channel-specific frequency adjustments.

## Fatigue Detection Workflow

### Step 1: Collect Input Data
Request the following from the user if not provided:
- Campaign send frequency per segment (daily, weekly, monthly sends)
- Engagement metrics over time: open rate, CTR, conversion rate, unsubscribe rate, spam complaints
- Segment definitions (demographics, purchase history, lifecycle stage)
- Channel breakdown (email, SMS, paid ads, push notifications)
- Time window for analysis (minimum 60 days recommended)

### Step 2: Establish Baseline Benchmarks
Compare provided metrics against standard industry thresholds:
- Email open rate decline >15% over 30 days = warning signal
- CTR drop >25% with no creative change = fatigue indicator
- Unsubscribe rate >0.5% per send = high fatigue risk
- Spam complaint rate >0.1% = critical threshold
- Ad frequency score >3.5 impressions/user/week = ad fatigue zone

### Step 3: Segment-Level Fatigue Scoring
For each audience segment, score fatigue risk on a 1–5 scale:
- **1 (Healthy):** Stable or improving engagement, frequency within norms
- **2 (Watch):** One metric declining, frequency at upper bound
- **3 (At Risk):** Two or more metrics declining over 30+ days
- **4 (Fatigued):** Clear multi-metric decline correlated with high send frequency
- **5 (Critical):** Unsubscribes or spam complaints spiking, engagement near zero

### Step 4: Frequency-to-Engagement Correlation Analysis
- Map send frequency against each engagement metric week-over-week
- Identify the inflection point where frequency increases and engagement begins declining
- Flag segments where frequency increased without a corresponding engagement lift
- Note if fatigue is channel-specific or cross-channel

### Step 5: Root Cause Classification
Assign each fatigued segment one or more root causes:
- **Volume overload:** Too many sends in a short window
- **Content repetition:** Low creative variation across sends
- **Poor segmentation:** Irrelevant messaging sent to broad audiences
- **Channel stacking:** Same audience hit across email + ads + SMS simultaneously
- **Lifecycle mismatch:** Frequency appropriate for acquisition applied to retention segments

### Step 6: Recommendations
For each at-risk or fatigued segment, provide:
- Recommended send frequency reduction (specific percentage or cadence)
- Suppression window (e.g., pause outreach for 14 days)
- Re-engagement test approach (single send, value-led, opt-down preference center)
- Channel rebalancing if cross-channel fatigue is detected
- Segmentation refinement to reduce audience overlap

## Output Format

Produce a structured audit report with the following sections:

---

**Message Fatigue Audit Report**

**Audit Period:** [date range]
**Channels Analyzed:** [list]

---

**Segment Fatigue Scorecard**

| Segment | Avg. Weekly Sends | Open Rate Trend | CTR Trend | Unsub Rate | Fatigue Score |
|---|---|---|---|---|---|
| [Segment Name] | [#] | [↑/↓ %] | [↑/↓ %] | [%] | [1–5] |

---

**Fatigue Findings by Segment**

For each segment scoring 3 or higher:
- Fatigue Score: [1–5]
- Root Cause(s): [bulleted list]
- Key Evidence: [2–3 specific data points]
- Inflection Point:
