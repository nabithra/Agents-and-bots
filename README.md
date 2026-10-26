# Actionpackd

Minimal one-screen marketing site for Actionpackd. Pure white, no page scroll. **What we do** opens a side panel. **Talk to us** opens WhatsApp.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Edit

- **What we do list** — `lib/offerings.ts`. One string per line, in the order they should appear.
- **WhatsApp number** — `lib/config.ts`. Replace the placeholder `91XXXXXXXXXX` (digits only, country code included, no `+`).
- **Logo** — the header uses a placeholder ninja SVG. Drop the real artwork at `public/ninja.png`, then set `USE_NINJA_PNG` to `true` in `components/logo.tsx`.
- **Hero colours** — `--color-agent`, `--color-amp`, and `--color-bot` in `app/globals.css`.

## Deploy

No environment variables and no backend. The site is a static Next.js app.

### Vercel

1. Import this repository.
2. Framework preset: **Next.js**.
3. Build command: `npm run build`. Output is handled by Vercel.
4. Deploy.

### Railway

1. New project → deploy from this repository.
2. Railway’s Node builder detects Next.js.
3. Build command: `npm run build`
4. Start command: `npm run start`
5. Railway sets `PORT`. `next start` listens on it.

The page is fixed to the viewport (`100dvh`, overflow hidden) on desktop and mobile. Only the “What we do” panel scrolls.
