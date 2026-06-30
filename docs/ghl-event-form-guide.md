# GHL Event Form — Setup Guide (Non-Technical)

Use this when building the event submission form in GoHighLevel (GHL). Add each row below as a field in the GHL form builder. The **Field Name** on the right must match exactly — that's what the website API expects.

---

## Fields to add (in this order)

### 1. Event Title *(required)*
- **Label:** `Event Title`
- **Type:** Single Line Text
- **Placeholder:** `e.g. Friday Night Fish Fry`
- **Required:** Yes
- **Field Name / Key:** `title`

### 2. Description
- **Label:** `Event Description`
- **Type:** Multi Line Text (textarea)
- **Placeholder:** `What is the event about?`
- **Required:** No
- **Field Name / Key:** `description`

### 3. Ticket / RSVP Link
- **Label:** `Ticket or RSVP Link`
- **Type:** Single Line Text (URL)
- **Placeholder:** `https://…`
- **Required:** No
- **Field Name / Key:** `ticketUrl`

### 4. Category
- **Label:** `Category`
- **Type:** Dropdown
- **Options:** `Dining`, `Music`, `Community`, `Private`, `Other`
- **Required:** No
- **Field Name / Key:** `category`

### 5. Price
- **Label:** `Price`
- **Type:** Single Line Text
- **Placeholder:** `$25, Free, $10–$30`
- **Required:** No
- **Field Name / Key:** `price`

### 6. Public Event?
- **Label:** `Is this a public event?`
- **Type:** Radio / Yes-No toggle (or Dropdown)
- **Options:** `Yes`, `No`
- **Default:** `Yes`
- **Help text:** `Public events show on the website. Private events are hidden from the public list.`
- **Required:** Yes
- **Field Name / Key:** `isPublic`

---

## After the form is built — connect it to the website

In GHL, add a **Webhook** action (Workflow → Trigger: Form Submitted → Action: Webhook) with:

- **URL:** `https://YOUR-DOMAIN.com/api/events`
- **Method:** `POST`
- **Headers:**
  - `Content-Type` → `application/json`
  - `x-api-key` → *(the key from `EVENTS_API_KEY` env var — ask dev)*
- **Body:** Map each form field to its Field Name/Key above. Example:

```json
{
  "title": "{{form.title}}",
  "description": "{{form.description}}",
  "ticketUrl": "{{form.ticketUrl}}",
  "category": "{{form.category}}",
  "price": "{{form.price}}",
  "isPublic": "{{form.isPublic}}"
}
```

*(Exact merge-tag syntax varies by GHL version — use whatever the workflow builder offers for "form field value".)*

---

## Quick checklist before going live

- [ ] `title` and `isPublic` are marked Required in GHL
- [ ] Field Names/Keys match **exactly** (case-sensitive): `title`, `description`, `ticketUrl`, `category`, `price`, `isPublic`
- [ ] Webhook URL points to the correct domain + `/api/events`
- [ ] `x-api-key` header is set (if the site requires it)
- [ ] Submit a test event — check it appears on the website's events page
