# Wireframe Design System Reference

Complete reference for the neutral, monochromatic design system used in wireframes.

---

## Color Palette (Monochromatic)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-white` | #ffffff | Primary background |
| `--color-gray-50` | #fafafa | Alternate section bg |
| `--color-gray-100` | #f5f5f5 | Muted section bg, card fills |
| `--color-gray-200` | #e5e5e5 | Borders |
| `--color-gray-300` | #d4d4d4 | Strong borders |
| `--color-gray-400` | #a3a3a3 | Subtle text |
| `--color-gray-500` | #737373 | Focus states |
| `--color-gray-600` | #525252 | Muted text |
| `--color-gray-700` | #404040 | Button hover |
| `--color-gray-800` | #262626 | Dark elements |
| `--color-gray-900` | #171717 | Primary text, buttons |
| `--color-black` | #0a0a0a | Darkest |

### Semantic Colors
- **Background**: `--color-bg`, `--color-bg-alt`, `--color-bg-muted`
- **Text**: `--color-text`, `--color-text-muted`, `--color-text-subtle`
- **Borders**: `--color-border`, `--color-border-strong`

---

## Typography Scale (Fluid)

All sizes use `clamp()` for smooth scaling between breakpoints.

| Token | Min | Max | Usage |
|-------|-----|-----|-------|
| `--font-size-xs` | 0.75rem | 0.875rem | Badges, hints |
| `--font-size-sm` | 0.875rem | 1rem | Small text, labels |
| `--font-size-base` | 1rem | 1.125rem | Body text |
| `--font-size-lg` | 1.125rem | 1.25rem | Lead, card titles |
| `--font-size-xl` | 1.25rem | 1.5rem | H5, large text |
| `--font-size-2xl` | 1.5rem | 2rem | H4 |
| `--font-size-3xl` | 1.875rem | 2.5rem | H3 |
| `--font-size-4xl` | 2.25rem | 3.5rem | H2 |
| `--font-size-5xl` | 3rem | 4.5rem | H1, Hero |

### Font Weights
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700

### Line Heights
- `--line-height-tight`: 1.2 (headings)
- `--line-height-normal`: 1.5 (body)
- `--line-height-relaxed`: 1.75 (long-form)

---

## Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 0.25rem | Tiny gaps |
| `--space-2` | 0.5rem | Icon gaps |
| `--space-3` | 0.75rem | Button padding Y |
| `--space-4` | 1rem | Standard gap |
| `--space-5` | 1.25rem | Form padding |
| `--space-6` | 1.5rem | Card padding |
| `--space-8` | 2rem | Section gaps |
| `--space-10` | 2.5rem | |
| `--space-12` | 3rem | Header margins |
| `--space-16` | 4rem | Section padding |
| `--space-20` | 5rem | Hero padding |
| `--space-24` | 6rem | Tall hero |

---

## Container Widths

| Token | Width | Usage |
|-------|-------|-------|
| `--container-sm` | 640px | Narrow content |
| `--container-md` | 768px | Medium content |
| `--container-lg` | 1024px | Wide content |
| `--container-xl` | 1280px | Standard max |
| `--container-2xl` | 1536px | Extra wide |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 0.25rem | Inputs |
| `--radius-md` | 0.5rem | Buttons, cards |
| `--radius-lg` | 0.75rem | Large cards |
| `--radius-xl` | 1rem | CTAs, banners |
| `--radius-full` | 9999px | Pills, avatars |

---

## Shadows

| Token | Usage |
|-------|-------|
| `--shadow-sm` | Subtle elevation |
| `--shadow-md` | Card hover |
| `--shadow-lg` | Featured elements, modals |

---

## Transitions

| Token | Duration | Usage |
|-------|----------|-------|
| `--transition-fast` | 150ms | Hover states |
| `--transition-base` | 250ms | General animations |
| `--transition-slow` | 350ms | Carousels, modals |

---

## Breakpoints

Standard responsive breakpoints (use in media queries):

| Name | Width | Typical Usage |
|------|-------|---------------|
| sm | 640px | Single → two columns |
| md | 768px | Show desktop nav |
| lg | 1024px | Three+ columns |
| xl | 1280px | Max container |
| 2xl | 1536px | Wide screens |

---

## Usage Examples

### Responsive Grid
```css
.grid--3 {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

### Fluid Typography
```css
h1 {
  font-size: var(--font-size-5xl); /* 3rem → 4.5rem */
  line-height: var(--line-height-tight);
}
```

### Section Alternation
```html
<section class="section">...</section>
<section class="section section--alt">...</section>
<section class="section">...</section>
```

---

## Anti-Patterns (NEVER DO)

### Spacing Mistakes

```css
/* ❌ BAD - Arbitrary values */
padding: 15px;
margin: 22px 37px;
gap: 1.3rem;

/* ✅ GOOD - Design tokens */
padding: var(--space-4);
margin: var(--space-6) var(--space-8);
gap: var(--space-4);
```

### Typography Mistakes

```css
/* ❌ BAD - Arbitrary font sizes */
font-size: 18px;
font-size: 1.1rem;

/* ✅ GOOD - Scale tokens */
font-size: var(--font-size-lg);
```

### Color Mistakes

```css
/* ❌ BAD - Raw hex values */
color: #333;
background: #f0f0f0;

/* ✅ GOOD - Semantic tokens */
color: var(--color-text);
background: var(--color-bg-alt);
```

### Transition Mistakes

```css
/* ❌ BAD - Transition all (hurts performance) */
transition: all 0.3s ease;

/* ✅ GOOD - Specific properties */
transition: background var(--transition-fast), 
            color var(--transition-fast);
```

### Focus Mistakes

```css
/* ❌ BAD - Removes focus visibility */
:focus { outline: none; }

/* ✅ GOOD - Custom focus ring */
:focus-visible {
    outline: 2px solid var(--color-gray-500);
    outline-offset: 2px;
}
```

---

## Common Mistakes to Avoid

| Mistake | Impact | Fix |
|---------|--------|-----|
| Using `px` for spacing | Inconsistent visual rhythm | Use `--space-*` tokens |
| Skipping heading levels | Accessibility issues | h1 → h2 → h3 hierarchy |
| Images without alt | Screen readers can't describe | Add descriptive alt text |
| Form inputs without labels | Users can't identify fields | Use visible `<label>` elements |
| Buttons under 44px | Hard to tap on mobile | Set `min-height: 44px` |
| Content outside container | Edge bleeds on mobile | Wrap in `.container` |
| Fixed pixel widths | Breaks responsive | Use `max-width` or `%` |

