---
name: sales-objection-pattern-tracker
description: >
  Aggregates and categorizes recurring objections from sales calls and CRM notes to surface the most common blockers and prioritize enablement responses. Use when someone says "we keep losing deals for the same reasons," asks about why prospects are pushing back, or wants to understand what objections are killing pipeline. Also triggers when a rep says "I'm not sure how to handle this concern" or a manager asks "what are our biggest sales blockers right now."
category: sales
tags: [sales, objections, crm, enablement, pipeline]
author: community
---

# Sales Objection Pattern Tracker

This skill analyzes raw input from sales calls, CRM notes, or rep-reported objections to identify recurring blockers, rank them by frequency and deal impact, and recommend prioritized enablement responses.

## Objection Aggregation Workflow

1. **Collect raw input** — Accept objections from any format: pasted CRM notes, bullet lists of call summaries, transcripts, or freeform rep descriptions. Ask the user to paste the data if not already provided.

2. **Extract individual objections** — Parse the input and pull out each distinct objection as a standalone statement. Strip duplicates that are phrased differently but mean the same thing (e.g., "too expensive" and "pricing is too high" = one objection).

3. **Categorize by type** — Group objections into standard categories:
   - **Price/Budget** — cost concerns, ROI doubt, budget freeze
   - **Timing** — not now, busy quarter, renewal not until later
   - **Authority** — need to involve others, waiting on approval
   - **Competition** — already using a competitor, evaluating alternatives
   - **Trust/Risk** — unsure about vendor stability, implementation fear
   - **Product Gap** — missing feature, integration concern, use-case mismatch
   - **Status Quo** — happy with current process, low urgency to change

4. **Rank by frequency and deal risk** — Count how often each objection appears. Flag objections that appear in late-stage lost deals as high-priority even if frequency is lower.

5. **Identify response gaps** — For each top objection, note whether a standard rebuttal, case study, or enablement asset already exists. Flag gaps explicitly.

6. **Recommend enablement actions** — For the top 3–5 objections, suggest a concrete response: talk track, proof point, one-pager topic, or training focus.

## Output Format

Produce a structured report with these sections:

**Objection Summary Table**
| Rank | Objection | Category | Frequency | Deal Stage Risk | Enablement Gap? |
|------|-----------|----------|-----------|-----------------|-----------------|
| 1    | ...       | ...      | X times   | High/Med/Low    | Yes/No          |

**Top Objections — Detail View** (for top 3–5)
- **Objection:** Exact or paraphrased statement
- **Why it stalls deals:** 1–2 sentences on the underlying concern
- **Recommended response:** Specific talk track, asset, or proof point
- **Enablement action:** What to build or train on

**Quick Wins** — 2–3 immediate actions the team can take this week (e.g., share an existing case study, update a deck slide, run a 15-min team role-play).

Keep the table scannable. Keep detail sections to 4–6 lines each. Total output should fit on one page for easy sharing in a team meeting or Slack post.
