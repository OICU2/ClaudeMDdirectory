---
name: screener-quota-balancing-model
description: >
  Designs participant recruitment quotas across demographic and behavioral segments to ensure representative and balanced sample composition for research studies. Use when someone needs to balance survey quotas, asks how to recruit a representative sample, wants to design screening criteria for a study, needs to allocate participant slots across demographic groups, or is trying to avoid over- or under-representation in a research panel.
category: research
tags: [recruitment, quotas, sampling, screener, demographics, research-design]
author: community
---

# Screener Quota Balancing Model

This skill designs a structured quota allocation model for participant recruitment, ensuring demographic and behavioral segments are represented proportionally or purposively based on study goals.

## Quota Design Workflow

### 1. Clarify Study Parameters
Collect or confirm:
- Total sample size (n)
- Study type (qualitative, quantitative, mixed)
- Primary research questions driving segment importance
- Any pre-existing constraints (budget, timeline, geography)

### 2. Identify Segmentation Dimensions
Determine which dimensions require quota control:

**Demographic:** age, gender, income bracket, education level, geography, ethnicity  
**Behavioral:** product usage frequency, purchase recency, brand affiliation, technology adoption  
**Attitudinal:** category involvement, brand awareness level, decision-making role  

Flag which dimensions are *interlocking* (cross-tabbed) vs. *independent* (marginal only).

### 3. Define Quota Type per Dimension
For each dimension, assign one of:
- **Hard quota:** Recruitment stops when cell is full; strict enforcement
- **Soft quota:** Target range (±5–10%) with flexibility
- **Minimum floor:** At least N participants required; no cap
- **Proportional:** Mirrors population incidence rates (use census or client data)
- **Purposive:** Over-samples a minority segment for analytical depth

### 4. Calculate Cell Allocations
- For proportional quotas: multiply total n by segment incidence rate
- For interlocking quotas: build a cross-tab matrix; ensure no cell falls below n=5 for quant or n=3 for qual
- Flag cells at risk of infeasibility (incidence <5% of population × quota requirement)
- Apply a **recruitment multiplier** (typically 3–5×) to account for screener dropout and disqualification

### 5. Write Screener Logic
For each quota cell:
- Write qualifying criteria as explicit inclusion/exclusion rules
- Assign termination points (terminate early vs. terminate late)
- Flag soft-launch check: after first 10–15% of completes, verify cells are filling proportionally
- Define over-quota handling: route to waitlist or terminate with thank-you

### 6. Build Quota Monitoring Plan
- Define check-in intervals (every 25%, 50%, 75% of target)
- Identify which cells to prioritize if recruitment lags
- Establish re-contact or panel-boost triggers

## Output Format

Produce the following deliverables in sequence:

**1. Quota Summary Table**
Markdown table with columns: Segment | Dimension | Quota Type | Target N | Incidence Rate | Recruitment Need (with multiplier)

**2. Interlocking Quota Matrix** (if applicable)
Cross-tab grid showing cell targets; highlight cells flagged as at-risk

**3. Screener Logic Rules**
Numbered list of qualifying and disqualifying criteria per segment, written as conditional logic (IF / THEN / TERMINATE)

**4. Feasibility Notes**
Bullet list flagging any cells with low incidence, high recruitment cost, or sample size risk, with a recommended mitigation for each

**5. Monitoring Checklist**
Short checklist (5–8 items) for field teams to track quota balance during data collection

Total output length: 400–800 words depending on study complexity. Use tables and structured lists throughout; avoid prose paragraphs in the deliverable sections.
