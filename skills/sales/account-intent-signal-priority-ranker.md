---
name: account-intent-signal-priority-ranker
description: >
  Scores and ranks target accounts by aggregating intent signals such as website visits, content
  downloads, ad engagement, and third-party buying signals to surface which accounts to contact
  first. Use when someone says "which accounts should we prioritize this week," asks about "which
  companies are showing buying intent," wants to "rank our target list by engagement," needs to
  "figure out who's in-market right now," or asks "who should the sales team call first."
category: sales
tags: [intent-signals, account-prioritization, sales-prospecting, abm, lead-scoring]
author: community
---

# Account Intent Signal Priority Ranker

This skill aggregates and scores behavioral intent signals across target accounts to produce a ranked outreach priority list with actionable context for sales reps.

## Signal Scoring Workflow

### Step 1: Collect Intent Signal Data
Prompt the user to provide available signal data in any format (CSV, pasted table, bullet list). Required fields:
- Account name
- Signal type (website visit, content download, ad click, email open, review site visit, third-party intent topic, event attendance)
- Signal date or recency (days ago)
- Signal volume or frequency (number of occurrences)
- Signal source (owned, paid, third-party like Bombora/G2/Demandbase)

If data is missing, ask targeted questions: "Do you have website visit data? Any third-party intent topics firing?"

### Step 2: Apply Weighted Scoring Model
Score each signal using this default weighting (adjust if user specifies custom weights):

| Signal Type | Base Score |
|---|---|
| Demo request / contact form | 100 |
| Pricing page visit | 80 |
| Third-party intent topic match | 70 |
| Product/solution page visit (3+ pages) | 60 |
| Case study or ROI content download | 55 |
| Webinar/event attendance | 50 |
| Ad click-through | 35 |
| Blog/educational content visit | 20 |
| Email open | 15 |

**Recency multiplier:**
- Within 7 days: ×2.0
- 8–14 days: ×1.5
- 15–30 days: ×1.0
- 31–60 days: ×0.5
- 60+ days: ×0.2

**Frequency bonus:** Add 10 points per additional signal occurrence beyond the first (cap at +50).

**Account-level score** = Sum of all weighted signal scores across all contacts at the account.

### Step 3: Segment Accounts into Priority Tiers
- **Tier 1 – Hot (Score 200+):** Contact within 24 hours
- **Tier 2 – Warm (Score 100–199):** Contact within 3 business days
- **Tier 3 – Nurture (Score 50–99):** Enroll in nurture sequence, revisit in 2 weeks
- **Tier 4 – Monitor (Score <50):** No immediate action, track for signal increases

### Step 4: Generate Outreach Context
For each Tier 1 and Tier 2 account, identify:
- Top 2–3 signals that drove the score
- Suggested talk track angle (e.g., "They downloaded the ROI calculator — lead with cost savings")
- Recommended next action (call, LinkedIn connect, personalized email)
- Any stakeholder names associated with the signals (if provided)

## Output Format

Produce a structured priority report with the following sections:

---

**Account Intent Priority Report**
*Generated: [date]*

**Summary:** X accounts scored. Y are Tier 1 (Hot), Z are Tier 2 (Warm).

---

**🔴 TIER 1 — Contact Today**

| Rank | Account | Score | Top Signals | Recommended Action |
|---|---|---|---|---|
| 1 | Acme Corp | 340 | Pricing page (3 visits, 2 days ago), Bombora intent: "CRM software" | Call VP Sales — reference pricing interest |
| 2 | ... | | | |

**🟡 TIER 2 — Contact This Week**
