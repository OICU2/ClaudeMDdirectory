---
name: ops-vendor-contract-milestone-tracker
description: >
  Tracks key contractual milestones, renewal windows, and performance obligations across active vendor agreements to prevent missed deadlines. Use when someone says "we need to track our vendor contracts," asks about upcoming contract renewals, wants to monitor vendor performance obligations, needs to know which contracts are expiring soon, or is trying to avoid missing an auto-renewal window.
category: operations
tags: [vendor-management, contracts, milestones, renewals, compliance]
author: community
---

# Vendor Contract Milestone Tracker

This skill helps teams maintain visibility into active vendor agreements by extracting, organizing, and surfacing critical dates and obligations so nothing slips through the cracks.

## Workflow

### 1. Collect Contract Data
Ask the user to provide one or more of the following for each vendor agreement:
- Vendor name and contract/agreement type
- Contract start date and end date
- Auto-renewal clause (yes/no, and notice period required to cancel)
- Key milestone dates (e.g., quarterly reviews, deliverable due dates, audit windows)
- Performance obligations (SLAs, reporting requirements, minimum spend commitments)
- Assigned internal owner or stakeholder

If data is provided in bulk (paste, upload, or list), extract all structured fields systematically before proceeding.

### 2. Identify Critical Windows
For each contract, calculate and flag:
- **Renewal decision deadline**: End date minus the cancellation notice period (e.g., 60 days before auto-renewal triggers)
- **Upcoming milestones**: Any dates within the next 30, 60, and 90 days
- **Overdue obligations**: Any milestones or deliverables whose dates have already passed
- **High-risk contracts**: Those with auto-renewal clauses where the decision window is open or closing within 30 days

### 3. Categorize by Urgency
Assign each item a status:
- 🔴 **Immediate** — deadline within 14 days or already overdue
- 🟡 **Upcoming** — deadline within 15–60 days
- 🟢 **On Track** — deadline 61+ days away
- ⚫ **Expired/Closed** — contract ended, no active obligations

### 4. Surface Gaps and Risks
Flag any contracts where:
- No internal owner is assigned
- Auto-renewal terms exist but no cancellation deadline is tracked
- Performance obligations lack a review date
- Contract end date is within 90 days with no renewal status noted

### 5. Recommend Next Actions
For each flagged item, provide a specific next action, such as:
- "Send cancellation notice to [Vendor] by [Date] to avoid auto-renewal"
- "Schedule Q2 performance review with [Vendor] — due [Date]"
- "Assign contract owner for [Vendor] agreement before [Date]"

## Output Format

Produce a structured contract milestone report with the following sections:

---

**Vendor Contract Milestone Report**
*Generated: [Date]*

**⚠️ Immediate Action Required (Next 14 Days)**
| Vendor | Contract Type | Obligation | Deadline | Owner | Action Needed |
|--------|--------------|------------|----------|-------|---------------|

**📅 Upcoming Milestones (15–60 Days)**
| Vendor | Contract Type | Obligation | Deadline | Owner | Action Needed |

**📋 Full Contract Register**
| Vendor | Start | End | Auto-Renew | Notice Period | Renewal Decision By | Owner | Status |

**🚩 Gaps & Risks**
- Bullet list of missing data, unassigned owners, or untracked auto-renewals

**✅ Recommended Next Actions (Priority Order)**
1. [Specific action] — [Responsible party] — [By date]
2. ...

---

If fewer than three contracts are provided, skip the table format and use a concise per-vendor breakdown instead. Always end with a summary sentence stating how many contracts are active, how many require immediate action, and how many auto-renewals are at risk.
