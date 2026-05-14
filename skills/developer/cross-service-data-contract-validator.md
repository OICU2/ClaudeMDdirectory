---
name: cross-service-data-contract-validator
description: >
  Analyzes data contracts between microservices to identify schema mismatches, missing fields, and type inconsistencies before deployment. Use when someone says "check my service contracts," asks about API compatibility between services, wants to validate data schemas across microservices, needs to find breaking changes between producer and consumer contracts, or is debugging integration failures between services.
category: developer
tags: [microservices, data-contracts, schema-validation, api-compatibility, integration]
author: community
---

# Cross-Service Data Contract Validator

This skill audits data contracts between microservices to surface schema mismatches, type conflicts, missing fields, and breaking changes before they cause runtime failures.

## Validation Workflow

1. **Collect contract definitions** — Request the producer schema (API response, event payload, or message format) and the consumer schema (expected input shape). Accept JSON Schema, OpenAPI, Protobuf, Avro, TypeScript interfaces, or raw JSON examples.

2. **Identify field-level mismatches** — Compare each field across producer and consumer:
   - Fields present in producer but missing in consumer (potential silent data loss)
   - Fields required by consumer but absent in producer (breaking dependency)
   - Type conflicts (e.g., producer sends `string`, consumer expects `number`)
   - Nullable vs. non-nullable mismatches
   - Enum value divergence (producer adds or removes values consumer depends on)

3. **Classify change severity** — Assign each issue a severity level:
   - **BREAKING**: Consumer will fail at runtime (missing required field, type mismatch on used field)
   - **WARNING**: Potential data loss or unexpected behavior (extra fields ignored, nullable mismatch)
   - **INFO**: Cosmetic or additive differences with no immediate risk

4. **Check versioning and backward compatibility** — If version numbers are present, flag whether changes violate semantic versioning rules. Additive changes to a producer are generally safe; removals and type changes are breaking.

5. **Trace impact across service boundaries** — If more than two services are provided, map which downstream consumers are affected by each producer change.

6. **Suggest remediation** — For each BREAKING or WARNING issue, provide a concrete fix: update the producer schema, add a transformation layer, make a field optional, or introduce a new contract version.

## Output Format

Produce a structured validation report with these sections:

```
## Contract Validation Report

**Producer:** [service name + schema version]
**Consumer:** [service name + schema version]
**Validated:** [timestamp or "now"]

---

### Summary
- 🔴 Breaking Issues: [count]
- 🟡 Warnings: [count]
- 🔵 Info: [count]

---

### Breaking Issues
| Field | Producer Type | Consumer Type | Impact |
|-------|--------------|---------------|--------|
| [field path] | [type/absent] | [type/required] | [runtime failure description] |

### Warnings
| Field | Issue | Risk |
|-------|-------|------|
| [field path] | [description] | [data loss / unexpected behavior] |

### Info
- [Non-critical observation]

---

### Remediation Steps
1. **[Issue]** — [Specific fix with code snippet or schema change if applicable]

---

### Compatibility Verdict
[COMPATIBLE / INCOMPATIBLE / COMPATIBLE WITH WARNINGS] — [one sentence rationale]
```

Keep each remediation step actionable with exact field names and proposed schema changes. If schemas are large, focus the report on fields that are actively used rather than enumerating every unused field.
