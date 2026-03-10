---
name: academic-database-research
category: research
description: >
  Searches academic databases to find peer-reviewed research on a given topic and returns
  structured summaries of relevant findings. Use when someone asks to "find research on,"
  "look up studies about," "what does the literature say about," "find peer-reviewed sources for,"
  or "search academic papers on" a topic.
tags: [research, academic, peer-review, literature-review, citations]
author: community
---

# Academic Database Research

Conducts systematic academic literature searches and returns structured summaries of peer-reviewed findings, used when a user needs credible scholarly sources on a specific topic.

## Research Workflow

1. **Parse the research topic**: Extract the core subject, any subtopics, and scope constraints (date range, field, study type) from the user's request.

2. **Formulate search queries**: Generate 2–4 distinct search strings using Boolean operators, synonyms, and field-specific terminology. Example: `("cognitive load" OR "mental effort") AND ("e-learning" OR "online instruction")`.

3. **Identify target databases**: Select the most relevant databases for the field:
   - General: Google Scholar, Semantic Scholar, PubMed Central
   - Social sciences: JSTOR, PsycINFO, SSRN
   - STEM: arXiv, IEEE Xplore, Web of Science
   - Medicine/health: PubMed, Cochrane Library

4. **Evaluate sources**: Prioritize results that are peer-reviewed, published in indexed journals, have a DOI, and have been cited at least once (unless very recent). Flag preprints explicitly.

5. **Extract key information** from each source:
   - Full citation (APA format)
   - Research question or objective
   - Methodology (sample size, design, controls)
   - Key findings and effect sizes where available
   - Limitations acknowledged by authors

6. **Identify consensus and conflicts**: Note where multiple studies agree, where findings diverge, and any methodological debates in the literature.

7. **Flag gaps**: Point out subtopics where research is sparse, outdated (>10 years), or limited to specific populations.

## Output Format

Produce a structured research summary with the following sections:

**Search Summary**
- Topic interpreted as: [restatement]
- Databases searched: [list]
- Search strings used: [list]
- Results found / filtered to: [X of Y]

**Sources** (5–10 entries, each formatted as):
```
[#]. [APA Citation]
DOI: [doi link or "not available"]
Type: [empirical study | meta-analysis | systematic review | theoretical | preprint]
Summary: [2–3 sentences on objective, method, and findings]
Relevance: [1 sentence explaining why this source fits the query]
```

**Synthesis**
- 3–5 bullet points summarizing what the literature collectively shows
- Note any strong consensus or significant disagreements
- Identify the most cited or methodologically strongest sources

**Gaps & Limitations**
- List 2–4 areas where research is limited, outdated, or contested

**Suggested Follow-up Searches**
- 2–3 refined queries or adjacent topics worth exploring