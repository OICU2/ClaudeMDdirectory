---
name: test-environment-cost-optimization-plan
description: >
  Audits running test and staging environments to identify idle resources and recommend cost-reduction configurations. Use when someone says "our test environments are costing too much," asks about reducing staging infrastructure spend, wants to find idle or wasteful dev environments, needs a cost audit of non-production systems, or is looking to optimize cloud spending on test infrastructure.
category: developer
tags: [cost-optimization, cloud, infrastructure, staging, devops]
author: community
---

# Test Environment Cost Optimization Plan

This skill audits test and staging environments to surface idle resources, over-provisioned instances, and scheduling gaps, then produces a prioritized plan to reduce non-production infrastructure costs.

## Audit & Analysis Workflow

1. **Inventory all non-production environments**
   - List every environment by name, type (dev/test/staging/QA), and owner
   - Record cloud provider, region, and account/project ID
   - Note creation date and last active date

2. **Identify idle and underutilized resources**
   - Flag compute instances with CPU utilization < 5% over the past 7 days
   - Flag environments with no deployment or traffic in the past 14 days
   - Identify always-on environments that are only used during business hours (M–F, 9–5)
   - List databases, caches, and storage volumes attached to idle environments

3. **Assess over-provisioning**
   - Compare actual peak CPU/memory usage against provisioned capacity
   - Flag instances where peak usage never exceeds 20% of provisioned size
   - Identify environments running production-tier instance sizes for non-production workloads

4. **Evaluate scheduling and lifecycle gaps**
   - Check whether environments have auto-shutdown schedules configured
   - Identify environments with no TTL (time-to-live) policy
   - Note environments that survive beyond their associated PR, sprint, or release cycle

5. **Estimate current waste**
   - Calculate monthly cost of idle environments (hourly rate × idle hours)
   - Calculate savings from right-sizing over-provisioned instances
   - Calculate savings from adding auto-shutdown schedules (assume 16 off-hours/day on weekdays, full weekends)

6. **Generate recommendations**
   - Immediate actions (shutdown or delete environments idle > 14 days)
   - Right-sizing actions (specific instance downgrades with estimated savings)
   - Scheduling actions (auto-shutdown windows with cron expressions)
   - Policy actions (TTL policies, mandatory owner tags, cleanup automation)
   - Tooling suggestions (e.g., cloud custodian, instance scheduler, Terraform workspace hygiene)

## Output Format

Produce a structured report with the following sections:

```
## Test Environment Cost Optimization Report

**Audit Date:** YYYY-MM-DD
**Environments Audited:** N
**Estimated Monthly Waste:** $X,XXX

---

### 1. Idle Environments (Immediate Action)
| Environment | Owner | Last Active | Monthly Cost | Action |
|-------------|-------|-------------|--------------|--------|
| ...         | ...   | ...         | $XXX         | Delete / Suspend |

**Potential savings: $X,XXX/month**

---

### 2. Over-Provisioned Resources
| Environment | Current Size | Recommended Size | Peak Usage | Monthly Savings |
|-------------|--------------|------------------|------------|-----------------|
| ...         | m5.2xlarge   | m5.large         | 12%        | $XXX            |

**Potential savings: $X,XXX/month**

---

### 3. Scheduling Gaps
| Environment | Current Schedule | Recommended Schedule | Monthly Savings |
|-------------|------------------|----------------------|-----------------|
| ...         | Always on        | 0 8 * * 1-5 start / 0 18 * * 1-5 stop | $XXX |

**Potential savings: $X,XXX/month**

---

### 4. Policy Recommendations
- [Specific policy with implementation step]
- [Specific policy with implementation step]

---

### 5. Prioritized Action Plan
| Priority | Action | Owner | Estimated Savings | Effort |
|----------|--------|-------|-------------------|--------|
| P1       | ...    | ...   | $XXX/mo           | Low    |

---

**
