---
name: solopreneur-time-to-revenue-activity-ranker
description: >
  Analyzes a solopreneur's weekly activities and scores each one by its direct contribution to revenue generation, then surfaces what to cut, delegate, or deprioritize. Use when someone says "I don't know where my time is going," asks "which of my tasks actually make me money," wants to audit their weekly schedule for revenue impact, feels busy but not profitable, or says "help me figure out what to stop doing."
category: solopreneur
tags: [solopreneur, productivity, revenue, time-management, prioritization]
author: community
---

# Solopreneur Time-to-Revenue Activity Ranker

This skill scores a solopreneur's current weekly activities by their direct contribution to revenue and produces a ranked action plan showing what to protect, cut, or delegate.

## Activity Intake and Scoring Workflow

**Step 1 — Collect the activity list**
Ask the user to list every recurring weekly activity, task, or commitment (work-related). If they provide a vague answer, prompt them to break it into 10–20 discrete items. Examples: client calls, social media posting, email, bookkeeping, content creation, prospecting, fulfillment, admin.

**Step 2 — Classify each activity by revenue proximity**
Score each activity on a 1–5 Revenue Impact Scale:

- **5 — Direct Revenue**: Activity closes sales or delivers paid work (client calls, fulfillment, proposals, invoicing, sales outreach)
- **4 — Near-Term Pipeline**: Activity fills the pipeline within 30 days (discovery calls, follow-ups, launching offers, DM conversations with warm leads)
- **3 — Indirect Revenue**: Activity builds audience or reputation that converts within 90 days (content creation, SEO, email list building, strategic partnerships)
- **2 — Operational Support**: Activity keeps the business running but doesn't generate revenue (bookkeeping, scheduling, tool setup, internal SOPs)
- **1 — Low or No Revenue Link**: Activity has no clear revenue path (excessive research, low-ROI social scrolling, busywork, premature optimization)

**Step 3 — Estimate time investment**
For each activity, note the hours per week currently spent. Flag any activity where hours-per-week is disproportionately high relative to its revenue score (high time + low score = elimination candidate).

**Step 4 — Apply the Revenue Efficiency Test**
For every activity scored 1 or 2, ask:
- Could this be eliminated with no revenue impact in the next 90 days?
- Could this be automated or templated to under 30 minutes/week?
- Could this be delegated to a VA or tool?

Flag the outcome: **Eliminate / Automate / Delegate / Keep**.

**Step 5 — Identify the highest-leverage gap**
Look at the total hours spent on Score 4–5 activities vs. Score 1–2 activities. If more than 40% of time is in Score 1–2, flag this as a critical imbalance and name the specific reallocation opportunity.

## Output Format

Produce a structured report in this exact format:

---

### 🏆 Revenue Activity Ranking

| Activity | Revenue Score (1–5) | Hrs/Week | Verdict |
|---|---|---|---|
| [Activity name] | [Score] | [Hours] | Protect / Cut / Automate / Delegate |

*(List all activities, sorted from highest to lowest revenue score)*

---

### ⚠️ Eliminate or Deprioritize Immediately
Bullet list of 2–5 specific activities to cut or reduce, with a one-line reason for each.

---

### 🔼 Time to Reallocate
State the estimated hours per week currently wasted on low-revenue tasks and name exactly where those hours should be redirected (e.g., "Reclaim 4 hrs/week from tool research → redirect to outbound sales outreach").

---

### 💡 One Highest-Leverage Action
One concrete, specific action the solopreneur should take this week to improve their revenue-to-time ratio. No generalities — name the activity, the target outcome, and the time block to use.

---

Keep the report scannable. Use the table for the full ranking. Keep each verdict to one word. Limit the highest-leverage action to
