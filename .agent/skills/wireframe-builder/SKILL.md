---
name: wireframe-builder
description: Creates live, interactive website wireframes from user content using a neutral design system. Use when the user asks to create a wireframe, mockup, or prototype for a landing page, website, or web app. Also use when user says "wireframe," "prototype," "mockup," or "build me a page layout."
---

# Wireframe Builder

Create production-ready, interactive HTML wireframes using a neutral, monochromatic design system. All wireframes are standalone HTML/CSS/JS files that work in any browser.

> **CRITICAL**: Use the `ui-ux-pro-max` skill to determine optimal layout, spacing, and typography sizing. However, **IGNORE** any color or style suggestions from `ui-ux-pro-max`. You must enforce a strict, neutral GREY-SCALE palette for all wireframes.

## When to Use

- User requests a wireframe, mockup, or prototype
- User wants to plan a landing page, website, or app layout
- User provides content and needs it structured into a visual layout
- User mentions "wireframe," "mockup," "prototype," or "page layout"

---

## Workflow Checklist

Copy and update this checklist to track progress:

```markdown
## Wireframe Progress
- [ ] Phase 1: Discovery interview + layout selection
- [ ] Phase 2: Content intake & gap analysis
- [ ] Phase 3: Structure planning
- [ ] Phase 4: Wireframe generation
- [ ] Phase 5: Review & iteration
```

---

## Phase 1: Discovery Interview

Before building, gather essential context. Ask these questions (batch 2-3 at a time):

### Core Questions
1. **Primary objective**: What should visitors do? (purchase, sign up, learn, contact, book)
2. **Target audience**: Who are the visitors? What do they care about?
3. **Key differentiators**: What makes this offering unique vs. competitors?

### Layout Selection (Required)
Ask the user to select a layout archetype. Present these options:

> **What type of layout fits this project?**
> 1. **Centered SaaS** — Balanced, professional, CTA-focused (default)
> 2. **Full-Bleed Visual** — Photography-heavy, minimal text
> 3. **Split-Screen** — Dual-focus hero (image + text)
> 4. **Editorial Magazine** — Long-form, multi-column, content-rich
> 5. **Horizontal Scroll** — Gallery/portfolio, sequential
> 6. **Immersive Parallax** — Storytelling, scroll-driven
> 7. **Dashboard Dense** — Admin/analytics, data-heavy
> 8. **Single-Column Minimal** — Focused, direct, lots of whitespace

If unsure, recommend based on their content and goals. Consult `resources/docs/layout-archetypes.md` for detailed guidance.

### Secondary Questions (as needed)
4. **Tone**: Professional, friendly, bold, minimal, luxurious?
5. **Page scope**: Single landing page, multi-page site, or app-style?
6. **Existing brand**: Any colors, fonts, or visual identity to consider?

> **⚠️ MANDATORY**: You MUST complete Phase 1 and Phase 3 before generating. NEVER skip to wireframe generation without:
> 1. Asking about layout archetype preference
> 2. Proposing section structure and getting user approval
> 
> Even if content is provided, the user should confirm layout and structure choices.

---

## Phase 2: Content Intake

### If User Provides Content Document
1. Read and analyze the content
2. Map content to appropriate sections
3. Identify gaps that would weaken the page

### Gap Analysis Checklist
Check if content includes:
- [ ] Clear headline + subheadline
- [ ] Feature/benefit descriptions
- [ ] Social proof (testimonials, logos, stats)
- [ ] Call-to-action (what user does next)
- [ ] FAQ or objection handling
- [ ] Contact/footer information

### Addressing Gaps
For missing content, offer two options:
1. **Suggest contextual additions** based on objectives (preferred)
2. **Ask user to provide** specific missing content

> **NO LOREM IPSUM.** All content must be explicit user content or contextual additions based on best judgment.

### Content Restructuring
If provided content would be more effective restructured, suggest changes with rationale. Example:
- "Moving testimonials above pricing increases trust before the ask"
- "Breaking features into problem/solution pairs improves clarity"

---

## Phase 3: Structure Planning

Before generating, propose the section order with brief rationale. **Match the structure to the selected layout archetype.**

```markdown
## Proposed Structure

**Layout Archetype**: [Selected archetype]

1. **Header** - Navigation + CTA
2. **Hero** - Main headline + value prop
3. **Logo Bar** - Social proof (trusted by...)
4. **Features** - 3 key benefits
5. **How It Works** - 3-step process
6. **Testimonials** - 2-3 customer quotes
7. **Pricing** - Plan comparison
8. **FAQ** - Address objections
9. **CTA** - Final conversion push
10. **Footer** - Links + contact

Does this structure work for you?
```

> **Note**: Adjust section structure based on the layout archetype. For example:
> - **Full-Bleed Visual**: Fewer text sections, more image galleries
> - **Dashboard Dense**: KPI cards, data tables, sidebar navigation
> - **Single-Column Minimal**: Essential sections only, no grid layouts

Wait for user approval before generating.

---

## Phase 4: Wireframe Generation

### Setup
1. Copy base template from `resources/base/` to output location
2. **Read `resources/docs/ux-rules.md`** — These rules are MANDATORY
3. Modify HTML structure per approved plan
4. Populate with user content
5. **Metric Calibration Only**:
    - Use `ui-ux-pro-max` guidelines for **layout metrics** (padding, margins, grid gaps) ONLY.
    - **IGNORE** all typography style suggestions. Use **Inter (Sans-Serif)** for EVERYTHING.
    - **IGNORE** all color/style recommendations. Use ONLY neutral greys.
    - **IGNORE** content tone. The wireframe must NOT look "Industrial" or "Playful". It must look like a blueprint.

### File Structure
```
wireframe/
├── index.html      # Main wireframe
├── styles.css      # Design system (copy from resources/base/)
└── components.js   # Interactive JS (copy from resources/base/)
```

### Component Reference
Consult `resources/docs/components.md` for correct HTML patterns for each component type.

### Design System Reference
Consult `resources/docs/design-system.md` for tokens, spacing, and typography scales.

### Key Principles (MANDATORY)

> **ENFORCEMENT**: These are NOT suggestions. Every wireframe MUST follow these rules.

1. **Strict Design System (ZERO BIAS)**:
   - **Typography**: `Inter` (Sans-serif) for ALL headings and body text. NO Serifs.
   - **Colors**: Strict Grey-scale. White (`#ffffff`), Black (`#000000`), and Slate-50 through Slate-900.
   - **Backgrounds**: Solid colors only. **NO GRADIENTS**.
   - **Borders**: Solid, 1px borders. `var(--radius-md)`.
   - **Spacing**: Strict `4px` grid.
   - **Content-Agnostic**: The design must NEVER change based on the "vibe" of the content.

2. **Container everything** — All content inside `.container` for proper max-width

3. **Section alternation** — Alternate `.section` and `.section--alt` for visual rhythm

4. **Heading hierarchy** — One H1 (hero only), H2 for sections, H3 for cards. NEVER skip levels.

5. **Accessibility required**:
   - Include skip link at top: `<a href="#main" class="skip-link">Skip to main content</a>`
   - All images must have descriptive alt text (no empty alt)
   - All form inputs must have visible labels (not just placeholder)
   - All buttons are 44x44px minimum

6. **Responsive grids** — Use `.grid--2`, `.grid--3`, `.grid--4` for auto-responsive layouts

7. **NO ICONS ALLOWED**:
   - Do NOT use icon libraries (FontAwesome, Heroicons, etc.).
   - Do NOT use SVG paths for icons.
   - **Use filled circles for all icon placeholders**: `<div class="icon-placeholder"></div>` (CSS: `border-radius: 50%; background-color: var(--color-text-muted); width: 24px; height: 24px;`).


### Interactive Components
All interactive components work automatically via `components.js`:
- **Accordion**: Add `.accordion` class, item structure per docs
- **Tabs**: Add `data-tab` attributes linking triggers to panels
- **Carousel**: Add `data-autoplay="5000"` for auto-rotation
- **Modal**: Add `data-modal-open` and `data-modal-close` attributes

---

## Phase 5: Review & Iteration

### Preview Setup
Start a local server for preview:
```bash
cd [wireframe-directory]
python3 -m http.server 8080
```

Then open `http://localhost:8080` in browser.

### Testing Checklist
- [ ] All sections render correctly
- [ ] Interactive components function (accordions, tabs, carousel, modal)
- [ ] Responsive at 375px (mobile), 768px (tablet), 1200px (desktop)
- [ ] All content populated (no placeholders)
- [ ] Navigation links work

### Iteration
Based on user feedback:
- Adjust section order
- Modify content
- Add/remove components
- Fine-tune spacing or typography

---

## Resources

| Resource | Purpose |
|----------|---------|
| `resources/base/styles.css` | Complete design system CSS |
| `resources/base/components.js` | Interactive component JavaScript |
| `resources/base/index.html` | Starter template with all components |
| `resources/docs/design-system.md` | Token reference (colors, typography, spacing) |
| `resources/docs/components.md` | Component HTML patterns |
| `resources/docs/layout-archetypes.md` | Layout archetype definitions and usage |
| `resources/docs/ux-rules.md` | **MANDATORY** — UX enforcement rules, anti-patterns |
| `ui-ux-pro-max` Skill | **MANDATORY** — Use for layout, spacing, and font sizing calibration. |

---

## Quick Start

For simple requests where discovery is unnecessary:

1. Copy `resources/base/` to output directory
2. Modify `index.html` with user content
3. Remove unused component sections
4. Start preview server
5. Iterate based on feedback
