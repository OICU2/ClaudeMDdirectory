---
name: research-taxonomy-design
description: >
  Builds a hierarchical classification system for organizing research findings, topics, or sources into structured, searchable categories. Use when someone says "I need to organize my research," asks about "categorizing sources or findings," wants to "create a classification system," needs to "structure a literature review," or asks how to "make research findings searchable and organized."
category: research
tags: [taxonomy, classification, research-organization, knowledge-management, categorization]
author: community
---

# Research Taxonomy Design

This skill constructs a multi-level hierarchical taxonomy for organizing research materials, findings, or topics into a structured, navigable classification system that supports retrieval and analysis.

## Taxonomy Construction Workflow

1. **Identify the research domain** — Ask for or infer the subject area, scope, and primary purpose (e.g., literature review, field survey, project knowledge base).
2. **Gather raw material** — Request a sample list of topics, sources, findings, or keywords if not already provided; if none exist, generate representative examples based on the domain.
3. **Extract core themes** — Identify 4–8 top-level categories that represent the broadest, mutually exclusive divisions of the material. Avoid overlap between top-level nodes.
4. **Build subcategories** — For each top-level category, define 2–5 subcategories that partition the parent without redundancy. Aim for 2–3 levels of depth maximum to prevent over-complexity.
5. **Apply consistent naming conventions** — Use noun phrases for category names, keep labels concise (2–4 words), and maintain parallel grammatical structure across siblings at the same level.
6. **Add descriptive scope notes** — Write one sentence per category clarifying what belongs inside it and, where useful, what explicitly does not.
7. **Map existing items** — Assign each provided topic, source, or finding to its correct node in the taxonomy; flag items that fit multiple categories and recommend a primary placement with cross-reference tags.
8. **Identify gaps and anomalies** — Note any uncategorized items that reveal missing nodes; suggest additions or merges to balance the taxonomy.
9. **Validate structure** — Check that every leaf node has a parent, no category is empty, and the hierarchy resolves to a single root.

## Output Format

Produce the taxonomy as an indented outline with the following structure:

```
[Root: Domain Name]
├── 1. Top-Level Category — Scope note (one sentence)
│   ├── 1.1 Subcategory — Scope note
│   │   ├── 1.1.1 Leaf node
│   │   └── 1.1.2 Leaf node
│   └── 1.2 Subcategory — Scope note
├── 2. Top-Level Category — Scope note
│   └── ...
```

Follow the outline with:
- **Item Mapping Table** — Two columns: `Item` and `Assigned Node`, listing every provided source or finding.
- **Cross-Reference List** — Items that span multiple categories with recommended primary node and secondary tags.
- **Gap Report** — Bullet list of suggested new nodes or merges with rationale (one sentence each).

Total length: as long as the material requires; do not truncate mappings or omit scope notes for brevity.
