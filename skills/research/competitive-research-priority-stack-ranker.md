---
name: competitive-research-priority-stack-ranker
description: >
  Scores and ranks competitor research topics by strategic impact and knowledge gap severity to guide where research effort is allocated first. Use when someone says "I don't know where to start with competitor research," asks about which competitors to investigate first, or wants to prioritize their competitive intelligence backlog. Also activates when someone needs to triage a list of research questions or figure out which competitive gaps matter most right now.
category: research
tags: [competitive-intelligence, prioritization, research-planning, strategy, ranking]
author: community
---

# Competitive Research Priority Stack Ranker

This skill scores and ranks a list of competitor research topics using a weighted framework so Claude can tell you exactly where to spend your research effort first.

## Ranking Workflow

1. **Collect the research topics**: Ask the user to list all competitor research questions, topics, or unknowns they're sitting on. If they haven't listed them, prompt with: "What are all the competitor questions or topics you're trying to understand right now?"

2. **Gather strategic context**: Ask two fast questions if not already provided:
   - What is the primary business goal in the next 90 days? (e.g., win new segment, defend pricing, launch feature)
   - What decisions are blocked or at risk because of missing competitive knowledge?

3. **Score each topic across four dimensions** (1–5 scale each):
   - **Decision Urgency** — How soon does a decision depend on this information? (5 = within 2 weeks, 1 = no active dependency)
   - **Strategic Impact** — If you had this intel, how significantly could it shift your strategy or tactics? (5 = major pivot possible, 1 = minor refinement)
   - **Knowledge Gap Severity** — How blind are you right now? (5 = completely unknown, 1 = mostly understood)
   - **Research Feasibility** — How obtainable is this information with available resources? (5 = easy to find, 1 = very hard or impossible)

4. **Calculate priority score**: Use this formula:
   `Priority Score = (Decision Urgency × 2) + (Strategic Impact × 2) + (Knowledge Gap Severity × 1.5) + (Research Feasibility × 0.5)`
   Maximum possible score: 30

5. **Stack rank**: Order all topics from highest to lowest score. Flag any topic scoring 20+ as **Critical Priority** and any topic scoring below 10 as **Defer or Drop**.

6. **Add a brief rationale** for the top 3 items explaining why they scored high and what outcome researching them could unlock.

## Output Format

Produce a ranked table followed by top-3 rationales:

```
## Competitive Research Priority Stack

| Rank | Research Topic | Urgency | Impact | Gap | Feasibility | Score | Priority Level |
|------|---------------|---------|--------|-----|-------------|-------|----------------|
| 1    | [Topic]       | 5       | 4      | 5   | 3           | 26.5  | 🔴 Critical    |
| 2    | [Topic]       | 3       | 5      | 4   | 4           | 23.0  | 🔴 Critical    |
| 3    | [Topic]       | 4       | 3      | 3   | 4           | 20.5  | 🟡 High        |
...

Priority Levels: 🔴 Critical (20–30) | 🟡 High (14–19) | 🟢 Medium (10–13) | ⚪ Defer (<10)

---

### Why These Three First

**#1 [Topic]:** [2 sentences: why it scored high + what decision or outcome this research unlocks]

**#2 [Topic]:** [2 sentences: same format]

**#3 [Topic]:** [2 sentences: same format]
```

Keep the table scannable. Rationales must be specific to the user's stated business context, not generic.
