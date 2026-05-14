---
name: customer-objection-heatmap-builder
description: >
  Aggregates and ranks customer objections from sales calls, reviews, and support tickets to surface the most critical purchase barriers. Use when someone says "we're losing deals but don't know why," asks about "what objections customers raise most often," or wants to "map out friction points in the sales funnel." Also triggers when someone needs to "prioritize which objections to address first" or wants to "analyze why customers aren't converting."
category: marketing
tags: [sales, conversion, customer-research, objections, analytics]
author: community
---

# Customer Objection Heatmap Builder

This skill processes raw objection data from multiple sources and produces a ranked, categorized heatmap of purchase barriers that marketing and sales teams can act on immediately.

## Workflow

### 1. Data Intake
- Accept input in any of these formats: pasted call transcripts, CSV exports, raw text notes, review snippets, or support ticket summaries
- If no data is provided, prompt the user to paste at least one data source before proceeding
- Identify which sources are present: sales calls, online reviews, support tickets, chat logs, survey responses

### 2. Objection Extraction
- Scan all input for statements expressing hesitation, refusal, comparison to alternatives, price sensitivity, confusion, or unmet expectations
- Extract each objection as a discrete statement, preserving the original language where possible
- Tag each objection with its source type (call, review, ticket, etc.)

### 3. Objection Categorization
Group extracted objections into standard categories:
- **Price / ROI** — too expensive, unclear value, budget constraints
- **Trust / Credibility** — skepticism about claims, unknown brand, lack of proof
- **Fit / Relevance** — wrong use case, missing features, incompatible with workflow
- **Timing** — not a priority now, already locked into another contract
- **Complexity / Effort** — hard to implement, requires too much change, steep learning curve
- **Competitor Preference** — already using X, X does it better or cheaper
- **Authority / Process** — need to consult others, procurement barriers
- Add a custom category if a cluster of objections doesn't fit the above

### 4. Frequency Scoring
- Count how many distinct instances fall into each category and sub-theme
- Calculate a frequency percentage: (category count / total objections) × 100
- Flag any objection that appears in more than 20% of entries as a **Critical Barrier**
- Flag 10–19% as **High Priority**, 5–9% as **Medium**, below 5% as **Low**

### 5. Severity Weighting (if signal data is available)
- If deal size, churn value, or ticket escalation level is provided, weight objections by financial impact
- Recalculate a Weighted Priority Score = (Frequency % × 0.6) + (Avg. Impact Score × 0.4)
- If no severity data exists, rely on frequency alone and note the limitation

### 6. Pattern Analysis
- Identify which objections cluster together (e.g., price objections often co-occur with ROI objections)
- Note any objections that appear only in one source type (e.g., complexity objections only in support tickets, not calls)
- Flag source-specific patterns with a brief interpretation

### 7. Root Cause Hypotheses
For each Critical and High Priority objection category, generate 2–3 hypotheses about the underlying cause (e.g., "Price objections may stem from positioning against enterprise competitors rather than SMB alternatives").

### 8. Recommended Actions
For each Critical and High Priority category, suggest:
- One messaging fix (e.g., reframe ROI with a specific metric)
- One sales enablement asset (e.g., objection-handling script, case study)
- One product or process change to investigate (if applicable)

## Output Format

Produce a structured report with the following sections:

---

**CUSTOMER OBJECTION HEATMAP**
*Sources analyzed: [list] | Total objections extracted: [n] | Date: [if provided]*

---

**HEATMAP SUMMARY TABLE**

| Rank | Objection Category | Frequency | % of Total | Priority Level |
|------|--------------------|-----------|------------|----------------|
| 1    | [Category]         | [n]       | [%
