---
name: api-endpoint-response-contract-generator
category: developer
description: >
  Generates fully typed response contracts for API endpoints by analyzing existing handler logic,
  database schemas, and return paths. Use when someone says "generate a response contract for this
  endpoint", asks about "what shape does this API return", wants to "define the response type for
  my handler", needs to "document what my API endpoint returns", or is trying to "create a typed
  interface for an API response".
tags: [api, typescript, contracts, types, openapi]
author: community
---

# API Endpoint Response Contract Generator

This skill analyzes API handler logic and database schemas to produce accurate, fully typed response contracts — use it whenever an endpoint's return shape needs to be formalized as a TypeScript interface, Zod schema, or OpenAPI component.

## Workflow

1. **Collect inputs** — Ask for or locate: the handler function, any ORM queries or raw SQL inside it, and the database schema (table definitions or model files) for referenced tables.

2. **Trace all return paths** — Walk every `return`, `res.json()`, `res.send()`, or `throw` in the handler. List each distinct shape returned, including error responses.

3. **Resolve nested shapes** — For each database query, map selected columns to their SQL/ORM types. Expand joins, relations, and computed fields into nested objects.

4. **Normalize to a canonical shape** — Identify the primary success response. Flag optional fields (nullable columns, conditional keys). Note pagination wrappers (`data`, `meta`, `total`) if present.

5. **Infer types precisely** — Map database types to target language types:
   - `VARCHAR`, `TEXT` → `string`
   - `INT`, `BIGINT`, `DECIMAL` → `number`
   - `BOOLEAN` → `boolean`
   - `TIMESTAMP`, `DATE` → `string` (ISO 8601) or `Date`
   - `JSON`, `JSONB` → typed sub-interface or `Record<string, unknown>`
   - Nullable columns → `T | null`

6. **Generate all output artifacts** — Produce TypeScript interface, Zod schema, and OpenAPI YAML component in one pass.

7. **Flag ambiguities** — Explicitly call out any fields where the type cannot be determined from the available context (e.g., dynamically assembled objects, raw `any` returns, unresolved conditionals).

## Output Format

Produce three clearly labeled sections:

**Section 1 — TypeScript Interface**
```typescript
// Inline JSDoc for each field describing source column or logic
export interface [EndpointName]Response {
  // all fields with precise types
}

export interface [EndpointName]ErrorResponse {
  // error shape
}
```

**Section 2 — Zod Schema**
```typescript
import { z } from 'zod';

export const [endpointName]ResponseSchema = z.object({
  // mirroring the TypeScript interface with appropriate Zod validators
});
```

**Section 3 — OpenAPI 3.1 Component**
```yaml
components:
  schemas:
    [EndpointName]Response:
      type: object
      required: [list required fields]
      properties:
        # each field with type, format, nullable, and description
```

**Section 4 — Summary Table**

| Field | Type | Nullable | Source | Notes |
|-------|------|----------|--------|-------|
| ...   | ...  | ...      | ...    | ...   |

Length: as long as needed to cover all return paths — do not truncate fields. If ambiguities exist, append a **Flagged Ambiguities** list after the summary table.
