---
name: infrastructure-planning
description: >
  Plans the technical and physical infrastructure required to support business growth and operational demands. Use when someone says "we need to scale our infrastructure," asks about "what systems do we need to support X users," or wants to "plan our tech stack for growth," "assess our infrastructure capacity," or "prepare for rapid scaling." Produces structured infrastructure roadmaps with concrete resource requirements, timelines, and cost estimates.
category: operations
tags: [infrastructure, scaling, capacity-planning, architecture, operations]
author: community
---

# Infrastructure Planning Skill

This skill analyzes business requirements and produces actionable infrastructure plans covering compute, storage, networking, tooling, and team capacity to support defined growth targets.

## Planning Workflow

### 1. Establish Baseline and Growth Targets
- Identify current infrastructure state: compute, storage, networking, services, headcount
- Define the planning horizon (6 months, 1 year, 3 years)
- Capture growth targets: user count, transaction volume, data volume, team size, geographic expansion
- Note any hard constraints: budget ceiling, regulatory requirements, existing vendor contracts, compliance mandates

### 2. Identify Infrastructure Domains
Assess each domain against growth targets:

**Compute**
- Server/cloud instance requirements (CPU, RAM, GPU if applicable)
- Containerization and orchestration needs (Kubernetes, ECS, etc.)
- Auto-scaling policies and peak load estimates

**Storage and Data**
- Database scaling strategy (vertical vs. horizontal, sharding, read replicas)
- Object storage, block storage, and backup requirements
- Data retention policies and archival costs

**Networking**
- Bandwidth requirements and CDN strategy
- Load balancing and traffic routing
- VPN, private networking, and latency targets for distributed teams or regions

**Security and Compliance**
- Identity and access management (IAM) structure
- Audit logging, encryption at rest and in transit
- Compliance frameworks (SOC 2, HIPAA, GDPR) and tooling required

**Developer and Operational Tooling**
- CI/CD pipeline capacity and tooling (GitHub Actions, Jenkins, etc.)
- Monitoring, alerting, and observability stack (Datadog, Grafana, PagerDuty)
- Incident response and on-call infrastructure

**Team and Headcount**
- Engineering roles needed (DevOps, SRE, DBA, security)
- Hiring timeline aligned to infrastructure milestones

### 3. Gap Analysis
- Compare current state against projected requirements at each growth milestone
- Flag single points of failure, bottlenecks, and under-provisioned systems
- Identify tooling gaps and manual processes that break at scale

### 4. Prioritize and Sequence
- Categorize items as: Critical (blocks growth), Important (degrades performance), Nice-to-have
- Sequence work by dependency order and risk
- Group into phases aligned to the planning horizon

### 5. Estimate Costs and Resources
- Provide rough cost ranges for each infrastructure component (cloud costs, licensing, headcount)
- Identify build vs. buy decisions with tradeoff summary
- Flag items requiring procurement lead time or long contract cycles

## Output Format

Produce a structured infrastructure plan with the following sections:

**Executive Summary** (3–5 bullets)
- Current state snapshot
- Key risks if no action is taken
- Top 3 recommended priorities

**Infrastructure Requirements Table**
| Domain | Current State | 6-Month Need | 12-Month Need | Gap | Priority |
|--------|--------------|--------------|---------------|-----|----------|

**Phased Roadmap**
- Phase 1 / Phase 2 / Phase 3 with: objectives, specific actions, owners (role-level), estimated cost range, and success criteria

**Risk Register**
- List of 3–6 risks with: description, likelihood (High/Med/Low), impact (High/Med/Low), and mitigation action

**Build vs. Buy Decisions**
- Table of major tooling/platform decisions with recommendation and rationale

**Headcount Plan**
- Roles to hire, suggested hire timing, and dependency on infrastructure milestones

Total length: 600–1200 words depending on complexity. Use tables and bullet lists throughout. Avoid prose-heavy paragraphs. Every recommendation must be tied to a specific growth target or risk.