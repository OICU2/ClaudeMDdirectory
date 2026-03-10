---
name: ai-api-integration
description: >
  Helps developers integrate AI APIs from OpenAI, Anthropic, and HuggingFace into their applications.
  Use when someone asks about connecting to an AI API, wants to add AI features to their app,
  needs help with API authentication or rate limits, wants to compare AI providers, or is
  troubleshooting AI API errors.
category: developer
tags: [ai, api, openai, anthropic, huggingface, integration]
author: community
---

# AI API Integration

Guides developers through integrating OpenAI, Anthropic, and HuggingFace APIs into applications with working code, auth setup, error handling, and provider comparisons.

## Integration Workflow

1. **Identify the provider and use case**
   - Ask or infer which provider (OpenAI, Anthropic, HuggingFace) and task type (chat, completion, embeddings, image, classification)
   - If unclear, recommend based on use case: OpenAI for general chat/completion, Anthropic for long-context/safety-critical tasks, HuggingFace for open-source or specialized models

2. **Set up authentication**
   - Show how to store API keys in environment variables (never hardcoded)
   - Provide `.env` example and how to load with `dotenv` or equivalent
   - OpenAI: `OPENAI_API_KEY`, Anthropic: `ANTHROPIC_API_KEY`, HuggingFace: `HUGGINGFACE_API_TOKEN`

3. **Install dependencies**
   - OpenAI: `npm install openai` or `pip install openai`
   - Anthropic: `npm install @anthropic-ai/sdk` or `pip install anthropic`
   - HuggingFace: `pip install huggingface_hub transformers` or use Inference API via `fetch`

4. **Write the integration code**
   - Provide a minimal working example for the identified task
   - Include proper async/await patterns
   - Show request structure: model selection, prompt/messages format, max tokens, temperature
   - Add response parsing to extract the actual text/data from the response object

5. **Implement error handling**
   - Wrap API calls in try/catch
   - Handle specific errors: rate limits (429) with exponential backoff, auth errors (401/403), model not found (404), context length exceeded
   - Show retry logic for transient failures

6. **Optimize for production**
   - Add streaming for long responses when applicable
   - Show how to set timeout limits
   - Demonstrate request batching for HuggingFace or embeddings use cases
   - Include cost estimation guidance (token counting before sending)

## Provider-Specific Rules

- **OpenAI**: Use `messages` array with `role: "system" | "user" | "assistant"`, reference `gpt-4o` or `gpt-4o-mini` as defaults
- **Anthropic**: Use `messages` array, separate `system` parameter, reference `claude-opus-4-5` or `claude-haiku-4-5` as defaults; max_tokens is required
- **HuggingFace**: Distinguish between hosted Inference API (HTTP calls) vs local `transformers` pipeline; show both options

## Output Format

Produce a response with these sections in order:

**1. Setup block** — shell commands to install packages and a `.env` snippet

**2. Working code example** — complete, runnable snippet (15–40 lines) in the user's language (default to Python if unspecified), with inline comments on key lines

**3. Response parsing** — show exactly how to extract the text/result from the API response object

**4. Error handling snippet** — 10–15 line try/catch or try/except block covering the 2–3 most common failure modes

**5. Quick notes** — 2–4 bullet points on gotchas, cost tips, or model selection advice specific to the chosen provider

Use code blocks with language tags. Keep prose minimal — let the code explain itself.
