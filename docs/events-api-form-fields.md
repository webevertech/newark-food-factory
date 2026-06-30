# Events API — Form Fields Reference

Endpoint: `POST /api/events`
Source: [src/app/api/events/route.ts](../src/app/api/events/route.ts) · [src/lib/events-store.ts](../src/lib/events-store.ts)

## Request headers

| Header | Value | Required |
|---|---|---|
| `Content-Type` | `application/json` | Yes |
| `x-api-key` | `<EVENTS_API_KEY>` | Only if env var `EVENTS_API_KEY` is set |
| `Authorization` | `Bearer <EVENTS_API_KEY>` | Alternative to `x-api-key` |

## Required fields

| Field | Type | Form input | Validation | Aliases accepted |
|---|---|---|---|---|
| `title` | string | Text input | Non-empty, trimmed | `event_title`, `name` |
| `date` | string | Date input | Any parseable date; normalized to `YYYY-MM-DD` | `event_date`, `start_date` |

## Optional fields

| Field | Type | Form input | Example | Aliases accepted |
|---|---|---|---|---|
| `time` | string | Time / text | `7:00 PM` | `event_time`, `start_time` |
| `venue` | string | Text | `Newark Food Factory` | `location` |
| `address` | string | Text / textarea | `123 Main St, Newark, NJ` | — |
| `description` | string | Textarea | `All-you-can-eat fish fry with live music.` | `summary`, `details` |
| `imageUrl` | string (URL) | URL input | `https://example.com/hero.jpg` | `image_url`, `image` |
| `ticketUrl` | string (URL) | URL input | `https://example.com/tickets` | `ticket_url`, `url`, `link` |
| `category` | string | Select / text | `Dining`, `Music`, `Community` | `type` |
| `price` | string | Text | `$25`, `Free`, `$10–$30` | `ticket_price` |

Note: all string fields are trimmed; empty strings are treated as missing.

## Suggested form layout

1. **Event details**
   - Title * (`title`)
   - Category (`category`) — dropdown: Dining, Music, Community, Private, Other
   - Description (`description`) — textarea

2. **When**
   - Date * (`date`) — `<input type="date">`
   - Time (`time`) — `<input type="time">` or free text

3. **Where**
   - Venue (`venue`)
   - Address (`address`)

4. **Media & links**
   - Image URL (`imageUrl`)
   - Ticket / RSVP URL (`ticketUrl`)
   - Price (`price`)

## Example payload

```json
{
  "title": "Friday Night Fish Fry",
  "date": "2026-05-15",
  "time": "6:00 PM",
  "venue": "Newark Food Factory",
  "address": "123 Main St, Newark, NJ",
  "description": "All-you-can-eat fish fry with live music.",
  "imageUrl": "https://example.com/fish-fry.jpg",
  "ticketUrl": "https://example.com/tickets",
  "category": "Dining",
  "price": "$25"
}
```

## Responses

| Status | Body | Meaning |
|---|---|---|
| `201` | `{ ok: true, event: { id, createdAt, ...fields } }` | Created |
| `400` | `{ error: "Missing required fields", required: ["title", "date"] }` | Missing `title` or `date` |
| `400` | `{ error: "Invalid date — use a parseable date string (e.g. 2026-05-15)" }` | Unparseable `date` |
| `400` | `{ error: "Invalid JSON body" }` | Body wasn't valid JSON |
| `401` | `{ error: "Unauthorized" }` | API key missing/wrong (when enforced) |

## GET (for reference)

`GET /api/events` returns upcoming events only:

```json
{ "count": 2, "events": [ /* PublicEvent[] */ ] }
```

`PublicEvent` shape adds auto-generated `id` (slug + random suffix) and `createdAt` (ISO timestamp) to the fields above.
