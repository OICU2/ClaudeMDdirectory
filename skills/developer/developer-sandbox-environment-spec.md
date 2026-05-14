---
name: developer-sandbox-environment-spec
description: >
  Produces a complete specification for a self-contained local sandbox environment, covering required services, data seeding, and reset procedures. Use when someone says "I need a local dev environment," asks about "setting up a sandbox," wants to "isolate development from production," needs a "safe place to test changes," or is trying to "create a reproducible local setup."
category: developer
tags: [sandbox, local-development, environment-setup, docker, devops]
author: community
---

# Developer Sandbox Environment Specification

This skill generates a structured sandbox environment spec that defines all services, seeding strategies, and reset procedures needed for safe, reproducible local development.

## Workflow

1. **Identify the application stack** — Determine the language runtime, frameworks, and any known dependencies from context. Ask if unclear.

2. **Define required services** — List every service the application needs locally (database, cache, message queue, object storage, auth provider, third-party API mocks). For each service specify:
   - Docker image and pinned version
   - Exposed ports and environment variables
   - Health check command
   - Persistence strategy (volume mount vs. ephemeral)

3. **Define the data seeding strategy** — Specify:
   - Seed data sources (fixtures, factories, anonymized production snapshots)
   - Seed execution order respecting foreign key / dependency constraints
   - Idempotency rule: seeds must be safe to run multiple times
   - Realistic volume targets (e.g., 100 users, 1 000 orders) for meaningful local testing

4. **Define reset procedures** — Provide explicit steps for three reset levels:
   - **Soft reset**: clear application state, re-run seeds, keep service containers running
   - **Hard reset**: tear down and recreate all containers, re-apply seeds from scratch
   - **Partial reset**: reset a single service without affecting others (e.g., flush only the cache)

5. **Define environment isolation rules** — Specify:
   - Network namespace (all services on a named Docker network, no host network)
   - Secret management (`.env.local` file, never committed; provide `.env.example`)
   - Port conflict avoidance strategy (offset from production ports, e.g., 5433 instead of 5432)

6. **Define the developer startup contract** — Single command to bring the full sandbox up (`make dev` or `docker compose up`), including pre-flight checks and expected ready state.

7. **Flag production safety guardrails** — Call out explicit guards that prevent sandbox config from reaching production (environment variable checks, separate Docker Compose files, CI environment detection).

## Output Format

Produce a single Markdown document with the following sections in order:

```
# Sandbox Environment Specification: [Project Name]

## Overview
One-paragraph summary of what this sandbox includes and what it is safe for.

## Services
Table with columns: Service | Image:Tag | Local Port | Env Vars | Persistence | Health Check

## Data Seeding Strategy
- Seed source and format
- Execution order (numbered list)
- Idempotency guarantee
- Target data volumes

## Reset Procedures
### Soft Reset
Command + explanation

### Hard Reset
Command + explanation

### Partial Reset
Per-service commands

## Environment Isolation
- Network config
- Secret management
- Port mapping rationale

## Startup Contract
Single command, pre-flight checks, expected ready output

## Production Safety Guardrails
Bulleted list of explicit guards
```

Length: 400–700 words. Use tables and code blocks where they add clarity. All commands must be copy-pasteable and tested against the specified stack.
