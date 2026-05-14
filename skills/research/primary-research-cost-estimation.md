---
name: primary-research-cost-estimation
description: >
  Builds a detailed cost model for a planned primary research initiative, breaking down expenses
  across recruitment, participant incentives, tooling, moderation, analysis, and reporting.
  Use when someone says "how much will this research cost," asks about budgeting for user interviews
  or surveys, wants to estimate resources for a usability study, needs to plan spending for a
  field research project, or is trying to justify research investment to stakeholders.
category: research
tags: [research, budgeting, cost-estimation, ux-research, planning]
author: community
---

# Primary Research Cost Estimation

This skill produces a line-item cost model for a primary research initiative, covering every major expense category from recruiting through final reporting, so teams can budget accurately and get stakeholder buy-in.

## Cost Estimation Workflow

1. **Clarify research scope** — Ask for or extract: research method (interviews, surveys, usability tests, diary studies, ethnography), number of participants, session length, timeline, and geographic scope (remote vs. in-person, domestic vs. international).

2. **Estimate recruitment costs** — Calculate based on method and audience:
   - DIY recruiting (email lists, social, existing customers): $0–$500 in team hours
   - Recruitment agency or panel (e.g., User Interviews, Respondent): $50–$150 per recruit screened, $150–$400 per qualified participant
   - Hard-to-reach audiences (executives, medical professionals): multiply standard rates by 2–5×

3. **Calculate participant incentives** — Apply standard benchmarks per session length:
   - 15–30 min: $30–$75
   - 45–60 min: $75–$150
   - 90 min: $125–$200
   - Diary/longitudinal (per week): $50–$100
   - Adjust upward 25–50% for specialized or professional audiences

4. **Estimate tooling and facility costs** — Include as applicable:
   - Video conferencing / session recording (Zoom, Lookback, UserZoom): $0–$600/month
   - Survey platform (Qualtrics, Typeform Pro): $0–$500/study
   - In-person facility rental: $500–$2,000/day
   - Eye-tracking or biometric equipment rental: $500–$3,000/day
   - Note-taking or synthesis tools (Dovetail, Miro): $0–$200/month

5. **Calculate researcher and analyst hours** — Break out by role and phase:
   - Study design and screener writing: 4–12 hours
   - Recruiting coordination: 2–8 hours
   - Moderation / data collection: (session length × participant count) + 25% buffer
   - Transcription: 1 hour per 1 hour of sessions, or $1.25–$2.50/min for service
   - Analysis and synthesis: 1.5–2× total session hours
   - Report writing and presentation: 8–24 hours
   - Multiply hours by fully-loaded hourly rate (use $75–$150/hr as default if unknown)

6. **Add contingency buffer** — Apply 10–15% to total for no-shows, reschedules, scope creep, and tool overages.

7. **Flag cost drivers and trade-offs** — Identify the top 2–3 factors inflating cost and offer one alternative for each (e.g., agency recruiting vs. panel, in-person vs. remote).

## Output Format

Produce a structured cost estimate with the following sections:

**Study Summary** — 2–3 sentences restating the research method, participant count, and timeline assumed.

**Line-Item Cost Table** — Markdown table with columns: Category | Item | Unit Cost | Quantity | Subtotal

**Phase Breakdown** — Bullet list showing estimated hours by phase (design, recruiting, data collection, analysis, reporting) and total researcher hours.

**Total Cost Summary** — Three rows: Base Total | Contingency (10–15%) | **Estimated Total Range**

**Cost Drivers & Trade-offs** — Numbered list of 2–3 items, each with: driver identified, why it's expensive, and one lower-cost alternative.

**Assumptions** — Bulleted list of every assumption made (rates
