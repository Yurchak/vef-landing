/**
 * Wireframe Components - Interactive JavaScript
 * Handles: Accordion, Tabs, Carousel, Modal, Mobile Nav
 */

(function () {
    'use strict';

    // === ACCORDION ===
    function initAccordions() {
        document.querySelectorAll('.accordion').forEach(accordion => {
            accordion.querySelectorAll('.accordion__trigger').forEach(trigger => {
                trigger.addEventListener('click', () => {
                    const item = trigger.closest('.accordion__item');
                    const isOpen = item.classList.contains('is-open');

                    // Close all items in this accordion (optional: remove for multi-open)
                    accordion.querySelectorAll('.accordion__item').forEach(i => i.classList.remove('is-open'));

                    // Toggle clicked item
                    if (!isOpen) item.classList.add('is-open');
                });
            });
        });
    }

    // === TABS ===
    function initTabs() {
        document.querySelectorAll('.tabs').forEach(tabs => {
            const triggers = tabs.querySelectorAll('.tabs__trigger');
            const panels = tabs.querySelectorAll('.tabs__panel');

            triggers.forEach(trigger => {
                trigger.addEventListener('click', () => {
                    const target = trigger.dataset.tab;

                    // Update triggers
                    triggers.forEach(t => t.classList.remove('is-active'));
                    trigger.classList.add('is-active');

                    // Update panels
                    panels.forEach(panel => {
                        panel.classList.toggle('is-active', panel.id === target);
                    });
                });
            });
        });
    }

    // === CAROUSEL ===
    function initCarousels() {
        document.querySelectorAll('.carousel').forEach(carousel => {
            const track = carousel.querySelector('.carousel__track');
            const slides = carousel.querySelectorAll('.carousel__slide');
            const prevBtn = carousel.querySelector('.carousel__nav--prev');
            const nextBtn = carousel.querySelector('.carousel__nav--next');
            const dots = carousel.querySelectorAll('.carousel__dot');

            if (!slides.length) return;

            let current = 0;
            const total = slides.length;

            function goTo(index) {
                current = (index + total) % total;
                track.style.transform = `translateX(-${current * 100}%)`;
                dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
            }

            if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
            if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));
            dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

            // Auto-play (optional)
            if (carousel.dataset.autoplay) {
                setInterval(() => goTo(current + 1), parseInt(carousel.dataset.autoplay) || 5000);
            }
        });
    }

    // === MODAL ===
    function initModals() {
        // Open modal
        document.querySelectorAll('[data-modal-open]').forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = document.getElementById(btn.dataset.modalOpen);
                if (modal) modal.classList.add('is-open');
                document.body.style.overflow = 'hidden';
            });
        });

        // Close modal
        document.querySelectorAll('[data-modal-close]').forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.modal');
                if (modal) modal.classList.remove('is-open');
                document.body.style.overflow = '';
            });
        });

        // Close on backdrop click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', e => {
                if (e.target === modal) {
                    modal.classList.remove('is-open');
                    document.body.style.overflow = '';
                }
            });
        });

        // Close on escape
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal.is-open').forEach(modal => {
                    modal.classList.remove('is-open');
                });
                document.body.style.overflow = '';
            }
        });
    }

    // === MOBILE NAV ===
    function initMobileNav() {
        const menuBtn = document.querySelector('.header__menu-btn');
        const mobileNav = document.querySelector('.mobile-nav');
        const closeBtn = document.querySelector('.mobile-nav__close');

        if (menuBtn && mobileNav) {
            menuBtn.addEventListener('click', () => mobileNav.classList.add('is-open'));
        }
        if (closeBtn && mobileNav) {
            closeBtn.addEventListener('click', () => mobileNav.classList.remove('is-open'));
        }

        // Close nav on link click
        if (mobileNav) {
            mobileNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => mobileNav.classList.remove('is-open'));
            });
        }
    }

    // === SMOOTH SCROLL ===
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', e => {
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // === INIT ALL ===
    function init() {
        initAccordions();
        initTabs();
        initCarousels();
        initModals();
        initMobileNav();
        initSmoothScroll();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
