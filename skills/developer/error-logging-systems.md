---
name: error-logging-systems
description: >
  Implements structured logging and error tracking systems to monitor application health and diagnose issues. Use when someone wants to add logging to their application, asks about error tracking setup, needs to debug production issues with better observability, wants to implement log aggregation, or is building a monitoring and alerting pipeline.
category: developer
tags: [logging, error-tracking, observability, monitoring, debugging]
author: community
---

# Error Logging Systems

This skill designs and implements structured logging and error tracking solutions, producing production-ready code that captures, stores, and surfaces application errors and health metrics.

## Implementation Workflow

1. **Assess the environment** — Identify the language, framework, runtime, and existing logging infrastructure before suggesting any solution.

2. **Choose log levels deliberately** — Apply consistent severity tiers: `DEBUG` (local dev tracing), `INFO` (normal operations), `WARN` (recoverable anomalies), `ERROR` (failures requiring attention), `FATAL` (unrecoverable crashes).

3. **Structure log entries as JSON** — Every log line must include: `timestamp` (ISO 8601), `level`, `message`, `service`, `traceId`/`requestId`, `userId` (if applicable), and a `context` object for additional metadata. Never log raw strings in production.

4. **Implement error capture with stack traces** — Wrap uncaught exceptions and unhandled promise rejections globally. Include: error class, message, stack trace, environment, and the causal chain for nested errors.

5. **Redact sensitive data** — Scrub PII, tokens, passwords, and credit card numbers before writing to any log sink. Implement a sanitizer function applied to all log payloads.

6. **Add correlation IDs** — Generate a unique `traceId` per request and propagate it through async boundaries, middleware, and downstream service calls so errors can be traced end-to-end.

7. **Configure log sinks** — Provide configuration for at least one of: stdout/stderr (for container environments), file rotation (Winston, Pino, Logback), or third-party services (Datadog, Sentry, LogRocket, CloudWatch, ELK stack).

8. **Set up error aggregation and alerting** — Show how to group duplicate errors, set thresholds for alerting (e.g., error rate > 1% over 5 minutes), and integrate with PagerDuty or Slack webhooks.

9. **Add health check endpoints** — Implement `/health` and `/metrics` endpoints that expose error counts, uptime, and dependency status for external monitors.

10. **Write tests for logging behavior** — Provide unit tests that assert the logger emits the correct structure, redacts sensitive fields, and captures uncaught errors.

## Output Format

Produce the following artifacts in order:

1. **Logger module** — A standalone, importable logger class or instance (e.g., `logger.ts`, `logging.py`) with typed methods for each log level.
2. **Error handler middleware** — Framework-specific middleware (Express, FastAPI, Rails, etc.) that catches and logs all unhandled errors with full context.
3. **Configuration file** — Environment-aware config (`logging.config.js` or equivalent) with settings for level, sinks, redaction rules, and rotation policy.
4. **Integration example** — A 20–40 line snippet showing the logger used in a real service function with try/catch, context enrichment, and trace ID propagation.
5. **Setup instructions** — Numbered steps to install dependencies, set environment variables, and wire the logger into the application entry point.

Each code block must include the filename, language tag, and inline comments explaining non-obvious decisions.