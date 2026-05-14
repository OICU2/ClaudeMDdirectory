---
name: webhook-payload-schema-documentation
description: >
  Generates structured schema documentation for all inbound and outbound webhook payloads, including field types, required flags, validation rules, and example values. Use when someone says "document my webhooks," asks about "webhook payload structure," wants to "generate schema docs for my API events," needs to "describe webhook fields and types," or is trying to "create webhook integration documentation."
category: developer
tags: [webhooks, schema, documentation, api, payloads]
author: community
---

# Webhook Payload Schema Documentation

This skill generates comprehensive, structured schema documentation for webhook payloads so developers can quickly understand and integrate with inbound and outbound webhook events.

## Workflow

1. **Identify webhook direction** — Determine if the webhook is inbound (received by the system), outbound (sent by the system), or both. Label each payload accordingly.

2. **Extract or infer the event type** — Pull the event name or trigger (e.g., `payment.completed`, `user.created`) from provided code, configs, or descriptions. If missing, ask the user to specify.

3. **Enumerate all fields** — For each payload, list every field present at the top level and nested levels. Use dot notation for nested fields (e.g., `customer.address.zip`).

4. **Document each field with**:
   - **Field name** — exact key as it appears in the payload
   - **Type** — `string`, `integer`, `boolean`, `object`, `array`, `null`, or union types
   - **Required** — `Yes` or `No`
   - **Description** — one sentence explaining purpose and content
   - **Validation rules** — format constraints, enums, min/max, regex patterns if known
   - **Example value** — a realistic, non-placeholder example

5. **Structure by event** — If multiple webhook events exist, create a separate schema block for each event. Group inbound and outbound events into distinct sections.

6. **Note edge cases** — Flag optional fields that become required under specific conditions, polymorphic fields, deprecated fields, and fields with dynamic keys.

7. **Provide a full example payload** — After the field table, include a complete JSON example of a real payload for that event.

## Output Format

Produce one section per webhook event using this structure:

---

### `[event.name]` — [Inbound | Outbound]

**Triggered when:** [one sentence describing the triggering condition]

| Field | Type | Required | Description | Validation | Example |
|-------|------|----------|-------------|------------|---------|
| `id` | string | Yes | Unique identifier for the event | UUID v4 | `"evt_a1b2c3d4"` |
| `created_at` | string | Yes | ISO 8601 timestamp of event creation | ISO 8601 | `"2024-03-15T10:30:00Z"` |
| `data.customer.id` | integer | Yes | Internal customer ID | Positive integer | `10482` |
| `data.amount` | number | Yes | Transaction amount in cents | Min: 0 | `4999` |
| `metadata` | object | No | Arbitrary key-value pairs set by caller | Max 10 keys | `{"order_ref": "PO-992"}` |

**Full Example Payload:**
```json
{
  "id": "evt_a1b2c3d4",
  "created_at": "2024-03-15T10:30:00Z",
  "data": {
    "customer": {
      "id": 10482
    },
    "amount": 4999
  },
  "metadata": {
    "order_ref": "PO-992"
  }
}
```

**Notes:** [List any conditional requirements, deprecated fields, or edge cases.]

---

Repeat this block for every webhook event. Keep field descriptions to one sentence. Use actual example values, never `"string"` or `"value"` as placeholders.
