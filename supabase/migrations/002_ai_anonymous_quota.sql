-- ════════════════════════════════════════════════════════════════════════════
-- TarotAxis — Migration 002: AI Anonymous Quota Support
-- Date: 2026-05-16
-- Apply via: Supabase Dashboard → SQL Editor → "New query" → paste → Run
-- ════════════════════════════════════════════════════════════════════════════
--
-- Sprint "Free AI tier" requires three changes to ai_usage:
--
--  1. Allow anonymous rows. user_id becomes nullable; anonymous usage
--     is tracked by a signed browser_id cookie + ip_hash.
--  2. Track which surface called us (/free-reading vs /reading-analysis)
--     and which locale the response was rendered in.
--  3. Add fast-lookup indices on browser_id and ip_hash so quota checks
--     run in milliseconds even when ai_usage grows to millions of rows.
--
-- IDEMPOTENT: re-running is safe. All ALTERs use `if not exists` /
-- `add column if not exists`.
-- ════════════════════════════════════════════════════════════════════════════


-- ─── allow anonymous rows ──────────────────────────────────────────────────
-- user_id was NOT NULL in migration 001. Anonymous AI readings need a row
-- with user_id = NULL, so we drop the NOT NULL constraint.
alter table public.ai_usage
  alter column user_id drop not null;


-- ─── add tracking columns ──────────────────────────────────────────────────
alter table public.ai_usage
  add column if not exists browser_id text;
alter table public.ai_usage
  add column if not exists ip_hash    text;
alter table public.ai_usage
  add column if not exists source     text;
alter table public.ai_usage
  add column if not exists locale     text;


-- ─── indices for quota lookups ─────────────────────────────────────────────
-- Quota path needs to count rows by user_id (registered: today),
-- by browser_id (anonymous: lifetime), and by ip_hash (abuse failsafe:
-- last 24h). All three with descending created_at to use index range scan.
create index if not exists ai_usage_browser_id_created_at_idx
  on public.ai_usage (browser_id, created_at desc)
  where browser_id is not null;

create index if not exists ai_usage_ip_hash_created_at_idx
  on public.ai_usage (ip_hash, created_at desc)
  where ip_hash is not null;


-- ─── RLS sanity ────────────────────────────────────────────────────────────
-- ai_usage rows are inserted server-side via the service role, which
-- bypasses RLS. Existing policy "ai_usage_self_read" still applies for
-- registered users reading their own history (auth.uid() = user_id).
-- Anonymous rows (user_id IS NULL) are never readable by clients — only
-- by the service role for quota checks. No policy change needed.


-- ════════════════════════════════════════════════════════════════════════════
-- Sanity checks (run after migration to confirm):
-- ════════════════════════════════════════════════════════════════════════════
--
-- 1) Schema:
-- select column_name, is_nullable, data_type
--   from information_schema.columns
--   where table_name = 'ai_usage' and table_schema = 'public'
--   order by ordinal_position;
-- → user_id should be YES (nullable), and browser_id, ip_hash, source,
--   locale should all appear with is_nullable = YES.
--
-- 2) Indices:
-- select indexname from pg_indexes where tablename = 'ai_usage';
-- → ai_usage_pkey, ai_usage_user_id_created_at_idx,
--   ai_usage_browser_id_created_at_idx, ai_usage_ip_hash_created_at_idx.
