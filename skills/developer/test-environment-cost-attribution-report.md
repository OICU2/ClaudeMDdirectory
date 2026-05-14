---
name: test-environment-cost-attribution-report
description: >
  Breaks down cloud infrastructure costs by test environment, team, and purpose to identify waste and optimize developer spend. Use when someone asks about test environment costs, wants to understand cloud spend by team or environment type, needs to find wasteful or idle test infrastructure, or wants to attribute staging and CI/CD costs to specific owners. Also activates when someone asks why their cloud bill is high or wants to reduce developer infrastructure spend.
category: developer
tags: [cloud-cost, infrastructure, test-environments, finops, cost-attribution]
author: community
---

# Test Environment Cost Attribution Report

This skill analyzes and breaks down cloud infrastructure costs by test environment, team, and purpose to surface waste and produce actionable optimization recommendations.

## Data Collection

1. **Identify cost data sources** — Ask the user which cloud provider(s) they use (AWS, GCP, Azure) and how they access billing data (Cost Explorer, BigQuery billing export, Azure Cost Management, a CSV export, or a FinOps tool like CloudHealth or Apptio).
2. **Gather tagging/labeling strategy** — Ask for the tagging schema used to identify environment type (e.g., `env=staging`, `env=test`, `env=ci`), team ownership (e.g., `team=backend`), and purpose (e.g., `purpose=load-test`). If no tags exist, note this as a critical gap.
3. **Define the reporting period** — Confirm the time range (default: last 30 days). Ask if they want daily, weekly, or monthly granularity.
4. **Request or infer environment taxonomy** — Identify environment categories: production, staging, QA, CI/CD ephemeral, load testing, developer sandboxes, long-running feature branches.

## Analysis Steps

1. **Attribute costs by environment type** — Group total spend into the environment taxonomy. Calculate each category's percentage of total non-production spend.
2. **Attribute costs by team** — Break down spend per team or cost center using ownership tags. Flag any resources with missing or ambiguous ownership tags.
3. **Identify idle and oversized resources** — Flag resources running >168 hours/week with low utilization (CPU <10%, memory <20%), stopped instances still incurring storage costs, and environments not accessed in >7 days.
4. **Identify top cost drivers** — List the top 10 most expensive individual resources or resource groups within test environments, including resource ID, type, team, environment, and monthly cost.
5. **Calculate waste estimate** — Estimate recoverable spend from: idle resources, always-on environments that should be ephemeral, over-provisioned instance types, and unattached storage volumes or orphaned snapshots.
6. **Benchmark environment ratios** — Compare test-to-production cost ratio. A healthy ratio is typically 15–30% of production spend; flag if test spend exceeds 50% of production spend.

## Output Format

Produce a structured report with the following sections:

---

### Summary
- Total non-production cloud spend (reporting period)
- Test spend as % of total cloud spend
- Estimated recoverable waste ($ and %)
- Number of untagged/unowned resources flagged

### Cost Breakdown by Environment Type
Markdown table with columns: Environment Type | Monthly Cost | % of Test Spend | Top Service | Owner Coverage %

### Cost Breakdown by Team
Markdown table with columns: Team | Monthly Cost | % of Test Spend | Primary Environment | Flagged Issues

### Top 10 Cost Drivers
Numbered list with: Resource ID/Name, Type, Team, Environment, Monthly Cost, Utilization note

### Waste & Optimization Opportunities
Bullet list of specific findings, each formatted as:
- **[Resource or pattern]** — $X/month recoverable — Recommended action: [specific action]

### Tagging & Attribution Gaps
List untagged resources by count and estimated cost. Recommend specific tag keys to enforce.

### Recommended Next Steps
Prioritized list of 3–5 actions ranked by estimated savings impact, each with owner, effort level (Low/Medium/High), and expected monthly savings.

---

If the user provides raw data (CSV, JSON, or pasted output), parse it directly and populate the report. If no data is provided, output the report as a template with placeholder values and instruct the user on how to export the required data from their cloud provider.
