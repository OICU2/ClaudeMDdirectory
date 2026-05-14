---
name: api-response-schema-validation
category: developer
description: >
  Generates runtime validation logic to enforce expected API response shapes and flag contract violations as they occur. Use when someone says their API responses are unpredictable, asks about validating API contracts, wants to catch schema drift at runtime, needs to guard against unexpected payload structures, or is debugging integration failures caused by malformed responses.
tags: [api, validation, schema, runtime, typescript]
author: community
---

# API Response Schema Validation

Generates complete runtime validation logic for API response payloads, enforcing expected shapes and surfacing contract violations immediately when responses are received.

## Validation Workflow

1. **Identify the target schema** — Extract field names, types, nullability, and nesting from the user's API docs, sample responses, or TypeScript interfaces provided in context.

2. **Choose the validation approach** — Default to Zod for TypeScript projects. Fall back to plain TypeScript type guards if the project has no schema library. Use Joi if it is already present in `package.json`.

3. **Define the schema** — Write an explicit schema covering:
   - All required top-level fields with their exact types
   - Nested objects and arrays with their own schemas
   - Optional and nullable fields marked precisely (`.optional()`, `.nullable()`)
   - Enum fields using `.enum()` or `z.union()` rather than `z.string()`

4. **Write the validator function** — Wrap schema parsing in a typed function that:
   - Accepts `unknown` as input (never a pre-typed value)
   - Returns a discriminated union `{ success: true; data: T } | { success: false; errors: ValidationError[] }`
   - Extracts structured error paths and messages on failure

5. **Add contract violation reporting** — On parse failure, log or throw with:
   - The field path that violated the contract (e.g., `response.user.id`)
   - The expected type and the received value (truncated to 100 chars)
   - The originating endpoint or request identifier

6. **Integrate at the fetch boundary** — Insert the validator immediately after `await response.json()` or equivalent, before the data touches any business logic.

7. **Write a test suite** — Provide at least three test cases:
   - A fully valid response that passes
   - A response missing a required field
   - A response with a type mismatch on a critical field

## Output Format

Produce the following in order, each in its own labeled code block:

1. **Schema definition** — The Zod (or chosen library) schema constant, fully typed, exported.
2. **Validator function** — The typed parse function returning the discriminated union result.
3. **Integration snippet** — A 10–20 line example showing the validator called inside a real fetch/axios handler, with error handling that logs the violation and rethrows or returns a fallback.
4. **Test cases** — A `describe` block using Vitest or Jest with the three required cases plus any edge cases relevant to the provided schema.

Each block must be self-contained and runnable without modification beyond importing project-specific types.
