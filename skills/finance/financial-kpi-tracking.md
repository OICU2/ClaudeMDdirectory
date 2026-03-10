---
name: financial-kpi-tracking
description: >
  Defines and monitors the financial KPIs most critical to business success. Use when someone says
  "what metrics should we track," asks about financial performance indicators, wants to set up a
  KPI dashboard, needs to measure business health, or is trying to identify which numbers matter
  most for their company.
category: finance
tags: [kpis, financial-metrics, dashboards, performance-tracking, business-intelligence]
author: community
---

# Financial KPI Tracking

This skill identifies, defines, and structures the financial KPIs most relevant to a specific business model and provides a monitoring framework Claude will use when someone needs to measure financial performance.

## KPI Selection and Definition Workflow

1. **Identify Business Context**
   - Ask for or infer: business model (SaaS, retail, services, marketplace, etc.), stage (startup, growth, mature), and primary goal (profitability, growth, cash management)
   - Tailor KPI selection to context — a SaaS company needs MRR/churn; a retailer needs inventory turns/gross margin

2. **Select Core KPI Categories**
   Always cover these five pillars:
   - **Profitability**: Gross margin %, EBITDA margin, net profit margin
   - **Liquidity**: Current ratio, quick ratio, cash runway (months)
   - **Growth**: Revenue growth rate (MoM/YoY), customer acquisition rate
   - **Efficiency**: Operating expense ratio, revenue per employee, CAC payback period
   - **Cash Flow**: Operating cash flow, free cash flow, burn rate (if pre-profit)

3. **Define Each KPI Precisely**
   For every selected KPI, specify:
   - Formula (exact numerator and denominator)
   - Measurement frequency (daily, weekly, monthly, quarterly)
   - Healthy benchmark or target range (industry-specific where possible)
   - Data source (which system or report it comes from)
   - Owner (who is responsible for tracking it)

4. **Set Alert Thresholds**
   - Define a green/yellow/red threshold for each KPI
   - Green: on target or better
   - Yellow: within 10–15% of target, needs attention
   - Red: more than 15% off target, requires immediate action

5. **Establish Review Cadence**
   - Daily: cash balance, revenue pacing
   - Weekly: burn rate, pipeline-to-revenue conversion
   - Monthly: full P&L KPIs, unit economics
   - Quarterly: growth rate trends, margin trajectory, annual forecast variance

6. **Identify Leading vs. Lagging Indicators**
   - Flag which KPIs are lagging (reflect past performance) vs. leading (predict future results)
   - Prioritize at least two leading indicators per business model

## Output Format

Produce a structured KPI tracking framework with the following sections:

**1. KPI Summary Table**
A markdown table with columns: KPI Name | Formula | Frequency | Target | Red Flag Threshold | Owner | Data Source

**2. KPI Definitions Block**
For each KPI, a short definition block (3–5 lines) explaining what it measures and why it matters for this specific business.

**3. Dashboard Recommendation**
A prioritized list of the top 5–7 KPIs to display on an executive dashboard, with a one-line justification for each.

**4. Monitoring Calendar**
A simple table mapping each KPI to its review cadence (Daily / Weekly / Monthly / Quarterly).

**5. Red Flags Checklist**
A bulleted list of 5–8 warning signs to watch for based on the selected KPIs (e.g., "Gross margin declining more than 3 points quarter-over-quarter").

Total output should be comprehensive but scannable — use tables and bullets throughout, avoid long prose paragraphs.
