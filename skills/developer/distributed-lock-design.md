---
name: distributed-lock-design
category: developer
description: >
  Designs distributed locking strategies for concurrent resource access control using Redis, database advisory locks, ZooKeeper, or similar primitives. Use when someone says "prevent race conditions," asks about "concurrent access to shared resources," wants to "coordinate across multiple servers," needs to "ensure only one process runs at a time," or is dealing with "distributed system synchronization."
tags: [distributed-systems, concurrency, redis, locking, backend]
author: community
---

# Distributed Lock Design

Analyzes the concurrency problem and produces a complete distributed locking strategy with implementation code, failure handling, and operational guidance for the specific technology stack.

## Lock Design Workflow

### 1. Assess the Problem
- Identify the shared resource (database row, file, API quota, job)
- Determine lock granularity (global, per-tenant, per-entity)
- Establish acceptable lock duration and timeout bounds
- Identify failure modes: what happens if the lock holder crashes?

### 2. Select the Locking Primitive

**Redis (Redlock)** — Use when:
- Sub-millisecond lock acquisition needed
- Redis already in stack
- Acceptable to lose locks on Redis restart (unless AOF persistence enabled)

**Database Advisory Locks (PostgreSQL `pg_advisory_lock`, MySQL `GET_LOCK`)** — Use when:
- Database already in stack, no Redis
- Locks must survive application crashes (DB cleans up on disconnect)
- Transaction-scoped locking is acceptable

**Database Row-Level Locking (`SELECT FOR UPDATE`)** — Use when:
- Lock scope is a specific row
- Operation is transactional
- Lock duration is short (within a transaction)

**ZooKeeper / etcd** — Use when:
- Strong consistency guarantees required
- Multi-node leader election needed
- Fencing tokens required to prevent stale lock holders

### 3. Implement the Lock

**Redis SET NX PX pattern:**
```python
import redis
import uuid
import time

class RedisLock:
    def __init__(self, client: redis.Redis, key: str, ttl_ms: int = 30000):
        self.client = client
        self.key = f"lock:{key}"
        self.ttl_ms = ttl_ms
        self.token = str(uuid.uuid4())

    def acquire(self, retry_count: int = 3, retry_delay_ms: int = 200) -> bool:
        for _ in range(retry_count):
            acquired = self.client.set(
                self.key, self.token, nx=True, px=self.ttl_ms
            )
            if acquired:
                return True
            time.sleep(retry_delay_ms / 1000)
        return False

    def release(self) -> bool:
        # Atomic check-and-delete using Lua script
        script = """
        if redis.call("get", KEYS[1]) == ARGV[1] then
            return redis.call("del", KEYS[1])
        else
            return 0
        end
        """
        return bool(self.client.eval(script, 1, self.key, self.token))

    def __enter__(self):
        if not self.acquire():
            raise RuntimeError(f"Could not acquire lock: {self.key}")
        return self

    def __exit__(self, *args):
        self.release()
```

**PostgreSQL advisory lock pattern:**
```python
from contextlib import contextmanager
import hashlib

@contextmanager
def advisory_lock(conn, resource_name: str):
    # Convert resource name to stable integer key
    lock_id = int(hashlib.sha256(resource_name.encode()).hexdigest()[:8], 16)
    try:
        conn.execute("SELECT pg_advisory_lock(%s)", (lock_id,))
        yield
    finally:
        conn.execute("SELECT pg_advisory_unlock(%s)", (lock_id,))
```

**PostgreSQL row-level lock pattern:**
```sql
BEGIN;
SELECT * FROM jobs WHERE id = $1 FOR UPDATE SKIP LOCKED;
-- process if row returned, skip if another worker holds it
COMMIT;
```

### 4. Handle Lock Expiry and Fencing

-
