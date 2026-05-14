---
name: ops-labor-overtime-trigger-log
description: >
  Tracks and analyzes recurring conditions that cause unplanned overtime, then generates a structured root-cause report to support staffing or process changes. Use when someone says "we keep going into overtime," asks why overtime keeps happening, or wants to find the root cause of overtime spikes. Also activates when someone needs to document overtime patterns, reduce unplanned labor costs, or justify a headcount or scheduling change.
category: operations
tags: [overtime, labor-management, root-cause-analysis, staffing, operations]
author: community
---

# Overtime Trigger Log & Root-Cause Report

This skill collects structured data about recurring overtime events, identifies the conditions that drive them, and produces a root-cause report with actionable recommendations for staffing or process adjustments.

## Overtime Trigger Log Workflow

### Step 1: Capture Event Data
For each overtime incident, collect the following fields. If the user hasn't provided them, ask directly:

- **Date and shift** (day, evening, night)
- **Department or team**
- **Hours of unplanned overtime incurred**
- **Trigger condition** (what caused the overtime — e.g., call-out, volume spike, equipment failure, rework, late delivery)
- **Number of employees affected**
- **Was it foreseeable?** (yes / no / partially)
- **Short-term fix applied** (e.g., mandatory OT, voluntary OT, temp labor, shift extension)

Prompt the user to enter multiple incidents. Accept freeform input and extract structured fields from it.

### Step 2: Build the Trigger Log
Organize all submitted incidents into a chronological log table. Group rows by trigger condition category:

- **Staffing shortfall** (call-outs, no-shows, understaffing)
- **Volume/demand surge** (unexpected order volume, customer escalation)
- **Process failure** (rework, quality holds, equipment downtime)
- **Dependency delay** (late materials, upstream team delays)
- **Scheduling gap** (shift handoff failures, coverage planning errors)

### Step 3: Identify Patterns
Analyze the log and flag:

- Which trigger condition appears most frequently
- Which shift or department has the highest overtime concentration
- Whether incidents cluster around specific days, weeks, or operational events
- Whether the same short-term fix is being repeatedly applied (indicating no structural resolution)

### Step 4: Generate Root-Cause Report
Produce a written report with the following sections (see Output Format).

### Step 5: Recommend Actions
For each root cause identified, provide at least one specific corrective action in one of these categories:

- **Scheduling adjustment** (e.g., add a flex shift, adjust overlap windows)
- **Staffing change** (e.g., cross-train a backup role, adjust headcount by shift)
- **Process improvement** (e.g., preventive maintenance schedule, quality gate earlier in workflow)
- **Policy change** (e.g., on-call rotation, voluntary OT sign-up list)

## Output Format

Produce the following two artifacts:

---

### 1. Overtime Trigger Log (Table)

| Date | Shift | Department | OT Hours | Trigger Category | Trigger Detail | Foreseeable? | Fix Applied |
|------|-------|------------|----------|-----------------|----------------|--------------|-------------|
| [data rows] | | | | | | | |

**Totals row:** Sum of OT hours, count of incidents, most common trigger category.

---

### 2. Root-Cause Report (Narrative, 300–500 words)

**Executive Summary** (2–3 sentences): What the data shows at a glance.

**Trigger Pattern Analysis**: Ranked list of trigger conditions by frequency and OT hours contributed. Include percentages where possible.

**Highest-Risk Exposure**: Identify the single department/shift/condition combination generating the most unplanned overtime.

**Root Causes**: For each major trigger category, state the underlying cause in plain language (not just the symptom).

**Recommended Actions**: Bulleted list, one to three actions per root cause. Each action must name a responsible role (e.g., "Shift Supervisor," "HR," "Operations Manager") and a suggested timeline (immediate / 30 days / 60–90 days).

**Metrics to Monitor**: List two to four KPIs to track after
