---
name: grey-literature-source-inventory
description: >
  Builds a structured inventory of non-academic sources including government reports, white papers,
  think tank publications, and industry documents relevant to a research topic. Use when someone
  wants to find non-peer-reviewed sources, asks about grey literature for a topic, needs to map
  industry or policy publications, wants to supplement academic research with practitioner sources,
  or is looking for government data and reports on a subject.
category: research
tags: [grey-literature, research, source-inventory, policy, industry-reports]
author: community
---

# Grey Literature Source Inventory

This skill systematically identifies and catalogs non-academic sources across government, industry, think tanks, and NGOs for a given research topic, producing a structured inventory Claude uses when a user needs to go beyond peer-reviewed literature.

## Source Discovery Workflow

1. **Clarify the research topic and scope**
   - Confirm the subject area, geographic focus (local, national, international), and time range
   - Identify the purpose: policy analysis, market research, advocacy, academic supplementation, etc.

2. **Map relevant source categories**
   For the given topic, identify which of the following are applicable:
   - **Government sources**: departmental reports, agency publications, legislative documents, statistical databases, regulatory filings
   - **Intergovernmental bodies**: UN agencies, WHO, World Bank, OECD, EU institutions
   - **Think tanks and policy institutes**: ideologically diverse; note organizational orientation
   - **Industry associations and trade bodies**: sector-specific reports, position papers, market data
   - **Corporate publications**: annual reports, sustainability reports, white papers
   - **NGOs and advocacy organizations**: reports, briefings, campaign documents; note organizational stance
   - **Professional associations**: standards documents, practitioner guidelines, workforce data
   - **News organizations and investigative outlets**: long-form reports, data journalism

3. **For each source category, specify**
   - Named organizations or bodies most likely to publish on this topic
   - Likely document types (report, dataset, white paper, policy brief, testimony)
   - Where to search or access them (specific databases, portals, or URLs where known)
   - Suggested search terms tailored to that source type

4. **Flag credibility and bias considerations**
   - Note funding sources or organizational affiliations where relevant
   - Distinguish between primary data producers and secondary synthesizers
   - Flag sources with known advocacy positions that may shape findings

5. **Identify gaps**
   - Note topic dimensions likely underrepresented in grey literature
   - Suggest complementary academic databases or data sources to fill gaps

## Output Format

Produce a structured inventory with the following sections:

**Topic Summary** (2–3 sentences defining the scope as interpreted)

**Source Inventory Table**
For each source category, provide a table with columns:
| Organization/Body | Document Type | Access Point | Notes on Bias/Credibility |

Group rows by category (Government, IGO, Think Tank, Industry, NGO, Professional, Media).

**Top 10 Priority Sources**
A ranked list of the 10 most valuable specific sources or repositories to consult first, with a one-line rationale for each.

**Search Strategy Tips**
5–8 bullet points with concrete search strategies, including specific databases (e.g., OpenDOAR, ReliefWeb, ProQuest Policy File, government open data portals) and Boolean search term examples.

**Known Gaps**
A short bulleted list of what grey literature is unlikely to cover well for this topic and where to turn instead.

Total length: 500–900 words. Use tables, headers, and bullets throughout. Avoid prose paragraphs except in the Topic Summary.
