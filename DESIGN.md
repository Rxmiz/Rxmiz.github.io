---
name: Rami Zaineh, Chemical Engineer
description: A pipe rack where plant work runs as labelled process lines, crosses a flanged tie-in, and continues as data work.
colors:
  galvanized-ground: "#e6e9e8"
  ground-deep: "#d8dcdb"
  rule-grey: "#b9bfbf"
  ink: "#1c2124"
  ink-2: "#4a5257"
  process-yellow: "#f2c400"
  process-ink: "#1c2124"
  env-green: "#1e7b45"
  env-ink: "#ffffff"
  design-orange: "#e46a12"
  design-ink: "#1c2124"
  data-purple: "#5b3a9c"
  data-ink: "#ffffff"
  tag-steel: "#1c2124"
  tag-alu: "#d3d8d8"
  tag-plate-text: "#eef1f0"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(3.75rem, 9.2vw, 8.25rem)"
    fontWeight: 820
    lineHeight: 0.86
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5.5rem)"
    fontWeight: 750
    lineHeight: 0.95
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 75"
  headline-project:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 6rem)"
    fontWeight: 750
    lineHeight: 0.95
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 75"
  metric:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 2.9vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 75"
    fontFeature: "'tnum'"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.6vw, 2.2rem)"
    fontWeight: 650
    lineHeight: 1.1
    fontVariation: "'wdth' 80"
  lede:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'tnum'"
  label:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.12em"
    fontVariation: "'wdth' 85"
  tag-label:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    letterSpacing: "0.09em"
    fontVariation: "'wdth' 80"
rounded:
  hairline: "2px"
  plate: "3px"
  control: "4px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  measure: "68ch"
  container: "88rem"
  section: "clamp(4.5rem, 9vw, 8rem)"
  section-head: "clamp(2rem, 4vw, 3.25rem)"
  rack-gap: "clamp(0.9rem, 1.6vw, 1.25rem)"
  row: "1rem"
components:
  valve-tag:
    backgroundColor: "{colors.tag-steel}"
    textColor: "{colors.tag-plate-text}"
    typography: "{typography.tag-label}"
    padding: "0.7rem 1.35rem 0.7rem 2.5rem"
    height: "3rem"
  valve-tag-alu:
    backgroundColor: "{colors.tag-alu}"
    textColor: "{colors.ink}"
    typography: "{typography.tag-label}"
    padding: "0.7rem 1.35rem 0.7rem 2.5rem"
    height: "3rem"
  marker-process:
    backgroundColor: "{colors.process-yellow}"
    textColor: "{colors.process-ink}"
    typography: "{typography.metric}"
  marker-env:
    backgroundColor: "{colors.env-green}"
    textColor: "{colors.env-ink}"
    typography: "{typography.metric}"
  marker-design:
    backgroundColor: "{colors.design-orange}"
    textColor: "{colors.design-ink}"
    typography: "{typography.metric}"
  marker-data:
    backgroundColor: "{colors.data-purple}"
    textColor: "{colors.data-ink}"
    typography: "{typography.metric}"
  marker-stub:
    width: "2.75rem"
    height: "1.1rem"
  mark-band:
    backgroundColor: "{colors.process-yellow}"
    textColor: "{colors.process-ink}"
    height: "2rem"
    padding: "0 1.1rem 0 0.6rem"
  masthead-resume:
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.45rem 0.8rem"
  masthead-resume-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.galvanized-ground}"
  data-sheet:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "0.7rem 0"
---

# Design System: Rami Zaineh, Chemical Engineer

## Overview

**Creative North Star: "The Pipe Rack"**

The site is a piece of plant. Plant and process work run as painted, labelled process lines on bare galvanized steel; each line crosses a bolted flange (the tie-in) and continues as a data line. Colour is never decoration: every band is an ASME A13.1 marker whose hue says what kind of work flows through it. The page reads like a line list and a data sheet, so a reviewer who knows P&IDs recognises the grammar before reading a word.

Density is industrial but legible: condensed, heavy legends for anything stencilled onto steel, a normal-width body face for reading, tabular numerals everywhere because the evidence is numbers. Depth is material, not atmospheric: steel gets a cylindrical gradient, painted bands get a single sheen, flanges get one small contact shadow. Everything else is flat on the galvanized ground.

The system refuses a headshot hero over a card grid. The portrait lives in About; the first viewport is the name and the rack.

**Key Characteristics:**
- Galvanized ground, near-black ink, four marker hues assigned strictly by meaning.
- Archivo Variable only: condensed width (62 to 85%) for display, legends and metrics; normal width for body.
- Pointed marker bands with a flow-arrow end on steel runs that bleed to the page edge.
- Actions are stamped valve tags: chamfered plate, punched hole, uppercase stamp.
- Hairline rules and 2px ink top rules structure lists and tables; no cards.
- Signature motion: chevrons flow and the data marker fills from the flange outward on entry.

## Colors

A cool galvanized neutral field where saturated colour appears only as painted pipe-marker bands, each band's hue fixed to a meaning.

### Primary
- **Process Yellow** (process-yellow, with ink legend): plant and process work (pilot reactor scale-up, control narratives, unit operations, process simulation, engineering methods). Also the RZ mark band, the favicon, and text selection, because the person is a process engineer first.

### Secondary
- **Data Purple** (data-purple, with white legend): data, modelling and code. Every line's continuation past the flange is purple; data projects and the programming skills row carry it.
- **Environmental Green** (env-green, with white legend): environmental compliance and air quality work (the Rain Carbon line).

### Tertiary
- **Design Orange** (design-orange, with ink legend): plant design and design-project work (the capstone plant design, the knee brace redesign, the process and design software row).

### Neutral
- **Galvanized Ground** (galvanized-ground): page background and theme colour.
- **Ground Deep** (ground-deep): callouts and the scrollbar track; the only tonal step below the ground.
- **Rule Grey** (rule-grey): 1px row rules, footer rule, figure borders.
- **Ink** (ink): text, 2px table top rules, focus outline, the steel valve-tag plate.
- **Ink Two** (ink-2): secondary text, metadata, captions, column legends.
- **Steel** (gradient #f4f6f6 to #868e91, vertical): bare pipe. A material, not a colour token; it carries every run, segment and project pipe.

### Named Rules
**The Marker Meaning Rule.** A band's hue states the service it carries: yellow process, green environmental, orange design, purple data. Never pick a band colour for variety, balance or emphasis. If a new item has no matching service, it gets no band.

**The Legend Contrast Rule.** Yellow and orange take ink legends; green and purple take white legends. Never swap them.

**The Paint Only On Pipe Rule.** Saturated hues appear only as marker bands (on steel, as stubs in lists, as the job marker, as the mark). Never as text colour, link colour, border colour or section background; the one exception is process-yellow text selection.

## Typography

**Display Font:** Archivo Variable (self-hosted via Fontsource, fallback Archivo, system-ui)
**Body Font:** Archivo Variable at normal width
**Label/Mono Font:** none; labels are Archivo at 75 to 85% width

**Character:** One variable family stretched two ways: tall, compressed stencil legends for anything painted on plant, and a calm normal width for reading. The width axis does the work a second typeface would.

### Hierarchy
- **Display** (820, clamp 3.75 to 8.25rem, width 62%, line-height 0.86, uppercase): the hero name only.
- **Headline** (750, clamp 2.75 to 5.5rem, width 75%, 0.95, uppercase): section openings, always followed by a steel run.
- **Headline, project** (750, clamp 2.75 to 6rem, width 75%, 0.95, uppercase, max 18ch): the project page title.
- **Metric** (800, clamp 1.75 to 2.6rem, width 75%, line-height 1, tabular): the number stencilled on a marker band; results lists use the same face at 1.75rem, and word metrics drop to 1.2rem uppercase.
- **Title** (650, clamp 1.4 to 2.2rem, width 80%, 1.1): the hero positioning line.
- **Lede** (400, clamp 1.125 to 1.3rem, 1.5, ink-2, 68ch): section introductions.
- **Body** (400, 1.0625rem, 1.55, tabular numerals, 68ch measure).
- **Label** (700, 0.8rem, width 85%, 0.12em, uppercase, ink-2): column legends (rack key, line-list header, data sheet caption) and marker source lines (0.74rem, 0.08em).
- **Tag label** (700, 1rem, width 80%, 0.09em, uppercase, stamped text-shadow): valve tags.

### Named Rules
**The One Oversized Name Rule.** Display type may exceed 6rem (to 8.25rem at 62% width) for exactly one element per viewport: the person's name in the hero. Every other heading stays at or under 6rem.

**The Tabular Plant Rule.** `font-variant-numeric: tabular-nums` is set on body and inherited everywhere. Metrics must align like a data sheet.

**The Width Axis Rule.** Condensed width (62 to 85%) is for legends, headings, metrics and labels; running text is always normal width.

## Layout

A centred 88rem container with a fluid gutter (clamp 1 to 3rem). Steel deliberately breaks the container: section runs bleed off the right edge, project pipes and the project-page steel run bleed off the left edge to the viewport. Reading text holds a 68ch measure.

The hero is a two-column grid: name, line and sub-copy on the left; valve tags hang at the rack's right end, overlapping down toward line L-101. Below sits the rack, a stack of lines each split 56% plant, 1.5rem flange, remainder data, with a "Plant / Data" column legend above.

Sections open with a condensed uppercase headline and a steel run (flange at its start, faint chevrons along it) that fills the remaining width. Section padding is clamp 4.5 to 8rem on top. Lists are ruled tables: 2px ink top rule, 1px rule-grey row rules, about 1rem row padding. Experience and project pages pair a sticky left column (job head, data sheet) with a right column of results or prose.

Responsive: at 860px the masthead nav drops to its own scrolling row and two-column grids collapse; at 760px each rack line stacks as plant, horizontal flange, data, and chevrons are hidden because the stack flows downward; at 560px result rows and the line list become single-column.

## Elevation & Depth

Flat by default. Depth exists only where the material would have it: steel is a vertical cylinder gradient, painted bands carry a sheen gradient (white 32% at top to black 20% at bottom), and the flange gets the system's single drop shadow. Valve tags use inset edges and a stamped text-shadow, never a lift.

### Shadow Vocabulary
- **Flange contact** (`box-shadow: 0 2px 4px rgb(28 33 36 / 0.25)`): the bolted flange where a line ties in.
- **Tag edge** (`box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0.5), inset 0 1px 0 rgb(255 255 255 / 0.12)`): the steel valve-tag rim; the aluminium tag uses `inset 0 0 0 1px #9aa2a4, inset 0 1px 0 #fff`.
- **Bolt** (`box-shadow: inset 0 1px 1px rgb(255 255 255 / 0.45)`): flange bolt heads.

### Named Rules
**The Material Depth Rule.** A gradient or shadow must describe a physical object (pipe, paint, flange, stamped plate). No ambient glows, no floating cards, no hover lifts.

## Shapes

Industrial and mostly square. Marker bands are rectangles with a pointed flow-arrow end (the clip runs to 100% at mid-height, inset 1.4 to 1.75rem on full bands, 0.6rem on stubs and the mark). Valve tags are chamfered at both left corners (0.8rem) with a circular hole masked through the plate at 1.2rem from the left edge, so the ground shows through. Flanges are thin vertical plates with a 2px corner and two bolt dots.

Radii are small and functional: 2px on focus outlines, figures and flanges; 3px on callouts and the portrait; 4px on the skip link and masthead resume control. Nothing is pill-shaped.

## Components

### Buttons (Valve Tags)
A stamped equipment tag hanging off the rack: heavy, physical, plainly clickable.
- **Shape:** chamfered left corners (0.8rem), punched hole masked at 1.2rem, minimum height 3rem.
- **Steel tag (primary):** dark steel plate (gradient #2c3337 to ink), plate-text legend, uppercase tag label with a stamped shadow, 1.05rem stroke icon after the hole. Used for "Download resume", one per group.
- **Aluminium tag (secondary):** light aluminium plate (#fbfcfc to tag-alu), ink legend, grey ring. Used for email, phone, LinkedIn, GitHub, code links.
- **Hover / Active:** swings -3deg about the hole (0.35s ease-out) and brightens 12% (aluminium dims to 97%); active returns to 0deg and drops 1px. Reduced motion removes the transition.
- **Masthead resume control:** the one non-tag action: 1.5px ink outline, 4px radius, uppercase 85% width label; inverts to ink on hover.

### Marker Bands
- **Line marker:** the painted band on a rack segment: metric, title, source line, band hue by service, sheen over paint, pointed end. Hover brightens 6%.
- **Job marker:** the company name painted as a band heading each experience entry.
- **Marker stub:** a 2.75 by 1.1rem band with arrow end, used as the row marker in "Also on the line" and the skills line list.
- **Project steel run:** a 3.25rem steel run bleeding to the left edge with an unlabelled band in the project's service colour.

### The Rack Line (signature)
A full-width link and one continuous pipe: steel from the page edge with a rotated line number (L-101), the plant marker, then a sight glass of flowing water, ending at a flanged open outlet at 58% width. Out of the outlet the water leaves as three rows of 1s and 0s that drift right and fade (mask) toward the result: the data metric in data purple (#5b3a9c, condensed 800), its title and source, set as text on the ground, not on a pipe.

- **Water:** blue gradient #57b4d6 to #2a85ad to #1b5f80 behind ripple and bubble tiles (96px and 48px). The loop moves exactly 96px per 2.8s so every tile returns to its start; never animate a pattern by a distance that is not a whole multiple of its tile.
- **Bits:** deterministic per line (xorshift seeded by the line id), each row doubled and translated by half its width (11 to 17s per row, linear). Colour is the water blue at three strengths; the purple belongs to the result only.
- **States:** motion runs only while the line is in view and motion is allowed; reduced motion shows the same composition still. Water is fluid, not a marker band, so it never carries a service meaning.
- **Phones:** the line stacks marker, a two-row bit stream, then the result; the sight glass and outlet hide.

### Data Sheet and Line List
- **Style:** native tables, 2px ink top rule, 1px rule-grey row rules, uppercase 85%-width caption or header in ink-2.
- **Data sheet:** label left in ink-2 (500, 0.95rem), value right in 80%-width 750 weight at 1.15rem. Sticky beside project prose.
- **Line list:** service name with a marker stub, contents beside it.

### Navigation
- **Style:** RZ mark (process-yellow band with arrow end, 75% width 800 weight) at left; nav links in uppercase 85% width 600 weight at 0.95rem, underlined 2px on hover; resume control at the right.
- **Mobile:** below 860px the nav takes its own horizontally scrolling row at 0.8rem.

### Figures
White-backed images with a 1px rule-grey border and 2px radius; captions in ink-2 at 0.92rem with a bold condensed figure number in ink. Wide diagrams sit in a horizontal scroller.

## Do's and Don'ts

### Do:
- **Do** assign every band by meaning: process-yellow plant/process, env-green environmental, design-orange design, data-purple data.
- **Do** put painted bands on steel or as stubs; let steel runs bleed off the page edge.
- **Do** use valve tags for every action, with one steel tag per group and aluminium tags for the rest.
- **Do** set legends, headings and metrics in condensed Archivo (62 to 85% width) and body in normal width, with tabular numerals.
- **Do** structure lists as ruled tables: 2px ink top rule, 1px rule-grey rows.
- **Do** keep the hero name as the single display element over 6rem.
- **Do** hang the hero's valve tags at the rack's right end above line L-101, not on the steel.
- **Do** keep every line readable and fully filled when script or motion is unavailable.

### Don't:
- **Don't** use a headshot hero or a card grid.
- **Don't** choose a band colour for decoration, variety or balance.
- **Don't** use saturated hues as text, link, border or background colour.
- **Don't** put a kicker or label above the project h1; the project steel run's band stays unlabelled.
- **Don't** add ambient shadows, glows, hover lifts or rounded cards.
- **Don't** show rightward chevrons on stacked phone lines.
- **Don't** add a second typeface.
