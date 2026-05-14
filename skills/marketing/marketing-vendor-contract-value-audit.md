---
name: marketing-vendor-contract-value-audit
description: >
  Evaluates marketing technology subscriptions and agency contracts against actual usage metrics, performance outcomes, and industry benchmarks to surface underperforming or redundant vendor relationships. Use when someone says "we're paying too much for our marketing tools," asks about reviewing agency contracts, or wants to identify which vendors aren't delivering ROI. Also triggers when someone needs to cut the marketing budget, is preparing for a vendor renewal, or wants to consolidate their martech stack.
category: marketing
tags: [vendor-management, martech, contracts, roi, budget-optimization]
author: community
---

# Marketing Vendor Contract Value Audit

This skill systematically audits each marketing vendor or agency contract by comparing spend against usage data, performance metrics, and market benchmarks to produce a clear keep/renegotiate/cut recommendation for each relationship.

## Audit Workflow

### 1. Collect Contract Inventory
Request or reconstruct a full list of active marketing vendor contracts including:
- Vendor name and category (SEO tool, paid media agency, email platform, analytics, CRM, etc.)
- Annual or monthly contract value
- Contract end date and auto-renewal terms
- Named owner or internal champion

### 2. Pull Usage and Engagement Data
For each vendor, assess actual utilization:
- **SaaS tools**: Monthly active users, feature adoption rate, seat utilization (seats used / seats paid), integrations actively in use
- **Agencies**: Deliverables completed vs. contracted, hours billed vs. budgeted, team members actually engaged
- Flag any tool with <60% seat utilization or <50% feature adoption as a red flag

### 3. Map Outcomes to Each Vendor
Connect each contract to measurable business outcomes:
- What KPI does this vendor directly influence? (leads, pipeline, traffic, conversions, brand reach)
- What results were achieved in the last 90 days vs. the benchmark or goal set at contract signing?
- If no KPI can be attributed, flag the vendor as "unmeasured risk"

### 4. Apply Benchmark Comparisons
Compare each vendor against:
- Industry-standard pricing for the tool/service category (e.g., average CPL for paid media agencies, typical ESP pricing per contact tier)
- Competitor or alternative tools offering equivalent functionality at lower cost
- Internal cost-per-outcome (e.g., cost per MQL generated, cost per campaign launched)

### 5. Score Each Vendor
Rate each vendor on three dimensions (1–5 scale):
- **Value**: Outcomes delivered relative to cost
- **Utilization**: How fully the contract is being used
- **Replaceability**: How easily it could be replaced or consolidated

Calculate a composite score. Vendors scoring ≤9 out of 15 are candidates for renegotiation or termination.

### 6. Generate Recommendations
For each vendor, assign one of four actions:
- **Retain**: High value, well-utilized, competitive pricing
- **Renegotiate**: Valuable but overpriced or underutilized — identify specific leverage points (renewal date, competitor pricing, usage gap)
- **Downgrade**: Right vendor, wrong tier — reduce seats, features, or scope
- **Terminate**: Low value, duplicative, or unmeasured — identify replacement or elimination path

### 7. Identify Consolidation Opportunities
Cross-reference the full vendor list for:
- Functional overlap (e.g., two tools both doing social scheduling)
- Platform redundancy (e.g., paying for analytics inside a tool already covered by GA4)
- Vendors whose functions could be absorbed by an existing higher-tier contract

## Output Format

Produce a structured audit report with the following sections:

**Executive Summary** (3–5 bullet points)
- Total annual marketing vendor spend audited
- Estimated savings opportunity identified
- Number of vendors reviewed and breakdown by recommendation category

**Vendor-by-Vendor Scorecard** (table format)
| Vendor | Category | Annual Cost | Utilization | Value Score | Composite Score | Recommendation |
|--------|----------|-------------|-------------|-------------|-----------------|----------------|
Each row includes a one-line rationale for the recommendation.

**Top 3 Priority Actions**
Ranked by savings impact or strategic risk. Each includes:
- Specific action to take
- Dollar value at stake
- Suggested timeline (immediate / next renewal / next quarter)
- Negotiation talking points or replacement suggestion
