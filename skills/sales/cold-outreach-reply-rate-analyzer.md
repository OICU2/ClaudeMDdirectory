---
name: cold-outreach-reply-rate-analyzer
description: >
  Analyzes cold outreach sequence performance to surface what's working and what isn't.
  Use when someone says "my reply rates are low," asks about "which emails are getting responses,"
  wants to "improve outbound sequence performance," is trying to "figure out why prospects aren't
  replying," or needs to "audit cold email results."
category: sales
tags: [cold-email, outbound, reply-rate, sequencing, sales-analytics]
author: community
---

# Cold Outreach Reply Rate Analyzer

Diagnoses outbound sequence performance by evaluating subject lines, messaging themes, and send patterns to identify the highest-leverage improvements for reply rate.

## Analysis Workflow

1. **Gather performance data** — Request the following if not provided:
   - Step-by-step reply rates (reply count / delivered count per step)
   - Subject lines used at each step
   - Send days/times for each step
   - Email body themes or key value propositions per step
   - Sequence length (number of steps and days between steps)
   - Prospect segment or ICP definition

2. **Benchmark reply rates** — Apply these reference thresholds:
   - Cold email average: 1–5% reply rate
   - Good: 6–10%
   - Exceptional: 11%+
   - Flag any step below 1% as critically underperforming

3. **Analyze subject lines** — Evaluate each subject line for:
   - Personalization signals (name, company, role, trigger event)
   - Length (flag anything over 8 words as likely too long)
   - Spam-trigger language (e.g., "free," "guaranteed," "limited time")
   - Curiosity gap vs. clarity tradeoff
   - Compare reply rates across subject line styles (question vs. statement vs. referral)

4. **Analyze messaging themes** — For each step, identify:
   - Primary hook (pain-based, outcome-based, social proof, relevance trigger)
   - Whether the CTA is frictionless (single yes/no question) or high-friction (demo request, long form)
   - Whether the email is under 75 words (flag longer emails for likely drop-off)
   - Repetition of the same value prop across steps (flag as fatigue risk)

5. **Analyze send patterns** — Cross-reference reply rates with:
   - Day of week (Tuesday–Thursday typically outperform Monday/Friday)
   - Time of send (flag sends outside 7–10am or 2–4pm local time)
   - Gap between steps (flag gaps under 2 days or over 7 days)
   - Step position (most replies typically come from steps 1, 2, and a final breakup email)

6. **Identify top performers and failures** — Rank steps by reply rate and extract:
   - The 1–2 highest-performing steps: what patterns do they share?
   - The 1–2 lowest-performing steps: which of the three factors (subject, message, timing) is most likely culpable?

7. **Generate recommendations** — For each underperforming step, produce one specific rewrite or change tied to the diagnosed issue.

## Output Format

Produce a structured report with these sections:

**Performance Summary Table**
| Step | Subject Line | Reply Rate | Benchmark vs. Average |
|------|-------------|------------|----------------------|
(One row per sequence step)

**Top Performers**
- Step X: [what's working and why — 2–3 sentences]

**Underperformers**
- Step X: [diagnosed root cause — subject / messaging / timing — with specific evidence]

**Prioritized Recommendations** (ranked by estimated impact)
1. [Specific change] — [Why this will move reply rate] — [Rewritten subject or hook if applicable]
2. ...

**Pattern Summary**
3–5 bullet points summarizing the cross-sequence patterns (e.g., "Pain-based hooks outperform outcome-based 2:1 in this sequence," "Steps sent Thursday morning have 3x the reply rate of Monday sends").

Keep the full report under 600 words. Use plain language. No jargon unless the user introduced it first.
