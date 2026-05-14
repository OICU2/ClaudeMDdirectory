---
name: sales-objection-pattern-analysis
description: >
  Aggregates objections logged across closed-lost deals and active opportunities to surface the most
  frequent blockers and recommend targeted response strategies. Use when someone says "we keep losing
  deals for the same reasons," asks about why prospects are pushing back, wants to understand common
  sales objections, needs to prepare reps for recurring deal blockers, or is trying to figure out
  what's killing pipeline.
category: sales
tags: [sales, objections, pipeline, win-loss, deal-analysis]
author: community
---

# Sales Objection Pattern Analysis

This skill analyzes objection data from closed-lost deals and active opportunities to identify the most damaging recurring blockers and deliver actionable response playbooks for each.

## Analysis Workflow

### 1. Gather Objection Data
Ask the user to provide one or more of the following:
- CRM export or pasted notes from closed-lost deals (stage, objection text, deal size, industry, rep)
- Objection notes from active at-risk opportunities
- Call transcripts, email threads, or deal debrief summaries
- Any existing objection log, spreadsheet, or tagging system output

If no data is provided, prompt the user with: "Please share your closed-lost notes, CRM export, or any objection records — even raw text works."

### 2. Extract and Normalize Objections
- Parse each entry for the core objection (strip filler, normalize phrasing)
- Map objections to standard categories:
  - **Price / Budget** — cost too high, no budget, cheaper alternative
  - **Timing** — not the right time, revisit next quarter, freeze on spending
  - **Competition** — going with a competitor, evaluating alternatives
  - **Value / ROI** — unclear ROI, can't justify the investment
  - **Authority** — need buy-in from others, not the decision-maker
  - **Product Fit** — missing feature, wrong use case, integration concerns
  - **Trust / Risk** — too new, unproven, security/compliance concerns
- Flag multi-objection deals (deals lost to more than one blocker)

### 3. Quantify and Rank Patterns
For each objection category, calculate:
- **Frequency**: how many deals/opportunities included this objection
- **Revenue at risk**: total deal value affected (if available)
- **Stage where it surfaces**: discovery, demo, proposal, negotiation, etc.
- **Segments most affected**: by industry, company size, rep, or product line if data supports it

Rank objections from highest to lowest impact (frequency × revenue weight).

### 4. Identify Root Causes
For each top objection, assess likely root causes:
- Is it a positioning problem (wrong ICP, wrong message)?
- Is it a process problem (objection handled too late, wrong person in the room)?
- Is it a product problem (genuine gap vs. perceived gap)?
- Is it a rep skill problem (inconsistent handling across the team)?

### 5. Build Response Strategies
For each top 3–5 objections, generate a targeted response strategy:
- **Reframe**: how to reposition the objection before it becomes a blocker
- **Proof points**: stats, case studies, or social proof to deploy
- **Discovery questions**: questions to surface this objection earlier
- **Talk track**: a concise 3–5 sentence response reps can adapt
- **Escalation path**: when to bring in leadership, finance, or technical resources

## Output Format

Produce a structured report with the following sections:

---

**Objection Pattern Summary**
- Total deals/opportunities analyzed: N
- Total distinct objections identified: N
- Date range covered: [if available]

---

**Top Objections Ranked by Impact**

| Rank | Objection Category | Frequency | Revenue at Risk | Primary Stage | Key Segments |
|------|--------------------|-----------|-----------------|---------------|--------------|
| 1    | [Category]         | N deals   | $X              | [Stage]       | [Segment]    |
| ...  | ...                | ...       | ...             | ...           | ...          |

---

**Deep Dive: Top 3–5 Objections**

For each objection:

> **[Objection Category]**
> - **What reps are hearing**: [verbatim or normalized examples]
