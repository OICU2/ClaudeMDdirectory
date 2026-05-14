---
name: sales-trigger-event-monitoring
description: >
  Identifies and prioritizes prospect outreach opportunities based on real-world trigger events. Use when someone says "find me reasons to reach out to prospects," asks about "what's happening at target accounts," wants to "monitor companies for sales opportunities," needs to "prioritize my outreach list based on recent news," or is looking to "turn company news into sales conversations."
category: sales
tags: [prospecting, trigger-events, account-monitoring, outreach, pipeline]
author: community
---

# Sales Trigger Event Monitoring

This skill scans for and prioritizes high-signal trigger events at target accounts—funding rounds, leadership changes, product launches, hiring surges, and more—then generates timely, relevant outreach rationale for each prospect.

## Trigger Event Identification & Prioritization Workflow

**Step 1: Collect Target Accounts**
- Ask for a list of company names, domains, or a prospect list if not provided
- Confirm the time window to scan (default: last 30 days)
- Ask whether to focus on specific trigger types or all high-signal events

**Step 2: Identify Trigger Events by Category**
Scan and flag events across these priority tiers:

*Tier 1 — Immediate Outreach (act within 48 hours):*
- New funding round announced (Seed through Series D+, or IPO filing)
- C-suite or VP-level hire or departure (CEO, CRO, CMO, CTO, CFO)
- Acquisition announced (company bought or is acquiring)
- New product launch or major feature release

*Tier 2 — High Priority (act within 1 week):*
- Rapid headcount growth (10%+ increase in open roles in target department)
- Entry into a new market or geographic expansion
- Major partnership or enterprise customer announcement
- Rebranding or company pivot

*Tier 3 — Nurture Signals (act within 2 weeks):*
- Award, ranking, or recognition (e.g., Best Places to Work, Inc. 5000)
- Speaking engagement or conference presence by a key contact
- Published thought leadership tied to a pain point your product solves
- Regulatory change or compliance requirement in their industry

**Step 3: Map Trigger to Outreach Angle**
For each trigger event identified:
- State the specific event and source (news article, LinkedIn, press release, job board)
- Explain *why* this trigger creates a buying window or pain point
- Identify the best persona to contact (role title, not just company)
- Draft a 1–2 sentence outreach hook that references the trigger naturally without being creepy

**Step 4: Prioritize the Full List**
- Rank all flagged accounts by tier, then recency
- Flag any accounts with multiple simultaneous triggers as "hot accounts"
- Note accounts with no recent signals as "low priority / monitor only"

## Output Format

Produce a structured report with the following sections:

---

**🔥 Hot Accounts (Multiple Triggers)**
| Company | Triggers | Best Contact Role | Recommended Action |
|---|---|---|---|
| [Name] | [Trigger 1], [Trigger 2] | [Role] | [Call/Email/LinkedIn within X days] |

---

**Tier 1 — Immediate Outreach**
For each company:
- **Company:** [Name]
- **Trigger:** [Event + date + source URL or publication]
- **Why it matters:** [1 sentence on the business implication]
- **Best contact:** [Role/title]
- **Outreach hook:** "[Ready-to-use 1–2 sentence opener referencing the trigger]"

---

**Tier 2 — High Priority This Week**
[Same format as Tier 1]

---

**Tier 3 — Nurture Queue**
[Same format as Tier 1, condensed to bullet form]

---

**No Signal Detected**
- [Company A], [Company B] — no qualifying events in the past 30 days. Revisit in 2 weeks.

---

Total length scales with the number of accounts (roughly 3–5 lines per company). Outreach hooks must be specific to the trigger—never generic. Always cite a source or suggest where to verify the event if generating from provided context.
