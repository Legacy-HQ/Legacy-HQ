# Curiofold

Website for Curiofold, a creative studio for motion design, graphic design and video editing.
Built with Next.js (App Router), TypeScript and Tailwind CSS.

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
```

## Pages

- `/` — home: hero, reel, services, selected work, formats, process, engagement options, FAQ
- `/work` — all projects, filterable by craft
- `/work/<slug>` — one page per project
- `/contact` — brief builder that opens a pre-filled email (no backend)

## Where things live

- `lib/content.ts` — all copy and project data. Entries marked `PLACEHOLDER` need real studio details.
- `lib/mark.ts` — the logo as vector paths, traced from the brand artwork. `components/Logo.tsx` renders it.
- `app/globals.css` — brand palette (`--cf-*` tokens) and all motion: intro, petal corners, fold, reel.
- `components/Planes.tsx` — the dark banner geometry used behind dark sections.
- `components/Work.tsx`, `components/Frames.tsx` — drawn visuals for the concept projects. Replace with real stills or video when available.
- `app/icon.svg`, `app/apple-icon.png`, `app/opengraph-image.png`, `public/curiofold-mark.svg` — logo assets.
