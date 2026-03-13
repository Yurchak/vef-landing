# Component Library Reference

Quick reference for all available wireframe components with usage examples.

---

## Layout

### Container
```html
<div class="container">
  <!-- Content constrained to max-width -->
</div>
```

### Section
```html
<section class="section">Default</section>
<section class="section section--alt">Alternate bg (gray-50)</section>
<section class="section section--muted">Muted bg (gray-100)</section>
```

### Grid
```html
<div class="grid grid--2">2-col responsive</div>
<div class="grid grid--3">3-col responsive</div>
<div class="grid grid--4">4-col responsive</div>
```

### Flex
```html
<div class="flex">Default row</div>
<div class="flex flex--center">Centered</div>
<div class="flex flex--between">Space between</div>
<div class="flex flex--col">Column</div>
<div class="flex flex--wrap">Wrap</div>
```

---

## Typography

```html
<h1 class="h1">Heading 1</h1>
<h2 class="h2">Heading 2</h2>
<p class="lead">Lead/intro paragraph</p>
<p>Normal body text</p>
<p class="small">Small text</p>
<p class="muted">Muted text</p>
<p class="subtle">Subtle text</p>
<p class="text-center text-balance">Centered, balanced</p>
```

---

## Header & Navigation

```html
<header class="header">
  <div class="container header__inner">
    <a href="#" class="header__logo">Brand</a>
    <nav class="header__nav">
      <a href="#">Link</a>
    </nav>
    <a href="#" class="btn btn--primary header__cta">CTA</a>
    <button class="header__menu-btn">☰</button>
  </div>
</header>
```

### Mobile Nav
```html
<nav class="mobile-nav">
  <button class="mobile-nav__close">✕</button>
  <a href="#">Link</a>
</nav>
```

---

## Hero

### Centered Hero
```html
<section class="hero hero--tall">
  <div class="container">
    <div class="hero__content">
      <h1 class="hero__title">Title</h1>
      <p class="hero__subtitle lead">Subtitle</p>
      <div class="hero__actions">
        <a href="#" class="btn btn--primary btn--lg">Primary</a>
        <a href="#" class="btn btn--secondary btn--lg">Secondary</a>
      </div>
    </div>
  </div>
</section>
```

### Split Hero (text + image)
```html
<section class="hero hero--split">
  <div class="container">
    <div class="hero__content">
      <h1>Title</h1>
      <p class="lead">Description</p>
    </div>
    <div class="hero__image">
      <img src="..." alt="">
    </div>
  </div>
</section>
```

---

## Buttons

```html
<a class="btn btn--primary">Primary</a>
<a class="btn btn--secondary">Secondary</a>
<a class="btn btn--ghost">Ghost</a>

<!-- Sizes -->
<a class="btn btn--primary btn--sm">Small</a>
<a class="btn btn--primary btn--lg">Large</a>
<a class="btn btn--primary btn--full">Full width</a>
```

---

## Cards

### Standard Card
```html
<div class="card">
  <div class="card__icon">🎯</div>
  <h3 class="card__title">Title</h3>
  <p class="card__text">Description</p>
</div>
```

### Card with Image
```html
<div class="card">
  <div class="card__image">
    <img src="..." alt="">
  </div>
  <h3 class="card__title">Title</h3>
  <p class="card__text">Description</p>
</div>
```

### Flat Card (no border)
```html
<div class="card card--flat">...</div>
```

---

## Features

```html
<section class="section features">
  <div class="container">
    <div class="features__header">
      <h2>Section Title</h2>
      <p class="muted">Subtitle</p>
    </div>
    <div class="grid grid--3">
      <div class="feature">
        <div class="feature__icon">⚡</div>
        <h3 class="feature__title h5">Feature</h3>
        <p class="card__text">Description</p>
      </div>
    </div>
  </div>
</section>
```

---

## Testimonials

```html
<div class="testimonial">
  <p class="testimonial__quote">"Quote text"</p>
  <div class="testimonial__author">
    <div class="testimonial__avatar">
      <img src="..." alt="">
    </div>
    <div>
      <div class="testimonial__name">Name</div>
      <div class="testimonial__role">Role, Company</div>
    </div>
  </div>
</div>
```

---

## Pricing

```html
<div class="pricing-card">
  <div class="pricing-card__name">Plan Name</div>
  <div class="pricing-card__desc">Description</div>
  <div class="pricing-card__price">
    <span class="pricing-card__amount">$29</span>
    <span class="pricing-card__period">/month</span>
  </div>
  <ul class="pricing-card__features">
    <li>Feature 1</li>
    <li>Feature 2</li>
  </ul>
  <a href="#" class="btn btn--primary btn--full">CTA</a>
</div>

<!-- Featured card -->
<div class="pricing-card pricing-card--featured">
  <span class="pricing-card__badge">Most Popular</span>
  ...
</div>
```

---

## Stats

```html
<div class="stats">
  <div class="stat">
    <div class="stat__value">10K+</div>
    <div class="stat__label">Label</div>
  </div>
</div>
```

---

## Accordion (FAQ)

```html
<div class="accordion">
  <div class="accordion__item">
    <button class="accordion__trigger">
      <span>Question</span>
      <span class="accordion__icon">+</span>
    </button>
    <div class="accordion__content">
      <div class="accordion__body">Answer</div>
    </div>
  </div>
</div>
```

---

## Tabs

```html
<div class="tabs">
  <div class="tabs__list">
    <button class="tabs__trigger is-active" data-tab="tab-1">Tab 1</button>
    <button class="tabs__trigger" data-tab="tab-2">Tab 2</button>
  </div>
  <div id="tab-1" class="tabs__panel is-active">Content 1</div>
  <div id="tab-2" class="tabs__panel">Content 2</div>
</div>
```

---

## Carousel

```html
<div class="carousel" data-autoplay="5000">
  <div class="carousel__track">
    <div class="carousel__slide">Slide 1</div>
    <div class="carousel__slide">Slide 2</div>
  </div>
  <button class="carousel__nav carousel__nav--prev">←</button>
  <button class="carousel__nav carousel__nav--next">→</button>
  <div class="carousel__dots">
    <button class="carousel__dot is-active"></button>
    <button class="carousel__dot"></button>
  </div>
</div>
```

---

## Modal

```html
<!-- Trigger -->
<button data-modal-open="my-modal">Open Modal</button>

<!-- Modal -->
<div id="my-modal" class="modal">
  <div class="modal__content">
    <div class="modal__header">
      <h3 class="modal__title">Title</h3>
      <button class="modal__close" data-modal-close>✕</button>
    </div>
    <div class="modal__body">Content</div>
    <div class="modal__footer">
      <button class="btn btn--secondary" data-modal-close>Cancel</button>
      <button class="btn btn--primary">Confirm</button>
    </div>
  </div>
</div>
```

---

## Forms

```html
<form class="form">
  <div class="form-row">
    <div class="form-group">
      <label class="form-label" for="name">Name</label>
      <input type="text" id="name" class="form-input">
    </div>
  </div>
  <div class="form-group">
    <label class="form-label" for="select">Select</label>
    <select id="select" class="form-select">
      <option>Option 1</option>
    </select>
  </div>
  <div class="form-group">
    <label class="form-label" for="msg">Message</label>
    <textarea id="msg" class="form-textarea"></textarea>
  </div>
  <label class="checkbox">
    <input type="checkbox"> Check this
  </label>
  <button type="submit" class="btn btn--primary">Submit</button>
</form>
```

---

## Data Display

### Table
```html
<div class="table-wrapper">
  <table class="table table--striped">
    <thead>
      <tr><th>Header</th></tr>
    </thead>
    <tbody>
      <tr><td>Data</td></tr>
    </tbody>
  </table>
</div>
```

### Progress
```html
<div class="progress">
  <div class="progress__bar" style="width: 75%"></div>
</div>
```

### Badge
```html
<span class="badge">Badge</span>
<span class="badge badge--outline">Outline</span>
```

### Alert
```html
<div class="alert">
  <div class="alert__title">Title</div>
  <p>Message</p>
</div>
```

---

## Timeline

```html
<div class="timeline">
  <div class="timeline__item">
    <div class="timeline__marker"></div>
    <div class="timeline__date">Date</div>
    <h3 class="timeline__title">Title</h3>
    <p class="timeline__content">Content</p>
  </div>
</div>
```

---

## Process Steps

```html
<div class="steps">
  <div class="step">
    <div class="step__number"></div>
    <h3 class="step__title">Step Title</h3>
    <p class="step__text">Description</p>
  </div>
</div>
```

---

## Team

```html
<div class="team-grid">
  <div class="team-member">
    <div class="team-member__image">
      <img src="..." alt="">
    </div>
    <div class="team-member__name">Name</div>
    <div class="team-member__role">Role</div>
  </div>
</div>
```

---

## Logo Grid

```html
<div class="logo-grid">
  <div class="logo-grid__item"><img src="..." alt=""></div>
</div>
```

---

## CTA Banner

```html
<div class="cta">
  <h2 class="cta__title">Headline</h2>
  <p class="cta__text">Supporting text</p>
  <div class="flex flex--center">
    <a href="#" class="btn btn--primary btn--lg">CTA</a>
  </div>
</div>
```

---

## Footer

```html
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <div class="footer__logo">Brand</div>
        <p>Description</p>
      </div>
      <div>
        <div class="footer__heading">Links</div>
        <nav class="footer__links">
          <a href="#">Link</a>
        </nav>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© 2026 Brand</p>
    </div>
  </div>
</footer>
```
