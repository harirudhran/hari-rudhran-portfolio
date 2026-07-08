# Hari Rudhran M — Portfolio

Single-page developer portfolio. React + TypeScript + Tailwind CSS v4, built with Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the printed `localhost` URL.

## Deploy to Vercel

**Option A — Vercel Dashboard (no CLI, no terminal needed)**
1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new and import that repository.
3. Vercel auto-detects Vite. Framework Preset: **Vite**, Build Command: `npm run build`, Output Directory: `dist`. Click **Deploy**.
4. You'll get a live `*.vercel.app` URL in about a minute. Add a custom domain later from the project's Settings → Domains if you want one.

**Option B — Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

No environment variables or backend are required — this is a fully static site.

## Edit content

All editable content (name, links, about text, skills, projects, education) lives at the
top of `src/App.tsx` in plain objects/arrays — update those and the whole page updates.
