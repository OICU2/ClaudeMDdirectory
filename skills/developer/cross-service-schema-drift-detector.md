---
name: cross-service-schema-drift-detector
description: >
  Analyzes and compares data schemas across communicating services to detect silent contract violations before they cause runtime failures. Use when someone says "our services are out of sync", asks about schema compatibility between APIs, wants to find breaking changes between producer and consumer contracts, notices unexpected data shape mismatches, or needs to audit inter-service data contracts. Surfaces field-level drift including missing fields, type mismatches, renamed keys, and nullability changes.
category: developer
tags: [schema, api-contracts, microservices, data-validation, compatibility]
author: community
---

# Cross-Service Schema Drift Detector

This skill systematically compares expected and actual data schemas across communicating services to surface silent contract violations before they cause runtime failures.

## Detection Workflow

1. **Identify schema sources** — Locate schema definitions for both producer and consumer sides: OpenAPI/Swagger specs, JSON Schema files, Protobuf/Avro/Thrift definitions, TypeScript interfaces, Pydantic/dataclass models, GraphQL schemas, or database migration files.

2. **Normalize representations** — Convert both schemas to a common field-level structure: `fieldPath → {type, required, nullable, format, constraints}`. Flatten nested objects using dot notation (e.g., `user.address.zip`).

3. **Run drift checks across six categories:**
   - **Missing fields**: Fields present in producer schema but absent in consumer (or vice versa)
   - **Type mismatches**: Same field path but differing primitive types (`string` vs `integer`, `float` vs `decimal`)
   - **Nullability drift**: Field is non-nullable in producer but nullable (or omitted) in consumer
   - **Renamed fields**: Detect probable renames via Levenshtein similarity + type match on orphaned fields
   - **Constraint violations**: Differing `maxLength`, `enum` values, `pattern`, `minimum`/`maximum`
   - **Structural changes**: Array vs object, flattened vs nested representation of same data

4. **Classify severity for each violation:**
   - 🔴 **Breaking**: Consumer will fail to deserialize or throw null-pointer equivalent
   - 🟡 **Degraded**: Consumer silently drops data or uses wrong defaults
   - 🟢 **Advisory**: Additive changes, deprecated fields still present, minor constraint loosening

5. **Trace data flow direction** — Identify whether drift is in the request path, response path, or event/message payload, and which service owns the contract.

6. **Propose remediation** — For each violation, suggest the minimal fix: add field, update type annotation, add migration shim, or update consumer mapping.

## Output Format

Produce a structured drift report with the following sections:

```
## Schema Drift Report: [ServiceA] → [ServiceB]
Compared: [source schema file/version] vs [target schema file/version]
Scan date: [timestamp]

### Summary
- Total violations: N
- 🔴 Breaking: N | 🟡 Degraded: N | 🟢 Advisory: N

### Violations

#### 🔴 [field.path] — Type Mismatch
- Producer: `integer`
- Consumer: `string`
- Impact: Deserialization failure on non-numeric values
- Fix: Update consumer model field `userId` to `int`, or add coercion layer

#### 🟡 [field.path] — Missing in Consumer
- Producer sends: `{ "metadata": { "traceId": string } }`
- Consumer schema: field absent
- Impact: Data silently discarded; tracing broken
- Fix: Add `metadata.traceId?: string` to consumer interface

### Probable Renames
- `user_name` (producer) → `username` (consumer): 94% similarity, same type

### No Drift Detected In
- Authentication headers, pagination fields, error envelope structure
```

Keep each violation entry to 4–6 lines. Flag zero-violation scans explicitly. If schema files are unavailable, list exactly what artifacts are needed and where to find them.
