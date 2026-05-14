---
name: idle-resource-identification
category: operations
description: >
  Scans operational assets, software licenses, and infrastructure to identify unused or underutilized resources that can be decommissioned or rightsized to reduce costs. Use when someone says "we're spending too much on infrastructure," asks about finding unused licenses or idle servers, wants to audit their cloud or software spend, needs to cut operational costs, or is looking for resources that can be decommissioned.
tags: [cost-optimization, infrastructure, cloud, asset-management, operations]
author: community
---

# Idle Resource Identification

Analyzes infrastructure, software licenses, and operational assets to surface unused or underutilized resources with actionable decommission or rightsizing recommendations.

## Discovery Workflow

### 1. Scope the Audit
Ask the user to clarify which resource categories to scan (select all that apply):
- **Cloud infrastructure** (VMs, containers, storage buckets, load balancers, reserved instances)
- **Software licenses** (SaaS subscriptions, per-seat tools, enterprise agreements)
- **On-premise hardware** (servers, networking equipment, storage arrays)
- **Database instances** (idle DBs, oversized tiers, unattached volumes)
- **Network resources** (unused IPs, idle VPNs, dormant DNS entries)
- **Internal services** (scheduled jobs, APIs, microservices with no traffic)

### 2. Gather Usage Data
Request the following inputs per category:

**Cloud:**
- Export from AWS Cost Explorer, Azure Advisor, or GCP Recommender
- CPU/memory utilization metrics (last 30–90 days)
- Last-accessed timestamps for storage and snapshots

**Licenses:**
- List of active subscriptions with seat counts and cost
- Login/activity data from SSO provider or vendor admin panel
- Renewal dates

**Hardware/On-Prem:**
- Asset inventory list with last-active date
- Network traffic logs or monitoring tool export (Datadog, Grafana, Nagios)

### 3. Apply Idle Classification Rules

| Status | Criteria |
|---|---|
| **Idle** | 0% usage / 0 logins in last 30 days |
| **Underutilized** | <10% avg CPU or <20% of seats active |
| **Oversized** | Provisioned capacity 2x+ actual peak usage |
| **Orphaned** | No owning team, project, or cost center assigned |
| **Stale** | Last active >90 days ago |

### 4. Estimate Savings
For each flagged resource:
- Calculate monthly and annual cost
- Estimate recoverable savings (full decommission vs. rightsizing)
- Flag any dependencies or risks before removal (e.g., backup retention requirements, contractual minimums)

### 5. Prioritize Recommendations
Rank by:
1. Highest monthly cost first
2. Lowest risk of disruption
3. Fastest to act on (no approval chain required)

## Output Format

Produce a structured report with these sections:

---

**Idle Resource Audit Report**
*Scope:* [categories audited] | *Period:* [date range of data]

**Summary**
- Total resources reviewed: N
- Idle/underutilized resources found: N
- Estimated monthly savings: $X
- Estimated annual savings: $X

**Findings Table**

| Resource Name | Type | Status | Monthly Cost | Recommended Action | Est. Savings | Risk |
|---|---|---|---|---|---|---|
| prod-db-old | RDS Instance | Idle | $340/mo | Decommission | $340/mo | Low |
| Zoom Pro (42 seats) | SaaS License | Underutilized (8 active) | $1,260/mo | Downsize to 10 seats | $1,020/mo | Low |

**Top 5 Quick Wins**
Numbered list of the highest-impact, lowest-risk actions with exact steps to execute.

**Deferred / Needs Investigation**
Resources flagged but requiring owner confirmation or dependency check before action.

**Recommended Next Steps**
3–5 bullet points covering process changes to prevent future idle resource accumulation (e.g., tagging policies, auto-shutdown schedules, license review cadence).

---

Report length scales with number of resources.
