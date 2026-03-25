import { InstagramLogoIcon, LinkedinLogoIcon, FacebookLogoIcon } from '@phosphor-icons/react';
import { GridMarker } from '../components/GridMarker';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
    const { lang, toggle, t } = useLanguage();

    return (
        <footer id="footer" className="w-full bg-[var(--color-brand-bg-alt)] text-[var(--color-brand-text)] flex flex-col overflow-hidden">
            {/* Top Section - 4 Columns */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[var(--color-brand-border)] gap-[var(--stroke-width)] border-b border-grid">

                <div className="relative p-8 md:p-12 lg:p-16 space-y-6 bg-[var(--color-brand-bg-alt)]">
                    <GridMarker className="bottom-[-1px] right-[-1px] hidden md:block" />
                    <h5 className="text-[10px] uppercase tracking-widest opacity-60 pb-0 md:pb-4 font-data after:block after:w-8 after:h-[var(--stroke-width)] after:bg-[var(--color-brand-border)] after:mt-6 md:after:mt-4">{t.footerAddress}</h5>
                    <div className="space-y-2 opacity-80 leading-relaxed text-sm pt-2">
                        <p>VEF Kvartāls<br />Ūnijas iela 8K7<br />Rīga, LV-1039</p>
                        <a href="tel:+37125666199" className="block mt-4 font-heading text-sm font-medium hover:text-[var(--color-brand-accent)] transition-colors">+371 256 66 199</a>
                    </div>
                </div>

                <div className="relative p-8 md:p-12 lg:p-16 space-y-6 bg-[var(--color-brand-bg-alt)]">
                    <GridMarker className="bottom-[-1px] right-[-1px] hidden lg:block" />
                    <GridMarker className="bottom-[-1px] left-[-1px] hidden md:block lg:hidden" />
                    <h5 className="text-[10px] uppercase tracking-widest opacity-60 pb-0 md:pb-4 font-data after:block after:w-8 after:h-[var(--stroke-width)] after:bg-[var(--color-brand-border)] after:mt-6 md:after:mt-4">{t.footerNav}</h5>
                    <nav className="flex flex-col space-y-4 opacity-80 pt-2">
                        <a href="#venues" className="hover:text-[var(--color-brand-accent)] transition-colors w-max uppercase tracking-widest text-[11px] font-medium">{t.footerVenues}</a>
                        <a href="https://vefkvartals.lv/premises/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-accent)] transition-colors w-max uppercase tracking-widest text-[11px] font-medium">{t.footerOffices}</a>
                        <a href="#bento-grid" className="hover:text-[var(--color-brand-accent)] transition-colors w-max uppercase tracking-widest text-[11px] font-medium">{t.footerEvents}</a>
                        <a href="#contact-form" className="hover:text-[var(--color-brand-accent)] transition-colors w-max uppercase tracking-widest text-[11px] font-medium">{t.footerContact}</a>
                        <a href="https://vefkvartals.lv/events/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-accent)] transition-colors w-max uppercase tracking-widest text-[11px] font-medium">{t.footerCalendar}</a>
                        <a href="https://vefkvartals.lv/jaunumi/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-accent)] transition-colors w-max uppercase tracking-widest text-[11px] font-medium">{t.footerNews}</a>
                    </nav>
                </div>

                <div className="relative p-8 md:p-12 lg:p-16 space-y-6 bg-[var(--color-brand-bg-alt)] flex flex-col justify-between">
                    <GridMarker className="bottom-[-1px] right-[-1px] hidden md:block" />
                    <div>
                        <h5 className="text-[10px] uppercase tracking-widest opacity-60 pb-0 md:pb-4 font-data after:block after:w-8 after:h-[var(--stroke-width)] after:bg-[var(--color-brand-border)] after:mt-6 md:after:mt-4">{t.footerLegal}</h5>
                        <nav className="flex flex-col space-y-4 opacity-80 pt-6">
                            <a href="https://vefkvartals.lv/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-accent)] transition-colors uppercase tracking-widest text-[11px] font-medium">{t.footerPrivacy}</a>
                            <a href="https://vefkvartals.lv/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-accent)] transition-colors uppercase tracking-widest text-[11px] font-medium">{t.footerTerms}</a>
                        </nav>
                    </div>
                </div>

                <div className="relative p-8 md:p-12 lg:p-16 space-y-6 bg-[var(--color-brand-bg-alt)] flex flex-col justify-between">
                    <div>
                        <h5 className="text-[10px] uppercase tracking-widest opacity-60 pb-0 md:pb-4 font-data after:block after:w-8 after:h-[var(--stroke-width)] after:bg-[var(--color-brand-border)] after:mt-6 md:after:mt-4">{t.footerFollow}</h5>
                        <div className="flex space-x-4 opacity-80 pt-6">
                            <a href="https://www.instagram.com/vefkvartals/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 transition-colors group hover:bg-black/10">
                                <InstagramLogoIcon size={24} weight="light" />
                            </a>
                            <a href="https://www.facebook.com/vefkvartals" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-3 transition-colors group hover:bg-black/10">
                                <FacebookLogoIcon size={24} weight="light" />
                            </a>
                            <a href="https://www.linkedin.com/company/vefkvartals/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 transition-colors group hover:bg-black/10">
                                <LinkedinLogoIcon size={24} weight="light" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="w-full bg-[var(--color-brand-bg-alt)] text-[var(--color-brand-text)] flex justify-center">
                <div className="w-full p-8 md:py-8 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest gap-4 md:gap-0">
                    <span className="opacity-60 font-bold font-data">&copy; {t.footerCopyright}</span>
                    <button
                        onClick={toggle}
                        className="opacity-60 hover:opacity-100 transition-opacity font-data font-medium tracking-widest cursor-pointer"
                        aria-label={lang === 'lv' ? 'Switch to English' : 'Pārslēgt uz latviešu'}
                    >
                        {lang === 'lv' ? 'EN' : 'LV'}
                    </button>
                    <span className="opacity-40 font-data">{t.footerMadeBy}</span>
                </div>
            </div>
        </footer>
    );
}
