---
name: service-request-deflection-rate-analysis
description: >
  Measures the percentage of incoming service requests resolved without human escalation to evaluate self-service and automation effectiveness. Use when someone asks "how well is our self-service working," wants to calculate deflection rate, needs to evaluate automation effectiveness, is analyzing support ticket trends, or wants to reduce human escalation costs.
category: operations
tags: [deflection-rate, self-service, automation, support-metrics, operations]
author: community
---

# Service Request Deflection Rate Analysis

This skill calculates and interprets service request deflection rates to help teams understand how effectively their self-service tools, chatbots, and automation are resolving issues without human agent involvement.

## Analysis Workflow

### 1. Collect Required Inputs
Gather the following data points from the user:
- Total incoming service requests (volume, time period)
- Requests resolved without human escalation (self-service, automation, chatbot, FAQ)
- Requests escalated to human agents
- Time period (daily, weekly, monthly, quarterly)
- Channel breakdown if available (web portal, IVR, chatbot, email)

### 2. Calculate Core Metrics

**Deflection Rate (Primary)**
```
Deflection Rate = (Requests Resolved Without Escalation / Total Requests) × 100
```

**Escalation Rate (Inverse)**
```
Escalation Rate = (Requests Escalated to Humans / Total Requests) × 100
```

**Channel-Level Deflection** (if channel data provided)
```
Channel Deflection Rate = (Channel Self-Resolved / Channel Total) × 100
```

**Cost Avoidance Estimate** (if cost per ticket provided)
```
Cost Avoided = Deflected Requests × Average Cost Per Escalated Ticket
```

### 3. Benchmark Against Industry Standards
Apply these reference ranges to contextualize results:

| Deflection Rate | Performance Level |
|-----------------|-------------------|
| < 30%           | Poor — significant automation gap |
| 30–50%          | Below Average — self-service underperforming |
| 50–70%          | Average — room for meaningful improvement |
| 70–85%          | Good — strong self-service adoption |
| > 85%           | Excellent — best-in-class automation |

Adjust expectations based on:
- Industry vertical (IT helpdesk targets 60–80%; e-commerce targets 70–90%)
- Request complexity (transactional vs. complex issue types)
- Maturity of self-service tooling

### 4. Identify Root Causes for Escalations
Prompt the user to segment escalated requests by:
- Issue category (billing, technical, account, returns, etc.)
- Failure point (self-service attempted but failed, user skipped self-service, no self-service path exists)
- Repeat contacts (same issue escalated multiple times)

### 5. Generate Recommendations
Based on the deflection rate and segment analysis, produce targeted improvement actions:
- **Rate < 50%**: Audit self-service content coverage; identify top 5 escalation categories lacking automation
- **Rate 50–70%**: Improve chatbot/IVR routing logic; add proactive FAQ surfacing; reduce friction in self-service flows
- **Rate > 70%**: Focus on edge case handling; measure containment quality (not just quantity); prevent deflection of complex issues that genuinely need humans

### 6. Track Trend Over Time
If historical data is available:
- Calculate period-over-period change in deflection rate
- Flag regressions (rate declining) as priority investigations
- Correlate rate changes with product launches, policy changes, or tooling updates

## Output Format

Produce a structured analysis report with the following sections:

---

**Service Request Deflection Rate Report**
*Period: [specified time range]*

**Summary Metrics**
- Total Requests: [number]
- Deflected (No Escalation): [number] ([X]%)
- Escalated to Human: [number] ([X]%)
- Deflection Rate: **[X]%**
- Performance Tier: [Poor / Below Average / Average / Good / Excellent]
- Cost Avoided (if applicable): $[amount]

**Channel Breakdown** *(if data provided)*
| Channel | Total | Deflected | Deflection Rate |
