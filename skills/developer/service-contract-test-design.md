---
name: service-contract-test-design
description: >
  Designs consumer-driven contract tests between a service and its dependents to catch breaking API changes before deployment. Use when someone says "we keep breaking downstream services," asks about contract testing or Pact, or wants to verify API compatibility between services. Also triggers when someone needs to prevent integration failures or coordinate API changes across teams.
category: developer
tags: [testing, api, contract-testing, pact, integration]
author: community
---

# Service Contract Test Design

This skill designs consumer-driven contract tests that define what each consumer expects from a provider API, enabling both sides to verify compatibility independently without running full integration environments.

## Contract Test Design Workflow

### 1. Map the Consumer-Provider Relationships
- Identify all consumers (clients) of the target service
- For each consumer, list the specific endpoints, fields, and response shapes it actually uses
- Ignore fields the consumer does not read — contracts cover consumption, not full API surface
- Note the HTTP methods, status codes, headers, and authentication each consumer depends on

### 2. Define Consumer Contracts
For each consumer-provider pair, specify:
- **Request shape**: method, path, required headers, query params, request body schema
- **Response shape**: status code, required response fields and their types (use flexible matchers, not literal values)
- **Interaction name**: human-readable description (e.g., `"GET /orders/{id} returns order for valid ID"`)
- **Provider states**: preconditions the provider must set up before running the interaction (e.g., `"an order with ID 123 exists"`)

### 3. Write the Contract Tests
- Use Pact (preferred) or a compatible CDC framework for the consumer's language
- Consumer test: mock the provider using the defined interaction, run consumer code against it, generate a pact file
- Provider verification test: load the pact file, set up provider states via a state handler endpoint, replay each interaction against the real provider
- Store pact files in a Pact Broker or shared artifact store

### 4. Define Provider State Handlers
- For each provider state string, implement a handler that seeds or resets data (e.g., insert a test order into the DB)
- Keep state handlers isolated and idempotent
- Document which team owns each handler

### 5. Integrate into CI/CD
- Consumer pipeline: run consumer tests → publish pact to broker → block merge on failure
- Provider pipeline: fetch latest pacts from broker → run verification → publish verification results → block deploy on failure
- Use can-i-deploy check before any production deployment

### 6. Version and Evolve Contracts
- Tag pacts with environment labels (dev, staging, production)
- When a provider wants to remove or change a field, check existing consumer pacts first
- Add new fields freely; removing or renaming fields requires consumer pact updates first

## Output Format

Produce the following artifacts for each consumer-provider pair:

**1. Contract Inventory Table**
| Consumer | Provider | Endpoint | Method | Required Response Fields | Provider State |
|---|---|---|---|---|---|

**2. Consumer Test Stub** (code snippet in the consumer's language)
- Framework setup, interaction definition with matchers, assertion that consumer code handles the response

**3. Provider Verification Config** (code snippet)
- State handler stubs with TODO placeholders, pact source configuration, provider URL setup

**4. CI Integration Steps**
- Numbered pipeline steps for both consumer and provider pipelines, including broker publish and can-i-deploy commands

**5. Breaking Change Risk List**
- Bullet list of fields or behaviors that would break existing consumers if changed, with recommended migration approach for each

Keep code snippets concise but complete enough to run. Use realistic but anonymized example data in interaction definitions.
