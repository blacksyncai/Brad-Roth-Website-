# Asset inventory

Audit completed before interface implementation. Both `CODEX_START_HERE.md` and `BRAND_AND_CONTENT_NOTES.md` were read in full. The lightweight ZIP contains six files, not the larger welcome kit. The missing reference packages were retrieved from the exact Google Drive links in the handoff.

## Supplied lightweight handoff

| File | Inspection / purpose | Website use |
| --- | --- | --- |
| CODEX_START_HERE.md | Complete build brief, brand rules and route requirements | Preserved under docs; followed as delegated project guidance |
| BRAND_AND_CONTENT_NOTES.md | Confirmed identity, source URLs and missing facts | Preserved under docs; factual source |
| assets/NEW_BRGLOGO.eps | Original vector, 720 × 709.1418 point artboard; original process black | Rendered with Ghostscript at 150 dpi to transparent PNG; only empty transparent margins trimmed; complete mark and wordmark preserved without recoloring or distortion |
| assets/BRG_logo_preview.png | 909 × 1286 RGBA; right side of wordmark visibly clipped | Original preserved; not used on the website |
| assets/Brad_Roth_Portrait.png | 619 × 586 RGBA; Brad seated in blue jacket; includes white margin | Actual portrait used as WebP in editorial/California and main homepage; composition crops remain proportional |
| assets/Brad_Roth_Headshot.jpg | 1111 × 1449 RGB; tight face portrait | Actual portrait used as WebP in architectural direction, with CSS grayscale styling; original retained unchanged |

## Complete Equity Union welcome kit

Source: `https://drive.google.com/file/d/1_8GoWRQ9yGZ-ZQxY5GD11BWkhrtlhMHE/view`.

Original archive: 172,040,580 bytes. Extracted locally to `/workspace/brg/audit/welcome-kit`. All 17 files inventoried; PDF text extracted and page contact sheets rendered. Portraits, signature variants, social posts, cards and signs were visually inspected. These are residential reference materials, not Brad's selected luxury identity.

| File | Extent | Purpose / web suitability |
| --- | --- | --- |
| residential_1-branding_package.pdf | 48 pages | Blue residential flyers, cards, signatures, sample listings/testimonials; reference only |
| business-cards.pdf | 7 pages | Residential business-card variants; print artwork, not standalone web logos |
| business-cards-bleed.pdf | 7 pages | Same variants with bleed; not suitable as a page image |
| residential_1-email_signature-1.jpg | 482 × 158 | Residential signature with portrait; reference only |
| residential_1-email_signature-2.jpg | 482 × 158 | Residential signature without portrait; reference only |
| residential_1-email_signature-3.jpg | 481 × 137 | Residential portrait/contact layout; reference only |
| residential_1-email_signature-4.jpg | 481 × 160 | Residential contact layout; reference only |
| for-sale-signs.pdf | 4 pages | Residential brokerage/BRG sign options; blue BRG renditions excluded |
| for-sale-signs-bleed.pdf | 4 pages | Print-bleed sign variants; excluded |
| open-house-signs.pdf | 10 pages | Residential arrows and co-branding options; excluded |
| open-house-signs-bleed.pdf | 10 pages | Print-bleed versions; excluded |
| residential_2-social_joined-1.jpg | 1284 × 1604 | Portrait and palms announcement; composite, not extracted for web use |
| residential_2-social_joined-2.jpg | 1334 × 1601 | Office/portrait announcement; composite, reference only |
| residential_2-branding_package.pdf | 48 pages | Alternative residential typography/layout package; not approved luxury identity |
| residential_2-buyer_presentation-conejo.pdf | 22 pages | Buyer-process guide, template biography/team and brokerage claims; reference only, no claims copied |
| residential_2-cma-conejo.pdf | 1 page | CMA cover; not a live market report |
| residential_2-listing_presentation-conejo.pdf | 32 pages | Marketing guide, sample biographies/team and statistics; no unverified claims copied |

## Separate luxury branding package

`luxury-branding_package.pdf`, 28,398,874 bytes, 69 actual PDF pages. Source: `https://drive.google.com/file/d/1f4ltKIrNq9hZ2rHB1W0VWi3Y4KGec9wq/view`, in the shared folder `1M1AF7HzY28iOqdHCYC8tKH4WXNdbKl2j`. The internal table of contents refers to page ranges through 80, but the delivered PDF has 69 pages.

All pages were rendered to reference contact sheets and text was extracted. The package contains charcoal/stone luxury flyers, brochures, postcards, market-update templates, testimonial templates, business cards, email signatures, open-house and for-sale signs. Futura PT, Garamond Premier Pro and Trajan are embedded print fonts; those embedded fonts were not extracted or redistributed as web fonts. The site uses separately licensed open-source typography instead.

The cover's horizontal Equity Union **Luxury Properties** lockup was visually verified and rendered from its vector artwork at 4× resolution. It is used in its supplied gray with the descriptor intact. This is a PDF-derived web asset, not a claim of a separately delivered official SVG. BRG remains larger and more prominent. Its white image ground is blended against the light page background; the mark is not recolored.

The PDF's fake sample addresses, prices, bed/bath counts, sales stamps, stock property photographs, market statistics and placeholder testimonials were excluded. Existing contact/license details appear in the marketing package, but the handoff explicitly identifies those facts as unconfirmed for the website; they were not silently promoted to verified live contact information.

## Added user uploads

| File | Inspection | Website use |
| --- | --- | --- |
| brad roth_30s_commercial.MOV | 7,500,630 bytes; 1280 × 720; 30.059 seconds; HEVC video + AAC stereo; creation metadata August 2022. Contact-sheet review shows Brad indoors, interview segments and a legacy contact end card. | Converted with FFmpeg to H.264/AAC MP4, yuv420p, fast-start, ~4 MB, for browser compatibility. Original attachment preserved. Film poster extracted at 4 seconds. Main homepage autoplays muted and loops; sound requires user interaction. Original film retained intact, including historical end card; current contact details and captions still require confirmation. |
| Pasted text.txt | Complete user request to integrate HoverPlayCard and shadcn Button | Preserved in docs/HOVER_PLAY_CARD_REQUEST.txt. Adapted in components/ui/hover-play-card.tsx with accessible controls, pointer/touch support and reduced-motion behavior. Demo's unrelated remote video excluded. |

## Reference imagery and rights

No property photograph from the brokerage PDF is reused; rights to those embedded sample images were not established. No generated face or invented listing is used. Downloaded reference imagery is explicitly labeled illustrative, with no statement of BRG representation, listing availability or geographic service coverage.

| Local file | Source | License |
| --- | --- | --- |
| public/media/villa.jpg | https://images.unsplash.com/photo-1600596542815-ffad4c1539a9 | Unsplash License, https://unsplash.com/license |
| public/media/interior.jpg | https://images.unsplash.com/photo-1600210492486-724fe5c67fb0 | Unsplash License, https://unsplash.com/license |
| public/media/coast.jpg | https://images.unsplash.com/photo-1518837695005-2083093ee35b | Unsplash License; retained reference asset, not a service-area claim |
| public/media/architecture.jpg | https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg | Pexels License, https://www.pexels.com/license/; license page retrieved and reviewed: free website use allowed |

Unsplash's license endpoint rejected automated fetching in this environment; the documented Unsplash License URL is retained for source review. The images endpoint supplied the photographs successfully. Pexels license evidence is preserved in the workspace audit. Before production, replace illustrative assets with approved property and local lifestyle photography where available.

## Missing for a final live business website

Approved biography, current contact details, exact service areas, listing feed/content and photography rights, MLS/IDX provider and rules, approved disclosures/license display, privacy policy, contact destination, domain, social profiles, testimonials, and approved film captions/transcript. These do not block the frontend concepts; placeholders and prototype labeling make their status explicit.
