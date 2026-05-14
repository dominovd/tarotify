-- ════════════════════════════════════════════════════════════════════════════
-- TarotAxis — Sprint 1 Auth Foundation Migration
-- Date: 2026-05-14
-- Apply via: Supabase Dashboard → SQL Editor → "New query" → paste → Run
-- ════════════════════════════════════════════════════════════════════════════
--
-- This migration creates the user-facing schema for accounts, subscriptions,
-- cloud journal, AI usage accounting, quiz progress sync, and pinned items.
--
-- Row-Level Security is enabled on every table. Policies restrict each row
-- to its owner — auth.uid() must match the row's user_id (or id, for profiles).
--
-- A trigger creates a `profiles` row automatically on `auth.users` insert,
-- so application code doesn't have to manage it.
--
-- IDEMPOTENCY: this migration uses `if not exists` and `or replace` where
-- safe so re-running it is non-destructive. It does NOT drop tables — if
-- you've already run it once, re-running adds nothing new.
-- ════════════════════════════════════════════════════════════════════════════


-- ─── profiles ───────────────────────────────────────────────────────────────
-- 1:1 with auth.users. Populated by the trigger below.

create table if not exists public.profiles (
  id                   uuid primary key references auth.users(id) on delete cascade,
  email                text not null,
  display_name         text,
  -- Pre-fill personalisation prefs (D4 — free account perk)
  zodiac_sign          text,
  preferred_theme      text,
  preferred_frequency  text,
  created_at           timestamptz default now(),
  updated_at           timestamptz default now()
);


-- ─── subscriptions ──────────────────────────────────────────────────────────
-- 1:N history of subscription state changes. Lemon Squeezy is the source of
-- truth; we mirror via webhook into this table.

create table if not exists public.subscriptions (
  id                    uuid primary key default gen_random_uuid(),
  user_id               uuid not null references auth.users(id) on delete cascade,
  status                text not null check (status in (
                          'trialing','active','past_due','cancelled','expired'
                        )),
  plan                  text not null,            -- 'premium-monthly' | 'premium-yearly'
  ls_subscription_id    text,                     -- Lemon Squeezy subscription ID
  ls_customer_id        text,
  current_period_end    timestamptz,
  cancel_at             timestamptz,
  created_at            timestamptz default now(),
  updated_at            timestamptz default now()
);

create index if not exists subscriptions_user_id_idx on public.subscriptions(user_id);
create index if not exists subscriptions_ls_subscription_id_idx on public.subscriptions(ls_subscription_id);


-- ─── saved_readings ─────────────────────────────────────────────────────────
-- Cloud journal — PREMIUM ONLY (D4). Free users keep using localStorage.

create table if not exists public.saved_readings (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references auth.users(id) on delete cascade,
  date            date not null default current_date,
  question        text,
  spread_id       text,                            -- 'three','celtic-cross','reading-analysis',...
  cards           jsonb not null,                  -- [{slug,reversed,position}, ...]
  interpretation  text,                            -- generated text at save time
  notes           text,                            -- user's own reflection
  created_at      timestamptz default now()
);

create index if not exists saved_readings_user_id_created_at_idx
  on public.saved_readings(user_id, created_at desc);


-- ─── ai_usage ───────────────────────────────────────────────────────────────
-- Rate-limiting + cost accounting. Filled in Sprint 4 when AI flips on.
-- Created here so RLS and indexes are in place ahead of time.

create table if not exists public.ai_usage (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references auth.users(id) on delete cascade,
  feature         text not null,                   -- 'analyse-reading','card-meaning',...
  tokens_in       int,
  tokens_out      int,
  cost_usd_micro  int,                             -- cost × 1_000_000 to keep as int
  created_at      timestamptz default now()
);

create index if not exists ai_usage_user_id_created_at_idx
  on public.ai_usage(user_id, created_at desc);


-- ─── quiz_stats ─────────────────────────────────────────────────────────────
-- Cross-device sync of /quiz/* progress (D4 — free account perk).
-- One row per (user, pool). Mirrors tarotify_quiz_stats_<pool> localStorage.

create table if not exists public.quiz_stats (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  pool         text not null,                      -- 'major','minor','cups',...,'major_rev'
  best_score   int not null default 0,
  best_streak  int not null default 0,
  games        int not null default 0,
  updated_at   timestamptz default now(),
  unique (user_id, pool)
);


-- ─── favourites ─────────────────────────────────────────────────────────────
-- User-pinned spreads, cards, or readings (D4 — free account perk).

create table if not exists public.favourites (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  kind         text not null check (kind in ('card','spread','reading')),
  target_slug  text not null,                      -- card slug, spread route, or saved_reading id
  label        text,                               -- optional user label
  created_at   timestamptz default now(),
  unique (user_id, kind, target_slug)
);


-- ─── webhook_events ─────────────────────────────────────────────────────────
-- Lemon Squeezy webhook idempotency. Stored event IDs let us skip retries.

create table if not exists public.webhook_events (
  event_id   text primary key,
  source     text not null,                        -- 'lemonsqueezy'
  processed_at timestamptz default now()
);


-- ════════════════════════════════════════════════════════════════════════════
-- Row-Level Security: every table is owner-only.
-- ════════════════════════════════════════════════════════════════════════════

alter table public.profiles       enable row level security;
alter table public.subscriptions  enable row level security;
alter table public.saved_readings enable row level security;
alter table public.ai_usage       enable row level security;
alter table public.quiz_stats     enable row level security;
alter table public.favourites     enable row level security;
alter table public.webhook_events enable row level security;

-- profiles: read + update own row only
drop policy if exists "profiles_self_read"   on public.profiles;
drop policy if exists "profiles_self_update" on public.profiles;
create policy "profiles_self_read"   on public.profiles for select using (auth.uid() = id);
create policy "profiles_self_update" on public.profiles for update using (auth.uid() = id);

-- subscriptions: read own only (writes happen via service role from webhook)
drop policy if exists "subs_self_read" on public.subscriptions;
create policy "subs_self_read" on public.subscriptions for select using (auth.uid() = user_id);

-- saved_readings: full CRUD on own rows
drop policy if exists "readings_self_all" on public.saved_readings;
create policy "readings_self_all" on public.saved_readings for all using (auth.uid() = user_id);

-- ai_usage: read own only (writes happen server-side via service role)
drop policy if exists "ai_usage_self_read" on public.ai_usage;
create policy "ai_usage_self_read" on public.ai_usage for select using (auth.uid() = user_id);

-- quiz_stats: full CRUD on own rows
drop policy if exists "quiz_stats_self_all" on public.quiz_stats;
create policy "quiz_stats_self_all" on public.quiz_stats for all using (auth.uid() = user_id);

-- favourites: full CRUD on own rows
drop policy if exists "favourites_self_all" on public.favourites;
create policy "favourites_self_all" on public.favourites for all using (auth.uid() = user_id);

-- webhook_events: no client access. Service role only (RLS denies anon/authenticated).


-- ════════════════════════════════════════════════════════════════════════════
-- Trigger: auto-create profile on signup.
-- ════════════════════════════════════════════════════════════════════════════

create or replace function public.handle_new_user() returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();


-- ════════════════════════════════════════════════════════════════════════════
-- Trigger: updated_at auto-bump on row update.
-- ════════════════════════════════════════════════════════════════════════════

create or replace function public.touch_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists touch_profiles_updated_at      on public.profiles;
drop trigger if exists touch_subscriptions_updated_at on public.subscriptions;
drop trigger if exists touch_quiz_stats_updated_at    on public.quiz_stats;

create trigger touch_profiles_updated_at
  before update on public.profiles
  for each row execute function public.touch_updated_at();

create trigger touch_subscriptions_updated_at
  before update on public.subscriptions
  for each row execute function public.touch_updated_at();

create trigger touch_quiz_stats_updated_at
  before update on public.quiz_stats
  for each row execute function public.touch_updated_at();


-- ════════════════════════════════════════════════════════════════════════════
-- Sanity check: run these after the migration to verify everything's in place.
-- ════════════════════════════════════════════════════════════════════════════
--
-- select table_name from information_schema.tables
--   where table_schema = 'public' order by table_name;
-- → profiles, subscriptions, saved_readings, ai_usage, quiz_stats,
--   favourites, webhook_events
--
-- select policyname, tablename from pg_policies where schemaname = 'public';
-- → should list all 9 policies created above
--
-- select tgname from pg_trigger where tgrelid = 'auth.users'::regclass;
-- → should include 'on_auth_user_created'
