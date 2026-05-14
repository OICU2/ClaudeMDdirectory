---
name: developer-runbook-gap-audit
description: >
  Reviews existing runbooks to identify missing failure scenarios, undocumented recovery steps, and outdated command references. Use when someone says "audit our runbook," asks to "find gaps in our incident playbook," wants to "improve our operational docs," needs to "check if our runbook is complete," or requests a "runbook review before an on-call rotation."
category: developer
tags: [runbooks, documentation, incident-response, reliability, sre]
author: community
---

# Runbook Gap Audit

Analyzes existing runbook content to surface missing failure scenarios, incomplete recovery procedures, stale commands, and documentation blind spots that would leave an on-call engineer without guidance during an incident.

## Audit Workflow

1. **Parse the runbook structure** — Identify all sections, headings, and documented scenarios. Note what system or service the runbook covers.

2. **Check failure scenario coverage** — Compare documented failure modes against a baseline checklist:
   - Dependency failures (database, cache, external APIs, message queues)
   - Partial outages (degraded performance, elevated error rates without full downtime)
   - Data-layer issues (replication lag, disk saturation, corrupt state)
   - Authentication/authorization failures
   - Deployment and rollback failures
   - Network partitions and DNS issues
   - Certificate and secret expiration
   - Resource exhaustion (CPU, memory, file descriptors, connection pools)

3. **Evaluate each documented scenario for completeness** — Every scenario should have:
   - Detection signal (alert name, metric threshold, or symptom description)
   - Triage steps ordered by priority
   - Specific commands with expected output examples
   - Escalation path with names or roles (not just "escalate if needed")
   - Resolution confirmation criteria
   - Post-incident action items or links

4. **Flag outdated references** — Scan for:
   - Hardcoded hostnames, IPs, or URLs that may have changed
   - Deprecated CLI flags or tool versions (e.g., `kubectl` commands pre-1.18 syntax)
   - References to decommissioned services or old team names
   - Timestamps on commands that suggest stale examples

5. **Assess usability under pressure** — Check for:
   - Steps requiring more than one lookup to execute (commands with undefined variables)
   - Ambiguous conditionals ("if this doesn't work, try something else")
   - Missing prerequisites (assumes access or tools not guaranteed during an incident)
   - No estimated time-to-resolution guidance

6. **Identify missing supporting sections** — Flag absence of:
   - Service dependency map or architecture diagram link
   - Glossary for service-specific terminology
   - Contact list with escalation SLAs
   - Links to dashboards, logs, and tracing queries
   - Changelog or last-reviewed date

## Output Format

Produce a structured audit report with these sections:

**Summary**
One paragraph: overall completeness score (e.g., 6/10), highest-risk gaps, and recommended priority fixes.

**Missing Failure Scenarios**
Bulleted list of failure modes not covered, each with a one-line explanation of why it matters for this service.

**Incomplete Scenarios**
Table with columns: `Scenario | Missing Element | Risk if Left Unaddressed`. Only include scenarios with actual gaps.

**Outdated References**
Bulleted list: exact quote from the runbook → what it should be or why it needs verification.

**Usability Issues**
Numbered list of friction points an on-call engineer would hit, ordered by severity.

**Recommended Additions**
Short checklist of supporting sections or links the runbook should include but doesn't.

**Quick Wins**
Three to five specific, low-effort fixes that would immediately improve the runbook's reliability during an incident.
