---
name: monitoring-tools
description: >
  Sets up comprehensive application and infrastructure monitoring including metrics collection, alerting rules, and dashboards. Use when someone says "set up monitoring," asks about "application observability," wants to "track system health," needs to "configure alerts," or asks about "setting up dashboards" for their services.
category: developer
tags: [monitoring, observability, alerting, dashboards, infrastructure]
author: community
---

# Monitoring Tools Setup

This skill configures end-to-end monitoring for applications and infrastructure, producing ready-to-use configuration files for metrics collection, alerting, and visualization dashboards.

## Monitoring Setup Workflow

1. **Identify the stack** — Determine the application type (web service, database, queue, etc.), language/runtime, and existing infrastructure (Kubernetes, bare metal, cloud provider).

2. **Select monitoring tools** — Choose appropriate tools based on the stack:
   - Metrics: Prometheus, Datadog, CloudWatch, or Grafana Cloud
   - Logs: Loki, ELK Stack, or CloudWatch Logs
   - Traces: Jaeger, Tempo, or X-Ray
   - Dashboards: Grafana, Kibana, or native cloud consoles

3. **Instrument the application** — Add metrics exporters or SDK instrumentation:
   - Expose a `/metrics` endpoint (Prometheus format) or configure agent-based collection
   - Add structured logging with consistent fields (service, level, trace_id, timestamp)
   - Instrument key code paths with trace spans for latency-sensitive operations

4. **Define the four golden signals** — Create metrics and alerts for:
   - **Latency**: p50, p95, p99 response times; alert if p99 > threshold
   - **Traffic**: requests per second; alert on sudden drops (potential outage)
   - **Errors**: error rate percentage; alert if > 1% sustained over 5 minutes
   - **Saturation**: CPU, memory, disk, queue depth; alert at 80% utilization

5. **Write alerting rules** — Configure tiered alerts:
   - **Page (critical)**: error rate > 5%, service down, disk > 95%
   - **Warn (non-urgent)**: latency degradation, memory > 85%, queue backlog growing
   - Include runbook links in every alert annotation

6. **Build dashboards** — Create panels for:
   - Service overview: request rate, error rate, latency heatmap
   - Resource utilization: CPU, memory, disk I/O, network
   - Dependency health: downstream service latency, DB query times, cache hit rates
   - Business metrics: key domain-specific KPIs if applicable

7. **Validate the setup** — Provide a checklist:
   - Metrics are being scraped/received
   - Alerts fire correctly in a test environment
   - Dashboards render without missing data
   - On-call routing is configured for critical alerts

## Output Format

Produce the following artifacts in order:

1. **Configuration files** — Full, working config files with comments explaining non-obvious settings:
   - Prometheus `prometheus.yml` or equivalent scrape config
   - Alerting rules file (`alerts.yml`) with at least 6–8 rules covering the four golden signals
   - Grafana dashboard JSON or Terraform/Pulumi IaC for dashboard provisioning

2. **Instrumentation code** — Language-specific snippets to add to the application (middleware, decorators, or SDK initialization blocks)

3. **Alert runbooks** — A markdown table mapping each alert name to: trigger condition, severity, immediate action, and escalation path

4. **Setup checklist** — Numbered verification steps to confirm monitoring is working end-to-end

Format: Use fenced code blocks with language tags for all configs and code. Group related files under `###` headers. Keep configs production-ready, not toy examples — include retention policies, scrape intervals, label conventions, and notification channels.