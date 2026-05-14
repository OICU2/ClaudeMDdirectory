---
name: lost-deal-autopsy-framework
category: sales
description: >
  Analyzes closed-lost deals by synthesizing CRM data, call notes, and competitor intelligence to surface repeatable loss patterns and targeted coaching opportunities. Use when someone says "we keep losing to the same competitor," asks why deals are falling through, wants to understand loss patterns, needs to debrief a lost deal, or is trying to figure out where the sales process breaks down.
tags: [sales, deal-analysis, competitive-intelligence, coaching, crm]
author: community
---

# Lost Deal Autopsy Framework

This skill conducts structured post-mortems on closed-lost deals, turning raw CRM notes, call transcripts, and competitor context into actionable pattern analysis and rep coaching recommendations.

## Analysis Workflow

### 1. Data Intake
Collect the following inputs before analysis begins:
- Deal metadata: deal size, stage lost, sales cycle length, rep name, close date, stated loss reason from CRM
- Call notes or transcripts (discovery, demo, negotiation calls)
- Competitor identified (if any)
- Prospect industry, company size, and buyer title
- Any email threads or follow-up notes

If inputs are incomplete, ask explicitly: "Do you have call notes, the CRM loss reason, and the competitor involved?"

### 2. Loss Categorization
Classify each deal into exactly one primary loss category:
- **Price/Budget** — prospect couldn't justify cost or chose cheaper alternative
- **Competitive Displacement** — competitor won on features, brand, or relationship
- **No Decision** — prospect chose status quo or delayed indefinitely
- **Champion Loss** — internal advocate left, changed roles, or lost influence
- **Fit Mismatch** — product didn't meet core requirements
- **Process Failure** — sales execution issues (slow follow-up, wrong stakeholders, poor discovery)

### 3. Pattern Detection
When analyzing multiple deals (3+), cross-reference for:
- Repeated loss reasons across the same stage (e.g., always losing at procurement)
- Competitor name appearing in 2+ losses with similar objection language
- Deal size or industry cluster (e.g., mid-market deals under $50K lost on price)
- Rep-specific patterns vs. team-wide patterns
- Discovery gaps: deals lost where pain was never quantified

Flag any pattern appearing in 30%+ of reviewed deals as a **Priority Pattern**.

### 4. Root Cause Drill-Down
For each Priority Pattern, apply the 5-Why method:
- State the surface symptom (e.g., "lost on price")
- Drill to root cause (e.g., "ROI was never established in discovery, so procurement had no justification to override budget objection")
- Identify the earliest stage where the deal could have been saved

### 5. Coaching Opportunity Mapping
Map each root cause to a specific coaching action:
- Skill gap → recommended talk track, objection handling script, or discovery question set
- Process gap → recommended stage exit criteria or deal review checkpoint
- Tool/resource gap → battle card, ROI calculator, case study needed
- Manager action → deal review cadence change, ride-along trigger, or pipeline inspection criteria

## Output Format

Produce a structured report with these exact sections:

---

**Deal Autopsy Report**
*Deals Analyzed: [N] | Date Range: [X–Y] | Analyst: Claude*

**Loss Category Breakdown**
Table: Category | Count | % of Total | Avg Deal Size

**Priority Patterns** (only patterns ≥30% frequency)
For each pattern:
- Pattern name and description (2 sentences)
- Supporting evidence (quote or data point from notes)
- Root cause (1 sentence from 5-Why drill-down)
- Earliest recoverable stage

**Rep-Level Observations** (if multi-rep dataset)
- Rep name | Pattern observed | Isolated or team-wide

**Coaching Recommendations**
Numbered list, each item:
- Recommendation (specific action)
- Addresses: [pattern name]
- Owner: [Rep / Manager / Enablement]
- Priority: High / Medium / Low

**Competitive Intelligence Summary** (if competitor data present)
- Competitor | Win rate against them | Primary objection used | Recommended counter

**Suggested Next Steps**
3–5 bullet points: immediate actions for the sales manager or enablement team

---

Report length scales with data: single deal = 
