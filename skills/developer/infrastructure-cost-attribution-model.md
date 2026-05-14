---
name: infrastructure-cost-attribution-model
description: >
  Allocates cloud infrastructure costs to individual services or teams based on resource consumption metrics and generates a per-service cost breakdown report. Use when someone says "attribute cloud costs to services," asks about "which team is spending the most on infrastructure," or wants to "break down AWS/GCP/Azure costs by service or team." Also triggers when someone needs to "allocate infrastructure spend" or wants to "generate a cost attribution report."
category: developer
tags: [cloud-costs, finops, cost-attribution, infrastructure, reporting]
author: community
---

# Infrastructure Cost Attribution Model

This skill analyzes cloud resource consumption metrics and allocates infrastructure costs to individual services or teams, producing a structured per-service cost breakdown report.

## Cost Attribution Workflow

1. **Gather inputs** — Collect the following from the user:
   - Cloud provider(s) in use (AWS, GCP, Azure, or multi-cloud)
   - Time period for attribution (daily, weekly, monthly)
   - Raw cost data source (billing export CSV, Cost Explorer output, BigQuery billing table, or manual totals)
   - Resource tagging strategy or team/service ownership mapping
   - Allocation method preference: proportional (by usage %), fixed split, or tag-based direct assignment

2. **Parse resource consumption metrics** — Identify and categorize costs by resource type:
   - Compute (EC2, GKE nodes, VMs): attribute by CPU/memory hours consumed per service
   - Storage (S3, GCS, Blob): attribute by GB stored and egress per owner
   - Networking (data transfer, load balancers): attribute by traffic volume per service
   - Managed services (RDS, BigQuery, Pub/Sub): attribute by usage units per team
   - Shared resources (NAT gateways, monitoring, logging): distribute proportionally by total service cost share

3. **Apply attribution rules** — For each resource:
   - If resource has a direct ownership tag (`service:`, `team:`, `env:`), assign 100% of cost to that owner
   - If resource is shared with no tag, distribute cost proportionally based on each service's share of total tagged resource spend
   - If resource is untaggable (e.g., support fees, marketplace), distribute as overhead using configurable split (default: equal share across all services)

4. **Calculate per-service totals** — Sum attributed costs per service/team across all resource categories. Compute:
   - Total attributed cost
   - Cost per resource category
   - Percentage of overall infrastructure spend
   - Month-over-month or period-over-period delta if prior period data is available

5. **Flag anomalies** — Identify and call out:
   - Services with >20% cost increase vs. prior period
   - Untagged resources representing >5% of total spend
   - Any single resource consuming >30% of a service's budget

6. **Generate report** — Format and present the attribution model output as specified below.

## Output Format

Produce a structured cost attribution report with the following sections:

### Summary Table
Markdown table with columns: `Service/Team | Compute ($) | Storage ($) | Networking ($) | Managed Services ($) | Shared Overhead ($) | Total ($) | % of Spend | Δ vs Prior Period`

### Untagged / Unattributed Resources
Bullet list of resource IDs or types that could not be directly attributed, with estimated cost impact and recommended tagging action.

### Anomaly Alerts
Numbered list of flagged anomalies with: resource or service name, current cost, prior cost, % change, and a one-line recommended action.

### Allocation Methodology Notes
2–4 bullet points describing the allocation rules applied, any assumptions made, and data gaps that could affect accuracy.

### Recommendations
3–5 bullet points for improving tagging coverage, reducing shared overhead ambiguity, or optimizing high-spend services.

Report length scales with data complexity — a single-team report may be 1–2 pages; a multi-team enterprise report may be 4–6 pages. Always use markdown formatting suitable for rendering in a wiki, Notion, or GitHub README.
