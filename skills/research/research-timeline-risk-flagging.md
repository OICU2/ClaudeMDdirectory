---
name: research-timeline-risk-flagging
category: research
description: >
  Analyzes a research project timeline to identify schedule dependencies, bottlenecks, and milestone risks before fieldwork or data collection begins. Use when someone says "review my research timeline," asks about potential delays in their study schedule, wants to stress-test a project plan before launch, shares a research Gantt chart or phase breakdown, or needs to identify what could go wrong before data collection starts.
tags: [research, project-planning, risk-assessment, timelines, fieldwork]
author: community
---

# Research Timeline Risk Flagging

This skill audits a research project timeline to surface schedule dependencies, single points of failure, and milestone risks so teams can intervene before fieldwork or data collection begins.

## Risk Flagging Workflow

1. **Parse the timeline structure**
   - Identify all named phases, milestones, and deliverables
   - Note start/end dates or durations for each item
   - Flag any phases with no stated duration or vague endpoints (e.g., "TBD," "ongoing")

2. **Map dependencies**
   - Identify which phases cannot start until a prior phase completes (sequential dependencies)
   - Identify phases that require external approvals, vendor delivery, or third-party actions
   - Flag any phase where two or more workstreams must converge before progress continues (merge points)

3. **Identify bottlenecks**
   - Find phases assigned to a single person or team with no backup named
   - Flag phases with zero buffer time between completion and the next phase start
   - Identify recruitment, IRB/ethics approval, or procurement steps — these routinely run long

4. **Assess milestone risk by severity**
   - **High risk**: No buffer, external dependency, and no contingency plan stated
   - **Medium risk**: Tight buffer (<1 week), internal dependency on one person, or assumes best-case scenario
   - **Low risk**: Buffer exists, dependency is internal and controllable, or contingency is documented

5. **Check for common research-specific failure patterns**
   - Participant recruitment window shorter than typical for the target population
   - Data cleaning or analysis time underestimated (flag if <20% of total project time)
   - No time allocated for stakeholder review cycles before final deliverables
   - Fieldwork scheduled during known conflict periods (holidays, academic breaks, election seasons)
   - Ethics/IRB approval assumed approved before submission date is even listed

6. **Generate mitigation suggestions**
   - For each flagged risk, propose one concrete mitigation (add buffer, assign backup, resequence, build in checkpoint)
   - Prioritize mitigations by effort-to-impact ratio

## Output Format

Produce a structured risk report with the following sections:

**Timeline Summary**
- Total project duration, number of phases, and key milestones listed in 3–5 bullet points

**Dependency Map**
- Bulleted list of critical path dependencies, formatted as: `[Phase A] → [Phase B] (reason for dependency)`

**Risk Register**
- Table with columns: `Phase | Risk Description | Severity (High/Med/Low) | Suggested Mitigation`
- Every flagged item gets one row; no item should be listed without a mitigation

**Top 3 Priority Risks**
- Numbered list of the three highest-severity risks with a 2-sentence explanation of why each is critical and what to do first

**Overall Timeline Health**
- One-sentence verdict: Green (low risk, proceed), Yellow (moderate risk, address before launch), or Red (high risk, redesign before proceeding)

Keep the risk register scannable. Use plain language. Do not summarize risks so broadly that they become useless — each risk must name the specific phase and specific failure mode.
