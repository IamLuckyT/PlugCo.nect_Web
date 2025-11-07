# PlugCo.nect — Web

This repo is a starter template for PlugCo.nect: React + Vite + Tailwind + Supabase (Google OAuth).

## Setup (locally)

1. Copy files into a new folder `plugconect-web`
2. Create a `.env` file in project root with:
```
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=public-anon-key
```
3. Install dependencies:
```
npm install
```
4. Start dev server:
```
npm run dev
```

## Deploy to GitHub & Netlify
1. `git init` → commit → push to a new GitHub repo.
2. In Netlify, choose "New site from Git" and connect your GitHub repo.
3. Set build command `npm run build` and publish directory `dist`.
4. Add the environment variables `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Netlify settings.

## Google OAuth setup (for Supabase)
1. In Google Cloud Console create an OAuth 2.0 Client ID.
2. Add the Netlify domain (e.g. `https://your-site.netlify.app`) to **Authorized JavaScript origins**.
3. Add redirect URIs used by Supabase: `https://your-site.netlify.app/auth/v1/callback` (adjust if using a different path).
4. In Supabase dashboard go to Authentication → Providers → Google and paste the Client ID and Client Secret.
5. Test sign-in from the site.