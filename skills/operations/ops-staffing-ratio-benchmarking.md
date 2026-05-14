---
name: ops-staffing-ratio-benchmarking
description: >
  Compares current staffing levels across operational functions against industry benchmarks to identify over- or under-resourced teams. Use when someone says "are we overstaffed," asks about headcount efficiency, wants to benchmark their team size against industry standards, needs to justify a hiring request, or is trying to identify where to cut or invest in headcount.
category: operations
tags: [staffing, benchmarking, headcount, workforce-planning, operations]
author: community
---

# Ops Staffing Ratio Benchmarking

This skill analyzes current staffing levels by function and compares them against industry benchmarks to surface over- or under-resourced teams and support headcount decisions.

## Benchmarking Workflow

1. **Gather current staffing data**: Ask for total headcount by function (e.g., Finance, HR, IT, Customer Support, Sales, Engineering, Operations). If the user has partial data, work with what's available and flag gaps.

2. **Establish company context**: Confirm company size (total employees), industry (SaaS, manufacturing, retail, etc.), revenue range if known, and growth stage (startup, scale-up, enterprise). Benchmarks vary significantly by these factors.

3. **Apply industry benchmark ratios**: Use the following standard benchmark ranges per 100 employees unless the user provides a specific industry reference:
   - **HR**: 1–2 HR staff per 100 employees (lean orgs skew toward 1.5)
   - **Finance**: 1–2 finance staff per 100 employees
   - **IT**: 1–5 IT staff per 100 employees (varies heavily by tech dependency)
   - **Customer Support**: benchmarked against tickets/contacts per agent (typically 40–80 tickets/day per agent)
   - **Sales**: benchmarked against revenue per rep (vary by ACV; SaaS SMB ~$500K–$1M ARR per rep)
   - **Legal/Compliance**: 1 per 100–200 employees depending on regulatory burden
   - If the user provides industry-specific data, use that over defaults.

4. **Calculate gaps**: For each function, compute:
   - Current ratio (e.g., 3 HR staff / 200 employees = 1.5 per 100)
   - Benchmark midpoint for that function and company profile
   - Delta: current vs. benchmark (over/under and by how much)

5. **Flag outliers**: Identify functions more than 25% above or below benchmark midpoint as significant. Note functions within range as "appropriately staffed."

6. **Contextualize findings**: For each outlier, note likely causes (rapid growth, recent layoffs, outsourcing, automation) and whether the gap is a risk (under-resourced) or cost opportunity (over-resourced).

7. **Generate recommendations**: For each gap, suggest one of: hire, redistribute, automate, outsource, or monitor. Tie recommendations to business impact.

## Output Format

Produce a structured report with the following sections:

**Summary Table** (markdown table):
| Function | Current Headcount | Current Ratio | Benchmark Range | Status | Gap |
|---|---|---|---|---|---|
| HR | 4 | 2.0/100 | 1.0–2.0/100 | ✅ On target | — |
| IT | 1 | 0.5/100 | 1.0–5.0/100 | 🔴 Under-resourced | –0.5/100 |

**Status key**: ✅ On target | 🟡 Slight gap | 🔴 Significant gap | 🟠 Over-resourced

**Function-by-Function Analysis** (brief bullet points per function):
- Current state
- Benchmark context
- Risk or opportunity
- Recommended action

**Priority Actions** (ranked list of top 3–5 actions with rationale)

**Data Gaps & Caveats** (list any missing inputs that would change the analysis)

Length: concise — full report should be scannable in under 5 minutes. Use tables and bullets, not prose paragraphs.
