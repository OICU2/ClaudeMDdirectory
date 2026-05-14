---
name: competitive-research-update-trigger-log
description: >
  Monitors predefined competitive signals and determines when existing research findings have become stale or require urgent refreshing. Use when someone says "our competitor just announced something," asks whether competitive research is still current, or wants to know if a funding round or product launch should trigger a research update. Also activates when someone mentions a rival's press release, acquisition news, or pricing change and needs to decide whether to re-investigate.
category: research
tags: [competitive-intelligence, monitoring, research-ops, market-research, triggers]
author: community
---

# Competitive Research Update Trigger Log

This skill evaluates incoming competitive signals against a structured trigger framework to flag whether existing research needs refreshing and logs the decision with a priority rating.

## Trigger Evaluation Workflow

1. **Capture the signal.** Extract the specific event from the user's input: company name, event type (product launch, funding round, acquisition, leadership change, pricing update, partnership, regulatory filing, layoffs), date reported, and source credibility (tier-1 press, company blog, rumor, social media).

2. **Classify the signal type** using these categories:
   - **Critical (refresh within 24–48 hours):** Product launch in your core market, direct pricing change, acquisition of a competitor or key vendor, Series B+ funding round for a direct rival.
   - **High (refresh within 1 week):** New executive hire (C-suite or VP Product/Sales), geographic expansion into your market, major partnership announcement.
   - **Medium (refresh within 30 days):** Rebranding, feature deprecation, job postings indicating strategic shift, conference keynote announcements.
   - **Low (log and monitor):** Awards, general press mentions, minor UI changes, blog posts without product implications.

3. **Check against existing research.** Ask the user (or infer from context) when the last competitive research on this company was completed. Apply staleness rules:
   - Research older than 90 days + any Critical signal = mandatory refresh.
   - Research older than 30 days + any High signal = recommended refresh.
   - Research under 30 days + Medium or Low signal = log only, no refresh needed yet.

4. **Assess impact scope.** Determine which research areas are affected:
   - Positioning & messaging docs
   - Feature comparison matrices
   - Pricing intelligence
   - Market share estimates
   - Sales battlecards

5. **Log the trigger event** with all collected fields and the refresh decision.

6. **Generate recommended next actions** specific to the signal type (e.g., "Pull updated pricing page," "Review new product docs," "Monitor job board for 2 weeks").

## Output Format

Produce a structured trigger log entry followed by a recommendation block:

---

**COMPETITIVE SIGNAL LOG**

| Field | Detail |
|---|---|
| Company | [Competitor name] |
| Signal Type | [Category from step 2] |
| Event Description | [1–2 sentence summary of what happened] |
| Source | [URL or source name + credibility tier] |
| Date Detected | [Date] |
| Priority Level | CRITICAL / HIGH / MEDIUM / LOW |
| Last Research Date | [Date or "Unknown"] |
| Research Staleness | [Days since last update] |

**Affected Research Areas:**
- [List only the areas from step 4 that apply]

**Refresh Decision:** [REFRESH NOW / REFRESH THIS WEEK / REFRESH THIS MONTH / LOG ONLY]

**Recommended Actions:**
1. [Specific action]
2. [Specific action]
3. [Specific action, if applicable]

**Trigger Log ID:** [COMP-YYYYMMDD-###]

---

Keep entries factual and free of editorializing. Each log entry must fit on one screen without scrolling. If multiple signals arrive at once, generate one log entry per signal.
