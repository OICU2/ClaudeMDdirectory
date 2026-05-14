---
name: cost-segregation-opportunity-screener
description: >
  Evaluates real estate or capital asset purchases to identify components eligible for accelerated depreciation under cost segregation rules. Use when someone says they're buying a commercial property, asks about speeding up depreciation on a building, wants to reduce taxes on a real estate investment, is wondering if cost segregation is worth it, or mentions a recent property acquisition and tax strategy. Surfaces which asset components qualify for 5, 7, or 15-year depreciation instead of the standard 39 or 27.5-year schedule.
category: finance
tags: [cost-segregation, depreciation, real-estate, tax-strategy, capital-assets]
author: community
---

# Cost Segregation Opportunity Screener

This skill screens a real estate or capital asset purchase for cost segregation opportunities, classifying building components by depreciation class and estimating the tax deferral benefit so Claude can give an actionable recommendation.

## Screening Workflow

### Step 1: Gather Key Inputs
Ask for (or extract from context):
- Property type (commercial, residential rental, industrial, mixed-use)
- Purchase price or total project cost
- Land value (excluded from depreciation)
- Year placed in service
- Taxpayer entity type and tax bracket (individual, C-corp, pass-through)
- Whether bonus depreciation applies (check current-year rules: 60% for 2024, phasing down)
- Intended hold period

### Step 2: Classify Components by Depreciation Life
Apply IRS MACRS rules to map typical building components:

**5-Year Property (personal property)**
- Carpeting, vinyl flooring, decorative lighting
- Appliances, furniture, removable partitions
- Specialty plumbing (restaurants, labs)

**7-Year Property (personal property)**
- Office furniture and equipment
- Certain manufacturing assets

**15-Year Property (land improvements)**
- Parking lots, sidewalks, landscaping
- Outdoor lighting, fencing, signage
- Retention ponds, site utilities

**39-Year Property (structural components — standard)**
- Foundation, framing, roof, HVAC serving whole building
- Plumbing and electrical for general building use
- Elevators, windows, doors

**27.5-Year Property (residential rental)**
- Applies to the structural shell of residential rental property

### Step 3: Estimate Reclassification Percentages
Use industry benchmarks by property type to estimate the share of cost that can be reclassified:

| Property Type | 5-yr | 7-yr | 15-yr | Typical Reclassified % |
|---|---|---|---|---|
| Office Building | 10–15% | 3–5% | 8–12% | 20–30% |
| Retail / Restaurant | 20–30% | 5–8% | 10–15% | 35–50% |
| Industrial / Warehouse | 5–10% | 2–4% | 10–15% | 15–25% |
| Apartment Complex | 10–15% | 2–3% | 8–12% | 20–28% |
| Hotel / Hospitality | 25–35% | 5–10% | 8–12% | 38–55% |
| Medical / Dental Office | 20–30% | 5–8% | 8–12% | 33–48% |

### Step 4: Calculate Accelerated Depreciation Benefit
1. **Depreciable basis** = Purchase price − Land value
2. **Reclassified amount** = Depreciable basis × estimated reclassification %
3. **Year-1 accelerated deduction** = Reclassified amount × applicable bonus depreciation % + remaining reclassified amount on MACRS schedule
4. **Standard Year-1 deduction** = Full depreciable basis ÷ 39 (or 27.5 for residential)
5. **Additional Year-1 deduction** = Accelerated − Standard
6. **Tax deferral value** = Additional deduction × effective tax rate

### Step 5: Assess Viability
Flag the opportunity as:
- **Strong candidate** — Reclassified amount > $500K or tax deferral > $150K; recommend formal engineering study
- **
