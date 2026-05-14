---
name: cross-service-contract-test-design
description: >
  Designs consumer-driven contract tests between dependent services, specifying interaction stubs, provider verification steps, and CI integration points. Use when someone says "we need contract tests between services," asks about "consumer-driven contracts," or wants to "verify API compatibility between microservices." Also activates when someone mentions "Pact tests," "service integration testing," or needs to "prevent breaking changes across service boundaries."
category: developer
tags: [contract-testing, microservices, pact, integration-testing, api-compatibility]
author: community
---

# Cross-Service Contract Test Design

This skill generates complete consumer-driven contract test designs including consumer stubs, provider verification logic, and CI pipeline integration when teams need to safely validate interactions between dependent services.

## Contract Test Design Workflow

### 1. Identify the Contract Boundary
- Determine the **consumer** (service making the request) and **provider** (service fulfilling it)
- List every endpoint, message, or event the consumer depends on
- Note the exact fields the consumer uses (not all fields the provider returns — only consumed fields)
- Identify the triggering state required on the provider side (e.g., "a user with ID 123 exists")

### 2. Define Consumer-Side Interactions
For each interaction, specify:
- **Description**: Human-readable name (e.g., "get active user by ID")
- **Provider state**: Precondition string the provider must set up (e.g., `"user 123 is active"`)
- **Request**: Method, path, headers, and body with exact matchers (equality vs. type vs. regex)
- **Response**: Status code, required headers, and body with minimal field set the consumer actually uses
- Use type matchers (`like`, `eachLike`) over exact values to reduce brittleness

### 3. Write Consumer Test Stubs
- Instantiate a Pact mock server (or equivalent: Spring Cloud Contract, Microcks)
- Register each interaction against the mock
- Run the consumer's actual client code against the mock — no hand-written HTTP calls
- Assert the consumer correctly handles the mocked response
- Export the generated pact file to a shared broker or artifact store

### 4. Define Provider Verification Steps
- Load the pact file from the broker
- For each provider state string, implement a state handler that seeds or resets test data
- Run the provider's real server (in-process or deployed to a test environment) against the pact
- Verify every interaction: the provider must accept the recorded request and return a response matching the consumer's expectations
- Fail the build on any unverified interaction

### 5. Specify CI Integration Points

**Consumer pipeline:**
```
test → generate pact → publish pact to broker (tagged with branch/version)
```

**Provider pipeline:**
```
build → fetch pacts from broker (by tag/environment) → run provider verification → publish verification results
```

**Can-I-Deploy gate (both pipelines):**
```
pact-broker can-i-deploy --pacticipant <name> --version <version> --to-environment <env>
```
Block deployment if verification results are missing or failed.

### 6. Versioning and Tagging Rules
- Tag pacts with the consumer's Git branch name during development
- Tag with environment names (`staging`, `production`) only after deployment is confirmed
- Never overwrite a pact version that has been verified against a production provider version
- Use semantic versioning or Git SHAs — never `latest` as a version identifier

### 7. Common Pitfalls to Catch
- Consumer tests that assert fields the consumer never reads (creates false coupling)
- Provider state handlers that share mutable state across tests (causes flakiness)
- Skipping the can-i-deploy check before deploying consumer without matching provider verification
- Using exact value matchers on dynamic fields like timestamps or generated IDs

## Output Format

Produce the following sections in order:

**1. Contract Summary Table**
A markdown table listing: Consumer | Provider | Interaction Name | Provider State | HTTP Method + Path

**2. Consumer Interaction Definitions**
One fenced code block per interaction (JSON or the framework's DSL — Pact JS, Pact JVM, etc.) showing request matchers, response matchers, and provider state string.

**3. Provider State Handlers**
Pseudocode or real code stubs (in the project's
