-- ════════════════════════════════════════════════════════════════════════════
-- TarotAxis — Migration 004: Trends Pipeline
-- Date: 2026-05-23
-- Apply via: Supabase Dashboard → SQL Editor → "New query" → paste → Run
-- ════════════════════════════════════════════════════════════════════════════
--
-- Adds the data layer for the public /trends + /es/tendencias pages:
--
--   1. ai_usage.cards  — jsonb column storing which cards were drawn for
--      each AI reading call. Forward-only: rows logged before this
--      migration have no card data, so historical trends are sourced from
--      saved_readings (which has had `cards jsonb` since migration 001).
--
--   2. trends_snapshot — daily-computed aggregations (top cards 7d / 30d /
--      all-time, trending deltas, popular sources). The /trends pages
--      read the latest row. The compute-trends cron writes a new row each
--      day so the page renders instantly and consistently between visits.
--
-- IDEMPOTENT: `add column if not exists` / `create table if not exists`.
-- Safe to re-run.
-- ════════════════════════════════════════════════════════════════════════════


-- ─── ai_usage.cards ────────────────────────────────────────────────────────
-- Shape: [{ "slug": "the-fool", "reversed": false, "position": "Past" }, ...]
-- Nullable: pre-existing rows have NULL, and we still tolerate missing
-- card metadata on the application side. Cards on logged rows are used
-- only for trend aggregation, never user-identifying.
alter table public.ai_usage
  add column if not exists cards jsonb;


-- ─── trends_snapshot ──────────────────────────────────────────────────────
-- One row per cron run. `data` holds the full aggregated payload as a
-- single jsonb document so the page reads exactly one row by created_at
-- desc. Keeping previous snapshots around is cheap (one row/day, ~10 KB
-- each) and lets us compute week-over-week deltas without re-querying
-- raw tables.
create table if not exists public.trends_snapshot (
  id          uuid primary key default gen_random_uuid(),
  data        jsonb not null,
  -- Useful columns to filter/sort without unpacking jsonb:
  computed_at timestamptz not null default now()
);

create index if not exists trends_snapshot_computed_at_idx
  on public.trends_snapshot (computed_at desc);


-- ─── RLS ───────────────────────────────────────────────────────────────────
-- Public read so /trends server components can fetch without a service
-- role round-trip. Writes are service-role only via the compute-trends
-- cron, so no insert/update/delete policies are needed.
alter table public.trends_snapshot enable row level security;

drop policy if exists trends_snapshot_public_read on public.trends_snapshot;
create policy trends_snapshot_public_read
  on public.trends_snapshot
  for select
  using (true);


-- ════════════════════════════════════════════════════════════════════════════
-- Sanity checks (run after migration):
-- ════════════════════════════════════════════════════════════════════════════
--
-- 1) ai_usage has cards column:
-- select column_name, data_type from information_schema.columns
--   where table_name = 'ai_usage' and column_name = 'cards';
-- → cards | jsonb
--
-- 2) trends_snapshot exists with public select policy:
-- select policyname, cmd from pg_policies where tablename = 'trends_snapshot';
-- → trends_snapshot_public_read | SELECT
-- ════════════════════════════════════════════════════════════════════════════
