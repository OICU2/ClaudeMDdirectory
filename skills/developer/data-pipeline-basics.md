---
name: data-pipeline-basics
description: >
  Guides building ETL (Extract, Transform, Load) pipelines that move and process data between systems.
  Use when someone wants to build a data pipeline, asks about ingesting data from an API or database,
  needs to transform or clean datasets, wants to load data into a warehouse, or is setting up an
  automated data workflow.
category: developer
tags: [etl, data-engineering, pipelines, ingestion, transformation]
author: community
---

# Data Pipeline Basics

This skill designs and implements ETL pipelines — covering extraction from sources, transformation logic, and loading into targets — whenever someone needs to move or process data between systems.

## Pipeline Design Workflow

### 1. Define the Pipeline Scope
- Identify the **source**: REST API, database (Postgres, MySQL, MongoDB), flat files (CSV, JSON, Parquet), message queue (Kafka, SQS), or cloud storage (S3, GCS)
- Identify the **target**: data warehouse (BigQuery, Snowflake, Redshift), database, file system, or another API
- Clarify **frequency**: one-time migration, scheduled batch (cron), or streaming/real-time
- Clarify **volume**: row counts, file sizes, and update patterns (full refresh vs. incremental)

### 2. Extract Phase
- Use connection pooling for database sources; avoid holding long-lived connections
- For APIs: implement pagination, handle rate limits with exponential backoff, and store raw responses before transforming
- For files: validate file existence and schema before processing
- Implement **checkpointing**: record the last successfully processed offset, timestamp, or ID to enable resumable pipelines
- Log extraction metadata: record count, source timestamp, and any errors encountered

### 3. Transform Phase
- Apply transformations in this order: filter invalid rows → deduplicate → cast/coerce types → apply business logic → enrich/join
- Validate data with explicit checks: non-null constraints, value ranges, referential integrity, and format patterns
- Handle nulls explicitly — never silently drop rows; log or route bad records to a dead-letter store
- Keep transformations **pure and testable**: write transformation logic as functions that take data in and return data out, with no side effects
- Use pandas, Polars, dbt, or PySpark depending on data volume (choose Polars/PySpark for >1M rows)

### 4. Load Phase
- Use **upserts** (INSERT ... ON CONFLICT) for idempotent loads; avoid plain inserts that cause duplicates on retry
- Batch writes in chunks (e.g., 1,000–10,000 rows) rather than row-by-row or single massive transactions
- For warehouses: load to a staging table first, then merge into the target table
- Run post-load row count and checksum validation to confirm data integrity

### 5. Error Handling and Observability
- Wrap each phase in try/except; log structured errors with phase name, record identifier, and error message
- Implement a dead-letter queue or error table for records that fail transformation or loading
- Emit pipeline metrics: rows extracted, rows transformed, rows loaded, rows failed, and elapsed time
- Add alerting on failure (email, Slack webhook, or PagerDuty) for production pipelines

### 6. Code Structure
Organize pipeline code as:
```
pipeline/
  extract.py       # source connectors
  transform.py     # transformation and validation logic
  load.py          # target writers
  pipeline.py      # orchestration: calls extract → transform → load
  config.py        # connection strings, batch sizes, schedule config
  tests/           # unit tests for transform functions
```
Use environment variables or a secrets manager for all credentials — never hardcode them.

## Output Format

Produce the following for each pipeline request:

1. **Pipeline overview** (3–5 sentences): source, target, frequency, and key transformation steps
2. **Working code** with all three ETL phases implemented, using the requester's language (default Python)
3. **Configuration block**: connection parameters as environment variables with example `.env` file
4. **Inline comments** on non-obvious logic (checkpointing, upsert strategy, batching)
5. **Test stubs**: at least two unit tests for the core transformation function
6. **Run instructions**: how to install dependencies and execute the pipeline locally

Code should
