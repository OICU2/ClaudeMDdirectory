---
name: account-based-marketing-target-list
description: >
  Builds a prioritized target account list by applying firmographic and technographic filters, then maps each account to tailored outreach assets. Use when someone says "help me build a target account list," asks about identifying ideal accounts for ABM, wants to define ICP criteria for account selection, needs to prioritize prospects for outbound campaigns, or is trying to match accounts to personalized messaging. Automatically activates when ABM strategy, account scoring, or ICP-to-account matching is the goal.
category: marketing
tags: [abm, account-based-marketing, icp, prospecting, outbound]
author: community
---

# ABM Target Account List Builder

This skill defines firmographic and technographic selection criteria, scores and tiers candidate accounts, and maps each tier to specific outreach assets and messaging angles.

## Workflow

### Step 1 — Capture ICP Parameters
Collect or confirm the following inputs before proceeding:
- **Firmographic filters**: industry verticals, employee headcount range, annual revenue range, geography, company stage (startup/mid-market/enterprise), ownership type (public/private/PE-backed)
- **Technographic filters**: current tech stack (tools they use or must use to be a fit), tools they likely use based on vertical, integrations required
- **Behavioral signals** (optional): recent funding rounds, hiring surges in relevant departments, leadership changes, product launches, intent data signals
- **Exclusion criteria**: competitors, existing customers, embargoed regions, company size floor/ceiling

### Step 2 — Define Scoring Model
Assign point weights across three dimensions:

| Dimension | Criteria | Weight |
|---|---|---|
| Firmographic Fit | Industry match, size match, revenue match | 40% |
| Technographic Fit | Stack alignment, integration readiness | 35% |
| Timing Signals | Funding, hiring, intent, trigger events | 25% |

Score each account 1–10 per dimension. Multiply by weight. Sum to a composite score out of 10.

### Step 3 — Tier Accounts
- **Tier 1 (Score 8–10)**: High-touch, fully personalized outreach. Assign named AE + SDR pair. 1:1 assets.
- **Tier 2 (Score 5–7.9)**: Moderate personalization. Segment-level messaging. Sequenced outreach.
- **Tier 3 (Score 3–4.9)**: Low-touch. Programmatic or channel-based outreach. Template messaging.
- **Disqualified (<3)**: Remove from active list. Flag for nurture pool or reassessment in 6 months.

### Step 4 — Match Accounts to Outreach Assets
For each tier, specify:
- **Outreach channels**: cold email, LinkedIn, direct mail, paid, event invitation, partner referral
- **Content assets to deploy**: case studies (by vertical/use case), ROI calculators, battle cards, executive briefs, demo invitations
- **Personalization hooks**: reference their tech stack, recent news, role-specific pain points, competitive displacement angle
- **Sequence cadence**: number of touches, spacing, channel mix per tier

### Step 5 — Validate List Quality
Before finalizing:
- Cross-check against CRM to remove duplicates, existing customers, and active opportunities
- Confirm contact coverage (at least 2–3 buying committee members per Tier 1 account)
- Flag accounts missing key firmographic data for enrichment (ZoomInfo, Clearbit, LinkedIn Sales Navigator)
- Set list review cadence (recommended: monthly refresh for Tier 1, quarterly for Tier 2–3)

## Output Format

Produce the following deliverables in sequence:

**1. ICP Criteria Summary** (bullet list)
- Confirmed firmographic filters
- Confirmed technographic filters
- Active exclusion rules

**2. Scored Account Table** (markdown table)
Columns: `Account Name | Industry | Headcount | Revenue | Tech Stack Notes | Firmographic Score | Technographic Score | Signal Score | Composite Score | Tier`

**3. Tier Assignment Summary**
- Count of accounts per tier
- Notable Tier 1 accounts called out individually with rationale (2–3 sentences each)

**4. Outreach Asset Map** (one section per tier)
