---
name: service-dependency-health-dashboard-design
description: >
  Designs a comprehensive real-time dashboard specification for monitoring the health of all upstream and downstream service dependencies. Use when someone says "I need to monitor my service dependencies," asks about "dependency health tracking," wants to "visualize service connectivity and status," needs to "surface upstream/downstream failures," or is building a "service mesh observability dashboard."
category: developer
tags: [observability, dashboards, microservices, monitoring, dependencies]
author: community
---

# Service Dependency Health Dashboard Design

This skill produces a complete dashboard specification—including metrics, data sources, layout, and alerting logic—for real-time visibility into all upstream and downstream service dependency health.

## Dashboard Design Workflow

### 1. Gather Context
Before designing, collect:
- List of services (name, type: upstream/downstream/both, criticality: P0/P1/P2)
- Existing data sources (Prometheus, Datadog, CloudWatch, Jaeger, Zipkin, etc.)
- SLA/SLO targets per dependency
- Team: on-call engineers, SRE, or product stakeholders as audience
- Refresh rate requirements (real-time <5s, near-real-time 30s, periodic 1min+)

### 2. Define Core Metrics Per Dependency
For each service dependency, specify these metric categories:

**Availability**
- `dependency_up` — binary health check (0/1)
- `error_rate` — percentage of failed requests (5xx, timeouts, connection refused)
- `success_rate` — (1 - error_rate) × 100

**Latency**
- `p50_latency_ms`, `p95_latency_ms`, `p99_latency_ms`
- `latency_breach_count` — requests exceeding SLO threshold

**Throughput**
- `requests_per_second` (RPS)
- `request_volume_delta` — % change vs. baseline window (1h, 24h)

**Saturation**
- `connection_pool_utilization` — active / max connections
- `queue_depth` — pending requests in retry/circuit-breaker queue
- `thread_pool_saturation` (if applicable)

**Circuit Breaker State**
- State: CLOSED / OPEN / HALF-OPEN
- `circuit_open_duration_seconds`
- `fallback_invocation_rate`

### 3. Define Data Sources and Collection Method
For each metric, specify:
- **Source system**: Prometheus scrape endpoint, StatsD, APM SDK, log-derived metric, synthetic probe
- **Query**: Exact PromQL, metrics query, or log filter expression
- **Scrape/push interval**: e.g., `15s` for Prometheus
- **Retention window shown on dashboard**: rolling 1h, 6h, 24h

Example PromQL entries:
```
error_rate:       rate(http_requests_total{status=~"5..",dependency="payments-svc"}[1m]) / rate(http_requests_total{dependency="payments-svc"}[1m])
p99_latency:      histogram_quantile(0.99, rate(http_request_duration_seconds_bucket{dependency="payments-svc"}[5m]))
circuit_state:    circuit_breaker_state{service="payments-svc"} # 0=CLOSED, 1=OPEN, 2=HALF-OPEN
```

### 4. Design Dashboard Layout

Structure the dashboard in four horizontal zones:

**Zone 1 — Global Health Summary Bar (top, full width)**
- Overall dependency health score (% of dependencies currently healthy)
- Count tiles: Healthy | Degraded | Down | Unknown
- Last updated timestamp + data source staleness indicator

**Zone 2 — Dependency Topology Map (full width)**
- Node-graph or directed graph: calling service at center, upstream left, downstream right
- Node color coding: Green (healthy) / Yellow (degraded, p99 > SLO) / Red (down or circuit open) / Gray (unknown)
- Edge thickness = relative RPS; edge color = error rate severity
- Click-through: node click drills into Zone 3 for that service

**Zone 3 — Per-Dependency Detail Grid (main content area)**
-
