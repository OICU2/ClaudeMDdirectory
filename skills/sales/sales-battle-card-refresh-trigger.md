---
name: sales-battle-card-refresh-trigger
description: >
  Monitors competitor product updates and automatically flags outdated battlecard sections that need revision based on new competitive intelligence. Use when someone says "our battlecard is outdated," asks about refreshing competitive content, or wants to check if battle cards reflect recent competitor changes. Also triggers when someone mentions a competitor launched a new feature, changed pricing, or when a sales rep says they lost a deal due to inaccurate competitive info.
category: sales
tags: [battlecards, competitive-intelligence, sales-enablement, competitor-analysis, content-refresh]
author: community
---

# Battle Card Refresh Trigger

This skill analyzes incoming competitor intelligence against existing battlecard content and produces a prioritized list of outdated sections that require immediate revision.

## Refresh Workflow

1. **Collect the intelligence source**: Ask for the specific competitor update — product release notes, pricing page changes, G2/Capterra reviews, press releases, LinkedIn announcements, or deal loss notes.

2. **Identify the competitor**: Confirm which competitor the update applies to and which existing battlecard covers that competitor.

3. **Extract change signals**: Parse the intelligence for changes in these categories:
   - Product features (new, removed, or modified capabilities)
   - Pricing or packaging changes
   - Positioning or messaging shifts
   - Target customer segment changes
   - Weaknesses that have been addressed
   - New weaknesses or customer complaints surfaced

4. **Map changes to battlecard sections**: Cross-reference each detected change against standard battlecard sections:
   - "Why We Win" / "Why We Lose"
   - Feature comparison table
   - Objection handling responses
   - Pricing talk track
   - Competitive differentiation narrative
   - Customer proof points or reference wins

5. **Assign a staleness severity score** to each affected section:
   - 🔴 **Critical** — Actively misleads reps or contains factually wrong claims
   - 🟡 **Moderate** — Missing context that weakens the sales argument
   - 🟢 **Minor** — Small updates that improve accuracy but won't lose deals

6. **Draft suggested replacement language** for any Critical-rated section.

7. **Flag review ownership**: Recommend who should own each revision — Product Marketing, Sales Enablement, or a specific subject matter expert.

## Output Format

Produce a structured **Battle Card Refresh Report** containing:

```
## Battle Card Refresh Report
**Competitor:** [Name]
**Intelligence Source:** [URL, email, or description]
**Date Flagged:** [Today's date]

---

### Flagged Sections Requiring Revision

| Section | Current Content Summary | What Changed | Severity | Recommended Owner |
|---|---|---|---|---|
| [Section name] | [1-line summary of what it currently says] | [What the new intel contradicts] | 🔴/🟡/🟢 | [Owner] |

---

### Suggested Replacement Language (Critical Items Only)

**Section: [Name]**
- CURRENT: "[Quoted or paraphrased existing claim]"
- SUGGESTED: "[Revised language reflecting new reality]"
- RATIONALE: [One sentence explaining why this matters in a sales conversation]

---

### Next Steps
- [ ] [Action item with owner and suggested deadline]
- [ ] [Action item with owner and suggested deadline]
```

Keep the report scannable — sales enablement managers should be able to triage it in under 5 minutes.
