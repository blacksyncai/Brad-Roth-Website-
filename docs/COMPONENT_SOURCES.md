# Components and licensing

The user supplied the complete HoverPlayCard and shadcn Button source as a pasted integration request, following their request for carefully selected 21st.dev components. That supplied interaction is implemented at `components/ui/hover-play-card.tsx`; the compatible Button lives at `components/ui/button.tsx`, with `cn` in `lib/utils.ts` and shadcn aliases in `components.json`.

Changes to the supplied component: autoplay mode for the requested main hero, muted inline looping video, reduced-motion support, persistent keyboard/touch controls, native media controls after explicit playback, promise-race handling for pointer exits, and a download fallback. The original unrelated demo video was replaced with Brad's actual commercial. No decorative component library was copied into the project.

The pasted component did not identify its original 21st.dev author, URL or license. Its inclusion is grounded in the user's explicit supplied-code integration request; no unverifiable author attribution or external license claim is made. Obtain its upstream attribution before redistributing it separately as a component package.

Dependency licenses remain included in installed packages: React, Next.js, Tailwind, Radix Slot, class-variance-authority, clsx, tailwind-merge and Framer Motion use MIT licenses; Lucide uses ISC. Cormorant Garamond and Manrope are self-hosted through Fontsource and distributed under SIL Open Font License 1.1. No proprietary font extracted from the brokerage PDF is used.

Apple TV mark: Simple Icons (`icons/appletv.svg`, CC0 collection), sourced from https://github.com/simple-icons/simple-icons/blob/develop/icons/appletv.svg. Added beside the supplied Apple TV announcement at the user's request. A CSS mask gives the small mark a metallic color treatment inspired by the user's reference; no affiliation beyond the user's supplied announcement is added.

Scroll UI: the user supplied the Skiper31 text-scroll-animation component (preserved in docs/SCROLL_UI_REQUEST.txt). Its scroll-progress-driven CharacterV1 is adapted in components/ui/text-scroll-animation.tsx with typed MotionValue props, readable bounded movement, accessible heading text, and reduced-motion support. The profile cards use a restrained staggered entrance inspired by the supplied progression. The original orange colors, app-icon demonstrations and multiple 210vh demo sections are not part of the real estate design. Lenis is used for desktop wheel smoothing only on concept 2; touch remains native, anchor links are supported, and smooth scrolling is disabled for reduced-motion visitors. Lenis is MIT licensed; the supplied component's original publisher/license was not included in the pasted request.

- Architectural hero headline: self-hosted Geist Sans (Vercel), SIL Open Font License 1.1. Latin variable font distributed with Next.js; license in `public/fonts/Geist-LICENSE.txt`.

- Current architectural hero headline: Bebas Neue by Ryoichi Tsunekawa, sourced from Google Fonts, self-hosted under SIL Open Font License 1.1. License: `public/fonts/Bebas-Neue-LICENSE.txt`. Replaces Geist for this heading.
