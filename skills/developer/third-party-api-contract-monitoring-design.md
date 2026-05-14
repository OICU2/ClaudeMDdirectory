---
name: third-party-api-contract-monitoring-design
description: >
  Designs automated contract testing and alert workflows to detect when upstream third-party API responses change unexpectedly and break integrations. Use when someone says their third-party API integration broke without warning, asks about monitoring external APIs for changes, wants to detect upstream API drift before it causes incidents, needs a strategy for validating vendor API contracts, or is worried about silent breaking changes from external services.
category: developer
tags: [api-monitoring, contract-testing, third-party-integrations, alerting, reliability]
author: community
---

# Third-Party API Contract Monitoring Design

This skill designs a complete contract monitoring system — including snapshot tests, schema validators, alert pipelines, and runbooks — to catch unexpected changes in third-party API responses before they break production integrations.

## Contract Monitoring Design Workflow

### 1. Inventory and Classify Integrations
- List every third-party API endpoint the system consumes
- Classify each by criticality: **critical** (payment, auth, core data), **important** (enrichment, notifications), **optional** (analytics, nice-to-have)
- Identify the specific fields your code actually uses vs. fields returned but ignored
- Note current authentication method, rate limits, and SLA terms per vendor

### 2. Define Contract Boundaries
For each endpoint, specify:
- **Required fields**: fields whose absence breaks functionality
- **Type contracts**: expected type for each field (string, int, ISO date, enum values)
- **Value constraints**: nullable vs. non-null, min/max values, regex patterns (e.g., currency codes)
- **Structural constraints**: required nested objects, array vs. object, pagination shape
- **Behavioral contracts**: expected HTTP status codes, error response shape, redirect behavior

### 3. Design Contract Test Suite
Write contract tests at three layers:

**Schema Validation Tests** (run on every response in CI and staging)
- Use JSON Schema, Zod, Pydantic, or equivalent to validate response structure
- Assert required fields are present and correctly typed
- Assert enum fields only contain known values
- Flag unexpected new fields as warnings (not failures) — they may be additive

**Snapshot / Golden File Tests** (run in a dedicated contract test suite)
- Store sanitized example responses as golden files in version control
- Diff new responses against golden files on a schedule (e.g., nightly)
- Flag structural diffs for review; automatically fail on field removal or type change

**Behavioral Probe Tests** (run as synthetic monitoring)
- Make real or sandbox calls to the third-party API on a cron schedule
- Validate response against contract; do not rely on mocked data here
- Use read-only, non-destructive endpoints where possible; use sandbox environments otherwise

### 4. Instrument Production Traffic
- Add response interceptors or middleware to log a sample of real third-party responses (5–10%)
- Run schema validation against sampled responses asynchronously (do not block the request path)
- Emit structured log events or metrics on validation failures with fields: `vendor`, `endpoint`, `field`, `violation_type`, `expected`, `actual`
- Track a `contract_violation_rate` metric per vendor/endpoint in your observability platform

### 5. Design the Alert Workflow
Define alert tiers based on criticality:

| Tier | Trigger | Audience | Response Time |
|------|---------|----------|---------------|
| P1 | Required field missing or type changed on critical endpoint | On-call engineer + team lead | 15 minutes |
| P2 | Required field missing on important endpoint | On-call engineer | 1 hour |
| P3 | New unknown fields or soft schema drift | Async Slack channel | Next business day |
| Info | Contract violation rate crosses 0.1% threshold | Slack digest | Awareness only |

Alert rules:
- P1/P2 alerts must fire after **2 consecutive failures** to suppress transient errors
- Include in every alert: vendor name, endpoint, field name, expected vs. actual value, sample request ID, link to runbook
- Route P1 alerts to PagerDuty or equivalent; P2/P3 to Slack
- Suppress duplicate alerts for the same violation within a 30-minute window

### 6. Build the Runbook
For each vendor, document:
- How to verify whether the change is a bug or an intentional vendor update
- Where to find the
