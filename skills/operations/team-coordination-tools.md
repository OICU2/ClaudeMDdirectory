---
name: team-coordination-tools
description: >
  Sets up and optimizes tools that keep distributed teams aligned and productive. Use when someone says "our remote team is struggling to stay in sync," asks about "tools for distributed team coordination," or wants to "improve how our team communicates across time zones." Also activates when someone needs to "set up a team hub" or says "we need better ways to track what everyone is working on."
category: operations
tags: [team-coordination, remote-work, productivity, collaboration, distributed-teams]
author: community
---

# Team Coordination Tools

This skill designs and configures tool stacks and workflows that keep distributed teams aligned, reducing meeting overhead and communication lag.

## Team Coordination Setup Workflow

### 1. Diagnose Current Pain Points
Ask the user to identify their top 3 problems from this list:
- Async communication gaps (messages lost, slow responses)
- Meeting overload or timezone conflicts
- Unclear task ownership or project status
- Knowledge silos or documentation debt
- Onboarding friction for new members

### 2. Map Team Profile
Gather:
- Team size and number of timezones
- Primary work type (engineering, design, ops, etc.)
- Existing tools already in use
- Budget constraints (free vs. paid)
- Synchronous overlap hours per day

### 3. Recommend a Layered Tool Stack
Assign tools across four coordination layers:

**Communication Layer**
- Slack or Discord: set up channels by project, team, and incident type
- Define response-time norms (e.g., 4-hour async window)
- Establish a `#standup-async` channel with a daily template

**Visibility Layer**
- Linear, Jira, or Notion: one source of truth for task status
- Weekly team board review ritual (async, video or doc)
- Personal status updates pinned per person

**Documentation Layer**
- Confluence, Notion, or GitHub Wiki: decision logs, runbooks, meeting notes
- "Last updated" discipline: every doc must show date and owner
- Onboarding doc with tool access, team norms, and key contacts

**Sync Layer**
- Limit recurring meetings to one team sync per week
- Use Loom or Claap for async video updates instead of status meetings
- Define clear criteria for when a meeting is required vs. a doc is enough

### 4. Configure Async Standup Template
Provide this exact template for daily async updates:

```
**Date:** YYYY-MM-DD
**Name:** [Name]

✅ Done yesterday:
- 

🔨 Working on today:
- 

🚧 Blockers:
- 

📣 FYI / needs input:
- 
```

### 5. Define Team Norms Document
Draft a one-page Team Operating Agreement covering:
- Working hours and overlap windows
- Expected response times by channel
- How decisions get made and documented
- Escalation path for urgent issues
- Meeting-free focus blocks

### 6. Set Up a 30-Day Adoption Plan
- Week 1: Migrate communication to new channels, pin norms doc
- Week 2: All tasks enter the visibility tool, async standups begin
- Week 3: First retrospective on what's working
- Week 4: Refine and remove tools that aren't being used

## Output Format

Produce a **Team Coordination Setup Plan** with these sections:

1. **Pain Point Summary** — 3–5 bullet diagnosis of the team's current issues
2. **Recommended Tool Stack** — table with Tool | Layer | Purpose | Free/Paid
3. **Channel & Workspace Structure** — named list of channels or spaces to create with a one-line purpose for each
4. **Async Standup Template** — ready-to-paste markdown block
5. **Team Operating Agreement Draft** — 200–300 word doc covering norms, response times, and meeting rules
6. **30-Day Adoption Checklist** — week-by-week action items, each assigned to a role (Team Lead, All Members, etc.)

Format as structured markdown. Keep each section scannable with headers and bullets. Total length: 600–900 words.