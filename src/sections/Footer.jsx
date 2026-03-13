import React from 'react';
import { InstagramLogo, LinkedinLogo, FacebookLogo } from '@phosphor-icons/react';
import { GridMarker } from '../components/GridMarker';

export default function Footer() {
    return (
        <footer id="footer" className="w-full bg-[var(--color-brand-bg-alt)] text-[var(--color-brand-text)] flex flex-col overflow-hidden">
            {/* Top Section - 4 Columns */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[var(--color-brand-border)] gap-[var(--stroke-width)] border-b border-grid">

                <div className="relative p-8 md:p-12 lg:p-16 space-y-6 bg-[var(--color-brand-bg-alt)]">
                    <GridMarker className="bottom-[-1px] right-[-1px] hidden md:block" />
                    <h5 className="text-[10px] uppercase tracking-widest opacity-60 border-b border-grid pb-4">Adrese</h5>
                    <div className="space-y-2 opacity-80 leading-relaxed text-sm font-sans pt-2">
                        <p>VEF Kvartāls<br />Bērzaunes iela 11A<br />Rīga, LV-1039</p>
                        <p className="mt-4 font-heading text-lg">+ 371 200 00 000</p>
                    </div>
                </div>

                <div className="relative p-8 md:p-12 lg:p-16 space-y-6 bg-[var(--color-brand-bg-alt)]">
                    <GridMarker className="bottom-[-1px] right-[-1px] hidden lg:block" />
                    <GridMarker className="bottom-[-1px] left-[-1px] hidden md:block lg:hidden" />
                    <h5 className="text-[10px] uppercase tracking-widest opacity-60 border-b border-grid pb-4">Navigācija</h5>
                    <nav className="flex flex-col space-y-4 font-sans opacity-80 pt-2">
                        <a href="#" className="hover:text-[var(--color-brand-accent)] transition-colors w-max uppercase tracking-widest text-[11px] font-bold">Biroja Telpas</a>
                        <a href="#" className="hover:text-[var(--color-brand-accent)] transition-colors w-max uppercase tracking-widest text-[11px] font-bold">Pasākumu Kalendārs</a>
                        <a href="#" className="hover:text-[var(--color-brand-accent)] transition-colors w-max uppercase tracking-widest text-[11px] font-bold">Karte</a>
                    </nav>
                </div>

                <div className="relative p-8 md:p-12 lg:p-16 space-y-6 bg-[var(--color-brand-bg-alt)] flex flex-col justify-between">
                    <GridMarker className="bottom-[-1px] right-[-1px] hidden md:block" />
                    <div>
                        <h5 className="text-[10px] uppercase tracking-widest opacity-60 border-b border-grid pb-4">Info</h5>
                        <nav className="flex flex-col space-y-4 font-sans opacity-80 pt-6">
                            <a href="#" className="hover:text-[var(--color-brand-accent)] transition-colors w-max uppercase tracking-widest text-[11px] font-bold">Kontakti</a>
                            <a href="#" className="hover:text-[var(--color-brand-accent)] transition-colors w-max uppercase tracking-widest text-[11px] font-bold">Jaunumi</a>
                        </nav>
                    </div>
                </div>

                <div className="relative p-8 md:p-12 lg:p-16 space-y-6 bg-[var(--color-brand-bg-alt)] flex flex-col justify-between">
                    <div>
                        <h5 className="text-[10px] uppercase tracking-widest opacity-60 border-b border-grid pb-4">Seko Mums</h5>
                        <div className="flex space-x-4 opacity-80 pt-6">
                            <a href="#" aria-label="Instagram" className="p-3 transition-colors group hover:bg-black/10">
                                <InstagramLogo size={24} weight="regular" className="group-hover:text-white" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="p-3 transition-colors group hover:bg-black/10">
                                <LinkedinLogo size={24} weight="regular" className="group-hover:text-white" />
                            </a>
                            <a href="#" aria-label="Facebook" className="p-3 transition-colors group hover:bg-black/10">
                                <FacebookLogo size={24} weight="fill" className="group-hover:text-white" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="w-full bg-[var(--color-brand-bg-alt)] text-[var(--color-brand-text)] flex justify-center">
                <div className="w-full p-8 md:py-8 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest">
                    <span className="opacity-60 font-bold">© 2026 VEF KVARTĀLS</span>
                    <span className="opacity-40 mt-4 md:mt-0">Made mostly by machines</span>
                </div>
            </div>
        </footer>
    );
}

