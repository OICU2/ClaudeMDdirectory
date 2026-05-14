---
name: customer-exit-survey-analysis
description: >
  Synthesizes customer cancellation and exit survey responses into ranked themes to inform retention messaging and product positioning. Use when someone says "we have exit survey data to analyze," asks about "why customers are churning," or wants to "understand cancellation reasons" or "turn churn feedback into insights" or "find patterns in our offboarding responses."
category: marketing
tags: [churn, retention, customer-feedback, survey-analysis, product-positioning]
author: community
---

# Customer Exit Survey Analysis

This skill processes raw exit survey or cancellation feedback data and surfaces ranked themes, verbatim evidence, and actionable recommendations for retention and messaging strategy.

## Analysis Workflow

1. **Ingest the data** — Accept survey responses in any format (CSV, pasted text, JSON, bullet list). If no data is provided, ask the user to paste or upload responses before proceeding.

2. **Normalize and categorize responses** — Read through all responses and group mentions into candidate themes. Common themes to watch for: pricing/value, missing features, competitor switch, poor onboarding, lack of use/engagement, support issues, business change (shutdown, budget cut), and product complexity.

3. **Rank themes by frequency** — Count how many unique respondents mention each theme (not total mentions). Rank from most to least frequent. If a response touches multiple themes, count it under each relevant theme.

4. **Extract verbatim anchors** — For each theme, pull 2–3 direct quotes that best represent the sentiment. Prioritize quotes that are specific, emotionally clear, or contain language customers would use themselves.

5. **Identify compounding patterns** — Note any themes that frequently co-occur (e.g., "price" + "didn't see value" often appear together). Flag these as compound churn drivers.

6. **Derive retention and messaging implications** — For each top theme, write one specific implication for retention strategy and one for product positioning or messaging. Implications must be concrete, not generic (e.g., not "improve onboarding" but "add a progress milestone email at day 7 targeting users who haven't completed setup").

7. **Flag outliers** — Note any responses that don't fit themes but contain unusually specific, actionable, or alarming feedback worth surfacing separately.

## Output Format

Produce a structured report with the following sections:

---

**Exit Survey Analysis — [Date or Dataset Label]**
**Total Responses Analyzed:** [N]

---

**Ranked Churn Themes**

| Rank | Theme | Respondents (N) | % of Total |
|------|-------|-----------------|------------|
| 1    | ...   | ...             | ...        |

---

**Theme Deep-Dives** (repeat for each top theme, up to 5)

**Theme: [Name]**
- *Frequency:* N respondents (X%)
- *Representative quotes:*
  - "[verbatim quote]"
  - "[verbatim quote]"
- *Retention implication:* [specific tactic]
- *Messaging implication:* [specific positioning or copy direction]

---

**Compound Churn Drivers**
- [Theme A] + [Theme B]: seen in X% of responses — [one-sentence interpretation]

---

**Outliers & Signals Worth Watching**
- [Quote or summary] — [why it's notable]

---

**Top 3 Recommended Actions**
1. [Specific, prioritized action]
2. [Specific, prioritized action]
3. [Specific, prioritized action]

---

Keep the full report scannable — use tables and bullets throughout. Avoid paragraph prose except in the recommended actions section. If the dataset has fewer than 10 responses, note that findings are directional only and should not drive major strategy decisions without more data.
