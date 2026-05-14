---
name: boilerplate-clause-library-builder
description: >
  Extracts reusable boilerplate passages from existing documents and organizes them into a structured, searchable clause library. Use when someone says "build me a clause library," asks to "catalog the standard language from these documents," wants to "extract reusable sections from contracts," needs to "organize boilerplate passages by type," or says "create a template library from these files." Handles legal documents, contracts, policies, proposals, and any text-heavy documents containing repeatable language.
category: writing
tags: [boilerplate, clause-library, document-analysis, templates, legal-writing]
author: community
---

# Boilerplate Clause Library Builder

Analyzes one or more provided documents to extract, deduplicate, and catalog reusable passages into a structured library organized by content type and use case.

## Extraction and Cataloging Workflow

1. **Scan for repeatable language**: Identify passages that appear verbatim or near-verbatim across documents, standard legal/policy phrasing, definitions, disclaimers, indemnification language, warranties, limitation of liability clauses, recitals, signature blocks, and any section a drafter would copy without modification.

2. **Classify each clause** by:
   - **Content type**: Definition, Warranty, Indemnification, Limitation of Liability, Confidentiality, Payment Terms, Termination, Governing Law, Force Majeure, Disclaimer, Recital, Signature Block, Notice Provision, Amendment Clause, or Other.
   - **Use case context**: What document type or situation this clause belongs in (e.g., SaaS agreement, employment contract, NDA, RFP response, privacy policy).
   - **Tone/formality level**: Formal legal, semi-formal business, plain language.

3. **Deduplicate**: When multiple near-identical versions of a clause exist, keep the cleanest version as the primary entry and note significant variants as alternates.

4. **Tag each clause** with 3–6 keywords for searchability (e.g., `liability`, `cap`, `damages`, `SaaS`).

5. **Flag gaps or risks**: Note any clauses that appear incomplete, jurisdiction-specific, or likely outdated.

6. **Generate a summary index** listing all extracted clauses with their ID, title, content type, and use case.

## Output Format

Produce a structured clause library in the following format:

---

### CLAUSE LIBRARY INDEX

| Clause ID | Title | Content Type | Use Case | Tags |
|-----------|-------|--------------|----------|------|
| CL-001 | Limitation of Liability — SaaS | Limitation of Liability | SaaS Agreement | liability, cap, damages, SaaS |
| CL-002 | ... | ... | ... | ... |

---

### CLAUSE ENTRIES

**CL-001 — Limitation of Liability (SaaS)**
- **Content Type**: Limitation of Liability
- **Use Case**: SaaS subscription agreements
- **Formality**: Formal legal
- **Tags**: `liability`, `cap`, `damages`, `SaaS`, `indirect`
- **Source**: [Document name or "Multiple documents"]
- **Clause Text**:
  > [Exact extracted text here]
- **Alternates**: [List variant wordings, if any]
- **Notes**: [Any flags, jurisdiction notes, or usage guidance]

---

Repeat the CLAUSE ENTRIES block for every extracted clause. At the end, include a **Gaps & Recommendations** section noting missing standard clauses for the document type, clauses requiring legal review, and suggestions for additional library categories based on the document set provided.
