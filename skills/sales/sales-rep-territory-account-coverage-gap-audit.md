---
name: sales-rep-territory-account-coverage-gap-audit
description: >
  Analyzes a sales territory to surface high-potential accounts that are being under-worked relative to their fit score and revenue opportunity. Use when someone says "I'm not hitting my number and don't know where to focus," asks about which accounts in their territory deserve more attention, wants to find coverage gaps in their book of business, needs to prioritize outreach across a large account list, or wonders why high-fit accounts aren't converting.
category: sales
tags: [territory-management, account-prioritization, pipeline-coverage, sales-productivity, gap-analysis]
author: community
---

# Sales Rep Territory Account Coverage Gap Audit

This skill audits a rep's territory to identify high-potential accounts receiving insufficient outreach, then produces a prioritized action list to close coverage gaps and protect revenue potential.

## Gap Audit Workflow

### Step 1: Collect Territory Data
Ask the rep to provide or paste the following for their account list (CSV, table, or freeform):
- Account name
- Fit score or ICP tier (if available — A/B/C or numeric 1–10)
- Estimated annual contract value (ACV) or revenue potential
- Last outreach date (or "never")
- Number of touches in the last 30/60/90 days
- Current pipeline stage (prospect, active, stalled, closed-lost, customer)

If fit scores are missing, ask qualifying questions to derive a proxy:
- Company size (employees or revenue)
- Industry match to ICP
- Technology stack alignment
- Recent buying signals (job postings, funding, news)

### Step 2: Score Coverage Gaps
For each account, calculate a **Coverage Gap Score** using this logic:

```
Gap Score = (Fit Score × Revenue Potential Weight) ÷ (Recency Score × Touch Frequency)
```

Apply these weights:
- **Fit Score**: Use raw tier (A=3, B=2, C=1) or normalize numeric scores to 1–3
- **Revenue Potential Weight**: High (>$50K ACV) = 3, Mid ($10K–$50K) = 2, Low (<$10K) = 1
- **Recency Score**: Touched in last 30 days = 3, 31–90 days = 2, 90+ days or never = 1
- **Touch Frequency**: 3+ touches in 90 days = 3, 1–2 touches = 2, 0 touches = 1

Higher Gap Score = bigger opportunity being ignored.

### Step 3: Segment Into Priority Tiers

**Tier 1 — Critical Gaps (Act This Week)**
- Fit Score A or B + High/Mid ACV + Last touch > 60 days or never contacted

**Tier 2 — At-Risk Accounts (Act This Month)**
- Fit Score A or B + any ACV + 1–2 touches in 90 days with no pipeline movement
- Stalled deals with no activity in 30+ days

**Tier 3 — Low-Priority Review**
- Fit Score C accounts consuming disproportionate rep time vs. revenue potential
- Flag these as candidates for deprioritization or reassignment

### Step 4: Identify Root Cause Patterns
Look for systemic issues across the gap list and call them out explicitly:
- Geographic clustering (all neglected accounts in one region)
- Vertical clustering (entire industry segment being ignored)
- Stage clustering (all gaps at a specific pipeline stage)
- Recency pattern (rep went dark after a specific date — vacation, quarter-end push)

### Step 5: Generate Re-Engagement Actions
For each Tier 1 and Tier 2 account, specify:
- Recommended next action (cold re-engage, executive outreach, personalized email, LinkedIn touch, phone blitz)
- Suggested message angle based on account characteristics (ROI, competitive risk, expansion signal)
- Ideal outreach window (if buying signals or fiscal year data are available)

## Output Format

Produce the following sections in order:

---

**Territory Coverage Gap Audit**
*Rep: [Name or "Your Territory"] | Audit Date: [Today] | Accounts Analyzed: [N]*

---

**Executive Summary**
3–4 sentences covering: total accounts reviewed, number of critical gaps found, estimated pipeline at risk (
