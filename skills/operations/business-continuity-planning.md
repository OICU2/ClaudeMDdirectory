---
name: business-continuity-planning
description: >
  Helps create comprehensive business continuity plans to keep operations running during disruptions, disasters, or crises. Use when someone says "we need a disaster recovery plan," asks about keeping the business running during an outage, wants to prepare for emergencies, needs to document backup procedures, or is worried about what happens if key systems or people become unavailable.
category: operations
tags: [business-continuity, disaster-recovery, risk-management, operations, resilience]
author: community
---

# Business Continuity Planning

This skill guides users through building a structured business continuity plan (BCP) that identifies critical functions, defines recovery priorities, and documents actionable procedures for maintaining operations during disruptions.

## BCP Development Workflow

### 1. Gather Context
Ask the user for:
- Industry and company size
- Known risks or threats (natural disasters, cyberattacks, supplier failures, pandemics, key-person dependency)
- Any existing plans or documentation
- Regulatory or compliance requirements (ISO 22301, HIPAA, SOC 2, etc.)

### 2. Identify Critical Business Functions
List all core operations and rank them by:
- **Recovery Time Objective (RTO):** Maximum tolerable downtime
- **Recovery Point Objective (RPO):** Maximum acceptable data loss
- **Impact level:** Revenue loss, legal exposure, customer harm per hour of disruption

Categorize functions as:
- **Tier 1 – Mission Critical:** Must restore within 0–4 hours
- **Tier 2 – Essential:** Restore within 4–24 hours
- **Tier 3 – Important:** Restore within 1–7 days
- **Tier 4 – Deferrable:** Can wait 7+ days

### 3. Identify Single Points of Failure
For each critical function, flag:
- Key personnel with no backup
- Single vendors or suppliers
- Infrastructure with no redundancy
- Processes that exist only in someone's head

### 4. Define Recovery Strategies
For each Tier 1 and Tier 2 function, document:
- **Primary strategy:** What happens first
- **Backup strategy:** If primary fails
- **Responsible owner:** Named individual, not just a role
- **Resources required:** Tools, access, budget, personnel
- **Activation trigger:** What condition initiates this plan

### 5. Build the Incident Response Structure
Define:
- **Crisis team:** Names, roles, contact info, decision authority
- **Communication plan:** Internal staff, customers, vendors, media, regulators
- **Escalation path:** Who decides what at each severity level
- **War room location:** Physical and virtual backup coordination points

### 6. Document Procedures
For each recovery action, write step-by-step runbooks:
- Written so someone unfamiliar with the system can execute them
- Include system credentials location (not the credentials themselves)
- Include vendor support contacts and SLA terms
- Include verification steps to confirm recovery succeeded

### 7. Define Testing and Maintenance Schedule
- **Tabletop exercises:** Quarterly walkthrough of scenarios
- **Functional drills:** Semi-annual partial activation tests
- **Full simulation:** Annual end-to-end test
- **Review triggers:** After any incident, major system change, or org restructure
- **Owner:** Assign a named BCP owner responsible for keeping the plan current

## Output Format

Produce a structured BCP document with these sections:

```
# Business Continuity Plan — [Company Name]
Last Updated: [Date] | Owner: [Name] | Version: [X.X]

## 1. Executive Summary
[2–3 sentences: purpose, scope, activation conditions]

## 2. Critical Function Inventory
[Table: Function | Tier | RTO | RPO | Owner | Dependencies]

## 3. Risk & Threat Assessment
[Bulleted list of identified threats with likelihood and impact ratings]

## 4. Single Points of Failure
[Table: SPOF | Function Affected | Mitigation Plan | Status]

## 5. Recovery Strategies by Function
[For each Tier 1 & 2 function: Primary strategy, backup strategy, owner, trigger]

## 6. Crisis Response Team
[Table: Role | Name | Phone | Email | Backup Contact]

## 7. Communication Plan
[Audience | Message | Channel | Timing | Owner — for each stakeholder group]

## 8