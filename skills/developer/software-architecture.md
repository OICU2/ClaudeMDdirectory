---
name: software-architecture
description: >
  Designs scalable, maintainable software systems using proven architectural patterns and best practices.
  Use when someone says "design the architecture for", asks about "how should I structure", wants to
  "plan a system that", needs to "architect a solution for", or asks "what pattern should I use for".
category: developer
tags: [architecture, system-design, patterns, scalability, design]
author: community
---

# Software Architecture

Guides you through designing robust software systems by selecting appropriate architectural patterns, defining component boundaries, and producing clear architectural documentation.

## Architecture Design Workflow

1. **Clarify requirements** — Identify functional requirements, non-functional requirements (scale, latency, availability), constraints (team size, budget, existing tech), and future growth expectations before proposing any design.

2. **Identify the problem domain** — Determine if the system is read-heavy, write-heavy, event-driven, real-time, batch-oriented, or a hybrid. This drives pattern selection.

3. **Select architectural style** — Choose the primary pattern based on domain needs:
   - **Monolith**: Small teams, simple domains, early-stage products
   - **Modular Monolith**: Medium complexity, team scaling, clear domain boundaries
   - **Microservices**: Independent scaling needs, multiple teams, mature DevOps
   - **Event-Driven**: Async workflows, high throughput, loose coupling required
   - **CQRS + Event Sourcing**: Complex domains, audit requirements, temporal queries
   - **Layered (N-tier)**: CRUD-heavy apps, clear separation of concerns

4. **Define component boundaries** — Identify the core bounded contexts or services. For each component, specify: responsibility, inputs/outputs, data ownership, and external dependencies.

5. **Design data architecture** — Choose storage per component based on access patterns: relational (consistency), document (flexibility), key-value (speed), graph (relationships), time-series (metrics). Address data consistency strategy (eventual vs strong).

6. **Address cross-cutting concerns** — Explicitly design for: authentication/authorization, logging and observability, error handling and resilience (circuit breakers, retries), caching strategy, API gateway or BFF layer.

7. **Identify risks and trade-offs** — For each major decision, state what is gained and what is sacrificed. Flag operational complexity, single points of failure, and scaling bottlenecks explicitly.

8. **Define integration patterns** — Specify how components communicate: REST, gRPC, message queues (Kafka, RabbitMQ), GraphQL, or webhooks. Justify synchronous vs asynchronous for each boundary.

## Output Format

Produce a structured architecture document with these sections:

**System Overview** — 2–4 sentences describing what the system does and the chosen architectural style with justification.

**Architecture Diagram (ASCII)** — A clear ASCII diagram showing major components, data stores, and communication flows between them.

**Component Breakdown** — A table or list with columns: Component | Responsibility | Technology Recommendation | Data Store.

**Data Architecture** — List each data store, what it holds, and why it was chosen over alternatives.

**Key Design Decisions** — Numbered list of 3–6 decisions in the format: `Decision: [what] → Rationale: [why] → Trade-off: [what you give up]`.

**Cross-Cutting Concerns** — Bullet list covering auth, observability, caching, and resilience patterns chosen.

**Risks & Mitigations** — Table with columns: Risk | Likelihood | Impact | Mitigation.

**Next Steps** — 3–5 concrete implementation milestones in priority order.

Keep the total output comprehensive but scannable. Use headers, tables, and bullets — avoid long prose paragraphs. Tailor depth to system complexity.