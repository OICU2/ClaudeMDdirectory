---
name: post-campaign-debrief-report
description: >
  Synthesizes campaign performance data into a structured debrief report covering wins, failures, and concrete next steps. Use when someone says "let's debrief our campaign," asks "how did our campaign perform," wants to "review what worked and what didn't," needs to "write a post-mortem on our marketing campaign," or is "wrapping up a campaign and planning the next one."
category: marketing
tags: [campaign-analysis, reporting, performance-review, marketing-strategy, post-mortem]
author: community
---

# Post-Campaign Debrief Report

This skill transforms raw campaign performance data into a structured debrief report that identifies what worked, what failed, and delivers specific actionable changes for the next campaign.

## Workflow

1. **Gather campaign inputs** — Ask the user to provide: campaign name, dates, goals/KPIs, channels used, budget spent, and key metrics (impressions, clicks, conversions, revenue, CAC, ROAS, or whatever applies). If data is missing, note it as a gap and work with what is available.

2. **Establish baseline vs. actuals** — Compare every reported metric against the original goal. Calculate percent over/under for each KPI. Flag any metric that missed by more than 20% as a critical finding.

3. **Identify what worked** — Extract 3–5 specific wins backed by data. A win requires a metric to support it (e.g., "Email open rate hit 34% vs. 22% goal"). Do not list tactics as wins without numbers.

4. **Identify what failed** — Extract 3–5 specific failures backed by data. A failure is any KPI miss, audience mismatch, budget inefficiency, or execution gap. Name the root cause for each, not just the symptom.

5. **Diagnose root causes** — For each failure, apply one of four root cause categories: Strategy (wrong audience, wrong message), Execution (timing, creative, copy), Budget (over/under allocated channel), or Measurement (tracking broke, attribution wrong). Label each failure accordingly.

6. **Generate next-campaign actions** — Produce one specific, testable recommendation for each identified failure. Actions must include: what to change, how to change it, and how to measure success. Vague recommendations like "improve creative" are not acceptable — specify the change (e.g., "A/B test two subject lines targeting pain points vs. outcomes in the first email send").

7. **Assign a campaign health score** — Rate the overall campaign 1–10 based on: goal attainment (40%), budget efficiency (30%), and learnings value (30%). Provide a one-sentence justification.

## Output Format

Produce the report in this exact structure using markdown:

---

**Campaign Debrief: [Campaign Name]**
**Period:** [Start Date – End Date]
**Prepared:** [Today's Date]

---

### Campaign Overview
- **Goal:** [Primary objective]
- **Total Budget:** [Spent / Allocated]
- **Channels:** [List]
- **Health Score:** [X/10] — [One-sentence justification]

---

### KPI Scorecard
| Metric | Goal | Actual | Δ% | Status |
|--------|------|--------|-----|--------|
| [metric] | [goal] | [actual] | [+/-X%] | ✅ / ❌ |

---

### What Worked
1. **[Tactic/Channel]** — [What happened] → [Metric that proves it]
2. [Repeat for 3–5 wins]

---

### What Failed
1. **[Tactic/Channel]** — [What happened] → [Metric showing failure] → Root cause: [Strategy / Execution / Budget / Measurement]
2. [Repeat for 3–5 failures]

---

### Actions for Next Campaign
| # | Failure It Addresses | Specific Change | Success Metric |
|---|----------------------|-----------------|----------------|
| 1 | [failure] | [exact change] | [how to measure] |

---

### Open Questions
- [Any data gaps, unresolved hypotheses, or items needing follow-up before next campaign]

---

Report length should be proportional to data provided. Minimum one row per KPI in the scorecard. Maximum 2 pages equivalent. Use plain language —
