---
name: academic-citation-audit
description: >
  Scans a research document to identify missing, malformed, or inconsistent citations and produces a corrected reference list in the requested citation style. Use when someone says "check my citations," asks to "audit my references," wants to "fix my bibliography," needs to "find missing citations in my paper," or asks to "format my references in APA/MLA/Chicago." Supports APA 7th, MLA 9th, Chicago 17th, IEEE, and Harvard styles.
category: research
tags: [citations, bibliography, academic-writing, references, formatting]
author: community
---

# Academic Citation Audit

Audits a research document for citation errors, inconsistencies, and omissions, then outputs a corrected and fully formatted reference list in the specified style.

## Citation Audit Workflow

1. **Identify the target style** — Confirm the citation style (APA, MLA, Chicago, IEEE, Harvard). If unspecified, infer from existing citations or ask before proceeding.

2. **Extract all in-text citations** — Locate every in-text citation or footnote marker in the document. List them with their location (paragraph or sentence context).

3. **Extract all reference list entries** — Pull every entry from the bibliography, Works Cited, or References section.

4. **Cross-reference in-text vs. reference list:**
   - Flag any in-text citation with no matching reference list entry (missing reference).
   - Flag any reference list entry with no matching in-text citation (orphaned reference).

5. **Check each reference for formatting errors:**
   - Missing required fields (author, year, title, source, DOI/URL, publisher, volume, issue, pages)
   - Incorrect field order for the target style
   - Wrong punctuation, italicization, or capitalization rules per style guide
   - Inconsistent author name formatting (Last, First vs. First Last)
   - Missing or malformed DOIs/URLs

6. **Check for internal consistency:**
   - Author names spelled the same across in-text and reference list
   - Publication years matching between in-text citations and references
   - Duplicate entries for the same source
   - Inconsistent date formats

7. **Generate corrected entries** — Rewrite each malformed or incomplete reference in the correct style format using the information available. If a field is unrecoverable from context, mark it with `[MISSING: field_name]`.

8. **Sort the final reference list** — Alphabetically by author last name (APA, MLA, Chicago, Harvard) or in order of first citation (IEEE).

## Output Format

Produce three clearly labeled sections:

**Section 1 — Audit Summary**
A bullet list of all issues found, organized by type:
- Missing references (in-text cites with no reference entry)
- Orphaned references (reference entries with no in-text cite)
- Formatting errors per entry (cited by author/number)
- Consistency issues

Example:
- MISSING REFERENCE: (Johnson, 2019) cited in paragraph 4 — no matching entry found
- FORMATTING ERROR: Smith (2021) — missing DOI; journal title not italicized
- ORPHANED REFERENCE: Brown et al. (2017) appears in reference list but is never cited

**Section 2 — Corrected Reference List**
The complete, corrected reference list formatted exactly per the target style. Each corrected entry is preceded by a one-line diff note if it was changed:
```
[CORRECTED: added DOI, italicized journal title]
Smith, J. A., & Lee, K. (2021). Neural pathways in decision fatigue. *Journal of Cognitive Neuroscience*, 33(4), 112–130. https://doi.org/10.xxxx/xxxxx
```

**Section 3 — Unresolvable Issues**
A numbered list of references where required information could not be inferred or recovered, with specific missing fields noted and a recommended action for the user.
