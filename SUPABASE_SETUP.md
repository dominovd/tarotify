# Supabase Setup — Sprint 1 Walkthrough

**Goal:** create a Supabase project, run the schema migration, configure auth + Resend SMTP, get the three env vars into Vercel. After this is done, the code in Sprint 1 wires up — no more setup needed.

**Time estimate:** 15–25 minutes.

---

## 1. Create the Supabase project

1. Go to **https://supabase.com** → sign in (use the same Google/GitHub identity you'll keep using long-term — this account owns the project).
2. Click **New project**.
3. Fill in:
   - **Name:** `tarotaxis`
   - **Database password:** generate a strong one. **Save it in your password manager** — you don't need it for code (we use the API keys), but you need it for SQL editor / direct DB access.
   - **Region:** `West EU (Ireland)` — matches Resend (also Ireland) so auth emails route inside the EU without cross-region hops.
   - **Plan:** Free tier — fine for now (500 MB DB, 50k MAU, unlimited auth).
4. Click **Create new project**. Wait ~2 minutes for provisioning.

---

## 2. Grab the three API keys

Once the project is up:

1. Sidebar → **Settings** → **API**.
2. Copy three values — save them in a temporary text file or your password manager. You'll paste them into Vercel in step 5.

   | Env var name                     | Where on the page                              | Notes                                          |
   |----------------------------------|------------------------------------------------|------------------------------------------------|
   | `SUPABASE_URL`                   | "Project URL" — top of the page                | Public, looks like `https://xxxx.supabase.co`  |
   | `SUPABASE_ANON_KEY`              | "Project API keys" → `anon` `public`           | Long JWT, safe to ship to browser              |
   | `SUPABASE_SERVICE_ROLE_KEY`      | "Project API keys" → `service_role` `secret`   | **Server-only.** Never expose. Bypasses RLS.   |

   For the public anon key — Supabase also calls it `NEXT_PUBLIC_SUPABASE_ANON_KEY` in some places. Same value, two names. We'll use both:

   - `SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_URL` (same value, two names — Next.js needs the `NEXT_PUBLIC_` prefix to expose to browser)
   - `SUPABASE_ANON_KEY` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only — no `NEXT_PUBLIC_` version!)

---

## 3. Run the schema migration

1. Sidebar → **SQL Editor** → **New query**.
2. Open `supabase/migrations/001_auth_foundation.sql` from this repo. Copy its entire contents.
3. Paste into the SQL Editor.
4. Click **Run** (or Cmd+Enter).
5. You should see "Success. No rows returned" or similar. No errors.
6. Verify: sidebar → **Table Editor**. You should see seven tables in `public` schema:
   - `profiles`
   - `subscriptions`
   - `saved_readings`
   - `ai_usage`
   - `quiz_stats`
   - `favourites`
   - `webhook_events`

If you see errors, paste the error back to me and we'll debug. The script is idempotent — safe to re-run.

---

## 4. Configure Auth

### 4.1 — Email provider settings

1. Sidebar → **Authentication** → **Providers**.
2. Find **Email**:
   - Enabled: ✓
   - Confirm email: **off** (magic-link flow doesn't need a second confirmation step)
   - Secure email change: ✓ (default)
3. Click **Save**.

### 4.2 — URL configuration

1. Sidebar → **Authentication** → **URL Configuration**.
2. Fill in:
   - **Site URL:** `https://tarotaxis.com`
   - **Redirect URLs:** add both of these on separate lines:
     - `https://tarotaxis.com/auth/callback`
     - `http://localhost:3000/auth/callback` (for local dev)
3. Click **Save**.

### 4.3 — Resend SMTP for branded emails

By default, auth emails come from `noreply@mail.app.supabase.io`, which looks spammy. We route them through Resend instead so they arrive from `hello@tarotaxis.com`.

1. Sidebar → **Authentication** → **SMTP Settings**.
2. Toggle **Enable custom SMTP** on.
3. Fill in:
   - **Sender email:** `hello@tarotaxis.com`
   - **Sender name:** `TarotAxis`
   - **Host:** `smtp.resend.com`
   - **Port:** `465`
   - **Username:** `resend`
   - **Password:** paste your existing `RESEND_API_KEY` value (the `re_...` token already in Vercel).
   - **Minimum interval between emails:** leave default (60s — protects against floods).
4. Click **Save**.

### 4.4 — Email templates (optional, can do later)

The default Supabase magic-link email is functional but not branded. You can later customise it under **Authentication** → **Email Templates**. For now, leave defaults — we'll style it during Sprint 1 polish.

---

## 5. Add env vars to Vercel

1. Go to **Vercel dashboard** → `tarotify` project → **Settings** → **Environment Variables**.
2. Add each of these. For each one, tick **Production**, **Preview**, and **Development** checkboxes (so all branches share the same project).

   | Name                                | Value                              |
   |-------------------------------------|------------------------------------|
   | `SUPABASE_URL`                      | (from step 2)                      |
   | `NEXT_PUBLIC_SUPABASE_URL`          | (same value as `SUPABASE_URL`)     |
   | `SUPABASE_ANON_KEY`                 | (from step 2)                      |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY`     | (same value as `SUPABASE_ANON_KEY`)|
   | `SUPABASE_SERVICE_ROLE_KEY`         | (from step 2, **production only** — uncheck Preview/Dev for safety) |

3. Click **Save** for each.

### Local development

For running the dev server locally, also create `/Users/denis/Documents/Claude/Projects/tarot/.env.local` (gitignored already) with the same values:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOi...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
```

Don't commit `.env.local` — it's in `.gitignore`. Don't share `SUPABASE_SERVICE_ROLE_KEY` publicly.

---

## 6. Test that auth works (smoke test)

Before I start writing the Sprint 1 code, you can verify the project is set up correctly with a quick SQL test:

1. Supabase dashboard → **SQL Editor** → **New query**:

   ```sql
   select count(*) from auth.users;
   ```

2. Expected output: `0` (no users yet).

3. Try adding a fake user via the dashboard: **Authentication** → **Users** → **Add user** → **Send invitation**. Enter your own email. You should receive a magic-link email from `hello@tarotaxis.com`. Don't click the link yet — just verify the email arrives, is branded, and lands in inbox (not spam).

4. Run again:

   ```sql
   select count(*) from auth.users;
   select id, email from auth.users;
   select id, email from public.profiles;
   ```

   All three queries should show your test user. The third confirms the `handle_new_user` trigger ran — `profiles` got a row automatically.

5. (Optional cleanup) Delete the test user from **Authentication** → **Users**.

---

## 7. Tell me when you're done

Once steps 1–6 are complete, message me with:

- ✓ Supabase project created and SQL migration ran
- ✓ Three (well, five with the `NEXT_PUBLIC_` duplicates) env vars in Vercel
- ✓ Resend SMTP test email arrived branded as TarotAxis
- ✓ `auth.users` query returns 0 (or 1 if test user not deleted)

Then I'll write the Sprint 1 code in this session.

---

## If something goes wrong

- **SQL migration errors:** paste the exact error, including the line number. The script is idempotent so we can re-run after fixing.
- **No email received:** check Resend dashboard → Logs → confirm the email was attempted. Check spam folder. Verify `RESEND_API_KEY` in SMTP password field is the full token including `re_` prefix.
- **Wrong redirect URL error during magic link click:** double-check Section 4.2 — both URLs must be listed exactly.
- **`profiles` doesn't get a row when a user signs up:** the trigger from `001_auth_foundation.sql` didn't run. Re-run the migration; check for errors in `pg_trigger` table.

---

## What's NOT in Sprint 1

These come later — don't try to set them up now:

- Lemon Squeezy account / products (Sprint 2)
- Anthropic API key (Sprint 4 / when flipping AI on)
- Upstash Redis (Sprint 4 — rate limiting)
- AI Waitlist Resend Audience (Sprint 4)

You can absolutely create these accounts now if you want them ready — but they're not on the Sprint 1 critical path.
