---
name: icp-lookalike-signal-builder
description: >
  Analyzes your best existing customers to extract firmographic, behavioral, and technographic
  signals that define a lookalike targeting profile for outbound and paid campaigns. Use when
  someone says "help me find more customers like our best ones," asks about building an ICP,
  wants to identify what our top accounts have in common, needs signals for a lookalike audience,
  or is trying to improve targeting for paid or outbound campaigns.
category: marketing
tags: [icp, lookalike-audiences, targeting, firmographics, outbound]
author: community
---

# ICP Lookalike Signal Builder

This skill analyzes a set of existing high-value customers to extract the firmographic, behavioral, and technographic patterns that define a lookalike targeting profile usable in outbound sequences, LinkedIn Ads, intent platforms, or programmatic campaigns.

## Signal Extraction Workflow

### Step 1: Gather Customer Input
Ask the user to provide a list of 5–20 of their best customers. "Best" should be defined by one of:
- Highest ACV or LTV
- Fastest time-to-value or shortest sales cycle
- Lowest churn / longest retention
- Highest expansion revenue

If the user hasn't defined "best," ask them to pick one criterion before proceeding.

### Step 2: Extract Firmographic Signals
For each customer provided, extract or prompt the user to supply:
- **Industry / vertical** (NAICS or plain language)
- **Company size** (employee count range, revenue range)
- **Geography** (country, region, metro)
- **Business model** (B2B, B2C, marketplace, SaaS, services, etc.)
- **Company age / growth stage** (startup, scale-up, enterprise, public)
- **Funding status** (bootstrapped, Series A–D, PE-backed, public)

Identify the 3–5 firmographic attributes that appear in ≥60% of the best-customer list. Flag these as **primary firmographic signals**.

### Step 3: Extract Behavioral Signals
Ask the user to recall or describe patterns across these customers:
- What triggered their buying decision? (event, pain, initiative)
- What job titles were involved in the deal? (champion, economic buyer, blocker)
- What content or channels did they engage with before buying?
- Did they come inbound or outbound? If outbound, what sequence/touch worked?
- Were there any buying triggers (e.g., new hire, funding, product launch, compliance deadline)?

Identify the 2–4 behavioral patterns that appear most consistently. Flag as **behavioral trigger signals**.

### Step 4: Extract Technographic Signals
Ask the user:
- What tools or platforms do these customers commonly use? (CRM, ERP, data stack, ad platforms, etc.)
- Are there technology combinations that correlate with fit? (e.g., "uses Salesforce + Marketo + Snowflake")
- Are there tools that indicate they're NOT a fit?

Identify 2–3 technographic indicators. Flag positive ones as **tech stack fit signals** and negative ones as **tech stack disqualifiers**.

### Step 5: Score and Prioritize Signals
Rank all extracted signals by:
1. **Frequency** — what % of best customers share this signal
2. **Exclusivity** — does this signal also appear in bad-fit or churned customers? (lower score if yes)
3. **Actionability** — can this signal be targeted in LinkedIn, ZoomInfo, Apollo, 6sense, or similar tools?

Drop any signal that scores low on all three dimensions.

### Step 6: Build the Lookalike Profile
Synthesize the top signals into a targeting profile with three tiers:
- **Must-have signals** (2–3): If a prospect doesn't match these, deprioritize
- **Strong fit signals** (3–5): Presence of these increases confidence
- **Bonus signals** (2–3): Nice-to-have, use for prioritization within a matched list

### Step 7: Map to Activation Channels
For each tier of signals, suggest where and how to activate them:
- LinkedIn Campaign Manager (job title, company size, industry, seniority)
- Apollo / ZoomInfo / Clay (firmographic + technographic filters)
- 6sense / Bomb
