---
name: load-testing-scenario-design
category: developer
description: >
  Designs realistic load testing scenarios with traffic ramp-up profiles, endpoint weighting,
  and threshold assertions to validate system performance under expected peak load. Use when
  someone asks about load testing their API, wants to simulate production traffic, needs to
  define performance benchmarks, is preparing for a product launch stress test, or wants to
  validate system behavior under concurrent users.
tags: [load-testing, performance, k6, locust, jmeter]
author: community
---

# Load Testing Scenario Design

Generates complete, realistic load testing scenarios including traffic profiles, weighted endpoint distributions, ramp-up stages, and pass/fail threshold assertions based on the target system's characteristics.

## Scenario Design Workflow

### 1. Gather System Context
Before generating a scenario, identify or ask for:
- **Peak load estimate**: Expected concurrent users or requests per second at peak
- **Traffic distribution**: Which endpoints are hit most (login, search, checkout, etc.)
- **SLA targets**: Acceptable p95/p99 latency, error rate ceiling, throughput floor
- **Test duration**: How long the test should run at peak
- **Environment**: Whether this targets staging or production-mirrored infra

### 2. Define Traffic Profile Stages
Structure the load in four phases:
- **Warm-up** (10–15% of test duration): Ramp from 0 to 25% of peak load — catches cold-start issues
- **Ramp-up** (20–25% of test duration): Increase linearly from 25% to 100% of peak load
- **Sustained peak** (40–50% of test duration): Hold at 100% peak — validates steady-state behavior
- **Ramp-down** (15–20% of test duration): Decrease to 0 — validates graceful degradation

Default to a 30-minute total duration if none is specified.

### 3. Weight Endpoints Realistically
Apply traffic weights that reflect real user behavior patterns:
- Use an 80/20 rule as a baseline: ~80% of traffic hits ~20% of endpoints
- Assign read operations significantly higher weight than writes (typical ratio: 70% reads, 20% writes, 10% auth/misc)
- Model think time between requests (default: 1–3 second random pause) to simulate real users
- Include session flows where relevant (login → browse → action → logout)

### 4. Define Threshold Assertions
Include explicit pass/fail thresholds for:
- **Error rate**: Fail if HTTP error rate exceeds 1% (adjust based on SLA)
- **p95 response time**: Fail if 95th percentile exceeds target (default: 500ms for APIs, 2s for page loads)
- **p99 response time**: Fail if 99th percentile exceeds 2× the p95 target
- **Throughput floor**: Fail if actual RPS drops more than 10% below target RPS during sustained peak
- **Availability**: Fail if any critical endpoint returns errors for >3 consecutive seconds

### 5. Select and Generate Tool-Specific Script
Default to **k6** unless the user specifies otherwise. Also support Locust (Python) and JMeter (XML).

For k6:
- Use `stages` array in `options` for the ramp profile
- Define `thresholds` in `options` using k6 threshold syntax
- Wrap weighted endpoint selection in a `switch` or weighted random function
- Export a default function with scenario logic

For Locust:
- Use `@task(weight)` decorators for endpoint weighting
- Implement `on_start` for session setup
- Use `wait_time = between(1, 3)` for think time

For JMeter:
- Generate a Thread Group with ramp-up period
- Use Throughput Controller for endpoint weighting
- Add Response Time Graph and Summary Report listeners

### 6. Add Observability Hooks
Include in the generated script:
- Custom metric tags per endpoint group (e.g., `{ endpoint: 'checkout' }`)
- Logging of failed requests with status code and response body excerpt
- A comment block listing recommended external metrics to correlate (CPU, DB connections, memory)

## Output Format

Produce the following sections in order:

**1. Scenario Summary Table**
A markdown table listing
