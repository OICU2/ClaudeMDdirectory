---
name: inbound-lead-response-routing
description: >
  Designs a triage and routing workflow for inbound leads based on fit criteria, lead source, and rep capacity to minimize response time and maximize conversion. Use when someone says "we need a better way to handle incoming leads," asks about how to route leads to the right sales rep, or wants to reduce response time on new inquiries. Also activates when someone mentions leads falling through the cracks, needs to build a lead assignment process, or wants to prioritize inbound prospects by quality.
category: sales
tags: [lead-routing, inbound-sales, triage, sales-ops, conversion]
author: community
---

# Inbound Lead Response & Routing Skill

This skill builds a structured triage and routing system for inbound leads that assigns prospects to the right rep at the right time based on fit, source, and capacity — and Claude will use it whenever someone needs to systematize how their team handles new inquiries.

## Lead Routing Workflow

### Step 1: Gather Inputs
Before designing the workflow, collect:
- **Lead sources** in play (website form, demo request, content download, referral, paid ad, event, direct contact)
- **ICP definition** — key fit criteria (company size, industry, revenue, geography, technology stack, job title)
- **Rep roster** — names, territories, specializations, current capacity or quota attainment
- **SLA targets** — desired response time per lead tier (e.g., Tier 1 = 5 min, Tier 2 = 1 hr, Tier 3 = 24 hr)
- **Existing tools** — CRM (Salesforce, HubSpot), routing software (LeanData, Chili Piper), or manual process

### Step 2: Define Lead Tiers
Create 3 tiers based on fit score and intent signals:

| Tier | Criteria | Response Target |
|------|----------|-----------------|
| Tier 1 — Hot | Meets 4+ ICP criteria AND high-intent signal (demo request, pricing page, direct contact) | ≤ 5 minutes |
| Tier 2 — Warm | Meets 2–3 ICP criteria OR medium-intent signal (content download, webinar, referral) | ≤ 1 hour |
| Tier 3 — Cold | Meets ≤ 1 ICP criterion AND low-intent signal (newsletter signup, generic form) | ≤ 24 hours / nurture sequence |

### Step 3: Build the Routing Logic
Apply routing rules in priority order:

1. **Account ownership first** — if the lead's company is an existing account or open opportunity, route to the owning rep immediately, regardless of tier
2. **Territory/segment match** — route by geo, vertical, or company size as defined in rep assignments
3. **Specialization match** — if lead source or industry aligns with a rep's expertise, prioritize that rep
4. **Round-robin fallback** — for Tier 1 and Tier 2 leads with no ownership or territory match, use weighted round-robin based on current capacity (reps at >80% quota excluded from overflow until rebalanced)
5. **Tier 3 auto-enrollment** — send directly to nurture sequence; only assign a rep if lead engages with 2+ nurture touchpoints

### Step 4: Define Rep Capacity Rules
- Set a **daily new lead cap** per rep (recommended: 5–8 Tier 1 leads/day to protect response quality)
- Define an **overflow threshold** — when a rep hits cap, reroute to next available rep or queue
- Build a **backup assignment** for out-of-office reps: primary backup, then manager, then round-robin pool
- Review capacity weekly; adjust weights in round-robin logic based on quota attainment and pipeline load

### Step 5: Set Response & Follow-Up SLAs
For each tier, define:
- **First touch** — who contacts the lead and by what channel (call, email, LinkedIn)
- **Fallback touch** — if no response in X hours, what happens next (automated email, SDR follow-up, reassignment)
- **Escalation trigger** — when does a rep's manager get notified of a missed SLA

Example:
- Tier 1: Rep calls within 5 min → if no answer
