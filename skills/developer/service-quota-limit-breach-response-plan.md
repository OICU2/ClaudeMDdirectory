---
name: service-quota-limit-breach-response-plan
description: >
  Builds a structured runbook for detecting, alerting on, and gracefully handling third-party service quota limit breaches in production systems. Use when someone says their API rate limits are being hit in production, asks about handling service quota exhaustion, wants to build a quota breach response plan, needs to prevent cascading failures from external API limits, or is preparing for quota-related incidents with a third-party dependency.
category: developer
tags: [incident-response, api-limits, rate-limiting, runbook, production-resilience]
author: community
---

# Service Quota Limit Breach Response Plan

This skill generates a comprehensive runbook for detecting, responding to, and recovering from third-party service quota limit breaches, covering alerting thresholds, degradation strategies, and post-incident hardening.

## Runbook Construction Workflow

### Step 1: Gather Context
Ask the user for the following if not already provided:
- Which third-party service(s) are affected (e.g., Stripe, Twilio, OpenAI, AWS, SendGrid)
- The type of quota: requests-per-second, requests-per-day, concurrent connections, data volume
- Current quota limits and whether they are soft or hard limits
- What functionality breaks when the quota is hit
- Existing monitoring and alerting stack (e.g., Datadog, PagerDuty, CloudWatch)
- Whether the service provides quota usage APIs or webhooks

### Step 2: Build the Detection Layer
Generate specific detection mechanisms:
- **Proactive polling**: Describe how to query the provider's usage API on a schedule (e.g., every 5 minutes) and emit a metric
- **Response code monitoring**: Define which HTTP status codes signal quota exhaustion (429, 503, specific error bodies) and how to capture them in application logs
- **Alert thresholds**: Define three tiers — Warning (75% of quota consumed), Critical (90%), and Breach (100% / errors returned)
- **Dashboard panel**: Describe a quota utilization gauge with rolling time windows matching the quota reset period

### Step 3: Define Alerting Rules
Produce concrete alert configurations:
- Warning alert: notify on-call engineer via Slack/email with current usage percentage and reset time
- Critical alert: page on-call engineer via PagerDuty/OpsGenie with quota window, reset timestamp, and a link to the runbook
- Breach alert: escalate to team lead, include blast radius (which user-facing features are degraded), and auto-link to the incident channel

### Step 4: Design Graceful Degradation Strategies
Provide tiered response actions based on quota type:
- **Request queuing**: Implement an in-process or external queue (e.g., Redis, SQS) to buffer non-urgent calls and replay after quota resets
- **Circuit breaker**: Define open/half-open/closed thresholds and how to expose the circuit state to dependent services
- **Feature flags**: Identify which features can be disabled (e.g., email notifications, enrichment calls) without breaking core flows
- **Fallback responses**: Specify acceptable cached, mocked, or degraded responses for each affected endpoint
- **Client-side throttling**: Add a token bucket or leaky bucket rate limiter in the application layer before calls leave the system

### Step 5: Write the Incident Response Checklist
Produce a numbered on-call checklist:
1. Confirm breach via dashboard or provider console
2. Identify whether breach is expected (traffic spike) or anomalous (bug, runaway job)
3. Activate circuit breaker or feature flag to stop bleeding
4. Check if an emergency quota increase can be requested from the provider (include provider support URL and SLA)
5. Communicate status to stakeholders via status page or internal channel
6. Monitor recovery after quota reset; confirm system self-heals
7. Document timeline and trigger for post-mortem

### Step 6: Post-Incident Hardening
Generate follow-up action items:
- Request a quota increase from the provider with justification
- Add quota usage as a key metric in the weekly engineering review
- Implement request deduplication to reduce unnecessary API calls
- Evaluate whether a secondary provider or self-hosted fallback is warranted
- Add quota breach scenarios to the chaos/load testing suite
- Review and tighten alert thresholds based on actual usage patterns

## Output Format

Produce
