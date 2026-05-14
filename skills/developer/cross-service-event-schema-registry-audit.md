---
name: cross-service-event-schema-registry-audit
description: >
  Scans event schemas across microservices to detect version mismatches, undocumented fields,
  and consumers depending on deprecated event structures. Use when someone says "our services
  are out of sync on event schemas," asks about auditing event contracts between services,
  wants to find which consumers rely on deprecated events, needs to validate schema compatibility
  across a distributed system, or is concerned about breaking changes in event payloads.
category: developer
tags: [event-driven, schema-registry, microservices, compatibility, auditing]
author: community
---

# Cross-Service Event Schema Registry Audit

Analyzes event schemas published and consumed across services to surface version mismatches, undocumented fields, and deprecated structure dependencies before they cause runtime failures.

## Audit Workflow

### 1. Discover Schema Sources
- Locate schema registry files: `schema-registry.json`, `asyncapi.yaml`, `avro/`, `protobuf/`, or inline schema definitions in service configs.
- Identify event producer declarations in each service (e.g., `@PublishesEvent`, `emit()`, `produce()`, topic config files).
- Identify event consumer declarations (e.g., `@ConsumesEvent`, `subscribe()`, `@KafkaListener`, queue bindings).

### 2. Extract Schema Versions
- For each event type, collect all versions defined across services.
- Map each version to its producing service and all consuming services.
- Flag any event type with more than one active major version across the system.

### 3. Detect Version Mismatches
- Compare the schema version a producer publishes against the version each consumer expects.
- Flag cases where consumer expects version `N` but producer publishes version `N+1` or higher.
- Flag cases where no producer exists for a version a consumer depends on.

### 4. Identify Undocumented Fields
- For each event schema, diff the declared schema fields against fields actually referenced in consumer code.
- Flag fields present in code but absent from the registered schema (ghost fields).
- Flag fields in the schema never referenced by any consumer (orphaned fields — potential dead weight or documentation gap).

### 5. Audit Deprecated Event Structures
- Locate deprecation markers: `@deprecated`, `x-deprecated`, comments, or changelog entries.
- For each deprecated event type or field, list all services still consuming it.
- Assign a severity based on consumer count and whether a migration path exists.

### 6. Compatibility Check
- Apply backward-compatibility rules: new required fields without defaults = breaking. Removed fields = breaking. Type changes = breaking.
- Flag any schema evolution between versions that violates compatibility guarantees.

## Output Format

Produce a structured audit report with these sections:

```
## Event Schema Audit Report

### Summary
- Total event types scanned: N
- Services audited: [list]
- Critical issues: N | Warnings: N | Info: N

### Version Mismatches
| Event Type | Producer Version | Consumer | Expected Version | Severity |
|------------|-----------------|----------|-----------------|----------|
| OrderPlaced | v3 | payment-service | v2 | CRITICAL |

### Undocumented / Ghost Fields
| Event Type | Field | Found In | Schema Status |
|------------|-------|----------|---------------|
| UserSignedUp | metadata.legacyId | auth-consumer | NOT IN SCHEMA |

### Deprecated Structure Consumers
| Deprecated Event/Field | Consuming Services | Migration Path Available |
|------------------------|-------------------|--------------------------|
| PaymentProcessed.v1 | reporting-service, audit-service | Yes → v2 |

### Compatibility Violations
| Event Type | From Version | To Version | Violation | Impact |
|------------|-------------|------------|-----------|--------|
| InventoryUpdated | v1 → v2 | Added required field `warehouseId` (no default) | Breaking |

### Recommended Actions
1. [Highest severity fix with specific service and event type]
2. [Next action...]
```

- Flag `CRITICAL` for active consumers on deprecated or mismatched schemas with no migration path.
- Flag `WARNING` for undocumented fields or deprecations with a migration path available.
- Flag `INFO` for orphaned schema fields with no current consumers.
- Keep each table row to one line;
