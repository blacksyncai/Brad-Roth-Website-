# BRAD ROTH GROUP — CODEX BUILD BRIEF

You are the lead frontend engineer and design director for a premium real estate agent website for Brad Roth / Brad Roth Group (BRG), affiliated with Equity Union. Build a polished, functional Next.js site that offers THREE genuinely different homepage concepts for stakeholder review before building out the final site.

## First actions
1. Inspect ALL files in `source-assets/`. Unzip `Brad Roth-Welcome Kit-10-22-2026 (1).zip` locally; it contains 17 files, including residential-brand marketing PDFs and graphics. Inspect `luxury-branding_package.pdf` separately: Brad explicitly chose the LUXURY direction, and the welcome kit contains other residential variants that are references, not the approved final identity.
2. Inspect the original BRG vector EPS logo, the PNG preview, and both Brad portrait files. Preserve original files. Convert EPS to web-ready SVG or transparent PNG if feasible without altering proportions; otherwise use the supplied preview temporarily and document the limitation.
3. Produce an `ASSET_INVENTORY.md` with each file, purpose, what is usable on the web, and any missing assets. Do not claim that PDFs contain approved web logos until verified. Do not use an unlicensed third-party photograph.
4. Read `BRAND_AND_CONTENT_NOTES.md` before implementing.

## Brand constraints
- Brad Roth Group / BRG is the primary brand; Equity Union is the brokerage affiliation.
- BRG logo must be visually larger/more prominent than the brokerage logo.
- Do NOT recolor Brad's BRG logo blue. Preserve original brand color/shape.
- Use Brad's actual supplied portraits, not AI-generated faces.
- Brad selected Equity Union's luxury identity. Treat residential alternatives as secondary references only.
- Don't invent Brad's years of experience, sales volume, testimonials, awards, listing prices, inventory, property addresses, phone, or email. Clearly mark missing copy/data for confirmation.

## Stack and architecture
- Next.js App Router, TypeScript, Tailwind CSS; accessible components, responsive layouts, tasteful Framer Motion only where it improves polish.
- You may use shadcn/ui and 21st.dev components, but inspect licensing, keep components maintainable, and avoid copy-paste clutter.
- Make a shared typed content/data layer, reusable navigation/footer/contact CTA, and design tokens. Theme previews must have truly distinct composition and hierarchy, not just swapped colors.
- Routes: `/` (theme selector or selected preview), `/preview/editorial`, `/preview/architectural`, `/preview/california`.
- Include functional navigation and responsive mobile layouts. Do not build full backend, IDX, CRM integrations, or fake property search in phase 1.

## Three creative directions
1. EDITORIAL LUXURY: quiet editorial aesthetic, warm ivory, ink charcoal, refined serif headline, expansive white space, elegant Brad portrait section, sophisticated editorial property imagery.
2. MODERN ARCHITECTURAL: black/white, graphic grid, bold typographic scale, architectural photography, crisp transitions, restrained luxury.
3. CALIFORNIA CONTEMPORARY: warm stone/sand, muted natural accents, airy photography, elevated West Coast lifestyle, editorial neighborhood/storytelling approach.

Each concept must have a distinct hero, navigation treatment, about-Brad introduction, services/representation section, featured properties *placeholder treatment without fabricated listing claims*, communities section, and high-quality contact CTA. All three must work at mobile widths and use the same truthful content data.

## Product direction
Focus on premium solo-agent positioning, not a generic brokerage portal. Consider the main site architecture later: Home, About Brad, Properties, Sellers, Buyers, Communities, Contact. Potential lead capture: request valuation, schedule consultation, and contact inquiry, but implement as front-end prototypes until destinations and privacy/compliance are approved.

## Deliverables for phase 1
- Runnable repo with `npm install` and `npm run dev`.
- Three complete responsive homepage previews at the specified routes.
- Asset inventory and documented content assumptions.
- README with setup, preview routes, and deployment steps.
- A short comparison of the three concepts and recommended next steps.
- Run lint/typecheck/build and fix failures before declaring completion.

## Quality bar
Avoid generic AI-site aesthetics: no gratuitous gradients, floating glass cards, repetitive rounded tiles, stock icons everywhere, fake reviews, made-up metrics, or generic luxury buzzwords. Design with real typography, spacing, composition, image crops, and clear conversion pathways. Use actual supplied imagery where appropriate. Keep motion subtle and honor reduced-motion preferences.

Begin by auditing assets and scaffolding the repo. Implement the three homepage concepts and show how to preview them. Ask for missing critical factual information only when it blocks a real integration; use clearly labeled placeholders otherwise.
