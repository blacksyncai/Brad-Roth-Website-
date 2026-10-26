# Brad Roth Group

Premium solo-agent website built with Next.js App Router, TypeScript, Tailwind CSS v4, and the user-supplied 21st.dev HoverPlayCard interaction. BRG is the primary identity; Equity Union's luxury lockup is the secondary brokerage affiliation.

## Run

Use Node.js 22 LTS (Node 20.9+ is supported).

```sh
npm install
npm run dev
```

- `/` — working homepage with Brad's commercial autoplaying muted and looping; click the player to enable sound, then pause. Reduced-motion preferences disable automatic playback.
- `/preview/editorial/` — Editorial Luxury.
- `/preview/architectural/` — Modern Architectural.
- `/preview/california/` — California Contemporary.

The fixed top 1 / 2 / 3 switcher links three short homepage studies. Each study contains an autoplaying hero and one supporting Brad introduction, with an expandable inquiry prototype. Longer services, properties and community sections are intentionally omitted for this review. Navigation links scroll to real sections. Inquiry forms are explicitly labeled frontend prototypes and do not send or store personal information.

## Verify

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm test
```

The production build exports all routes to `out/`. Webpack is selected for predictable static builds in restricted environments. `experimental.useTypeScriptCli: false` uses the compiler API with the installed TypeScript 5 compiler; typechecking remains enabled in builds and is also available independently. No environment variables or external services are needed.

## Vercel

Import the GitHub repository into Vercel. Select the Next.js framework, project root `.`, install command `npm ci`, and build command `npm run build`. The project is a static export, so Vercel can serve the generated `out` directory. No IDX, CRM, email service, authentication, or backend setup is required. Keep the review pages `noindex` until selecting the final design and completing the factual content.

`.openai/hosting.json` belongs to the separate private Sites review deployment; it is not required by Vercel. Review publication does not configure a production domain or Vercel account.

## Project structure

- `app/` — homepage, three statically generated concept routes, metadata and design tokens/styles.
- `components/` — reusable navigation, contact prototype and content sections.
- `components/ui/` — shadcn-compatible Button and the supplied HoverPlayCard. `components.json` and `@/` aliases support the conventional shadcn structure.
- `lib/content.ts` — shared typed factual content and concept definitions.
- `public/brand/` — original-color BRG mark converted from EPS; Equity Union luxury logo extracted from the supplied PDF.
- `public/media/` — optimized actual portraits, browser-compatible commercial and licensed reference imagery.
- `source-assets/` — untouched original BRG EPS, supplied clipped PNG preview and both original portraits.
- `docs/` — handoff, content assumptions, concept comparison and component attribution.
- `ASSET_INVENTORY.md` — complete asset audit and source locations.

The original 172 MB welcome kit and 28 MB luxury PDF are preserved in the task workspace at `/workspace/brg/audit/` and in their original Drive locations, rather than bundled into the deployable website. No residential blue BRG rendition or sample listing/testimonial/production claim from those PDFs is used.
