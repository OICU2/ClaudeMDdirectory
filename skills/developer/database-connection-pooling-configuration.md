---
name: database-connection-pooling-configuration
category: developer
description: >
  Analyzes application load patterns and database concurrency limits to generate optimal connection pool settings for a given runtime and database engine. Use when someone says "my database connections are exhausted," asks about connection pool tuning, wants to configure pgBouncer or HikariCP, needs to optimize database connection settings, or is seeing "too many connections" errors.
tags: [database, performance, configuration, postgresql, mysql, connection-pooling]
author: community
---

# Database Connection Pool Configuration

This skill analyzes runtime environment, database engine, and traffic patterns to produce ready-to-use, optimized connection pool configuration with explicit rationale for every parameter.

## Configuration Workflow

1. **Gather inputs** — Collect the following before generating any config:
   - Database engine and version (PostgreSQL, MySQL, MSSQL, etc.)
   - Runtime/framework (HikariCP, pgBouncer, PgPool-II, SQLAlchemy, Sequelize, ActiveRecord, etc.)
   - `max_connections` setting on the database server (or ask user to run `SHOW max_connections`)
   - Number of application instances / pods / workers
   - Peak concurrent users or requests-per-second estimate
   - Average query duration (OLTP fast queries vs. long-running analytics)
   - Whether read replicas exist

2. **Apply sizing formulas**
   - **PostgreSQL formula:** `pool_size = (max_connections - superuser_reserved) / number_of_app_instances`; never exceed 80% of `max_connections` across all pools combined.
   - **Thread-based runtimes (Java/HikariCP):** `pool_size = (core_count * 2) + effective_spindle_count`; cap `maximumPoolSize` at that value.
   - **Async runtimes (Node, Python asyncio):** pool size equals concurrency limit, not thread count — typically 5–20; flag if user sets it too high.
   - **pgBouncer:** recommend `pool_mode = transaction` for OLTP, `session` only when app uses advisory locks or `SET` session variables.

3. **Set timeout and overflow parameters**
   - `connectionTimeout` / `connect_timeout`: 3–10 s for OLTP, never 0.
   - `idleTimeout` / `idle_in_transaction_session_timeout`: 10 min max; set `server_idle_timeout` in pgBouncer to half of database `idle_in_transaction_session_timeout`.
   - `maxLifetime` (HikariCP): set 2–3 minutes below database or load-balancer connection timeout.
   - `minIdle` / `min_pool_size`: set equal to `pool_size` for steady-load services; lower to 2–5 for bursty/batch services.
   - `leakDetectionThreshold` (HikariCP): enable at 2× average query duration during tuning.

4. **Account for multi-instance deployments**
   - Total connections = `pool_size × app_instances × thread_workers_per_instance`.
   - If total exceeds 80% of `max_connections`, reduce `pool_size` and introduce pgBouncer as a middleware layer.
   - For Kubernetes: treat each pod as one instance; account for rolling-deploy surge (typically +1 pod).

5. **Flag anti-patterns**
   - `pool_size` larger than `max_connections` → connection storm risk.
   - `minIdle = 0` on a latency-sensitive service → cold-start spikes.
   - No `maxLifetime` set → stale connections after network appliance resets.
   - Using `statement` pool mode in pgBouncer with prepared statements → silent breakage.

6. **Validate with queries** — Provide the exact SQL/commands to confirm settings post-deploy:
   - PostgreSQL: `SELECT count(*), state FROM pg_stat_activity GROUP BY state;`
   - pgBouncer: `SHOW POOLS;` and `SHOW STATS;`
   - HikariCP: JMX metrics `HikariPool-1.ActiveConnections`, `PendingConnections`

## Output Format

Produce the following sections in order:

**1. Sizing Summary Table**
| Parameter
