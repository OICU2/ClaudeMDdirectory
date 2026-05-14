---
name: sales-email-open-time-heatmap
description: >
  Analyzes historical sent email data to surface the optimal days and times for prospect outreach by identifying open-rate patterns across time slots. Use when someone says "when should I be sending cold emails," asks about the best time to reach prospects, wants to improve email open rates, needs a send-time schedule for outreach campaigns, or is trying to figure out when their emails get ignored. Produces a prioritized heatmap and actionable send schedule.
category: sales
tags: [email, outreach, analytics, scheduling, open-rates]
author: community
---

# Sales Email Open-Time Heatmap

This skill ingests sent email data, calculates open rates by day and hour, and outputs a ranked send-time heatmap with a concrete outreach schedule reps can follow immediately.

## Analysis Workflow

1. **Collect input data** — Request the following fields from the user's email data (CSV, spreadsheet, or pasted table): sent timestamp, recipient, open timestamp (or open boolean), and optionally industry/segment/rep name.

2. **Parse timestamps** — Extract day-of-week (Mon–Sun) and hour-of-day (0–23, converted to local time) from each sent timestamp. If timezone is missing, ask the user to confirm their sending timezone.

3. **Calculate open rates per slot** — For each (day, hour) bucket:
   - Count total emails sent
   - Count emails opened
   - Compute open rate = opens ÷ sent
   - Exclude buckets with fewer than 10 sends to avoid noise; flag low-sample slots explicitly

4. **Build the heatmap matrix** — Arrange a 7-day × 24-hour grid. Populate each cell with the open rate. Use a tiered label system:
   - 🔴 Top tier: open rate ≥ 35%
   - 🟡 Mid tier: open rate 20–34%
   - ⚪ Low tier: open rate < 20%
   - ⬛ No data or excluded (< 10 sends)

5. **Rank the top send windows** — Sort all valid buckets by open rate descending. Extract the top 10 day+time combinations.

6. **Segment breakdowns (if data allows)** — If industry, company size, or rep is present, repeat the analysis per segment and note any divergence from the overall pattern (e.g., "Finance prospects open 40% more on Thursdays vs. average").

7. **Generate recommendations** — Map the top windows into a weekly send schedule. Flag any counterintuitive findings (e.g., Saturday morning outperforming Tuesday). Note dead zones to avoid.

## Output Format

Produce the following sections in order:

---

**📊 Open Rate Heatmap**
A formatted grid (Markdown table or ASCII) with days as columns (Mon–Sun) and time blocks as rows (grouped into 3-hour bands: 6–9am, 9–12pm, 12–3pm, 3–6pm, 6–9pm). Each cell shows the open rate % and tier emoji.

**🏆 Top 10 Send Windows**
Ranked list, each entry showing:
- Rank, Day + Time (e.g., "Tuesday 10am"), Open Rate %, Total Sends in sample

**📅 Recommended Weekly Send Schedule**
A day-by-day table with 1–2 recommended send times per day, flagged as Primary ✅ or Secondary 🔁. Include a "Do Not Send" row for the lowest-performing slots.

**⚠️ Data Caveats**
Bullet list of: excluded low-sample buckets, timezone assumptions, missing fields, and minimum recommendations for improving data quality.

**💡 Key Insights**
3–5 plain-English bullets summarizing the most actionable findings (e.g., "Tuesday 10–11am drives 2.4× your average open rate — prioritize this slot for high-value prospects").

---
