---
name: database-partitioning-strategy-design
category: developer
description: >
  Analyzes table size, query patterns, and growth projections to recommend an optimal database partitioning scheme with concrete implementation steps. Use when someone asks how to partition a large table, wants to improve database performance at scale, needs to handle time-series data efficiently, is dealing with slow queries on massive datasets, or wants to design a sharding or partitioning strategy.
tags: [database, partitioning, performance, scalability, sql]
author: community
---

# Database Partitioning Strategy Design

This skill evaluates table characteristics, access patterns, and growth trends to produce a tailored partitioning recommendation with ready-to-use implementation steps.

## Analysis Workflow

### 1. Gather Table Profile
Collect or ask for:
- Current table size (rows, GB)
- Growth rate (rows/day or GB/month)
- Primary key and index structure
- Database engine (PostgreSQL, MySQL, BigQuery, etc.)
- Retention requirements (if any)

### 2. Identify Query Patterns
Determine:
- Most frequent query filters (date ranges, tenant ID, region, status)
- Which columns appear in WHERE, JOIN, and ORDER BY clauses
- Read vs. write ratio
- Whether queries are OLTP (point lookups) or OLAP (range scans, aggregations)

### 3. Select Partition Type

| Pattern | Recommended Type |
|---|---|
| Date/time filtering dominates | Range partitioning on timestamp column |
| Queries filter by customer/tenant/region | List or Hash partitioning on that key |
| Even distribution needed, no natural key | Hash partitioning |
| Hybrid (time + tenant) | Composite partitioning (range + hash/list) |
| Massive scale, cross-node distribution | Horizontal sharding |

### 4. Evaluate Trade-offs
For the chosen strategy, assess:
- **Partition pruning**: Will the planner skip irrelevant partitions for typical queries?
- **Hotspot risk**: Will one partition receive disproportionate writes?
- **Maintenance overhead**: Frequency of adding/dropping partitions
- **Cross-partition query cost**: How often do queries span multiple partitions?
- **Index strategy per partition**: Local vs. global indexes

### 5. Define Partition Boundaries
- For range: define interval (daily, monthly, quarterly) based on growth rate and query selectivity
- For list: enumerate distinct key values or use a lookup table
- For hash: choose modulus based on target partition count (power of 2 recommended)
- Set a default/overflow partition for edge cases

### 6. Plan Implementation Steps
Sequence the migration:
1. Create new partitioned table schema
2. Create child partitions (including future ones)
3. Migrate data in batches (avoid locking)
4. Rebuild indexes and foreign keys
5. Validate row counts and query plans (`EXPLAIN ANALYZE`)
6. Swap table names or update application connection
7. Archive or drop old table after verification

### 7. Automate Partition Maintenance
- Provide a script or scheduled job to create future partitions in advance
- Define a data retention/archival policy with a drop or detach schedule

## Output Format

Produce a structured report with these sections:

**Partitioning Recommendation**
- Strategy name and partition key
- Partition type and interval/modulus
- Rationale tied to the stated query patterns

**Partition Boundary Definition**
- Exact boundary values or generation logic
- Number of initial partitions to create
- Future partition creation schedule

**Implementation Script**
- DDL for the partitioned table and at least 3 example child partitions
- Data migration query (batched INSERT/SELECT or `ATTACH PARTITION`)
- Index creation statements
- Query to verify partition pruning (`EXPLAIN` output snippet)

**Maintenance Plan**
- Automated partition creation script (cron expression or pg_cron/Event Scheduler job)
- Retention/archival policy with DROP or DETACH commands

**Risk & Trade-off Summary**
- 3–5 bullet points covering hotspots, cross-partition queries, index bloat, or migration downtime risks
- Mitigation for each risk

Keep SQL dialect-specific to the stated database engine. If the engine is unknown, default to PostgreSQL syntax and note the assumption.
