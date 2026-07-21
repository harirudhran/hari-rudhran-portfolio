# Hari Rudhran M — Portfolio

A single-page developer portfolio built with **React + TypeScript + Tailwind CSS**, themed with a custom "Roblox Bubble" design system (chunky borders, primary blue glow, Fredoka display type).

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this folder to a new GitHub repository (see below).
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output directory `dist`.
4. Deploy.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Structure

- `src/data.ts` — all content (profile, about, skills, projects, education, certifications)
- `src/components/` — Navbar, Hero, About, Skills, Projects, Education, Certifications, CTA, Contact, Footer
- `src/index.css` — global styles, scroll reveal + animation keyframes
- `tailwind.config.js` — Roblox Bubble color/typography/shadow tokens

To update content (new project, changed email, etc.), edit `src/data.ts` only — no need to touch components.
