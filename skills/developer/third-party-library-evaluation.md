---
name: third-party-library-evaluation
description: >
  Systematically evaluates third-party libraries across key dimensions to produce a justified, actionable selection recommendation. Use when someone says "help me choose a library for", asks "which package should I use for", wants to "compare libraries", needs to "evaluate dependencies", or is "deciding between npm/pip/gem packages".
category: developer
tags: [libraries, dependencies, package-management, evaluation, decision-making]
author: community
---

# Third-Party Library Evaluation

Evaluates candidate libraries across maintenance status, bundle size, license compatibility, security history, and API ergonomics to produce a clear, justified selection recommendation.

## Evaluation Workflow

1. **Identify candidates**: Extract the libraries being compared from the request. If only one is mentioned, proactively surface 1-2 common alternatives for comparison.

2. **Score each library across five dimensions** (rate each 1-5, note key evidence):

   - **Maintenance Health**: Last commit date, release frequency, open vs. closed issue ratio, number of active maintainers, GitHub stars trajectory. Flag if last release > 12 months ago.
   - **Bundle/Package Size**: Installed size, tree-shakability, peer dependency weight. Compare relative impact on final build.
   - **License Compatibility**: Identify the license (MIT, Apache-2, GPL, etc.). Flag copyleft licenses, dual-licensing schemes, or commercial-use restrictions relative to the user's stated or implied project type.
   - **Security History**: Known CVEs, time-to-patch record, whether the package has been involved in supply-chain incidents. Use npm audit data, Snyk, or OSV as reference points.
   - **API Ergonomics**: Quality of documentation, TypeScript support, intuitive method naming, flexibility vs. convention tradeoffs, learning curve.

3. **Weight scores by context**: If the user mentions a production app, weight security and maintenance higher. If prototyping, weight ergonomics higher. If bundle size is cited as a concern, weight it highest.

4. **Identify disqualifying factors**: Any single critical failure (e.g., abandoned project, GPL license in a proprietary codebase, active unpatched CVE) should be called out as a hard blocker regardless of other scores.

5. **Form a recommendation**: Select the winner based on weighted scores, disqualifiers, and stated project context. If scores are too close to call definitively, explain the decision fork clearly.

## Output Format

Produce a structured evaluation in this exact layout:

```
## Library Evaluation: [use case]

### Candidates
- Library A (vX.X.X)
- Library B (vX.X.X)

### Scorecard (1–5)

| Dimension         | Library A | Library B |
|-------------------|-----------|-----------|
| Maintenance       | 4         | 2         |
| Bundle Size       | 3         | 5         |
| License           | 5         | 5         |
| Security History  | 4         | 3         |
| API Ergonomics    | 4         | 4         |
| **Weighted Total**| **20**    | **19**    |

### Key Findings

**Library A**
- ✅ [Strength with specific evidence]
- ⚠️ [Concern with specific evidence]

**Library B**
- ✅ [Strength with specific evidence]
- ❌ [Disqualifier or significant weakness]

### Recommendation

**Use [Library Name].**

[2-4 sentences explaining why, referencing the highest-weighted factors and any disqualifiers. Include one concrete caveat or condition under which this recommendation changes.]

### Install
\`\`\`bash
[install command]
\`\`\`
```

Keep the full output under 400 words. Omit dimensions where no meaningful differentiation exists between candidates.
