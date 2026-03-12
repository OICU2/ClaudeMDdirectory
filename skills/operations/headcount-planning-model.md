---
name: headcount-planning-model
description: >
  Builds a structured headcount plan that maps hiring timelines, role requirements, and labor costs to operational growth targets. Use when someone says they need to plan their team growth, asks about how many people to hire, wants to build a hiring roadmap, is trying to forecast labor costs by department, or needs to align headcount with a budget or revenue milestone.
category: operations
tags: [headcount, hiring, workforce-planning, labor-costs, org-design]
author: community
---

# Headcount Planning Model

This skill produces a structured, phased headcount plan that connects role definitions, hiring timelines, and fully-loaded labor costs to operational and revenue growth targets.

## Headcount Planning Workflow

1. **Establish the planning horizon and growth targets**
   - Ask for the time period (e.g., 12 months, 18 months, fiscal year)
   - Identify the key growth driver: revenue target, customer count, product launches, or geographic expansion
   - Note any hard budget ceiling or headcount cap if one exists

2. **Capture the current baseline**
   - Current total headcount by department or function
   - Existing open roles and their expected start dates
   - Any known attrition or backfills needed

3. **Map roles to operational needs**
   - For each department, identify what growth milestone triggers a new hire (e.g., every $500K ARR adds one AE, every 200 customers adds one CSM)
   - Specify role title, level (junior/mid/senior/lead), and whether full-time, part-time, or contract
   - Flag roles that are prerequisites for others (e.g., a manager must be hired before their team)

4. **Build the hiring timeline**
   - Assign a target start quarter or month to each role
   - Account for time-to-hire by role type (IC roles: 6–10 weeks, leadership: 10–16 weeks)
   - Sequence hires to respect dependencies and avoid bottlenecks

5. **Calculate labor costs**
   - Apply a fully-loaded cost multiplier (default: 1.25× base salary to cover benefits, taxes, and equipment)
   - Sum costs by month and by department
   - Identify the quarter with peak cash burn from hiring

6. **Identify risks and tradeoffs**
   - Flag roles where hiring delay would block a growth target
   - Note departments that are understaffed relative to their growth burden
   - Highlight any single points of failure (critical roles with no backup)

## Output Format

Produce the following in order:

**1. Summary Table**
A markdown table with columns: Role Title | Department | Level | Start Month | Base Salary | Fully-Loaded Cost | Growth Trigger

**2. Quarterly Headcount Snapshot**
A table showing headcount by department at the end of Q1, Q2, Q3, and Q4 (or equivalent periods).

**3. Monthly Labor Cost Projection**
A table with columns: Month | New Hires Starting | Incremental Monthly Cost | Cumulative Annual Cost to Date

**4. Hiring Dependencies Map**
A plain-language list of sequencing constraints (e.g., "VP of Engineering must start before hiring the second engineering team").

**5. Risk Register**
3–5 bullet points identifying hiring risks, cost overrun scenarios, or roles critical to hitting targets.

Total output length: comprehensive but scannable. Use tables for all quantitative data. Use bullet points for risks and dependencies. Avoid prose paragraphs in the output itself.
