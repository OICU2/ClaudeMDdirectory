---
name: ops-onboarding-readiness-checklist
description: >
  Generates a structured, role-specific operational onboarding checklist for new team members joining an organization or team. Use when someone says "we have a new hire starting," asks about onboarding a new team member, wants to prepare a first-week plan, needs to set up access and tools for someone new, or is building an onboarding program for a specific role.
category: operations
tags: [onboarding, operations, checklist, new-hire, team-readiness]
author: community
---

# Ops Onboarding Readiness Checklist

This skill generates a comprehensive, role-specific onboarding checklist covering system access, process walkthroughs, tool training, and milestone tasks for the new hire's first week when a team is preparing for or welcoming a new team member.

## Checklist Generation Workflow

1. **Identify role and context** — Ask for the new hire's role, team, start date, and any known responsibilities if not already provided. If the user provides a job title, infer relevant systems and tools typical for that function.

2. **Gather organizational specifics** — Prompt for (or infer from context):
   - Core tools and software the team uses (e.g., Slack, Jira, Salesforce, AWS)
   - Key stakeholders or team members the new hire should meet
   - Any compliance or security requirements (e.g., SOC 2, HIPAA)
   - Whether the role is remote, hybrid, or on-site

3. **Build the checklist across five mandatory categories:**

   **A. System & Account Access**
   - List every system, platform, and tool the hire needs access to
   - Include who grants access and estimated time to provision
   - Flag any access that requires approval chains or security reviews

   **B. Process & Workflow Walkthroughs**
   - Identify core operational processes the hire must understand to function in their role
   - Assign a walkthrough owner (e.g., manager, peer, IT) for each process
   - Sequence processes from foundational to advanced

   **C. Tool & Platform Training**
   - List required training sessions, documentation, or videos per tool
   - Include internal wikis, LMS links, or vendor training resources where applicable
   - Mark items as blocking (must complete before starting work) vs. non-blocking

   **D. Stakeholder & Team Introductions**
   - List key people the hire should meet in week one with their role and relevance
   - Include cross-functional contacts, not just immediate team members
   - Suggest 30-minute intro meeting format for each

   **E. First-Week Task Milestones**
   - Define 3–5 concrete, achievable deliverables for the first five business days
   - Milestones should demonstrate role comprehension and early contribution
   - Include one milestone that requires collaboration with at least one other team member

4. **Assign ownership and timing** — Every checklist item must have:
   - An owner (new hire, manager, IT, HR, peer buddy, etc.)
   - A target completion day (Day 1, Day 2–3, Day 4–5, Week 2)

5. **Add a readiness gate** — End the checklist with a "Readiness Sign-Off" section listing 3–5 conditions the manager should verify before the new hire operates independently.

## Output Format

Produce a structured Markdown checklist with the following layout:

```
# Onboarding Readiness Checklist: [Role Title]
**Start Date:** [Date or TBD]
**Team:** [Team Name]
**Onboarding Buddy/Manager:** [Name or TBD]

---

## ✅ System & Account Access
| System/Tool | Access Type | Owner | Target Day | Status |
|-------------|-------------|-------|------------|--------|
| ...         | ...         | ...   | ...        | [ ]    |

## ✅ Process & Workflow Walkthroughs
- [ ] [Process name] — Owner: [Name] — Day: [X]
...

## ✅ Tool & Platform Training
- [ ] [Tool] — [Training resource/link] — Blocking: Yes/No — Day: [X]
...

## ✅ Stakeholder & Team Introductions
- [ ] Meet [Name], [Title] — Purpose:
