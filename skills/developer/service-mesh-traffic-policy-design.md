---
name: service-mesh-traffic-policy-design
description: >
  Designs traffic management policies for service mesh configurations, including retry budgets, circuit breaker thresholds, and routing rules for inter-service communication. Use when someone asks about configuring service mesh traffic rules, wants to set up circuit breakers for microservices, needs help with retry policies between services, is designing traffic routing for Istio or Linkerd, or wants to prevent cascade failures in a distributed system.
category: developer
tags: [service-mesh, istio, linkerd, traffic-management, microservices, circuit-breaker, kubernetes]
author: community
---

# Service Mesh Traffic Policy Design

This skill generates complete, production-ready traffic management policies for service meshes (Istio, Linkerd, Consul Connect) including circuit breakers, retry budgets, timeouts, and routing rules based on service communication patterns and reliability requirements.

## Policy Design Workflow

### 1. Gather Service Context
Before generating policies, identify:
- **Mesh type**: Istio, Linkerd, Consul Connect, or AWS App Mesh
- **Service role**: Is this service upstream, downstream, or both?
- **Traffic profile**: Request rate (RPS), expected latency (p50/p99), error budget
- **Criticality**: Is this on the critical path? What is the acceptable error rate?
- **Dependencies**: Which services does it call, and what are their SLOs?

If not provided, ask for these before proceeding. Default to Istio if mesh type is unspecified.

### 2. Design Circuit Breaker Thresholds
Apply these rules when setting circuit breaker values:

- **Consecutive errors threshold**: Set to 5 for critical services, 10 for non-critical
- **Interval**: Use 30s rolling window for high-traffic (>100 RPS), 60s for low-traffic
- **Ejection percentage**: Start at 10%, cap at 50% to avoid full pool ejection
- **Base ejection time**: 30s minimum; multiply by consecutive ejections (max 300s)
- **Detection**: Enable both consecutive gateway errors AND consecutive 5xx separately

For Istio `OutlierDetection`:
```yaml
consecutiveGatewayErrors: 5
consecutive5xxErrors: 5
interval: 30s
baseEjectionTime: 30s
maxEjectionPercent: 50
minHealthPercent: 30
```

### 3. Define Retry Budgets
Retry policies must be bounded to prevent amplification:

- **Attempts**: Never exceed 3 for synchronous calls; use 2 for latency-sensitive paths
- **Per-try timeout**: Set to (p99 latency × 1.5), minimum 500ms
- **Overall timeout**: Set to (per-try timeout × attempts × 1.2)
- **Retry conditions**: Include `gateway-error`, `connect-failure`, `retriable-4xx`; exclude `5xx` for non-idempotent endpoints
- **Retry budget (Linkerd)**: Use 20% of active requests as ceiling

For Istio `HTTPRetry`:
```yaml
attempts: 3
perTryTimeout: 2s
retryOn: gateway-error,connect-failure,retriable-4xx
retryRemoteReset: true
```

### 4. Configure Routing Rules
- **Traffic splitting**: Use weighted routes for canary (start at 5/95, step by 10%)
- **Header-based routing**: Define exact match before prefix match before regex
- **Fault injection**: Add only in staging; document explicitly if included
- **Load balancing**: Use `LEAST_CONN` for services with variable latency; `ROUND_ROBIN` for uniform services
- **Connection pool**: Set `http2MaxRequests` to (max replicas × per-pod concurrency); TCP `maxConnections` to same value

### 5. Set Timeout Hierarchy
Enforce a consistent timeout chain — each layer must be shorter than the layer above:

```
Client timeout > Gateway timeout > VirtualService timeout > Per-try timeout
Example: 30s > 20s > 15s > 5s
```

Never set service mesh timeouts longer than the client-facing gateway timeout.

### 6. Validate Policy Consistency
Check before finalizing:
- [ ] Circuit breaker ejection time does
