---
name: solo-operator-lead-to-close-time-analyzer
description: >
  Analyzes the time between first client contact and signed contract to surface bottlenecks in a solo operator's sales process. Use when someone says "my sales cycle feels too long," asks about why deals are taking forever to close, wants to understand where prospects are getting stuck, needs to benchmark their lead-to-close timeline, or is trying to figure out how to close faster as a freelancer or consultant.
category: solopreneur
tags: [sales, pipeline, time-tracking, freelance, consulting]
author: community
---

# Solo Operator Lead-to-Close Time Analyzer

This skill calculates average lead-to-close time across past clients, breaks down time spent at each sales stage, and identifies where the solo sales process is bleeding time.

## Analysis Workflow

1. **Collect client data.** Ask the user to provide a list of past clients (minimum 5 recommended) with the following for each: first contact date, contract signed date, and any known milestone dates in between (e.g., proposal sent, follow-up calls, negotiation start).

2. **Calculate raw lead-to-close time.** For each client, compute days from first contact to signed contract. Flag outliers (deals that took 2x or more the median time).

3. **Break down by stage.** If milestone dates are provided, calculate time spent in each stage:
   - First contact → Proposal sent
   - Proposal sent → Follow-up / negotiation
   - Negotiation → Contract signed
   If milestone data is missing, prompt the user to estimate or categorize deals as fast/medium/slow and note which stage felt longest.

4. **Calculate averages and medians.** Compute both average and median lead-to-close time overall and per stage. Use median as the primary benchmark to reduce outlier distortion.

5. **Identify bottleneck stage.** Flag the stage with the highest average time. Cross-reference with outlier deals — if the same stage is slow in outliers, it is the primary bottleneck.

6. **Ask qualifying questions.** To contextualize the data, ask:
   - Do slow deals share a client type, project size, or referral source?
   - Were follow-ups proactive or reactive in the slow deals?
   - Was a proposal template used or was each proposal custom-built?

7. **Generate recommendations.** Based on the bottleneck stage, provide 2–3 specific, actionable fixes (e.g., "Add a 48-hour follow-up trigger after proposal delivery," "Introduce a decision deadline in your proposal language," "Move discovery call to day 1 instead of day 3").

## Output Format

Produce a structured report with the following sections:

**Lead-to-Close Summary**
- Total clients analyzed: N
- Average close time: X days
- Median close time: X days
- Fastest close: X days (client type or context)
- Slowest close: X days (client type or context)

**Stage Breakdown Table**
| Stage | Avg Days | % of Total Time |
|---|---|---|
| First Contact → Proposal | X | X% |
| Proposal → Negotiation | X | X% |
| Negotiation → Signed | X | X% |

**Bottleneck Identified**
One paragraph naming the slowest stage, what pattern drives it, and why it matters to revenue velocity.

**3 Fixes to Implement This Week**
Numbered list of specific, low-lift actions the solo operator can take immediately. Each fix should be one to two sentences, concrete, and tied directly to the bottleneck stage.

Keep the full output under 500 words. Use plain language — no jargon.
