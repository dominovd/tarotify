-- ════════════════════════════════════════════════════════════════════════════
-- TarotAxis — Migration 003: AI reading cache
-- Date: 2026-05-16
-- Apply via: Supabase Dashboard → SQL Editor → "New query" → paste → Run
-- ════════════════════════════════════════════════════════════════════════════
--
-- A small cache table for AI readings so that identical inputs (same cards,
-- same locale, same source, NO personal question) reuse a single generated
-- response. Biggest win: /daily — the date-seeded card is identical for
-- everyone, so one generation per day per locale serves all users.
--
-- Privacy contract: we only cache when the user did NOT supply a question.
-- Personal questions are never written to this table.
--
-- The cache is server-only — RLS is enabled with no client policies, so only
-- the service role (used by the AI route handler) can read or write rows.
--
-- IDEMPOTENT: re-running is safe.
-- ════════════════════════════════════════════════════════════════════════════


-- ─── table ─────────────────────────────────────────────────────────────────

create table if not exists public.ai_reading_cache (
  id              uuid primary key default gen_random_uuid(),
  -- sha256 hex of (source + locale + canonical positioned cards)
  cache_key       text not null unique,
  response_text   text not null,
  locale          text not null,
  source          text not null,
  -- bumped when a cached row is served. Useful for spotting hot cache rows.
  hit_count       int not null default 0,
  created_at      timestamptz not null default now(),
  -- last time someone read this row (informational; we increment hit_count too)
  last_hit_at     timestamptz
);


-- ─── indexes ───────────────────────────────────────────────────────────────
-- The unique index on cache_key is implicit (unique constraint above).
-- Add a created_at desc index for fast TTL filtering.

create index if not exists ai_reading_cache_created_at_idx
  on public.ai_reading_cache (created_at desc);


-- ─── RLS ───────────────────────────────────────────────────────────────────
-- Server-only — no client should be reading or writing this table.

alter table public.ai_reading_cache enable row level security;

-- No policies = anon + authenticated roles can't see anything. Service role
-- (used in the AI route via createAdminClient) bypasses RLS.


-- ─── increment helper ──────────────────────────────────────────────────────
-- A tiny function so the AI route can atomically bump hit_count and
-- last_hit_at without a separate read+write round-trip.

create or replace function public.bump_ai_cache_hit(p_cache_key text)
returns void
language sql
security definer
as $$
  update public.ai_reading_cache
     set hit_count = hit_count + 1,
         last_hit_at = now()
   where cache_key = p_cache_key;
$$;

-- Restrict execution to service_role to mirror RLS contract.
revoke all on function public.bump_ai_cache_hit(text) from public;
grant execute on function public.bump_ai_cache_hit(text) to service_role;


-- ════════════════════════════════════════════════════════════════════════════
-- Sanity checks (run after migration):
-- ════════════════════════════════════════════════════════════════════════════
--
-- 1) Table exists with expected columns:
-- select column_name, data_type, is_nullable
--   from information_schema.columns
--   where table_name = 'ai_reading_cache' and table_schema = 'public'
--   order by ordinal_position;
--
-- 2) Unique constraint on cache_key:
-- select indexname from pg_indexes where tablename = 'ai_reading_cache';
-- → ai_reading_cache_pkey, ai_reading_cache_cache_key_key,
--   ai_reading_cache_created_at_idx
--
-- 3) RLS is on with no client policies (server-only access):
-- select rowsecurity from pg_tables where tablename = 'ai_reading_cache';
-- → t
-- select count(*) from pg_policies where tablename = 'ai_reading_cache';
-- → 0
--
-- 4) Helper function exists:
-- select proname from pg_proc where proname = 'bump_ai_cache_hit';
-- → bump_ai_cache_hit
