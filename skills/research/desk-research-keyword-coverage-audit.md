---
name: desk-research-keyword-coverage-audit
description: >
  Reviews a completed literature or desk research project against a defined keyword taxonomy to identify gaps in search coverage. Use when someone says "check what search terms we missed," asks whether their research covered all relevant keywords, or wants to audit how thoroughly a desk research project queried a topic. Also activates when someone shares a research summary and a keyword list and wants to know which terms were never searched, or when a team needs to validate keyword coverage before publishing findings.
category: research
tags: [research-audit, keyword-taxonomy, literature-review, coverage-analysis, desk-research]
author: community
---

# Desk Research Keyword Coverage Audit

This skill audits a completed desk research or literature review project against a defined keyword taxonomy, surfacing terms that were never queried and assessing the risk that unsearched terms represent material gaps in the findings.

## Audit Workflow

1. **Ingest inputs**: Accept two artifacts from the user — (a) the research project record (can be a summary, search log, bibliography, notes document, or methodology section) and (b) the keyword taxonomy (a list, spreadsheet column, or structured set of terms, synonyms, and related phrases).

2. **Normalize the taxonomy**: Parse the taxonomy into a flat, deduplicated list of discrete search terms. If the taxonomy has hierarchy (parent/child terms, synonyms clusters), preserve that structure for reporting but audit at the individual term level.

3. **Cross-reference terms against the research record**: For each keyword in the taxonomy, search the research record for evidence of use — direct mentions, paraphrased equivalents, or documented search strings. Classify each term as one of:
   - **Covered**: term appears in search logs, methodology notes, or is clearly reflected in cited sources
   - **Partial**: term is touched on indirectly or only one synonym from a cluster was queried
   - **Missing**: no evidence the term was ever searched

4. **Assess gap severity**: For each Missing or Partial term, estimate the risk level (High / Medium / Low) based on:
   - Centrality of the term to the research question
   - Whether sibling or parent terms were covered (mitigating factor)
   - Whether the term represents a distinct concept not proxied by any searched term

5. **Identify patterns**: Group uncovered terms by taxonomy category or theme to surface systematic blind spots (e.g., an entire subdomain was skipped, or a particular synonym family was never queried).

6. **Generate recommendations**: For each High-risk missing term, recommend a specific remediation action — either a targeted follow-up search or a rationale for why the gap can be accepted given existing coverage.

## Output Format

Produce a structured audit report with the following sections:

**Coverage Summary Table**
A table with columns: `Keyword` | `Taxonomy Category` | `Status (Covered / Partial / Missing)` | `Risk Level` | `Notes`. Include every term from the taxonomy.

**Gap Analysis Narrative** (3–6 sentences)
Summarize the overall coverage rate (e.g., "74% of terms were fully covered"), call out the most significant thematic blind spots, and note any taxonomy categories that were systematically underserved.

**High-Priority Remediation List**
A numbered list of missing terms rated High risk, each with a one-line recommended action (e.g., "Search [term] in [suggested database or source type] and integrate findings into Section 3").

**Accepted Gaps Log**
A short list of missing or partial terms judged Low risk, with a one-sentence rationale for why each gap is acceptable (e.g., "Covered by parent term already queried").

**Audit Metadata**
State the total term count, number in each status category, and overall coverage percentage.
