---
name: data-flow-diagram-generation
description: >
  Traces how data moves through application layers, services, and storage systems to produce an annotated data flow diagram for documentation or security review. Use when someone says "show me how data flows", asks about "data movement between services", wants to "map out data pipelines", needs a "DFD for security review", or requests "trace where my data goes". Produces structured diagrams with annotated entry points, transformations, storage, and exit paths.
category: developer
tags: [data-flow, architecture, security, documentation, diagrams]
author: community
---

# Data Flow Diagram Generation

This skill analyzes application architecture, code, or described systems to produce annotated data flow diagrams (DFDs) suitable for documentation, onboarding, or security/threat modeling reviews.

## Workflow

1. **Gather inputs** — Ask for or inspect: codebase structure, API definitions, service configs, database schemas, and any existing architecture docs. If none are provided, prompt the user to describe the system's major components.

2. **Identify external entities** — List all data sources and sinks: users, third-party APIs, IoT devices, external databases, file systems, and message queues.

3. **Map processes** — Identify every transformation point: API endpoints, microservices, background workers, ETL jobs, auth layers, and caching layers. Note what data each process receives, modifies, and emits.

4. **Identify data stores** — Catalog all persistence layers: relational DBs, NoSQL stores, object storage, caches (Redis, Memcached), logs, and secrets managers.

5. **Trace data flows** — Connect entities → processes → stores with directed arrows. Label each arrow with: data type (PII, credentials, event payload, etc.), transport protocol (HTTPS, gRPC, AMQP), and any encryption or transformation applied.

6. **Annotate trust boundaries** — Draw explicit trust boundary lines around internal vs. external zones, DMZ, and privileged subsystems. Flag flows that cross boundaries.

7. **Flag security-relevant points** — Mark: unencrypted flows, PII exposure points, external-facing inputs without validation, and storage of sensitive data.

8. **Render the diagram** — Produce a Mermaid `graph LR` or `flowchart LR` diagram. If Mermaid is not suitable, produce a structured ASCII diagram. Include a legend.

## Output Format

Produce the following sections in order:

### Component Inventory
A markdown table with columns: `Component`, `Type` (Entity/Process/Store), `Description`, `Sensitive Data Handled (Y/N)`.

### Data Flow Diagram
A fenced Mermaid code block (`flowchart LR`) with:
- Nodes labeled by component name and type (e.g., `UserBrowser[User Browser\nExternal Entity]`)
- Directed edges labeled with data type + protocol (e.g., `-- PII via HTTPS -->`)
- Subgraphs for trust boundaries (e.g., `subgraph Internal Network`)
- Security annotations using `:::highlight` or comments for flagged flows

### Flow Annotations Table
A markdown table with columns: `Flow ID`, `From`, `To`, `Data Type`, `Protocol`, `Encrypted`, `Notes/Risk`.

### Security Observations
A bulleted list of findings: unencrypted channels, PII crossing trust boundaries, missing validation points, over-privileged data access, or sensitive data in logs.

### Diagram Legend
Short legend explaining node shapes, edge styles, and trust boundary notation used.

Keep the diagram readable — if the system has more than 15 nodes, offer to produce separate sub-diagrams per service domain.
