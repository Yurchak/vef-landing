import React from 'react';
import { ArrowRightIcon } from '@phosphor-icons/react';
import { GridMarker } from '../components/GridMarker';
import { useLanguage } from '../i18n/LanguageContext';

export default function Header() {
    const { lang, toggle, t } = useLanguage();

    return (
        <header className="relative top-0 left-0 right-0 z-40 bg-[var(--color-brand-bg)] border-b border-grid">
            <div className="w-full h-20 flex items-stretch justify-between">
                {/* Logo */}
                <div className="relative flex items-center px-6 lg:px-8 border-r border-grid cursor-pointer hover:bg-[var(--color-brand-accent)] transition-colors duration-400">
                    <GridMarker className="bottom-[-1px] right-[-1px]" />
                    <svg viewBox="0 0 149.3 42.9" className="h-8 md:h-10 lg:h-12 w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.8,30.4h19.7L19,20.7h2l3.5,9.7h5.9V2.8H2.8V30.4z M33.2,33.2h-7.7l3.6,9.7h-2l-3.6-9.7H0V0h33.2V33.2z
       M51.2,1.5l11.6,31.8h2L53.2,1.5H51.2z M67.7,14V1.5h8v1.7h-6.1V7h5.2v1.7h-5.2v3.6h6.1V14H67.7z M83.3,3.2V7h5.2v1.7h-5.2V14h-1.9
      V1.5h8v1.7H83.3z M53.8,33.3l-3.5-6.2l-2.1,2.5v3.6h-1.9V20.8h1.9v6.3l5.1-6.3h2.3l-4.1,4.9l4.5,7.6H53.8z M77.3,23.6l-1.9,5.5h3.8
      L77.3,23.6z M80.6,33.3l-0.9-2.5h-4.9L74,33.3h-2l4.6-12.5h1.5l4.6,12.5H80.6z M92.3,22.5h-2.8v3.9h2.8c1.3,0,2.1-0.7,2.1-1.9
      C94.4,23.2,93.5,22.5,92.3,22.5z M94.5,33.3L91.8,28h-2.4v5.3h-1.9V20.8h4.8c2.4,0,3.9,1.5,3.9,3.6c0,1.8-1.1,2.9-2.5,3.3l2.9,5.5
      H94.5z M106.4,22.5v10.8h-1.9V22.5h-3.4v-1.7h8.8v1.7H106.4z M118,23.6l-1.9,5.5h3.8L118,23.6z M115.3,18h5.4v1.3h-5.4V18z
       M121.3,33.3l-0.9-2.5h-4.9l-0.9,2.5h-2l4.6-12.5h1.5l4.6,12.5H121.3z M128.3,33.3V20.8h1.9v10.8h6v1.7H128.3z M144.8,33.4
      c-1.9,0-3.2-0.4-4.4-1.6l1.3-1.2c0.9,0.9,1.9,1.2,3.2,1.2c1.6,0,2.6-0.7,2.6-1.9c0-0.5-0.2-1-0.5-1.3c-0.3-0.3-0.6-0.4-1.4-0.5
      l-1.5-0.2c-1-0.1-1.8-0.5-2.4-1c-0.6-0.6-0.9-1.4-0.9-2.4c0-2.2,1.6-3.7,4.2-3.7c1.6,0,2.8,0.4,3.9,1.4l-1.2,1.2
      c-0.8-0.7-1.7-1-2.7-1c-1.5,0-2.3,0.8-2.3,1.9c0,0.5,0.1,0.9,0.5,1.2c0.3,0.3,0.8,0.5,1.4,0.6l1.4,0.2c1.2,0.2,1.8,0.5,2.3,0.9
      c0.7,0.6,1,1.5,1,2.6C149.3,32,147.4,33.4,144.8,33.4z M67.4,20.8L64.7,28h2l2.6-7.2H67.4z M60.4,1.5l-2.6,7.2h2l2.6-7.2H60.4z"/>
                    </svg>
                </div>

                {/* Language Toggle */}
                <button
                    onClick={toggle}
                    className="hidden md:flex items-center justify-center px-6 border-r border-grid hover:bg-[var(--color-brand-accent)] transition-colors duration-400 font-data text-xs font-medium uppercase tracking-widest cursor-pointer"
                    aria-label={lang === 'lv' ? 'Switch to English' : 'Pārslēgt uz latviešu'}
                >
                    {lang === 'lv' ? 'EN' : 'LV'}
                </button>

                {/* Spacer */}
                <div className="flex-1" />

                {/* CTA */}
                <div className="flex items-stretch relative">
                    <GridMarker className="bottom-[-1px] left-[-1px]" />
                    <button
                        onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center justify-center gap-2 px-8 lg:px-12 border-l border-grid hover:bg-[var(--color-brand-accent)] transition-colors duration-400 font-heading text-xs font-medium uppercase tracking-widest group cursor-pointer"
                    >
                        {t.book}
                        <ArrowRightIcon size={16} weight="light" className="transform group-hover:translate-x-1 group-active:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
        </header>
    );
}
