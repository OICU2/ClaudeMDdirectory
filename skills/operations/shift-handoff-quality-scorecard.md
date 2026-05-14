---
name: shift-handoff-quality-scorecard
description: >
  Assesses the completeness and accuracy of shift handover communications by comparing open items against their resolution status at each transition point. Use when someone says "score our handoff notes," asks about "shift transition quality," wants to "audit our handover process," needs to "evaluate what got missed between shifts," or says "check how well we're handing off." Produces a structured scorecard with gap analysis and improvement recommendations.
category: operations
tags: [shift-handoff, quality-assurance, operations, scorecard, incident-management]
author: community
---

# Shift Handoff Quality Scorecard

This skill evaluates shift handover documents or communications for completeness, accuracy, and actionability, then produces a scored report highlighting gaps between what was handed off and what was actually resolved.

## Evaluation Workflow

1. **Collect inputs**: Request the handoff document(s) or communication logs from the outgoing shift, plus any available resolution records, incident logs, or incoming shift notes from the same window.

2. **Inventory open items**: Extract every explicitly listed open issue, pending task, escalation, or watch item from the outgoing handoff. Assign each a reference ID (H-001, H-002, etc.).

3. **Cross-reference resolution status**: For each open item, determine one of four statuses:
   - ✅ **Resolved & documented** — closed with outcome recorded in incoming shift notes or logs
   - ⚠️ **Resolved but undocumented** — evidence of closure exists but not captured in handoff chain
   - 🔄 **Carried forward correctly** — still open and properly re-listed in next handoff
   - ❌ **Dropped** — no mention in resolution logs or subsequent handoff; status unknown

4. **Check required handoff fields**: Evaluate whether the handoff document includes all of the following. Mark each present (✓) or missing (✗):
   - Shift date, time, and personnel names
   - Open incidents with severity and owner
   - Pending escalations with deadlines
   - System or service status summary
   - Priority tasks for incoming shift
   - Any safety, compliance, or regulatory flags

5. **Score each dimension** on a 0–10 scale:
   - **Completeness** — ratio of required fields present
   - **Item Tracking Accuracy** — ratio of open items with known resolution status
   - **Continuity** — ratio of carried-forward items correctly re-documented
   - **Clarity** — subjective assessment of whether a new operator could act without follow-up questions
   - **Timeliness** — whether handoff was completed within the expected window (flag if unknown)

6. **Calculate overall score**: Weighted average — Completeness 25%, Item Tracking 30%, Continuity 25%, Clarity 15%, Timeliness 5%.

7. **Identify root causes for gaps**: For every ❌ Dropped item or missing required field, note the likely failure mode (e.g., time pressure, no template enforced, single-person handoff, verbal-only communication).

8. **Generate recommendations**: Produce 3–5 specific, prioritized corrective actions tied directly to observed gaps.

## Output Format

Produce a structured scorecard with the following sections:

```
## Shift Handoff Quality Scorecard
**Shift Period:** [date/time range]
**Evaluated By:** Claude Code | **Date:** [today]

---

### Section 1: Required Fields Checklist
| Field                  | Status |
|------------------------|--------|
| Shift date & personnel | ✓/✗   |
| Open incidents         | ✓/✗   |
| Pending escalations    | ✓/✗   |
| System status summary  | ✓/✗   |
| Priority tasks         | ✓/✗   |
| Safety/compliance flags| ✓/✗   |

**Fields Present:** X/6

---

### Section 2: Open Item Tracking
| ID    | Description        | Status | Notes |
|-------|--------------------|--------|-------|
| H-001 | [item summary]     | ✅/⚠️/🔄/❌ | [detail] |

**Item Accountability Rate:** X% (X of X items with known status)

---

### Section 3: Dimension
