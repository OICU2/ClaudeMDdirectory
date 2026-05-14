---
name: downtime-cost-calculation
description: >
  Calculates the total financial impact of operational downtime by analyzing lost throughput,
  idle labor costs, SLA penalties, and recovery time. Use when someone says "how much did
  that outage cost us", asks about the financial impact of system downtime, wants to quantify
  production losses, needs to estimate the cost of an unplanned shutdown, or is building a
  business case for uptime improvements.
category: operations
tags: [downtime, cost-analysis, operations, SLA, production-loss]
author: community
---

# Downtime Cost Calculation

This skill computes the total cost of operational downtime across four impact categories and produces an itemized financial breakdown with a final total.

## Calculation Workflow

### Step 1 — Gather Required Inputs
Collect the following before calculating. Ask for any missing values:
- **Downtime duration** (minutes or hours)
- **Throughput rate** — units, revenue, or value produced per hour during normal operation
- **Fully-loaded labor cost** — total hourly cost of all idle staff affected (wages + benefits)
- **Number of idle workers** during the downtime event
- **SLA terms** — penalty per hour or per incident, if applicable
- **Recovery time** — additional hours to return to full production rate after restart (ramp-up)
- **Recovery throughput loss** — percentage of normal throughput lost during ramp-up (default 30% if unknown)

### Step 2 — Calculate Each Cost Component

**A. Lost Throughput Cost**
```
Lost Throughput = (Throughput per hour × Downtime hours)
                + (Throughput per hour × Recovery hours × Recovery loss %)
```

**B. Idle Labor Cost**
```
Idle Labor = Fully-loaded hourly rate per worker × Number of idle workers × Downtime hours
```

**C. SLA Penalty Cost**
```
SLA Penalty = Penalty per hour × Downtime hours
           OR flat penalty per incident (use whichever applies per contract)
```

**D. Recovery & Restart Cost**
```
Recovery Cost = Labor cost during ramp-up + Any overtime premium + Parts/materials if applicable
```

### Step 3 — Sum Total Downtime Cost
```
Total Cost = Lost Throughput + Idle Labor + SLA Penalties + Recovery Cost
```

### Step 4 — Apply Assumptions Transparently
- Flag any values that were estimated or defaulted
- Note currency and time zone if relevant
- If throughput is in units (not dollars), ask for unit price or note the gap

### Step 5 — Provide Annualized Projection (if applicable)
If the user provides downtime frequency (e.g., "this happens twice a month"), calculate:
```
Annual Downtime Cost = Total Cost per Event × Annual Frequency
```

## Output Format

Produce a structured cost report with the following sections:

---

**Downtime Cost Report**

| Input | Value |
|---|---|
| Downtime Duration | X hours |
| Idle Workers | N |
| Hourly Labor Cost | $X |
| Throughput Rate | X units/hr @ $X/unit |
| SLA Penalty | $X/hr or $X flat |
| Recovery Duration | X hours @ X% capacity |

**Cost Breakdown**

| Category | Calculation | Cost |
|---|---|---|
| Lost Throughput | X hrs × $X/hr + recovery loss | $X |
| Idle Labor | N workers × $X/hr × X hrs | $X |
| SLA Penalties | X hrs × $X/hr | $X |
| Recovery Cost | X hrs × $X + extras | $X |
| **Total Downtime Cost** | | **$X** |

**Assumptions & Notes**
- [List any estimated, defaulted, or missing values]
- [Note confidence level if inputs were partial]

**Optional: Annualized Impact**
- Frequency: X events/year → **Annual Cost: $X**

---

Keep the report concise. Do not add narrative paragraphs unless the user asks for explanation. If critical inputs are missing, ask for them before producing the table — do not fabricate values.
