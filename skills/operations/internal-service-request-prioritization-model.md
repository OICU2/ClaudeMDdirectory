---
name: internal-service-request-prioritization-model
description: >
  Scores and ranks incoming internal service requests by evaluating urgency, business impact, and current resource availability to guide queue management decisions. Use when someone says "help me prioritize these service tickets," asks about "which requests should we handle first," or wants to "rank our support queue by importance." Also activates when users need to "score incoming requests" or want to "figure out what to work on next across our backlog."
category: operations
tags: [prioritization, service-requests, queue-management, triage, operations]
author: community
---

# Internal Service Request Prioritization Model

This skill scores and ranks internal service requests across urgency, business impact, and resource availability dimensions to produce an ordered, actionable work queue.

## Scoring Workflow

### Step 1: Collect Request Data
For each service request, gather:
- **Request ID / Title**
- **Submission timestamp** (how long it has been waiting)
- **Requester role and department**
- **Stated deadline or SLA** (if any)
- **Description of the need or issue**
- **Current status** (new, pending, blocked)

If any field is missing, assign a default middle score (5/10) for that dimension and flag it as incomplete.

### Step 2: Score Each Request on Three Dimensions (1–10 scale)

**A. Urgency (U)**
- 9–10: System outage, regulatory deadline within 24h, revenue-blocking issue
- 7–8: Deadline within 3 days, productivity fully blocked for multiple staff
- 5–6: Work degraded but workaround exists, deadline within 1 week
- 3–4: Minor friction, deadline within 2 weeks
- 1–2: Nice-to-have, no stated deadline

**B. Business Impact (B)**
- 9–10: Affects customers externally, revenue directly at risk, executive visibility
- 7–8: Affects 10+ internal users, impacts a core business process
- 5–6: Affects a single team's workflow, moderate productivity loss
- 3–4: Affects 1–2 people, low-visibility process
- 1–2: Personal preference or minor convenience

**C. Resource Availability (R)**
- 9–10: Required skill set is fully available right now, no competing priorities
- 7–8: Available within hours, minor queue conflict
- 5–6: Available today with some reallocation
- 3–4: Specialist is partially allocated, available tomorrow at earliest
- 1–2: Key resource is fully occupied or on leave for days

### Step 3: Calculate Priority Score
Apply a weighted formula:

```
Priority Score = (U × 0.40) + (B × 0.35) + (R × 0.25)
```

Round to two decimal places.

### Step 4: Assign Priority Tier
- **P1 – Critical**: Score 8.00–10.00 → Address immediately
- **P2 – High**: Score 6.00–7.99 → Address within same business day
- **P3 – Medium**: Score 4.00–5.99 → Address within 2 business days
- **P4 – Low**: Score below 4.00 → Schedule for next available slot

### Step 5: Handle Tie-Breaking
When two requests share the same score:
1. Prefer the one with the earlier submission timestamp
2. If still tied, prefer higher Urgency score
3. If still tied, prefer higher Business Impact score

### Step 6: Flag Special Conditions
Append a flag to any request that meets these criteria:
- 🔴 **ESCALATE**: U score = 10 regardless of total score
- ⚠️ **STALE**: Request has been waiting > 5 business days without action
- 🔒 **BLOCKED**: R score ≤ 2 — note the blocking resource by name if known

---

## Output Format

Produce a ranked priority table followed by a brief summary block.

**Ranked Priority Table** (sorted descending by Priority Score):

| Rank | Request ID | Title | U | B | R | Score | Tier | Flags |
|------|------------|-------|---|---|---|-------|------|-------|
| 1 | REQ-042 | Pay
