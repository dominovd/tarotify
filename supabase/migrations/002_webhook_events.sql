-- 002_webhook_events.sql
--
-- Idempotency table for Paddle (and other) webhook deliveries.
-- The webhook handler INSERTs the event ID at the start of processing;
-- a UNIQUE constraint blocks duplicate processing on retry.
--
-- Paddle sends notification IDs prefixed "ntf_..." in the webhook body.
-- It retries failed deliveries for ~3 days, so dedup must persist that long.
--
-- This table is server-only — no RLS policy needed because only the
-- service-role client touches it.
--
-- SAFETY NOTE: this migration DROPs the existing webhook_events table.
-- That's fine before any webhook traffic — the table is a dedup log only,
-- no business data. Re-running after Paddle is live would lose dedup state
-- (3-day window) which could allow ONE duplicate delivery to be reprocessed.
-- After the first production Paddle traffic, do NOT re-run this migration.

drop table if exists public.webhook_events;

create table public.webhook_events (
  id text primary key,                              -- e.g. "ntf_01jabc..."
  provider text not null check (provider in ('paddle')),
  event_type text not null,                         -- e.g. "subscription.created"
  payload jsonb,                                    -- full raw event for debugging
  processed_at timestamptz not null default now()
);

create index webhook_events_provider_processed_at_idx
  on public.webhook_events(provider, processed_at desc);
create index webhook_events_event_type_idx
  on public.webhook_events(event_type);

-- No RLS policies — server-side only.
alter table public.webhook_events enable row level security;
-- Explicit deny: no policies means no public access. RLS on + no policy = nothing reads/writes via anon/auth role.
