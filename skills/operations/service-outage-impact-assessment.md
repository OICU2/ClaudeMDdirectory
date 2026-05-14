---
name: service-outage-impact-assessment
description: >
  Quantifies the operational, financial, and customer impact of a service outage by mapping affected processes, revenue streams, and downstream dependencies. Use when someone says "we have an outage," asks about how bad a service disruption is, or wants to understand the blast radius of a system failure. Also activates when someone needs to estimate revenue loss from downtime, identify who is affected by an incident, or prioritize recovery based on business impact.
category: operations
tags: [incident-response, impact-analysis, downtime, revenue-loss, dependencies]
author: community
---

# Service Outage Impact Assessment

This skill systematically evaluates the business, customer, and technical consequences of a service outage so teams can prioritize response, communicate clearly, and quantify damage.

## Assessment Workflow

1. **Identify the affected service and scope**
   - Name the specific service, component, or system that is down or degraded
   - Determine whether the outage is full (100% unavailable) or partial (degraded performance, subset of users)
   - Establish the start time and current duration

2. **Map downstream dependencies**
   - List every internal service, process, or team that depends on the affected system
   - Identify external customer-facing features or integrations that rely on it
   - Flag any cascading failures already observed or likely to occur

3. **Quantify customer impact**
   - Estimate the number of affected users or accounts (segment by tier if data is available: free, paid, enterprise)
   - Describe what specific actions users cannot perform right now
   - Note whether any SLA or SLO thresholds have been breached or are at risk

4. **Calculate financial exposure**
   - Estimate revenue at risk per hour using available metrics (MRR ÷ 720 hours, transaction volume, booking rates)
   - Identify any penalty clauses, SLA credits, or contractual obligations triggered
   - Flag deferred or lost transactions that will not be recovered after restoration

5. **Assess operational impact**
   - Identify internal workflows blocked (support queues, fulfillment, reporting, billing)
   - List teams actively disrupted and their current workarounds if any
   - Note whether the outage is expanding, stable, or recovering

6. **Assign severity and priority**
   - Rate severity: P1 (critical, revenue/data loss, all users), P2 (major, significant user subset), P3 (minor, workaround exists)
   - Recommend immediate recovery priority order based on revenue and user impact
   - Identify the minimum viable restoration target (partial fix that unblocks highest-value path)

7. **Surface communication requirements**
   - Determine whether a status page update, customer email, or executive brief is needed
   - Identify stakeholders who must be notified within the next 30 minutes

## Output Format

Produce a structured impact assessment with these sections:

**Outage Summary**
- Service affected, outage type (full/partial), duration so far

**Blast Radius**
- Bulleted list of dependent services and processes, marked as confirmed or likely

**Customer Impact**
- Number of affected users (with segmentation if known)
- Specific capabilities unavailable
- SLA breach status: yes / no / at risk

**Financial Exposure**
- Estimated revenue impact per hour and total to date
- Penalty or credit obligations: yes / no / unknown

**Operational Impact**
- Blocked internal workflows and affected teams

**Severity Rating**
- P1 / P2 / P3 with one-line justification

**Recovery Priority**
- Ordered list of what to restore first and why

**Immediate Actions Required**
- 3–5 specific next steps with owners and timeframes

Keep the assessment under 600 words. Use tables only when comparing multiple affected services. Flag any data gaps explicitly so responders know what to confirm.
