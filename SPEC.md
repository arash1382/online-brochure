# SPEC.md — Interactive Digital Concert Brochure
## Project: «موسیقی نو در ایران» / New Music in Iran

**Version:** 1.0  
**Status:** Implementation specification  
**Primary experience:** Mobile-first web brochure  
**Languages:** Persian (RTL) and English (LTR)  
**Theme:** Dark only  
**Source of truth for event content:** The supplied concert brochure PDF  
**Brand asset repository:** https://github.com/arashb8282-glitch/brouchor.git

---

## 1. Product goal

Build a polished, interactive digital concert brochure for «موسیقی نو در ایران» featuring works by composer علیرضا مشایخی.

The brochure will be opened by scanning a QR code, primarily on a phone in portrait orientation and in a nighttime concert environment. It must feel like a designed cultural/artistic experience, not a PDF embedded in a webpage, a generic landing page, a dashboard, or a collection of plain cards.

The output must be a working project, not a mockup or a description of a possible design.

### Product objectives
- Convert the supplied PDF brochure into an accessible, interactive web experience.
- Preserve all verified event, program, biography, credit, and acknowledgement content.
- Communicate the identity of contemporary music through typography, composition, motion, and controlled use of visual assets.
- Make key event information quick to find.
- Support complete Persian and English experiences.
- Prioritize mobile usability, readability, and fast loading.
- Use the provided brand assets faithfully.

## 2. Non-negotiable requirements

1. **Mobile-first:** Design for portrait phones first. Desktop is an adaptation, not the design baseline.
2. **Dark-only:** Never switch to a light theme. No white full-screen sections or bright loading flashes.
3. **Bilingual:** All interface and brochure content must be available in Persian and English.
4. **RTL/LTR:** Correctly change layout direction, alignment, spacing, and directional controls with the selected language.
5. **Brand fidelity:** Use the supplied title SVG unchanged, derive brand accent colors from `color.svg`, use the poster as a visual reference, and use the violin-form SVG as a purposeful graphic asset.
6. **Font fidelity:** Use the actual Abar font files from the provided GitHub repository for Persian.
7. **Content fidelity:** The supplied PDF is the source of truth. Do not invent names, biographies, works, dates, credits, links, audio, or claims.
8. **Functional interactions:** Every visible control must work.
9. **Performance:** Optimize for mobile browsers and variable network conditions.
10. **Honest delivery:** Do not claim a test was performed unless it was actually performed. Clearly identify unavailable assets and untested behavior.

## 3. Target users and main journey

### Users
- Concert attendees
- People interested in contemporary music
- Persian- and English-speaking visitors
- Visitors arriving from a QR code

### Main journey
1. Scan the QR code and open the page in a mobile browser.
2. Immediately recognize the event and its visual identity.
3. See the key event information.
4. Scroll through the concept and program.
5. Open details for individual works and artists as needed.
6. Read credits and acknowledgements.
7. Switch between Persian and English at any point without being sent back to the top.

No account, login, app installation, or registration should be required.

## 4. Source assets and repository

Repository: https://github.com/arashb8282-glitch/brouchor.git

Inspect the repository and the actual project structure before implementation. Verify filenames, paths, formats, available font weights, and whether each asset can be fetched. Do not guess paths or pretend to have accessed files that are unavailable.

### 4.1 Font files
Expected Persian files:
- `AbarMidFaNum-Medium.woff2`
- `AbarMidFaNum-SemiBold.woff2`
- `AbarMidFaNum-Bold.woff2`
- `AbarMidFaNum-ExtraBold.woff2`

Requirements:
- Load the actual files locally when possible.
- Define `@font-face` with the correct weight for each file.
- Use Abar for all Persian interface and content text.
- Inspect the repository for a suitable Latin font. If none exists, use a compatible system sans-serif and state that a Latin font was not found.
- Do not fabricate font files or declare nonexistent weights.
- Verify font paths and provide fallbacks.

### 4.2 `color.svg` — authoritative brand color reference
- Inspect the SVG and extract its actual colors.
- Define CSS custom properties/design tokens based on the source.
- Use the brand accent consistently in headings, markers, dividers, links, and selected interactive states.
- Do not replace the palette with an unrelated invented palette.
- Neutral dark backgrounds and accessible text colors may be added as needed, while preserving the brand colors.

### 4.3 `تایتل.svg` — official title asset
- Use this asset in the hero section.
- Preserve the SVG exactly: no redrawing, retyping, recoloring, stretching, masking, or visual effects that alter its appearance.
- Preserve its aspect ratio. Adjust display size and surrounding layout, not the artwork.
- If it needs more space on small phones, give it more space rather than modifying the SVG.

### 4.4 `پوستر.svg` — visual reference
Inspect the poster to understand the original visual language, including composition, typography, color, spacing, rhythm, and mood. Use it as a reference, not as a static full-page website background.

### 4.5 `فرم ویالن.svg` — graphic form asset
Inspect the violin-form SVG. It may be used for a purposeful crop, frame, mask, divider, subtle background graphic, or section transition if technically suitable. Preserve its recognisable form and proportions. Do not repeat it as meaningless decoration. If it is unsuitable for masking, display it as a normal image.

### Asset integrity
The supplied assets must have clear roles. Do not silently omit them. If the repository is inaccessible, report that limitation and ask for the required files or use only assets actually available in the project.

## 5. Mobile-first responsive requirements

The primary design target is portrait mobile, especially widths of 320, 360, 375, 390, 402, and 430 CSS pixels.

Do not assume a fixed viewport height. Account for browser chrome and use `100dvh` where appropriate, with fallbacks if needed.

### Mobile layout rules
- Use the available width effectively; do not constrain everything to an unnecessarily narrow column.
- Start with approximately 16px horizontal page padding, increasing to 20–24px only where appropriate.
- Avoid oversized card padding, unnecessary empty areas, and excessively tall sections.
- Use whitespace intentionally to create rhythm, hierarchy, and emphasis.
- Keep event essentials visible early in the experience.
- Do not force a full-viewport hero if it hides important information below the fold.
- Long text must remain readable; never compress it merely to reduce page length.
- No unintended horizontal scrolling, clipped content, overlapping controls, or tiny tap targets.
- All interactions must work by touch, not only hover.
- Test short and tall phone viewports.

### Desktop adaptation
Only after the mobile design is coherent, adapt it to larger screens. Preserve the same identity and content structure while using additional horizontal space thoughtfully. Do not simply scale the mobile page uniformly, and do not redesign the experience around desktop first.

## 6. Visual design and dark theme

The site must use a permanent dark theme because it will be used at a nighttime concert.

- Use dark backgrounds throughout the entire page.
- Use restrained dark elevated surfaces and subtle dividers.
- Use readable warm-white or light-neutral text rather than large areas of pure bright white.
- Use the accent color derived from `color.svg`.
- Avoid strong glow effects, random neon, flashy gradients, and decorative effects unrelated to the poster.
- Control bright imagery with thoughtful placement or subtle overlays only when necessary; do not destroy important image details.
- Prevent white flashes during initial loading, language switching, and section transitions.
- Apply dark colors to the document, body, navigation, cards, controls, and browser-native color scheme where supported.
- Use `color-scheme: dark` and explicit background colors.
- Do not implement a light/dark toggle or automatically switch to light mode based on OS settings.

Dark must not mean low contrast. Body text and controls must remain accessible.

## 7. Typography and spacing tokens

Use the following mobile scale as a starting point. Refine only after testing the actual Abar font and the selected Latin font.

| Token | Persian | English | Typical use |
|---|---:|---:|---|
| Display | 32–36px | 34–38px | Large section/hero text, excluding the official title SVG |
| H1 | 28px | 30px | Main section heading |
| H2 | 24px | 26px | Section heading |
| H3 | 20px | 21px | Subsection or work title |
| H4 | 18px | 18px | Card or small section title |
| Body Large | 17px | 17px | Lead text |
| Body | 15–16px | 15–16px | Main reading text |
| Body Small | 14px | 14px | Supporting content |
| Caption | 12px | 12px | Metadata |
| Micro | 11px | 11px | Rare secondary labels only |

### Font weights
- Persian Medium (500): body text
- Persian SemiBold (600): emphasis and secondary headings
- Persian Bold (700): headings
- Persian ExtraBold (800): limited display use

### Line height
- Persian body text: approximately 1.7–1.8
- English body text: approximately 1.5–1.65
- Headings: approximately 1.25–1.45

The Persian and English font sizes do not need to be numerically identical. Match visual weight, readability, hierarchy, and line length.

### Spacing system
Use a 4px base:
- 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px

Typical guidance:
- Mobile horizontal padding: 16px by default
- Touch targets: aim for 44–48px high
- Related content spacing: 16–24px
- Section spacing: 32–48px
- Major narrative transitions: 56–80px where the content justifies it

Do not apply these values mechanically if doing so harms the composition. Maintain consistency.

## 8. Information architecture

Build a single-page, continuous-scroll digital brochure with these sections:

### 8.1 Hero
- Official title SVG
- Event title and composer identity as needed, without competing with the official title
- Event date, time, and venue
- Subtle scroll cue

The title asset is the visual focal point. Do not surround it with many competing headings or decorative objects.

### 8.2 Event information
Present the verified date, time, venue, and organizer clearly and compactly.

The supplied brochure is the authority for event details. The currently transcribed details are:
- Event: موسیقی نو در ایران
- Composer: علیرضا مشایخی
- Organizer: گروه موسیقی تهران
- Printed date: پنجشنبه ۱۴ آبان ۱۴۰۵
- Printed time: ۲۱:۳۰
- Venue: تالار وحدت تهران

Verify each value against the original PDF before publication. Do not add ticket prices, booking links, contact information, or other unverified details.

### 8.3 Concept section
Introduce the program’s central idea, including «تداوم تفکر» if confirmed in the source brochure. Use source-derived content only.

### 8.4 Essay
Preserve the complete essay in the brochure. Long text may be placed in an expandable section or a dedicated reading area, but it must remain accessible and must not be silently shortened.

### 8.5 Concert program
Display all works in the exact source order. Each work should show the available source information:
- Full title
- Opus number
- Composition year
- Description
- Instruments and performers
- Ensemble/orchestra
- Conductor
- “World premiere” indicator only when explicitly stated in the brochure

The current transcription suggests six works:
1. Violin Concerto No. 2 for violin and percussion, Op. 212
2. «پیچک دوم» for two recorders, cello, and percussion, Op. 293
3. String Quartet No. 4, Op. 176
4. String Quartet No. 6, «حادثه معکوس», for string quartet and percussion, Op. 302
5. «دریا» — an Iranian suite for string orchestra, Op. 137 No. 1
6. Concerto for viola, string orchestra, and percussion, Op. 264

This list is a working transcription, not a replacement for the PDF. Verify every title, opus number, year, instrumentation, performer, and premiere label against the source before publishing.

### Work interactions
- Use a distinctive number and clear title for each work.
- Keep key metadata visible by default.
- Expand additional details with a real button or touch interaction.
- Expose expanded/collapsed state accessibly.
- Avoid layout jumps where possible.
- Do not rely on hover for mobile functionality.

### 8.6 Intermission
Place the “تنفس” / intermission marker exactly where it appears in the source program. Give it a distinct visual treatment. Do not invent a duration.

### 8.7 Artists and biographies
Preserve every biography and artist role included in the PDF.
- Use real portraits only if a trustworthy image is available.
- Never fabricate portraits or imply an AI-generated face is a real performer.
- If no reliable image is available, use typography or the supplied abstract graphic language.
- Biographies must be accessible on touch and keyboard.

### 8.8 Ensembles and orchestras
Present ensembles and orchestras identified in the source. Keep group names and roles accurate. Where the source supports it, show which works feature each ensemble.

### 8.9 Credits and acknowledgements
Include all credits and acknowledgements from the PDF. Do not omit names or invent additional roles.

### 8.10 Footer
End the experience with a restrained visual conclusion that connects back to the event identity. Use only verified official links present in the source or explicitly supplied by the project owner.

## 9. Motion and interaction

Use restrained, intentional motion:
- Scroll-triggered reveal
- Subtle title/graphic movement
- Compact navigation
- Reading progress indicator
- Expandable work details
- Expandable biographies
- Back-to-top control
- Smooth but non-blocking transitions

Requirements:
- Never block native scrolling.
- Avoid long intro sequences.
- Never delay access to essential information.
- Avoid heavy WebGL or complex effects unless strictly justified.
- Respect `prefers-reduced-motion`.
- No autoplay audio.
- Every visible button or link must work.
- Focus states must be visible.
- Motion must not make the page feel brighter or visually aggressive in a dark room.

## 10. Persian/English implementation

Persian is the default language.

For Persian:
- Set document language to `fa`.
- Set direction to `rtl`.
- Use Abar for Persian content.
- Use correct Persian punctuation and half-spaces.

For English:
- Set document language to `en`.
- Set direction to `ltr`.
- Use the repository’s Latin font if one exists; otherwise use an appropriate system sans-serif.
- Ensure alignment, layout order, directional icons, and spacing are appropriate for LTR.

Language switch:
- Use a clear `FA / EN` control.
- Translate all interface labels and brochure content.
- Preserve the visitor’s current section/reading position when switching.
- Store the selected language for a later visit if appropriate, without making initial Persian rendering depend on JavaScript.
- Verify mixed Persian/Latin strings, opus numbers, years, punctuation, and numerals.
- Use logical CSS properties such as `margin-inline-start`, `padding-inline-end`, and `inset-inline-start` wherever appropriate.
- Use `dir="ltr"` for isolated Latin values when necessary.

Do not use a superficial language toggle that only changes labels while leaving the main content untranslated.

## 11. Technical implementation

Inspect the existing project before editing. If an established framework or build setup already exists, preserve it unless there is a concrete reason to change it. Do not create a disconnected parallel project.

For a new standalone implementation, use a lightweight HTML/CSS/JavaScript structure. For an existing app, follow its architecture.

Requirements:
- Semantic HTML
- Maintainable CSS with design tokens
- Correct local asset paths
- Minimal unnecessary dependencies
- Real working interactions
- No invented asset paths
- No API keys or secrets in client code
- Graceful handling of missing external assets
- No console errors that prevent key functionality

Recommended structure for a simple multi-file implementation:

```text
digital-concert-brochure/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── fonts/
│   ├── brand/
│   └── images/
├── data/
│   ├── content-fa.json
│   └── content-en.json
├── README.md
└── SPEC.md
```

This structure is a recommendation, not a requirement to restructure an existing app. Use actual filenames found in the repository.

Keep content data separate from UI logic where practical so text corrections and translation updates are straightforward.

## 12. Performance, accessibility, and browser behavior

- Optimize images and avoid unnecessarily large assets.
- Lazy-load below-the-fold imagery.
- Set image dimensions to minimize layout shift.
- Keep the initial page lightweight.
- Use accessible contrast.
- Use semantic heading order.
- Provide meaningful alt text for informative images.
- Make controls keyboard accessible.
- Provide visible focus indicators.
- Aim for touch targets at least 44px high.
- Support reduced motion.
- Prevent horizontal overflow.
- Set dark backgrounds from the first render.
- Do not claim browser testing unless actually performed.

## 13. Out of scope

Unless separately requested, do not build:
- CMS or admin panel
- Database
- Login or registration
- Ticket sales or payment
- Standalone mobile app
- Light theme or theme switcher
- Autoplay audio
- Fabricated artist portraits
- Unverified event details

## 14. Acceptance criteria

### Mobile
- [ ] Designed first for portrait widths from 320px to 430px
- [ ] No unintended horizontal scrolling
- [ ] Hero and event essentials are clear early
- [ ] Text is readable on real mobile dimensions
- [ ] Touch interactions work
- [ ] Layout adapts to short and tall viewports

### Brand
- [ ] Official title SVG is unchanged
- [ ] Colors are derived from `color.svg`
- [ ] Poster has been inspected and used as a visual reference
- [ ] Violin-form SVG has a purposeful role
- [ ] Actual Abar font files are used
- [ ] Dark theme is consistent throughout

### Content
- [ ] Entire PDF has been reviewed
- [ ] All works are in the correct order
- [ ] Titles, opus numbers, dates, and roles are verified
- [ ] Full essay and biographies remain accessible
- [ ] Credits and acknowledgements are preserved
- [ ] Unverified information is not presented as fact

### Bilingual
- [ ] Persian is the default language
- [ ] RTL and LTR layouts both work
- [ ] All content is available in English
- [ ] Font scale is appropriate for each language
- [ ] Language switching preserves reading position

### Technical
- [ ] Actual files and paths are verified
- [ ] Visible controls work
- [ ] Important console errors are resolved
- [ ] Loading is reasonable on mobile
- [ ] Reduced-motion preference is respected
- [ ] README explains how to run the project
- [ ] Untested behavior is explicitly reported

## 15. Final deliverables

Deliver:
1. A working, polished mobile-first digital brochure
2. Complete Persian and English experiences
3. Dark-only visual design
4. Faithful use of the official assets
5. Verified content from the source PDF
6. Functional interactions
7. `README.md` with setup/run instructions
8. This `SPEC.md`
9. A concise list of any missing assets, unresolved content questions, or tests not performed

The success criterion is a QR-accessible nighttime mobile experience that presents the concert’s identity, program, artists, and credits in a coherent, readable, refined, and interactive digital format.

Before implementation, inspect the actual repository and project files. Make reasonable design decisions without asking about routine choices. Ask for clarification only when a required asset is inaccessible or source content is genuinely ambiguous. Do not invent missing facts or claim work/tests that were not performed.
