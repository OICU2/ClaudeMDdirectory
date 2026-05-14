---
name: service-handoff-time-loss-quantifier
description: >
  Measures and quantifies time wasted during inter-team or inter-shift handoffs by analyzing
  delay patterns and identifying the top contributors to handoff inefficiency. Use when someone
  says "our handoffs take too long," asks about shift transition delays, wants to reduce time
  lost between teams, is investigating why tickets stall between departments, or needs to
  measure the cost of poor handoff processes.
category: operations
tags: [handoffs, operations, time-loss, shift-management, process-efficiency]
author: community
---

# Service Handoff Time-Loss Quantifier

This skill measures time wasted during inter-team or inter-shift handoffs, calculates the business cost of those delays, and surfaces the top contributors to handoff inefficiency.

## Handoff Analysis Workflow

### Step 1: Collect Handoff Data
Prompt the user for the following inputs:
- Number of handoffs per day/week
- Average time from handoff initiation to handoff completion (the "handoff window")
- Expected or target handoff duration (the baseline)
- Number of people involved in each handoff (sender and receiver roles)
- Average fully-loaded hourly cost per person involved
- Any known failure modes: missing context, unavailable recipients, incomplete documentation, unclear ownership, tool/system delays

If the user provides raw ticket or log data, extract timestamps between "assigned to" or "status change" events that indicate handoff transitions.

### Step 2: Calculate Time Loss Per Handoff
- **Handoff delay** = Actual handoff duration − Target handoff duration
- **Time lost per handoff** = Handoff delay × Number of people waiting or blocked
- **Daily time loss** = Time lost per handoff × Number of handoffs per day
- **Weekly/Monthly time loss** = Scale accordingly

### Step 3: Calculate Financial Cost
- **Cost per handoff delay** = Time lost per handoff (in hours) × Average hourly cost per person
- **Daily cost** = Cost per handoff delay × Number of handoffs per day
- **Annual cost** = Daily cost × Working days per year (use 250 as default)

### Step 4: Identify Top Contributors to Delay
Categorize delay causes into these buckets and estimate percentage contribution from user input or observed patterns:
1. **Missing context** — receiver lacks information to act immediately
2. **Unavailable recipient** — wrong person, wrong time, no coverage overlap
3. **Incomplete documentation** — no runbook, no ticket summary, no status notes
4. **Tool/system friction** — ticket routing delays, notification failures, platform switches
5. **Unclear ownership** — ambiguous who receives the handoff
6. **Timezone/shift gap** — no overlap between outgoing and incoming team

Rank these by estimated impact. If the user cannot provide percentages, apply a diagnostic prompt: "Which of these situations happens most often in your handoffs?"

### Step 5: Generate Recommendations
For each top contributor (top 3 by impact), provide one specific, actionable fix:
- Missing context → Standardized handoff template with required fields
- Unavailable recipient → Defined coverage windows with named backup owners
- Incomplete documentation → Automated pre-handoff checklist enforced in ticketing system
- Tool/system friction → Single handoff channel with auto-routing rules
- Unclear ownership → RACI matrix per service or queue with escalation path
- Timezone/shift gap → 15-minute overlap buffer built into shift schedules

## Output Format

Produce a structured handoff analysis report with these sections:

---

**Handoff Time-Loss Report**

**Summary**
- Handoffs analyzed: [N per day / week]
- Average actual handoff duration: [X minutes]
- Target handoff duration: [Y minutes]
- Average delay per handoff: [Z minutes]

**Time Loss Calculations**
| Metric | Value |
|---|---|
| Time lost per handoff | X person-minutes |
| Daily time loss | X person-hours |
| Weekly time loss | X person-hours |
| Annual time loss | X person-hours |

**Financial Impact**
| Metric | Value |
|---|---|
| Cost per handoff delay | $X |
| Daily cost | $X |
| Annual cost | $X |

**Top Contributors to Handoff Delay**
1. [Contributor] — [
