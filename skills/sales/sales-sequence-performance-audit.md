---
name: sales-sequence-performance-audit
category: sales
description: >
  Analyzes open rates, reply rates, and conversion rates across active sales outreach sequences to pinpoint underperforming steps and deliver specific, actionable improvements. Use when someone says "my sequences aren't converting," asks why their outreach isn't getting responses, wants to audit their email cadence performance, needs to improve their sales sequence results, or is seeing drop-off in their outreach funnel.
tags: [sales, outreach, email-sequences, conversion-optimization, cadence]
author: community
---

# Sales Sequence Performance Audit

This skill systematically reviews outreach sequence metrics step-by-step to identify exactly where prospects are dropping off and prescribe targeted fixes to improve open, reply, and conversion rates.

## Audit Workflow

### Step 1: Collect Sequence Data
Request the following for each step in the sequence:
- Step number and channel (email, LinkedIn, call, etc.)
- Subject line or message opening
- Send timing (day in sequence, time of day)
- Open rate, reply rate, click rate (if applicable)
- Number of prospects at that step

If data is unavailable, ask the user to estimate or pull from their CRM/sequencing tool (Outreach, Salesloft, Apollo, HubSpot, etc.).

### Step 2: Establish Benchmarks
Compare provided metrics against these industry baselines:
- Cold email open rate: 20–30% is acceptable, below 15% is poor
- Reply rate: 5–10% is acceptable, below 3% is poor
- Step-to-step drop-off: more than 40% drop between consecutive steps signals a problem
- Conversion to meeting: 1–3% of total sequence entries is the target range

### Step 3: Identify Failure Points
Flag steps that meet any of these conditions:
- Open rate below 15% → subject line or deliverability issue
- Reply rate below 3% despite adequate opens → body copy or CTA issue
- Disproportionate drop-off after a specific step → timing, channel mismatch, or message fatigue
- Flat engagement across all steps → targeting or ICP alignment problem
- Late-sequence steps with zero activity → sequence is too long or follow-up value is absent

### Step 4: Diagnose Root Causes
For each flagged step, identify the most likely cause from this taxonomy:
- **Subject line**: too generic, too salesy, missing personalization, or spam-trigger words
- **Body copy**: too long, feature-focused instead of outcome-focused, weak or unclear CTA
- **Timing**: wrong day/time, too soon after previous step, or too long a gap
- **Channel**: wrong medium for the persona or stage (e.g., calling before any email engagement)
- **Offer/CTA**: asks for too much commitment too early, no clear value exchange
- **Targeting**: wrong ICP, wrong persona title, mismatched pain points

### Step 5: Generate Specific Recommendations
For every flagged step, provide:
1. One rewritten subject line or message opening (ready to use)
2. One revised CTA with explicit next action
3. Timing adjustment if applicable (e.g., "move from day 3 to day 5, send Tuesday 9–10am")
4. Channel swap recommendation if the current channel is underperforming
5. A/B test suggestion with a single variable to isolate

### Step 6: Sequence-Level Recommendations
After step-level fixes, evaluate the overall sequence structure:
- Recommend cutting steps with consistently zero engagement at the tail
- Suggest adding a breakup email if the sequence lacks one
- Flag if the sequence has fewer than 6 or more than 10 touches
- Recommend a nurture path for non-responders if none exists

## Output Format

Produce a structured audit report with the following sections:

**Sequence Overview**
- Total steps audited
- Overall conversion rate vs. benchmark
- One-sentence summary verdict (e.g., "This sequence has strong open rates but loses prospects at step 3 due to a weak CTA.")

**Step-by-Step Findings Table**
| Step | Channel | Open Rate | Reply Rate | Status | Primary Issue |
|------|---------|-----------|------------|--------|---------------|
| 1    | Email   | 18%       | 2%         | ⚠️ Fix  | CTA too v
