---
name: prospect-company-trigger-alert-builder
description: >
  Builds a structured monitoring brief that maps specific company events to personalized outreach triggers and response playbooks. Use when someone says "set up alerts for a prospect," asks about "tracking company signals for outreach," or wants to "know when to reach out to a target account." Also activates when someone needs to "monitor a company for sales opportunities" or wants to "build a trigger map for a prospect."
category: sales
tags: [prospecting, account-monitoring, sales-triggers, outreach, signals]
author: community
---

# Prospect Company Trigger Alert Builder

This skill builds a structured monitoring brief for a target prospect company, mapping specific business events (funding rounds, leadership changes, product launches, hiring surges, etc.) to personalized outreach triggers and recommended messaging angles.

## Workflow

1. **Gather prospect context** — Ask for the target company name, industry, and any known pain points or relevant products/services the seller offers. If the user has already provided this, skip directly to building the brief.

2. **Identify trigger categories** — For the given company, map relevant monitoring signals across these categories:
   - **Financial events**: Funding rounds, IPO filings, acquisitions, earnings calls, cost-cutting announcements
   - **Leadership changes**: New C-suite or VP hires, departures, reorgs, board additions
   - **Product/market moves**: Product launches, new market entries, partnerships, rebrands
   - **Hiring signals**: Job postings that indicate strategic investment (e.g., hiring 10+ engineers in a new division)
   - **Pain/risk signals**: Negative press, customer complaints, compliance issues, competitive losses
   - **Growth signals**: Office expansions, headcount milestones, award wins, analyst recognition

3. **Map each trigger to an outreach angle** — For every trigger identified, define:
   - What the event signals about the company's current state or need
   - The specific pain point or opportunity it creates
   - A personalized outreach hook tied to the seller's offering

4. **Define monitoring sources** — For each trigger category, specify where to monitor: LinkedIn, Crunchbase, press release feeds, job boards (LinkedIn Jobs, Greenhouse, Lever), G2/Trustpilot reviews, SEC EDGAR, Google Alerts, industry news outlets.

5. **Set priority and timing rules** — Assign each trigger a response urgency:
   - **Immediate (within 24 hours)**: Leadership changes, funding rounds, acquisitions
   - **Within 1 week**: Product launches, major partnerships, significant hiring surges
   - **Monthly review**: Steady hiring trends, minor press mentions, award wins

## Output Format

Produce a structured Prospect Trigger Alert Brief with the following sections:

---

**PROSPECT TRIGGER ALERT BRIEF**
**Company**: [Name]
**Industry**: [Industry]
**Prepared for**: [Seller's product/service context]

---

**TRIGGER MAP**

| Trigger Event | Signal Source | What It Means | Outreach Angle | Response Urgency |
|---|---|---|---|---|
| [Event] | [Where to monitor] | [Strategic implication] | [Personalized hook] | [Immediate / 1 Week / Monthly] |

*(Include 8–12 rows covering all trigger categories)*

---

**TOP 3 PRIORITY TRIGGERS**
List the three highest-value triggers for this specific prospect with a 2–3 sentence outreach message draft for each.

---

**MONITORING SETUP CHECKLIST**
A bulleted checklist of exact steps to set up monitoring (e.g., "Set Google Alert for '[Company Name] funding'", "Follow company LinkedIn page", "Save Crunchbase profile to watchlist").

---

**CADENCE RECOMMENDATION**
A brief paragraph recommending how often the seller should review this brief and under what conditions they should pause or accelerate outreach.

---

Keep the tone direct and practical. Total output should be comprehensive but scannable — the seller should be able to act on it immediately without additional research.
