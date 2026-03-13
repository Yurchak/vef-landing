# UX Rules — Mandatory Enforcement

**Every wireframe MUST follow these rules.** This is not optional—these patterns ensure consistency and professionalism.

---

## 1. Spacing Rules

### MUST Use Design Tokens

| Use This Token | For This Purpose |
|----------------|------------------|
| `--space-1` (0.25rem) | Icon gaps only |
| `--space-2` (0.5rem) | Icon gaps, tiny margins |
| `--space-3` (0.75rem) | Button padding Y |
| `--space-4` (1rem) | Standard gap, container mobile padding |
| `--space-6` (1.5rem) | Card padding, element gaps |
| `--space-8` (2rem) | Section gaps, container desktop padding |
| `--space-12` (3rem) | Header margins |
| `--space-16` (4rem) | Section padding |
| `--space-20` (5rem) | Hero padding |
| `--space-24` (6rem) | Tall hero padding |

### NEVER Do This
```css
/* ❌ BAD - Arbitrary values */
margin: 15px;
padding: 22px 37px;
gap: 1.3rem;

/* ✅ GOOD - Design tokens */
margin: var(--space-4);
padding: var(--space-6) var(--space-8);
gap: var(--space-4);
```

---

## 2. Layout Rules

### Container Usage
- **ALWAYS** wrap content in `.container`
- **NEVER** let content touch viewport edges
- **ALWAYS** use `.section` for page sections

### Responsive Grids
```css
/* ✅ GOOD - Use built-in responsive grids */
.grid--2  /* 2 columns, auto-wraps */
.grid--3  /* 3 columns, auto-wraps */
.grid--4  /* 4 columns, auto-wraps */

/* ❌ BAD - Hardcoded breakpoints */
@media (min-width: 768px) { grid-template-columns: 1fr 1fr 1fr; }
```

### Overflow Prevention
```css
/* Already set in base CSS */
body { overflow-x: hidden; }
img { max-width: 100%; }
```

---

## 3. Typography Rules

### Heading Hierarchy
| Element | Usage |
|---------|-------|
| `h1` | ONE per page, in hero only |
| `h2` | Section titles |
| `h3` | Card titles, subsections |
| `h4` | Smaller headings |
| `h5`, `h6` | Rarely needed |

### NEVER Skip Levels
```html
<!-- ❌ BAD -->
<h1>Title</h1>
<h4>Subsection</h4>  <!-- Skipped h2, h3 -->

<!-- ✅ GOOD -->
<h1>Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
```

### Line Length
- Body text: Max 65-75 characters per line
- Use `.container` or `max-w-prose` to constrain

---

## 4. Accessibility Rules

### Focus States
All interactive elements MUST be keyboard-accessible:
```css
/* Already in base CSS */
:focus-visible {
    outline: 2px solid var(--color-gray-500);
    outline-offset: 2px;
}
```

### Touch Targets
Minimum 44x44px for all clickable elements:
```css
.btn { min-height: 44px; min-width: 44px; }
```

### Form Labels
```html
<!-- ✅ GOOD - Associated label -->
<label for="email" class="form-label">Email</label>
<input type="email" id="email" class="form-input">

<!-- ❌ BAD - Placeholder only -->
<input type="email" placeholder="Email">
```

### Images
```html
<!-- ✅ GOOD - Descriptive alt -->
<img src="..." alt="Team meeting in modern office">

<!-- ❌ BAD - Missing or empty alt -->
<img src="...">
<img src="..." alt="">
```

### Skip Link
Include at top of every page:
```html
<a href="#main" class="skip-link">Skip to main content</a>
```

---

## 5. Component Rules

### Buttons
```html
<!-- Always use .btn class -->
<a href="#" class="btn btn--primary">CTA Text</a>
<button class="btn btn--secondary">Action</button>
```

### Cards
```html
<div class="card">
    <h3 class="card__title">Title</h3>
    <p class="card__text">Description</p>
</div>
```

### Section Alternation
```html
<section class="section">...</section>
<section class="section section--alt">...</section>  <!-- Alternate bg -->
<section class="section">...</section>
```

---

## 6. Anti-Patterns (NEVER DO)

| Anti-Pattern | Why It's Bad | Fix |
|--------------|--------------|-----|
| `transition: all` | Performance hit | Specify properties: `transition: background, color` |
| `outline: none` alone | Removes focus visibility | Use `:focus-visible` with visible ring |
| Arbitrary margin/padding | Inconsistent spacing | Use `--space-*` tokens |
| Fixed widths on content | Breaks mobile | Use `max-width` or percentages |
| `z-index: 9999` | Creates z-index wars | Use defined scale: 10, 20, 50, 100 |
| Placeholder-only inputs | Accessibility fail | Always include visible label |
| Skipped heading levels | Screen reader confusion | Follow h1→h2→h3 hierarchy |
| No alt text | Accessibility fail | Describe every meaningful image |

---

## Quick Checklist

Before submitting any wireframe, verify:

- [ ] All spacing uses `--space-*` tokens
- [ ] One `h1` only, proper heading hierarchy
- [ ] All buttons have 44px min touch target
- [ ] All form inputs have visible labels
- [ ] All images have alt text
- [ ] Skip link present at top
- [ ] `.container` wraps all content
- [ ] Sections alternate `.section` / `.section--alt`
- [ ] No horizontal scroll on mobile
- [ ] Focus states visible on all interactive elements
