# UI Review — Feza-Co Official Website

**Date:** 2026-05-24
**Auditor:** gsd-ui-auditor
**Method:** 6-Pillar Retroactive Visual Audit (No UI-SPEC — abstract standards)
**Screenshots:** Not captured (dev server detected on port 3000 but Playwright-MCP unavailable; code-only audit performed)
**Supplementary context:** HEURISTIC_EVAL_FEZACO.md, HCI_REVIEW_FEZACO.md, COLOR_AUDIT_FEZACO.md reviewed but treated as prior-cycle references, not baseline.

---

## Score Summary

| Pillar | Score | Key Finding |
|--------|-------|-------------|
| 1. Copywriting | 3/4 | Strong brand voice with no generic labels; `//` prefix overused in section headers but nav labels are clean |
| 2. Visuals | 3/4 | Cohesive tech-aesthetic with gradient hero, glass cards, status dots; no real imagery or illustration system |
| 3. Color | 2/4 | Eight confirmed WCAG AA contrast failures in light mode; rose-400 on 404 not aria-hidden; indigo-500 still used decoratively on MemberCard |
| 4. Typography | 3/4 | Three deliberate font families well-deployed; `font-orbitron` alias is actually Archivo — misleading name; 8 responsive clamp sizes outside Tailwind scale |
| 5. Spacing | 3/4 | Consistent section rhythm (py-16/20/28 progression); scattered arbitrary pixel font sizes and tracking values create sub-scale noise |
| 6. Experience Design | 2/4 | Mobile nav links tabbable while visually hidden (WCAG 2.1 keyboard trap); aria-current="true" incorrect value; no contact form; no loading/skeleton states |

**Overall: 16/24**

---

## Priority Fix List

1. **BLOCKER — Mobile nav keyboard trap** (`components/Navbar.tsx:236-274`): When the mobile menu is closed (`isMenuOpen=false`), the three nav Link elements are visually hidden via `max-h-0 opacity-0` but remain in the DOM with no `tabIndex=-1`, `aria-hidden`, or `inert` attribute. Keyboard-only users Tab into invisible links. Fix: add `tabIndex={isMenuOpen ? 0 : -1}` to each mobile nav Link, or add `aria-hidden={!isMenuOpen}` plus `inert` to the container div.

2. **BLOCKER — 5 light-mode WCAG AA contrast failures still in production** (`app/globals.css`, multiple components): `indigo-500` text (#6366f1, 4.28:1 on #fafafa), `cyan-600` (#0891b2, 3.53:1 — removed in most places but still referenced as decoration), `rose-500` on white (3.67:1 — partially fixed: ProjectCard uses rose-700 but `app/not-found.tsx:105` uses `text-rose-400` (~4.0:1) without aria-hidden. Fix: add `aria-hidden` to the decorative rose-400 `//` span in not-found.tsx; audit any remaining `text-rose-500` or `text-rose-400` text that is not aria-hidden.

3. **BLOCKER — `aria-current="true"` is not a valid ARIA token for navigational context** (`components/Navbar.tsx:149,247`): The spec value for identifying the current page/section in a nav is `aria-current="page"` (or `"location"` for anchor scroll). The string `"true"` is not a recognised token and will be ignored or misread by some screen readers. Fix: change to `aria-current={isActive ? "page" : undefined}`.

4. **WARNING — H4a / focus ring: desktop nav links use `focus:outline-none` with `focus-visible:ring-2` — correct pattern, but mobile nav links use `focus:ring-2` without `focus-visible` qualifier** (`components/Navbar.tsx:251`): Mobile nav links fire the ring on mouse click as well as keyboard, unlike every other interactive element in the site. Fix: change `focus:ring-2` to `focus-visible:ring-2` to match the site-wide pattern.

5. **WARNING — Contact section has no form and no copy-fallback for when mailto fails** (`app/page.tsx:548-574`): `CopyEmail` is present (good), but the mailto link itself has no adjacent disclosure that it will open an email client. Users without a configured mail client get a silent failure. Fix: add a one-line text label adjacent to the email button: `"E-posta uygulaması açar"` or similar — one line of microcopy.

6. **WARNING — ProjectCard has no full-card click target; MemberCard does** (`components/ProjectCard.tsx` vs `components/MemberCard.tsx:24-31`): The two card types use fundamentally different interaction models on the same page. ProjectCard requires users to find and click the small "Detayları Gör" inline link at the bottom, while MemberCard offers an invisible overlay link covering the entire card. Fix: add an overlay `<Link>` to ProjectCard matching the MemberCard pattern, or remove the MemberCard overlay and unify on an explicit visible CTA.

7. **WARNING — Section header `SectionHeader` is passed `label="// Ekip"` with the `//` prefix baked into the string** (`app/page.tsx:368,427`): This means the `//` is content, not decoration, and will be read by screen readers as "slash slash Ekip". The `//` inside the rendered `<span>` is not aria-hidden at the `SectionHeader` level, only in ad-hoc usage. Fix: either strip `//` from all `label` props and add it as a decorative span inside the component with `aria-hidden`, or add `aria-hidden` to the rendered `//` span in `SectionHeader`.

8. **WARNING — Tailwind font alias names are misleading** (`tailwind.config.ts:13-17`): `font-orbitron` resolves to Archivo (`var(--font-archivo)`). `font-outfit` resolves to Space Grotesk (`var(--font-space-grotesk)`). `font-rajdhani` also resolves to Space Grotesk. Neither Orbitron, Outfit, nor Rajdhani are loaded. Any future developer adding `font-orbitron` based on the token name will expect the Orbitron typeface (geometric angular sci-fi display font) but get Archivo (a wide grotesque). Fix: rename tokens to `font-archivo` / `font-grotesk` / `font-mono`, or add a comment block explaining the aliasing rationale.

9. **WARNING — H2b: "Aktif Kolektif" status badge appears in both the Navbar AND the Hero section** (`components/Navbar.tsx:183-186`, `app/page.tsx:106-115`): Two identical pulsing green badges on the same viewport create visual redundancy and may confuse users about which is authoritative. Fix: remove the Hero instance; the Navbar badge is visible on all pages and provides the signal site-wide.

10. **WARNING — MemberCard social link LinkedIn uses `hover:text-blue-600`** (`components/MemberCard.tsx:133`) **while every other hover across the site uses `indigo`**: `hover:text-blue-600` is Tailwind's blue-600 (#2563eb at 600 level = #2563eb — actually same hex as the brand indigo, but using Tailwind built-in `blue-600` rather than the custom `feza-indigo` token creates a maintenance risk. The GitHub link in the same component uses `hover:text-feza-text` — three different hover behaviors for two social icons in the same component row. Fix: standardise all hover states in MemberCard to `hover:text-indigo-600 dark:hover:text-indigo-400`.

---

## Detailed Findings

### Pillar 1: Copywriting (3/4)

**Strengths**

- Zero generic English labels found. No "Submit", "Click Here", "Cancel", "Save" in any interactive element.
- All CTAs are task-specific Turkish: "Projeleri Gör", "Ekibi Tanı", "İletişime Geç", "Kolektife Dön", "Profili Gör", "Canlı Demo", "GitHub Repo".
- Hero tagline has clear structure: bold statement → amplifying qualifier → stats.
- 404 page copy is contextually appropriate: "Sayfa bu kolektifte yok." uses the collective's own language register.
- `CopyEmail` provides a recoverable path when mail client is unavailable — good microcopy: "Kopyala" → "Kopyalandı" (2-second feedback).
- The manifesto callout ("Bu kolektifte hiç kimse Lead, Senior veya Manager değildir") does its UX job in one paragraph: sets expectations and signals brand values without a separate About page.
- Response-time disclosure added to contact section: "E-postalarınızı genellikle 2 iş günü içinde yanıtlıyoruz" (line 607).

**Issues**

- **WARNING** — `SectionHeader` receives `label="// Ekip"` and `label="// Projeler"` (`app/page.tsx:368,427`). The `//` is part of the string content, not a decorative element with `aria-hidden`. Screen readers will vocalise "slash slash Ekip" or "slash slash Projeler". The rendered span inside `SectionHeader` does not apply `aria-hidden` to the `//` prefix.
- **WARNING** — Section eyebrow labels inside `SectionHeader` use `//` notation (`"// İletişim"`, `"// Vaka Çalışması"`, `"// Ekip"`) as content passed to the label prop. The Navbar and Footer nav links correctly use clean labels ("Ekip", "Projeler") — creating a discrepancy between navigation context and in-page context labels.
- **WARNING** — "Yakında" (soon) placeholder in the projects section (`app/page.tsx:463`) is complete microcopy but gives no time horizon or subscription path. For a user who wants to track the collective's next project, there is no call to action.
- **Minor** — "Profili Gör" in MemberCard is displayed in ALLCAPS (`PROFİLİ GÖR`, `components/MemberCard.tsx:164`). At text-[10px], all-caps tracking-widest is nearly illegible on small screens. "Detayları Gör" on ProjectCard is mixed case at the same size — inconsistent treatment of CTA typography.

**Top Fix**

Strip `//` from all `label` prop values passed to `SectionHeader`, and render it as an `aria-hidden` decorative element inside the component itself.

---

### Pillar 2: Visuals (3/4)

**Strengths**

- The hero treatment (animated gradient FEZA wordmark + shimmer line + —CO subtitle + ambient glow orbs) creates a distinctive focal point. The technique is coherent and not accidental-looking.
- `MouseGlow` adds a premium cursor-reactive radial gradient on desktop. It correctly checks `prefers-reduced-motion` before attaching event listeners.
- `StatusDot` communicates three states (active/planning/completed) with color + animation + text label — triple-redundant, color-blind safe.
- Cards use a consistent visual grammar: left or top accent bar, corner glow on hover, shimmer bottom bar on hover — all `aria-hidden`, none breaking the text layer.
- Ticker / marquee uses fade-mask edges and `motion-reduce:animate-none` pause — polished detail.
- Avatar gradient fallbacks (when no image) use brand gradients, preventing the "grey initials blob" anti-pattern.
- The 404 page reuses the same visual language as the rest of the site (grid overlay, gradient 404 numeral, consistent button patterns) — robust error state.

**Issues**

- **WARNING** — No real photography or illustration is used anywhere in the site. Avatars are either uploaded photos or gradient-initial fallbacks. For a technology collective presenting portfolios to potential partners and employers, the absence of any project screenshots, event photos, or diagrams makes the "Projeler" section text-only. Each ProjectCard describes work but shows nothing of it.
- **WARNING** — The `Marquee` ticker (`components/Marquee.tsx`) is `aria-hidden="true"` on the outer container in `TickerSection` (`app/page.tsx:299`). This is correct for non-interactive content. However, the Marquee component itself renders a `role="region"` when a `label` prop is passed but no `label` prop is passed from `TickerSection`, leaving the role unset. This is fine, but the combination of `aria-hidden` on the outer div and no role on the inner div means the entire ticker section is invisible to assistive technology — correct for decorative content, but the hackathon/tech list it displays IS informational. If a screen reader user cannot perceive this content, there should be a visually-hidden text alternative elsewhere that names the hackathons.
- **Minor** — The "v1 · est. 2026" vertical version marker in the hero (`app/page.tsx:89-96`) has `aria-hidden` which is correct, but at `text-[10px]` with `writing-mode: vertical-rl` and `rotate-180`, it is effectively illegible on retina displays at low brightness. It reads as visual noise rather than a meaningful design element.
- **Minor** — Both Navbar and Hero show an "Aktif Kolektif" pulsing green badge simultaneously (`Navbar.tsx:183`, `page.tsx:114`). Two identical animated badges on the same screen viewport is visual redundancy.

**Top Fix**

Add at minimum one visual asset per ProjectCard (screenshot thumbnail, architecture diagram, or event photo). Even a placeholder-branded gradient card image at 16:9 ratio would break the wall-of-text pattern in the projects section.

---

### Pillar 3: Color (2/4)

**Strengths**

- The design token system is rigorous: `globals.css` defines separate light/dark values for every semantic role, with WCAG ratios documented inline in comments.
- Dark mode is complete and tested: all primary text tokens (--text through --text-xs) pass AA or better in dark mode. `indigo-400` dark passes 6.06:1 on card (#161618).
- 60-30-10 distribution is approximately correct (neutral ~62%, indigo variants ~27%, cyan+emerald ~8%).
- Major color audit fixes are applied: cyan-700 is now used for the "—CO" logo accent instead of cyan-600 (`Navbar.tsx:137`, `Footer.tsx:29`). The hero gradient replaces `var(--cyan)` with `var(--cyan-strong)` (#0e7490) (`globals.css:183`). Rose-700 is used for "Problem" label in ProjectCard (`components/ProjectCard.tsx:168`) and project detail page.
- Focus rings use solid `ring-[#2563eb]` with `ring-offset-2` — the focus ring contrast failure (F7 in COLOR_AUDIT) is fixed across most components.

**Issues**

- **BLOCKER** — `app/not-found.tsx:105` uses `text-rose-400` for the decorative `//` prefix: `<span className="text-rose-400">{"//"}</span>`. Rose-400 (#fb7185) on a #fafafa background is approximately 4.0:1 — below the 4.5:1 AA threshold for normal text. The element is NOT marked `aria-hidden`. Even as a decorative prefix, it must either pass 4.5:1 or carry `aria-hidden="true"`. Fix: `<span className="text-rose-400" aria-hidden="true">{"//"}</span>` OR change to `text-rose-700 dark:text-rose-400`.
- **WARNING** — `components/MemberCard.tsx:160` uses `text-indigo-400/60` (alpha 60% opacity on a light card background) for the default "PROFİLİ GÖR" label state. Semi-transparent `indigo-400` at 60% on white composes to approximately #c2c9fb — roughly 1.4:1 contrast. While this low-contrast state is intentional (the label is "ambient" in resting state and brightens on hover), it is technically text content visible to screen readers at all times, not aria-hidden.
- **WARNING** — The Tailwind `colors.feza.indigo` token in `tailwind.config.ts:34` is set to the literal `"#2563eb"` (a fixed hex) rather than `"var(--indigo)"`. This means if the light/dark CSS variable switches, the `feza.indigo` color token will NOT follow. However, since `--indigo` is `#2563eb` in light and `#3b82f6` in dark, and most accent text in the code uses `text-[#2563eb] dark:text-indigo-400` inline anyway, the impact is currently zero. But it creates a maintenance trap.
- **Warning** — `indigo-500` (#6366f1) appears in decorative contexts: `bg-indigo-500` on scroll indicator dot (`app/page.tsx:281`), StatusDot completed state (`components/ui.tsx:29`). These are background/indicator uses, not text, so the 4.28:1 text-contrast failure does not directly apply. However the `completed` StatusDot uses `bg-indigo-500` as a pure color signal without any label on the dot element itself — the label is adjacent text, which is correct.
- **Minor** — `text-emerald-500` used for "Çıktı" label in case study grid (`components/ProjectCard.tsx:170`, `app/projects/[id]/page.tsx:163`) is Tailwind's emerald-500 (#10b981). On #ffffff (card background) this is 2.32:1 — a significant contrast failure for the "Çıktı" label text. On the feza-card (#ffffff) light mode surface, it fails AA for normal text. Fix: change to `text-emerald-700 dark:text-emerald-400` to match the emerald badge pattern used elsewhere.

**Top Fix**

Change `text-rose-400` on `not-found.tsx:105` to include `aria-hidden="true"`. Change `text-emerald-500` in ProjectCard and project detail case study "Çıktı" label to `text-emerald-700 dark:text-emerald-400`.

---

### Pillar 4: Typography (3/4)

**Strengths**

- Three-font system is well-differentiated by role: Archivo (display/brand headings via `font-orbitron` alias), Space Grotesk (body/UI via `font-outfit`), Space Mono (labels/tags/monospace via `font-mono`). No fourth font.
- Type hierarchy is clear at a glance: giant clamp hero → section h2 clamp → h3 base/lg → body base → mono labels at 10-11px.
- `text-balance` on section headings prevents awkward wrapping on medium screens.
- Responsive fluid type is achieved via CSS `clamp()` on the display sizes — hero h1 spans 52px to 192px, which is correctly responsive without breakpoint jumps.
- Space Mono at `text-[10px]` tracking-widest for label/tag text is a deliberate micro-typographic choice that reads well at its intended scale and creates a strong visual pattern language.
- `font-display: swap` on all three font imports prevents invisible-text during load.

**Issues**

- **WARNING** — The `font-orbitron` Tailwind alias resolves to Archivo (`var(--font-archivo)`) and `font-outfit` resolves to Space Grotesk (`var(--font-space-grotesk)`) — `tailwind.config.ts:13-14`. Neither Orbitron nor Outfit are loaded. The aliases carry the wrong semantic names. A future contributor reading `font-orbitron` and expecting geometric display letterforms will be confused. Additionally, `font-rajdhani` is defined and maps to Space Grotesk — Rajdhani is a completely different typeface (condensed Indian-script support). This is not a render bug, but it is a maintenance hazard.
- **WARNING** — Eight occurrences of inline `style={{ fontSize: "clamp(...)" }}` bypass the Tailwind type scale entirely (`app/page.tsx` lines 140, 163, 178, 329, 533; `app/members/[slug]/page.tsx` line 151; `app/projects/[id]/page.tsx` line 97; `app/not-found.tsx` lines 46, 56). The values are well-chosen (1.1rem min to 12rem max) but because they exist in inline styles rather than Tailwind utilities, they cannot be overridden by consumers of the component and will not respond to Tailwind's JIT purge correctly. The hero h1 `clamp(3.25rem, 14vw, 12rem)` has a 12rem (192px) maximum — at 1440px viewport this renders FEZA at a visually impactful scale that may overflow on 1280px if the font is heavier than expected.
- **Minor** — Font size `text-[9px]` used for scroll indicator label (`app/page.tsx:276`) is sub-legibility threshold (9px = ~6.75pt). Minimum legible text for body copy is 12px; 9px falls in "decorative microtype" territory. The element is `aria-hidden` which is correct, but visually it will be essentially unreadable on non-retina displays.
- **Minor** — Three different label/caption sizes in the mono layer: `text-[9px]`, `text-[10px]`, `text-[11px]`. These are all below `text-xs` (12px) and create a minor visual scale inconsistency when adjacent elements use different sub-12px sizes.

**Top Fix**

Rename Tailwind font aliases from `orbitron`/`outfit`/`rajdhani` to `archivo`/`grotesk`/`mono` (or equivalent accurate names), and add code comments explaining the mapping. Consolidate the three sub-12px mono sizes to a single `text-[10px]` standard.

---

### Pillar 5: Spacing (3/4)

**Strengths**

- Section vertical rhythm is consistent: all major content sections use `py-16 sm:py-20 md:py-28` — a three-step mobile-to-desktop progression that creates clear reading rhythm.
- Detail pages use `pt-24 pb-16 sm:pb-20` — consistent with navbar height clearance.
- Grid gap rhythm is coherent: `gap-4` to `gap-5` for card grids, `gap-3` for list rows, `gap-2` for inline tags.
- Horizontal container uses a consistent `px-5 sm:px-6 md:px-10` pattern across all sections.
- Card internal padding `p-6` (MemberCard), `pl-5/pr-4 py-6 sm:pl-8 sm:pr-7 sm:py-7 md:py-8` (ProjectCard) follows a sensible responsive scale.
- `scroll-mt-20` on anchor sections correctly accounts for the fixed navbar height.

**Issues**

- **WARNING** — Arbitrary `tracking-[0.4em]`, `tracking-[0.3em]`, `tracking-[0.2em]` values scattered across components (`app/page.tsx:89,124`, `app/not-found.tsx:104`). Tailwind's tracking scale provides `tracking-widest` (0.1em) as the maximum. The above values are 2–4× that and exist as arbitrary values. Since Tailwind's JIT handles these, they do not break anything, but they create three different ultra-wide tracking levels where one (tracking-widest) should suffice.
- **WARNING** — The contact section inner container uses `px-6 sm:px-10 md:px-16 py-14 sm:py-16 md:py-20` (`app/page.tsx:482`) — a second padded surface inside the already-padded outer container. The combined horizontal gutter at desktop is 10rem (outer) + 16rem (inner) = 26rem per side, which may over-constrain the contact content width on 1280px viewports.
- **Minor** — `mb-2 sm:mb-6` on the project count row (`app/page.tsx:431`) — the jump from 8px to 24px across a single breakpoint is larger than the general rhythm jump (e.g., `py-16` to `py-20` is 4px). This may cause a layout jump on the sm→md transition.
- **Minor** — The `mt-10 sm:mt-12` for the hero stats grid (`app/page.tsx:243`) and `mt-8 sm:mt-10` for the CTA row (`app/page.tsx:192`) are close in scale but different enough that at `sm` breakpoint the CTA and stats have different visual breathing room relative to the tagline above them.

**Top Fix**

Consolidate the three arbitrary tracking values (`[0.2em]`, `[0.3em]`, `[0.4em]`) to `tracking-widest` throughout. Apply this systematically with a grep replacement.

---

### Pillar 6: Experience Design (2/4)

**Strengths**

- `prefers-reduced-motion` is handled at three levels: CSS `@media` rule kills all animations globally (`globals.css:302-333`), `CountUp.tsx` checks `matchMedia` before running `requestAnimationFrame`, `MouseGlow.tsx` returns early on reduced motion. This is three-layer reduced-motion support — thorough.
- Skip link ("Ana içeriğe geç") is implemented as an sr-only element that becomes visible on focus (`Navbar.tsx:99-107`) and focuses `#main-content`. Fully functional.
- `TeamPopover` fixes from prior audit are applied: `role="dialog"` (not `tooltip`), `relatedTarget` check in `onBlur`, Escape key returns focus to trigger, first link receives focus on open. These are correct.
- `ThemeToggle` uses `mounted` guard to prevent SSR/hydration mismatch — icon is `null` until client-side, then shows the correct light/dark icon.
- `IntersectionObserver` active-section tracking is implemented in Navbar — `aria-current` set on matching nav links as the user scrolls.
- `CopyEmail` provides a clipboard fallback for users without a mail client, with immediate "Kopyalandı" feedback and auto-reset after 2 seconds.
- 404 page is fully implemented with on-brand design, two recovery paths, and a contextual help text.
- `BackButton` uses `window.history.length > 1` to decide between `router.back()` and the fallback href — preserving scroll position for users who navigated from within the site.

**Issues**

- **BLOCKER — Mobile nav keyboard trap** (`components/Navbar.tsx:234-274`): The mobile navigation container uses `max-h-0 opacity-0` to visually hide the menu. No `inert`, no `aria-hidden`, no conditional `tabIndex=-1` is applied to the contained Link elements. When `isMenuOpen=false`, all three nav links are reachable via Tab from the keyboard despite being visually invisible. A keyboard user Tabbing past the hamburger button will silently Tab through three invisible "Ekip", "Projeler", "İletişim" links before reaching page content. This is WCAG 2.1 SC 2.1.2 No Keyboard Trap (and 2.4.3 Focus Order). Fix: add `tabIndex={isMenuOpen ? 0 : -1}` to each mobile nav Link, or add `aria-hidden={!isMenuOpen}` + `inert` prop to the nav container.
- **BLOCKER — `aria-current="true"` is not a valid value** (`Navbar.tsx:149,247`): Valid ARIA values are `"page"`, `"step"`, `"location"`, `"date"`, `"time"`, or `"false"`. The string `"true"` is not a recognized token. This means screen readers may expose the attribute but not convey useful navigation context. Fix: `aria-current={isActive ? "page" : undefined}`.
- **WARNING — No loading states anywhere**: The site is a static Next.js site with no async data fetching on the client, so loading states are not strictly required. However `CountUp` animates from 0 to the final value on intersection — for users with JS disabled or slow hydration, the raw number is shown immediately (good). There are no Suspense boundaries, skeleton screens, or spinner states across any route. This is acceptable for a static portfolio, but noted.
- **WARNING — No error boundaries**: No `ErrorBoundary` components or `error.tsx` Next.js route files are present. If a component throws during render (e.g., `getMemberBySlug` returns unexpected data), the entire page will crash with a generic Next.js error page rather than a branded recovery state.
- **WARNING — Contact section has no form; mailto has no disclosure** (`app/page.tsx:548-570`): The email link opens a mail client with no warning. There is no `title` attribute on the `<a href="mailto:...">` link indicating it will launch an external application. WCAG 3.2.2 (On Input) and general UX best practice recommend disclosing this behavior. The `CopyEmail` button adjacent to it is good mitigation, but the disclosure is still absent.
- **WARNING — `TeamPopover` trigger is a `div` with `role="button"` and `tabIndex={0}` but no explicit `type`** (`components/TeamPopover.tsx:55-81`): `role="button"` on a `div` requires keyboard activation via both Enter AND Space keys. The component uses `onClick` which fires on both Enter and Space when `role="button"` is correct — however, the `onMouseEnter`/`onMouseLeave` handlers also control open state, meaning the component opens on hover AND on focus/click, which can cause it to open twice or conflict when using keyboard + mouse simultaneously.
- **Minor — H2b duplicate status badge**: Two "Aktif Kolektif" badges with identical pulsing green dots exist simultaneously on the same viewport — one in the Navbar right rail and one in the Hero status row. The Navbar badge is correct; the Hero badge is redundant.
- **Minor — MemberCard "PROFİLİ GÖR" text is `text-indigo-400/60` in resting state**: While the fix intent was to make it "always visible" (`components/MemberCard.tsx` comment line 157: `"H6b fix: affordance"`), a 60%-opacity indigo-400 on white is visually near-invisible (~1.4:1). The affordance cue is present in theory but fails in practice due to the opacity choice. A minimum resting opacity of 80% or a change to `text-feza-muted-xs` (5.1:1) would make it genuinely always-visible.

**Top Fix**

Add `tabIndex={isMenuOpen ? 0 : -1}` to every Link inside the mobile nav container in `components/Navbar.tsx`. This single change resolves the WCAG 2.1 keyboard trap without visual impact.

---

## Files Audited

- `/Users/ahmetkarakoyun/Desktop/official-website/app/globals.css`
- `/Users/ahmetkarakoyun/Desktop/official-website/app/layout.tsx`
- `/Users/ahmetkarakoyun/Desktop/official-website/app/page.tsx`
- `/Users/ahmetkarakoyun/Desktop/official-website/app/not-found.tsx`
- `/Users/ahmetkarakoyun/Desktop/official-website/app/members/[slug]/page.tsx`
- `/Users/ahmetkarakoyun/Desktop/official-website/app/projects/[id]/page.tsx`
- `/Users/ahmetkarakoyun/Desktop/official-website/components/Navbar.tsx`
- `/Users/ahmetkarakoyun/Desktop/official-website/components/Footer.tsx`
- `/Users/ahmetkarakoyun/Desktop/official-website/components/MemberCard.tsx`
- `/Users/ahmetkarakoyun/Desktop/official-website/components/ProjectCard.tsx`
- `/Users/ahmetkarakoyun/Desktop/official-website/components/TeamPopover.tsx`
- `/Users/ahmetkarakoyun/Desktop/official-website/components/Marquee.tsx`
- `/Users/ahmetkarakoyun/Desktop/official-website/components/BackButton.tsx`
- `/Users/ahmetkarakoyun/Desktop/official-website/components/CopyEmail.tsx`
- `/Users/ahmetkarakoyun/Desktop/official-website/components/CountUp.tsx`
- `/Users/ahmetkarakoyun/Desktop/official-website/components/MouseGlow.tsx`
- `/Users/ahmetkarakoyun/Desktop/official-website/components/ui.tsx`
- `/Users/ahmetkarakoyun/Desktop/official-website/tailwind.config.ts`
- `/Users/ahmetkarakoyun/Desktop/official-website/HEURISTIC_EVAL_FEZACO.md` (supplementary context)
- `/Users/ahmetkarakoyun/Desktop/official-website/HCI_REVIEW_FEZACO.md` (supplementary context)
- `/Users/ahmetkarakoyun/Desktop/official-website/COLOR_AUDIT_FEZACO.md` (supplementary context)

---

## Registry Safety

shadcn not initialized (`components.json` absent). Registry audit skipped.

---

## UI REVIEW COMPLETE

Score 16/24. Three blockers require immediate attention before shipping: the mobile nav keyboard trap in `Navbar.tsx` (WCAG 2.1 SC 2.1.2), incorrect `aria-current="true"` token, and the `text-rose-400` contrast failure on `not-found.tsx`. Color pillar is the weakest at 2/4 due to lingering light-mode contrast failures (`text-emerald-500` on "Çıktı" label, rose-400 without aria-hidden) and the indigo-500/60-opacity resting-state label on MemberCard. Experience Design is 2/4 primarily because the keyboard trap is a real barrier, not a cosmetic issue.
