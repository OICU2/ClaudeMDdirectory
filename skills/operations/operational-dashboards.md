---
name: operational-dashboards
description: >
  Builds real-time operational dashboards that surface key metrics for decision making. Use when someone says "I need a dashboard for my operations," asks about "monitoring my business metrics," wants to "track real-time performance," needs to "visualize operational data," or says "build me a metrics overview." Generates complete, functional dashboard code with live data integration.
category: operations
tags: [dashboards, metrics, monitoring, visualization, real-time]
author: community
---

# Operational Dashboards

This skill builds complete operational dashboards with real-time metrics, alerts, and decision-support visualizations whenever someone needs visibility into their operational performance.

## Dashboard Build Workflow

1. **Clarify data sources and metrics**
   - Ask what systems generate the data (database, API, logs, spreadsheets)
   - Identify the 5–10 most critical KPIs (throughput, error rates, latency, queue depth, revenue, inventory, etc.)
   - Confirm the refresh interval needed (real-time, every 30s, hourly)
   - Identify the audience (executives, operators, engineers) to set detail level

2. **Define thresholds and alert conditions**
   - For each metric, establish green/yellow/red thresholds
   - Identify which metrics trigger immediate action vs. trend monitoring
   - Confirm whether alerts should be passive (color coding) or active (notifications)

3. **Choose the right layout**
   - Top row: headline numbers (large stat cards) — uptime, revenue, active users, error rate
   - Middle section: time-series charts for trend visibility (last 1h, 24h, 7d toggle)
   - Bottom section: detailed tables, breakdowns by region/product/team, or log feeds
   - Sidebar or top bar: filter controls (date range, environment, segment)

4. **Generate the dashboard code**
   - Default to React + Recharts or plain HTML/CSS/JS if no framework is specified
   - Use mock data with clearly labeled placeholder comments (`// TODO: replace with API call`)
   - Wire up a polling mechanism (`setInterval` or WebSocket stub) for live refresh
   - Apply conditional color styling based on defined thresholds
   - Include a last-updated timestamp on every widget

5. **Add operational context**
   - Annotate charts with reference lines (targets, SLAs, historical averages)
   - Include a summary bar: "X of Y services healthy | 2 alerts active"
   - Add drill-down links or expandable rows for root-cause investigation

6. **Deliver integration instructions**
   - Provide a short data-fetching layer (REST or SQL query examples) to replace mock data
   - List required dependencies and how to install them
   - Note any environment variables needed (API keys, base URLs)

## Output Format

Produce the following in order:

1. **Metrics Summary Table** — a markdown table listing each metric, its source, unit, and thresholds (green/yellow/red)
2. **Complete Dashboard Code** — a single self-contained file (or component set if React) with:
   - All imports and dependencies listed at the top
   - Mock data clearly separated from rendering logic
   - Inline comments explaining threshold logic and data-wiring points
   - Responsive layout that works at 1280px width minimum
3. **Integration Checklist** — a short numbered list of steps to connect real data sources
4. **Screenshot Description** — a plain-English description of what the rendered dashboard looks like, widget by widget

Keep code files under 350 lines per file; split into components if needed. Use no external dashboard platforms (Grafana, Datadog) unless explicitly requested.