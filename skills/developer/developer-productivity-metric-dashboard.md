---
name: developer-productivity-metric-dashboard
description: >
  Defines the key metrics, data sources, and visualization layout for a developer productivity dashboard tracking DORA metrics and engineering efficiency. Use when someone asks about measuring developer productivity, wants to build an engineering metrics dashboard, needs to track deployment frequency or lead time, asks how to measure MTTR or change failure rate, or wants to visualize team performance data.
category: developer
tags: [metrics, dora, dashboard, productivity, devops]
author: community
---

# Developer Productivity Metric Dashboard

This skill defines the metrics, data sources, calculation methods, and visualization layout for a comprehensive developer productivity dashboard focused on DORA metrics and supporting engineering KPIs.

## Metric Definitions and Data Sources

### Core DORA Metrics

**1. Deployment Frequency**
- Definition: How often code is successfully deployed to production per day/week
- Data sources: CI/CD pipeline (GitHub Actions, Jenkins, CircleCI), deployment logs, PagerDuty, ArgoCD
- Calculation: Count of successful production deployments in time window
- Target thresholds: Elite (multiple/day), High (daily–weekly), Medium (weekly–monthly), Low (<monthly)

**2. Lead Time for Changes**
- Definition: Time from first commit to successful production deployment
- Data sources: Git commit timestamps, CI/CD pipeline start/end times, deployment records
- Calculation: `deployment_timestamp - first_commit_timestamp` averaged across all PRs in period
- Segments: Coding time, review time, pipeline time, deploy time

**3. Mean Time to Recovery (MTTR)**
- Definition: Average time to restore service after a production failure
- Data sources: Incident tracking (PagerDuty, OpsGenie), status page events, monitoring alerts (Datadog, Grafana)
- Calculation: `incident_resolved_at - incident_detected_at` averaged across all incidents
- Distinguish between: detection time, acknowledgment time, resolution time

**4. Change Failure Rate**
- Definition: Percentage of deployments that cause a production incident or require rollback
- Data sources: Deployment logs correlated with incident records, rollback events, hotfix deploys
- Calculation: `(failed_deployments / total_deployments) * 100`
- A deployment counts as failed if: incident opened within 1 hour, rollback triggered, hotfix deployed within 24 hours

### Supporting Metrics

**5. PR Cycle Time**
- Time from PR open to merge: coding, review wait, active review, merge
- Data source: GitHub/GitLab API (`pulls` endpoint, review events)

**6. Code Review Turnaround**
- Median time from PR submission to first review comment
- Data source: Pull request review events via VCS API

**7. Build Success Rate**
- Percentage of CI pipeline runs that pass
- Data source: CI/CD API (builds endpoint, status field)

**8. Deployment Queue Depth**
- Number of merged PRs waiting for production deployment
- Data source: Diff between merge timestamps and deploy timestamps

## Data Collection Architecture

```
Data Sources
├── VCS (GitHub/GitLab)
│   ├── Commits API → lead time start
│   ├── Pull Requests API → cycle time, review turnaround
│   └── Merge Events → deployment queue
├── CI/CD Platform
│   ├── Build Events → deployment frequency, build success rate
│   ├── Pipeline Duration → lead time segments
│   └── Rollback Events → change failure rate input
├── Incident Management (PagerDuty/OpsGenie)
│   ├── Incident Open/Resolve → MTTR
│   └── Incident-to-Deploy correlation → change failure rate
└── Data Store (Postgres/ClickHouse)
    ├── Raw events table (event_type, timestamp, metadata)
    ├── Deployments table (id, env, started_at, completed_at, status)
    └── Incidents table (id, opened_at, resolved_at, linked_deploy_id)
```

**Ingestion approach:**
- Webhooks for real-time events (push, PR, deployment, incident)
- Nightly batch sync for backfill and reconciliation
- Store raw events before aggregation to enable recomputation

## Dashboard Layout

```
┌─────────────────────────────────────────
