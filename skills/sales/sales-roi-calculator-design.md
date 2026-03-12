---
name: sales-roi-calculator-design
description: >
  Designs an interactive ROI calculator that quantifies the financial impact of adopting your product for prospects. Use when someone says "help me show the value of our product," asks about building an ROI model for sales, or wants to create a business case calculator for demos and proposals. Also activates when a user needs to justify purchase cost, demonstrate cost savings, or visualize revenue upside for a prospect.
category: sales
tags: [roi, calculator, sales-enablement, business-case, demo]
author: community
---

# Sales ROI Calculator Design

This skill creates a structured, interactive ROI calculator tailored to your product, surfacing quantifiable cost savings or revenue gains that sales reps can use in proposals and live demos.

## ROI Calculator Design Workflow

### 1. Gather Product and Buyer Context
Ask the user (or infer from context) the following before building:
- What does the product do and what problem does it solve?
- Who is the typical buyer (role, company size, industry)?
- Is the primary value driver **cost reduction**, **revenue growth**, or both?
- What is the approximate price point or contract size?

### 2. Identify 3–5 Core Value Drivers
Select measurable levers tied to the product's core benefit. Examples by category:

- **Time savings**: hours saved per week × headcount × loaded hourly rate
- **Error/rework reduction**: % reduction in defects × average cost per defect
- **Churn prevention**: % retention improvement × average customer lifetime value
- **Pipeline acceleration**: deal cycle reduction in days × deals per quarter × average deal size
- **Headcount avoidance**: FTEs avoided × fully-loaded salary

Choose only drivers where the prospect can supply or estimate the input values.

### 3. Define Input Variables for Each Driver
For each value driver, specify:
- **Input label**: plain-language label the prospect sees (e.g., "Number of support agents")
- **Default/benchmark value**: pre-filled industry average so the calc works out of the box
- **Unit**: (people, hours/week, dollars, percentage)
- **Source note**: brief citation or basis for the benchmark (increases credibility)

### 4. Write the ROI Formula for Each Driver
Express each calculation explicitly:

```
Annual Savings = [Input A] × [Input B] × [Multiplier] × 52 weeks (or 12 months)
```

Example:
```
Time Savings Value = (Hours saved per employee per week) × (Number of employees) × (Loaded hourly rate) × 52
```

Ensure all formulas are transparent so prospects can audit and trust them.

### 5. Define Summary Outputs
The calculator must surface these totals prominently:
- **Total Annual Savings / Revenue Gain** (sum of all drivers)
- **First-Year Net ROI** = (Total Value − Product Cost) / Product Cost × 100
- **Payback Period** = Product Annual Cost / (Total Annual Value / 12) in months
- **3-Year Cumulative Value** (optional but powerful for enterprise deals)

### 6. Design the Presentation Layer
Specify how the calculator should be presented:
- **Spreadsheet version**: Google Sheets or Excel with color-coded input cells (yellow) and output cells (green). Lock formula cells.
- **Web embed version**: describe a simple HTML/JS slider-based layout if needed for demos
- **Proposal insert version**: a static snapshot table with pre-filled prospect-specific values for PDF proposals

### 7. Add Credibility Elements
- Include a "Conservative Assumptions" note explaining you used low-end estimates
- Add a disclaimer: "Results vary by implementation and usage"
- Reference 1–2 customer proof points or benchmarks per value driver where available

### 8. Tailor for the Specific Prospect (if context provided)
If the user provides a named prospect or industry:
- Pre-fill inputs with publicly available or inferred data (company size, industry benchmarks)
- Rename labels to match the prospect's terminology
- Prioritize the value drivers most relevant to their stated pain points

## Output Format

Produce the following deliverables in order:

**1. Value Driver Summary Table**
A markdown table with columns: Driver Name | Input Variables | Formula | Default Values | Annual Value Estimate

**2. Full ROI Calculator Specification**
- Numbered list of all input fields with labels,
