---
name: documentation-systems
description: >
  Builds comprehensive systems for creating, organizing, and maintaining operational documentation. Use when someone says "we need better docs," asks about documentation structure, wants to set up a knowledge base, needs to organize existing documentation, or wants to create documentation standards for a team.
category: operations
tags: [documentation, knowledge-management, operations, writing, organization]
author: community
---

# Documentation Systems

This skill designs and implements end-to-end documentation systems including structure, templates, workflows, and maintenance processes for teams and projects.

## Documentation System Workflow

1. **Assess current state** — Identify existing documentation, gaps, duplication, and pain points. Ask: What docs exist? Who creates them? Who reads them? Where do they live?

2. **Define documentation types** — Categorize what needs to be documented:
   - Runbooks and SOPs (step-by-step operational procedures)
   - Reference docs (APIs, configs, architecture)
   - Onboarding guides (new team member paths)
   - Decision records (ADRs, RFCs, postmortems)
   - Troubleshooting guides (known issues, playbooks)

3. **Design the information architecture** — Create a folder/page hierarchy that matches how people search, not how the org chart looks. Use a flat structure with strong naming over deep nesting.

4. **Build core templates** — Produce ready-to-use templates for each doc type:
   - Include required sections, placeholder text, and inline guidance
   - Add metadata headers: owner, last updated, review date, status
   - Define a consistent naming convention (e.g., `YYYY-MM-DD-topic-type.md`)

5. **Define the authoring workflow** — Specify:
   - Who owns each doc category
   - How docs are created (draft → review → publish)
   - Where docs live (Confluence, Notion, GitHub, etc.)
   - How changes are tracked and announced

6. **Establish maintenance rules** — Set review cadences (quarterly for runbooks, annually for reference), assign doc owners, define what triggers an update (incidents, deploys, org changes), and create a "doc debt" backlog process.

7. **Create a documentation index** — Build a single entry-point index listing all doc categories, owners, and links. This becomes the system's home page.

8. **Write a contributing guide** — One-page guide explaining how anyone on the team adds or updates documentation, including style rules, tone, and the review process.

## Output Format

Produce the following artifacts in order:

1. **System Overview** (2–3 paragraphs) — Describes the documentation philosophy, tools chosen, and how the system fits the team's workflow.

2. **Information Architecture** — A numbered or indented outline showing the full folder/section hierarchy with doc type labels.

3. **Templates** — Full Markdown templates for each doc type identified, with section headers, placeholder text in `[brackets]`, and a metadata block at the top.

4. **Workflow Diagram** (text-based) — A simple ASCII or text flowchart showing the doc lifecycle from creation to retirement.

5. **Maintenance Schedule** — A table listing doc type, review frequency, owner role, and trigger conditions for out-of-cycle updates.

6. **Contributing Guide** — A short, plain-language guide (under 400 words) covering how to write, format, review, and publish documentation.

All output in Markdown. Each artifact under a clear `##` heading. No summaries or meta-commentary between sections.