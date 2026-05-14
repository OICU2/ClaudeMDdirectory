---
name: ops-tool-roi-assessment
description: >
  Evaluates the return on investment of existing operational software tools by comparing licensing costs against measurable productivity gains. Use when someone asks "is this tool worth it," wants to justify a software subscription, needs to audit their tech stack costs, questions whether to renew a license, or wants to measure productivity impact of a platform.
category: operations
tags: [roi, software-tools, operations, cost-analysis, productivity]
author: community
---

# Ops Tool ROI Assessment

This skill calculates and presents a structured ROI analysis for operational software tools, helping teams decide whether to keep, replace, or eliminate a tool based on concrete cost-versus-value data.

## ROI Assessment Workflow

1. **Gather tool cost inputs**
   - Annual or monthly licensing cost (total, not per-seat if possible)
   - Number of seats/licenses purchased vs. actively used
   - Implementation or onboarding costs if recent
   - Any ancillary costs (training, integrations, support tiers)

2. **Identify measurable productivity gains**
   - Hours saved per week per user on specific tasks (ask for estimates if not provided)
   - Reduction in error rates or rework cycles
   - Headcount displaced or avoided due to automation
   - Revenue-generating activities unlocked by the tool

3. **Quantify productivity in dollar terms**
   - Convert time saved: (hours saved/week × avg. hourly fully-loaded cost) × 52
   - Convert error reduction: (incidents avoided × average cost per incident)
   - Convert headcount impact: (FTE equivalent × avg. annual salary + benefits)

4. **Calculate ROI**
   - Net Benefit = Total Annual Productivity Value − Total Annual Tool Cost
   - ROI % = (Net Benefit / Total Annual Tool Cost) × 100
   - Payback Period = Total Tool Cost / (Monthly Productivity Value)

5. **Apply a confidence adjustment**
   - Label productivity estimates as Low / Medium / High confidence based on whether data is measured, estimated by users, or assumed
   - Apply a conservative haircut (25–50%) to Low confidence figures and note it explicitly

6. **Flag qualitative factors**
   - Vendor lock-in risk
   - Adoption rate (if <60% of seats are active, flag underutilization)
   - Strategic alignment or compliance requirements that make cost secondary
   - Switching cost estimate if tool were replaced

7. **Deliver a verdict**
   - Strong ROI (>150%): Recommend renew and consider expanding
   - Moderate ROI (50–150%): Recommend renew with usage improvement plan
   - Weak ROI (<50%): Recommend evaluate alternatives or renegotiate pricing
   - Negative ROI: Recommend deprecate or replace with specific rationale

## Output Format

Produce a structured report with these sections:

**Tool ROI Summary — [Tool Name]**

| Metric | Value |
|---|---|
| Annual Licensing Cost | $X |
| Active Users / Total Seats | X / X |
| Annual Productivity Value | $X |
| Net Annual Benefit | $X |
| ROI | X% |
| Payback Period | X months |
| Confidence Level | Low / Medium / High |

**Cost Breakdown** — bullet list of all cost components

**Productivity Gains** — bullet list of each quantified gain with the assumption behind it

**Confidence Notes** — 1–3 sentences on data quality and what would improve the estimate

**Qualitative Flags** — bullet list of risks, lock-in, adoption issues, or strategic factors

**Verdict** — 2–3 sentences with a clear recommendation and one suggested next action

Length: concise enough to fit a single briefing page. Avoid restating inputs verbatim.
