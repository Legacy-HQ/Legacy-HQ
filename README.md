# Curiofold

Website for Curiofold, a creative studio for motion design, graphic design and video editing.
Built with Next.js (App Router), TypeScript and Tailwind CSS.

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
```

## Where things live

- `lib/content.ts` — all copy: services, work, process, FAQ, contact details. Entries marked `PLACEHOLDER` need real studio details.
- `components/Logo.tsx` — the logo. It is a temporary mark; replace the SVG here and in `app/icon.svg`.
- `app/globals.css` — brand palette (`--cf-*` tokens) and the fold, reveal and card effects.
- `components/FoldSheet.tsx` — the folded sheet in the hero.
