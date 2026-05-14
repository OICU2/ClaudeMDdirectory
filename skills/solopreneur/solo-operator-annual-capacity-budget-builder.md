---
name: solo-operator-annual-capacity-budget-builder
category: solopreneur
description: >
  Builds a forward-looking annual capacity plan that allocates available working hours across client delivery, marketing, operations, and rest. Use when someone says they want to plan their year as a freelancer, asks how to stop overcommitting to clients, wants to figure out how many projects they can take on, needs to balance income goals with sustainable hours, or is trying to map out their workload for the next 12 months.
tags: [capacity-planning, time-budgeting, solopreneur, annual-planning, workload-management]
author: community
---

# Solo Operator Annual Capacity Budget Builder

This skill builds a structured, hour-by-hour annual capacity plan for solo operators, triggered when someone wants to plan their yearly workload, avoid burnout, or align available time with revenue goals.

## Capacity Budget Workflow

### Step 1: Establish Gross Available Hours
- Ask for or confirm: total working weeks per year (default: 48, accounting for 4 weeks off)
- Ask for intended working days per week (default: 5)
- Ask for intended working hours per day (default: 7)
- Calculate: Gross Annual Hours = weeks × days × hours
- Example: 48 × 5 × 7 = 1,680 gross hours

### Step 2: Apply Capacity Reductions
Subtract the following from gross hours before allocating anything:
- **Buffer/Sick/Unexpected (10%)**: Meetings that run long, sick days, life admin
- **Rest and Recovery (built-in)**: Already handled by weeks-off selection, but confirm
- Final figure = **Net Billable + Operational Capacity**

### Step 3: Collect Allocation Preferences
Ask the operator how they want to split their net hours across four buckets:
1. **Client Delivery** — billable work, project execution, client calls
2. **Marketing & Business Development** — content, outreach, proposals, networking
3. **Operations & Admin** — invoicing, tools, bookkeeping, planning
4. **Learning & Development** — courses, reading, skill-building

Suggest defaults if they're unsure:
- Client Delivery: 60%
- Marketing/BD: 20%
- Operations/Admin: 10%
- Learning/Development: 10%

### Step 4: Calculate Per-Bucket Hours
- Multiply net hours by each percentage
- Break down into: annual total, monthly average, weekly average
- Flag if client delivery hours seem misaligned with stated revenue goals

### Step 5: Validate Against Revenue Goals
- Ask: What is the annual revenue target?
- Ask: What is the average hourly rate or project value?
- Calculate: Hours needed to hit revenue goal = revenue target ÷ effective hourly rate
- Compare required client hours vs. allocated client hours
- If gap exists, surface the trade-off clearly: raise rates, reduce expenses, or extend hours

### Step 6: Identify Capacity Constraints and Risk Zones
Flag any of the following:
- Client delivery allocation above 70% (burnout risk)
- Marketing allocation below 10% (pipeline risk)
- Zero learning allocation (skill stagnation risk)
- Revenue target that requires more hours than allocated (math mismatch)

### Step 7: Quarterly Breakdown
Divide annual allocations into Q1–Q4 buckets. Ask if any quarters have known variations:
- Planned vacations or light weeks
- Historically slow or busy seasons
- Launch periods or major project commitments
Adjust quarterly hours accordingly.

## Output Format

Produce a structured capacity plan with the following sections:

---

**ANNUAL CAPACITY BUDGET — [YEAR]**

**Inputs**
- Working weeks: [X]
- Days/week: [X]
- Hours/day: [X]
- Gross hours: [X]
- Buffer reduction (10%): [X]
- **Net available hours: [X]**

**Hour Allocation by Bucket**

| Bucket | % | Annual Hours | Monthly Avg | Weekly Avg |
|---|---|---|---|---|
| Client Delivery | X% | X hrs | X hrs | X hrs |
| Marketing & BD | X% | X hrs | X hrs | X hrs |
| Operations/Admin | X% | X hrs | X hrs | X hrs |
| Learning & Dev | X%
