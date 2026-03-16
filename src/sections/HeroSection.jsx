import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@phosphor-icons/react';
import { GridMarker } from '../components/GridMarker';
import vefPromenadeHero from '../assets/vef-promenade_hero.webp';

export default function HeroSection() {
    return (
        <section className="w-full border-b border-grid overflow-hidden bg-[var(--color-brand-bg)]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100svh-5rem)]">

                {/* Left Column - Unified CSS Grid */}
                <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[5rem_1fr_auto] lg:grid-cols-[6rem_1fr_auto] grid-rows-[auto_1fr] sm:grid-rows-[1fr_auto] gap-[var(--stroke-width)] bg-[var(--color-brand-border)] lg:border-l lg:border-r border-grid">

                    {/* Top Left: Vertical Bar (Hidden on Mobile) */}
                    <div className="hidden sm:flex flex-col items-center justify-center relative bg-[var(--color-brand-bg)] col-start-1 col-end-2 row-start-1 row-end-2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="transform -rotate-90 whitespace-nowrap flex items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-60 font-data"
                        >
                            <span>ESTD — 2018</span>
                            <div className="h-[1px] w-12 bg-current opacity-20" />
                            <span>Rīga</span>
                        </motion.div>
                    </div>

                    {/* Top Right: Heading Box */}
                    <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-center relative bg-[var(--color-brand-bg)] col-start-1 col-end-3 sm:col-start-2 sm:col-end-4 row-start-1 row-end-2">
                        <GridMarker className="bottom-[0px] right-[0px] hidden lg:block z-10" />
                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[clamp(3.5rem,7vw,7rem)] tracking-tight uppercase leading-[0.9]"
                        >
                            Pilna Servisa<br />
                            Pasākumu<br />
                            Kvartāls.
                        </motion.h1>
                    </div>

                    {/* Bottom Left: Subheading Box */}
                    <div className="p-8 md:p-12 flex flex-col justify-center bg-[var(--color-brand-bg)] col-start-1 col-end-2 sm:col-start-1 sm:col-end-3 row-start-2 row-end-3">
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-sm md:text-base max-w-sm leading-relaxed opacity-80"
                        >
                            No sapulcēm līdz 1500 viesu festivāliem. Kur viss nepieciešamais veiksmīgam pasākumam pieejams vienuviet.
                        </motion.p>
                    </div>

                    {/* Bottom Right: Square CTA Button */}
                    <div
                        className="relative w-[clamp(10rem,15vw,16rem)] bg-[var(--color-brand-bg)] flex items-center justify-center group cursor-pointer transition-colors duration-400 hover:bg-[var(--color-brand-accent)] col-start-2 col-end-3 sm:col-start-3 sm:col-end-4 row-start-2 row-end-3"
                        onClick={() => document.getElementById('venues')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        {/* padding-bottom aspect ratio enforcer */}
                        <div className="w-full pb-[100%]" />
                        <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                            <GridMarker className="top-[0px] left-[0px] hidden sm:block z-10" />
                            <span className="font-heading font-medium text-lg md:text-xl lg:text-2xl uppercase transition-transform duration-400 flex flex-col items-center group-hover:translate-y-3 relative text-center">
                                <ArrowDownIcon size={24} weight="light" className="absolute bottom-full mb-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400" />
                                Apskatīt Telpas
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="relative w-full h-[50vh] lg:h-full border-t lg:border-t-0 border-grid overflow-hidden">
                    <img
                        src={vefPromenadeHero}
                        alt="VEF Promenāde Hero"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
