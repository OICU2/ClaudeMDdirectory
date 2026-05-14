---
name: asset-utilization-tracking-model
description: >
  Builds a structured framework for measuring how frequently and efficiently physical or digital assets are used relative to their total capacity. Use when someone wants to track asset utilization rates, asks about optimizing resource usage across a fleet or inventory, or needs to identify underused or over-stressed assets. Also activates when someone mentions capacity planning gaps or wants to reduce idle asset costs.
category: operations
tags: [asset-management, utilization, capacity-planning, operations, tracking]
author: community
---

# Asset Utilization Tracking Model

This skill designs a complete tracking framework that measures asset usage frequency and efficiency against capacity, and Claude will deploy it whenever a team needs visibility into how well their physical or digital assets are being leveraged.

## Framework Construction Workflow

### 1. Define Asset Inventory Scope
- Enumerate all asset categories in scope (vehicles, machines, software licenses, servers, workstations, facilities, etc.)
- Assign each asset a unique identifier, category, owner, and location
- Record total theoretical capacity per asset (hours/day, transactions/hour, seats, storage GB, etc.)

### 2. Establish Utilization Metrics
For each asset type, define:
- **Scheduled utilization rate**: Booked or allocated time ÷ total available time
- **Active utilization rate**: Actual productive usage time ÷ total available time
- **Efficiency ratio**: Output produced ÷ maximum rated output
- **Idle time**: Available time − active usage time
- **Downtime**: Time unavailable due to maintenance, failure, or reservation conflicts

Use this formula as the baseline:
```
Utilization % = (Active Usage Time / Total Available Capacity Time) × 100
```

### 3. Set Utilization Thresholds
Define threshold tiers per asset class:
| Tier | Range | Label | Action |
|------|-------|-------|--------|
| Critical underuse | 0–30% | Idle/Stranded | Flag for redeployment or disposal |
| Low use | 31–60% | Underutilized | Investigate scheduling gaps |
| Optimal | 61–85% | Healthy | Monitor only |
| Overloaded | 86–100%+ | At-risk | Plan capacity expansion or load balancing |

Thresholds should be customizable per asset category since a server and a delivery truck have different healthy ranges.

### 4. Design Data Collection Points
- Identify data sources: IoT sensors, ERP logs, booking systems, login/logout records, fuel logs, ticketing systems
- Define collection frequency: real-time, hourly, daily, or shift-based depending on asset type
- Map each asset to its data source and collection method
- Note manual fallback tracking methods for assets without automated instrumentation

### 5. Build the Tracking Model Structure
Create a tracking record schema with these fields per asset:
```
asset_id | asset_name | category | location | owner | 
capacity_unit | total_capacity | scheduled_hours | active_hours | 
idle_hours | downtime_hours | utilization_pct | efficiency_ratio | 
period_start | period_end | notes | threshold_tier
```

### 6. Aggregate and Report
- Calculate utilization at asset, category, site, and organization levels
- Compute rolling averages (7-day, 30-day, 90-day) to smooth anomalies
- Flag assets breaching threshold tiers automatically
- Identify patterns: time-of-day peaks, seasonal variation, department-level hoarding

### 7. Define Improvement Actions
Map each threshold tier to a default response playbook:
- **Idle/Stranded**: Audit scheduling, consider redeployment, evaluate disposal ROI
- **Underutilized**: Review booking friction, cross-department sharing, shift redistribution
- **Overloaded**: Queue load balancing, prioritize maintenance scheduling, justify new asset acquisition

## Output Format

Produce the following deliverables in sequence:

1. **Asset Inventory Table** — Markdown table listing all assets with ID, category, capacity unit, owner, and current data source

2. **Metric Definitions Sheet** — Bulleted list of each utilization metric, its formula, and the data inputs required

3. **Threshold Configuration** — Table with tier names, percentage ranges, labels, and default actions, with a note on which tiers need customization per asset class

4.
