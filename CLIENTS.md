# Launching the Academy for a new client (white-label guide)

One codebase → one parallel platform per client. Each client gets its own
URL, its own database (users, progress, evidence fully separated), and its
own branding — all from this single repository.

## How it works

- `src/config/clients.js` holds one config block per client (name, course
  title, Code of Conduct details/PDF).
- The active client is chosen **at build time** by the `VITE_CLIENT`
  environment variable. No env var = `hitech`.
- Each client deployment is a **separate Vercel project** pointing at this
  same GitHub repo, and a **separate Supabase project** — so client data can
  never mix.

## Launch checklist for a new client (~30 minutes)

1. **Add the client config** — duplicate a block in
   `src/config/clients.js` and fill in:
   - key, `clientShort`, `clientLegal`, course title/subtitle,
     Code of Conduct ref/owner;
   - `jobRoles`: the client's role matrix (who takes which B/C modules —
     Pathway A is always the baseline). Omit it and every learner sees the
     full 18-module programme;
   - `images`: the client's own photos — `hero` (login backdrop + course
     banner) and `modules` overrides per module cover. Drop the files in
     `public/images/` prefixed with the client key (e.g. `acme-site.webp`).
     No `images` entry = neutral stock photos everywhere. Screen every
     photo: no identifiable children, workers wearing correct PPE.
   Commit & push.

2. **Client documents** — drop their signed Code of Conduct PDF into
   `public/docs/` and set its path in the config (`codeOfConduct.pdf`).
   No PDF yet? Set `pdf: null` — the reading works, download buttons hide.

3. **New Supabase project** (supabase.com → New project, free tier):
   - SQL Editor → run ALL of `supabase/schema.sql` (tables, security,
     sign-up hook, discussion, role-hardening).
   - Authentication → URL Configuration → add
     `https://<their-deployment>.vercel.app/reset` to Redirect URLs.
   - Authentication → Providers → Email → enable "Confirm email".

4. **New Vercel project** (vercel.com → Add New → Project → import this
   repo again) with three environment variables:
   - `VITE_CLIENT` = the config key (e.g. `acme`)
   - `VITE_SUPABASE_URL` = the new project's URL
   - `VITE_SUPABASE_ANON_KEY` = the new project's anon key
   Deploy. Optionally attach a custom domain (e.g. `acme.skykapital.com`).

5. **Smoke test** — sign up, check the client name on the login page &
   Code of Conduct, complete one lesson section, run one quiz question.

## What is shared vs. per-client (today)

| Shared (same for all clients)              | Per-client                          |
|--------------------------------------------|-------------------------------------|
| The 18 ESG modules, quizzes, games, capstones | Name/branding across the platform |
| Videos, library guides, neutral stock photos  | Code of Conduct (PDF + details)   |
| Platform features & security                  | Job-role matrix (module assignment) |
|                                               | Photos (hero + module covers)     |
|                                               | Users, progress, evidence (own DB)|

An admin can review the active client's full setup — identity, photos and
role matrix — in the platform under **Admin → Client setup**.

Deeper per-client content (their own policies as extra modules, their legal
jurisdiction in M2, their logo image) = extend the client config the same
way — ask Claude to "add X to the client config".

---

## Custom pictures per client

Each client can ship its OWN images (site photos, logo, favicon) without any
code change:

1. Copy the whole default folder once:
   `cp -r public public-<clientkey>`   (e.g. `public-acme`)
2. Replace any pictures inside `public-<clientkey>/images/` with the client's
   own photos — **keep the same file names** (`course-hero.jpg`, `lm1.jpg`, …)
   so every screen keeps working.
3. Commit. The client's Vercel project (which has `VITE_CLIENT=<clientkey>`)
   automatically builds with that folder instead of `public/`.

Rules:
- The folder REPLACES `public/` entirely for that client — always start from a
  full copy, never an empty folder.
- No `public-<clientkey>` folder = the client uses the default images. HITECH
  currently uses the default set.
- Recommended sizes: landscape ~1600×900, JPG, < 400 KB per image.
