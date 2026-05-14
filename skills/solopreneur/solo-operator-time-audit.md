---
name: solo-operator-time-audit
description: >
  Analyzes how a solopreneur allocates hours across revenue-generating, operational, and administrative tasks to identify time drains and delegation opportunities. Use when someone says "I feel like I'm always busy but not making progress," asks about where their time is going, wants to figure out what to delegate or automate, mentions they're drowning in admin work, or describes working long hours without seeing revenue growth.
category: solopreneur
tags: [time-management, delegation, productivity, solopreneur, operations]
author: community
---

# Solo Operator Time Audit

This skill conducts a structured audit of how a solopreneur spends their working hours, categorizes activities by revenue impact, and surfaces specific delegation or elimination opportunities.

## Audit Workflow

### Step 1: Capture Raw Time Data
Ask the user to describe a typical work week. If they don't know off the top of their head, prompt them with:
- "What did you do yesterday, start to finish?"
- "What tasks do you do every single week without fail?"
- "What consumed most of your time last month outside of client/customer work?"

Collect at minimum 10–15 distinct task types before proceeding.

### Step 2: Categorize Every Task
Sort each task into exactly one of four buckets:

- **Revenue-Generating (RG):** Directly produces income — client delivery, sales calls, proposals, launches
- **Revenue-Supporting (RS):** Enables revenue but isn't billable — marketing, content, relationship-building, product development
- **Operations (OPS):** Keeps the business running — invoicing, scheduling, project management, tools maintenance
- **Administrative/Overhead (ADM):** Necessary but zero-leverage — email triage, bookkeeping data entry, filing, basic customer support

### Step 3: Estimate Weekly Hours per Task
For each task, ask the user to estimate weekly hours or derive from their description. Flag any task where the estimate is vague — push for a real number, even a range.

### Step 4: Calculate the Revenue Ratio
Compute:
- Total hours worked per week
- Hours in RG + RS (high-leverage)
- Hours in OPS + ADM (low-leverage)
- **Revenue Ratio = (RG + RS hours) ÷ Total hours × 100**

Benchmarks:
- Below 40% → Critical — business is operator-heavy, not revenue-heavy
- 40–60% → Needs improvement — delegation gaps present
- Above 60% → Healthy — audit for further optimization

### Step 5: Identify the Three Biggest Drains
Rank OPS and ADM tasks by hours consumed. Surface the top three time drains with a short explanation of why each one is costing disproportionate leverage.

### Step 6: Generate Delegation and Automation Recommendations
For each of the top three drains, provide one concrete action:
- **Delegate:** Name the role type (VA, bookkeeper, ops assistant) and what specifically to hand off
- **Automate:** Name a specific tool or workflow (e.g., Zapier, Calendly, QuickBooks rules) that eliminates the task
- **Eliminate:** If the task has no clear ROI, recommend cutting it entirely with brief rationale

### Step 7: Define the Recovered Hours Opportunity
State explicitly: "If you delegated or automated [X, Y, Z], you would recover approximately N hours per week. Redirecting those to [RG activity] could mean [specific outcome, e.g., 2 more sales calls, one more client project per month]."

## Output Format

Produce a structured audit report with these exact sections:

**1. Time Breakdown Table**
A simple table with columns: Task | Category | Weekly Hours

**2. Revenue Ratio Score**
Single line: "Your current Revenue Ratio is X%. [One-sentence interpretation.]"

**3. Top 3 Time Drains**
Numbered list. Each entry: task name, hours per week, one sentence on why it's a leverage problem.

**4. Delegation & Automation Recommendations**
One recommendation per drain. Format: Task → Action (Delegate/Automate/Eliminate) → Specific next step.

**5. Recovered Hours Opportunity**
Two to three sentences. State hours recovered, what to redirect them to, and the concrete business upside.

Total output length:
