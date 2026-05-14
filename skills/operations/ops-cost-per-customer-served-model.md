---
name: ops-cost-per-customer-served-model
description: >
  Calculates the fully loaded operational cost to serve a single customer by distributing labor, tooling, and overhead across total service volume. Use when someone asks "how much does it cost us to serve each customer," wants to break down cost per ticket or interaction, or needs to understand true unit economics of customer operations. Also triggers when someone mentions support cost efficiency, wants to justify headcount, or is modeling the cost impact of scaling the customer base.
category: operations
tags: [unit-economics, cost-modeling, operations, support, financial-analysis]
author: community
---

# Cost Per Customer Served Model

This skill builds a fully loaded cost-per-customer calculation by collecting labor, tooling, and overhead inputs, then distributing them across service volume to produce a defensible unit cost model.

## Cost Model Workflow

### Step 1: Gather Inputs
Collect the following across a defined time period (monthly or annual):

**Labor Costs**
- Number of agents/staff directly serving customers
- Fully loaded cost per FTE (salary + benefits + payroll taxes — typically 1.25–1.35× base salary)
- Any contractor or outsourced support costs

**Tooling Costs**
- CRM, helpdesk, or ticketing platform costs (e.g., Zendesk, Salesforce, Intercom)
- Communication tools (phone, chat, email platforms)
- AI/automation tooling costs
- Monitoring or QA software

**Overhead Costs**
- Management and team lead salaries (allocated % to operations)
- Office/facility costs or remote stipends attributed to ops team
- Training and onboarding costs (annualized)
- Recruiting costs attributed to ops roles (annualized)

**Volume Metrics**
- Total customers served in the period (unique customers with at least one interaction)
- Optional: total interactions/tickets (for cost-per-interaction variant)

### Step 2: Calculate Fully Loaded Cost

```
Total Labor Cost = FTE Count × Fully Loaded FTE Cost + Contractor Costs
Total Tooling Cost = Sum of all platform/software costs for the period
Total Overhead Cost = Management allocation + Facilities + Training + Recruiting
Total Operational Cost = Total Labor + Total Tooling + Total Overhead

Cost Per Customer Served = Total Operational Cost ÷ Customers Served
Cost Per Interaction = Total Operational Cost ÷ Total Interactions
```

### Step 3: Segment and Sense-Check
- Break cost by tier if applicable (e.g., enterprise vs. SMB vs. self-serve)
- Compare to industry benchmarks: B2B SaaS support typically ranges $15–$80 per customer per month depending on complexity
- Flag if labor exceeds 70% of total cost (normal) or tooling exceeds 20% (worth investigating)
- Calculate what % of revenue or ARR this cost represents (healthy range: 8–15% for SaaS)

### Step 4: Model Scenarios
- **Scale scenario**: What happens to unit cost if customer volume doubles with same fixed cost base?
- **Efficiency scenario**: What if automation reduces handle time by 20%?
- **Headcount scenario**: What does adding or removing 1 FTE do to unit cost?

## Output Format

Produce a structured cost model with the following sections:

**1. Input Summary Table**
List all cost inputs with values, time period, and source/assumption notes.

**2. Cost Rollup**
| Category | Period Cost | % of Total |
|---|---|---|
| Labor | $X | X% |
| Tooling | $X | X% |
| Overhead | $X | X% |
| **Total** | **$X** | **100%** |

**3. Unit Cost Results**
- Cost per customer served: **$X.XX**
- Cost per interaction (if volume provided): **$X.XX**
- Cost as % of revenue (if revenue provided): **X%**

**4. Scenario Comparison Table**
Show baseline vs. 2–3 scenarios side by side with resulting unit cost.

**5. Key Assumptions & Flags**
Bullet list of any estimates made, data gaps, or figures outside normal benchmarks that warrant review.

Output should be copy-paste ready for a spreadsheet or executive summary. Use plain numbers, not ranges, unless inputs were given as ranges
