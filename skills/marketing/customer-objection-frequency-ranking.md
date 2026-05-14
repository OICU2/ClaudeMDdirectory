---
name: customer-objection-frequency-ranking
description: >
  Analyzes sales call notes, support tickets, and survey responses to identify and rank the most common customer objections by frequency. Use when someone says "what are customers complaining about most," asks about "top objections from sales calls," or wants to "prioritize which objections to tackle in our messaging." Also activates when someone needs to "find patterns in customer pushback" or wants to "see what's blocking conversions."
category: marketing
tags: [customer-objections, sales-analysis, voice-of-customer, conversion-optimization, content-strategy]
author: community
---

# Customer Objection Frequency Ranking

This skill processes raw customer feedback from multiple sources—sales notes, support tickets, and surveys—to surface and rank the most frequent objections so marketing teams can address them directly in campaigns and content.

## Workflow

### 1. Ingest Source Material
- Accept one or more of the following inputs: pasted sales call notes, exported support ticket text, survey open-response fields, or chat transcripts
- If no data is provided, ask the user to paste or describe the source material before proceeding
- Confirm the time range and source types represented in the data

### 2. Extract Objections
- Scan all input text for statements expressing hesitation, doubt, refusal, or concern
- Flag phrases like "too expensive," "not sure if," "we already use," "doesn't integrate," "too complicated," "need approval," "not a priority," and similar resistance signals
- Treat semantically similar objections as one category (e.g., "costs too much," "out of budget," and "price is high" all map to **Pricing**)

### 3. Categorize and Deduplicate
- Group objections into named categories (e.g., Pricing, Implementation Complexity, Competitor Preference, ROI Uncertainty, Timing, Internal Buy-In, Feature Gaps)
- Create a new category only when an objection clearly does not fit existing ones
- Record the raw count of mentions per category across all sources

### 4. Rank by Frequency
- Sort categories from highest to lowest mention count
- Calculate each category's percentage share of total objections
- Note which source types (sales vs. support vs. survey) contributed most to each category

### 5. Flag Severity and Urgency Signals
- Mark objections that appear across multiple source types as **cross-channel** (higher strategic priority)
- Flag any objection that increased in frequency in the most recent time period if comparative data is available
- Note objections tied to lost deals or churned customers if that context is present in the input

## Output Format

Produce a ranked objection report with the following structure:

---

**Customer Objection Frequency Report**
*Sources analyzed: [list source types] | Total objections identified: [N]*

| Rank | Objection Category | Mentions | % of Total | Source Types | Priority Flag |
|------|--------------------|----------|------------|--------------|---------------|
| 1 | Pricing | 47 | 31% | Sales, Support | 🔴 Cross-channel |
| 2 | Implementation Complexity | 29 | 19% | Sales, Survey | 🔴 Cross-channel |
| 3 | Competitor Preference | 18 | 12% | Sales | — |
| ... | ... | ... | ... | ... | ... |

**Top 3 Objections — Representative Quotes**

1. **Pricing** — *"We love the product but it's hard to justify the cost to leadership."*
2. **Implementation Complexity** — *"We don't have the dev resources to set this up right now."*
3. **Competitor Preference** — *"We're already locked into [Competitor] for the next year."*

**Marketing Recommendations**
- List 3–5 specific campaign or content actions tied directly to the top-ranked objections (e.g., "Create ROI calculator landing page to counter Pricing objection," "Publish implementation case study to address Complexity concerns")

---

- Keep the table scannable; limit to top 10 categories unless the user requests full output
- Use plain language in recommendations; tie each to a specific objection rank
- If input data is thin (fewer than 20 total objections), note the limitation and caveat confidence levels
