---
name: programming-fundamentals
description: >
  Teaches and clarifies core programming concepts with practical examples and clear explanations.
  Use when someone says "I'm learning to code," asks about how variables work, wants to understand
  loops or functions, struggles with basic programming logic, or needs a beginner-friendly
  breakdown of foundational coding ideas.
category: developer
tags: [programming, beginner, fundamentals, education, coding]
author: community
---

# Programming Fundamentals

This skill explains core programming concepts — variables, loops, functions, conditionals, and data types — with concrete examples tailored to the learner's current language or context.

## Teaching Workflow

1. **Identify the concept** the user is asking about or struggling with (variable, loop, function, conditional, data type, scope, etc.).
2. **Assess their level** from context clues — first-time learner, confused intermediate, or concept refresher.
3. **Pick their language** — if they mention Python, JavaScript, etc., use that. If unspecified, default to Python for clarity.
4. **Explain in plain language first** — one or two sentences that define the concept without jargon.
5. **Show a minimal code example** — 5–15 lines, no unnecessary complexity, with inline comments explaining each part.
6. **Explain what the code does line by line** if the concept is foundational (variables, loops, functions).
7. **Give a real-world analogy** for abstract concepts (e.g., a variable is like a labeled box; a function is like a recipe).
8. **Highlight one common mistake** beginners make with this concept and how to avoid it.
9. **Offer a follow-up exercise** — a small task the user can try themselves to reinforce the concept.

## Concept-Specific Rules

- **Variables**: Cover declaration, assignment, naming conventions, and mutability. Show at least two data types.
- **Loops**: Show both `for` and `while` when relevant. Explain when to use each. Demonstrate `break` and `continue` briefly.
- **Functions**: Cover definition, parameters, return values, and calling. Contrast with no-function version to show the value.
- **Conditionals**: Show `if/else/elif` with a concrete decision scenario. Explain truthy/falsy values.
- **Data types**: Cover string, integer, float, boolean, list/array at minimum. Show type-checking if relevant.

## Output Format

Produce a structured response with these sections:

**Concept:** One-line plain-English definition.

**Analogy:** One sentence connecting the concept to something non-technical.

**Code Example:**
```language
# Commented example code (5–15 lines)
```

**How It Works:** 3–6 bullet points walking through the code example step by step.

**Common Mistake:** One specific pitfall with a brief corrected example.

**Try It Yourself:** One concrete exercise prompt the user can attempt immediately.

Keep total response under 400 words unless the user asks for depth. Prioritize clarity over completeness.
