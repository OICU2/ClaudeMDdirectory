---
name: graphql-schema-design
category: developer
description: >
  Designs and generates complete GraphQL schemas including types, queries, mutations, subscriptions, and resolver stubs from data model requirements. Use when someone says "design a GraphQL schema", asks about "GraphQL types and resolvers", wants to "model data in GraphQL", needs to "build a GraphQL API", or describes an application domain and wants an API layer.
tags: [graphql, api-design, schema, resolvers, typescript]
author: community
---

# GraphQL Schema Design

Generates production-ready GraphQL schemas with types, queries, mutations, and resolver stubs when given a data model or application domain description.

## Schema Design Workflow

1. **Extract the domain model** — Identify all entities, relationships (one-to-one, one-to-many, many-to-many), and key attributes from the requirements. Ask clarifying questions only if entity relationships are ambiguous.

2. **Define scalar and enum types first** — Declare custom scalars (e.g., `DateTime`, `JSON`, `UUID`) and enums before object types to avoid forward-reference confusion.

3. **Design object types** — For each entity:
   - Use non-null (`!`) on fields that are always present (IDs, required attributes)
   - Use nullable on optional or lazy-loaded fields
   - Add `id: ID!` to every root entity type
   - Model relationships as nested types, not foreign key IDs, unless the use case demands IDs explicitly

4. **Design input types** — Create separate `CreateXInput` and `UpdateXInput` types for every mutable entity. `UpdateXInput` fields should be nullable to support partial updates.

5. **Define the Query type** — Include:
   - Single-item fetch: `item(id: ID!): Type`
   - List fetch with pagination: `items(limit: Int, offset: Int, filter: FilterInput): ItemConnection!`
   - Use the Relay `Connection` pattern (`edges`, `node`, `pageInfo`) for any list that may grow large

6. **Define the Mutation type** — Include `create`, `update`, and `delete` mutations for each entity. Return the mutated object (not a boolean) so clients can update their cache.

7. **Define Subscriptions** — Add subscriptions only when real-time requirements are stated. Pattern: `onEntityCreated`, `onEntityUpdated`, `onEntityDeleted`.

8. **Write resolver stubs** — Provide TypeScript resolver signatures using a standard context interface. Annotate each resolver with a one-line comment describing its data-fetching strategy (DB query, REST call, cache lookup).

9. **Flag design decisions** — After the schema, list any assumptions made (e.g., auth handled via context, pagination strategy chosen) and alternative approaches the developer should consider.

## Output Format

Produce the following sections in order:

**1. Schema Definition Language (SDL)**
- Complete `.graphql` file content in a single fenced code block tagged `graphql`
- Organized top-to-bottom: scalars → enums → interfaces → object types → input types → Query → Mutation → Subscription

**2. TypeScript Resolver Stubs**
- Fenced code block tagged `typescript`
- One resolver object per entity, typed with a shared `Context` interface
- Stub bodies contain a `// TODO:` comment and the data-fetching strategy

**3. Design Notes**
- Bullet list of assumptions made
- Bullet list of alternative design choices (e.g., cursor vs. offset pagination, union types vs. interfaces)
- Any schema directives recommended (e.g., `@deprecated`, `@auth`, `@cacheControl`)

Total output length: match complexity to the domain — a simple 2-entity model should be ~60–100 lines of SDL; a complex 6+ entity model may exceed 200 lines. Never truncate the schema.
