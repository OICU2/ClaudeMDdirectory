---
name: async-event-schema-versioning-plan
description: >
  Designs a comprehensive versioning strategy for asynchronous event schemas across message brokers, event buses, and streaming platforms. Use when someone asks about event schema evolution, wants to version Kafka or SNS messages, needs to handle breaking changes in async events, is planning a schema registry strategy, or wants to define producer/consumer compatibility rules for distributed systems.
category: developer
tags: [event-driven, schema-versioning, async-messaging, kafka, compatibility]
author: community
---

# Async Event Schema Versioning Plan

This skill produces a concrete versioning strategy for asynchronous event schemas, covering compatibility rules, deprecation timelines, and migration paths for producers and consumers.

## Versioning Strategy Workflow

### 1. Audit Current State
- Identify all event types, current schema versions, and which producers/consumers own them
- Determine the message broker/transport (Kafka, RabbitMQ, SNS/SQS, EventBridge, etc.)
- Note whether a schema registry exists (Confluent, AWS Glue, Apicurio, etc.)
- Catalog any existing versioning conventions (field in payload, topic name suffix, header)

### 2. Define the Versioning Scheme
- Choose a version carrier: envelope field (`schemaVersion`), message header, topic/queue name suffix (`orders.v2`), or schema registry subject
- Adopt Semantic Versioning adapted for events:
  - **MAJOR**: breaking changes (field removal, type change, renamed required field)
  - **MINOR**: additive changes (new optional field, new enum value)
  - **PATCH**: non-structural fixes (description update, constraint tightening that is backward-safe)
- Document the version format: `major.minor` is usually sufficient for events; include patch only if schema registry requires it

### 3. Define Compatibility Rules

**Producer rules:**
- Never remove or rename a field without a major version bump and a deprecation window
- New required fields must provide a default or be backfilled; prefer making them optional
- Produce the current major version; optionally dual-publish during migration windows
- Stamp every message with `schemaVersion`, `eventType`, and `producedAt`

**Consumer rules:**
- Consumers must ignore unknown fields (tolerant reader pattern)
- Consumers must not fail on new optional fields or new enum values
- Consumers must declare the minimum schema version they support
- Consumers must subscribe to a specific major version topic/subject, not a wildcard

### 4. Set Compatibility Mode (if using a schema registry)
- **BACKWARD**: new schema can read data written by old schema (default recommendation)
- **FORWARD**: old schema can read data written by new schema
- **FULL**: both directions (safest, most restrictive)
- **NONE**: no enforcement (avoid unless prototyping)
- Apply `FULL` or `BACKWARD_TRANSITIVE` for high-stakes domains; `BACKWARD` for most cases

### 5. Define Deprecation Timelines
- Announce deprecation via schema registry metadata, changelog, and internal comms
- Minimum deprecation window: 2 sprints for internal consumers; 30–90 days for external
- Mark deprecated fields with a `x-deprecated-since` annotation or equivalent
- Set a hard sunset date; after that date, producers may stop emitting the field/version
- Track active consumer versions via consumer group lag metrics or schema registry usage stats

### 6. Plan Migration Paths

**For minor/additive changes:**
- Deploy producer change → consumers auto-adapt (tolerant reader)
- No coordinated rollout required

**For major/breaking changes:**
- Option A — Parallel topics: Produce to both `events.v1` and `events.v2` during window; migrate consumers; retire v1
- Option B — Version field routing: Single topic, consumers filter by `schemaVersion`; acceptable only for low-volume scenarios
- Option C — Event upcasting: Consumer-side transformer upgrades v1 → v2 at read time; useful when topic migration is impractical
- Define rollback criteria: if >X% of consumers fail to migrate before sunset date, extend window

### 7. Governance and Tooling
- Require schema changes to go through a PR review process with a compatibility check step in CI
- Use `schema-registry-cli`, `avro-tools`, or Confluent's
