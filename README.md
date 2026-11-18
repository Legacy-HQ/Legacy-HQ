# Curiofold

Website for Curiofold, a design and engineering studio: branding, product UI/UX,
full-stack product engineering, landing pages, websites, and motion.
Built with Next.js (App Router), TypeScript and Tailwind CSS.

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
```

## Pages

- `/` — hero, studio statement, services, selected work, process, ways to work together, FAQ
- `/work` — all projects, filterable
- `/work/<slug>` — one page per project
- `/contact` — brief builder that opens a pre-filled email (no backend)

## Where things live

- `lib/content.ts` — all copy and project data. Entries marked `PLACEHOLDER` need real studio details.
- `lib/mark.ts` — the logo as vector paths, traced from the brand artwork. `components/Logo.tsx` renders it.
- `app/globals.css` — brand palette (`--cf-*`), dark/light zone tokens and all motion.
- `components/FoldField.tsx` — the folded-paper WebGL background in the hero and footer.
- `components/ServiceFold.tsx`, `components/Plate.tsx` — the six-panel services sheet and its figure drawings.
- `components/WorkIndex.tsx` — the project list with the pointer-following preview.
- `components/Mock.tsx` — project visuals drawn as interface markup. Swap for real screenshots when available.
- `components/Split.tsx` — the wireframe/shipped slider in the process section.
