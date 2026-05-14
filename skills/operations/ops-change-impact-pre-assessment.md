---
name: ops-change-impact-pre-assessment
description: >
  Evaluates the downstream effects of a proposed operational change on staffing, tooling, processes,
  and service levels before implementation. Use when someone says "we're thinking of changing how we
  handle X," asks about the impact of rolling out a new process, wants to assess risks before
  implementing an operational shift, mentions restructuring a team or workflow, or is considering
  deprecating or replacing a tool currently in use.
category: operations
tags: [change-management, risk-assessment, operations, impact-analysis, pre-implementation]
author: community
---

# Ops Change Impact Pre-Assessment

This skill evaluates the downstream effects of a proposed operational change across staffing, tooling, processes, and service levels before the change is implemented.

## Assessment Workflow

1. **Clarify the change scope** — Identify what is changing: process, tool, team structure, policy, or service model. If the description is vague, ask one clarifying question before proceeding.

2. **Map affected systems and stakeholders** — List every team, role, tool, vendor, or customer-facing process directly or indirectly touched by the change. Distinguish between primary (direct) and secondary (downstream) impacts.

3. **Assess staffing impact** — Identify roles that will need retraining, reallocation, backfill, or elimination. Flag any single points of failure introduced or removed by the change.

4. **Assess tooling impact** — Identify tools being replaced, deprecated, integrated, or newly required. Note licensing, access provisioning, data migration, or compatibility risks.

5. **Assess process impact** — Map which existing SOPs, runbooks, escalation paths, or approval workflows will break or require updates. Identify handoff points that will change.

6. **Assess service level impact** — Estimate effect on response times, throughput, error rates, or customer-facing SLAs during and after transition. Flag any temporary degradation windows.

7. **Identify critical risks** — Surface the top 3–5 risks that could cause the change to fail or create operational incidents. Rate each as High / Medium / Low likelihood and High / Medium / Low severity.

8. **Recommend mitigation actions** — For each critical risk, provide one concrete mitigation step. Do not list generic advice; tie each mitigation directly to the specific risk identified.

9. **Flag dependencies and sequencing** — Note if any prerequisite steps must occur before the change is safe to implement (e.g., tooling must be provisioned before process cutover).

## Output Format

Produce a structured pre-assessment report with the following sections:

**Change Summary** — 2–3 sentences describing the proposed change as understood.

**Impact Matrix** — A table with four rows (Staffing, Tooling, Processes, Service Levels) and three columns: Area | Specific Impacts | Severity (High/Medium/Low/None).

**Critical Risks** — Numbered list of 3–5 risks, each with: Risk description, Likelihood, Severity, and one mitigation action.

**Dependencies & Sequencing** — Bulleted list of prerequisites or ordering constraints. If none exist, state "No blocking dependencies identified."

**Readiness Recommendation** — One of three verdicts: `Proceed`, `Proceed with Conditions`, or `Do Not Proceed`. Follow with 2–3 sentences explaining the verdict and the single most important action required before moving forward.

Total length: 400–700 words. Use plain language. Avoid jargon unless the user introduced it first.
