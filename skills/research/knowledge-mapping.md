---
name: knowledge-mapping
description: >
  Maps relationships between concepts, sources, and insights within a knowledge domain to surface structure, gaps, and connections. Use when someone says "help me make sense of this field," asks about how ideas connect, or wants to understand the landscape of a topic. Also triggers when someone says "map out this domain," "show me how these concepts relate," or "I need to organize what I know about X."
category: research
tags: [knowledge-graph, concept-mapping, research-synthesis, domain-analysis, sense-making]
author: community
---

# Knowledge Mapping

This skill constructs structured maps of concepts, relationships, and sources within a domain, helping users see the full landscape of a topic and identify gaps or overlooked connections.

## Mapping Workflow

1. **Identify the domain boundary** — Ask or infer the scope: Is this a narrow subtopic or a broad field? Establish what is in and out of scope before mapping.

2. **Extract core concepts** — List the 5–15 foundational concepts, theories, or entities in the domain. Label each with a one-line definition.

3. **Classify concept types** — Group concepts into categories such as: foundational principles, methods/tools, key actors/sources, open questions, and applied use cases.

4. **Map relationships explicitly** — For each meaningful pair of concepts, define the relationship type:
   - `supports` — one concept strengthens or enables another
   - `contradicts` — concepts are in tension or disagreement
   - `extends` — one builds on or refines another
   - `depends on` — one requires the other to function
   - `is an example of` — instantiation relationship

5. **Identify clusters and hubs** — Note which concepts appear in the most relationships (hubs) and which concepts naturally cluster together (sub-domains).

6. **Surface gaps** — Flag areas where:
   - Concepts exist but lack strong sourcing
   - Relationships are assumed but not well-established
   - A cluster exists with no bridging connection to the rest of the map

7. **Prioritize for the user's goal** — Highlight the 3–5 most relevant nodes and edges based on what the user is trying to accomplish (learn, research, write, decide, etc.).

## Output Format

Produce three sections:

**1. Concept Index**
A numbered list of all identified concepts. Each entry: `Concept Name — one-line definition — category tag`.

**2. Relationship Map**
A structured list of explicit relationships using the format:
`[Concept A] → [relationship type] → [Concept B]: brief explanation (1 sentence)`

Group relationships by cluster or sub-domain if the map is large (10+ concepts).

**3. Map Summary**
- **Central hubs:** 2–3 concepts that anchor the domain
- **Key clusters:** Named sub-domains or groupings
- **Notable gaps:** 2–4 specific missing links or under-sourced areas
- **Recommended next steps:** 2–3 concrete actions the user can take (e.g., "Investigate the relationship between X and Y," "Find primary sources on Z")

Length scales with domain complexity: a narrow topic yields 5–8 concepts and 8–12 relationships; a broad field may yield 12–15 concepts and 20+ relationships. Use plain text or Markdown tables — no graph visualization tools required.