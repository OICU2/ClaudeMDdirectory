---
name: sales-sequence-step-drop-off-analysis
description: >
  Analyzes multi-touch outbound sequences to pinpoint which specific steps are losing the most prospects and why. Use when someone says "our sequence isn't converting," asks why replies drop off after a certain email, or wants to figure out where prospects are going cold in an outreach cadence. Also triggers when someone shares open/reply/click rates by step and wants to understand the pattern, or asks for better messaging to replace underperforming sequence steps.
category: sales
tags: [sales, sequences, outbound, email, cadence, drop-off, conversion]
author: community
---

# Sales Sequence Step Drop-Off Analysis

This skill diagnoses which steps in a multi-touch outbound sequence are bleeding the most prospects, generates data-backed hypotheses for why, and produces replacement messaging variants to test.

## Analysis Workflow

### Step 1: Collect Sequence Data
Ask the user to provide (or paste):
- Each step in the sequence (channel, day, subject line or message preview)
- Metrics per step: send volume, open rate, reply rate, click rate, opt-out rate
- The ICP (Ideal Customer Profile) being targeted
- The core offer or call-to-action being made

If metrics are missing, ask for estimated qualitative signals (e.g., "replies drop off after step 3," "we get opens but no replies on step 2").

### Step 2: Identify Drop-Off Points
Calculate or estimate:
- **Open-to-reply gap**: High opens + low replies = subject line works, body copy or CTA fails
- **Step-over-step decline**: Where does the sharpest percentage drop occur?
- **Opt-out spikes**: High opt-outs at a specific step signal tone, frequency, or relevance problems
- **Late-sequence silence**: If steps 4–6 get no engagement, the sequence may be too long or too repetitive

Flag the **top 1–3 problem steps** by name/number.

### Step 3: Generate Hypotheses
For each flagged step, generate 2–3 specific hypotheses using this framework:

| Hypothesis | Evidence Signal | Likely Root Cause |
|---|---|---|
| Subject line creates wrong expectation | High open, low reply | Mismatch between subject and body |
| CTA is too high-commitment | Replies drop at ask step | Asking for meeting before value established |
| Message tone feels templated | Low engagement across step | No personalization or specificity |
| Follow-up adds no new value | Silence after step 2+ | Repetitive "just checking in" framing |
| Timing/frequency is aggressive | Opt-out spike | Steps too close together |

### Step 4: Generate Replacement Messaging
For each problem step, write **2 replacement message variants** to A/B test:
- **Variant A**: Reframe the angle (lead with insight, problem, or result instead of product)
- **Variant B**: Reduce friction (softer CTA, shorter message, or different channel suggestion)

Each variant must include:
- Subject line (if email)
- Full message body (under 150 words)
- Specific change made and the hypothesis it tests

### Step 5: Recommend Testing Protocol
- Suggest which variant to test first based on the hypothesis
- Recommend minimum sample size before calling a winner (typically 50+ sends per variant)
- Flag any structural changes to consider (sequence length, channel mix, step timing)

## Output Format

Produce a structured report with these sections:

**1. Sequence Snapshot** — Bullet list of each step with its key metric(s) and a one-line status (✅ performing / ⚠️ underperforming / 🔴 critical drop-off)

**2. Top Drop-Off Points** — 1–3 flagged steps with quantified drop-off magnitude (e.g., "Reply rate falls 62% from step 2 to step 3")

**3. Hypotheses Table** — Markdown table with hypothesis, signal, and root cause for each flagged step

**4. Replacement Messaging** — For each flagged step: Variant A and Variant B, each with subject line, body copy, and a one-line hypothesis label

**5. Quick Wins + Structural Recommendations** — 3–5 bullet points covering immediate copy fixes and any larger sequence architecture changes
