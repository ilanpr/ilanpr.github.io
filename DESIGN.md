---
name: "Ilan's Arcade Portfolio"
description: "A personal arcade for visual design, motion and computer-engineering work."
colors:
  paper: "#111217"
  paper-2: "#191b22"
  paper-3: "#242630"
  ink: "#f8eedc"
  ink-2: "#c7bdd0"
  dark: "#1c1726"
  rule: "#666675"
  rule-soft: "#3b3e49"
  accent: "#ffdc72"
  accent-ink: "#1c1726"
  accent-deep: "#c68d3e"
  focus: "#b2f2ec"
  cream: "#ead4b7"
  folio: "#ece3d2"
  folio-muted: "#504749"
  panel: "#1c1f29"
  enamel: "#50374f"
  enamel-deep: "#281e36"
  enamel-light: "#886582"
  cyan: "#b8f1eb"
  crt: "#68e4df"
  screen: "#101c30"
  shadow: "#05030bb3"
  shadow-deep: "#030208e8"
  highlight: "#fff2d338"
typography:
  display:
    fontFamily: "'Pixelify Sans', monospace"
    fontSize: "clamp(32px,4vw,52px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-.025em"
  headline:
    fontFamily: "'Pixelify Sans', monospace"
    fontSize: "clamp(48px,6vw,88px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-.025em"
  title:
    fontFamily: "'Pixelify Sans', monospace"
    fontSize: "clamp(28px,3vw,40px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-.02em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "16px"
    lineHeight: 1.6
  panel-body:
    fontFamily: "Inter, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.7
  caption:
    fontFamily: "Inter, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.4
  label:
    fontFamily: "'Pixelify Sans', monospace"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: ".045em"
  action:
    fontFamily: "'Pixelify Sans', monospace"
    fontSize: "16px"
    fontWeight: 700
  chapter-title:
    fontFamily: "Inter, sans-serif"
  cabinet-subtitle:
    fontFamily: "'The Seasons', 'Cormorant Garamond', serif"
    fontSize: "clamp(19px,2.2vw,29px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-.045em"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "48px"
  2xl: "80px"
components:
  conversation-button:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    padding: "18px 24px"
  editorial-action:
    textColor: "{colors.accent}"
    typography: "{typography.action}"
    padding: "12px 0"
  editorial-action-hover:
    backgroundColor: "{colors.paper-3}"
    textColor: "{colors.ink}"
  frame-arrow:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.accent}"
    size: "44px"
  project-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    padding: "{spacing.lg}"
  project-tag:
    textColor: "{colors.ink-2}"
    padding: "0 14px 0 0"
  chapter-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
  tab-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.action}"
    padding: "12px 18px"
---

# Design System: Ilan's Arcade Portfolio

## Overview

**Creative North Star: "Ilan's Personal Arcade"**

This is an extension of the existing arcade world: warm plum cabinet enamel, a lit CRT, pixel lettering, original sprites and Ilan's chibi characters. Dark charcoal content surfaces make space for the actual artwork; a cream portrait field gives the person behind the work a distinct presence.

The supplied JJettas reference informs spatial motion and collectible image storytelling. Play Arcade informs chamfered game panels. These principles belong to Ilan's own images and existing identity. The finished page uses ordinary scrolling, short state feedback and optional movement; page bloom and aimless floating are disabled. Cabinet and screen-sprite lighting remain part of the physical arcade object.

**Key Characteristics:**
- A physical cabinet and CRT anchor the established identity.
- Original images lead; readable text explains the work.
- Pixel display lettering pairs with an Inter reading layer.
- Chamfered panel backgrounds preserve unclipped content.
- Scroll-linked depth has complete paused, reduced-motion and mobile fallbacks.

## Colors

The palette combines quiet charcoal, warm cream and plum enamel, with yellow actions and restrained cyan detail. Frontmatter values are normative and retain the names of the CSS tokens in `dist/tokens.css` without the `--color-` prefix.

### Primary
- **Arcade Yellow — accent:** start, selected chapters, selected tabs and contact actions.
- **Pressed Ochre — accent-deep:** the weighted Start control's lower edge.
- **Action Ink — accent-ink:** dark lettering on yellow controls.

### Secondary
- **Panel Cyan — cyan:** project categories, showcase bars and the cabinet subtitle.
- **Focus Mint — focus:** the general keyboard focus outline.
- **CRT Light — crt:** light contained around the screen and cabinet lamps.

### Tertiary
- **Plum Enamel — enamel:** cabinet material and portrait lettering.
- **Deep Enamel — enamel-deep:** cabinet depth and links/focus on the light About field.
- **Enamel Edge — enamel-light:** physical trim and the portrait caption divider.

### Neutral
- **Charcoal Ground — paper:** page ground and artwork containment fields.
- **Raised Charcoal — paper-2:** secondary surfaces, footer and quiet interaction fields.
- **Charcoal Trim — paper-3:** inset bars and editorial action hover.
- **Game Panel — panel:** project information panels and picture-wall frames.
- **Warm Type — ink:** primary text on dark surfaces.
- **Muted Type — ink-2:** descriptions, captions and secondary labels.
- **Plum Ink — dark:** About text on the light ground.
- **Cream — cream:** portrait image field and warm cabinet trim.
- **Folio Paper — folio:** the contrasting About section.
- **Folio Copy — folio-muted:** readable secondary text on that section.
- **Rim — rule; Quiet Rim — rule-soft:** fine structural borders and separators.
- **Screen — screen:** the CRT's dark interior.
- **Shadow, Deep Shadow and Highlight:** translucent material depth rather than independent content accents.

**The Contained Light Rule.** Preserve lighting inside the cabinet and screen sprites. Do not extend it into page-wide bloom or glowing project-panel borders.

## Typography

**Lower Display / Game Interface Font:** Pixelify Sans with a monospace fallback.  
**Cinematic Chapter Font:** the incumbent Inter sans-serif voice.  
**Body Font:** Inter with a sans-serif fallback.  
**Cabinet Subtitle:** the incumbent italic serif stack, The Seasons / Cormorant Garamond / serif.

Pixel type carries chapter controls, lower section headings, project titles, tabs and game labels. The cinematic chapter headings keep their incumbent sans voice; the current About chapter title and subtitle use Inter. Inter also carries descriptions and image captions. Only the Start cabinet subtitle retains the original “Design meets engineering.” wording and current italic serif typography; this local exception is part of the cabinet identity.

### Hierarchy
- **Display:** picture-wall heading; desktop uses the frontmatter display role, becoming (32px) at the narrow breakpoint.
- **Headline:** Selected work heading; narrow screens use `clamp(40px,11vw,56px)`. Archive uses `clamp(44px,5vw,72px)`.
- **Title:** project information headings; narrow screens use (30px). About uses Pixelify at `clamp(32px,3.8vw,54px)`, becoming (36px) on narrow screens.
- **Body:** the inherited Inter reading layer. Project paragraphs use the panel-body role, muted ink and a maximum (42ch) measure; narrow screens use (15px).
- **Caption:** image titles beneath their artwork; narrow frames use (14px).
- **Label:** useful project category beneath the title. Chapter control type is (18px), with (13px) sublabels; narrow sizes are (14px) and (11px).
- **Chapter Title:** the cinematic headings retain their existing chapter-specific sans sizing and composition; do not apply lower section Pixelify roles to them.
- **Cabinet Subtitle:** italic, cyan, tightly tracked and shadowed for readability within the CRT; narrow screens use `clamp(15px,4.5vw,24px)`.

**The Title First Rule.** Project names precede useful categories. Picture-wall captions sit directly below artwork; decorative FRAME / NN labels and project indices are absent.

## Layout

The page keeps its authored arcade journey and alternating artwork/process rows. General sections use a centered container with a maximum (1600px) width; desktop horizontal padding is (6%), and intermediate sections use (5%). The shared spacing scale is the frontmatter scale; final project rows use xl vertical padding and gaps, with lg panel padding. The project/portrait layout changes at (900px); the narrow type and padding adjustments apply at (650px).

The picture wall contains six uncropped artwork frames. At widths of at least (1000px), its track is an asymmetric twelve-column grid: the first row spans (5 / 3 / 4) columns and the second spans (4 / 5 / 3). Grid gaps are (28px), perspective is (1400px), and the wall sticks (24px) from the top. The gallery reserves `calc(100svh + 400px)` for the ordinary-scroll assembly.

Below (1000px), the wall becomes a contained horizontal rail with scroll snapping, normal vertical page scrolling and previous/next controls. Frames are (280px) wide, becoming (250px) at the narrow breakpoint; artwork fields are (210px), then (190px) high. Images use containment and retain their proportions.

Paused or reduced-motion desktop states remove the sticky travel and frame transforms, leaving the complete twelve-column grid in document flow. On smaller screens, the contained rail remains. The About section places the existing transparent portrait beside the biography on Folio Paper; its portrait window uses Cream. Narrow layouts stack these regions.

## Elevation & Depth

Depth is physical and local: enamel trim, CRT glass, sprite light, weighted cabinet controls and collectible artwork frames. Project text surfaces are flat, with a fine chamfered rim. The final content layer removes glow stacks, idle artwork drift, extra decorative frames and ambient page light.

### Shadow Vocabulary
- **Picture frame:** `0 7px 12px var(--color-shadow)`; hover increases it to `0 10px 18px var(--color-shadow)`.
- **Cabinet body:** `drop-shadow(0 8px 2px var(--color-shadow-deep))`.
- **Start control:** `0 3px 0 var(--color-accent-deep), 0 7px 0 var(--color-shadow-deep), 0 0 0 transparent`.
- **Sprite / cartridge artwork:** `drop-shadow(2px 3px 0 var(--color-shadow))`.
- **CRT:** multiple trim rings, inset screen depth and restrained CRT-colored light; retain this signature assembly rather than applying it to ordinary cards.

**The Static Content Rule.** Reading content remains visible without motion. Movement changes spatial presentation, never access to information.

## Shapes

Square controls and stepped incumbent pixel silhouettes coexist with diagonal game-panel chamfers. Project information panels use opposing (16px) corner cuts on isolated background pseudo-elements, with an inset (1px) inner field. Their text is not clipped. The portrait window uses the same opposing-corner idea at (22px). Picture-wall frames are simple square artwork holders; project artwork itself remains uncropped.

No global rounded-card style is introduced. The existing `--radius-glass` token remains in the source, but it is not promoted to a content-component rule.

## Components

### Buttons
Yellow contact actions are square, flat and readable, with the documented conversation-button padding. Their hover underlines the text. The cabinet Start control keeps its separate weighted, textured material and small press movement.

Editorial actions are Pixelify text with an arrow, a fine lower rule and at least (44px) height. Hover shifts text to warm ink over Charcoal Trim. Gallery arrows are (44px) square panel controls. Preserve each control's actual semantic button/link behavior and accessible name.

### Chips
Project and skill tags are quiet text labels, without decorative fills, clipping or shadows. Project tags use muted ink and open spacing; they do not compete with the project title.

### Cards / Containers
Project text panels are flat Game Panel fields with a fine Rim and chamfered background. Desktop padding uses lg; narrow panels use (24px). The title, category, summary, tags and action remain in that order.

Picture-wall frames use (10px) padding, contained artwork and an Inter caption underneath. Hover increases shadow without hiding text; keyboard focus removes frame transforms and shows an outline. Activating a frame opens its source project's image view.

### Navigation
The five chapter controls retain Start, Design, Build, Archive and About. The selected chapter uses Arcade Yellow with Action Ink; controls have at least (50px) height. Header navigation uses Pixelify (20px), becoming (16px) on narrow screens. Pause motion remains a visible text control.

### Project Dialogs
Dialogs retain readable descriptions, prototype statuses and the existing image/video/source/document actions. Their title region uses Game Panel with a Rim divider; headings and tabs use Pixelify. Selected tabs use yellow with dark text. The close control is square and at least (44px). A short (380ms) entrance is disabled for paused/reduced states. There are no inputs or form fields in the current system.

### Cabinet, Workbench and Portrait
Keep the working CRT screen inside its cabinet housing and Start accessible. The existing workbench and chibi share their chapter transform/fade. Bounded pointer response and scroll-linked transforms belong to these spatial objects.

The picture-wall assembly progressively resolves small translations and rotations into the readable grid. It is driven by scroll position, not a timer, and is skipped when paused, reduced or below the desktop threshold.

The portrait is the existing transparent photographic asset, supported by large Pixelify “ILAN” lettering on Cream. Preserve the photographic treatment and original proportions.

## Do's and Don'ts

### Do:
- **Do** extend the existing cabinet, CRT, sprites, chibi and artwork identity.
- **Do** use the actual shared colors, fonts and spacing in the frontmatter.
- **Do** put project titles before their categories and artwork captions below images.
- **Do** contain artwork and give text enough room beyond chamfered backgrounds.
- **Do** preserve visible focus, keyboard access, touch controls and complete static motion fallbacks.
- **Do** keep supplied project statuses, portrait, roles and social links authoritative.

### Don't:
- **Don't** add page bloom, idle floating, blur blobs or glowing content borders.
- **Don't** replace original work with reference branding, imported characters or new rasters.
- **Don't** clip text or artwork to achieve game-panel geometry.
- **Don't** add decorative FRAME / NN labels or project indices above titles.
- **Don't** turn all sections into identical card wrappers.
- **Don't** alter the cabinet subtitle's established wording or italic typography.
- **Don't** invent audiences, achievements, metrics, clients, role duties or employment dates.

<!-- Scan-mode documentation from PRODUCT.md, .impeccable/briefs/portfolio.md, REFERENCE-PROMPT.md, dist/tokens.css, final dist/atelier.css overrides, and necessary incumbent CSS/HTML/JavaScript. Finish review verdict: ship for the two scored hierarchy/product-context findings. This document records source state; browser verification belongs to the parent task's supplied captures and checks. -->

