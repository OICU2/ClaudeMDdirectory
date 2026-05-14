---
name: service-to-service-authentication-design
description: >
  Designs a secure service-to-service authentication strategy with token scoping, rotation policies,
  and least-privilege access patterns for microservices architectures. Use when someone asks about
  securing internal APIs, wants to set up inter-service auth, needs help with service mesh security,
  is designing microservice trust boundaries, or asks how services should authenticate with each other.
category: developer
tags: [authentication, microservices, security, authorization, service-mesh]
author: community
---

# Service-to-Service Authentication Design

This skill produces a complete, opinionated authentication strategy for microservice communication, covering token types, scoping, rotation, and least-privilege patterns based on the user's stack and threat model.

## Authentication Design Workflow

### 1. Gather Context
Before designing, identify:
- **Infrastructure**: Kubernetes, bare metal, cloud-managed (AWS/GCP/Azure), service mesh (Istio, Linkerd)
- **Scale**: Number of services, call frequency, latency sensitivity
- **Existing auth**: Current tokens, secrets management (Vault, AWS Secrets Manager, etc.)
- **Compliance requirements**: SOC2, PCI, HIPAA, internal policy

### 2. Select Authentication Mechanism
Choose based on context:

| Scenario | Recommended Approach |
|---|---|
| Kubernetes-native | SPIFFE/SPIRE with mTLS, or service account tokens (projected) |
| Service mesh present | mTLS via mesh identity (Istio SVID, Linkerd identity) |
| Cloud-native | Cloud IAM service accounts (AWS IRSA, GCP Workload Identity) |
| No mesh/cloud IAM | Short-lived JWT tokens via central auth service (OAuth2 client credentials) |
| Legacy/simple | Mutual TLS with pinned certificates + API keys as secondary factor |

### 3. Define Token Scoping Rules
- Assign each service a unique identity (client ID / SPIFFE ID)
- Scopes must follow `resource:action` format (e.g., `orders:read`, `payments:write`)
- Services request only scopes they call — audit against actual traffic if possible
- Never issue wildcard scopes (`*`) in production
- Separate scopes for read vs. write vs. admin operations on every resource

### 4. Design Rotation Policy
Specify for each credential type:
- **Short-lived tokens** (JWT/OAuth2): TTL 5–15 minutes, auto-refresh via background worker
- **mTLS certificates**: 24-hour TTL minimum, rotate via SPIRE or cert-manager, 10% overlap window
- **API keys (if used)**: 90-day max lifetime, automated rotation via secrets manager, zero manual handling
- **Emergency rotation**: Define runbook trigger conditions (breach detected, employee offboarding, anomaly alert)
- Include grace periods for zero-downtime rotation (dual-token acceptance window)

### 5. Define Least-Privilege Access Matrix
Create a service dependency map:
- List every service-to-service call explicitly
- For each call: caller, callee, method/endpoint, required scope
- Deny by default — only whitelist documented calls
- Flag any service with more than 5 unique downstream dependencies for architecture review
- Enforce at the network layer (NetworkPolicy/firewall) AND application layer (token validation)

### 6. Specify Validation Requirements
Every service receiving a token must:
- Validate signature (asymmetric key, public key fetched from JWKS endpoint or pinned)
- Validate `iss`, `aud`, `exp`, `nbf` claims
- Validate that the presented scope covers the requested action
- Reject expired tokens without clock skew tolerance > 30 seconds
- Log all auth failures with caller identity, timestamp, and reason (no token payload in logs)

### 7. Secret Storage Rules
- No credentials in environment variables in plain text — use secrets manager references
- No credentials in container images or source code
- Secrets injected at runtime via sidecar (Vault Agent, CSI driver) or SDK
- Audit log on every secret read

## Output Format

Produce a structured authentication design document with these sections:

**1. Recommended Auth Mechanism** — one paragraph explaining the chosen approach and why it fits the user's stack.

**2. Token & Identity Specification** — table listing each service,
