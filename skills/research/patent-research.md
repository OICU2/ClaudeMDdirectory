---
name: patent-research
description: >
  Searches and analyzes patent databases to map the IP landscape, identify prior art, and surface innovation opportunities. Use when someone asks about patent landscape analysis, wants to check if an idea is patentable, needs to find prior art for an invention, is assessing freedom to operate, or wants to understand who owns key patents in a technology space.
category: research
tags: [patents, ip, innovation, prior-art, competitive-intelligence]
author: community
---

# Patent Research Skill

This skill guides Claude through structured patent database research to assess IP landscapes, identify relevant prior art, evaluate patentability, and uncover whitespace opportunities.

## Research Workflow

1. **Clarify the invention or technology scope**
   - Extract the core technical concept, key components, and functional claims
   - Identify the relevant technology domain (IPC/CPC classification codes if known)
   - Determine the research goal: prior art search, freedom-to-operate, competitor mapping, or whitespace analysis

2. **Define search parameters**
   - Identify key terms: technical terms, synonyms, trade names, and inventor jargon
   - Specify jurisdiction scope (US, EP, WO/PCT, CN, JP, or global)
   - Set date range (full history vs. last 5–10 years for active patents)
   - Identify known competitors or inventors to search by assignee/inventor

3. **Conduct structured searches across databases**
   - **Google Patents**: Broad keyword and semantic search, good for global coverage
   - **USPTO Patent Full-Text Database**: US grants and applications with full text
   - **Espacenet**: European and international patents with IPC classification
   - **Lens.org**: Open-access, supports Boolean and citation-graph searches
   - **PatSnap / Derwent** (if available): Analytics and clustering

4. **Analyze retrieved patents**
   - Read independent claims carefully — these define the legal scope
   - Note filing date, priority date, assignee, and expiration date
   - Flag patents that are expired (potential freedom), active (potential risk), or pending (monitor)
   - Identify claim limitations that might distinguish a new invention

5. **Map the landscape**
   - Cluster patents by technical approach, assignee, and time period
   - Identify dominant players and their filing strategies
   - Note citation patterns to find foundational patents
   - Surface gaps or underserved technical areas (whitespace)

6. **Assess patentability or freedom to operate**
   - For patentability: identify closest prior art and articulate how the invention differs
   - For FTO: flag claims that could read on the product or process in question
   - Note any design-arounds or claim limitations that create clearance

## Output Format

Produce a structured report with these sections:

**Patent Landscape Report**

- **Research Goal**: One sentence stating what was assessed
- **Technology Scope**: Brief description of the technology and search parameters used
- **Key Search Queries**: List of 3–6 Boolean or keyword queries used
- **Notable Patents Found**: Table with columns — Patent Number | Title | Assignee | Filing Date | Status | Relevance Summary
- **Landscape Summary**: 2–4 paragraphs covering dominant players, technical approaches, filing trends, and active vs. expired coverage
- **Whitespace / Opportunities**: Bulleted list of gaps or underexplored directions
- **Risk Flags**: Any patents with broad active claims that warrant attorney review
- **Recommended Next Steps**: 2–4 specific actions (e.g., consult a patent attorney, file provisional, monitor specific applications)

Length: 400–800 words excluding the patent table. Use plain language; define legal or technical terms on first use. Always include a disclaimer that this is research assistance, not legal advice.