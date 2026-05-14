---
name: inter-department-cost-chargeback-model
description: >
  Designs a cost allocation framework that distributes shared operational expenses across departments based on usage metrics. Use when someone asks about splitting shared costs between teams, wants to build a chargeback or showback model, needs to allocate IT or infrastructure expenses to business units, is trying to make departments accountable for resource consumption, or wants to design an internal billing system.
category: operations
tags: [cost-allocation, chargeback, finance-ops, budgeting, shared-services]
author: community
---

# Inter-Department Cost Chargeback Model

This skill builds a structured cost allocation framework that assigns shared operational expenses to departments based on measurable usage, enabling financial accountability and transparent internal billing.

## Cost Chargeback Design Workflow

### 1. Inventory Shared Cost Pools
- List all shared services and infrastructure (cloud, office space, IT support, licenses, HR, finance ops)
- Group costs into pools: Infrastructure, People/HR Services, Software, Facilities, Shared Operations
- Identify fixed vs. variable components within each pool

### 2. Define Allocation Drivers per Pool
Map each cost pool to a measurable usage metric:
- **Cloud/Infrastructure** → CPU hours, storage GB, API call volume, active users
- **Office/Facilities** → Headcount, square footage occupied, seat count
- **IT Support** → Ticket volume, device count, support hours consumed
- **Software Licenses** → Named users, active seats, feature tier
- **HR/Finance Services** → Headcount, payroll transactions, hire/offboard events
- **Shared Operations** → Revenue percentage, transaction volume, or headcount proxy

### 3. Calculate Department Weights
For each cost pool:
1. Sum total usage metric across all departments
2. Compute each department's percentage share: `Dept Usage / Total Usage × 100`
3. Apply percentage to the total cost pool: `Pool Cost × Dept Share %`
4. Document the formula and data source for auditability

### 4. Choose Model Type
- **Chargeback**: Departments are actually billed; affects their P&L or budget
- **Showback**: Departments see allocated costs for visibility only; no real transfer
- **Hybrid**: Chargeback for controllable costs, showback for fixed overhead

### 5. Handle Unallocated or Disputed Costs
- Set a threshold (e.g., costs under $500/month) to absorb centrally rather than allocate
- Define a dispute resolution process: department challenges allocation → finance reviews driver data → adjusts within 30 days
- Assign residual/unattributable costs to a Corporate overhead bucket

### 6. Set Cadence and Governance
- Define billing cycle: monthly recommended, quarterly for low-volatility pools
- Identify data owners responsible for submitting usage metrics by a set deadline
- Require sign-off from Finance and each department head on initial model
- Schedule quarterly reviews to recalibrate drivers as business changes

## Output Format

Produce the following deliverables in sequence:

**1. Cost Pool Summary Table**
| Cost Pool | Total Monthly Cost | Allocation Driver | Data Source | Model Type |
|---|---|---|---|---|
| (one row per pool) |

**2. Department Allocation Matrix**
| Department | Pool 1 Share % | Pool 1 Charge | Pool 2 Share % | Pool 2 Charge | ... | Total Allocated Cost |
|---|---|---|---|---|---|---|

**3. Allocation Formula Sheet**
- One paragraph per cost pool: formula used, driver definition, where data comes from, and who owns it

**4. Model Assumptions & Limitations**
- Bullet list of key assumptions (e.g., headcount is end-of-month snapshot)
- Known gaps or approximations in the current model

**5. Implementation Checklist**
- Ordered list of steps to operationalize the model, including system integrations, stakeholder approvals, and first billing date

Length: Comprehensive enough to hand directly to a Finance or Operations lead. Tables are mandatory. Use actual numbers if the user provides them; use placeholder variables (e.g., `$X`, `N users`) if not.
