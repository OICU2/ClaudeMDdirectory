---
name: ops-cost-per-headcount-model
description: >
  Calculates and benchmarks the fully loaded operational cost per team member, including software tools, overhead, facilities, and support services broken down by role or department. Use when someone asks about cost per employee, wants to understand the true cost of headcount, needs to benchmark operational spend per team member, is analyzing department budget efficiency, or wants to model what it costs to support each hire. Produces a structured cost model with per-role breakdowns and benchmark comparisons.
category: operations
tags: [cost-modeling, headcount, operations, budgeting, workforce-planning]
author: community
---

# Ops Cost Per Headcount Model

This skill calculates the fully loaded operational cost per team member by role or department, surfacing hidden costs beyond salary and producing benchmarkable unit economics for workforce planning.

## Cost Modeling Workflow

### Step 1: Gather Inputs
Collect or prompt for the following data points per role/department:
- **Headcount**: Number of employees in each role or department
- **Compensation**: Base salary, bonus target, equity (annualized), employer payroll taxes (typically 7.65% US), benefits (health, dental, vision, 401k match — average $8,000–$15,000/year per US employee)
- **Tools & Software**: Per-seat SaaS costs (e.g., Slack, Notion, Figma, Salesforce, GitHub) — collect per-tool or estimate by role category
- **Equipment**: Amortized hardware cost (laptops, monitors, peripherals — typically $2,000–$4,000/year amortized over 3 years)
- **Facilities**: Office space cost per person (sq ft × rate ÷ headcount) or remote stipend
- **Support Services**: Prorated share of IT support, HR, finance, legal, and recruiting overhead
- **Training & Development**: Annual L&D budget per employee
- **Recruiting Cost Amortization**: Average cost-to-hire ÷ average tenure in months × 12

### Step 2: Categorize Costs into Buckets
Organize all costs into five buckets:
1. **Compensation & Benefits** — salary + taxes + benefits + equity
2. **Tools & Technology** — all software licenses + hardware amortization
3. **Facilities & Remote** — office allocation or remote stipends + co-working
4. **Shared Overhead** — prorated HR, IT, finance, legal support per head
5. **Talent Acquisition & Retention** — amortized recruiting + L&D

### Step 3: Calculate Fully Loaded Cost Per Head
For each role or department:
- Sum all five buckets
- Divide by headcount to get **cost per head (annual)**
- Divide by 12 for **monthly cost per head**
- Calculate **overhead multiplier**: Fully Loaded Cost ÷ Base Salary (target benchmark: 1.25x–1.4x for lean orgs, 1.5x–1.7x for fully loaded)

### Step 4: Benchmark Against Standards
Apply these reference benchmarks:
- **Engineering**: $180K–$280K fully loaded (US, mid-market)
- **Sales**: $120K–$200K fully loaded (excluding variable commissions)
- **Customer Success**: $90K–$140K fully loaded
- **Operations/G&A**: $80K–$130K fully loaded
- **Tools spend per head**: $3,000–$8,000/year (lean) to $10,000–$18,000/year (enterprise)
- Flag any role where tools + overhead exceed 30% of total cost as a potential optimization target

### Step 5: Identify Optimization Opportunities
For each department, flag:
- Tools with low utilization or overlap (e.g., redundant project management tools)
- Overhead ratios above 1.6x for non-leadership roles
- Per-head costs more than 20% above benchmark for the role type
- Departments where shared services overhead per head exceeds 15% of total cost

## Output Format

Produce a structured cost model with the following sections:

**1. Summary Table** (markdown table)
| Role/Dept | Headcount | Base Salary (avg) | Fully Loaded Cost/Head | Overhead Multiplier | vs. Benchmark |
|---|---|---|---|---|---|
