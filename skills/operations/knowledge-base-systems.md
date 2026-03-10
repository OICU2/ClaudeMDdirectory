---
name: knowledge-base-systems
description: >
  Builds and maintains internal knowledge bases that capture institutional knowledge, document processes, and preserve organizational expertise. Use when someone says "we need to document what we know," asks about capturing tribal knowledge, wants to build a company wiki, needs to organize internal documentation, or wants to prevent knowledge loss when team members leave.
category: operations
tags: [knowledge-management, documentation, wikis, institutional-knowledge, internal-tools]
author: community
---

# Knowledge Base Systems

This skill designs and implements internal knowledge bases that capture institutional knowledge, structure documentation hierarchically, and create systems for ongoing knowledge capture and maintenance.

## Knowledge Base Design Workflow

### 1. Audit Existing Knowledge
- Identify knowledge holders (subject matter experts, long-tenured employees)
- Catalog existing documentation: wikis, Confluence spaces, shared drives, Notion pages, Slack threads, email chains
- Classify content by type: process docs, decision logs, runbooks, onboarding guides, FAQs, architectural decisions
- Flag critical gaps: undocumented processes, single points of knowledge failure, recent departures

### 2. Define Information Architecture
- Choose a taxonomy: topic-based, team-based, role-based, or lifecycle-based (pick one, be consistent)
- Create a top-level structure with no more than 7 root categories
- Define naming conventions: use `kebab-case` for page slugs, plain language for titles
- Establish ownership rules: every page must have an owner and a review date

### 3. Design the Content Schema
For each knowledge article, enforce this structure:
- **Title**: what this document explains
- **Owner**: name + role
- **Last reviewed**: date
- **Summary**: 2–3 sentences (what, why, who needs it)
- **Content body**: steps, context, examples
- **Related docs**: links to adjacent articles
- **Open questions**: known gaps or disputed information

### 4. Build Knowledge Capture Processes
- Create templates for: runbooks, postmortems, decision records (ADRs), onboarding checklists
- Set triggers for documentation: every incident, every new process, every team decision over $X or risk level Y
- Integrate with existing workflows: require a doc link in pull requests, tickets, or project closures
- Schedule quarterly knowledge audits: review stale pages, reassign orphaned content

### 5. Establish Governance
- Assign a knowledge base owner (not a committee — one person)
- Define stale content policy: pages not reviewed in 6 months get flagged; 12 months get archived
- Create a contribution guide: how to add pages, what quality bar to meet, how to request reviews
- Set search standards: every page needs at least 3 descriptive tags

### 6. Drive Adoption
- Run a "knowledge sprint": dedicate 2–4 hours per team member to document top 3 processes they own
- Make the knowledge base the first answer to repeated questions in Slack/Teams
- Track metrics: monthly active readers, search success rate, page creation velocity, stale page count

## Output Format

Produce a **Knowledge Base Implementation Plan** with these sections:

1. **Current State Assessment** — bullet list of existing assets, gaps, and risks (10–15 items)
2. **Proposed Information Architecture** — indented tree structure showing root categories and 2 levels of subcategories
3. **Content Schema Template** — a ready-to-copy Markdown template for standard knowledge articles
4. **Governance Policy** — a table with columns: Rule | Owner | Cadence | Escalation
5. **30/60/90 Day Roadmap** — three milestone blocks, each with 3–5 specific deliverables
6. **Tool Recommendation** — one primary tool recommendation (Notion, Confluence, GitBook, etc.) with 3-sentence rationale based on team size and tech stack

Length: 600–1000 words. Use headers, bullet points, and tables throughout. No prose paragraphs longer than 3 sentences.