---
name: data-retention-deletion-script-design
description: >
  Designs automated scripts and scheduling configurations to enforce data retention policies by purging or archiving stale records across relational databases, NoSQL stores, and object storage (S3, GCS, Azure Blob). Use when someone says "we need to delete old records after X days," asks about automating data expiry or cleanup jobs, wants to set up a data retention policy, needs to archive records past a certain age, or is trying to comply with GDPR/CCPA data minimization requirements.
category: developer
tags: [data-retention, automation, compliance, database, scripting]
author: community
---

# Data Retention & Deletion Script Design

This skill designs production-ready scripts and cron/scheduler configurations to automatically purge or archive records that exceed defined retention windows across any data store.

## Retention Script Design Workflow

### 1. Gather Retention Requirements
- Identify the target data store (PostgreSQL, MySQL, MongoDB, DynamoDB, S3, etc.)
- Clarify retention window (e.g., 90 days, 7 years) per data category
- Determine action: hard delete, soft delete (flag), or archive (move to cold storage)
- Ask about compliance drivers (GDPR, HIPAA, CCPA) — they affect audit logging and right-to-erasure handling
- Identify any foreign key dependencies or cascading deletes needed

### 2. Design the Script

**For relational databases:**
- Use batched deletes (e.g., `DELETE WHERE created_at < NOW() - INTERVAL`) to avoid table locks
- Default batch size: 1,000–10,000 rows per iteration with a configurable sleep between batches
- Wrap in a transaction with rollback on error
- Include a dry-run mode that logs row counts without deleting

**For object storage (S3/GCS/Azure Blob):**
- Prefer native lifecycle rules (S3 Lifecycle Policy, GCS Object Lifecycle) over custom scripts when possible
- For custom scripts, use SDK pagination to list objects by `LastModified` before deleting
- Archive to a cheaper storage tier (e.g., S3 Glacier) before deletion if required

**For NoSQL (MongoDB, DynamoDB):**
- MongoDB: use TTL indexes for automatic expiry when possible; fall back to scheduled aggregation + deleteMany
- DynamoDB: use TTL attribute natively; for complex rules, use Lambda + DynamoDB Streams

### 3. Add Safety Controls
- Mandatory dry-run flag (`--dry-run`) that prints affected record counts
- Row/object count threshold guard: abort if deletion count exceeds an expected maximum (configurable)
- Audit log: write deleted record IDs, timestamps, and operator identity to a separate audit table or log sink
- Idempotency: script must be safe to re-run without double-deleting or erroring

### 4. Design the Schedule
- Recommend off-peak execution windows (e.g., 2–4 AM in the data store's timezone)
- Provide cron expression for the stated frequency
- For cloud environments, suggest managed schedulers: AWS EventBridge, GCP Cloud Scheduler, or Kubernetes CronJob
- Include alerting on failure (CloudWatch alarm, PagerDuty webhook, or email)

### 5. Provide a Rollback Plan
- For hard deletes: recommend a pre-deletion backup step (pg_dump subset, S3 copy to archive bucket)
- For soft deletes: show how to reverse the flag
- Document retention of the audit log itself (typically 7 years for compliance)

## Output Format

Produce the following artifacts in order:

1. **Retention Policy Summary Table** — Markdown table listing data category, store, retention window, and action (delete/archive/soft-delete)

2. **Script** — Fully working script in the appropriate language (Python, Bash, or SQL) with:
   - Configurable parameters at the top (retention days, batch size, dry-run flag, DB connection via env vars)
   - Inline comments explaining each logical block
   - Error handling and logging to stdout

3. **Scheduler Configuration** — Cron expression + deployment snippet (EventBridge rule JSON, Kubernetes CronJob YAML, or systemd timer unit) matching the target environment

4. **Audit Log Schema** — SQL DDL or JSON schema for the audit table/log entry
