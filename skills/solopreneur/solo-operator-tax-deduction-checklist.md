---
name: solo-operator-tax-deduction-checklist
description: >
  Generates a personalized checklist of commonly missed tax deductions for freelancers, consultants, and solo business owners. Use when someone says they want to reduce their tax bill, asks what they can write off, wonders if they're missing deductions, wants to prepare for tax season, or is trying to figure out what expenses are deductible for their business type.
category: solopreneur
tags: [taxes, deductions, freelance, solopreneur, finance]
author: community
---

# Solo Operator Tax Deduction Checklist

This skill generates a tailored list of commonly overlooked tax deductions based on the user's service type and expense categories, helping solo business owners avoid leaving money on the table at tax time.

## Workflow

1. **Gather business context** — Ask the user for:
   - Their service type or industry (e.g., graphic designer, consultant, coach, developer, writer)
   - How they work (home office, client sites, coworking, fully remote)
   - Any major expense categories they already track (software, travel, equipment, etc.)
   - Whether they're a sole proprietor, single-member LLC, or S-corp

2. **Identify their deduction profile** — Based on their answers, map their business type to relevant deduction categories:
   - **Home-based**: home office deduction (dedicated space rule), utilities percentage, internet, renter's/homeowner's insurance portion
   - **Service/knowledge work**: professional development, courses, books, subscriptions, certifications
   - **Client-facing**: meals (50% rule), travel, mileage, client gifts (up to $25/person/year)
   - **Digital/tech**: software subscriptions, SaaS tools, domain/hosting, hardware depreciation (Section 179)
   - **Universal solo operator**: health insurance premiums (self-employed deduction), retirement contributions (SEP-IRA, Solo 401k), self-employment tax deduction (50%), business banking fees, professional services (accountant, attorney)

3. **Flag commonly missed deductions** — Always surface these if not already mentioned:
   - Phone bill percentage used for business
   - Bank and payment processing fees (Stripe, PayPal, etc.)
   - Coworking space memberships
   - Business-related podcast/newsletter/community subscriptions
   - Advertising and marketing costs (website, ads, Canva, etc.)
   - Contractor payments (and remind them to issue 1099s if over $600)
   - Start-up costs if they launched within the last few years

4. **Add caveats without over-hedging** — Note that deductions require documentation, and complex situations (S-corp, mixed-use assets, vehicle) warrant a CPA. Do not disclaim every single item — keep it useful.

## Output Format

Produce a structured markdown checklist organized into labeled sections based on the user's profile. Each section should have 4–8 bullet points. Format:

```
## 🧾 Your Personalized Tax Deduction Checklist
**Business type:** [stated type] | **Structure:** [entity type]

### 🏠 Home & Workspace
- [ ] Home office deduction (dedicated space, X% of home sq footage)
- [ ] ...

### 💻 Software & Tech
- [ ] ...

### 📚 Professional Development
- [ ] ...

### 🚗 Travel & Transportation
- [ ] ...

### 🏥 Self-Employed Benefits
- [ ] ...

### 💳 Fees & Services
- [ ] ...

### ⚠️ Don't Forget
- [ ] [2–3 high-impact items specific to their situation]

---
*Keep receipts and records for everything above. Consult a CPA for vehicle, home office, or S-corp specifics.*
```

Total length: 30–50 checklist items across all sections. Use checkboxes so the user can print or save it. Tailor item descriptions to their specific business (e.g., "Figma subscription" not just "design software" if they're a designer).
