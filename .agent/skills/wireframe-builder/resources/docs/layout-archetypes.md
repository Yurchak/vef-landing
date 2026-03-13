# Layout Archetypes Reference

Select a layout archetype based on the project's goals and content type. Each archetype defines a distinct structural approach.

---

## Quick Selection Guide

| Archetype | Best For | Content Type |
|-----------|----------|--------------|
| **Centered SaaS** | SaaS, business apps, professional tools | Balanced text + visuals |
| **Full-Bleed Visual** | Photography, real estate, luxury brands | Image-heavy, minimal text |
| **Split-Screen** | Product showcases, app promos, dual CTAs | Equal image + text |
| **Editorial Magazine** | Blogs, news, case studies, long-form | Text-heavy, varied media |
| **Horizontal Scroll** | Portfolios, timelines, galleries | Sequential visual content |
| **Immersive Parallax** | Brand stories, campaigns, launches | Narrative-driven |
| **Dashboard Dense** | Admin panels, analytics, internal tools | Data and metrics |
| **Single-Column Minimal** | Micro-sites, indie products, freelancers | Focused, direct messaging |

---

## 1. Centered SaaS

> **The default.** Symmetric, contained layouts with centered content, clear hierarchy, and prominent CTAs.

### Structure
```
┌─────────────────────────────────────────┐
│              HEADER NAV                 │
├─────────────────────────────────────────┤
│                                         │
│            CENTERED HERO                │
│         Headline + Subhead              │
│           [ CTA Button ]                │
│                                         │
├─────────────────────────────────────────┤
│    CARD    │    CARD    │    CARD      │
├─────────────────────────────────────────┤
│         ALTERNATING SECTIONS            │
│      (Features, Testimonials, FAQ)      │
├─────────────────────────────────────────┤
│              FOOTER                     │
└─────────────────────────────────────────┘
```

### Characteristics
- **Container**: Max-width 1200-1280px, centered
- **Hero**: Centered text, stacked vertically
- **Grids**: Symmetric 2-3-4 column responsive grids
- **Sections**: Alternating light/dark backgrounds
- **Spacing**: Generous, consistent vertical rhythm

### When to Use
- SaaS landing pages
- Business/professional services
- Documentation sites
- Enterprise products

### When to Avoid
- Photography-focused sites
- Creative portfolios
- Storytelling experiences

### CSS Classes
```html
<section class="section">
  <div class="container">
    <div class="hero__content text-center">...</div>
  </div>
</section>
```

---

## 2. Full-Bleed Visual

> **Photography-first.** Edge-to-edge imagery with minimal UI chrome. Visuals dominate, text is secondary.

### Structure
```
┌─────────────────────────────────────────┐
│ NAV (transparent overlay)               │
├─────────────────────────────────────────┤
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓ FULL-BLEED IMAGE ▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓   + Text Overlay  ▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
├─────────────────────────────────────────┤
│▓▓▓▓▓▓▓▓▓│▓▓▓▓▓▓▓▓▓│▓▓▓▓▓▓▓▓▓│▓▓▓▓▓▓▓▓▓│
│  IMAGE  │  IMAGE  │  IMAGE  │  IMAGE   │
│  GRID   │  GRID   │  GRID   │  GRID    │
├─────────────────────────────────────────┤
│   Minimal text section (optional)       │
├─────────────────────────────────────────┤
│              FOOTER                     │
└─────────────────────────────────────────┘
```

### Characteristics
- **Container**: None (full viewport width)
- **Hero**: Full-screen image/video with overlay text
- **Images**: Edge-to-edge, no gutters or minimal gaps
- **Text**: Overlaid on images, high contrast
- **Navigation**: Transparent, floating, or hidden

### When to Use
- Photography portfolios
- Real estate listings
- Luxury/lifestyle brands
- Hospitality sites
- Fashion/beauty

### When to Avoid
- Text-heavy content
- Complex feature explanations
- Data-driven pages

### CSS Classes
```html
<section class="section section--fullbleed">
  <div class="hero hero--fullscreen">
    <img class="hero__bg" src="..." alt="">
    <div class="hero__overlay">
      <h1 class="hero__title">...</h1>
    </div>
  </div>
</section>
```

### Key Modifiers
- `.section--fullbleed` — Remove container, edge-to-edge
- `.hero--fullscreen` — 100vh height
- `.hero__overlay` — Dark/gradient overlay for text contrast
- `.grid--masonry` — Varied image sizes

---

## 3. Split-Screen

> **Dual focus.** The viewport divides into two equal (or asymmetric) halves — typically image + text.

### Structure
```
┌─────────────────────────────────────────┐
│              HEADER NAV                 │
├────────────────────┬────────────────────┤
│                    │                    │
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│    HEADLINE       │
│▓▓▓▓▓▓ IMAGE ▓▓▓▓▓▓▓│    Subheadline    │
│▓▓▓▓▓▓ or VIDEO ▓▓▓▓│                    │
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│    [ CTA Button ] │
│                    │                    │
├────────────────────┴────────────────────┤
│         STANDARD SECTIONS BELOW         │
├─────────────────────────────────────────┤
│              FOOTER                     │
└─────────────────────────────────────────┘
```

### Characteristics
- **Container**: Full-width, split at 50/50 or 60/40
- **Hero**: Two columns, often sticky or parallax
- **Content side**: Text, form, or CTA
- **Visual side**: Image, video, or illustration
- **Mobile**: Stacks vertically

### When to Use
- App/product showcases
- Dual offerings (e.g., "For Teams" vs "For Individuals")
- Sign-up/login pages
- Before/after comparisons

### When to Avoid
- Feature-heavy pages (too much content)
- Content that doesn't naturally divide

### CSS Classes
```html
<section class="hero hero--split">
  <div class="hero__visual">
    <img src="..." alt="">
  </div>
  <div class="hero__content">
    <h1>...</h1>
    <p>...</p>
    <a class="btn">...</a>
  </div>
</section>
```

### Key Modifiers
- `.hero--split` — Two-column hero
- `.hero--split-reverse` — Text left, image right
- `.hero--split-40-60` — Asymmetric split

---

## 4. Editorial Magazine

> **Content-rich.** Asymmetric multi-column grids, varied content sizes, pull quotes, and typographic hierarchy.

### Structure
```
┌─────────────────────────────────────────┐
│              HEADER NAV                 │
├─────────────────────────────────────────┤
│  LARGE FEATURE IMAGE / HEADLINE         │
│  Author • Date • Category               │
├────────────────────┬────────────────────┤
│                    │                    │
│    MAIN CONTENT    │   SIDEBAR          │
│    (Article body)  │   (Related,        │
│                    │    TOC, Ads)       │
│    ┌────────────┐  │                    │
│    │ PULL QUOTE │  │                    │
│    └────────────┘  │                    │
│                    │                    │
├────────────────────┴────────────────────┤
│   RELATED ARTICLES GRID (varied sizes)  │
├─────────────────────────────────────────┤
│              FOOTER                     │
└─────────────────────────────────────────┘
```

### Characteristics
- **Container**: Wide (1400px+) with internal columns
- **Grid**: Asymmetric, varied card sizes (1x1, 2x1, 2x2)
- **Typography**: Drop caps, pull quotes, bylines
- **Sidebar**: Optional, for navigation or related content
- **Images**: Inline, full-width, or floated

### When to Use
- Blogs and news sites
- Online magazines
- Case studies
- Long-form articles
- Documentation with navigation

### When to Avoid
- Simple product pages
- Action-focused landing pages
- Minimal content

### CSS Classes
```html
<article class="article">
  <header class="article__header">
    <h1 class="article__title">...</h1>
    <div class="article__meta">...</div>
  </header>
  <div class="article__body">
    <blockquote class="pullquote">...</blockquote>
    <p>...</p>
  </div>
  <aside class="sidebar">...</aside>
</article>
```

### Key Modifiers
- `.article` — Editorial article container
- `.pullquote` — Large, styled inline quote
- `.grid--editorial` — Varied-size card grid
- `.sidebar` — Secondary content rail

---

## 5. Horizontal Scroll

> **Gallery-style.** Side-scrolling sections break the vertical flow for showcasing sequential content.

### Structure
```
┌─────────────────────────────────────────┐
│              HEADER NAV                 │
├─────────────────────────────────────────┤
│         INTRO SECTION (normal)          │
├─────────────────────────────────────────┤
│ ← HORIZONTAL SCROLL SECTION →           │
│ ┌───────┬───────┬───────┬───────┬───── │
│ │ SLIDE │ SLIDE │ SLIDE │ SLIDE │ ...  │
│ │   1   │   2   │   3   │   4   │      │
│ └───────┴───────┴───────┴───────┴───── │
│           ○ ○ ● ○ ○  (indicators)       │
├─────────────────────────────────────────┤
│        NORMAL SECTION CONTINUES         │
├─────────────────────────────────────────┤
│              FOOTER                     │
└─────────────────────────────────────────┘
```

### Characteristics
- **Scroll**: Horizontal within a contained section
- **Items**: Full-width or card-based slides
- **Navigation**: Scroll indicators, arrows, or drag
- **Snap**: Scroll-snap for clean stopping points
- **Mobile**: May convert to vertical stack or carousel

### When to Use
- Project portfolios
- Case study galleries
- Timelines
- Product showcases
- Feature tours

### When to Avoid
- Text-heavy content
- Pages needing quick scanning
- Accessibility-critical use cases (provide alternatives)

### CSS Classes
```html
<section class="section section--horizontal">
  <div class="horizontal-scroll">
    <div class="horizontal-scroll__track">
      <div class="horizontal-scroll__slide">...</div>
      <div class="horizontal-scroll__slide">...</div>
      <div class="horizontal-scroll__slide">...</div>
    </div>
  </div>
  <div class="horizontal-scroll__nav">
    <button class="horizontal-scroll__prev">←</button>
    <button class="horizontal-scroll__next">→</button>
  </div>
</section>
```

### Key Modifiers
- `.section--horizontal` — Enables horizontal scroll context
- `.horizontal-scroll__track` — Flexbox row with overflow
- `scroll-snap-type: x mandatory` — Clean snapping

---

## 6. Immersive Parallax

> **Storytelling.** Scroll-driven narrative with layered depth, full-screen chapters, and progressive reveals.

### Structure
```
┌─────────────────────────────────────────┐
│ NAV (floating/hidden)                   │
├─────────────────────────────────────────┤
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓ CHAPTER 1: Full-screen + parallax ▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
├─────────────────────────────────────────┤
│                                         │
│   CHAPTER 2: Content reveals on scroll  │
│   (Elements animate in as you scroll)   │
│                                         │
├─────────────────────────────────────────┤
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓▓▓ CHAPTER 3: Sticky + bg transition ▓▓▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
├─────────────────────────────────────────┤
│              CTA + FOOTER               │
└─────────────────────────────────────────┘
```

### Characteristics
- **Sections**: Full-viewport height (100vh)
- **Parallax**: Background moves slower than foreground
- **Animation**: Scroll-triggered reveals and transitions
- **Navigation**: Progress indicator or chapter dots
- **Pacing**: Controlled, cinematic storytelling

### When to Use
- Brand storytelling
- Product launches
- Annual reports
- Campaign landing pages
- Immersive experiences

### When to Avoid
- Content users need to scan quickly
- Accessibility-critical (motion-sensitive)
- Mobile-first projects (heavy on resources)

### CSS Classes
```html
<section class="chapter" data-parallax>
  <div class="chapter__bg" style="background-image: url(...)"></div>
  <div class="chapter__content">
    <h2 class="chapter__title" data-reveal>...</h2>
    <p data-reveal>...</p>
  </div>
</section>
```

### Key Modifiers
- `.chapter` — Full-screen section
- `[data-parallax]` — Enable parallax effect
- `[data-reveal]` — Scroll-triggered animation
- `.progress-indicator` — Scroll progress bar

### Accessibility Note
Always respect `prefers-reduced-motion`. Provide a fallback with no animation.

---

## 7. Dashboard Dense

> **Data-focused.** Sidebar navigation with multi-panel main area for displaying metrics, tables, and controls.

### Structure
```
┌─────────────────────────────────────────┐
│ TOP BAR (search, user, notifications)   │
├────────┬────────────────────────────────┤
│        │  KPI CARD │ KPI CARD │ KPI CARD│
│  SIDE  ├────────────────────────────────┤
│  BAR   │                                │
│        │  ┌─────────────┬─────────────┐ │
│  NAV   │  │   CHART     │   CHART     │ │
│        │  │   PANEL     │   PANEL     │ │
│        │  ├─────────────┴─────────────┤ │
│        │  │                           │ │
│        │  │       DATA TABLE          │ │
│        │  │                           │ │
└────────┴──┴───────────────────────────┴─┘
```

### Characteristics
- **Layout**: Fixed sidebar + scrollable main
- **Grid**: Dense, minimal gaps (8-16px)
- **Components**: KPI cards, charts, tables, filters
- **Typography**: Smaller (14px base), data-focused
- **Colors**: Functional (success, warning, error)

### When to Use
- Admin panels
- Analytics dashboards
- Internal tools
- CRM/ERP interfaces
- Monitoring systems

### When to Avoid
- Marketing landing pages
- Consumer-facing products
- Content-focused sites

### CSS Classes
```html
<div class="dashboard">
  <aside class="dashboard__sidebar">
    <nav class="dashboard__nav">...</nav>
  </aside>
  <main class="dashboard__main">
    <div class="dashboard__header">...</div>
    <div class="dashboard__grid">
      <div class="dashboard__card dashboard__card--kpi">...</div>
      <div class="dashboard__card dashboard__card--chart">...</div>
      <div class="dashboard__card dashboard__card--table">...</div>
    </div>
  </main>
</div>
```

### Key Modifiers
- `.dashboard` — Root layout container
- `.dashboard__sidebar` — Fixed left navigation
- `.dashboard__card` — Panel/widget container
- `.dashboard__card--kpi` — Metric highlight card
- `.dashboard__card--wide` — Spans 2 columns

---

## 8. Single-Column Minimal

> **Focused.** One narrow column, maximum whitespace, direct messaging. No distractions.

### Structure
```
┌─────────────────────────────────────────┐
│           MINIMAL HEADER                │
├─────────────────────────────────────────┤
│                                         │
│                                         │
│            ┌───────────────┐            │
│            │   HEADLINE    │            │
│            │               │            │
│            │   Body text   │            │
│            │   goes here   │            │
│            │               │            │
│            │  [ CTA ]      │            │
│            └───────────────┘            │
│                                         │
│                                         │
├─────────────────────────────────────────┤
│           MINIMAL FOOTER                │
└─────────────────────────────────────────┘
```

### Characteristics
- **Container**: Narrow (600-720px max)
- **Content**: Single stream, linear flow
- **Whitespace**: Extremely generous margins
- **Typography**: Large, readable, minimal
- **Elements**: Essentials only (headline, text, CTA)

### When to Use
- Micro-sites
- Indie/personal projects
- Waitlist/coming soon pages
- Focused sales letters
- Freelancer/consultant pages

### When to Avoid
- Feature-rich products
- Multi-section landing pages
- Sites with complex navigation

### CSS Classes
```html
<main class="page page--minimal">
  <div class="container container--narrow">
    <h1 class="h1">...</h1>
    <p class="lead">...</p>
    <a class="btn btn--primary btn--lg">...</a>
  </div>
</main>
```

### Key Modifiers
- `.container--narrow` — Max-width 600-720px
- `.page--minimal` — Extra vertical padding
- Large typography scale (18-20px body)

---

## Discovery Question

When starting a wireframe project, ask:

> **"What type of layout fits this project?"**
> 
> 1. **Centered SaaS** — Balanced, professional, CTA-focused
> 2. **Full-Bleed Visual** — Photography-heavy, minimal text
> 3. **Split-Screen** — Dual-focus hero (image + text)
> 4. **Editorial Magazine** — Long-form, multi-column, content-rich
> 5. **Horizontal Scroll** — Gallery/portfolio, sequential
> 6. **Immersive Parallax** — Storytelling, scroll-driven
> 7. **Dashboard Dense** — Admin/analytics, data-heavy
> 8. **Single-Column Minimal** — Focused, direct, lots of whitespace

Or describe your content and goals, and I'll recommend the best fit.
