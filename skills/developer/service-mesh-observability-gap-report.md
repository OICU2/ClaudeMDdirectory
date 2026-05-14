---
name: service-mesh-observability-gap-report
description: >
  Audits a service mesh configuration to identify missing trace propagation, metrics collection, or logging coverage across services. Use when someone says "audit our service mesh observability," asks about "missing traces between services," wants to "find observability gaps in the mesh," needs to "check which services lack instrumentation," or asks "why are we losing trace context across services."
category: developer
tags: [service-mesh, observability, tracing, metrics, logging, istio, envoy, opentelemetry]
author: community
---

# Service Mesh Observability Gap Report

Analyzes service mesh configuration files, sidecar definitions, and service manifests to produce a structured report identifying exactly which services are missing trace propagation, metrics scraping, or log collection coverage.

## Audit Workflow

### 1. Inventory All Services
- Collect every service definition from the provided mesh config (Istio VirtualServices, DestinationRules, Kubernetes Services, Consul Connect intentions, Linkerd ServiceProfiles, etc.)
- Build a flat list: `service_name | namespace | mesh_role (ingress/internal/egress)`

### 2. Check Trace Propagation Coverage
For each service, verify:
- Sidecar proxy is injected (look for `sidecar.istio.io/inject: "true"` or equivalent annotation; flag if absent or set to false)
- Required trace headers are forwarded: `x-request-id`, `x-b3-traceid`, `x-b3-spanid`, `x-b3-parentspanid`, `x-b3-sampled`, `traceparent`, `tracestate`
- Sampling rate is configured and non-zero (`tracing.sampling` in MeshConfig or equivalent)
- Trace exporter endpoint is defined and reachable (Jaeger, Zipkin, OTLP collector)
- Flag: missing sidecar, zero sampling rate, no exporter, or header stripping detected

### 3. Check Metrics Collection Coverage
For each service, verify:
- Prometheus scrape annotations present (`prometheus.io/scrape: "true"`, `prometheus.io/port`, `prometheus.io/path`)
- Service Monitor or PodMonitor CRD exists if using kube-prometheus-stack
- Envoy stats are exposed (check `--statsd-udp-address` or `/stats/prometheus` endpoint availability)
- Custom application metrics endpoint is defined (not just mesh-level metrics)
- Flag: missing scrape config, no ServiceMonitor, stats endpoint blocked by NetworkPolicy

### 4. Check Logging Coverage
For each service, verify:
- Access logging is enabled in the mesh config (`accessLogFile` set in MeshConfig or per-service EnvoyFilter)
- Log format includes trace correlation fields (`%REQ(X-REQUEST-ID)%`, `%REQ(X-B3-TRACEID)%`)
- Sidecar log level is appropriate (warn/info, not error-only which drops access logs)
- Log shipping agent is present (Fluentd/Fluent Bit DaemonSet, Filebeat, Vector)
- Flag: access logging disabled, missing trace fields in log format, no log shipper

### 5. Cross-Service Trace Continuity Check
- Map all service-to-service calls from VirtualService routes, ServiceEntries, or traffic policies
- For each call pair `A → B`, confirm both A and B pass the trace context check from Step 2
- Identify "trace break" edges where one side fails propagation — these cause orphaned spans
- Flag every broken edge explicitly

### 6. Classify Gap Severity
Assign each gap a severity:
- **Critical**: Service has zero observability (no tracing, no metrics, no logs)
- **High**: Missing one full pillar (e.g., traces present but no metrics and no logs)
- **Medium**: Partial coverage (e.g., metrics exist but trace headers stripped, or logs missing trace correlation)
- **Low**: Configuration present but suboptimal (e.g., sampling at 1%, logs missing one field)

## Output Format

Produce a Markdown report with the following sections:

```markdown
# Service Mesh Observability Gap Report
Generated: <date>
Mesh Type: <Istio/Linkerd/Consul Connect/other>
Total
