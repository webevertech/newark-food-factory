# Events storage — MySQL and the JSON fallback

The events store has two backends. Which one runs is decided at runtime by the
environment, with no code change:

| Condition | Backend | Where data lives |
|---|---|---|
| `DATABASE_URL` set (or `DB_HOST` + `DB_USER` + `DB_NAME`) | MySQL | `events` table |
| Neither set | JSON file | `$EVENTS_DATA_DIR/events.json` |

Source: [src/lib/events-db.ts](../src/lib/events-db.ts) ·
[src/lib/events-store.ts](../src/lib/events-store.ts)

## Why MySQL

The JSON file is read, modified and rewritten on every write. Two webhook posts
arriving at the same moment could overwrite each other. MySQL writes are a single
atomic `INSERT ... ON DUPLICATE KEY UPDATE` on the primary key, so simultaneous
posts cannot lose data. phpMyAdmin also gives a free admin view for editing or
deleting events.

## Setup on Hostinger

1. **hPanel → Databases → Management.** Create a database and user. Hostinger
   prefixes both with your account id, so `events` becomes `u646143784_events`.
   Do **not** use Remote MySQL — the app connects over `localhost`, and that
   screen would expose the database to the internet.
2. **hPanel → Environment variables.** Add:

   ```
   DATABASE_URL=mysql://u646143784_events:PASSWORD@localhost:3306/u646143784_events
   ```

   If the password contains `@ : / # % ?` it must be percent-encoded, so prefer a
   password with only letters and digits.
3. Save. Hostinger redeploys and the app picks it up.

No manual SQL is required — the table is created on first use. The statement it
runs is equivalent to:

```sql
CREATE TABLE IF NOT EXISTS events (
  id          VARCHAR(80)   NOT NULL PRIMARY KEY,
  title       VARCHAR(200)  NOT NULL,
  event_date  DATE          NOT NULL,
  time_label  VARCHAR(300)  NULL,
  start_time  CHAR(5)       NULL,
  end_time    CHAR(5)       NULL,
  venue       VARCHAR(300)  NULL,
  address     VARCHAR(300)  NULL,
  description TEXT          NULL,
  ticket_url  VARCHAR(2048) NULL,
  category    VARCHAR(300)  NULL,
  price       VARCHAR(300)  NULL,
  calendar_id VARCHAR(300)  NULL,
  created_at  DATETIME      NOT NULL,
  updated_at  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_event_date (event_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## Migration from the JSON file

The first time the app connects and finds the table empty, it imports whatever
`$EVENTS_DATA_DIR/events.json` holds and logs how many rows it copied. This runs
once. The JSON file is left untouched as a backup.

## Behaviour notes

- `created_at` is preserved when an event is re-posted with the same id; every
  other column is replaced.
- Times are stored as `HH:MM` strings and dates as `DATE`, both timezone-free, so
  no implicit conversion happens between the driver and the API.
- Emoji and accents are safe — the table and connection are `utf8mb4`.
- `mysql2` is listed in `serverExternalPackages` in
  [next.config.ts](../next.config.ts) because Next 16 does not externalize it
  automatically.
- The connection pool is capped at 4 (override with `DB_POOL_SIZE`) to stay
  within shared-hosting connection limits, and is cached across dev reloads.

## Useful queries

```sql
SELECT id, title, event_date, time_label FROM events ORDER BY event_date;
DELETE FROM events WHERE id = 'the-id-to-remove';
DELETE FROM events WHERE event_date < CURDATE() - INTERVAL 1 YEAR;
```
