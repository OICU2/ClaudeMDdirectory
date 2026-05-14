---
name: client-retainer-scope-drift-tracker
description: >
  Monitors ongoing retainer agreements for scope creep by comparing contracted deliverables against actual work logged each billing period. Use when someone says their retainer client keeps asking for more, wants to check if a client is going over their monthly agreement, or needs to figure out whether work performed matches what was contracted. Also activates when someone asks how to handle a client who adds tasks mid-month or wants to audit billable hours against a retainer scope.
category: solopreneur
tags: [retainer, scope-creep, client-management, billing, freelance]
author: community
---

# Client Retainer Scope Drift Tracker

This skill analyzes contracted retainer deliverables against actual work logged to surface scope creep, quantify drift, and recommend corrective actions before the next billing cycle.

## Scope Drift Analysis Workflow

### Step 1: Capture the Retainer Contract Scope
Ask the user to provide or paste:
- Monthly deliverables list (e.g., "4 blog posts, 2 strategy calls, 1 monthly report")
- Contracted hours (if hour-based) or flat deliverable limits
- Any explicitly excluded work types from the agreement
- Billing period start and end dates

### Step 2: Capture Actual Work Logged
Ask the user to provide:
- A list or dump of tasks/deliverables completed this billing period (time entries, task list, notes — any format)
- Hours spent per task if available
- Any ad-hoc requests fulfilled outside the original scope

### Step 3: Map Work to Contract Line Items
- Match each logged task to a contracted deliverable category
- Flag tasks that have no corresponding contract line item as **Out-of-Scope**
- Flag contracted deliverables that were delivered in excess of agreed quantity as **Over-Delivered**
- Flag contracted deliverables not yet fulfilled as **Under-Delivered**

### Step 4: Calculate Drift Score
- Count total out-of-scope tasks and estimate their time/effort value
- Calculate percentage of total work that was uncontracted: `(out-of-scope hours / total hours worked) × 100`
- Assign a drift severity level:
  - **Green (0–10%)**: Within acceptable variance
  - **Yellow (11–25%)**: Moderate drift — address at next check-in
  - **Red (26%+)**: Significant scope creep — immediate conversation required

### Step 5: Generate Recommendations
Based on drift severity, recommend one or more of:
- A specific script for raising the scope conversation with the client
- Whether to retroactively bill for out-of-scope work or absorb it
- Contract amendment language to add the recurring out-of-scope tasks
- A boundary-setting email template if the pattern is recurring

## Output Format

Produce a structured **Retainer Scope Drift Report** with these sections:

**Billing Period:** [dates]
**Client:** [name if provided]

**Contract Scope Summary**
| Deliverable | Contracted Qty | Delivered Qty | Status |
|---|---|---|---|
| [item] | [#] | [#] | ✅ On-scope / ⚠️ Over / ❌ Under |

**Out-of-Scope Work Logged**
| Task | Est. Hours | Category | Notes |
|---|---|---|---|
| [task] | [hrs] | [type] | [context] |

**Drift Score:** XX% — [Green / Yellow / Red]

**What This Means:** 1–2 sentence plain-language summary of the situation.

**Recommended Actions:**
1. [Specific action with example script or language where relevant]
2. [Second action if needed]

Keep the report scannable. Use plain language. Include ready-to-send message copy wherever a client conversation is recommended.
