---
name: email-unsubscribe-reason-analyzer
description: >
  Analyzes and synthesizes unsubscribe feedback data to identify root causes of email list churn, including message fatigue, audience mismatch, and frequency complaints. Use when someone says "people keep unsubscribing from our list," asks about why subscribers are leaving, wants to understand unsubscribe survey responses, needs to reduce email churn, or is trying to figure out what's driving opt-outs. Produces a structured diagnosis with prioritized recommendations.
category: marketing
tags: [email-marketing, churn-analysis, list-health, audience-segmentation, retention]
author: community
---

# Email Unsubscribe Reason Analyzer

This skill categorizes raw unsubscribe feedback into actionable churn drivers and generates a prioritized remediation plan when someone needs to understand why subscribers are leaving their email list.

## Analysis Workflow

### Step 1: Collect and Normalize Input
Ask for the following if not already provided:
- Raw unsubscribe reasons (survey responses, dropdown selections, or free-text)
- Volume of responses and timeframe
- Email program context: send frequency, list size, content type, audience segment

If data is unavailable, prompt the user to paste a sample or describe common patterns they're seeing.

### Step 2: Categorize Each Reason Into Core Churn Buckets
Map every response to one of these five categories:

1. **Message Fatigue** — "Too many emails," "overwhelming," "inbox flooding"
2. **Audience Mismatch** — "Not relevant," "not what I signed up for," "wrong content"
3. **Frequency Complaints** — Specific cadence objections ("daily is too much," "I only want weekly")
4. **Life Change / Circumstance** — "No longer need this," "changed jobs," "bought already"
5. **Content Quality** — "Not useful," "too promotional," "boring," "same thing every time"

Flag ambiguous responses separately and note them as requiring manual review.

### Step 3: Quantify Distribution
Calculate or estimate percentage breakdown across buckets. Identify:
- The top 1–2 churn drivers by volume
- Any secondary patterns that appear in 10%+ of responses
- Outlier signals worth monitoring even at low volume

### Step 4: Diagnose Root Cause
For the top churn drivers, apply these diagnostic rules:

- **Fatigue + Frequency complaints together** → Cadence is the primary lever; recommend frequency caps or preference centers
- **Audience Mismatch dominant** → Segmentation or acquisition source is broken; audit lead sources and onboarding sequence
- **Content Quality dominant** → Editorial or value proposition problem; audit recent campaign performance and content mix
- **Life Change dominant (>30%)** → List hygiene issue; recommend sunset flows and re-engagement sequences
- **Mixed signals across all buckets** → No single fix; recommend preference center + segmentation audit

### Step 5: Generate Recommendations
For each identified root cause, provide:
- One immediate action (can be done this week)
- One structural fix (requires planning or process change)
- One metric to track improvement

## Output Format

Produce a structured report with the following sections:

---

**Unsubscribe Reason Analysis**

**Data Summary**
- Responses analyzed: [N]
- Timeframe: [X]
- Email program type: [description]

**Churn Driver Breakdown**
| Category | % of Responses | Key Phrases Observed |
|---|---|---|
| Message Fatigue | X% | "..." |
| Audience Mismatch | X% | "..." |
| Frequency Complaints | X% | "..." |
| Life Change | X% | "..." |
| Content Quality | X% | "..." |

**Primary Diagnosis**
[2–3 sentences identifying the dominant churn pattern and its likely root cause in the email program]

**Prioritized Recommendations**

1. **[Top Driver]**
   - Immediate action: [specific tactic]
   - Structural fix: [process or program change]
   - Track: [metric]

2. **[Second Driver]**
   - Immediate action: [specific tactic]
   - Structural fix: [process or program change]
   - Track: [metric]

**Flagged for Manual Review**
[List any ambiguous responses or edge
