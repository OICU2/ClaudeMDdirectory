---
name: ops-headcount-justification-builder
description: >
  Assembles a structured, data-backed headcount justification document that connects staffing requests to measurable workload metrics, capacity gaps, and business outcomes. Use when someone says "we need to hire more people," asks how to justify adding headcount, wants to build a business case for a new role, needs to present a staffing request to leadership, or is trying to quantify the cost of being understaffed.
category: operations
tags: [headcount, staffing, workforce-planning, business-case, capacity-planning]
author: community
---

# Headcount Justification Builder

This skill produces a complete, executive-ready headcount justification document by systematically linking staffing requests to workload data, capacity constraints, risk exposure, and business impact.

## Workflow

### 1. Gather Required Inputs
Before building the document, collect:
- **Role(s) requested**: title, level, full-time or contract
- **Current team size**: headcount and structure
- **Workload data**: volume metrics (tickets, projects, hours, revenue supported, etc.)
- **Capacity gap**: current throughput vs. required throughput (quantified)
- **Cost of vacancy**: delayed projects, overtime spend, error rates, churn risk, revenue impact
- **Timeline**: when the need is critical and how long hiring takes
- **Alternatives considered**: automation, redistribution, outsourcing (and why they are insufficient)

If the user cannot provide specific numbers, prompt them with targeted questions:
- "How many hours per week is the team working beyond capacity?"
- "What work is being dropped, delayed, or done at lower quality?"
- "What is the loaded cost of one FTE at this level?"

### 2. Structure the Justification

Build the document in this order:

**a. Executive Summary (3–5 sentences)**
State the request, the business problem it solves, and the risk of not acting. Lead with impact, not process.

**b. Current State Analysis**
- Team size and scope of responsibility
- Quantified workload (volume, complexity, growth trend)
- Utilization rate or hours at capacity (e.g., "team operates at 127% capacity")
- Specific work being deferred or dropped

**c. Capacity Gap Calculation**
- Show the math: current capacity (hours or units) vs. demand
- Project forward 6–12 months if workload is growing
- Identify the breaking point or SLA risk

**d. Business Impact of the Gap**
- Revenue at risk or delayed
- Customer or partner impact
- Team burnout and attrition risk (include replacement cost if known)
- Compliance, quality, or operational risk

**e. Role Specification**
- What the new hire will own
- How they close the gap
- Ramp timeline and expected time-to-productivity

**f. Financial Analysis**
- Fully loaded cost of the role (salary + benefits + tools + overhead, typically 1.25–1.4x base)
- Cost of NOT hiring (overtime, attrition, missed revenue, contractor spend)
- Break-even or ROI framing where applicable

**g. Alternatives Considered**
- List 2–3 alternatives evaluated (automation, redistribution, outsourcing)
- One sentence each on why they are insufficient or already exhausted

**h. Recommendation and Ask**
- Clear, single ask: approve X role(s) by Y date to achieve Z outcome
- Next steps if approved

### 3. Apply These Rules Throughout
- Replace vague language ("we're overwhelmed") with quantified claims ("team logged 340 hours of overtime in Q3")
- Every claim about impact must trace back to a metric or a named business outcome
- Anticipate CFO/CHRO objections: cost, timing, utilization, alternatives
- Use conservative estimates; do not overstate the case
- If the user lacks data, help them identify proxies or reasonable estimates and flag assumptions explicitly

## Output Format

Produce a complete document with:
- **Length**: 600–1,200 words (longer for senior or multiple roles)
- **Format**: Markdown with clear headers matching the sections above
- **Tone**: Direct, professional, data-forward — written for a skeptical finance or executive audience
- **Tables**: Include a capacity gap table and a cost comparison table where numbers are available
- **Callout block**: Open with a bold one-line summary of the ask and the
