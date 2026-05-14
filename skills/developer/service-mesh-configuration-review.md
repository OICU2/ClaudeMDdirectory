---
name: service-mesh-configuration-review
category: developer
description: >
  Reviews service mesh routing rules, retry policies, and circuit breaker settings to ensure resilience and observability across microservices. Use when someone says "review my service mesh config", asks about "circuit breaker settings", wants to "check my Istio routing rules", needs help with "retry policy configuration", or is troubleshooting "service mesh reliability issues".
tags: [service-mesh, istio, microservices, resilience, observability]
author: community
---

# Service Mesh Configuration Review

This skill analyzes service mesh configuration files (Istio, Linkerd, Consul Connect, etc.) to identify misconfigurations, gaps in resilience settings, and observability blind spots across microservices.

## Review Workflow

### 1. Identify Mesh Type and Scope
- Detect the service mesh platform (Istio, Linkerd, Consul, AWS App Mesh, etc.)
- Inventory all provided configuration files: VirtualServices, DestinationRules, ServiceEntries, AuthorizationPolicies, or platform equivalents
- Map services referenced in configs against known service topology if provided

### 2. Routing Rules Review
- Verify traffic splitting weights sum to 100% across all routes
- Check that header-based and fault-injection routes are not present in production configs unless intentional
- Confirm fallback routes exist for all conditional routing rules
- Flag missing timeout values on VirtualService HTTP routes (default: no timeout is a risk)
- Identify subset labels in DestinationRules that may not match any deployed pod labels

### 3. Retry Policy Analysis
- Check for retry policies on all critical service routes
- Flag missing `perTryTimeout` — retries without per-attempt timeouts can exceed overall budget
- Verify retry conditions include `5xx`, `reset`, `connect-failure`, and `retriable-4xx` where appropriate
- Warn if retry attempts exceed 3 without justification (thundering herd risk)
- Confirm retries are disabled or minimal for non-idempotent operations (POST, PATCH)

### 4. Circuit Breaker Settings (Outlier Detection)
- Verify `outlierDetection` is configured on DestinationRules for all production services
- Check `consecutiveGatewayErrors` and `consecutive5xxErrors` thresholds (recommend ≤5)
- Confirm `interval`, `baseEjectionTime`, and `maxEjectionPercent` are explicitly set
- Flag `maxEjectionPercent` above 50% — risks ejecting majority of healthy hosts
- Warn on missing `minHealthPercent` in load balancer settings

### 5. Observability Coverage
- Confirm telemetry/tracing is enabled (Zipkin, Jaeger, or Datadog integration present)
- Check access logging is enabled for ingress and egress gateways
- Verify metrics collection is not disabled via annotation overrides
- Flag services with `disableReporting: true` or equivalent suppression

### 6. Security Posture (Quick Check)
- Note missing PeerAuthentication or mTLS mode settings
- Flag PERMISSIVE mTLS mode in production namespaces
- Identify AuthorizationPolicies that use wildcard principals (`*`) without justification

### 7. Cross-Cutting Issues
- Detect circular traffic routing between services
- Identify services referenced in routing rules but lacking DestinationRules
- Flag missing egress ServiceEntries for external dependencies
- Check for duplicate host entries across configs

## Output Format

Produce a structured review report with the following sections:

**Summary**
- Mesh type detected
- Files reviewed (list)
- Total issues found by severity: Critical / Warning / Info

**Findings Table**
For each issue:
| Severity | Config File | Resource | Issue | Recommendation |
|----------|-------------|----------|-------|----------------|

Severity levels:
- 🔴 **Critical** — will cause failures or security exposure in production
- 🟡 **Warning** — degrades resilience or observability; fix before scaling
- 🔵 **Info** — best practice gap; low immediate risk

**Corrected Config Snippets**
For every Critical and Warning finding, provide a before/after YAML snippet showing the exact fix.

**Priority Action List**
Numbered list of recommended changes in order of impact, with
